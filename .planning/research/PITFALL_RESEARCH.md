# Research: Spatial Portfolio Pitfalls

Avoiding these common errors is essential for maintaining the "Professional PM" identity while pushing visual experimental limits.

## Domain Specific Pitfalls

### 1. "Work Dump" vs "Curated Narrative"
- **The Risk**: Showing all 10 projects with equal weight leads to decision fatigue.
- **The Fix**: Use Tiering (Primary, Active, Archive) as defined in the PRD. High-tier projects get more spatial interaction.

### 2. The "3D for 3D's Sake" Trap
- **The Risk**: Visual effects that distract from the "Verifiable Story" or the "BRD -> Code" message.
- **The Fix**: Every animation must communicate a product value (e.g., "The Blueprint Reveal" communicates planning discipline).

### 3. Performance "Death by Post-Processing"
- **The Risk**: Overusing Bloom, SSAO, and Glitch effects until the frame rate drops below 30FPS on average laptops.
- **The Fix**: Use `PerformanceMonitor` to dynamically scale down effects on lower-end devices.

## UX & Accessibility Pitfalls

### 4. The "Mystery Meat" Navigation
- **The Risk**: Hideous 3D navigation that requires the user to "find" how to go home or contact you.
- **The Fix**: Keep a persistent, clear 2D UI overlay for core nav. 3D is for the *content*, 2D is for the *control*.

### 5. Screen Reader Black Holes
- **The Risk**: Important context (like product metrics) being trapped inside 3D canvases where screen readers can't see them.
- **The Fix**: Mirrored content in the DOM. Ensure every 3D interaction has a semantic 2D equivalent or descriptive alt text.

### 6. Mobile Gesture Clashes
- **The Risk**: User trying to scroll the page but accidentally rotating a 3D model instead.
- **The Fix**: Use separate "Interaction Zones" or specific gesture triggers (e.g., "Two fingers to rotate").

---
*Generated via GSD Domain Research agent*
