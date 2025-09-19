<!-- Powered by SEAD-METHOD™ Core -->

# SEAD Non-Functional Requirements Assessment

## Purpose
Evaluate non-functional requirements (NFRs) for a story/feature against catalog patterns and constitutional constraints.

## Activation
Run when QA is asked to validate NFR coverage for a story, epic, or release candidate prior to gate decisions.

## Dependencies
- `/sead-core/core-config.yaml`
- `/sead-core/data/constraint-matrix.md`
- `/sead-core/data/catalog-validation-rules.md`
- `/sead-core/data/technical-preferences.md`
- Relevant catalog domains (performance, security, reliability patterns)

## Workflow (Sequential)

### 1. Establish Context
1. Identify artifact under review (story ID, feature spec, release scope).
2. Determine current SEAD mode; note enforcement level for NFR evidence.
3. Collect existing NFR docs (performance budgets, security requirements, reliability SLOs).

### 2. Map Requirements to Catalog Patterns
1. For each NFR, list applicable catalog patterns (e.g., `test-patterns/performance/load.md`).
2. Verify design/implementation references align with catalog guidance.
3. Flag gaps where catalog lacks coverage; queue `sead-pattern-extraction.md` tasks.

### 3. Assess Evidence & Testing
1. Review available test results (load tests, security scans, chaos experiments).
2. Validate evidence meets mode expectations (prototype: documented intent, development: executed tests, build-to-deploy: repeatable automation + monitoring plan).
3. Ensure tooling and configurations follow `technical-preferences.md` and catalog validation rules.

### 4. Risk & Compliance Evaluation
1. Rate risk severity (Low/Medium/High) considering impact × likelihood × catalog deviation.
2. Document constitutional compliance status and required mitigations.
3. Identify follow-up tasks or waivers with owner and due date.

### 5. Report Findings
1. Summarize NFR status as numbered list (PASS/CONCERNS/FAIL per domain).
2. Provide recommendations for additional testing or remediation.
3. Attach findings to QA gate record or catalog compliance report as applicable.
