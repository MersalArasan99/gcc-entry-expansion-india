(function () {
  "use strict";
  const D = window.GCC_DATA;
  const $ = (s) => document.querySelector(s);
  const LAKH = 1e5, CRORE = 1e7;

  // ---------- formatting ----------
  const inr = (rupees) => {
    if (rupees >= CRORE) return "₹" + (rupees / CRORE).toFixed(rupees >= 10 * CRORE ? 0 : 1) + " crore";
    if (rupees >= LAKH) return "₹" + (rupees / LAKH).toFixed(rupees >= 10 * LAKH ? 0 : 1) + " lakh";
    if (rupees > 0) return "₹" + Math.round(rupees).toLocaleString("en-IN");
    return "₹0";
  };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const src = (id, label) => {
    const s = D.SOURCES[id];
    if (!s) return "";
    return `<a class="srclink" href="${esc(s.url)}" target="_blank" rel="noopener" title="${esc(s.title)}">${esc(label || "Source")}</a>`;
  };
  const flag = (text) => `<span class="flag" tabindex="0" title="${esc(text)}">Verify</span>`;
  const sectorName = (id) => (D.SECTORS.find((s) => s.id === id) || { name: id }).name;

  // ---------- state ----------
  const state = { sector: "technology", size: 200, senior: 30, priority: "cost", forbes: false, sqft: 60, open: null, bench: null };

  // ---------- team model ----------
  function team(st, salSE, salSr) {
    const sr = Math.round(st.size * st.senior / 100);
    const jr = st.size - sr;
    const groups = [
      { count: sr, annual: salSr * LAKH },
      { count: jr, annual: salSE * LAKH }
    ].filter((g) => g.count > 0).map((g) => ({ ...g, monthly: g.annual / 12 }));
    const payroll = groups.reduce((a, g) => a + g.count * g.annual, 0);
    return { sr, jr, groups, payroll, blended: payroll / st.size };
  }

  // ---------- incentive estimators ----------
  // Each returns { total, year1, period, status, notes[] } in rupees.
  // status: eligible | check | no | none
  const EST = {
    none(p) {
      if (p.noPolicy) return { total: 0, year1: 0, period: "", status: "none", notes: ["No GCC-specific scheme to estimate."] };
      if (p.noPayroll) return { total: 0, year1: 0, period: "", status: "nopay", notes: ["Smaller support (skilling, interns, electricity duty) only."] };
      return { total: 0, year1: 0, period: "", status: "check", notes: ["Caps not published in sources we could read, so no estimate."] };
    },

    kaBeyond(p, st, t) {
      if (st.size < 100) return { total: 0, year1: 0, period: "", status: "no", notes: ["Needs 100+ employees."] };
      const perYear = st.size * 3000 * 12;
      return { total: perYear, year1: perYear, period: "per year (EPF only; duration not stated)", status: "eligible", notes: ["Rent support (50%, up to ₹2 crore) comes on top but depends on your lease."] };
    },

    mh(p, st, t, rentAnnual) {
      const notes = [];
      let cls = null;
      if (st.size >= 1000) cls = { name: "Ultra mega", rentCap: 4 * CRORE, capNote: true };
      else if (st.size >= 750) cls = { name: "Mega", rentCap: 4 * CRORE };
      else if (st.size >= 500) cls = { name: "Large", rentCap: 3 * CRORE };
      else if (st.size >= 250) cls = { name: "Medium", rentCap: 2 * CRORE };
      else if (st.size >= 100) cls = { name: "Small", rentCap: 1 * CRORE };

      // payroll: roles above ₹1 lakh/month, highest paid first, max 100 people
      let slots = 100, perMonth = 0, eligibleHeads = 0;
      [...t.groups].sort((a, b) => b.monthly - a.monthly).forEach((g) => {
        if (g.monthly <= LAKH || slots <= 0) return;
        const n = Math.min(g.count, slots);
        slots -= n; eligibleHeads += n;
        perMonth += n * Math.min(p.zoneRate * g.monthly, 50000);
      });
      const payroll3y = Math.min(5 * CRORE, perMonth * 36);
      if (eligibleHeads === 0) notes.push("No roles in your mix pay over ₹1 lakh a month, so payroll support is zero.");
      else notes.push(`${eligibleHeads} role${eligibleHeads > 1 ? "s" : ""} clear the ₹1 lakh/month floor.`);

      let rent5y = 0;
      if (cls && rentAnnual) {
        rent5y = Math.min(p.rentRate * rentAnnual * 5, cls.rentCap);
        notes.push(`Rent support assumes the ${cls.name} class and no capital subsidy.`);
      }
      if (!cls) {
        return { total: 0, year1: 0, period: "", status: "check", notes: ["Below the Small class: needs 100+ employees or ₹50 crore+ investment."] };
      }
      return { total: payroll3y + rent5y, year1: payroll3y * 0.30 + rent5y / 5, period: rentAnnual ? "over 3–5 years" : "over 3 years", status: "eligible", notes };
    },

    tn(p, st, t) {
      if (!st.forbes) return { total: 0, year1: 0, period: "", status: "no", notes: ["Parent must be on the Forbes Global 2000 or Fortune 1000. Tick the box if it is."] };
      if (st.size < 200) return { total: 0, year1: 0, period: "", status: "no", notes: ["Needs at least 200 direct jobs."] };
      const elig = t.groups.filter((g) => g.monthly > LAKH);
      const annual = elig.reduce((a, g) => a + g.count * g.annual, 0);
      const heads = elig.reduce((a, g) => a + g.count, 0);
      const notes = [heads ? `${heads} roles clear the ₹1 lakh/month floor.` : "No roles in your mix pay over ₹1 lakh a month.", "Caps not stated in sources read.", "Scheme runs to March 2027."];
      return { total: annual * 0.6, year1: annual * 0.3, period: "over 3 years", status: heads ? "eligible" : "check", notes };
    },

    up(p, st, t, rentAnnual) {
      if (st.size < p.minL1) return { total: 0, year1: 0, period: "", status: "check", notes: [`Below Level-1 headcount (${p.minL1}+). Can still qualify through the investment route.`] };
      const adv = st.size >= p.minAdv;
      const unitCap = (adv ? 20 : 10) * CRORE;
      const years = p.slabs.map(([rate, capL]) => Math.min(unitCap, t.groups.reduce((a, g) => a + g.count * Math.min(rate * g.annual, capL * LAKH), 0)));
      const payroll = years.reduce((a, b) => a + b, 0);
      const opex = rentAnnual ? 0.20 * rentAnnual : 0;
      return {
        total: payroll + opex * 5, year1: years[0] + opex,
        period: `over ${p.slabs.length}–5 years`,
        status: "eligible",
        notes: [`${adv ? "Advanced" : "Level-1"} GCC.`, "Payroll support starts once employees complete a year on roll.", rentAnnual ? "Includes 20% of lease rent for 5 years." : ""].filter(Boolean)
      };
    },

    hr(p, st, t, rentAnnual) {
      const epf = st.size * 25000;
      const opex = rentAnnual ? Math.min(0.5 * 0.75 * rentAnnual, 75000 * st.size) : 0;
      return {
        total: (epf + opex) * 5, year1: epf + opex, period: "over 5 years",
        status: "check",
        notes: ["EPF figure is the upper bound (₹25,000 per person a year).", "Captive centres starting on or after 1 Jan 2026 only.", "Local-hiring payroll subsidy not estimated."]
      };
    },

    gj(p, st, t) {
      if (st.size < 50) return { total: 0, year1: 0, period: "", status: "no", notes: ["Needs 50+ employees on payroll."] };
      const egi = t.groups.reduce((a, g) => a + g.count * Math.min(0.5 * g.monthly, 50000), 0);
      return { total: egi, year1: egi, period: "one-time hiring incentive", status: "eligible", notes: ["Uses the lower male-employee cap.", "EPF and 15% operating-cost support come on top but aren't estimated (no Ahmedabad rent data)."] };
    }
  };

  function estimate(policyKey, st, salSE, salSr, rentPerSqft) {
    const p = D.POLICIES.find((x) => x.key === policyKey);
    const t = team(st, salSE, salSr);
    const rentAnnual = rentPerSqft ? st.size * st.sqft * rentPerSqft * 12 : 0;
    const r = EST[p.estimator](p, st, t, rentAnnual);
    return { ...r, policy: p };
  }

  function cityIncentive(city, st) {
    if (city.policyKey === "NCR") {
      const a = estimate("HR_GGN", st, city.salarySE, city.salarySenior, city.rent);
      const b = estimate("UP_GBN", st, city.salarySE, city.salarySenior, city.rent);
      return a.total >= b.total ? { ...a, via: "Gurugram (Haryana)" } : { ...b, via: "Noida (Uttar Pradesh)" };
    }
    return estimate(city.policyKey, st, city.salarySE, city.salarySenior, city.rent);
  }

  // ---------- city ranking ----------
  const FACTORS = [
    { id: "cost", name: "Cost per person", color: "var(--f-cost)" },
    { id: "incentives", name: "State incentives", color: "var(--f-incentives)" },
    { id: "sector", name: "Sector fit", color: "var(--f-sector)" },
    { id: "depth", name: "Talent pool", color: "var(--f-depth)" },
    { id: "peers", name: "Existing GCCs", color: "var(--f-peers)" },
    { id: "availability", name: "Office availability", color: "var(--f-availability)" }
  ];
  const WEIGHTS = {
    cost:   { cost: .40, incentives: .15, sector: .15, depth: .10, peers: .10, availability: .10 },
    talent: { cost: .10, incentives: .05, sector: .25, depth: .30, peers: .20, availability: .10 },
    speed:  { cost: .10, incentives: .05, sector: .20, depth: .20, peers: .20, availability: .25 }
  };

  function rankCities(st) {
    const rows = D.CITIES.map((c) => {
      const t = team(st, c.salarySE, c.salarySenior);
      const rentAnnual = st.size * st.sqft * c.rent * 12;
      const inc = cityIncentive(c, st);
      return {
        city: c, t, rentAnnual, inc,
        raw: {
          cost: (t.payroll + rentAnnual) / st.size,
          incentives: inc.total / st.size,
          sector: c.sectors[st.sector] || 0,
          depth: c.trackedM,
          peers: c.verifiedGCCs,
          availability: c.vacancy
        }
      };
    });

    const anySector = rows.some((r) => r.raw.sector > 0);
    let w = { ...WEIGHTS[st.priority] };
    if (!anySector) { // redistribute sector weight when no city specialises in it
      const extra = w.sector; w.sector = 0;
      const rest = Object.keys(w).filter((k) => k !== "sector");
      const sum = rest.reduce((a, k) => a + w[k], 0);
      rest.forEach((k) => { w[k] += extra * w[k] / sum; });
    }

    // Ratio to the best city: best = 1, others proportionally lower. Softer than
    // min-max, which would hand the weakest city a flat zero.
    const norm = (id, lowerBetter) => {
      const vals = rows.map((r) => r.raw[id]);
      const min = Math.min(...vals), max = Math.max(...vals);
      rows.forEach((r) => {
        const v = r.raw[id];
        let s;
        if (lowerBetter) s = v > 0 ? min / v : 1;
        else s = max > 0 ? v / max : 0;
        r.norm = r.norm || {}; r.norm[id] = s;
      });
    };
    norm("cost", true); norm("incentives"); norm("depth"); norm("peers"); norm("availability");
    rows.forEach((r) => { r.norm.sector = r.raw.sector / 2; });

    rows.forEach((r) => {
      r.contrib = {};
      FACTORS.forEach((f) => { r.contrib[f.id] = w[f.id] * r.norm[f.id] * 100; });
      r.score = Object.values(r.contrib).reduce((a, b) => a + b, 0);
    });
    rows.sort((a, b) => b.score - a.score);
    return { rows, weights: w, anySector };
  }

  // ---------- render: cities ----------
  function renderCities() {
    const { rows, weights, anySector } = rankCities(state);
    const pr = { cost: "with cost first", talent: "with talent depth first", speed: "aiming for the fastest start" }[state.priority];
    $("#verdict").textContent = `For a ${state.size}-person ${sectorName(state.sector).toLowerCase()} team ${pr}, ${rows[0].city.name} comes out ahead, followed by ${rows[1].city.name} and ${rows[2].city.name}.`;

    $("#legend").innerHTML = FACTORS.filter((f) => weights[f.id] > 0).map((f) =>
      `<li><span class="swatch" style="background:${f.color}"></span>${f.name} <span>(${Math.round(weights[f.id] * 100)}%)</span></li>`).join("");

    const peersFor = (c) => D.PIPELINE.filter((p) => p.city === c.name || (c.id === "delhi" && /Delhi|Noida|Gurugram/.test(p.city)))
      .filter((p) => p.sector === state.sector).map((p) => `${p.company} (${p.stage.toLowerCase()}, ${p.date})`);

    $("#ranking").innerHTML = rows.map((r, i) => {
      const c = r.city, open = state.open === c.id;
      const segs = FACTORS.map((f) => r.contrib[f.id] > 0.05
        ? `<span class="seg" style="width:${r.contrib[f.id]}%;background:${f.color}" title="${f.name}: ${r.contrib[f.id].toFixed(1)} of ${Math.round(weights[f.id] * 100)} points"></span>` : "").join("");
      const peers = peersFor(c);
      const inc = r.inc;
      const incLine = inc.total > 0
        ? `${inc.via ? inc.via + ": " : ""}about <strong>${inr(inc.total)}</strong> ${inc.period}, roughly ${inr(inc.year1)} in year one.`
        : `${inc.via ? inc.via + ": " : ""}${inc.notes[0] || "No estimate."}`;
      return `<li class="city${i === 0 ? " top" : ""}">
        <button class="city-head" aria-expanded="${open}" aria-controls="body-${c.id}" data-city="${c.id}">
          <span class="rank">${i + 1}</span>
          <span class="city-name">${esc(c.name)}<small>${esc(c.state)}</small></span>
          <span class="bar" role="img" aria-label="Score ${Math.round(r.score)} out of 100">${segs}</span>
          <span class="score">${Math.round(r.score)}</span>
          <svg class="chev" viewBox="0 0 14 14" aria-hidden="true"><path d="M2 5l5 5 5-5" fill="none" stroke="currentColor" stroke-width="2"/></svg>
        </button>
        <div class="city-body" id="body-${c.id}" ${open ? "" : "hidden"}>
          <dl class="figures">
            <div class="figure"><dt>Average pay, your mix</dt><dd>₹${(r.t.blended / LAKH).toFixed(1)}L <span class="unit">a year</span></dd><span class="src">${src(c.salarySrc, "Flexiple talent data")}</span></div>
            <div class="figure"><dt>Grade A rent</dt><dd>₹${c.rent} <span class="unit">per sq ft a month</span></dd><span class="src">${src(c.rentSrc, "CRE Matrix, Q1 2026")}</span></div>
            <div class="figure"><dt>Office vacancy</dt><dd>${c.vacancy}%</dd><span class="src">${src(c.rentSrc, "CRE Matrix, Q1 2026")}</span></div>
            <div class="figure"><dt>Tech professionals tracked</dt><dd>${c.trackedM}M</dd><span class="src">${src(c.trackedSrc, "Flexiple talent data")}</span></div>
            <div class="figure"><dt>Verified GCCs here</dt><dd>${c.verifiedGCCs}</dd><span class="src">${src(c.verifiedSrc, "Flexiple directory")}</span></div>
            <div class="figure"><dt>Share of GCC activity</dt><dd style="font-size:15px;font-weight:600">${esc(c.share)}</dd><span class="src">${src(c.shareSrc, "JLL India")}</span></div>
          </dl>
          <p class="costline">Year-one run rate for ${state.size} people: <strong>${inr(r.t.payroll)}</strong> pay plus <strong>${inr(r.rentAnnual)}</strong> rent at ${state.sqft} sq ft each. State support: ${incLine} ${src(inc.policy.src, inc.policy.policy)}</p>
          <p class="city-notes"><strong>Known for:</strong> ${esc(c.sectorNote)}. ${(c.sectors[state.sector] ? "" : anySector ? `JLL doesn't name ${sectorName(state.sector).toLowerCase()} as a strength here.` : "")} ${src(c.sectorSrc, "JLL India")}</p>
          <p class="peers">${peers.length ? `<strong>Recent ${sectorName(state.sector).toLowerCase()} moves here:</strong> ${esc(peers.join("; "))}.` : `No ${sectorName(state.sector).toLowerCase()} announcements in our sample for ${esc(c.name)}.`}</p>
        </div>
      </li>`;
    }).join("");

    $("#method").innerHTML = `
      <p>Each city gets a 0–1 score on six factors, measured against the best of the six cities (the best scores 1, a city half as good scores 0.5), then weighted by what you said matters most. The bar shows how many points each factor contributed.</p>
      <table><thead><tr><th>Factor</th><th>Measured by</th><th>Weight now</th></tr></thead><tbody>
        <tr><td>Cost per person</td><td>Your team's pay plus office rent, per head (lower is better)</td><td>${Math.round(weights.cost * 100)}%</td></tr>
        <tr><td>State incentives</td><td>Estimated payroll-, EPF- and rent-linked support per head</td><td>${Math.round(weights.incentives * 100)}%</td></tr>
        <tr><td>Sector fit</td><td>Whether JLL names your sector as a leading (1) or present (0.5) strength</td><td>${Math.round(weights.sector * 100)}%</td></tr>
        <tr><td>Talent pool</td><td>Professionals tracked by Flexiple in the city</td><td>${Math.round(weights.depth * 100)}%</td></tr>
        <tr><td>Existing GCCs</td><td>Centres Flexiple has verified in the city</td><td>${Math.round(weights.peers * 100)}%</td></tr>
        <tr><td>Office availability</td><td>Grade A vacancy rate (more vacancy, faster to find space)</td><td>${Math.round(weights.availability * 100)}%</td></tr>
      </tbody></table>
      ${anySector ? "" : `<p>No city has a published specialisation in ${sectorName(state.sector).toLowerCase()}, so that weight is spread across the other factors.</p>`}`;
  }

  // ---------- render: incentives ----------
  function renderIncentives() {
    const bench = D.CITIES.find((c) => c.id === state.bench) || rankCities(state).rows[0].city;
    $("#incTeam").textContent = `${state.size} people at ${bench.name} salaries`;
    const rows = D.POLICIES.map((p) => {
      const ownCity = D.CITIES.find((c) => c.policyKey === p.key || (c.policyKey === "NCR" && (p.key === "HR_GGN" || p.key === "UP_GBN")));
      const rent = ownCity ? ownCity.rent : null;
      return estimate(p.key, state, bench.salarySE, bench.salarySenior, rent);
    }).sort((a, b) => b.total - a.total || (a.status === "none") - (b.status === "none"));

    const statusText = { eligible: "Likely eligible", check: "Check conditions", no: "Not eligible as set", none: "No GCC policy", nopay: "No payroll support here" };
    $("#incentives").innerHTML = rows.map((r) => {
      const p = r.policy;
      const extra = (p.extraSrc || []).map((s) => src(s, D.SOURCES[s].title.split(" — ")[0])).join(", ");
      return `<article class="policy">
        <div>
          <h3>${esc(p.state)}</h3>
          <div class="zone">${esc(p.zone)}</div>
          <div class="pname">${esc(p.policy)}<br>${src(p.src, "Policy source")}${extra ? ", " + extra : ""}</div>
        </div>
        <div>
          <p class="headline">${esc(p.headline)}</p>
          <ul>${p.levers.map((l) => `<li>${esc(l)}</li>`).join("")}</ul>
          <p class="conds">${esc(p.conditions)} ${(p.verify || []).map(flag).join(" ")}</p>
        </div>
        <div class="estimate">
          <span class="chip ${r.status}">${statusText[r.status]}</span>
          ${r.total > 0 ? `<span class="amt">${inr(r.total)}</span><span class="per">${esc(r.period)}</span><span class="y1">≈ ${inr(r.year1)} in year one</span>` : `<span class="amt">—</span>`}
          <div class="notes">${r.notes.map(esc).join("<br>")}</div>
        </div>
      </article>`;
    }).join("");
  }

  // ---------- render: pipeline ----------
  function renderPipeline() {
    const sec = $("#pipeSector").value, city = $("#pipeCity").value;
    const list = D.PIPELINE.filter((p) => (sec === "all" || p.sector === sec) && (city === "all" || p.city === city));
    const inSector = D.PIPELINE.filter((p) => p.sector === state.sector).length;
    $("#pipeIntro").innerHTML = `${D.PIPELINE.length} recent announcements traced to a source. ${inSector} are in ${esc(sectorName(state.sector).toLowerCase())}.`;
    $("#pipeline").innerHTML = list.length ? list.map((p) => `<tr>
        <td class="co">${esc(p.company)}<small>${esc(p.hq)}, ${esc(sectorName(p.sector))}</small></td>
        <td>${esc(p.city)}</td>
        <td>${esc(p.size)}</td>
        <td><span class="stage ${esc(p.stage.split(" ")[0])}">${esc(p.stage)}</span></td>
        <td>${esc(p.date)} ${p.verify ? flag(p.verify) : ""}</td>
        <td>${p.partner ? esc(p.partner) + (p.model ? `<br><small>${esc(p.model)}</small>` : "") : (p.model ? `<small>${esc(p.model)}</small>` : "—")}</td>
        <td>${src(p.src)}</td>
      </tr>`).join("") : `<tr><td colspan="7" class="empty">Nothing in our sample matches. Try all sectors or all cities.</td></tr>`;
  }

  // ---------- render: providers ----------
  function renderProviders() {
    $("#providers").innerHTML = D.PROVIDERS.map((v) => {
      const clientRows = v.clients.map((name) => {
        const p = D.PIPELINE.find((x) => x.company === name);
        if (!p) return `<li>${esc(name)}</li>`;
        const where = p.city !== "Not stated" ? `, ${esc(p.city)}` : "";
        const when = p.date !== "Not stated" ? ` (${esc(p.date)})` : "";
        return `<li>${esc(name)}${where}${when} ${src(p.src)}</li>`;
      }).join("");
      const claims = [...v.claims, ...v.recognition].map((c) => `<li>${esc(c.text)} ${src(c.src)}</li>`).join("");
      return `<article class="provider">
        <div>
          <h3>${esc(v.name)}</h3>
          <div class="ptype">${esc(v.type)}</div>
          <span class="ev ${v.evidence}">${v.evidence === "named" ? "Named clients in press" : "Own claims only"}</span>
        </div>
        <div><p class="col-label">What they say</p>${claims ? `<ul>${claims}</ul>` : `<p class="none">No public claims collected.</p>`}</div>
        <div><p class="col-label">Named GCC clients in independent press</p>${clientRows ? `<ul>${clientRows}</ul>` : `<p class="none">None found in our sample.</p>`}</div>
      </article>`;
    }).join("");
    $("#everestLink").href = D.SOURCES.everest.url;
  }

  // ---------- render: about ----------
  function renderAbout() {
    $("#counts").innerHTML = D.COUNTS.map((c) => `<div class="count"><span class="n">${esc(c.n)}</span><span class="who">${esc(c.who)}</span><span class="what">${esc(c.what)} ${src(c.src)}</span></div>`).join("");
    const v = [];
    D.POLICIES.forEach((p) => (p.verify || []).forEach((t) => v.push(`${p.state} (${p.zone.split(":")[0]}): ${t}`)));
    D.PIPELINE.forEach((p) => p.verify && v.push(`${p.company}: ${p.verify}`));
    $("#verifyList").innerHTML = v.map((t) => `<li>${esc(t)}</li>`).join("");
    $("#sources").innerHTML = Object.values(D.SOURCES).map((s) => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.title)}</a></li>`).join("");
  }

  // ---------- wiring ----------
  function renderAll() {
    $("#sizeOut").textContent = state.size;
    $("#seniorOut").textContent = state.senior + "%";
    $("#sqftOut").textContent = state.sqft + " sq ft";
    renderCities(); renderIncentives(); renderPipeline();
  }

  function init() {
    $("#asof").textContent = D.asOf;
    $("#sector").innerHTML = D.SECTORS.map((s) => `<option value="${s.id}">${esc(s.name)}</option>`).join("");
    $("#benchCity").innerHTML = `<option value="">Top-ranked city</option>` + D.CITIES.map((c) => `<option value="${c.id}">${esc(c.name)}</option>`).join("");
    $("#pipeSector").innerHTML = `<option value="all">All sectors</option>` + D.SECTORS.map((s) => `<option value="${s.id}">${esc(s.name)}</option>`).join("");
    const cities = [...new Set(D.PIPELINE.map((p) => p.city))].sort();
    $("#pipeCity").innerHTML = `<option value="all">All cities</option>` + cities.map((c) => `<option>${esc(c)}</option>`).join("");

    const form = $("#form");
    form.addEventListener("input", () => {
      state.sector = $("#sector").value;
      state.size = +$("#size").value;
      state.senior = +$("#senior").value;
      state.priority = form.querySelector('input[name="priority"]:checked').value;
      state.forbes = $("#forbes").checked;
      state.sqft = +$("#sqft").value;
      renderAll();
    });
    form.addEventListener("submit", (e) => e.preventDefault());
    $("#sector").addEventListener("change", () => { $("#pipeSector").value = $("#sector").value; renderPipeline(); });
    $("#benchCity").addEventListener("change", (e) => { state.bench = e.target.value || null; renderIncentives(); });
    $("#pipeSector").addEventListener("change", renderPipeline);
    $("#pipeCity").addEventListener("change", renderPipeline);

    $("#ranking").addEventListener("click", (e) => {
      const b = e.target.closest(".city-head");
      if (!b) return;
      state.open = state.open === b.dataset.city ? null : b.dataset.city;
      renderCities();
      const again = document.querySelector(`.city-head[data-city="${b.dataset.city}"]`);
      if (again) again.focus();
    });

    // tabs with arrow-key support
    const tabs = [...document.querySelectorAll('[role="tab"]')];
    const select = (tab) => {
      tabs.forEach((t) => {
        const on = t === tab;
        t.setAttribute("aria-selected", on);
        t.tabIndex = on ? 0 : -1;
        document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
      });
      history.replaceState(null, "", "#" + tab.id.replace("tab-", ""));
    };
    tabs.forEach((t, i) => {
      t.addEventListener("click", () => select(t));
      t.addEventListener("keydown", (e) => {
        if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
        const n = tabs[(i + (e.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length];
        n.focus(); select(n);
      });
    });
    const hash = location.hash.slice(1);
    const fromHash = tabs.find((t) => t.id === "tab-" + hash);
    if (fromHash) select(fromHash);

    $("#pipeSector").value = state.sector;
    state.open = null;
    renderProviders(); renderAbout(); renderAll();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
