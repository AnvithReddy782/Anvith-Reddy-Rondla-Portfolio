# Structure

Directory layout, file organization, and layout hierarchy for the portfolio project.

## Project Structure Overview

```text
.
├── .github/                # GitHub Actions workflows and settings
├── .gsd/                   # GSD project methodology storage
├── .planning/              # Roadmap, Requirements, and Codebase Docs
│   ├── codebase/           # Codebase documentation files
│   ├── phases/             # Detailed implementation checklists
│   └── PROJECT.md          # Core vision and stack mapping
├── public/                 # Static assets (images, icons, resumes)
├── src/                    # Source directory
│   ├── app/                # Next.js App Router entrypoints & styles
│   ├── components/         # UI sections and modules
│   ├── hooks/              # Custom React hooks
│   └── lib/                # Shared state, static data, and logic
├── package.json            # Project dependencies and script runner
└── tsconfig.json           # TypeScript configuration details
```

---

## Source Directory (`src/`) Detailed Layout

### 1. `app/` (Routing & Configuration)
- **`layout.tsx`:** Base entry layout. Defines metadata headers, OpenGraph profiles, and embeds JSON-LD schemas for Search Engine Optimization (SEO).
- **`page.tsx`:** Primary home route. Combines static components and lazy-loaded modules.
- **`globals.css`:** Global styles file incorporating Tailwind CSS 4 variables, font imports (Outfit, Inter, Material Symbols), theme overrides, and custom layout utilities.
- **`og/route.tsx`:** OpenGraph dynamic image endpoint using Vercel edge runtime to serve social cards.
- **`projects/[slug]/`:** Dynamic case study renderer pages.
  - `page.tsx`: Resolves parameter paths and builds decision-trail timelines.
  - `not-found.tsx`: Renders custom 404 views if a slug is missing from the database.
- **`robots.ts` & `sitemap.ts`:** Automated search crawler map configurations.

### 2. `components/` (Interface & Sections)
- **`Navigation.tsx`:** Fixed header menu with desktop/mobile overlays and dark mode button.
- **`Hero.tsx`:** Headline intro, contact CTAs, layout split grid, and key metric indicators.
- **`About.tsx`:** Summary text, career highlights, and tab-selector area mapping focus areas.
- **`EvidenceBoard.tsx`:** Production tier splits, project cards, and detailed popup dialog overlay.
- **`MigrationStory.tsx`:** Vertical vector timeline tracking transition stages.
- **`GovernmentSection.tsx`:** Vector state-level marker map of India with rolling counters.
- **`TheStack.tsx`:** Core/Familiar/Explored skill classifications and infinite marquee animation loop.
- **`Contact.tsx`:** Recruitment highlights, email links, and interactive command terminal.
- **`Terminal.tsx`:** Custom console prompt executing developer commands.
- **`AiAssistant.tsx`:** Fixed float button opening the preset QA chatbot interface.
- **`ClientProviders.tsx`:** Wraps page routes in Lenis scrollers and next-themes variables.
- **`ScrollProgress.tsx`:** Translucent bar at the top tracking window height coverage.
- **`StatusBadge.tsx` & `CaseStudyPreview.tsx`:** Reusable indicators and telemetry grids.
- **`Footer.tsx`:** Copyright notices, links, and floating scroll-to-top particle emitter.

### 3. `hooks/` (Custom Behaviors)
- **`useLenis.ts`:** Initializes scroll listeners and pause/play bindings.
- **`useCountUp.ts`:** Incrementing counter calculations paired with IntersectionObserver targets.

### 4. `lib/` (Core Logic)
- **`commands.ts`:** Pre-registered console command handlers, helper descriptions, and results mappings.
- **`data.ts`:** Central store of projects list, milestones, stack classifications, and biographical data.
- **`store.ts`:** Zustand application state store with SSR safety checks.

---

## Component Hierarchy & Layout Structure

### Home Page Component Tree (`src/app/page.tsx`)
```text
RootLayout (app/layout.tsx)
 └── ClientProviders (components/ClientProviders.tsx)
      ├── ScrollProgress (components/ScrollProgress.tsx)
      └── Navigation (components/Navigation.tsx)
      └── main#main (app/page.tsx)
           ├── Hero (components/Hero.tsx)
           ├── About (components/About.tsx)
           │    └── FocusSelector (inline component)
           ├── EvidenceBoard (components/EvidenceBoard.tsx) [dynamic]
           │    └── ProjectCard (inline component)
           ├── MigrationStory (components/MigrationStory.tsx) [dynamic]
           ├── GovernmentSection (components/GovernmentSection.tsx) [dynamic]
           │    └── StatItem (inline component)
           ├── TheStack (components/TheStack.tsx) [dynamic]
           │    └── TierGroup (inline component)
           ├── Contact (components/Contact.tsx) [dynamic]
           │    └── Terminal (components/Terminal.tsx)
           └── Footer (components/Footer.tsx)
 └── AiAssistant (components/AiAssistant.tsx) [dynamic]
```

### Case Study Page Component Tree (`src/app/projects/[slug]/page.tsx`)
```text
RootLayout (app/layout.tsx)
 └── ClientProviders (components/ClientProviders.tsx)
      └── ProjectPage (app/projects/[slug]/page.tsx)
           ├── StatusBadge (components/StatusBadge.tsx)
           ├── CaseStudyPreview (components/CaseStudyPreview.tsx)
           └── Back / External Link Anchors
```

---

## Coding & Naming Conventions

- **File Naming:**
  - UI Components: PascalCase (e.g., `EvidenceBoard.tsx`)
  - Hooks: camelCase starting with `use` (e.g., `useCountUp.ts`)
  - Utility/Logic files: camelCase (e.g., `commands.ts`)
  - Directory Names: kebab-case or standard lowercase (e.g., `[slug]`, `codebase`)
- **Styles & Themes:**
  - Layout definitions utilize Tailwind CSS 4 configuration.
  - Custom colors and theme flags are defined using global CSS variables in `src/app/globals.css` inside the `@theme` block.
