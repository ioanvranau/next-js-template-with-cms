# Conventions & component catalog

## Folder structure
```
app/                 App Router routes
  layout.tsx         root layout — fonts, metadata template, Navbar/Footer, skip-link
  page.tsx           home (starter hero stub — build this out)
  globals.css        Tailwind v4 @theme design tokens  ← palette/type scale
  not-found.tsx      404
  sitemap.ts         /sitemap.xml  (derived from data/site nav)
  robots.ts          /robots.txt
  despre/page.tsx    example content page
  contact/
    page.tsx         contact page (form + business details)
    actions.ts       "use server" Server Action for the form
components/
  ui/                design-system primitives (Container, Section, …)
  nav/               Navbar, Footer
  forms/             ContactForm, FormField
  home/              (you add) home page sections — Hero, Services, Testimonials…
  sections/          (you add) reusable cross-page sections — CtaBanner, PageHero…
lib/
  cn.ts              className merge helper
  useInView.ts       scroll-into-view hook (powers Reveal)
  seo.ts             pageMetadata() helper
  validation.ts      zod contact schema
  email.ts           Resend sender (env-gated)
data/
  site.ts            business identity + nav (single source of truth)
  types.ts           shared content shapes (the CMS seam)
```

## Import alias
`@/` maps to the repo root. Import as `@/components/ui/Section`, `@/lib/cn`, etc.

## UI primitives (`components/ui/`)
| Component | Purpose |
|---|---|
| `Container` | centered max-width (`max-w-shell`) + responsive padding |
| `Section` | vertical rhythm + background variant (`bg` \| `elevated` \| `warm`); wraps a Container unless `bare` |
| `SectionHeading` | eyebrow + title + intro, `align="left" \| "center"` |
| `Eyebrow` | small uppercase label (`tone="muted" \| "accent"`) |
| `PillButton` | pill CTA; renders `<Link>` with `href`, else `<button>`; `variant="accent" \| "outline"`, `withArrow` |
| `Reveal` | fade/lift children on scroll (respects reduced-motion); `delay` ms |

Always style with **semantic tokens** (`text-text`, `bg-bg-warm`, `text-accent`,
`border-line`) — never raw hex. That's what makes a re-skin a one-file change.

## Adding a page
1. `app/<route>/page.tsx` — a server component by default.
2. `export const metadata = pageMetadata("Titlu", "descriere?")`.
3. Wrap content in `<Section>`; lead with `<SectionHeading>`.
4. Add `{ href: "/<route>", label: "..." }` to `nav` in `data/site.ts`
   (this updates Navbar, Footer, and the sitemap).

## Adding a home section
1. Create `components/home/MySection.tsx`.
2. Compose primitives: a `<Section variant="…">` with a `<SectionHeading>` and
   content; wrap entrance animations in `<Reveal>`.
3. Pull copy/data from `data/*.ts` (typed via `data/types.ts`) — not hard-coded.
4. Import and place it in `app/page.tsx`. Alternate `bg` / `warm` variants down
   the page for visual rhythm.

## Forms
- The contact form is a client component (`useActionState`) bound to the
  `submitContact` Server Action. Validation is shared via `lib/validation.ts`.
- A `website` honeypot field blocks basic bots. Keep it.
- It's **env-gated**: with no `RESEND_API_KEY`, validation still runs and the
  action returns a friendly error. The site always builds/runs.

## Patterns to keep
- Romanian copy, diacritics intact (ă â î ș ț).
- One source of truth for identity (`data/site.ts`).
- Mark stock images with `/* TODO: replace with real photo */`.
- Server components by default; add `"use client"` only when you need state/effects.
