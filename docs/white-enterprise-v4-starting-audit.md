# WARSOL White Enterprise v4 Starting Audit

Date: 2026-05-13  
Repository root: `F:\WASOL`  
Sprint: White Enterprise Mega Sprint v4

## 1. Baseline Commands

| Command | Result | Notes |
| --- | --- | --- |
| `git status --short -uall` | Blocked | `F:\WASOL` is not a git repository. `git diff --check` will also be unavailable unless a parent `.git` root is supplied. |
| `npm run typecheck` | Pass | `tsc --noEmit`. |
| `npm run lint` | Pass | ESLint zero warnings. |
| `npm run build` | Pass | Next.js 16.2.6 production build prerenders `/`, `/company`, `/technology`, `/products`, `/rnd`, `/contact`, `/robots.txt`, `/sitemap.xml`. |

## 2. Existing Strengths From v3

- The site is already a Next.js App Router website with six core routes.
- The global visual system has moved away from a dark homepage toward white, blue-gray, navy, and cyan tokens.
- Existing reusable primitives include `Header`, `MobileNav`, `Footer`, `Button`, `Section`, `PageHero`, `LightPremiumHero`, `MaterialSystems`, `RdEvidenceRail`, `ApplicationMatrix`, `TechnicalInquiryCta`, `LayeredCoatingVisual`, `PolymerBlueprint`, and `InquiryForm`.
- Core content files already separate company facts, products, patents, navigation, and source ledger records.
- Existing `sitemap.ts`, `robots.ts`, Organization JSON-LD, favicon, and OG image are present.
- v3 screenshot evidence exists for the homepage only under `docs/dev-checkpoints/screenshots/white-theme-v3/`.

## 3. Why v3 Ended Too Small

- v3 focused on global tokens, homepage rescue, first-section visuals, and a homepage screenshot pass.
- The full-site route inventory exists, but several routes still rely on broad single sections instead of page-specific enterprise content architecture.
- The product route is the clearest thin route: it has a hero and one long product-family section, but lacks a decision guide, TDS pending pattern, application comparison, and inquiry routing sections.
- The contact flow validates basic identity/email/product/message fields, but it does not yet ask for category, application, substrate, environment, required property, sample stage, or generate a technical summary detailed enough for B2B material consultation.
- QA automation is homepage-biased. `capture-white-theme.mjs` captures only `/` and writes to the v3 folder.
- Package scripts are missing `check:content-quality`, `smoke:routes`, `capture:enterprise-v4`, `check:contact-flow`, and `qa:enterprise-v4`.
- Documentation still references v3 as the active status and does not yet contain a v4 work-size gated report.

## 4. Route Thinness Audit

| Route | Current State | v4 Gap |
| --- | --- | --- |
| `/` Home | Strong white hero, material systems, R&D rail, application matrix, inquiry CTA. | Needs one more technical flow/pipeline concept and final v4 screenshot evidence across all required viewports. |
| `/company` Company | Hero, identity panel, values, timeline, address-status panel. | Needs clearer "what WARSOL does", operating principles, source-backed facts table, official asset request/trust boundary section. |
| `/technology` Technology | Hero, technology pillar grid, process cards, product links, CTA. | Needs named technology platforms: water-based polymer, adhesion engineering, functional coating, dispersion control, waterproof/thermal protection, and a custom process visual. |
| `/products` Products | Hero and product-family cards. | Needs product taxonomy overview, family cards with TDS-pending discipline, application matrix, inquiry decision guide, and no fake grade names/downloads. |
| `/rnd` R&D / Patents | Hero, research themes, patent timeline, source discipline CTA. | Needs patent detail cards, evidence-source ledger preview, research-to-application pathway, and more explicit source-status handling. |
| `/contact` Contact | Hero, basic form, public DB contact, checklist, address note. | Needs technical inquiry categories, substrate/environment/property fields, stronger validation, generated summary, backend blocked state, and official data request checklist. |

## 5. Dark-theme Leftovers

The direct dark-token search over `app`, `components`, `content`, and `public` produced no source hits for the critical rejected tokens:

`bg-black`, `bg-zinc`, `bg-neutral`, `bg-slate-9`, `slate-950`, `zinc-950`, `neutral-950`, `from-black`, `to-black`, `graphite`, `neon`, `glass`, `#050`, `#0B0F`, `#111827`.

Remaining acceptable dark usage:

- Footer uses a restrained navy contrast band, which is allowed by the packet as an optional footer contrast band.
- Body text uses dark navy/black-range colors for readability.
- Some table headers use navy with white text for contrast, not as the main identity.

## 6. Placeholder / Fake-claim Risk Audit

Search findings:

- `components/forms/InquiryForm.tsx` uses a normal input placeholder. This is acceptable but the final content guard should avoid treating form placeholders as fake content.
- Existing docs explicitly mention avoided fake claims and placeholder route shells.
- `content/source-ledger.ts` contains `ISO 9001` only inside an unverified ledger entry marked not homepage-safe.

Risk controls still needed:

- Add a content-quality guard that fails on placeholder copy, fabricated customer/certification/revenue claims, unsupported superlatives, and mojibake signatures.
- Keep unverified certification/history information inside source ledger or official-data-needed docs, not route marketing copy.
- Ensure structured data does not include unverified address, certification, customer, or award claims.

## 7. Missing QA Gates

Required v4 gates not yet present:

- Full six-route route smoke check.
- Full six-route, five-viewport visual capture into `docs/dev-checkpoints/screenshots/white-enterprise-v4/`.
- `visual-qa.json` containing route, viewport, overflow, console errors, hero/title clipping, and notes.
- Contact flow check that validates required fields and summary generation.
- Content quality/fake-claim guard.
- Package-level `qa:enterprise-v4` command.

## 8. Official Data Still Blocked

- Official WARSOL logo/CI files.
- Official address and address precedence.
- Official email, CRM, or form API endpoint.
- Product TDS files, product grade names, and official product photos.
- Certification documents, if any are intended for public launch.
- Customer references, case studies, awards, revenue, or partner claims.
- Deployment domain and legal/company approval.

## 9. Role-pass Ledger Start

| Role-pass | Initial Finding |
| --- | --- |
| Product Scope Controller | v4 must expand full route coverage, not just homepage polish. |
| Enterprise Art Director | Visual direction is now mostly white, but route depth and technical visual inventory need expansion. |
| Design System Engineer | Existing primitives are useful; add missing data cards, evidence badges, spec tables, product cards, process visuals, and official-asset panels. |
| Frontend Architecture Engineer | Current routes are simple and maintainable; content should move into typed content modules rather than more inline page copy. |
| Company Content Strategist | Company page needs stronger trust-boundary handling and fact table. |
| Technology Content Strategist | Technology page needs platform-level narrative instead of only a pillar grid. |
| Product Taxonomy Strategist | Product route needs taxonomy, TDS-pending pattern, application context, and inquiry guide. |
| R&D / Patent Evidence Strategist | Patent data exists but should become a richer evidence dossier. |
| Contact Flow Engineer | Inquiry form is safe but too shallow for a B2B technical inquiry. |
| SEO / Structured Data Engineer | Metadata exists; structured data must remain conservative and route metadata should stay specific. |
| Visual QA Engineer | v3 capture is homepage-only and writes to the old folder. |
| Accessibility / Responsive QA Engineer | Need full route/viewports evidence plus field labels and keyboard-accessible form checks. |
| Content Truth Reviewer | Fake claims are mostly avoided; add automated guard and official-data-needed doc. |
| Final Skeptical Reviewer | No production-ready claim is possible without official CI, address, product data, contact backend, deployment, and approval. |
