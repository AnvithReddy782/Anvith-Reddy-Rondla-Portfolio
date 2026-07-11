# Integrations

External services, local systems, and deployment configurations for the portfolio.

## External Services
- **Google Fonts API (`fonts.googleapis.com` / `fonts.gstatic.com`):** Loads Outfit and Inter typography styles, alongside Material Symbols Outlined, to enforce the Axiom design system's aesthetic layer.
- **Vercel Edge Network:** Edge runtime is defined for the Open Graph image generator route under `src/app/og/route.tsx`, using `@vercel/og` to dynamically compose PNG images using JSX elements.

## Local Flows & Mock Integrations
- **Personal Interactive Terminal (`src/components/Terminal.tsx`):** Serves as a custom CLI mockup, parsing commands from `src/lib/commands.ts` (e.g. `about`, `projects`, `contact`, `hire`, `tools`) and rendering dynamic outputs matching Anvith's professional records.
- **SaaS Chatbot Mock (`src/components/AiAssistant.tsx`):** A custom simulated chatbot running client-side with preset answers (handling inquiries about promotions, production systems, and documentation methods). It features typing animations and a query limit (10 messages) that routes developers/recruiters directly to Anvith's email, requiring zero external server resources.
- **Data Collections Store (`src/lib/data.ts`):** Unifies portfolio database schemas, project details, and milestones in a single type-safe TS file, ensuring sub-second rendering speeds.

## Deployment & Hosting
- **Deployment Platform:** Vercel (standard deployment environment for Next.js App Router).
- **Target Domains:** 
  - `https://anvith-reddy.dev` (base URL defined in `src/app/layout.tsx` for SEO and Open Graph metadata).
  - `https://anvith.dev` (base URL configured in `src/app/sitemap.ts` and `src/app/robots.ts`).
- **Dynamic SEO:**
  - **Sitemap (`src/app/sitemap.ts`):** Dynamic sitemap compiler mapping the home route and dynamic project paths dynamically loaded from the projects list.
  - **Robots (`src/app/robots.ts`):** Standard SEO crawler rules mapping index directives, disallowing `/_next/` and `/api/`, and linking directly to the sitemap XML.
