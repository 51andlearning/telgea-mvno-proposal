# Structure

## Folder Structure

```
telgea-mvno-proposal/
├── docs/                         # Project documentation (this folder)
│   ├── PROJECT_OVERVIEW.md
│   ├── ASSUMPTIONS.md
│   ├── SCOPE.md
│   ├── STRUCTURE.md
│   ├── TRACKING_PLAN.md
│   └── DEPLOYMENT.md
│
├── public/
│   └── images/                   # Static images (logos, charts, diagrams)
│
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx            # Root layout (metadata, fonts, global CSS)
│   │   ├── page.tsx              # Home page (proposal index)
│   │   ├── globals.css           # Tailwind v4 CSS + CSS variable theme
│   │   └── [section]/
│   │       └── page.tsx          # One route per proposal section
│   │
│   ├── components/
│   │   ├── sections/             # Full-width section components (one per proposal section)
│   │   │   └── *.tsx
│   │   └── ui/                   # shadcn primitives (do not edit directly)
│   │       ├── accordion.tsx
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── dialog.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── separator.tsx
│   │       └── tabs.tsx
│   │
│   ├── content/                  # Static content files (structured data, copy)
│   │   └── *.ts / *.json
│   │
│   └── lib/
│       └── utils.ts              # cn() utility function
│
├── components.json               # shadcn configuration
├── eslint.config.mjs             # ESLint flat config
├── next.config.ts                # Next.js configuration
├── package.json
├── postcss.config.mjs            # Tailwind v4 PostCSS plugin
└── tsconfig.json
```

## Section Composition Rules

Each proposal section should follow this pattern:

1. **Route file** — `src/app/[section]/page.tsx`
   - Imports the section component
   - Sets page-level metadata (`export const metadata`)
   - Returns the section component wrapped in a `<main>` tag

2. **Section component** — `src/components/sections/[SectionName].tsx`
   - Self-contained: imports its own data from `src/content/`
   - Uses only shadcn UI primitives from `src/components/ui/`
   - Must be a Server Component unless interactivity requires `"use client"`

3. **Content file** — `src/content/[sectionName].ts`
   - Exports typed content objects (no hardcoded strings in components)
   - Types should be defined inline or in `src/content/types.ts`

## Content Management Approach

All content is managed as static TypeScript files in `src/content/`. This avoids the overhead of a CMS while keeping content clearly separated from layout logic.

To update content:
1. Edit the relevant file in `src/content/`
2. TypeScript will catch any structural issues at build time
3. Redeploy to Vercel (automatic on `git push` to main if CI/CD is configured)

For tables (e.g. financial model, risk register), use typed arrays of objects that are rendered by generic table components.

## Shared Layout Components (to be built)

- `ProposalNav` — sticky sidebar or top navigation linking to all sections
- `SectionHeader` — consistent section title + description block
- `ConfidentialBanner` — persistent reminder of document classification
- `MetricCard` — callout card for key numbers (R250k, R32.50/sub, etc.)
