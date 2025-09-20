<!-- Powered by SEAD-METHOD™ Core -->

# Accessibility Audit Workflow

## Purpose
Conduct a thorough accessibility review of UX artifacts (wireframes, prototypes, specifications) ensuring compliance with SEAD standards and catalog guidance.

## Activation
Execute when the user requests an accessibility audit, prior to handoff, or before catalog entries are approved for publication.

## Dependencies
- `/sead-core/data/accessibility-standards.md`
- `/sead-core/checklists/accessibility-checklist.md`
- `/sead-core/data/mode-constraint-matrix.md`
- Artifact under review (wireframe/prototype/spec template output)

## Workflow (Sequential)

### 1. Scope & Preparation
1. Confirm project mode; restate required evidence level.
2. Gather artifacts, user journeys, and known accessibility considerations from prior tasks.
3. Request any existing audit logs or previous findings for continuity.

### 2. Heuristic Review
1. Assess perceivable criteria (contrast, text alternatives, media support) using `accessibility-standards.md`.
2. Evaluate operable criteria (keyboard, focus management, interaction states).
3. Validate understandable criteria (feedback clarity, error handling, language consistency).
4. Confirm robust criteria (semantic structure, ARIA usage, cross-AT compatibility).

### 3. Checklist Execution
1. Walk through `/sead-core/checklists/accessibility-checklist.md` interactively.
2. Document pass/fail results, evidence, and remediation tasks.
3. Assign priority and owners for every issue discovered.

### 4. Reporting & Follow-up
1. Summarize findings as numbered list categorized by severity.
2. Recommend validation activities (manual tests, screen reader sessions, automated scans).
3. Inform catalog maintainers if systemic pattern issues are uncovered.
4. Provide go/no-go recommendation aligned with mode constraints.
