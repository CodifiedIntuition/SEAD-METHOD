# 05 — Workflow Consolidation

Current state
- 6 files split by {greenfield|brownfield} × {ui|service|fullstack}.
- Sequences are highly similar with minor conditionals (e.g., optional AI UI prompt, brownfield analysis first).

Proposal: single parameterized workflow
- File: `sead-core/workflows/sead-application.yaml`
- Parameters:
  - `project_type`: `greenfield` | `brownfield`
  - `scope`: `ui` | `service` | `fullstack`
  - `mode`: `prototype` | `development` | `build-to-deploy`
  - `enable_ai_ui_prompt`: boolean
- Branching:
  - If `project_type=greenfield`: include `catalog-bootstrap` (greenfield)
  - If `project_type=brownfield`: include brownfield discovery → `brownfield-catalog-generation`
  - If `scope=ui`: skip backend-only steps (but keep API contract reading if relevant)
  - If `enable_ai_ui_prompt=true`: include v0 prompt step

Normalization
- Maintain identical handoff prompts/notes and `sead_benefits` across branches.
- Keep mode progression evaluation and QA gate logic identical.

Implementation steps
- Draft `sead-application.yaml` by merging `sead-greenfield-fullstack.yaml` as the base and adding conditionals mirroring UI/service flows.
- Deprecate the 6 specialized files after migration; keep them as thin wrappers that point to the parameterized workflow for one release cycle.

