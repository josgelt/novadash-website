# NovaDash — Design Package for Claude

NovaDash is a cloud-based order-management SaaS platform for e-commerce merchants in the DACH region (Germany, Austria, Switzerland). It centralizes orders, shipping and tracking from marketplaces like Amazon, eBay and Shopify. The website is bilingual (German/English).

This package contains the complete frontend design foundation of the NovaDash marketing website ("editorial botanical" design system) so you can derive a full design system for the product suite (marketing site + SaaS dashboard app).

## Contents

- `styles/index.css` — the live Tailwind v4 theme: CSS custom properties (color tokens), shadcn/ui theme mapping, `nd-botanical-*` helper classes, keyframe animations
- `styles/novadash-design-system.css` — a portable, framework-independent single-file version of the design system
- `styles/fonts-setup.html` — the Google Fonts setup (see typography below)
- `components/Header.tsx`, `Footer.tsx`, `Layout.tsx` — real production layout components incl. the logo markup
- `pages/Home.tsx`, `Pricing.tsx`, `Uptime.tsx` — representative pages showing typography scale, spacing, section rhythm and card patterns
- `screenshots/homepage.jpg`, `screenshots/pricing.jpg` — visual references of the live site

## Design system summary ("editorial botanical")

- **Character:** editorial, calm, premium — deep emerald green as the brand anchor, warm off-white backgrounds, subtle dot/grid pattern backdrops, generous whitespace
- **Primary color:** deep emerald green (`--color-primary`), used for CTAs, accents and the dark trust sections
- **Typography (3 families, all Google Fonts):**
  - Cormorant Garamond (serif) — headlines and the "NovaDash" logo (weight 500; italic used for accent words and the logo "N" mark)
  - Nunito (sans) — body copy
  - JetBrains Mono (mono) — eyebrows/labels in UPPERCASE with wide tracking, nav items, buttons, prices, technical values
- **Buttons:** mono font, uppercase, wide tracking; solid emerald primary, outlined secondary
- **Cards:** soft rounded corners, hairline borders, very subtle shadows
- **Motion:** restrained fade/slide-up entrance animations
- **Tone of voice:** professional, precise, confident — B2B but human; bilingual DE/EN

## Notes for the "Any other notes?" field

> NovaDash: cloud order-management SaaS for DACH e-commerce merchants (marketing website + upcoming dashboard app). Editorial "botanical" style: deep emerald green primary, warm off-white backgrounds, Cormorant Garamond serif headlines (italic accents), Nunito body, JetBrains Mono for uppercase labels/buttons/technical values. Calm, premium, precise B2B brand voice, bilingual German/English. The design system should scale from the marketing site to a data-dense SaaS dashboard while keeping the same identity.
