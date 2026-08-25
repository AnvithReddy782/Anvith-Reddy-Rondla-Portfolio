# AI Slop Removal Plan - Anvith Reddy Rondla Portfolio

## Brand Register: `brand` (Portfolio = Design IS the Product)

### Anti-Reference Compliance (from PRODUCT.md)
- ❌ Skeuomorphic consoles (retro dials, wood clipboards, leather binders, coffee stains, ruled notepad paper, screwheads)
- ❌ Saturated AI warm cream/sand/beige backgrounds
- ❌ Over-rounded card borders (>16px)
- ❌ Tiny uppercase tracked eyebrows above every section

---

## IDENTIFIED AI SLOP PATTERNS

### P1 - CRITICAL (Brand Bans + Absolute Bans)

| Pattern | Locations | Fix |
|---------|-----------|-----|
| **Over-rounded cards** (`rounded-2xl` = 24px, `rounded-xl` = 20px) | About.tsx, EvidenceBoard.tsx, MigrationStory.tsx, Hero.tsx, Footer.tsx, Navigation.tsx, Contact.tsx, Systems.tsx, GovernmentSection.tsx, Thinking.tsx, ByTheNumbers.tsx, Manifesto.tsx | Max `rounded-lg` (8px) for cards, `rounded-xl` (12px) for featured only |
| **Eyebrow labels** (tiny uppercase tracked above every section) | About.tsx: "Profile Summary", "Current Focus", "Education", "ANVITH REDDY RONDLA", EvidenceBoard.tsx: "Core shipped metric", "Context", "My Role", "Problem", "Decision", "Outcome", Hero.tsx: "BUILDING NOW", "LAST SHIPPED", "LOCATION", "AVAILABLE", MigrationStory.tsx: "Technical Constraint", "Migration Trigger" | Remove entirely. Use proper heading hierarchy (h2/h3) with weight/size contrast only |
| **Monospace as lazy "technical" shorthand** | Everywhere: `font-mono` + `uppercase` + `tracking-wider` on non-technical labels | Use body font (General Sans) with `font-medium`/`font-semibold` for labels. Reserve mono ONLY for actual code, IDs, technical tokens |
| **Skeuomorphic console/fake terminal** | EvidenceBoard.tsx: "DPMUMS_PIPELINE // SECURE_VAL", "AUTOMATION_LOGIC // CODES", "ERP_ARCHITECTURE // WORKFLOW" | Replace with clean section headers. Real technical docs don't need fake terminal chrome |
| **Fake system docs chrome** | About.tsx: "SPECIFICATION INDEX", "PROD-SPEC", "SYSTEM ARCHIVE DATA SHEET", "SECURITY CLASSIFICATION: CLASS III", "RESTRICTED ACCESS" | Remove. Use real document styling if showing actual specs |

### P2 - HIGH (Brand Bans)

| Pattern | Locations | Fix |
|---------|-----------|-----|
| **Numbered section markers (01/02/03/04)** | About.tsx: "01", "02", "03", "04" on core statements | Remove numbers. Let statements stand on typographic merit |
| **Large decorative icons above headings** | EvidenceBoard.tsx, MigrationStory.tsx: Lucide icons (MessageSquare, Database, Server, Cpu) in colored circles above titles | Remove decorative icons. Use inline if semantically meaningful |

### P3 - MEDIUM (Design Quality)

| Pattern | Locations | Fix |
|---------|-----------|-----|
| **Excessive glassmorphism/backdrop-blur** | Hero.tsx, About.tsx, EvidenceBoard.tsx, MigrationStory.tsx, Navigation.tsx, Footer.tsx, Contact.tsx | Remove `backdrop-blur` except where functionally needed (mobile menu, sticky nav) |
| **Safe/timid layout** | Grid-based card grids everywhere | Asymmetric compositions, varied spacing rhythms, intentional breaks |
| **Contrast issues** | `text-[var(--color-text-faint)]` (#3A3836) on dark bg = 1.3:1 (fail), `text-[var(--color-text-secondary)]` (#888580) = 3.2:1 (fail for body) | Raise secondary to ≥4.5:1, faint only for non-text decorative |
| **Status strip in Hero** | Hero.tsx: entire monospace metric strip | Replace with one bold metric line in heading font |

---

## AGENT ASSIGNMENTS

### Agent 1: Card & Border Radius Audit
**Files:** All components using `rounded-2xl`, `rounded-xl`
- Change cards → `rounded-lg` (8px)
- Featured cards only → `rounded-xl` (12px max)
- Tags/badges → `rounded-full` (pill)

### Agent 2: Eyebrow Label Removal + Typography Hierarchy
**Files:** About.tsx, EvidenceBoard.tsx, Hero.tsx, MigrationStory.tsx, Footer.tsx
- Remove all tiny uppercase tracked labels above headings
- Establish clear h1/h2/h3 hierarchy with weight/size only
- Replace `font-mono uppercase tracking-wider` labels with `font-body font-medium` labels

### Agent 3: Monospace Audit & Replacement
**Files:** All components
- Reserve `font-mono` ONLY for: actual code, technical IDs, version numbers, CLI commands
- Replace all label usage with General Sans (body font)
- Keep mono in: EvidenceBoard tech stacks, data.ts project IDs, actual code snippets

### Agent 4: Skeuomorphic Console Removal
**Files:** EvidenceBoard.tsx (architecture flows), About.tsx (FocusSelector)
- Remove "DPMUMS_PIPELINE // SECURE_VAL", "AUTOMATION_LOGIC // CODES", "ERP_ARCHITECTURE // WORKFLOW"
- Remove "SPECIFICATION INDEX", "PROD-SPEC", "SYSTEM ARCHIVE DATA SHEET", "SECURITY CLASSIFICATION"
- Replace with clean semantic headers

### Agent 5: Numbered Markers & Decorative Icons
**Files:** About.tsx (01-04), MigrationStory.tsx (date badges), EvidenceBoard.tsx (icons)
- Remove "01", "02", "03", "04" from core statements
- Remove Lucide icons in colored circles above section titles
- Keep inline icons only where they convey meaning (e.g., external link)

### Agent 6: Glassmorphism & Contrast Audit
**Files:** globals.css, all components with `backdrop-blur`
- Remove `backdrop-blur-*` except: sticky nav (functional), mobile menu (functional)
- Fix color tokens: `--color-text-secondary` → ≥4.5:1 on `--color-bg` (#0A0A0A)
- Fix `--color-text-faint` → only for non-text decorative elements

### Agent 7: Hero & Layout Refinement
**Files:** Hero.tsx, page.tsx
- Replace monospace status strip with single bold metric in Clash Display
- Compose asymmetric hero layout (text left, visual right, not centered stack)
- Ensure clamp() max ≤ 5.5rem (already compliant)

---

## EXECUTION ORDER

1. **Parallel Agents 1-5** (independent file changes)
2. **Agent 6** (tokens + global CSS - affects all)
3. **Agent 7** (Hero composition)
4. **Build verification** + **Agent 8: Polish pass**

---

## SUCCESS CRITERIA

- [ ] Build passes (`npm run build`)
- [ ] No `rounded-2xl` on cards
- [ ] No uppercase tracked labels above headings
- [ ] `font-mono` only on actual technical content
- [ ] No fake terminal/console chrome
- [ ] No numbered section markers (01/02/03/04)
- [ ] No decorative Lucide icons in colored circles above titles
- [ ] `backdrop-blur` only on functional overlays (nav, mobile menu)
- [ ] Body text contrast ≥4.5:1
- [ ] Distinctive, non-template visual voice