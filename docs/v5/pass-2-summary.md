# Pass 2 Summary - Route, Product, And Application Depth

## Scope

Pass 2 moved the site beyond six top-level pages into route-level product and application depth.

## Changes

- Added central route registry in `content/routes.ts`.
- Reworked product data in `content/products.ts` with stable slugs, English names, technical variables, official-data status, source ids, and inquiry prompts.
- Reworked application data in `content/applications.ts` with four guide slugs, material challenges, relevant product families, checklist items, and risk notes.
- Added product detail routes:
  - `/products/adhesion-systems`
  - `/products/functional-coatings`
  - `/products/waterproof-thermal-protection`
  - `/products/dispersion-additives`
  - `/products/eco-safety-materials`
- Added application guide routes:
  - `/applications/building-envelope`
  - `/applications/coating-paint`
  - `/applications/packaging-label`
  - `/applications/energy-storage-safety`
- Added `/applications`, `/resources`, `/privacy`, and custom `not-found` route.
- Updated sitemap generation to use all public routes.

## Validation

- `npm run build` prerendered 22 app routes.
- `npm run check:v5:routes` passed for 18 public URL paths.
- `npm run check:v5:content` passed after allowing the explicitly unverified ISO mention only inside `content/source-ledger.ts`.

## Issues Handled

Primary ledger items: `V5-007`, `V5-011`, `V5-013` through `V5-018`, `V5-032`, `V5-033`, `V5-042`, `V5-048`.
