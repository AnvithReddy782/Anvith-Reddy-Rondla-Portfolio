# Requirements: Milestone 2 — Design Refactoring (Zero Reference)

This document maps out the specific requirements for completely rebuilding the portfolio's visual, layout, and component layers without referencing legacy layouts or component implementations.

## 1. Visual & Token Foundation (VIS)
- [ ] **VIS-01: Color Palette Alignment**: Migrate to:
  - Background: `#0A0A0A` (Committed Black)
  - Surface: `#141414` (Surface/Cards)
  - Raised: `#1C1C1C` (Hover/Active)
  - Text Primary: `#F2EDE4` (Warm Paper Off-white)
  - Text Muted: `#888580`
  - Text Faint: `#3A3836`
  - Borders: `rgba(242, 237, 228, 0.08)` (Default), `0.14` (Hover), `0.24` (Active)
- [ ] **VIS-02: Semantic Accent Mapping**:
  - **Saffron Orange (`#FF6B00`)**: Action, building, shipping. T-Fiber telecom energy. Used sparingly on single key elements.
  - **Precision Teal (`#00B4A6`)**: Live systems, success states, geofences, active timers, streaming text.
  - **Documentation Violet (`#7C6FF7`)**: PM thinking, BRDs, structural layout indicators.
- [ ] **VIS-03: Fonts & Typography**:
  - Headings: `Clash Display` (custom web font or self-hosted).
  - Body: `General Sans` (custom web font or self-hosted).
  - Metrics/Code/Labels: `JetBrains Mono` (self-hosted or Google Font).
  - Letter-spacing rule: display text >48px must have `letter-spacing: -0.025em` minimum; uppercase mono must have `letter-spacing: 0.08em`. Line length <= 68 chars.
- [ ] **VIS-04: CSS Background Dot Grid**: Zero-JS pure CSS dot grid pattern on the HTML background.

## 2. Page Sections & Layout (LAY)
- [ ] **LAY-01: Split Grid System**: Consistent 42/58 split grid for layout sections on desktop, stacking cleanly on mobile.
- [ ] **LAY-02: Section 01: The Entry Sequence**:
  - 2-second UI fragment blur-fade.
  - Precise clip-path wipe reveal of "ANVITH REDDY RONDLA".
  - Small JetBrains Mono status strip showing: Building Now, Last Shipped, Location, Availability.
- [ ] **LAY-03: Section 02: About & Interactive Photo Card**:
  - Photocard with 3D cursor-tilt tracking and dynamic light source reflection.
  - Bio text block (max 12 sentences, conversational and real).
  - 4 PM statement blocks (documented starts, production runtime, AI stance, zero failures).
- [ ] **LAY-04: Section 03: Products Built**:
  - Ordered strictly by Tier:
    - Tier 1: Production (Annapurna, Reports Auto, Span Finder, DOC AI)
    - Tier 2: Active (DPMUMS, Field Reporter, Vantage OS)
    - Tier 3: In Dev (GlobusIT ERP, BSEC Recruitment)
    - Archive: Utility Collection
  - Solo Build / Built Without Being Asked / ₹0 Infrastructure badges.
- [ ] **LAY-05: Section 04: The Migration Story**:
  - Horizontal timeline (vertical on mobile) showing progression from WhatsApp -> Google Sheets -> React -> Next.js.
- [ ] **LAY-06: Section 05: The PM Layer**:
  - Three collapsible interactive artifact sheets (BRD excerpt, ERD diagram, and User Flow state machine).
- [ ] **LAY-07: Section 06: Systems Running (Automations)**:
  - Interactive pulsing flow diagrams for Reports Hierarchy, DPMUMS Geofencing, and T-Fiber Evolution.
- [ ] **LAY-08: Section 07: Government Section**:
  - Outline map of India with Telangana and Bihar highlighted. Live counter dashboard showing districts, employees, and ₹0 spend.
- [ ] **LAY-09: Section 11: Contact & Terminal**:
  - Simple copyable email and social links.
  - Interactive terminal CLI accepting: `help`, `email`, `linkedin`, `resume`, `hire`, `projects`, `whoami`, `promoted`, `gap`, `tools`, `1to10`.
- [ ] **LAY-10: Section 12: Footer**:
  - Minimal footer with navigation links and centereed tag line. Back-to-top button with confetti burst.

## 3. Experience & Interactive Elements (EXP)
- [ ] **EXP-01: The AI Assistant**:
  - Bottom-right corner trigger (pulsing teal dot).
  - Streams answers using customized "Systems Builder" personality prompt.
  - Preloaded starter questions. Rate limited to 10 queries per session.
- [ ] **EXP-02: Scroll Velocity Awareness**:
  - Measure scroll speed; dynamically toggle compact metrics for fast scrolling vs deep text insights for slow scrolling.
- [ ] **EXP-03: Recruiter Mode**:
  - Global toggle in Navigation. Reorganizes cards, highlights CV download, and adjusts hero copy to direct hiring intent.

## 4. Technical Quality & Code Integrity (TECH)
- [ ] **TECH-01: Zero-Reference implementation**: Do not copy layouts or code structure from any existing components to prevent leak of legacy styling or features.
- [ ] **TECH-02: TypeScript Strictness**: Build compiling with zero typescript or type errors.
- [ ] **TECH-03: Performance Optimization**: FCP optimizations, image compression (profile.png converted to Optimized WebP/AVIF under 100KB).
