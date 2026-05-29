# next-js-template-with-cms

Starter template for small-business presentation sites. Next.js 16 (App Router)
+ React 19 + TypeScript + Tailwind CSS v4, with an env-gated contact form
(Resend + zod) and a data layer structured for a future CMS.

> **Building a site from this?** The fastest path is to open it with Claude Code
> and follow [docs/START-HERE.md](docs/START-HERE.md) — a step-by-step rebrand
> checklist. `CLAUDE.md` carries the conventions and standing rules.

## Quick start
```bash
npm install
npm run dev          # http://localhost:3000
```

To enable contact-form email:
```bash
cp .env.example .env.local   # then fill in RESEND_API_KEY + CONTACT_TO_EMAIL
```
Without those vars the form still validates input; it just doesn't send mail.

## Scripts
- `npm run dev` — dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint

## Make it yours (the short version)
1. `data/site.ts` — business name, contact, nav (single source of truth).
2. `app/globals.css` `@theme` — palette + type scale.
3. `app/layout.tsx` — swap the two Google fonts.
4. Build pages under `app/` and sections under `components/home/`.

Full guides live in [`docs/`](docs): conventions, design tokens, CMS plan.
