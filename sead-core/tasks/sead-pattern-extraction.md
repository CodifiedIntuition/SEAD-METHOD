<!-- Powered by SEAD-METHOD™ Core -->

# SEAD Pattern Extraction Workflow

## Purpose
Capture and formalize reusable patterns discovered during implementation so they can be added to the SEAD catalog.

## Activation
Invoke when coding uncovers a reusable component, API contract, shared type, or workflow not yet represented in the catalog.

## Dependencies
- `/sead-core/data/pattern-guidelines.md`
- `/sead-core/data/constraint-matrix.md`
- `/sead-core/tasks/pattern-extraction-workflow.md`
- `/sead-core/templates/sead-design-system-tmpl.yaml` (for UI patterns)
- `/sead-core/templates/sead-ux-validation-tmpl.yaml` and test templates as needed

## Workflow (Sequential)

### 1. Identify Candidate Pattern
1. Document context: story/feature, files touched, reason pattern emerged.
2. Confirm no existing catalog entry satisfies the need (search relevant domains).
3. Capture user/business impact motivating extraction.

### 2. Run Core Extraction Workflow
1. Execute `pattern-extraction-workflow.md` to gather detailed requirements and documentation notes.
2. Record catalog domain(s) affected and dependencies on other patterns.
3. Highlight constraint implications using `constraint-matrix.md`.

### 3. Produce Draft Artifact
1. Choose appropriate template (`sead-design-system-tmpl.yaml`, API doc template, etc.).
2. Populate sections covering anatomy, states, accessibility, testing, migration strategy.
3. Note required follow-up validation (usability, QA, accessibility, performance).

### 4. Review & Approval Path
1. Share draft with catalog maintainers and impacted roles (UX, QA, Architecture).
2. Log feedback, decisions, and version history.
3. If approved, coordinate catalog update and integration plan; if rejected, document reasoning and alternative solution.

### 5. Finalize Extraction Record
1. Provide numbered summary of outcomes, including next steps and owners.
2. Link resulting catalog artifacts or backlog items for future work.
3. Update implementation task with references to ensure traceability.
