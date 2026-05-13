# WARSOL White Enterprise v4 Site Blueprint

Date: 2026-05-13  
Purpose: Prevent homepage-only polish by mapping routes, sections, source status, components, and QA evidence before implementation.

## 1. Route Plan

| Route | Page Purpose | Required Evidence |
| --- | --- | --- |
| `/` Home | Explain WARSOL within 5 seconds and route visitors to technology, products, R&D, and inquiry. | 5 viewport screenshots, metadata, no overflow, no console errors, visible WARSOL identity. |
| `/company` Company | Present a credible corporate profile without inventing official assets. | 5 viewport screenshots, source-backed facts table, pending official data panel. |
| `/technology` Technology | Explain the technical platforms behind WARSOL material systems. | 5 viewport screenshots, platform sections, process visual, technical variable prompts. |
| `/products` Products | Help buyers route an inquiry without fake grade names or fake TDS downloads. | 5 viewport screenshots, family cards, application matrix, TDS pending pattern. |
| `/rnd` R&D / Patents | Convert patent/source evidence into credibility without overclaiming. | 5 viewport screenshots, evidence badges, patent detail cards, source ledger preview. |
| `/contact` Contact | Provide a polished technical inquiry flow and honest backend-blocked state. | 5 viewport screenshots, contact-flow check, required validation, generated summary. |

## 2. Section Inventory Target

| # | Route | Section | Purpose | Source Status |
| ---: | --- | --- | --- | --- |
| 1 | Home | Enterprise hero | 5-second explanation of water-based polymer, adhesive, coating, dispersion, waterproof/thermal, eco-safety systems. | Public DB + source ledger |
| 2 | Home | Material systems overview | Four clear systems: adhesion, coating, dispersion, eco-safety. | Public DB + patents |
| 3 | Home | Technical visual / coating stack | Make technical capability visible on white background. | Design artifact, not factual claim |
| 4 | Home | Material pipeline/process preview | Show requirement-to-formulation-to-application workflow. | Safe internal positioning |
| 5 | Home | R&D evidence preview | Patent evidence rail. | Patent database |
| 6 | Home | Application matrix preview | Map industries/applications to material controls. | Safe application taxonomy |
| 7 | Home | Inquiry CTA | Move visitors into technical inquiry. | Backend pending disclosure |
| 8 | Company | Company identity hero | Corporate profile introduction. | Public DB |
| 9 | Company | What WARSOL does | B2B material company positioning. | Public DB + source ledger |
| 10 | Company | Operating principles | Manufacturing/R&D philosophy without unsupported claims. | Safe positioning |
| 11 | Company | History/evidence timeline | Public DB and patent-backed timeline. | Public DB + patent DB |
| 12 | Company | Source-backed facts table | Show fact, confidence, and launch use. | Source ledger |
| 13 | Company | Official asset request/trust boundary | Clarify missing CI, address, photos, TDS, certifications. | Pending official data |
| 14 | Technology | Water-based polymer platform | Explain water-based polymer and resin platform. | Public DB + safe technical copy |
| 15 | Technology | Adhesion engineering | Connect acrylic emulsion adhesive patent to application variables. | Patent DB |
| 16 | Technology | Functional coating platform | Explain coating, film, surface protection. | Public DB + patent DB |
| 17 | Technology | Dispersion/polymer control | Explain particle stability and process handling. | Public DB |
| 18 | Technology | Waterproof/thermal protection | Explain waterproof and thermal coating problem space. | Patent DB |
| 19 | Technology | Technical process visual | Map inquiry variables to formulation decisions. | Safe technical workflow |
| 20 | Products | Product family overview | Introduce taxonomy without fake grades. | Public DB + source ledger |
| 21 | Products | Adhesive/tackifier systems | Applications/properties/TDS pending. | Patent DB + public DB |
| 22 | Products | Functional coating systems | Applications/properties/TDS pending. | Patent DB + public DB |
| 23 | Products | Waterproof/thermal coating solutions | Applications/properties/TDS pending. | Patent DB |
| 24 | Products | Dispersion/additive systems | Applications/properties/TDS pending. | Public DB |
| 25 | Products | Eco-safety material systems | Applications/properties/TDS pending. | Patent DB |
| 26 | Products | Product inquiry decision guide | Help buyers prepare a technical inquiry. | Backend pending |
| 27 | R&D | R&D evidence hero | Patent/source-led credibility framing. | Patent DB |
| 28 | R&D | Research themes | Summarize water-based conversion, surface reliability, eco-safety. | Safe synthesis |
| 29 | R&D | Patent timeline | Publication-by-publication timeline. | Patent DB |
| 30 | R&D | Patent detail cards | Problem, material approach, source status. | Patent DB |
| 31 | R&D | Evidence-source ledger preview | Show source discipline and link to ledger. | Source ledger |
| 32 | R&D | Research-to-application pathway | Connect evidence to use cases without overclaiming. | Safe synthesis |
| 33 | Contact | Technical inquiry hero | Explain inquiry preparation and backend limits. | Backend pending |
| 34 | Contact | Inquiry form with validation | Required technical fields and accessible labels. | Local UI only |
| 35 | Contact | Inquiry summary generation | Copy-ready technical summary, no fake send success. | Local UI only |
| 36 | Contact | Contact readiness/backend blocked state | Clear operational limitation. | Pending backend |
| 37 | Contact | Official asset/product-data request checklist | Prepare data needed for launch. | Pending official data |

