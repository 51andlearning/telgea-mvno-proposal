# Assumptions

## 1. No Internal Data Access

This site does not connect to any live internal systems. All content is:
- Derived from the source proposal document (PDF / Markdown conversion)
- Hardcoded or stored in static content files under `src/content/`
- Not fetched from any CRM, billing system, or subscriber platform at runtime

Financial figures, subscriber projections, and timelines are as stated in the proposal document dated 27 March 2026 and have not been independently verified for this build.

## 2. Directional Strategy Only

The revenue model, break-even analysis, and subscriber projections presented on the site are directional illustrations based on the assumptions stated in the proposal. They do not constitute financial advice or guaranteed outcomes.

Any figures shown (e.g. R32.50 net profit per subscriber, break-even at ~4,808 subscribers) must be validated against live MNO wholesale pricing and Telgea's actual cost structure before being used for formal business planning.

## 3. Requires Validation Post-Approval

The following elements will require formal validation once the proposal is accepted and Phase 1 scoping commences:

- MNO wholesale rates (Vodacom / MTN / Cell C / Telkom Mobile)
- RICA compliance workflow specifics
- SIM card personalisation lead times and costs
- Call centre SLA parameters
- Legal terms (to be elaborated in the Master Services Agreement)
- Any regulatory changes affecting MVNO licensing conditions in South Africa

## 4. Content Accuracy

Content is sourced from the proposal document. Any discrepancies between the website and the signed proposal document should be resolved in favour of the signed document.

## 5. No Authentication Layer (Initial Build)

The initial build has no login/authentication mechanism. Access control is by obscurity (unlisted URL). If Telgea requires a password-protected version, authentication should be added before the link is distributed beyond the initial stakeholder group.

## 6. SEO and Indexing

The site must not be indexed by search engines. `robots.txt` should disallow all crawlers. Pages should include `<meta name="robots" content="noindex, nofollow">` in production.

## 7. No Form Submissions in Initial Build

The initial build does not include live form submission (e.g. proposal acceptance forms). Acceptance is managed via signed PDF per the proposal terms. This can be added in a future phase.
