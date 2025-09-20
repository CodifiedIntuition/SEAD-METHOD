<!-- Powered by SEAD-METHOD™ Core -->

# Sprint Planning Workflow

## Purpose
Structure sprint planning sessions to balance catalog reuse, strategic priorities, and constitutional constraints.

## Activation
Run at the start of each sprint or planning increment.

## Dependencies
- `/sead-core/tasks/backlog-prioritization-workflow.md`
- `/sead-core/tasks/catalog-dependency-analysis.md`
- `/sead-core/checklists/sead-po-master-checklist.md`
- `/sead-core/templates/sead-sprint-plan-tmpl.yaml`
- `/sead-core/data/catalog-efficiency-metrics.md`
- `/sead-core/data/product-strategy-framework.md`

## Workflow (Sequential)

### 1. Preparation
1. Review prioritized backlog and dependency analysis outputs.
2. Confirm team capacity, velocity, and mode constraints.
3. Identify mandatory validation activities (accessibility, QA, research).

### 2. Candidate Selection
1. Present top backlog items with catalog references and effort.
2. Validate readiness using `story-refinement-workflow.md` results.
3. Ensure catalog dependencies will be met within sprint timeline.

### 3. Sprint Plan Assembly
1. Load `sead-sprint-plan-tmpl.yaml`.
2. Document selected stories, objectives, acceptance criteria, and validation checkpoints.
3. Allocate capacity for catalog maintenance tasks (pattern extraction, documentation).

### 4. Risk & Constraint Review
1. Evaluate constitutional compliance, escalation needs, and release alignment.
2. Plan mitigation actions for identified risks.
3. Schedule mid-sprint reviews for catalog health metrics.

### 5. Finalize & Communicate
1. Present sprint plan summary to team and stakeholders.
2. Update backlog and tracking tools with commitment details.
3. Archive sprint plan template and metrics for retrospective use.
