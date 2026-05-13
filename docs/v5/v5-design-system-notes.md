# WARSOL v5 Design System Notes

## Direction

The v5 system is white, technical, restrained, and source-aware. It avoids dark-tech identity and uses navy only for typography, primary actions, and compact table headers.

## Tokens

- Background: `--bg`, `--bg-soft`, `--bg-technical`
- Text: `--text`, `--muted`, `--muted-strong`
- Brand: `--brand-navy`, `--brand-blue`, `--cyan`
- Evidence colors: `--green`, `--amber`, `--danger`
- Lines and shadows: `--line`, `--line-strong`, `--shadow-card`, `--shadow-soft`

## Reusable Patterns

- `Header` with desktop navigation at `xl` and tablet/mobile disclosure menu below `xl`.
- `Footer` as a white source/readiness surface.
- `PageHero` for route-level introductions.
- `Section` for full-width page bands with constrained content.
- `DataCard`, `SpecTable`, `EvidenceBadge`, `Breadcrumbs`, `Button`.
- `InquiryForm` and generated `.inquiry-summary`.

## Custom Visuals

The v5 surface now has at least ten white-theme technical visuals/patterns:

1. Layered coating stack.
2. Polymer network blueprint.
3. Material pipeline.
4. Patent evidence rail.
5. Application/industry map.
6. Inquiry preparation checklist.
7. Technical variable map.
8. Product family comparison matrix.
9. Research-to-application pathway.
10. Official-data readiness panel.

## Focus And Motion

- `:focus-visible` uses a cyan outline.
- Reduced-motion media query disables transitions/animations.
- Mobile menu is keyboard reachable through native `details/summary`.

## Print

`@media print` hides navigation and form controls while preserving the generated inquiry summary for printing.

## Blocked/Empty States

Official data, TDS/SDS, CI/logo, address, email backend, and privacy approval are explicitly marked pending or blocked instead of being faked.
