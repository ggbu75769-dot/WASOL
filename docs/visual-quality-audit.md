# WARSOL Visual Quality Audit

Date: 2026-05-13  
Sprint: White Enterprise Mega Sprint v4  
Status: Updated after full-site route rebuild, production build, six-route visual capture, and skeptical review.

## v4 Update

The active visual direction is now a white, premium, Korean enterprise B2B industrial materials website. The site no longer depends on homepage-only rescue work: Company, Technology, Products, R&D / Patents, and Contact now have route-specific sections, source-boundary content, and visual QA evidence.

Screenshot evidence for v4 lives under `docs/dev-checkpoints/screenshots/white-enterprise-v4/`. The capture set covers six routes across 360, 390, 768, 1440, and 1920 viewports. `visual-qa.json` reports no horizontal overflow, no clipped H1, no empty major sections, no console errors, and no fake backend-success claim across the captured set.

Remaining visual risks are tied to missing official assets rather than the implemented white-theme system: official CI/logo, product photos, facility/lab photos, product datasheets, and final address still need company-owned confirmation.

## Current Homepage First Impression

The homepage currently reads as a dark technical SaaS template rather than a premium Korean B2B chemical/materials company. It has useful content discipline and source-backed product/R&D facts, but the first viewport is dominated by black graphite background, neon cyan/amber accents, glass cards, and an abstract molecular visual that feels more like generic high-tech branding than WARSOL-specific industrial polymer, adhesive, coating, and eco-materials expertise.

The WARSOL name is present, but the brand mark is small and visually subordinated to the black hero treatment. A visitor understands "advanced technology" before they understand "serious materials company with practical industrial applications."

## Why The Dark Theme Misaligns

The user explicitly rejected the black/dark direction and prefers a white/light premium theme. The current site violates that preference at the token level: the body, header, surfaces, buttons, form fields, hero, section cards, and temporary brand SVG all inherit a near-black base. Because the dark color system is global, individual section edits would not be enough; the foundation itself pushes the whole site toward the wrong identity.

For WARSOL, the stronger direction is a clean white lab, polymer datasheet, industrial catalogue, and R&D dossier style. Dark sections should be restrained accents, not the dominant identity.

## Top 5 Weaknesses

1. **Wrong visual premise:** global black background and dark glass components contradict the requested white premium direction.
2. **Generic high-tech styling:** neon gradients, molecular network animation, and dark glass surfaces could belong to any AI/Web3/SaaS site.
3. **Brand underpowered:** temporary wordmark is a dark rectangle and the hero does not show a distinctive WARSOL lockup on white.
4. **Hierarchy too template-like:** sections rely on repeated cards, badges, and technical-border decoration rather than a composed material systems story.
5. **Technical credibility is present but not visually organized:** patents and products exist, but the visual system does not resemble research dossiers, material matrices, coating stacks, or application tables.

## Generic Sections

- `HeroSection`: strong copy but dark SaaS hero structure, generic gradient text, and abstract molecular visual.
- `TechnologyPlatform`: three dark cards plus pill grid; useful content but generic presentation.
- `ProductShowcase`: repeated dark cards; good product facts but catalogue hierarchy is weak.
- `PatentTimeline`: patent content is valuable, but dark card treatment hides the dossier/research feeling.
- `ApplicationIndustries`: five equal cards read as an icon-grid substitute rather than a technical operating map.
- `ContactCTA`: clear honesty about backend, but visually dark and heavy.

## Visual Hierarchy Problems

- Hero background and neon treatment overpower the industrial materials message.
- First three sections use similar dark card density, so the page rhythm feels repetitive.
- The temporary logo is not designed for a white enterprise header.
- CTA buttons inherit dark/neon styling and do not feel like premium corporate actions.
- Mobile pages become long stacks of dark cards, making the site feel heavy instead of precise.

## Copy That Feels Vague Or Needs Tightening

