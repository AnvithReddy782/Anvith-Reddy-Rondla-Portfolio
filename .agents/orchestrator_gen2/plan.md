# Task Plan: UI Refactoring & Verification

This plan maps the steps to eliminate skeuomorphism and section eyebrows, replacing them with a flat dark-steel glassmorphic theme.

## Steps

1. **Step 1: Codebase Analysis**
   - Dispatch `teamwork_preview_explorer` to:
     - Review all modified files (`About.tsx`, `Terminal.tsx`, `GovernmentSection.tsx`, `Systems.tsx`, `PmLayer.tsx`, `EvidenceBoard.tsx`, `Contact.tsx`, `SkeuoUtilities.tsx`, `globals.css`).
     - Identify any leftover skeuomorphism (such as the rotating brightness dial pointer, CRT glows, sweep scanlines/glows, ventilation slits, and uppercase section labels).
     - Produce an exact difference report and checklist of required fixes.

2. **Step 2: Implementation of Refactoring & Bugfixes**
   - Dispatch `teamwork_preview_worker` to:
     - Perform edits on files identified as having leftover skeuomorphic elements.
     - Clean up any unused imports, variables, or functions to ensure compilation succeeds with zero TypeScript errors or warnings.
     - Run `npm run build` inside a subprocess and capture output.

3. **Step 3: Correctness and Aesthetic Review**
   - Dispatch `teamwork_preview_reviewer` to:
     - Inspect the files for visual conformance: no physical dials, monitor frames, grates, CRT scanlines/glows, vignettes, or uppercase tracked labels above section headers.
     - Run build verification.

4. **Step 4: Forensic Audit Gate**
   - Run forensic audit to verify integrity and that no cheating (such as hardcoded variables, mock endpoints, or dummy code) has occurred.
   - Fail iteration if any violation is reported.

5. **Step 5: Completion & Report**
   - Verify build compile results.
   - Present final human-readable report.
