# Conventions

Coding standards, naming conventions, React component patterns, and CSS/styling rules enforced in the Anvith Portfolio codebase.

## General Principles
- **Documentation First:** Every project must have a BRD (Business Requirements Document), ERD (Entity Relationship Diagram), and User Flow document BEFORE implementation. Code is always mapped to requirements first.
- **Outcome Focused:** "I can fix it and I can make it work as a product." Commitment to result over technical perfection.
- **Technical Rigor:** Systems are built under real-word constraints (government contracts), requiring robust logic even on zero-budget infrastructure.

## Directory & File Organization
- **PascalCase** for React components (e.g., `src/components/Terminal.tsx`).
- **camelCase** for custom hooks with the `use` prefix (e.g., `src/hooks/useLenis.ts`).
- **camelCase** for utility modules and data files (e.g., `src/lib/commands.ts`).
- **kebab-case** for static assets, public files, and content pages.

## TypeScript Standards
- **Strict Mode:** TypeScript strict mode is enabled (`"strict": true`). Any casting or unsafe types (`any`) should be avoided or refactored.
- **Explicit Interfaces:** Define interfaces or types for all component props, hooks options, and complex state mappings.
- **Path Aliasing:** Use the `@/*` path alias mapping to the `src/` directory for cleaner imports.

## React & Next.js Patterns
- **Functional Components:** All components must use functional syntax and hooks.
- **Client vs. Server Boundaries:**
  - Next.js App Router (Next.js 16) is used.
  - Layouts, templates, and static routes are Server Components by default.
  - Interactive components must explicitly state `"use client"` at the very top (e.g., `Terminal.tsx`, `About.tsx`, `TheStack.tsx`).
- **Global Providers:** All client-side providers (e.g., theme provider, scroll handlers) are grouped under `ClientProviders.tsx` as client components wrapping children.

## State Management (Zustand)
- All global visual state, terminal configuration, AI assistant sessions, and user settings are coordinated through a unified Zustand store in `src/lib/store.ts`.
- Selector patterns should be preferred when consuming state to prevent unnecessary component re-renders.

## CSS & Styling (Tailwind CSS v4)
- **Theme Variables:** Colors, fonts, and borders are parameterized inside Tailwind CSS v4 `@theme` block in `src/app/globals.css`.
- **CSS Custom Properties:** Styling is heavily dependent on CSS variables (`var(--color-bg)`, `var(--color-accent)`) mapped to tailwind classes (e.g., `bg-[var(--color-surface)]`, `border-[var(--color-border)]`) to allow seamless theme changes.
- **Semantic Palette:**
  - **Accent:** Cyan `#06b6d4` (`--color-accent`, executive accentuation)
  - **Signal:** Emerald `#10b981` (`--color-signal`, success/live/active states)
  - **Violet:** Indigo `#6366f1` (`--color-violet`, details and alternative states)
  - **Terracotta:** Red `#ef4444` (`--color-terracotta`, danger/errors)
  - **Teal:** Teal `#14b8a6` (`--color-teal`, analytics/highlights)
  - **Backgrounds:** `--color-bg`, `--color-bg-elevated`, `--color-bg-sunk`
- **Typography Rules:**
  - Heading font uses Outfit/Inter: `font-heading`. Display headings use tight letter-spacing (`-0.025em`).
  - Body font uses Inter/Outfit: `font-sans` with loose line-height (1.75).
  - Code and system outputs use JetBrains Mono: `font-mono`.

## Animation & Cinematic Polish
- **Core Libraries:** Framer Motion (`framer-motion`) and GSAP (`gsap`) for animation.
- **Intentional Motion:** Animations must have an outcome-oriented purpose (e.g., `blur-fade` for loading sequence, `clip-path` for name reveal, `spring` for card transitions). Avoid decorative movement that does not guide attention.
- **Frame Rate:** Always optimize animations to maintain a stable 60FPS. Ensure there are no layout shifts.
- **Lenis Smooth Scroll:** Global smooth scroll wrapper handles scrolling physics. Always design components with scroll-aware triggers (e.g., Framer Motion `whileInView`, `viewport={{ once: true }}`).
