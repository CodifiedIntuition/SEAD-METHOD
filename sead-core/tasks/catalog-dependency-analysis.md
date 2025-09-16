<!-- Powered by SEAD-METHOD™ Core -->

# Catalog Dependency Analysis Workflow

## Purpose
Map backlog items to catalog patterns and identify dependencies or gaps requiring coordination.

## Activation
Run before sprint planning, when introducing new epics, or when catalog updates occur.

## Dependencies
- `/sead-core/data/catalog-pattern-priorities.md`
- `/sead-core/data/catalog-efficiency-metrics.md`
- `/sead-core/data/product-strategy-framework.md`
- `/sead-core/templates/sead-backlog-tmpl.yaml`
- `/sead-core/tasks/sead-pattern-extraction.md`

## Workflow (Sequential)

### 1. Collect Inputs
1. List stories/epics under consideration with links to current specs.
2. Extract catalog references from each item.
3. Note mode and enforcement level from `core-config.yaml`.

### 2. Analyze Dependencies
1. For each item, map required catalog patterns (components, APIs, data models, tests).
2. Identify shared dependencies and potential conflicts.
3. Flag missing or outdated patterns; queue `sead-pattern-extraction.md` or catalog maintenance tasks.

### 3. Evaluate Readiness
1. Determine if dependencies are available, in progress, or blocked.
2. Assess impact on scheduling and capacity.
3. Recommend mitigation strategies (parallel workstreams, sequencing adjustments).

### 4. Produce Dependency Report
1. Create numbered summary listing items and their dependencies.
2. Include catalog links, owners, and status for each dependency.
3. Store results in backlog documentation (`sead-backlog-tmpl.yaml`).

### 5. Communicate & Follow-up
1. Share findings with engineering, UX, and catalog maintainers.
2. Update planning artefacts (sprint plan, roadmap) with dependency insights.
3. Track follow-up actions until dependencies are resolved.