- "제품명보다 먼저 보이는 적용 맥락" is thoughtful but sounds internally meta; homepage should name material systems more directly.
- "물성, 표면, 공정을 함께 보는 소재 플랫폼" is directionally good but needs visual proof through systems/matrix design.
- "특허로 확인되는 기술 서사" can be more concrete as patent-backed evidence by material problem.
- English labels are useful but should be restrained and tied to Korean-first B2B meaning.

## Components To Replace Or Heavily Edit

- Replace or bypass `components/sections/HeroSection.tsx` with a light premium hero.
- Replace or heavily refactor `TechnologyPlatform`, `ProductShowcase`, `PatentTimeline`, `ApplicationIndustries`, and `ContactCTA` for homepage use.
- Refactor `app/globals.css` tokens from dark graphite to white/light technical surfaces.
- Refactor `components/layout/Header.tsx` and `components/layout/MobileNav.tsx` to white enterprise navigation.
- Refactor `components/ui/Button.tsx`, `Section.tsx`, `MetricCard.tsx`, and common `.surface` styling.
- Replace `public/brand/warsol-wordmark.svg` with a polished provisional mark for white backgrounds.

## Before Screenshot Evidence

| Viewport | Screenshot |
| --- | --- |
| Mobile 360 | `docs/dev-checkpoints/screenshots/white-theme-v3/before/home-mobile-360-before.png` |
| Mobile 390 | `docs/dev-checkpoints/screenshots/white-theme-v3/before/home-mobile-390-before.png` |
| Mobile 430 | `docs/dev-checkpoints/screenshots/white-theme-v3/before/home-mobile-430-before.png` |
| Tablet 768 | `docs/dev-checkpoints/screenshots/white-theme-v3/before/home-tablet-768-before.png` |
| Desktop 1440 | `docs/dev-checkpoints/screenshots/white-theme-v3/before/home-desktop-1440-before.png` |
| Large 1920 | `docs/dev-checkpoints/screenshots/white-theme-v3/before/home-large-1920-before.png` |

## Dark Theme Hotspots

Search command:

```bash
rg "bg-black|bg-zinc|bg-slate-9|bg-neutral-9|text-white|from-black|to-black|slate-950|zinc-950|neutral-950|#050|#0B0F|#111827|dark|graphite|deep navy" app components content public -S
```

Hotspots discovered:

- `app/globals.css`: `--bg: #05070a`, dark raised surfaces, dark body gradients, dark fixed grid overlays, white gradient text.
- `components/layout/Header.tsx`: `bg-[#05070A]/82`, `border-white/10`, white hover text.
- `components/layout/Footer.tsx`: `bg-black/32`, white text.
- `components/layout/MobileNav.tsx`: white-on-dark summary/menu treatment.
- `components/ui/Button.tsx`: neon gradient primary, dark transparent secondary/ghost.
- `components/ui/Section.tsx`: white section headings by default.
- `components/ui/MetricCard.tsx`: white metric values.
- `components/ui/MolecularField.tsx`: dark glass visual, white strokes, neon cyan/amber nodes.
- `components/forms/InquiryForm.tsx`: black form fields and white labels.
- `components/sections/*`: repeated `surface`, `text-white`, `border-white/10`, and dark glass card patterns.
- `public/brand/warsol-wordmark.svg`: black rectangle logo background.
- `public/og/warsol-og.svg`: black OpenGraph background.

## Before Scores

| Criterion | Score | Notes |
| --- | ---: | --- |
| White-theme alignment | 1 | Global theme is near-black and the hero is dark. |
| Enterprise first impression | 2 | Content is credible, but visual language feels generic dark tech. |
| WARSOL brand presence | 2 | Name appears, but mark is small and temporary dark block weakens identity. |
| Technical/materials credibility | 3 | Product and patent facts are present, but visuals do not look like material/R&D artifacts. |
| Custom visual identity | 2 | Molecular visual is custom-ish but still reads generic. |
| Typography hierarchy | 3 | Large type works, but hierarchy is heavy and template-like. |
| Layout rhythm / spacing | 3 | Spacing is technically acceptable, but repeated card rhythm is monotonous. |
| Content specificity | 4 | Source-ledger-backed content is a relative strength. |
| Mobile premium feel | 2 | Mobile becomes a long dark stack of glass cards. |
| Inquiry conversion | 3 | CTA exists and backend honesty is good, but visual trust is weak. |

