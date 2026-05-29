# START HERE — spinning up a new site from this template

You are Claude, on the **first session of a fresh copy** of this template. Work
through this checklist with the user before building any features. It takes a
few minutes and saves a whole session of confusion later.

## 0. Orient (30 seconds)
- Stack & conventions: [conventions.md](conventions.md)
- Theming: [design-tokens.md](design-tokens.md)
- Standing rules (no commits/pushes, Romanian, work on `develop`): see `CLAUDE.md`.

## 1. Get the brief from the user
Ask for, or confirm, the essentials. These drive everything below:
- Business name + short form, what they do, town/region
- Phone, email, address, opening hours
- Social links (Facebook/Instagram), if any
- Domain (for `NEXT_PUBLIC_SITE_URL`)
- Visual direction: light or dark? accent color? serious/playful? any reference site?
- Which pages/sections they actually need (don't build pages they won't use)

If something is unknown, leave the placeholder and add a `// TODO: confirm` note —
don't invent business facts (phone numbers, addresses).

## 2. Rename the project
- `package.json` → `"name"`
- This file's parent repo folder name (the user handles git remotes)

## 3. Fill in identity — `data/site.ts`
This is the single source of truth. Replace every placeholder: `brand`,
`brandShort`, `tagline`, `description`, `phone`, `phoneDisplay`, `email`,
`address`, `program`, `social`, and the `nav` array (add/remove routes here —
Navbar, Footer, and sitemap all read from it).

## 4. Re-skin — `app/globals.css` + `app/layout.tsx`
- **Palette:** edit the hex values under `@theme` in `globals.css`. Keep the
  semantic names; only change the colors. See [design-tokens.md](design-tokens.md).
- **Fonts:** swap the two `next/font/google` imports in `layout.tsx`
  (`display` = headings, `sans` = body). Don't rename the CSS variables.
- Sanity check contrast (WCAG AA for body text) after changing the palette.

## 5. Contact form (optional, env-gated)
- Works as-is for validation. To actually send mail: copy `.env.example` to
  `.env.local`, set `RESEND_API_KEY` + `CONTACT_TO_EMAIL`. Before launch, verify
  the client's domain in Resend and update the `from:` in `lib/email.ts`.
- If this site needs no form, you can ignore it — it's inert without env vars.
  (Per the user's "don't make me delete things" preference, leaving it is fine.)

## 6. Build the pages
- Home: add section components under `components/home/` and compose them in
  `app/page.tsx` (replace the starter hero). See conventions → "Adding a home section".
- New route: `app/<route>/page.tsx`, export `metadata` via `pageMetadata(...)`,
  wrap content in `<Section>`. Add the route to `nav` in `data/site.ts`.
- Put content/data in `data/*.ts`, typed in `data/types.ts` (keeps the CMS seam).

## 7. Verify
- `npm run dev` and click through. `npm run build` should pass clean.
- `npm run lint`.

## 8. Hand off
Do **not** commit, push, or deploy. Summarize what changed and the next steps
for the user.
