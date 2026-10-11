# GCC Compass

A working prototype for Flexiple's Product Intern assignment: a single, sourced place for a company deciding **where to put its India Global Capability Centre**.

**Live:** https://mersalarasan99.github.io/gcc-entry-expansion-india/

> Not an official Flexiple product. Built by Ragul, October 2026.

## Who it's for

Mid-market companies setting up their first India GCC. They face crore-level decisions with no in-house India experience, and today they rely on referrals, generic consultant reports and sources that disagree on basic facts. Existing GCCs planning a second city are the next audience.

## What it does

You describe the centre (sector, team size, seniority mix, what matters most). It returns:

| Tab | Answers |
|---|---|
| **Cities** | Six metros ranked on cost per person, state incentives, sector fit, talent pool, existing GCCs and office availability. Each bar shows how much every factor contributed. |
| **Incentives** | Eleven state policies and zones in one format, with an indicative estimate of payroll-, EPF- and rent-linked support for *your* team, and an eligibility check. |
| **Who's coming** | 26 recent GCC announcements with city, size, stage and setup partner, each traced to a source. |
| **Providers** | Ten setup firms: what each says about itself, next to the GCC clients independent press has named. No invented ratings. |
| **About the data** | Why the count of GCCs ranges from 536 to 2,800+ depending on the source, method, known gaps, and every source link. |

## Data and method

- Every figure in `data.js` carries a source id that links to the page it came from.
- Anything not confirmed against a primary page carries a **Verify** flag, listed on the About tab.
- Salary medians, talent pool and verified-GCC counts: Flexiple's own talent data and directory.
- Grade A rent and vacancy: CRE Matrix / CREDAI, Q1 2026.
- City sector strengths: JLL India, 2026.
- State incentives: official pages where reachable (e.g. Invest UP), otherwise tax-firm summaries of the notified policy (Deloitte, KPMG, RSM, Grant Thornton).
- Research and structuring were done with Claude (Anthropic) and reviewed by hand.

Scoring: each factor is scored against the best of the six cities (best = 1), then weighted by the chosen priority. Weights are shown in the app under "How the ranking works".

## Run locally

No build step. Open `index.html`, or:

```
python3 -m http.server
```

## Files

- `index.html`, `styles.css`, `app.js`: the app
- `data.js`: the dataset, with sources
