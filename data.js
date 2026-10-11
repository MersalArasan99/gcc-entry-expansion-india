// GCC Compass dataset.
// Every figure carries a source id (see SOURCES). Figures we could not confirm
// against a primary page carry verify: true and are shown with a "Verify" flag.
// Researched and structured with Claude (Anthropic) from public pages, Oct 2026.

window.GCC_DATA = {
  asOf: "11 Oct 2026",

  SOURCES: {
    flx_stats:  { title: "Flexiple — India GCC statistics (salary medians, tracked professionals, as of Aug 2026)", url: "https://flexiple.com/gcc/statistics" },
    flx_blr:    { title: "Flexiple — GCC companies in Bengaluru", url: "https://flexiple.com/gcc/bengaluru" },
    flx_hyd:    { title: "Flexiple — GCC companies in Hyderabad", url: "https://flexiple.com/gcc/hyderabad" },
    flx_pune:   { title: "Flexiple — GCC companies in Pune", url: "https://flexiple.com/gcc/pune" },
    flx_che:    { title: "Flexiple — GCC companies in Chennai", url: "https://flexiple.com/gcc/chennai" },
    flx_mum:    { title: "Flexiple — GCC companies in Mumbai", url: "https://flexiple.com/gcc/mumbai" },
    flx_del:    { title: "Flexiple — GCC companies in Delhi", url: "https://flexiple.com/gcc/delhi" },
    flx_gcc:    { title: "Flexiple — GCC service page", url: "https://flexiple.com/gcc" },
    flx_dir:    { title: "Flexiple — GCC directory (536 verified)", url: "https://flexiple.com/gcc/india" },
    crem:       { title: "CRE Matrix / CREDAI — India office market Q1 CY26 (Grade A rent, vacancy)", url: "https://www.crematrix.com/blog/india-office-market-q1-cy26-key-trends-and-city-wise-performance/" },
    jll:        { title: "JLL India — GCC leasing hits record 31 mn sq ft in 2025 (city shares, sector strengths)", url: "https://www.jll.com/en-in/newsroom/india-s-gcc-expansion-hits-record-31-million" },
    zinnov:     { title: "Zinnov–Nasscom — GCC Landscape in India 2026", url: "https://zinnov.com/centers-of-excellence/zinnov-nasscom-india-gcc-landscape-2026-report/" },
    ficci:      { title: "FICCI–Anarock via Outlook Business — 1,700+ GCCs at end-2024", url: "https://www.outlookbusiness.com/news/market-size-of-gccs-in-india-may-jump-to-110-bn-in-2030-ficci-anarock" },
    aim:        { title: "AIM Research — GCC Explorer (~1,400 GCCs)", url: "https://reports.aimresearch.co/?p=4006" },
    oceanfrogs: { title: "OceanFrogs — GCC intel (1,400 verified; 2,800+ shown)", url: "https://oceanfrogs.com/intel/gcc/" },
    rsm_gj:     { title: "Gujarat GCC Policy 2025–30 (RSM India summary of the policy)", url: "https://www.rsm.global/india/sites/default/files/media/publications/2025/Gujarat%20GCC%20Policy%202025_A%20Landmark%20Initiative%20to%20Attract%20Global%20Enterprises.pdf" },
    deloitte_ka:{ title: "Karnataka GCC Policy 2024–29 (Deloitte tax alert)", url: "https://www2.deloitte.com/content/dam/Deloitte/in/Documents/tax/Tax%20Alerts/in-deloitte-tax-alert-karnataka-gcc-policy-new-chapter-for-gcc-sector-paving-way-for-growth-jobs-statewide-prosperity-noexp.pdf" },
    kpmg_mh:    { title: "Maharashtra GCC Policy 2025 (KPMG flash news)", url: "https://www.in.kpmg.com/taxflashnews/KPMG-Flash-News-Maharshtra-GCC-policy-2025.pdf" },
    icai:       { title: "ICAI — State GCC policies overview", url: "https://global.icai.org/state-policy.html" },
    swarajya_tn:{ title: "Swarajya — Tamil Nadu's payroll-subsidy scheme for GCCs", url: "https://swarajyamag.com/amp/story/tamil-nadu%2Ftamil-nadu-announces-a-pli-like-scheme-but-for-global-capability-centres" },
    invest_up:  { title: "Invest UP — UP GCC Policy 2024 (official)", url: "https://invest.up.gov.in/up-gcc-policy-2024/" },
    gt_hr:      { title: "Haryana GCC Policy 2026 (Grant Thornton alert)", url: "https://www.grantthornton.in/globalassets/1.-member-firms/india/assets/pdfs/alerts/haryana-global-capability-centres-policy-2026.pdf" },
    nasscom_mp: { title: "Nasscom community — Madhya Pradesh GCC policy summary", url: "https://community.nasscom.in/communities/global-capability-centers/madhya-pradesh-global-capability-centers-gcc-policy-2024" },
    siasat_ts:  { title: "Siasat — New Telangana GCC policy being drafted (Sep 2026)", url: "https://www.siasat.com/new-telangana-gcc-policy-to-focus-on-ai-space-semiconductors-3543873/" },
    channeliam: { title: "Channel IAM — Starbucks technology hub, Chennai (Sep 2026)", url: "https://en.channeliam.com/2026/09/22/starbucks-technology-hub-chennai-jobs-tamil-nadu/" },
    isg_ansr:   { title: "The Week — ANSR named Leader, ISG Provider Lens 2025", url: "https://www.theweek.in/wire-updates/business/2025/04/15/dcm124-ansr.html" },
    uni_ansr:   { title: "UNI — ANSR to set up 200 new GCCs (170 built so far)", url: "https://www.uniindia.com/~/ansr-to-set-up-200-new-gccs-in-next-5-year-globally-including-india/Business%20Economy/news/3513828.html" },
    bog_setup:  { title: "Business of GCC — GCC setup firms (ANSR funding, Inductus)", url: "https://www.businessofgcc.com/gcc-partners/gcc-setup-services" },
    zinnov_setup:{ title: "Zinnov — How to set up a GCC in India (220+ GCCs set up)", url: "https://zinnov.com/centers-of-excellence/how-to-set-up-a-gcc-in-india-a-four-phase-approach-blog/" },
    hexaware:   { title: "Outlook Business — Hexaware buys SMC Squared (Jul 2025)", url: "https://www.outlookbusiness.com/corporate/hexaware-to-buy-smc-squared-in-1029-crore-deal-to-boost-gcc-20-unit" },
    scalers:    { title: "The Scalers — 10 best companies to build a GCC in India", url: "https://thescalers.com/best-companies-to-help-you-build-a-gcc-in-india/" },
    everest:    { title: "Everest Group — GCC Setup PEAK Matrix 2025 (32 providers, members only)", url: "https://www.everestgrp.com/report/egr-2025-34-r-7666" },
    // pipeline
    p_truist:   { title: "The People's Board — Infosys wins Truist GCC deal, Hyderabad", url: "https://www.thepeoplesboard.com/?p=17930" },
    p_cibc:     { title: "The People's Board — CIBC to establish Hyderabad GCC", url: "https://www.thepeoplesboard.com/?p=19007" },
    p_citizens: { title: "Let's Data Science — Citizens Financial opens Hyderabad GCC", url: "https://letsdatascience.com/news/citizens-financial-opens-hyderabad-gcc-targets-1000-hires-1ba29dda" },
    p_vanguard: { title: "The Realty Today — Vanguard first GCC in Hyderabad", url: "https://therealtytoday.com/news/vanguard-to-set-up-first-global-capability-center-in-hyderabad-plans-to-hire-2500-employees" },
    p_zurich:   { title: "Reinsurance News — Zurich capability centre, Hyderabad", url: "https://reinsurancene.ws/zurich-appoints-amit-kalra-to-lead-new-global-capability-center-in-india/" },
    p_standard: { title: "Reinsurance Asia — The Standard opens GCC in Bengaluru", url: "https://reinasia.com/us-insurance-firm-the-standard-opens-global-capability-centre-in-india/" },
    p_entre:    { title: "Entrepreneur India — July 2025 wave of GCC setups", url: "https://india.entrepreneur.com/?p=84686" },
    p_lilly:    { title: "Fierce Pharma — Lilly capability center, Hyderabad", url: "https://www.fiercepharma.com/pharma/eli-lilly-doubles-down-its-presence-india-new-capability-center" },
    p_depuy:    { title: "BioSpectrum — DePuy Synthes GCC in Bengaluru", url: "https://www.biospectrumindia.com/news/104/28261/depuy-synthes-to-establish-global-capability-centre-in-bengaluru.html" },
    p_merck:    { title: "CXO Digital Pulse — Merck GCC campus, Bengaluru", url: "https://www.cxodigitalpulse.com/?p=56882" },
    p_zeiss:    { title: "Verdict — Carl Zeiss first GCC in India", url: "https://www.verdict.co.uk/zeiss-global-capability-centre-india/" },
    p_mcd:      { title: "News On AIR — Telangana MoU with McDonald's", url: "https://www.newsonair.gov.in/telangana-signs-mou-with-mcdonalds-to-establish-global-capability-centre-in-hyderabad" },
    p_nestle:   { title: "Nestlé India — Nestlé Business Solutions picks Hyderabad", url: "https://www.nestle.in/media/specialannouncements/nestl%C3%A9-business-solutions-announces-hyderabad-location-its-new-global-capability-center-india" },
    p_southwest:{ title: "UNI — Southwest Airlines innovation centre, Hyderabad", url: "https://www.uniindia.com/hyderabad-to-be-key-global-technology-hub-for-southwest-airlines-says-cio-lauren-woods/south/news/3849164.html" },
    p_tk:       { title: "Autocar Pro — thyssenkrupp engineering centre, Pune", url: "https://www.autocarpro.in/news/thyssenkrupp-automotive-technology-inaugurates-engineering-center-in-pune-135132?amp=1" },
    p_generac:  { title: "The Machine Maker — Generac India GCC, Pune", url: "https://themachinemaker.com/news/generac-launches-india-gcc-in-pune/" },
    p_cummins:  { title: "Autocar Pro — Cummins first IT GCC, Pune", url: "https://www.autocarpro.in/news/cummins-india-opens-its-first-it-gcc-in-pune-121510" },
    p_acumatica:{ title: "CXOToday — Acumatica opens GCC in Hyderabad", url: "https://cxotoday.com/media-coverage/acumatica-opens-global-capability-center-in-hyderabad-india/" },
    p_digikey:  { title: "CRN India — Digi-Key GCC in Bengaluru", url: "https://www.crn.in/news/digi-key-electronics-launches-global-capability-center-in-bengaluru" },
    p_bestbuy:  { title: "5paisa — TCS takes on Best Buy's India GCC", url: "https://www.5paisa.com/blog/tcs-best-buy-india-gcc-deal" }
  },

  SECTORS: [
    { id: "technology",   name: "Technology & software" },
    { id: "engineering",  name: "Engineering & manufacturing" },
    { id: "bfsi",         name: "Banking, finance & insurance" },
    { id: "healthcare",   name: "Healthcare & pharma" },
    { id: "retail",       name: "Retail & consumer" },
    { id: "professional", name: "Professional services" },
    { id: "energy",       name: "Energy" },
    { id: "telecom",      name: "Telecom & media" }
  ],

  // Sector strength per city, from JLL India (2026). 2 = named as a leading/primary
  // sector for the city, 1 = named as present, absent = not named by JLL.
  CITIES: [
    {
      id: "bengaluru", name: "Bengaluru", state: "Karnataka", policyKey: "KA_BLR",
      salarySE: 15.7, salarySenior: 32.5, salarySrc: "flx_stats",
      trackedM: 7.1, trackedSrc: "flx_stats",
      verifiedGCCs: 437, verifiedSrc: "flx_blr",
      rent: 132.6, vacancy: 11.4, rentSrc: "crem",
      share: "34–39% of national GCC activity; 900+ GCC units", shareSrc: "jll",
      sectors: { technology: 2, engineering: 2, bfsi: 1, retail: 1 }, sectorNote: "Tech, engineering R&D and BFSI; retail operations", sectorSrc: "jll"
    },
    {
      id: "hyderabad", name: "Hyderabad", state: "Telangana", policyKey: "TS",
      salarySE: 10.4, salarySenior: 24.2, salarySrc: "flx_stats",
      trackedM: 5.3, trackedSrc: "flx_stats",
      verifiedGCCs: 299, verifiedSrc: "flx_hyd",
      rent: 76.8, vacancy: 24.2, rentSrc: "crem",
      share: "20–23% of India's GCC market", shareSrc: "jll",
      sectors: { healthcare: 2, technology: 2, bfsi: 1 }, sectorNote: "Healthcare and life sciences lead; tech, semiconductors, BFSI analytics", sectorSrc: "jll"
    },
    {
      id: "pune", name: "Pune", state: "Maharashtra", policyKey: "MH_Z1",
      salarySE: 9.5, salarySenior: 22.3, salarySrc: "flx_stats",
      trackedM: 2.4, trackedSrc: "flx_stats",
      verifiedGCCs: 169, verifiedSrc: "flx_pune",
      rent: 90.2, vacancy: 15.5, rentSrc: "crem",
      share: "15–20% of national GCC activity (2022–25)", shareSrc: "jll",
      sectors: { engineering: 2, bfsi: 2, technology: 1 }, sectorNote: "Automotive, engineering and BFSI", sectorSrc: "jll"
    },
    {
      id: "chennai", name: "Chennai", state: "Tamil Nadu", policyKey: "TN",
      salarySE: 7.6, salarySenior: 19.1, salarySrc: "flx_stats",
      trackedM: 4.1, trackedSrc: "flx_stats",
      verifiedGCCs: 244, verifiedSrc: "flx_che",
      rent: 83.3, vacancy: 11.3, rentSrc: "crem",
      share: "No national share published by JLL", shareSrc: "jll",
      sectors: { engineering: 2, bfsi: 1, technology: 1 }, sectorNote: "Manufacturing and automotive hub; IT, BFSI and ER&D", sectorSrc: "jll"
    },
    {
      id: "mumbai", name: "Mumbai", state: "Maharashtra", policyKey: "MH_Z1",
      salarySE: 9.7, salarySenior: 22.8, salarySrc: "flx_stats",
      trackedM: 5.8, trackedSrc: "flx_stats",
      verifiedGCCs: 283, verifiedSrc: "flx_mum",
      rent: 170.8, vacancy: 13.6, rentSrc: "crem",
      share: "No national share published by JLL", shareSrc: "jll",
      sectors: { bfsi: 2 }, sectorNote: "Banking and financial services", sectorSrc: "jll"
    },
    {
      id: "delhi", name: "Delhi NCR", state: "Haryana (Gurugram) or Uttar Pradesh (Noida)", policyKey: "NCR",
      salarySE: 14.1, salarySenior: 24.0, salarySrc: "flx_stats",
      trackedM: 5.0, trackedSrc: "flx_stats",
      verifiedGCCs: 277, verifiedSrc: "flx_del",
      rent: 102.9, vacancy: 16.2, rentSrc: "crem",
      share: "No national share published by JLL", shareSrc: "jll",
      sectors: { professional: 2, healthcare: 1, retail: 1 }, sectorNote: "Corporate services hub; healthcare; e-commerce and retail", sectorSrc: "jll"
    }
  ],

  // State policies, normalised. "estimator" names a function in app.js that turns
  // the user's team into an indicative payroll- and rent-linked figure.
  POLICIES: [
    {
      key: "KA_BLR", state: "Karnataka", zone: "Bengaluru", city: "Bengaluru",
      policy: "Karnataka GCC Policy 2024–29", src: "deloitte_ka", estimator: "none", noPayroll: true,
      headline: "No payroll or rent support inside Bengaluru",
      levers: [
        "Electricity duty: 100% reimbursed",
        "Skilling: 20% of cost, up to ₹36,000 per graduate (max 100 people or 15% of staff)",
        "Interns: 50% of stipend, up to ₹5,000 a month for 3 months",
        "Domestic patents: 50% of filing fee, up to ₹2 lakh"
      ],
      conditions: "Rent, EPF and recruitment support are reserved for centres Beyond Bengaluru."
    },
    {
      key: "KA_BB", state: "Karnataka", zone: "Beyond Bengaluru (e.g. Mysuru, Mangaluru, Hubballi)", city: "Mysuru and other tier-2 cities",
      policy: "Karnataka GCC Policy 2024–29", src: "deloitte_ka", estimator: "kaBeyond",
      headline: "EPF and rent support for new centres with 100+ people",
      levers: [
        "EPF for new hires: ₹3,000 per employee per month (new centres, 100+ people)",
        "Rent: 50% reimbursed, up to ₹2 crore",
        "Recruitment: 50% of cost, up to ₹7 crore (100+ people)",
        "Property tax: 30% for 3 years",
        "Innovation lab: up to 75% of capex, max ₹3 crore"
      ],
      conditions: "Minimum 100 employees for the EPF, rent and recruitment support. Duration of EPF and rent support is not stated in the source.",
      verify: ["EPF and rent support duration not stated"]
    },
    {
      key: "TS", state: "Telangana", zone: "Hyderabad", city: "Hyderabad",
      policy: "No dedicated GCC policy yet (draft reported Sep 2026)", src: "siasat_ts", estimator: "none", noPolicy: true,
      headline: "No GCC-specific incentives published",
      levers: [
        "A draft policy reportedly steers new centres to Warangal, Karimnagar, Nizamabad and Adilabad",
        "The general Telangana ICT Policy 2021–26 applies meanwhile"
      ],
      conditions: "Incentives would be negotiated case by case until the policy is notified.",
      extraSrc: ["icai"]
    },
    {
      key: "MH_Z1", state: "Maharashtra", zone: "Zone I: Mumbai and Pune metro regions", city: "Pune, Mumbai",
      policy: "Maharashtra GCC Policy 2025", src: "kpmg_mh", estimator: "mh", zoneRate: 0.40, rentRate: 0.10,
      headline: "40% payroll support for roles paying over ₹1 lakh a month",
      levers: [
        "Payroll: 40% of salary for 3 years, up to ₹50,000 per employee a month, max 100 employees and ₹5 crore per unit",
        "Rent: 10% for 5 years (caps ₹1–4 crore by size class), or capital subsidy instead",
        "Capital: 20% of fixed investment (caps ₹10–100 crore by size class)",
        "Electricity duty: 100% exempt for 10 years; stamp duty 50–100% exempt"
      ],
      conditions: "Size classes start at Small: 100–250 employees or ₹50–100 crore investment. Only employees earning above ₹1 lakh a month count for payroll support.",
      extraSrc: ["icai"],
      verify: ["₹50,000 cap read as per employee per month (ICAI); KPMG states it without the period"]
    },
    {
      key: "MH_Z2", state: "Maharashtra", zone: "Zone II: Nagpur, Nashik, Chh. Sambhajinagar and the rest", city: "Nagpur, Nashik",
      policy: "Maharashtra GCC Policy 2025", src: "kpmg_mh", estimator: "mh", zoneRate: 0.50, rentRate: 0.20,
      headline: "50% payroll support plus interest subsidy outside Mumbai and Pune",
      levers: [
        "Payroll: 50% of salary for 3 years, same caps as Zone I",
        "Rent: 20% for 5 years (caps ₹1–4 crore by size class)",
        "Interest subsidy on term loans for 5 years, up to ₹5 crore a year"
      ],
      conditions: "Same size classes and ₹1 lakh/month salary floor as Zone I.",
      verify: ["₹50,000 cap read as per employee per month (ICAI)"]
    },
    {
      key: "TN", state: "Tamil Nadu", zone: "Chennai, Coimbatore and the rest of the state", city: "Chennai, Coimbatore",
      policy: "Special Scheme to Promote GCCs, 2024–27", src: "swarajya_tn", estimator: "tn",
      headline: "30% → 20% → 10% payroll support for large parents",
      levers: [
        "Payroll: 30% of salary in year 1, 20% in year 2, 10% in year 3",
        "Only jobs paying over ₹1 lakh a month count"
      ],
      conditions: "Parent must be on the Forbes Global 2000 or Fortune 1000 and commit at least 200 direct jobs. Scheme runs to March 2027.",
      extraSrc: ["flx_stats", "channeliam"],
      verify: ["Per-employee and per-unit caps not stated in the sources read"]
    },
    {
      key: "UP_GBN", state: "Uttar Pradesh", zone: "Noida and Ghaziabad (GB Nagar)", city: "Noida (Delhi NCR)",
      policy: "UP GCC Policy 2024 (rules 2025)", src: "invest_up", estimator: "up", slabs: [[0.35, 5], [0.30, 4], [0.25, 3]], minL1: 200, minAdv: 500,
      headline: "Payroll support of 35% → 30% → 25% for 3 years",
      levers: [
        "Payroll: 35% / 30% / 25% of salary, capped at ₹5 / 4 / 3 lakh per employee a year",
        "Annual payroll cap: ₹10 crore (Level-1) or ₹20 crore (Advanced)",
        "Operating costs incl. lease rent: 20% for 5 years",
        "Capital: 25% of eligible investment, up to ₹10 crore (Level-1) or ₹25 crore (Advanced)"
      ],
      conditions: "Level-1 needs 200+ employees or ₹20 crore investment; Advanced needs 500+ or ₹75 crore. Employees must be on roll for at least a year.",
      verify: ["Year-3 rate listed as both 25% and 30% on the source page"]
    },
    {
      key: "UP_REST", state: "Uttar Pradesh", zone: "Rest of UP (e.g. Lucknow)", city: "Lucknow",
      policy: "UP GCC Policy 2024 (rules 2025)", src: "invest_up", estimator: "up", slabs: [[0.50, 7], [0.40, 6], [0.30, 5], [0.25, 4]], minL1: 100, minAdv: 300,
      headline: "Payroll support of 50% falling to 25% over 4 years",
      levers: [
        "Payroll: 50% / 40% / 30% / 25% of salary, capped at ₹7 / 6 / 5 / 4 lakh per employee a year",
        "Operating costs incl. lease rent: 20% for 5 years",
        "Freshers hired from UP colleges: ₹20,000 each (30+ a year)"
      ],
      conditions: "Level-1 needs 100+ employees or ₹15 crore investment; Advanced needs 300+ or ₹50 crore."
    },
    {
      key: "HR_GGN", state: "Haryana", zone: "Gurugram (non-transit zone)", city: "Gurugram (Delhi NCR)",
      policy: "Haryana GCC Policy 2026", src: "gt_hr", estimator: "hr",
      headline: "EPF reimbursed in full for 5 years; operating costs 50% back",
      levers: [
        "EPF: 100% of employer contribution for 5 years, up to ₹25,000 per employee a year",
        "Operating costs incl. up to 75% of lease rent: 50% for 5 years, capped at ₹0.75 crore per 100 employees a year",
        "Capex: 50% (Gurugram), 65% near transit, 75% in other districts",
        "Payroll subsidy up to 120% of average monthly salary for specified groups, tied to local hiring (not estimated here)"
      ],
      conditions: "Captive centres only, starting operations on or after 1 Jan 2026. Total incentives capped at 100% of fixed capital investment.",
      verify: ["Annual OPEX ceiling also cited as ₹15 crore; check against the notified policy"]
    },
    {
      key: "GJ", state: "Gujarat", zone: "Statewide incl. Ahmedabad and GIFT City", city: "Ahmedabad, GIFT City",
      policy: "Gujarat GCC Policy 2025–30", src: "rsm_gj", estimator: "gj",
      headline: "One-time hiring incentive plus 15% of operating costs for 5 years",
      levers: [
        "One-time hiring incentive: up to ₹50,000 per new male and ₹60,000 per new female employee",
        "EPF: 75% (men) or 100% (women) reimbursed for 5 years",
        "Operating costs incl. rent: 15%, up to ₹20 crore a year for 5 years",
        "Capex: 20% (buildings) or 30% (IT), up to ₹50 crore"
      ],
      conditions: "Minimum 50 employees on payroll. Mega projects (₹250 crore+ or 500+ jobs) get higher caps.",
      verify: ["Source gives two readings of the hiring incentive (flat cap vs 50% of one month's CTC)"]
    },
    {
      key: "MP", state: "Madhya Pradesh", zone: "Indore, Bhopal and the rest", city: "Indore",
      policy: "Madhya Pradesh GCC Policy 2025", src: "nasscom_mp", estimator: "none",
      headline: "Capex support up to ₹30 crore; payroll support in year 1",
      levers: [
        "Capex: up to ₹30 crore",
        "Payroll: up to 50% of salaries in the first year",
        "International patents: up to ₹30 lakh each"
      ],
      conditions: "Thresholds and caps are not in the summaries we could read, so no estimate is shown.",
      verify: ["Figures from a secondary summary, not the policy text"]
    }
  ],

  // Recently announced, opened or expanding GCCs. Stage values: Announced, MoU signed,
  // Setting up, Opened, Expanding, Partner-run.
  PIPELINE: [
    { company: "Truist", hq: "US", sector: "bfsi", city: "Hyderabad", size: "≈4,500 at full scale", date: "Mar 2026", stage: "Setting up", partner: "Infosys", model: "Build-operate-transfer, 5 years", src: "p_truist" },
    { company: "CIBC", hq: "Canada", sector: "bfsi", city: "Hyderabad", size: "2,000+", date: "Jun 2026", stage: "Setting up", partner: "ANSR", model: "Run on ANSR's platform", src: "p_cibc" },
    { company: "Citizens Financial Group", hq: "US", sector: "bfsi", city: "Hyderabad", size: "Up to 1,000", date: "Apr 2025", stage: "Setting up", partner: "Cognizant", model: "Hosted on Cognizant's campus", src: "p_citizens" },
    { company: "Vanguard", hq: "US", sector: "bfsi", city: "Hyderabad", size: "2,300–2,500 over 4 years", date: "Apr 2025", stage: "Announced", src: "p_vanguard" },
    { company: "Zurich", hq: "Switzerland", sector: "bfsi", city: "Hyderabad", size: "Not stated", date: "Apr 2026", stage: "Opened", src: "p_zurich" },
    { company: "The Standard", hq: "US", sector: "bfsi", city: "Bengaluru", size: "Not stated", date: "Apr 2026", stage: "Opened", src: "p_standard" },
    { company: "State Street", hq: "US", sector: "bfsi", city: "Coimbatore", size: "≈2,400 seats", date: "Jul 2025", stage: "Opened", src: "p_entre" },
    { company: "Eli Lilly", hq: "US", sector: "healthcare", city: "Hyderabad", size: "1,000–1,500", date: "Jan 2025", stage: "Announced", src: "p_lilly" },
    { company: "DePuy Synthes (J&J)", hq: "US", sector: "healthcare", city: "Bengaluru", size: "≈500 over 18–24 months", date: "Aug 2026", stage: "Announced", src: "p_depuy" },
    { company: "Merck Group", hq: "Germany", sector: "healthcare", city: "Bengaluru", size: "≈3,300 (existing teams, new campus)", date: "Jun 2026", stage: "Expanding", src: "p_merck" },
    { company: "Carl Zeiss", hq: "Germany", sector: "healthcare", city: "Bengaluru", size: "To 5,000 in 3 years", date: "Nov 2024", stage: "Opened", src: "p_zeiss" },
    { company: "Eisai", hq: "Japan", sector: "healthcare", city: "Visakhapatnam", size: "Not stated", date: "Jul 2025", stage: "Setting up", src: "p_entre" },
    { company: "McDonald's", hq: "US", sector: "retail", city: "Hyderabad", size: "2,000 initially", date: "Mar 2025", stage: "MoU signed", model: "MoU with Telangana government", src: "p_mcd" },
    { company: "Costco", hq: "US", sector: "retail", city: "Hyderabad", size: "≈1,000 initially", date: "Jul 2025", stage: "Setting up", src: "p_entre" },
    { company: "Albertsons", hq: "US", sector: "retail", city: "Bengaluru", size: "+1,000 over 18 months", date: "Jul 2025", stage: "Expanding", src: "p_entre" },
    { company: "Starbucks", hq: "US", sector: "retail", city: "Chennai", size: "≈800", date: "Sep 2026", stage: "MoU signed", model: "MoU with Tamil Nadu government", src: "channeliam" },
    { company: "Nestlé Business Solutions", hq: "Switzerland", sector: "retail", city: "Hyderabad", size: "Not stated", date: "Not stated", stage: "Announced", src: "p_nestle" },
    { company: "Southwest Airlines", hq: "US", sector: "retail", city: "Hyderabad", size: "≈170 now, ≈1,000 planned", date: "May (year not stated)", stage: "Opened", src: "p_southwest", verify: "Source page gives no year" },
    { company: "Best Buy", hq: "US", sector: "retail", city: "Bengaluru", size: "≈600 (existing)", date: "2026", stage: "Partner-run", partner: "TCS", model: "5-year operating deal, value unconfirmed", src: "p_bestbuy" },
    { company: "thyssenkrupp Automotive Technology", hq: "Germany", sector: "engineering", city: "Pune", size: "120 now, 300+ planned", date: "Oct 2026", stage: "Opened", src: "p_tk" },
    { company: "Cummins", hq: "US", sector: "engineering", city: "Pune", size: "Not stated", date: "Jul 2024", stage: "Opened", src: "p_cummins" },
    { company: "Daikin", hq: "Japan", sector: "engineering", city: "Not stated", size: "Not stated", date: "Jul 2025", stage: "Announced", partner: "EY", src: "p_entre" },
    { company: "Generac", hq: "US", sector: "energy", city: "Pune", size: "150+ seats", date: "Jun 2026", stage: "Opened", src: "p_generac" },
    { company: "Acumatica", hq: "US", sector: "technology", city: "Hyderabad", size: "30+ at opening", date: "Aug 2026", stage: "Opened", partner: "ANSR", model: "Via Summit Consulting Services, an ANSR company", src: "p_acumatica" },
    { company: "Digi-Key Electronics", hq: "US", sector: "technology", city: "Bengaluru", size: "Not stated", date: "Not stated", stage: "Opened", partner: "SMC Squared", src: "p_digikey" },
    { company: "Alight Solutions", hq: "US", sector: "professional", city: "Chennai", size: "Not stated", date: "Jul 2025", stage: "Opened", src: "p_entre" }
  ],

  // Providers: what they claim vs what independent press shows.
  // evidence: "named" = at least one named GCC client in independent press;
  //           "claims" = only the provider's own counts or claims found.
  PROVIDERS: [
    { name: "ANSR", type: "GCC setup and operations platform", evidence: "named",
      claims: [{ text: "170 GCCs built so far (CEO, as reported)", src: "uni_ansr" }, { text: "Backed by Accenture and Accel; $344M+ raised", src: "bog_setup" }],
      recognition: [{ text: "Leader, ISG Provider Lens 2025 — GCC design and setup", src: "isg_ansr" }],
      clients: ["CIBC", "Acumatica"] },
    { name: "Infosys", type: "IT services firm, build-operate-transfer", evidence: "named",
      claims: [], recognition: [], clients: ["Truist"] },
    { name: "Cognizant", type: "IT services firm, hosted GCCs", evidence: "named",
      claims: [], recognition: [], clients: ["Citizens Financial Group"] },
    { name: "TCS", type: "IT services firm, GCC operations", evidence: "named",
      claims: [], recognition: [], clients: ["Best Buy"] },
    { name: "SMC Squared", type: "Build-operate-transfer specialist (Hexaware since Jul 2025)", evidence: "named",
      claims: [{ text: "30+ GCCs built", src: "hexaware" }], recognition: [], clients: ["Digi-Key Electronics"] },
    { name: "EY", type: "Big Four advisory", evidence: "named",
      claims: [], recognition: [], clients: ["Daikin"] },
    { name: "Zinnov", type: "Advisory and research (co-publishes the Nasscom GCC report)", evidence: "claims",
      claims: [{ text: "Set up and scaled 220+ GCCs", src: "zinnov_setup" }], recognition: [], clients: [] },
    { name: "Inductus GCC", type: "GCC enabler: BOT, company-owned partner-operated, modular", evidence: "claims",
      claims: [{ text: "Founded 2007; part of listed Inductus Ltd", src: "bog_setup" }], recognition: [], clients: [] },
    { name: "Wisemonk", type: "Employer of record plus GCC setup", evidence: "claims",
      claims: [{ text: "Rated 5.0 in a third-party 'best GCC partners' list", src: "scalers" }], recognition: [], clients: [] },
    { name: "Flexiple", type: "Managed employment bridge, then your own entity ($299 per person a month during the build)", evidence: "claims",
      claims: [{ text: "Client logos shown on its GCC page; the page does not say which used the GCC service", src: "flx_gcc" }], recognition: [], clients: [] }
  ],

  // How many GCCs does India have? Depends who you ask.
  COUNTS: [
    { n: "2,117", who: "Zinnov–Nasscom", what: "GCCs (3,728 units), FY2026", src: "zinnov" },
    { n: "1,700+", who: "FICCI–Anarock", what: "GCCs at end of 2024", src: "ficci" },
    { n: "≈1,400", who: "AIM Research", what: "GCCs in its paid list", src: "aim" },
    { n: "2,800+", who: "OceanFrogs", what: "Foreign-HQ firms with India staff (1,400 verified)", src: "oceanfrogs" },
    { n: "536", who: "Flexiple", what: "Centres it has verified", src: "flx_dir" }
  ]
};
