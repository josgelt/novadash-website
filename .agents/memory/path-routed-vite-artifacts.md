---
name: Path-routed Vite artifact gotchas
description: Non-obvious pitfalls when building react-vite artifacts that run under a base path (e.g. artifacts/novadash) with wouter + a custom i18n.
---

# Path-routed Vite artifact gotchas

These artifacts run under a per-artifact base path (`import.meta.env.BASE_URL`,
e.g. `/novadash/`), served through the shared proxy. Three recurring traps:

## wouter must be told the base path
Wrap routes in `<Router base={base}>` where
`const base = import.meta.env.BASE_URL.replace(/\/$/, "")` (strip trailing slash:
`/` -> ``, `/novadash/` -> `/novadash`). Keep `<Route path="/...">` and
`<Link href="/...">` root-relative — wouter prepends the base automatically.
**Why:** without the base, navigation/matching silently breaks once the app is
served under a non-root path even though it works at `/` in isolation.

## Load web fonts via index.html <link>, not a CSS @import mid-file
Putting `@import url('https://fonts.googleapis.com/...')` in index.css after
other statements throws postcss `@import must precede all other statements`.
Add a `<link rel="stylesheet">` in `index.html` instead (preconnect + link).
**Why:** Tailwind/postcss require all `@import` first; the font import is easy
to drop in the wrong place and only shows as a build-time warning.

## A hand-rolled i18n `t(key): string` still returns arrays/objects
A common custom i18n walks `translations[lang]` by dotted key and returns the
node typed as `string`. For nested **arrays/objects** (e.g. pricing tiers,
feature lists, table rows) read `translations[lang].<path>` directly and map
over it — do NOT call the hook inside `.map()` and do NOT rely on `t()`'s
string type. Keep DE and EN trees structurally identical (same keys both sides).
**Why:** mixing `t()` (string) with array data leads to hacky casts, hardcoded
fallback lists, and React hooks-rule violations (hook called inside map).
