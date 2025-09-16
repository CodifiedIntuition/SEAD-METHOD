<!-- Powered by SEAD-METHOD™ Core -->

# Design Pattern Evaluation Workflow

## Purpose
Assess proposals for new or modified catalog design patterns, ensuring they align with SEAD governance before inclusion.

## Activation
Run when catalog gaps are identified (from wireframe, prototype, or audit tasks) and a new pattern or variant is required.

## Dependencies
- `/sead-core/data/design-system-guidelines.md`
- `/sead-core/data/ui-pattern-library.md`
- `/sead-core/data/accessibility-standards.md`
- `/sead-core/data/mode-constraint-matrix.md`
- `/sead-core/checklists/catalog-compliance-checklist.md`
- `/sead-core/templates/sead-design-system-tmpl.yaml`

## Workflow (Sequential)

### 1. Define Pattern Proposal
1. Capture problem statement, user impact, and desired outcomes.
2. List existing catalog components considered and explain insufficiencies.
3. Determine urgency and target release mode.

### 2. Analyze Requirements
1. Map functional requirements to catalog tokens and interaction guidelines.
2. Document accessibility obligations (focus states, announcement needs, error handling).
3. Consider responsive behavior and theme coverage.

### 3. Draft Pattern Specification
1. Load `/sead-core/templates/sead-design-system-tmpl.yaml`.
2. Fill sections describing anatomy, states, variants, usage guidelines, and implementation hints.
3. Include validation plan referencing relevant checklists and workflows.

### 4. Review & Approval Path
1. Execute `catalog-compliance-checklist.md` to ensure governance alignment.
2. Provide numbered summary of changes, risks, and migration impacts.
3. Identify required approvals (UX lead, Accessibility, Engineering) based on project mode.
4. Record decision (approve, iterate, reject) and next steps.
