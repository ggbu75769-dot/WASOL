# WARSOL v5 Baseline Rendered Visual Audit

Baseline capture folder: `docs/dev-checkpoints/screenshots/white-enterprise-v5/baseline/`

## Summary

The baseline site is already a light enterprise direction, but it is still a six-route v4 surface. The first viewport communicates polymer, adhesion, and coating, yet the site still lacks enough depth for a B2B technical evaluator: no product family detail pages, no application guides, no resources/readiness route, no privacy route, no route-specific proof surface, and no v5 QA scripts. The contact page has a useful technical form, but the generated summary cannot be copied or printed, application choices are not structured, and the frontend still depends on several broad route-level sections rather than deeper decision paths.

## Captured Routes And Viewports

| Route | Viewports | Evidence |
|---|---|---|
| `/` | 360, 390, 768, 1440, 1920 | `home-*.png` |
| `/company` | 360, 390, 768, 1440, 1920 | `company-*.png` |
| `/technology` | 360, 390, 768, 1440, 1920 | `technology-*.png` |
| `/products` | 360, 390, 768, 1440, 1920 | `products-*.png` |
| `/rnd` | 360, 390, 768, 1440, 1920 | `rnd-*.png` |
| `/contact` | 360, 390, 768, 1440, 1920 | `contact-*.png` |

## High-Risk Baseline Findings

- The site is still shallow for v5: six top-level routes only.
- The product route uses in-page family cards, not detail pages that can be linked, indexed, and used for inquiry preparation.
- Application content exists as a matrix, not route-level guides.
- Contact UX does not provide copy/print operations for the generated technical summary.
- Route metadata and sitemap coverage are too thin for the final v5 surface.
- The footer uses a dark navy block, which weakens the requested mostly-white enterprise identity.
- The visual system has several good primitives, but fewer than the ten required custom visual concepts are visibly deployed.

## Ledger

The concrete issue ledger is saved at `docs/v5/v5-issue-ledger.json` and starts with 48 baseline items. Each item has route, viewport, severity, category, planned fix, and baseline evidence.
