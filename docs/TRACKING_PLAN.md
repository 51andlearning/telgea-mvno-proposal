# Tracking Plan

## Overview

Given the confidential nature of this site, tracking should be minimal, privacy-respecting, and focused on understanding stakeholder engagement rather than broad marketing analytics.

---

## 1. Vercel Analytics (Recommended)

Vercel's built-in analytics provides page view data with no cookies and GDPR-compliant by default.

**Setup:**
```bash
pnpm add @vercel/analytics
```

In `src/app/layout.tsx`:
```tsx
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

Enable in Vercel dashboard: Project → Analytics → Enable.

**Metrics captured:**
- Page views per route
- Unique visitors
- Top pages
- Traffic sources (referrer)
- Geographic distribution

---

## 2. Google Analytics (Optional — Placeholder)

If GA4 is required:

```bash
pnpm add @next/third-parties
```

In `src/app/layout.tsx`:
```tsx
import { GoogleAnalytics } from "@next/third-parties/google";

// In RootLayout return:
<GoogleAnalytics gaId="G-XXXXXXXXXX" />
```

Replace `G-XXXXXXXXXX` with the GA4 Measurement ID from Google Analytics console.

**Important:** Add the GA4 ID to `.env.local` as `NEXT_PUBLIC_GA_ID` and reference it via `process.env.NEXT_PUBLIC_GA_ID` rather than hardcoding.

---

## 3. Event Tracking Placeholders

The following events should be tracked once the full site is built:

| Event Name | Trigger | Parameters |
|---|---|---|
| `section_viewed` | User scrolls to a proposal section | `section_name` |
| `cta_clicked` | Any primary CTA button clicked | `button_label`, `page` |
| `proposal_acceptance_viewed` | `/acceptance` page loaded | — |
| `contact_clicked` | Contact DM link/button clicked | `source_page` |
| `document_downloaded` | Any PDF/attachment download | `document_name` |

Implementation pattern (client component):
```tsx
"use client";
import { track } from "@vercel/analytics";

// Usage:
track("cta_clicked", { button_label: "View Proposal", page: "/" });
```

---

## 4. Form Submission Tracking

No form submissions in initial build. When added:

- Track `proposal_acceptance_submitted` on form submit
- Track `contact_form_submitted` on contact form submit
- Include `success` / `error` parameter for submission outcome

---

## 5. Conversion Goals

| Goal | Definition | Target |
|---|---|---|
| Proposal Viewed | User views ≥ 3 sections | — |
| Acceptance Page Viewed | `/acceptance` page loaded | Primary conversion |
| Contact Initiated | Click on contact link | Secondary conversion |

---

## 6. Privacy Considerations

- No PII should be collected
- `robots.txt` must disallow all crawlers
- `noindex` meta tag on all pages in production
- Do not use Google Analytics if Telgea objects to third-party tracking
- Vercel Analytics is the preferred option for its privacy-first approach
