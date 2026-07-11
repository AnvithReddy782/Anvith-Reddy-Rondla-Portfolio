# Testing

Testing infrastructure, manual verification methodologies, and future automation patterns.

## Quality Assurance Status

### 1. Automated Testing (Current State)
- **Status:** Not currently configured or implemented in the active repository (as verified by the dependencies and scripts in [package.json](file:///c:/Users/anvit/OneDrive/Desktop/The%20Cursor%20Projects/Anvith%20Reddy%20Rondla/package.json)).
- **Linting:** Code validity and type safety is checked using the `typescript` strict compiler configuration and Next.js linting (`npm run lint`).

### 2. Manual Verification & Auditing
Due to the highly visual, interactive, and custom-animated nature of the portfolio, the current QA process is centered on high-fidelity manual verification:
- **Visual & Layout Audits:** Testing transitions (GSAP, Framer Motion), clipping paths, and container sizes across standard viewports (Mobile, Tablet, Desktop).
- **Interactive Verification:** Running all commands in the CLI Terminal (`help`, `hire`, `projects`, `contact`, `1to10`, etc.) to confirm correct response mapping and matching behavior.
- **AI Agent Verification:** Interacting with the AI Assistant to ensure correct RAG grounding, response formatting, and system-prompt adherence.
- **Performance Benchmarks:** Checking frame rates (targeting stable 60FPS) and scrolling performance using Chrome DevTools or Lighthouse audits.

### 3. Documentation-as-QA
Strict specification-first development acts as the initial logic validation gate:
- Detailed Business Requirements Documents (BRDs), Entity Relationship Diagrams (ERDs), and User Flows must align before any UI element is developed.
- Implementation plans in `.planning/phases/` must contain verification checklists that are ticked off only after manual verification.

---

## Future Automated Testing Roadmap

To transition the portfolio to a robust automated validation engine, the following setup is planned:

### 1. Frameworks & Tools
- **Unit & Component Testing:** [Vitest](https://vitest.dev/) + React Testing Library. Chosen for fast execution, native ES modules support, and direct integration with Next.js/Tailwind CSS v4 config.
- **End-to-End (E2E) Testing:** [Playwright](https://playwright.dev/). Chosen for multi-browser support (Chromium, Firefox, WebKit), headless execution, and rich visual regression capabilities.
- **Visual Regression:** Playwright snapshot testing to verify complex animation sequences and layout alignments at different scroll positions.

### 2. Proposed Directory Structure
```text
.
├── e2e/                        # Playwright E2E test files
│   ├── terminal.spec.ts        # CLI Terminal interactions
│   ├── ai-assistant.spec.ts    # AI Agent responses and streaming
│   └── visual-regression.spec.ts # Component rendering & layout snapshots
└── src/
    ├── components/
    │   └── __tests__/          # Component unit tests (e.g., Terminal.test.tsx)
    └── lib/
        └── __tests__/          # Helper & store tests (e.g., commands.test.ts)
```

### 3. Proposed Scripts & Runner Commands
Once configured, the following scripts will be added to `package.json`:
- `npm run test`: Runs unit and component tests via Vitest in watch mode.
- `npm run test:run`: Executes all unit tests once (CI/CD pipeline mode).
- `npm run test:coverage`: Generates code coverage reports for core libraries and utilities.
- `npm run test:e2e`: Runs Playwright end-to-end tests locally or in headless CI mode.
- `npm run test:e2e:ui`: Launches the Playwright UI mode for interactive debugging.

### 4. Code Coverage & Verification Policies
- **Core Logic (100% Coverage Target):** Helper logic, such as command parsing/lookup in `src/lib/commands.ts` and global state transformations in `src/lib/store.ts`.
- **Critical Paths (E2E):**
  - CLI Terminal command executions and clearing.
  - AI Assistant message rendering, text generation, and error conditions.
  - Dark/Light mode theme switching and persistence.
- **Performance Constraints:** CI integrations will monitor layout shift (CLS) and ensure no bundle size regressions block smooth rendering.
