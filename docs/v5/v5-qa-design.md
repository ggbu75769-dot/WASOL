# WARSOL v5 QA Design

## Commands

| Command | Purpose |
|---|---|
| `npm run check:v5:routes` | Starts production server and verifies all 18 public routes return 200, have title/H1, and appear in sitemap. |
| `npm run check:v5:content` | Checks required content modules, product/application route coverage, contact copy/print code, pending TDS wording, and forbidden fake claims. |
| `npm run check:v5:white-theme` | Scans theme tokens and source files for dark-tech identity regressions and required v5 visual primitives. |
| `npm run check:v5:contact` | Browser-drives contact validation and valid summary generation. |
| `npm run capture:v5:mid` | Captures six main routes across five viewports and writes visual QA JSON. |
| `npm run capture:v5:final` | Captures main routes, product routes, application routes, and contact form states. |
| `npm run qa:v5` | Runs white-theme, content, build, route, and contact checks. |

## Visual QA Fields

The capture output records route, viewport, screenshot path, console errors, horizontal overflow, title clipping, dark-theme leftover state, and linked issue ids for form states.

## Known Limitations

- Browser screenshot checks use Chrome/Edge CDP and a production `next start` server.
- The capture commands require a fresh `npm run build` after source changes.
- Clipboard copy is asserted by code presence and summary generation; browser permissions can still block actual clipboard writes.
- Official assets and backend delivery cannot be verified without company-provided files or credentials.
