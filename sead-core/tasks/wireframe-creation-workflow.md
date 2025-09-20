<!-- Powered by SEAD-METHOD™ Core -->

# Wireframe Creation Workflow

## Purpose
Deliver catalog-aware wireframes that respect SEAD mode constraints, accessibility standards, and pattern reuse expectations.

## Activation
Use when the user requests new wireframes, updates to existing flows, or early exploration that must stay catalog-aligned.

## Dependencies
- `/sead-core/checklists/sead-ux-checklist.md`
- `/sead-core/data/design-system-guidelines.md`
- `/sead-core/data/ui-pattern-library.md`
- `/sead-core/data/mode-constraint-matrix.md`
- `/sead-core/templates/sead-wireframe-tmpl.yaml`
- `/sead-core/checklists/accessibility-checklist.md`

## Workflow (Sequential)

### 1. Preparation & Alignment
1. Confirm mode via `/sead-core/core-config.yaml`; restate fidelity expectations using `mode-constraint-matrix.md`.
2. Collect required inputs from user: goals, primary personas, success metrics, constraints.
3. Review relevant catalog patterns and note intended reuse or extension.
4. Run the context sections of `sead-ux-checklist.md` to capture scope.

### 2. Structure the Wireframe Plan
1. Identify screens/views required; present as numbered list for confirmation.
2. For each screen, map catalog layouts and components from `ui-pattern-library.md`.
3. Document interaction flows and state changes that wireframe must illustrate.
4. Highlight accessibility considerations to include (focus order, contrast hotspots).

### 3. Draft Wireframe Specification
1. Load `/sead-core/templates/sead-wireframe-tmpl.yaml`.
2. Populate template sections using gathered context, catalog references, and accessibility notes.
3. Annotate responsive behavior (breakpoints, layout shifts) explicitly.
4. Include numbered references to catalog components for engineer traceability.

### 4. Validate & Iterate
1. Execute `accessibility-checklist.md` focusing on perception/operability for low-fidelity outputs.
2. Confirm plan aligns with design system rules; note deviations requiring `design-pattern-evaluation.md`.
3. Present wireframe summary to user, solicit feedback, capture revisions.

### 5. Handoff
1. Produce final wireframe artifact (sketch description, link, or exported asset as provided by user workflow).
2. Summarize deliverables, open issues, and next steps (prototype, research, validation).
3. Store references for downstream tasks (prototype-design, implementation handoff).
