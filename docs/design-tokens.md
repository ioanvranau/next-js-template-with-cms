# Design tokens & theming

Tailwind v4 is **CSS-first** — there is no `tailwind.config.js`. All theme
tokens live in `app/globals.css` inside the `@theme { … }` block. Each token
becomes a Tailwind utility automatically (e.g. `--color-accent` → `bg-accent`,
`text-accent`, `border-accent`).

## The rebrand surface (what to change per project)
Edit **only these**, and the whole site re-skins:

1. **Palette** — the `--color-*` hex values in `@theme`.
2. **Fonts** — the two `next/font/google` imports in `app/layout.tsx`.

Do **not** rename the tokens or touch components. Components reference semantic
names, so the same `.tsx` works for every brand.

## Color tokens
| Token | Utility examples | Role |
|---|---|---|
| `--color-bg` | `bg-bg` | page background |
| `--color-bg-elevated` | `bg-bg-elevated` | cards / raised surfaces |
| `--color-bg-warm` | `bg-bg-warm` | alternating section background |
| `--color-text` | `text-text` | body & headings |
| `--color-text-muted` | `text-text-muted` | secondary text |
| `--color-text-dim` | `text-text-dim` | captions, eyebrows |
| `--color-accent` | `bg-accent` `text-accent` | brand color (CTAs, links) |
| `--color-accent-hover` | `hover:bg-accent-hover` | accent hover state |
| `--color-line` | `border-line` | borders, dividers |
| `--color-success` / `--color-error` | states | form feedback |

### Light vs dark theme
The default is a light theme. For a dark brand, invert the surfaces/text — e.g.
`--color-bg: #0E0D0B; --color-text: #E8DDC7;` and bump the accent brightness.
Keep the **same token names**; everything else follows.

### Contrast
After changing colors, verify body text hits **WCAG AA** (4.5:1) against its
background. The accent is used on `bg-elevated` buttons — check that pairing too.

## Type tokens
- `--font-display` → `font-display` (headings) · `--font-sans` → `font-sans` (body).
  The actual fonts are injected by `next/font` in `layout.tsx` via the
  `--font-display-src` / `--font-sans-src` variables — swap the imports there.
- Fluid sizes: `text-hero`, `text-display`, `text-title`, `text-eyebrow`
  (each scales with `clamp()`; eyebrow includes letter-spacing).

## Layout token
- `--container-shell` (`max-w-shell`) — global content max-width (default `80rem`).

## Adding a token
Add a `--name: value;` line inside `@theme`. Use the conventional prefixes so
Tailwind generates the right utilities: `--color-*`, `--font-*`, `--text-*`,
`--spacing-*`, `--radius-*`, `--container-*`.
