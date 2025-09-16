<!-- Powered by SEAD-METHOD™ Core -->

# Catalog Validation Rules (QA Reference)

Use this guide to enforce catalog compliance during quality assessment. It complements `constraint-matrix.md`, catalog domain documentation, and constitutional rules for QA engagements.

## 1. Core Validation Principles
- **Catalog First**: Tests must exercise catalog-approved components, APIs, and data models. Any deviation requires documented waiver plus `sead-pattern-extraction.md` follow-up.
- **Mode Alignment**: Validation depth scales with `core-config.yaml` mode—prototype (baseline checks), development (comprehensive coverage), build-to-deploy (zero deviations, full evidence).
- **Traceability**: Every requirement maps to catalog entities; test cases must reference canonical paths (e.g., `test-patterns/auth/login-flow.md`).

## 2. Domain-Specific Rules
- **UI / Design System**: Verify catalog components render correctly across states; accessibility acceptance derived from `accessibility-standards.md` and design tokens.
- **API Contracts**: Assert request/response structures match catalog contracts; schema validation uses `validation-schemas/` assets.
- **State Management**: Ensure state transitions follow catalog patterns; monitor side effects logged via catalog utilities.
- **Error Handling**: Confirm catalog error responses, user messaging, and logging patterns in `error-handling/` are honored.
- **Shared Types**: Type definitions must remain in sync with catalog sources; breaking changes require version increments.

## 3. Evidence Requirements
- Link test artifacts (scripts, automation suites, exploratory notes) to catalog references.
- Record validation results in QA reports (`catalog-compliance-report-tmpl.yaml`) with PASS/FAIL per rule.
- Capture waivers with rationale, owner, expiration, and remediation plan.

## 4. Escalation Guidance
- If catalog asset is missing or outdated, pause validation and notify catalog maintainers.
- Escalate constitutional conflicts to governance via `sead-constraint-validation.md` output.
- Document risks in `sead-qa-gate` decision logs before allowing progression.

## 5. Usage Steps
1. Load this document when initiating any QA workflow.
2. Reference relevant sections while executing tasks (`sead-test-design.md`, `sead-nfr-assess.md`, `sead-trace-requirements.md`).
3. Update QA artifacts with explicit citations to demonstrate compliance.
