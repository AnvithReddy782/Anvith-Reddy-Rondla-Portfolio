# Concerns

Technical debt, fragile areas, and known issues.

## Legacy Branding in Planning Documents (Low Priority)
- **Problem:** The legacy branding "Axiom" has been completely removed from active source code, but it still appears in project planning/research documents (specifically `.planning/codebase/INTEGRATIONS.md` and `.planning/research/SUMMARY.md`).
- **Impact:** Minor documentation inconsistency; does not affect application runtime or metadata.
- **Required Action:** Update references in documentation files to align with Anvith Reddy Rondla's portfolio identity.

## TypeScript Build & Linting Status (Medium Priority)
- **Problem:** Historical compilation errors logged in `typescript_errors.txt` and `ts_errors_utf8.log` are resolved, and the project currently compiles with zero type errors. However, automated ESLint checks are currently unverified due to permission gate timeouts during workspace execution.
- **Impact:** Potential for minor linting/formatting deviations or warnings that could trigger errors on CI/CD build pipelines.
- **Required Action:** Manually run `npm run lint` locally and fix any reported stylistic or code quality warnings.

## Performance & Large Assets (Medium Priority)
- **Problem:** Heavy blurred background layers for aura effects, multiple scroll-parallax calculations, and uncompressed static assets like `public/profile.png` (692 KB).
- **Impact:** Increased page load time (First Contentful Paint) and potential frame rate drops on low-end mobile devices.
- **Required Action:** Convert `profile.png` to WebP/AVIF format with optimization tools to reduce size to under 100 KB, and profile rendering performance on standard mobile devices.

## Infrastructure Costs & Free-Tier Dependency
- **Problem:** The system philosophy emphasizes zero infrastructure costs, requiring strict reliance on free-tier services (e.g., Vercel's free plan).
- **Impact:** Susceptibility to service limits, bandwidth caps, or sudden changes in free-tier policies.
- **Required Action:** Monitor usage metrics on Vercel and document specific limits and backup configurations.
