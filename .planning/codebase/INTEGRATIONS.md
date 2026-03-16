# Integrations

External services and internal system integrations.

## External Services
- **Font Providers:** 
  - `api.fontshare.com` (Clash Display, General Sans)
  - `fonts.googleapis.com` (JetBrains Mono)
- **Deployment Platform:** Likely Vercel (Next.js standard)
- **Analytics:** Metadata references `axiom.pm` as the base URL.

## Internal Data Flow
- **MDX Content:** Static MDX files in `src/content/` are processed with `gray-matter` and rendered via `next-mdx-remote`.
- **Client State:** Managed via React hooks and Framer Motion for UI states.
- **Project Structure:** Features a clear split between components, data, and styles.

## Deployment & Hosting
- **Metadata Base:** `https://axiom.pm`
- **Robots:** Configured for indexing and following.
- **Sitemap:** Dynamic implementation at `src/app/sitemap.ts`.
