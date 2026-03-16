# Structure

Directory layout and file organization.

## Root Directory
- `.github/`: GSD system configuration and agent definitions.
- `.planning/`: GSD project methodology storage and codebase map.
- `public/`: Static assets (images, icons, og-images).
- `src/`: Core application source code.
- `package.json`: Project dependencies and scripts.
- `next.config.mjs`: Next.js configuration.

## Source Directory (`src/`)
- `app/`: Next.js App Router pages and layouts.
  - `products/`: Dynamic routes for project case studies.
  - `now/`: Current status page.
  - `secret/`: Hidden logic/views.
- `components/`: UI components.
  - Core sections (Hero, About, Projects, Automations, etc.).
  - Global systems (Navigation, Terminal, PageLoader, AIAssistant).
- `content/`: Markdown/MDX content repository.
  - `products/`: Detailed product documentation.
- `data/`: Likely contains local JSON or data providers.
- `hooks/`: Custom React hooks for UI and state.
- `lib/`: Shared utility functions.
- `styles/`: Global CSS and Tailwind configuration.

## Naming Conventions
- **Components:** PascalCase (e.g., `HeroSection.tsx`).
- **Hooks:** camelCase with `use` prefix (e.g., `useScroll.ts`).
- **Styles:** standard Tailwind utility classes and CSS variables.
- **Content:** kebab-case for filenames.
