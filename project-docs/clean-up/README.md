# SEAD Core Cleanup Plan

Purpose: provide a thorough, actionable plan to rationalize agents, tasks, checklists, data, templates, and workflows in `sead-core`, reduce duplication, fix broken references, and clarify agent inputs/outputs and handoffs.

What’s here:
- 00-INVENTORY.md — current-state inventory and gap list
- 01-AGENT-DEPENDENCY-MATRIX.md — agent→tasks/checklists/data/templates mapping, inputs/outputs
- 02-OVERLAP-ANALYSIS.md — where files overlap in purpose
- 03-RATIONALIZATION-PLAN.md — canonical modules, naming, ownership, and deprecations
- 04-CONTEXT-AND-IO-CONTRACTS.md — standardized agent load order, inputs/outputs, paths
- 05-WORKFLOW-CONSOLIDATION.md — unify greenfield/brownfield and UI/service/fullstack workflows
- 06-IMPLEMENTATION-PLAN.md — phased cleanup with acceptance criteria
- 07-MIGRATION-MAP.md — old→new names for tasks, data, templates; agent dependency updates
- 08-VALIDATION-CHECKLIST.md — verify the cleanup end-to-end
- 09-OPEN-QUESTIONS.md — decisions to confirm

References:
- `sead-core/core-config.yaml`
- `sead-core/agents/*`
- `sead-core/tasks/*`
- `sead-core/checklists/*`
- `sead-core/data/*`
- `sead-core/templates/*`
- `sead-core/workflows/*`

