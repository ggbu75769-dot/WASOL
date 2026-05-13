# WARSOL v5 Starting State

Generated: 2026-05-13 10:00 KST

## Repository Protection

- Working directory: `F:\WASOL`
- Git at start: absent
- Action taken: initialized a local-only git repository for checkpointing.
- Baseline commit: `e72e7e6 chore: baseline before warsol v5 deep sprint`
- Remote status: no remote configured or used.
- Destructive actions: none. No clean/reset/force checkout/push/deploy was run.

## Initial Commands

| Command | Result | Notes |
|---|---|---|
| `git status --short -uall` | failed before init | `fatal: not a git repository` confirmed no git metadata. |
| `node -v` | passed | `v25.2.1` |
| `npm -v` | passed | `11.6.2` |
| `npm run typecheck` | failed before build, then passed after build | First run failed because `.next/types/cache-life.d.ts` and `.next/types/validator.ts` were missing from stale generated types. `npm run build` regenerated Next types; a fresh `npm run typecheck` then exited 0. |
| `npm run lint` | passed | `eslint . --max-warnings=0` exited 0. |
| `npm run build` | passed | Next 16.2.6 production build completed and prerendered 10 static routes. |

## Baseline Route Surface

The pre-v5 site had six public content routes:

- `/`
- `/company`
- `/technology`
- `/products`
- `/rnd`
- `/contact`

No product detail routes, application guide routes, resources route, or privacy route existed at baseline. The baseline sitemap only listed the six top-level paths.

## Baseline Evidence

- Baseline screenshot folder: `docs/dev-checkpoints/screenshots/white-enterprise-v5/baseline/`
- Baseline screenshot count: 30 route/viewport PNGs plus `visual-qa.json`
- Baseline capture source: reused the existing enterprise v4 capture harness before any v5 UI implementation.
- Required baseline viewports captured: 360, 390, 768, 1440, 1920.

## Preservation Notes

The existing v4 screenshot harness was reused once for baseline capture, which refreshed `docs/dev-checkpoints/screenshots/white-enterprise-v4/visual-qa.json` timestamp data. The v5 baseline copies are kept separately under `white-enterprise-v5/baseline/`.
