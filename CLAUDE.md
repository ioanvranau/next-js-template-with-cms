# Template — Claude Notes

This is a **starter template** for small-business presentation sites (Romanian
SMBs: clinics, workshops, shops, trades). It is the distilled skeleton of
several real sites. When you start a new project from it, your job is to
*rebrand and extend* it — not to rebuild the foundation.

> **First session on a fresh copy? Read [docs/START-HERE.md](docs/START-HERE.md).**
> It is a step-by-step rebrand checklist. Do that before building features.

@AGENTS.md

## Stack
- Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 (CSS-first, no config file)
- `clsx` + `tailwind-merge` (via `lib/cn.ts`), `lucide-react` icons
- Contact form: Server Action + `zod` (`lib/validation.ts`) + Resend (`lib/email.ts`), **env-gated**
- Package manager: `npm`. Language: **Romanian** content.

## How this template is built (the load-bearing ideas)
- **Rebrand by editing two files, never the components.**
  - `data/site.ts` — all business identity (brand, phone, email, address, nav).
  - `app/globals.css` `@theme` — the palette + type scale. Components use
    *semantic* tokens (`bg`, `text`, `accent`, `line`…), so re-skinning never
    touches a `.tsx`. Fonts swap in `app/layout.tsx`.
- **Content lives in `data/*.ts`** (typed via `data/types.ts`). This is the
  seam for a future CMS — see [docs/cms.md](docs/cms.md).
- **Additive, not subtractive.** The home page is a minimal stub on purpose;
  build up, don't delete demo content.
- Conventions & component catalog: [docs/conventions.md](docs/conventions.md).
  Theming details: [docs/design-tokens.md](docs/design-tokens.md).

## Working preferences (the user's standing rules)
- **Work on `develop`. Do not create branches or git worktrees** unless asked.
- **Never `git commit`, `git push`, or run any deploy CLI** (Vercel/Netlify).
  The user owns all commits, pushes, and deploys. Hand off with clear next steps.
- Keep responses concise — this user pushes back on overkill.
- **Git hygiene.** Never stage generated/local files — rely on `.gitignore`
  (`node_modules/`, `.next/`, `out/`, `build/`, `next-env.d.ts`, `*.tsbuildinfo`,
  `.env*` except `.env.example`, `.idea/`, `/.claude/`, `.DS_Store`). If `git
  status` shows a generated/untracked file that isn't ignored, add it to
  `.gitignore` rather than committing it. Commit source only. (`.env.example`
  and `package-lock.json` SHOULD be committed.)
- **Romanian content is non-negotiable** — never translate UI strings to English
  without an explicit ask. Diacritics: ă â î ș ț.
- Stock photos (Unsplash) are fine for demos; mark each with
  `/* TODO: replace with real photo */` so they're easy to find before launch.

## CMS
Not integrated yet — intentionally. The data layer is structured so a CMS can
drop in later without rewiring components. Notes & the planned path:
[docs/cms.md](docs/cms.md).
