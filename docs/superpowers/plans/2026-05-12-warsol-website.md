# WARSOL Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a premium, source-disciplined WARSOL corporate website that presents the company as an R&D-driven B2B chemical/materials technology partner.

**Architecture:** Create a Next.js App Router site in the workspace root. Keep facts in `content/`, UI primitives in `components/ui/`, layout in `components/layout/`, page sections in `components/sections/`, and route pages in `app/`.

**Tech Stack:** Next.js 16.2.6, React 19.2.6, TypeScript, Tailwind CSS 4.3.0, Motion for React.

---

### Task 1: Source-Disciplined Foundation

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, `eslint.config.mjs`
- Create: `content/source-ledger.ts`, `docs/content-source-ledger.md`
- Create: `docs/dev-report.md`, `docs/dev-checkpoints/lane-0-1.md`

- [x] Record repo discovery and stack decisions.
- [x] Record source-backed claims with confidence and homepage-safety labels.
- [x] Exclude unverified logo, customer, certification, revenue, and exact address claims from prominent copy.

### Task 2: Content Model

**Files:**
- Create: `content/company.ts`, `content/products.ts`, `content/patents.ts`, `content/navigation.ts`

- [x] Define company identity, positioning, contact records, address conflict notes, values, and history.
- [x] Define product categories and industry applications from source-backed technology themes.
- [x] Define patent/R&D timeline from public patent records.

### Task 3: Design System and Layout

**Files:**
- Create: `app/globals.css`, `app/layout.tsx`
- Create: `components/ui/Button.tsx`, `Section.tsx`, `GradientText.tsx`, `MetricCard.tsx`, `Reveal.tsx`, `MolecularField.tsx`
- Create: `components/layout/Header.tsx`, `MobileNav.tsx`, `Footer.tsx`

- [ ] Implement a dark graphite, metallic, cyan/green/amber technical visual system.
- [ ] Add accessible focus states and reduced-motion safety.
- [ ] Build reusable layout primitives without nested card clutter.

### Task 4: Pages and Conversion Flow

**Files:**
- Create: `app/page.tsx`, `app/company/page.tsx`, `app/technology/page.tsx`, `app/products/page.tsx`, `app/rnd/page.tsx`, `app/contact/page.tsx`
- Create: `components/sections/*`, `components/forms/InquiryForm.tsx`

- [ ] Build home hero, technology, product, patent, industry, and contact CTA sections.
- [ ] Build complete subpages with unique value and no coming-soon placeholders.
- [ ] Implement inquiry form validation and mailto fallback without fake backend success.

### Task 5: SEO, QA, and Final Report

**Files:**
- Create: `app/sitemap.ts`, `app/robots.ts`
- Update: `docs/dev-report.md`

- [ ] Add metadata, OpenGraph basics, JSON-LD, sitemap, and robots.
- [ ] Run install, typecheck, lint, build, `git diff --check` equivalent, and responsive visual QA.
- [ ] Update final report with validation results, blockers, and readiness assessment.