## 3. Component / Primitive Plan

Reusable primitives to keep or improve:

- `Header`
- `MobileNav`
- `Footer`
- `PageHero`
- `Section`
- `Button`
- `EvidenceBadge`
- `DataCard`
- `SpecTable`
- `ProductFamilyCard`
- `ApplicationMatrix`
- `PatentTimeline`
- `InquiryForm`
- `InquirySummary` behavior inside the form
- `LayeredCoatingVisual`
- `PolymerBlueprint`
- `ProcessFlowVisual`
- `InquiryPreparationVisual`
- `OfficialAssetNeeded`

## 4. Content Model Plan

| File | Responsibility |
| --- | --- |
| `content/company.ts` | Company identity, source-backed facts, pending facts, operating principles. |
| `content/technology.ts` | Technology platforms, process steps, technical inquiry variables. |
| `content/products.ts` | Product families, applications, properties, source IDs, TDS pending status, inquiry prompts. |
| `content/patents.ts` | Patent/evidence records, research themes, research-to-application pathway. |
| `content/applications.ts` | Industry/application matrix and route-safe application descriptions. |
| `content/source-ledger.ts` | Structured claim/source/confidence/homepage-safe records. |
| `docs/content-source-ledger.md` | Human-readable source ledger. |
| `docs/official-data-needed.md` | Official logo, address, email, photos, TDS, product grades, certifications, customer references. |

## 5. QA Evidence Plan

| Check | Command | Artifact |
| --- | --- | --- |
| TypeScript | `npm run typecheck` | Terminal result |
| ESLint | `npm run lint` | Terminal result |
| White theme guard | `npm run check:white-theme` | Terminal result |
| Content quality guard | `npm run check:content-quality` | Terminal result |
| Production build | `npm run build` | Terminal result |
| Route smoke | `npm run smoke:routes` | `docs/dev-checkpoints/enterprise-v4-route-smoke.json` |
| Visual capture | `npm run capture:enterprise-v4` | `docs/dev-checkpoints/screenshots/white-enterprise-v4/visual-qa.json` and 30 screenshots |
| Contact flow | `npm run check:contact-flow` | `docs/dev-checkpoints/enterprise-v4-contact-flow.json` |
| Audit | `npm audit --audit-level=moderate` | Terminal result |
| Whitespace diff check | `git diff --check` | Blocked unless `.git` is available |

## 6. Implementation Order

1. Add failing v4 guards/scripts and package commands.
2. Expand content modules and official-data-needed docs.
3. Add reusable data/visual primitives.
4. Rebuild route sections from content models.
5. Deepen contact inquiry fields and summary generation.
6. Update metadata/structured data conservatively.
7. Run build, smoke, capture, contact flow, and content/theme guards.
8. Inspect screenshots and fix layout issues.
9. Write final report and update visual-quality audit.