## After Implementation Critique

The homepage now opens with a white premium industrial-technology direction. The visual identity is no longer black/dark-first: global tokens use white, soft blue-gray surfaces, navy text, precise borders, and restrained cyan accents. The hero shows a provisional WARSOL monogram and wordmark on white, a Korean-first materials headline, business-grade CTAs, a coating stack diagram, and a polymer blueprint panel. The first three homepage sections are all light: material systems, R&D evidence rail, and application matrix.

The biggest remaining weakness is asset authenticity rather than layout quality. The logo, photography, product TDS, official address, and email backend are still provisional or missing. The site is materially stronger, but official CI and product evidence are needed before calling the brand system final.

## After Scores

| Criterion | Before | After | Evidence |
| --- | ---: | ---: | --- |
| White-theme alignment | 1 | 5 | Global `--bg` is white; production screenshots show white hero and light first sections. |
| Enterprise first impression | 2 | 4 | Header, hero, CTA, and technical visual now read as a clean B2B materials site. |
| WARSOL brand presence | 2 | 4 | Provisional monogram/wordmark appears in header and hero; official CI still needed. |
| Technical/materials credibility | 3 | 4 | Coating stack, polymer blueprint, material systems, patent rail, and application matrix now support the copy. |
| Custom visual identity | 2 | 4 | Generic dark molecular field replaced by WARSOL-specific light technical diagrams. |
| Typography hierarchy | 3 | 4 | Korean-first headline is strong and verified unclipped at 360/390/430/768/1440/1920. |
| Layout rhythm / spacing | 3 | 4 | Repeated dark card rhythm replaced with hero + systems + dossier + matrix pacing. |
| Content specificity | 4 | 4 | Source-ledger-backed facts preserved; no fake customers/certifications/revenue added. |
| Mobile premium feel | 2 | 4 | CDP capture shows no horizontal overflow and no clipped H1 at 360/390/430. |
| Inquiry conversion | 3 | 4 | CTAs are clearer and the inquiry section asks for sample, formulation, and application conditions. |

## After Screenshot Evidence

| Viewport | Screenshot |
| --- | --- |
| Mobile 360 | `docs/dev-checkpoints/screenshots/white-theme-v3/home-mobile-360-after.png` |
| Mobile 390 | `docs/dev-checkpoints/screenshots/white-theme-v3/home-mobile-390-after.png` |
| Mobile 430 | `docs/dev-checkpoints/screenshots/white-theme-v3/home-mobile-430-after.png` |
| Tablet 768 | `docs/dev-checkpoints/screenshots/white-theme-v3/home-tablet-768-after.png` |
| Desktop 1440 | `docs/dev-checkpoints/screenshots/white-theme-v3/home-desktop-1440-after.png` |
| Large 1920 | `docs/dev-checkpoints/screenshots/white-theme-v3/home-large-1920-after.png` |
| QA JSON | `docs/dev-checkpoints/screenshots/white-theme-v3/visual-qa.json` |

## Validation Results

| Command / Check | Result | Notes |
| --- | --- | --- |
| `npm run check:white-theme` | Pass | 53 source-level guard checks for critical homepage light-theme roots. |
| `npm run typecheck` | Pass | `tsc --noEmit`. |
| `npm run lint` | Pass | ESLint zero warnings. |
| `npm run build` | Pass | Next.js 16.2.6 production build; all routes prerendered static. |
| `npm audit --audit-level=moderate` | Pass | 0 vulnerabilities. |
| `npm run capture:white-theme` against production `localhost:3001` | Pass | 360/390/430/768/1440/1920 screenshots; no horizontal overflow, no console errors, white hero background, logo/CTA visible. |

## Remaining Blockers

- Official logo/CI files are still unavailable; current mark is provisional.
- Official address is still unresolved because public sources conflict.
- Official email, CRM, or form backend is still not connected.
- Product TDS, official product photos, datasheets, certifications, and customer proof are not available.
- Deployment verification was not part of this local rescue sprint.
