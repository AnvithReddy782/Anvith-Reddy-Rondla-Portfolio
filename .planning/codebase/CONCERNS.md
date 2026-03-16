# Concerns

Technical debt, fragile areas, and known issues.

## Branding Inconsistency (High Priority)
- **Problem:** The legacy branding "Axiom" and the URL `axiom.pm` are still present in metadata, CSS classes, and component labels across the entire project.
- **Impact:** Misalignment with the user's primary identity (Anvith Reddy Rondla).
- **Required Action:** Systematically replace "Axiom" references with "Anvith Portfolio" or generic functional names.

## TypeScript Build Errors
- **Problem:** `src/components/SkillsSection.tsx` reported significant Framer Motion type errors in recent logs, yet the file appears to be missing from the current `src/components` directory.
- **Impact:** Potential broken imports or missing features.
- **Required Action:** Verify if `SkillsSection.tsx` was intended to be deleted or if it's an orphaned error from a previous build state.

## Performance & Assets
- **Problem:** Use of blurred background duplicates for aura effects and multiple parallax layers.
- **Impact:** Potential frame rate drops on low-end devices or mobile browsers.
- **Required Action:** Monitor performance and consider CSS-only alternatives if FPS drops are detected.

## Infrastructure Costs
- **Problem:** System philosophy emphasizes ₹0 infrastructure costs, which requires strict reliance on free-tier services.
- **Impact:** Fragility if free tiers are reduced or usage spikes.
- **Required Action:** Document the specific free-tier dependencies and limits for each production system.
