<!-- Powered by SEAD-METHOD™ Core -->

# SEAD Catalog Compliance Check

## Purpose
Verify implementation work adheres to catalog standards before code merges or handoffs.

## Activation
Run when user requests catalog compliance verification, prior to PR approvals, or during build-to-deploy gating.

## Dependencies
- `/sead-core/core-config.yaml`
- `/sead-core/data/constraint-matrix.md`
- `/sead-core/data/pattern-guidelines.md`
- `/sead-core/checklists/catalog-compliance-checklist.md`
- Relevant catalog assets (project-supplied at runtime)

## Workflow (Sequential)

### 1. Initialize Context
1. Load project mode from `core-config.yaml`; restate catalog enforcement level.
2. Summarize applicable rules from `constraint-matrix.md` for the work at hand.
3. Gather list of files, components, or APIs impacted by the change.

### 2. Catalog Reference Audit
1. Map each implementation element to catalog counterparts; if missing, log as potential pattern gap.
2. Confirm naming/version alignment with catalog documentation.
3. Verify tokens, props, and configuration values match catalog guidance.

### 3. Execute Checklist
1. Walk through `/sead-core/checklists/catalog-compliance-checklist.md` using user’s preferred interaction style (guided vs. comprehensive).
2. Record pass/fail outcomes and capture evidence or links to supporting artifacts.

### 4. Resolve Issues & Escalations
1. For deviations, document mitigation plan, owner, and timeline.
2. If in build-to-deploy mode, halt progress until resolution is approved.
3. Trigger `sead-pattern-extraction.md` when new reusable elements emerge.

### 5. Report Findings
1. Provide numbered summary: compliant items, deviations, required follow-ups.
2. Recommend go/no-go decision for merge or release.
3. Archive findings alongside implementation artifacts for auditability.
