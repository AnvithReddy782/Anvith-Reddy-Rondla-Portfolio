# Project: UI Refactoring — Skeuomorphism & Section Eyebrow Removal

## Architecture
- The frontend is a Next.js single-page portfolio application.
- Components communicate via React props, state hooks, and custom layouts.
- Modern styles are defined in Tailwind CSS (`src/app/globals.css` and inline classes).

## Code Layout
- `src/components/About.tsx`: About page with skill nodes and Radar Tuner container.
- `src/components/Terminal.tsx`: Terminal window with retro deck controllers, quick command tray, and interactive terminal display.
- `src/components/GovernmentSection.tsx`: Section rendering the India Map inside a monitor bezel frame.
- `src/components/SkeuoUtilities.tsx`: Helper components for retro skeuomorphic elements (ScrewHead, DialKnob, etc.).
- `src/components/Systems.tsx`: Systems section container.
- `src/components/PmLayer.tsx`: Project Management discipline container.
- `src/components/EvidenceBoard.tsx`: Evidence board container.
- `src/components/Contact.tsx`: Contact/hiring container.
- `src/app/globals.css`: Main styling definitions.

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|---|---|---|---|
| 1 | Remove Skeuomorphism | Restructure Terminal, GovernmentSection map enclosure, and About Tuner labels to eradicate console buttons, dials, bezels, scanlines, and ventilation grates. | None | PLANNED |
| 2 | Remove Section Eyebrows | Delete tiny uppercase tracked eyebrows from Systems, PmLayer, EvidenceBoard, and Contact. | M1 | PLANNED |
| 3 | Build & Verify | Ensure Next.js bundle compiles with zero errors/warnings. | M2 | PLANNED |

## Interface Contracts
- **Terminal Components**: The terminal window should render a clean titlebar with macOS-style window controls (Red/Yellow/Green dots), clean monospaced text, and flat glassmorphic inputs. All old dials, power button, and vents should be deleted or hidden.
- **India Map**: Should be wrapped in a flat glassmorphic pane with standard rounded borders, eliminating the old bezel/CRT container.
- **Section Headers**: Direct parent elements should directly render headings without intermediate eyebrow labels.
