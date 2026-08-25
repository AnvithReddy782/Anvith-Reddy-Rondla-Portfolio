## 2026-07-11T12:24:43Z
You are a software implementer (archetype: teamwork_preview_worker).
Your identity: worker_implementation.
Your working directory is: c:\Users\anvit\OneDrive\Desktop\The Cursor Projects\Anvith Reddy Rondla\.agents\worker_implementation

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A Forensic Auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Context & Reference Documents:
- Read ORIGINAL_REQUEST.md: c:\Users\anvit\OneDrive\Desktop\The Cursor Projects\Anvith Reddy Rondla\.agents\orchestrator\ORIGINAL_REQUEST.md
- Read PROJECT.md: c:\Users\anvit\OneDrive\Desktop\The Cursor Projects\Anvith Reddy Rondla\.agents\orchestrator\PROJECT.md
- Read Explorer Analysis: c:\Users\anvit\OneDrive\Desktop\The Cursor Projects\Anvith Reddy Rondla\.agents\explorer_assessment\handoff.md

Tasks:
1. Refactor the codebase to remove skeuomorphic elements and uppercase section eyebrows as detailed below:
   - About.tsx:
     - Replace the "Radar Tuner" dial container and instructions ("Rotate Dial To Tune Nodes", etc.) with flat glassmorphic text/instructions that align with the segmented button list. Ensure there are no rotary references or skeuomorphic shadows.
   - GovernmentSection.tsx:
     - Enclose the India Map vector container in a flat glassmorphic pane with standard rounded borders.
     - Remove the CRT monitor bezel (`crt-screen-bezel`), corner screws (`ScrewHead` elements), scanline animation, glow, sonar sweep rings, and vignette overlays.
   - Terminal.tsx:
     - Replace the cabinet and bezel with a macOS-style window header/titlebar containing simple dot controls (Red, Yellow, Green window buttons) and clean, flat borders.
     - Remove the Brightness dial (rotating dial), the 3D Power button (vertical displace button with red gradients), and the Ventilation slots.
     - Remove CRT overlays: glare reflections, CRT vignetting, screen scanline backgrounds, and the scale-collapsing white dot phosphor discharge transition on shutdown.
     - Style the Quick Command buttons in the drawer/tray as clean, flat, glassmorphic buttons (either directly in Terminal.tsx or by adjusting the CSS classes like `.skeuo-btn` or similar styles in globals.css).
   - Eyebrows:
     - In Systems.tsx: Remove the `<span className="section-label">...</span>` situated directly above `h2.section-heading`.
     - In PmLayer.tsx: Remove the `<span className="font-mono text-xs text-[var(--color-accent)] font-semibold uppercase tracking-widest block mb-2">...</span>` situated directly above `h2.section-heading`.
     - In EvidenceBoard.tsx: Remove the `<p className="mb-4 text-sm font-semibold text-[var(--color-accent)]">Production Code</p>` situated directly above `h2.section-heading`.
     - In Contact.tsx: Remove the `<p className="mb-4 text-sm font-semibold text-[var(--color-accent)]">Hiring signal</p>` situated directly above the header `h2`.
2. Compile/Build check:
   - Run `npm run build` inside the project to verify that the project compiles with ZERO warnings and errors.
3. Write a handoff report documenting:
   - All modified files and the specific changes made.
   - The build output demonstrating successful compilation.
   - Verify layout conformance and document how the user interface was verified.
   Write this handoff report to:
   c:\Users\anvit\OneDrive\Desktop\The Cursor Projects\Anvith Reddy Rondla\.agents\worker_implementation\handoff.md

Once completed, send a message to the orchestrator reporting success or failures.
