<!-- Powered by SEAD-METHOD™ Core -->

# SEAD Requirements Traceability Workflow

## Purpose
Establish end-to-end traceability from requirements to tests and catalog artifacts, ensuring nothing escapes validation.

## Activation
Run before QA gates, release readiness reviews, or whenever backlog items change scope.

## Dependencies
- `/sead-core/data/catalog-validation-rules.md`
- `/sead-core/data/constraint-matrix.md`
- `/sead-core/templates/catalog-compliance-report-tmpl.yaml`
- Story/epic documents (e.g., `sead-story-tmpl.yaml`, `sead-epic-tmpl.yaml`)
- QA gate outputs (`sead-qa-gate.md`)

## Workflow (Sequential)

### 1. Collect Artifacts
1. Compile list of requirements (stories, acceptance criteria, epics).
2. Gather associated test plans, automation suites, and validation evidence.
3. Note catalog components/patterns each requirement touches.

### 2. Build Trace Matrix
1. For each requirement, map to test cases and catalog artifacts.
2. Identify missing links (requirement without test, test without requirement, catalog asset without coverage).
3. Highlight dependencies on external systems or data sources.

### 3. Evaluate Coverage
1. Assess coverage completeness (percentage of requirements with validated tests).
2. Verify tests include catalog validation steps (schema checks, pattern assertions, accessibility verification).
3. Document waivers or pending work with justification and target completion date.

### 4. Report & Communicate
1. Populate traceability section in catalog compliance report template.
2. Summarize gaps and risks as numbered action list.
3. Share results with stakeholders; ensure backlog items reflect any required remediation work.
