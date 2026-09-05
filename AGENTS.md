# WARSOL

Next.js corporate site; GitHub Pages publishes a static export from master.

- Preserve Korean copy, approved company/product facts, and accessibility. Do not invent certifications, customer evidence, or successful form delivery.
- The inquiry form prepares a local summary. `/api/inquiry` must fail closed with 503 and `official-data-needed` until a real delivery backend is configured and approved; never issue a receipt for an unsent message.
- Use npm from package-lock.json. Validate code with npm run lint, npm run typecheck, and npm run test:inquiry. For a release, run the static build with GITHUB_PAGES=true and the production NEXT_PUBLIC_SITE_URL.
- Run checks once per relevant change. Avoid repeating a completed static build just to verify documentation. Inspect the affected route when behavior changes.
- Preserve unrelated screenshots, dirty work, active processes, and the existing Pages deployment target. Stage only reviewed paths.
