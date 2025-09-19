<!-- Powered by SEAD-METHOD™ Core -->

# Design System Analysis Task

## Purpose
Evaluate existing catalog design system assets to prepare for new UX work or catalog updates while ensuring compliance with SEAD constraints.

## Activation
Run this task when the user asks for a design system review, gap analysis, or when new components must be assessed before catalog inclusion.

## Dependencies
- `/sead-core/checklists/design-system-checklist.md`
- `/sead-core/data/design-system-guidelines.md`
- `/sead-core/data/ui-pattern-library.md`
- `/sead-core/data/mode-constraint-matrix.md`
- `/sead-core/checklists/catalog-compliance-checklist.md` (for final validation)

## Workflow (Sequential)

### 1. Initialize Context
1. Load configuration from `/sead-core/core-config.yaml`; note current mode.
2. Summarize mode constraints using `mode-constraint-matrix.md`.
3. Request from user: scope of analysis, available artifacts, known problem areas.
4. If catalog assets are missing, list required inputs and pause for user confirmation.

### 2. Catalog Inventory Review
1. Map supplied components/layouts/themes to entries in `ui-pattern-library.md`.
2. Identify reuse opportunities and flag any redundant or conflicting variants.
3. Document dependencies between patterns (e.g., button variants relied on by navigation).

### 3. Evaluate Quality & Compliance
1. Cross-check naming, structure, and token usage against `design-system-guidelines.md`.
2. Call out accessibility considerations to revisit during `accessibility-audit-workflow`.
3. Highlight responsive behavior expectations and gaps.
4. Capture risks or tech debt requiring engineering coordination.

### 4. Execute Design System Checklist
1. Walk through `/sead-core/checklists/design-system-checklist.md` with the user’s preferred interaction mode (guided vs. comprehensive).
2. Record outcomes, action items, and approvals.

### 5. Report & Next Steps
1. Provide a numbered summary of findings categorized as: keep, refine, extend.
2. Recommend follow-up tasks (wireframe, prototype, accessibility audit, design-pattern-evaluation) with owners.
3. Update user on catalog compliance status and readiness for downstream work.
