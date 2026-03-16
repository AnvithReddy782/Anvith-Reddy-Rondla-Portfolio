# Research: Spatial Web Architecture & Optimization

High-performance 3D requires a strict separation of concerns and aggressive optimization strategies.

## Architectural Patterns

### 1. The Bridge Pattern (Zustand + Refs)
- Use **Zustand** for the "Shared State" (current section, user preferences).
- Use **Mutable Refs** in the `useFrame` loop to update Three.js object positions/rotations without triggering React re-renders.
- **Why**: Prevents UI jank by keeping high-frequency updates out of the React DOM tree.

### 2. Composition-over-Configuration
- Build self-contained 3D components (`<BlueprintGrid />`, `<ProjectModel />`) that manage their own internal logic and shaders.
- Standardize on a scene layout with specialized cameras (Perspective for depth, Orthographic for "Blueprint" views).

### 3. Content Layering
- **Layer 1: The Core UI** (React DOM). Standard HTML/CSS for readability and SEO.
- **Layer 2: The Spatial Overlay** (R3F Canvas). 3D elements that provide depth and cinematic flair.
- **Layer 3: The Interactive Layer** (Canvas + Shaders). Mouse-reactive particles, mesh-refraction, and post-processing.

## Optimization Strategies

### 1. Rendering Lifecycle
- **frameloop="demand"**: Only render when something changes. Reduces CPU usage for static reading.
- **On-Demand Mounting**: Use `React.Suspense` and `lazy` loading for 3D assets to prevent large initial bundles.

### 2. Geometry & Materials
- **Instancing**: Multi-instance geometry for repeating elements (the grid dots, connector nodes).
- **Resource Reuse**: Share `useMemo`-ized geometries and materials across different project cards.

### 3. Texture Compression
- Use **KTX2** or highly compressed **WebP** for 3D textures.
- Target `dpr` (device pixel ratio) scaling: cap at 2.0 to prevent performance drops on 4K/retina screens.

---
*Generated via GSD Domain Research agent*
