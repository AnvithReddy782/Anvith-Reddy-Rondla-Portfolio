# Research: 2025 Spatial Portfolio Tech Stack

The "Spatial Blueprint" portfolio requires a stack that balances immersive 3D graphics with the SEO and performance benefits of modern web frameworks.

## Recommended Stack

### 1. Rendering Engine: Three.js + React Three Fiber (R3F)
- **Three.js**: The industry standard for 10+ years. Most mature and feature-complete.
- **R3F**: Enables declarative 3D. Crucial for Next.js projects as it allows scene graphs to be managed like React components.
- **Why**: Declarative code, easier state management (Zustand integration), and better performance via React scheduling.

### 2. Animation Engine: GSAP + Framer Motion
- **GSAP**: For complex scroll-triggered choreographies and high-precision 3D object manipulation.
- **Framer Motion**: For the UI layer (2D overlays, case study transitions).
- **Why**: GSAP is unmatched for scroll-driven "Blueprint" sequences. Framer Motion is the standard for React 2D interactions.

### 3. Framework: Next.js 16 (App Router)
- **Next.js**: Provides SSR for MDX case studies, optimized image loading, and server-side logic for the "verifiable story."
- **React 19**: Support for the latest library versions and performance hooks.

### 4. Utility Libraries
- **@react-three/drei**: Essential helpers for environment setup, cameras, and loaders.
- **@react-three/postprocessing**: High-performance visual effects (Bloom, Depth of Field, Glitch).
- **Zustand**: Lightweight global state to bridge the 2D UI and 3D Canvas.

### 5. Asset Management
- **Format**: GLB/glTF (draco-compressed).
- **Tooling**: Blender (for initial modeling/decimation), GLTF-Pipeline (for compression).
- **Infrastructure**: Vercel/Netlify for deployment + Sanity/Contentful for content (if choosing dynamic CMS).

---
*Generated via GSD Domain Research agent*
