# Project: Anvith Portfolio (Spatial Blueprint)

## Core Vision
Build a world-class, immersive portfolio that proves Anvith's "Systems Builder" identity. The site is a living artifact of PM discipline—documented before building, solo-executed, and cinematic in its delivery.

## Engineering Standard: "World-Class"
- **Zero-Compromise Performance**: 60fps animations, optimized GLSL, and zero layout shift.
- **Cinematic Motion**: Every reveal, transition, and hover must communicate a purpose (Precision, Continuous Flow, Live System).
- **Spatial Immersion**: A 3D layer that is unified with the DOM, not a separate background.
- **Adaptive Depth**: Content depth scales based on user scroll velocity.

## Milestones

### Milestone 1: Initial GSD Setup & Baseline
- Setup structure, configure GSD templates, and map initial codebase.

### Milestone 2: Zero-Reference Design Refactoring (Active)
- Completely rebuild the website's design, style sheet (`globals.css`), fonts, layout system, and interactive components.
- Establish zero-reference implementations based purely on the PRD specification (no code reuse from older component layouts).
- Implement the "Spatial Blueprint" / "Builder's Notebook" visual theme.

## Active Goals (Milestone 2)
1. **Semantic Color & Token System**: Align colors completely to #0A0A0A background, #141414 surface, #F2EDE4 text, and Saffron Orange / Precision Teal / Documentation Violet semantic accents.
2. **Typography Setup**: Implement Clash Display (headings), General Sans (body), and JetBrains Mono (technical metrics/labels).
3. **The Entry Sequence**: 2-second UI fragment blur-fade followed by a clean clip-path wipe reveal of Anvith's identity.
4. **Interactive About & Photo Card**: cursor-reactive 3D tilt photo card with light-source tracking, bio, and 4-key statements block.
5. **The PM Layer Artifacts**: Collapsible previews for BRD, ERD, and User Flow diagrams.
6. **Systems Running / Automations**: Interactive flow diagrams showing Reports Hierarchy, DPMUMS Attendance, and T-Fiber Data Evolution.
7. **Government Section at Scale**: Simple map of India highlighting Telangana and Bihar with key stats.
8. **Contact & Working CLI Terminal**: Working interactive terminal with personality commands.
9. **Floating AI Assistant**: Streaming assistant with custom Systems Builder system prompt.

## Tech Stack (Verified)
- **Framework**: Next.js 16 (App Router)
- **Engine**: React Three Fiber (R3F) + Drei
- **Motion**: GSAP + Framer Motion (Transition & Interaction)
- **State**: Zustand (System Orchestration)
- **Type**: TypeScript (Strict)
