<!-- Powered by SEAD-METHOD™ Core -->

# Backlog Prioritization Workflow

## Purpose
Rank backlog items using catalog impact, constitutional obligations, and strategic value.

## Activation
Run during refinement sessions, pre-sprint planning, or when backlog priorities shift.

## Dependencies
- `/sead-core/data/catalog-pattern-priorities.md`
- `/sead-core/data/catalog-efficiency-metrics.md`
- `/sead-core/data/product-strategy-framework.md`
- `/sead-core/checklists/sead-po-master-checklist.md`
- `/sead-core/checklists/story-quality-checklist.md`

## Workflow (Sequential)

### 1. Gather Inputs
1. Collect candidate backlog items with latest story specs.
2. Confirm readiness status using `story-quality-checklist.md` outputs.
3. Record current metrics from `catalog-efficiency-metrics.md`.

### 2. Evaluate Catalog Impact
1. Assign priority tier from `catalog-pattern-priorities.md` for each item.
2. Identify catalog dependencies and gaps; log follow-up tasks if gaps exist.
3. Note expected reuse amplification and compliance benefits.

### 3. Assess Strategic Fit
1. Apply `product-strategy-framework.md` pillars to each item.
2. Capture evidence (user data, stakeholder inputs) supporting decisions.
3. Evaluate mode alignment and capacity considerations.

### 4. Produce Prioritized List
1. Rank items and present as numbered list with rationale.
2. Highlight items requiring additional validation before scheduling.
3. Recommend sprint or release placement.

### 5. Communicate Outcomes
1. Share summary with stakeholders (Product, Engineering, UX).
2. Update backlog tooling and artifacts (`sead-backlog-tmpl.yaml`).
3. Document decisions and metrics for audit trail.
