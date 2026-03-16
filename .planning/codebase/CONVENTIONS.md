# Conventions

Coding standards and project-specific patterns.

## General Principles
- **Documentation First:** Every project must have a BRD (Business Requirements Document), ERD (Entity Relationship Diagram), and User Flow document BEFORE implementation.
- **Outcome Focused:** "I can fix it and I can make it work as a product." Commitment to result over technical perfection.
- **Technical Rigor:** Systems are built under real-word constraints (government contracts), requiring robust logic even on zero-budget infrastructure.

## Frontend Patterns
- **React Components:** Use functional components with hooks.
- **Styling:** Strict adherence to the "Axiom" design system tokens. Use of Tailwind CSS 4 utility classes preferred.
- **Animations:** Intentional motion using Framer Motion and GSAP. Animations should communicate outcome (e.g., "zoom" for focus, "pulse" for live state).
- **Typography:** Display text (>48px) uses tight letter-spacing (-0.025em). Body text uses loose line-height (1.75).

## Directory Organization
- **Atomic Components:** Stored in `src/components`.
- **Routing:** Handled via Next.js App Router in `src/app`.
- **Data:** Centered around MDX content in `src/content`.
