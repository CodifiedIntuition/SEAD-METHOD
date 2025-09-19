<!-- Powered by SEAD-METHOD™ Core -->

# Story Refinement Workflow

## Purpose
Transform backlog stories into catalog-compliant, implementation-ready items.

## Activation
Use during refinement sessions or whenever a story transitions from draft to ready.

## Dependencies
- `/sead-core/checklists/story-quality-checklist.md`
- `/sead-core/checklists/constitutional-compliance-checklist.md`
- `/sead-core/templates/sead-acceptance-criteria-tmpl.yaml`
- `/sead-core/templates/sead-story-tmpl.yaml`
- `/sead-core/data/catalog-pattern-priorities.md`
- `/sead-core/data/catalog-efficiency-metrics.md`

## Workflow (Sequential)

### 1. Review Context
1. Load story description and linked documents.
2. Confirm catalog references and mode constraints.
3. Gather stakeholder feedback or open questions.

### 2. Enhance Story Structure
1. Ensure story template populated with problem, value, and scope sections.
2. Add catalog references with canonical names and versions.
3. Note dependencies on other stories or epics.

### 3. Define Acceptance Criteria
1. Use `sead-acceptance-criteria-tmpl.yaml` to capture numbered, testable criteria.
2. Include validation steps for QA, UX, accessibility, and performance as applicable.
3. Align criteria with metrics from `catalog-efficiency-metrics.md`.

### 4. Run Quality & Compliance Checks
1. Execute `story-quality-checklist.md`.
2. Execute `constitutional-compliance-checklist.md` focusing on mode enforcement.
3. Document results, deviations, and approvals.

### 5. Finalize & Communicate
1. Update backlog status to Ready if all checks pass.
2. Share summary with engineering and UX teams.
3. Log follow-up tasks (pattern extraction, catalog compliance checks) if needed.
