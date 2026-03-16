# Architecture

High-level system design and architectural patterns.

## Overview
The project follows a **Component-Based Architecture** using **Next.js 16 App Router**. It is a single-page portfolio (on the main route) with dynamic sub-pages for products and other specific views.

## Patterns & Layers
- **Presentation Layer (src/components/):** Atomic UI components and section-level containers. Heavy use of Framer Motion for entrance and scroll animations.
- **Content Layer (src/content/):** MDX files serving as the primary data source for projects and storytelling elements.
- **Routing Layer (src/app/):** Standard Next.js App Router structure. Handles SEO metadata and basic page layouts.
- **Utility Layer (src/lib/ & src/hooks/):** Reusable logic for data fetching, UI interactions, and integrations.

## Data Flow
1. **Static Generation:** MDX content is read during build time (or on demand) using `gray-matter`.
2. **Dynamic Rendering:** Content is passed to components which use `next-mdx-remote` for rendering.
3. **Client-Side Experience:** `ClientProviders` initializes global UI systems like Lenis (smooth scroll) and potentially state management.

## Key Abstractions
- **Grid System:** Unified 42/58 split grid for consistent layout across sections.
- **Axiom Design System:** Custom theme tokens and utility classes defined in `globals.css` for glassmorphism and cinematic effects.
- **Automations Engine:** Visualization of production systems via flow diagrams in specialized sections.
