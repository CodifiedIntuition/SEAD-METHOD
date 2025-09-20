<!-- Powered by SEAD-METHOD™ Core -->

# SEAD Test Design Workflow

## Purpose
Create catalog-compliant test suites and scenarios covering functional, non-functional, and regression requirements.

## Activation
Run when defining or updating test coverage for a story, feature, or release.

## Dependencies
- `/sead-core/data/catalog-validation-rules.md`
- `/sead-core/data/constraint-matrix.md`
- `/sead-core/data/sead-kb.md`
- `/sead-core/templates/catalog-compliance-report-tmpl.yaml`
- Relevant story/feature specs (`sead-story-tmpl.yaml`, `sead-feature-spec-tmpl.yaml`)

## Workflow (Sequential)

### 1. Understand Scope
1. Gather requirements, acceptance criteria, and catalog references for the item under test.
2. Determine SEAD mode to set minimum coverage thresholds.
3. Identify risk areas (catalog deviations, integrations, NFR hotspots).

### 2. Select Catalog Test Patterns
1. Review `test-patterns/` for applicable templates (e.g., API contract tests, UI accessibility suites, state-management behavior tests).
2. Map each requirement to at least one catalog pattern; document mapping.
3. For gaps, propose pattern extensions and notify catalog maintainers.

### 3. Design Test Scenarios
1. Produce scenarios using Given-When-Then or equivalent format, ensuring traceability.
2. Specify data requirements, mocks/stubs, and environmental needs per catalog validation rules.
3. Include positive, negative, edge, and regression cases.

### 4. Define Automation & Manual Strategy
1. Determine which scenarios will be automated vs. exploratory.
2. Align tooling with `technical-preferences.md` guidelines.
3. Plan execution schedule (CI pipeline, manual checkpoints, regression cadence).

### 5. Document & Communicate
1. Summarize design in catalog compliance report or story QA notes.
2. Provide numbered list of scenarios with catalog references and owners.
3. Share plan with engineering/QA stakeholders; gather feedback before implementation.
