# WARSOL v5 Mid Visual Audit

Mid capture folder: `docs/dev-checkpoints/screenshots/white-enterprise-v5/mid/`

## First Attempt

Command: `npm run capture:v5:mid`

Result: failed.

The capture produced 30 screenshots but flagged horizontal overflow at `tablet-768` on all six main routes:

- `/`
- `/company`
- `/technology`
- `/products`
- `/rnd`
- `/contact`

## Root Cause

Diagnostic DOM measurement at 768px showed the full header navigation was visible and wider than the available container. The overflowing elements were the shared `Header` nav, especially the `Resources` and `Contact` links.

## Fix

- Full header navigation now appears at `xl:flex`.
- Mobile/tablet menu remains active until `xl`.
- Header CTA uses the same `xl` breakpoint.

## Verified Result

After `npm run build`, `npm run capture:v5:mid` passed with 30 state artifacts and no horizontal overflow, console errors, dark-theme leftovers, or hero title clipping.
