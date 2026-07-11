# Technology Stack

Analysis of the technology stack for the Anvith Reddy Rondla Portfolio.

## Core
- **Framework:** Next.js 16.1.6 (App Router)
- **Library:** React 19.2.4 / React DOM 19.2.4
- **Language:** TypeScript 5.9.3
- **Runtime:** Node.js (with Vercel Edge runtime utilized for dynamic OG image routes)

## Styling & Theme
- **CSS:** Tailwind CSS 4.2.1 (modern CSS-first configuration using `@import "tailwindcss"` and `@theme` directive in `globals.css`)
- **Post-processing:** PostCSS 8.5.8 (via `@tailwindcss/postcss` 4.2.1), Autoprefixer 10.4.27
- **Fonts (External):** Imported dynamically via Google Fonts:
  - **Outfit:** Primary display and heading typeface
  - **Inter:** Primary body typeface
  - **Material Symbols Outlined:** Custom interface symbol fonts
  - **JetBrains Mono:** Fallback monospace font for code blocks and terminal interfaces
- **Design System:** Custom theme config defined directly under `@theme` in `globals.css`. Features light and dark themes (toggled via next-themes), translucent border tokens, and dark slate/cyan aesthetic variables (`--color-accent` set to cyan/indigo, `--color-bg` set to `#090d16`).

## Motion & Experience
- **Animations:** Framer Motion 12.36.0 (dynamic UI transitions, hover states, and smooth spring physics animations)
- **Smooth Scrolling:** Lenis 1.3.18 (asynchronously imported and managed via a custom React hook `useLenis.ts` and initialized in `ClientProviders.tsx` to handle high-performance layout scrolling)
- **Icons:** Lucide React 1.17.0 (clean SVG icon set)
- **State Management:** Zustand 5.0.13 (client-side state management)
- **Theme Wrapper:** Next Themes 0.4.6 (theme context controller writing theme preferences directly to local storage and HTML attributes)

## Content Management
- **Format:** Local TypeScript structured data arrays
- **Processing:** Directly structured in `src/lib/data.ts` (projects, techStack, personalInfo). 
- *Note:* While past templates reference MDX parsing (e.g., `next-mdx-remote`, `gray-matter`), the portfolio project currently relies on static data structured in `src/lib/data.ts` for fast build times and zero database lookup latency.

## Development Tools
- **Linter:** ESLint 9.39.4 with `eslint-config-next` 16.1.6
- **Builder:** Next.js native rust compiler/build system
- **Package Manager:** npm (utilizing `package.json` and `package-lock.json` lockfile)
