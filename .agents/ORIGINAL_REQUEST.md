# Original User Request

## Initial Request — 2026-07-11T12:19:43Z

Refactor the portfolio web application's user interface to completely eliminate skeuomorphic consoles (retro dials, physical frames, monitor bezels, ventilation grates, and rotary dials) and uppercase section eyebrows, replacing them with a clean, modernist, dark-steel glassmorphic theme.

Working directory: c:\Users\anvit\OneDrive\Desktop\The Cursor Projects\Anvith Reddy Rondla
Integrity mode: demo

## Requirements

### R1. Remove Skeuomorphism in Components
Replace all physical knobs (like the rotating dial knob), monitor bezels (like the CRT cabinet), scanlines, glass curvature, vents, and power buttons with sleek, high-fidelity developer panes (like macOS-style glass windows with simple dot control actions).

### R2. Remove Section Eyebrows
Remove all uppercase tiny tracked labels (`section-label` or similar section labels) situated directly above main headers.

### R3. Maintain Functionality & Compilation
Ensure the interactive terminal, chatbot, government systems India map, and career timeline focus nodes remain fully functional and build successfully.

## Acceptance Criteria

### Technical Build
- [ ] `npm run build` compiles with zero warnings or errors.

### Visual Aesthetic Check
- [ ] No physical console bezels, scanlines, glass glares, screwheads, vents, or paper/wood borders remain in the codebase.
- [ ] No section eyebrows (`section-label` or uppercase text block elements immediately above section headers) are rendered.
- [ ] The "Radar Tuner" dial in `About.tsx` is replaced with a clean interactive modernist selector (e.g. flat glassmorphic button lists or segmented button tabs).
- [ ] The India Map in `GovernmentSection` is enclosed in a flat glassmorphic pane instead of a CRT monitor bezel.
- [ ] The Terminal window has a clean window pane with red/yellow/green window buttons, clean fonts, and no physical knobs/ventilation slots.
- [ ] The Terminal's Quick Command buttons are styled as clean, flat, glassmorphic buttons.
