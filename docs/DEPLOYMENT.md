# Deployment

## 1. GitHub Repository Setup

1. Create a **private** GitHub repository (e.g. `dsg-telgea-mvno-proposal`)
2. From inside the project folder, run:

```bash
git init
git add .
git commit -m "chore: initial project scaffold"
git remote add origin https://github.com/<your-org>/dsg-telgea-mvno-proposal.git
git push -u origin main
```

> Keep the repository **private** for the duration of the proposal validity period.

---

## 2. Vercel Project Setup

1. Log in to [vercel.com](https://vercel.com) with the DSG account
2. Click **Add New → Project**
3. Import the GitHub repository
4. Configure build settings as below

---

## 3. Build Configuration

| Setting | Value |
|---|---|
| **Framework Preset** | Next.js |
| **Root Directory** | `.` (project root — leave blank) |
| **Build Command** | `pnpm build` |
| **Install Command** | `pnpm install` |
| **Output Directory** | Leave blank (Next.js default) |
| **Node.js Version** | 20.x (LTS) |

> Do **not** create a `vercel.json` file unless you need custom headers or redirects.

---

## 4. Environment Variables

Manage environment variables in **Vercel Dashboard → Project → Settings → Environment Variables**.

| Variable | Environment | Description |
|---|---|---|
| `NEXT_PUBLIC_GA_ID` | Production | Google Analytics 4 Measurement ID (if used) |
| `NEXT_PUBLIC_SITE_URL` | All | Canonical site URL (e.g. `https://telgea-proposal.vercel.app`) |

Do **not** commit `.env.local` to the repository. It is already in `.gitignore`.

---

## 5. Custom Domain (Optional)

To use a custom subdomain (e.g. `proposal.mvne.co.za`):

1. In Vercel: Project → Settings → Domains → Add Domain
2. Add `proposal.mvne.co.za`
3. In DNS: add a `CNAME` record pointing to `cname.vercel-dns.com`
4. Vercel will auto-provision an SSL certificate

---

## 6. How to Redeploy

**Automatic:** Push to the `main` branch. Vercel deploys automatically via GitHub integration.

**Manual:**
```bash
# From project root
pnpm build        # verify locally first
git add .
git commit -m "feat: update content"
git push origin main
```

**From Vercel dashboard:** Project → Deployments → Redeploy (any previous deployment).

---

## 7. Preview Deployments

Every push to a non-main branch creates a unique preview URL (e.g. `telgea-mvno-proposal-git-feature-xyz.vercel.app`). Use these for review before merging to main.

---

## 8. Rollback

In Vercel dashboard: Project → Deployments → select any previous deployment → Promote to Production.

---

## 9. Pre-launch Checklist

- [ ] `pnpm build` passes locally with zero errors
- [ ] TypeScript compiles cleanly (`pnpm tsc --noEmit`)
- [ ] ESLint passes (`pnpm lint`)
- [ ] `robots.txt` blocks all crawlers
- [ ] All pages carry `noindex` meta tag
- [ ] Confidentiality badge visible on all pages
- [ ] Proposal validity date (26 April 2026) displayed correctly
- [ ] All external links open in new tab
- [ ] Site reviewed on mobile (375px) and desktop (1280px+)
- [ ] Vercel Analytics enabled in dashboard
