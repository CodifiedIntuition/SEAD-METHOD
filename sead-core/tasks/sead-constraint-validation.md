<!-- Powered by SEAD-METHOD™ Core -->

# SEAD Constraint Validation Workflow

## Purpose
Ensure planned development work satisfies constitutional constraints and mode-specific guardrails before implementation begins.

## Activation
Run when starting a new story/feature, before coding tasks, or whenever constraints have changed.

## Dependencies
- `/sead-core/core-config.yaml`
- `/sead-core/constitutional-rules/sead-developer-constraints.yaml`
- `/sead-core/data/constraint-matrix.md`
- `/sead-core/data/pattern-guidelines.md`
- `/sead-core/checklists/sead-story-dod-checklist.md`

## Workflow (Sequential)

### 1. Load Governance Context
1. Determine mode from `core-config.yaml`.
2. Read relevant constraint sections from `sead-developer-constraints.yaml`.
3. Summarize key enforcement points using `constraint-matrix.md`.

### 2. Assess Story Readiness
1. Confirm story status (not draft) and necessary artifacts available (requirements, designs, catalog references).
2. Execute `sead-story-dod-checklist.md` if not previously completed for current iteration.
3. Identify missing inputs and request from user before proceeding.

### 3. Constraint Alignment Review
1. Map planned changes to catalog domains (api-contracts, shared-types, design-system, etc.).
2. Validate planned work respects testing, accessibility, and performance requirements per mode.
3. Document potential constraint conflicts or unknowns.

### 4. Decision & Escalation
1. If conflicts exist, outline mitigation plan or escalate to appropriate authority.
2. Record decisions, approvals, or required follow-up tasks (e.g., `sead-catalog-compliance-check.md`, `sead-pattern-extraction.md`).
3. Confirm go/no-go for implementation.

### 5. Output Summary
1. Provide numbered recap of validations performed and outcomes.
2. Attach references (checklist results, catalog links) to shared workspace notes.
3. Explicitly state whether development can proceed under current constraints.
