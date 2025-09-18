# 04 — Context and IO Contracts (Load order, Inputs, Outputs, Paths)

Standard agent load order
- Read `sead-core/core-config.yaml:1` and resolve current `workflows.default_mode` and `catalog.enforce_constraints`.
- Load agent-specific constitutional rules: `sead-core/constitutional-rules/<agent>-constraints.yaml`.
- Load mandatory catalog reads per domain when applicable (see `constraints.*` in `sead-core/core-config.yaml:240`).
- Resolve active artifact via discovery paths (`stories`, `specifications`, `planning`, `tasks`, `qa_gates`) from `sead-core/core-config.yaml:400`.

Inputs by domain (examples)
- Shared types: `shared-types/index.ts`, `shared-types/api-types.ts`, `shared-types/domain-types.ts`
- Design system: `design-system/tokens.json`, `design-system/components/index.ts`, `design-system/theme.config.js`
- API contracts: `api-contracts/current.json`, `api-contracts/endpoints.yaml`, `api-contracts/schemas.json`
- Validation: `validation-schemas/*`
- Quality: `.eslintrc.json`, `tsconfig.json`, test configs

Outputs (canonical locations)
- Stories: `sead-workspace/stories` or `docs/stories`
- Specs (arch, UX, etc.): `sead-workspace/specifications` or `docs/specifications`
- Planning: `sead-workspace/planning` or `docs/planning`
- Tasks (intermediate outputs): `sead-workspace/tasks`
- QA gates: `docs/qa/gates` (traditional) or `sead-workspace/qa/gates` (CLI) — pick one and standardize per repo

Handoff contracts
- Story → Dev: story includes mode selection, catalog component references, and constraint criteria.
- Dev → QA: story QA Results gets updated; gate YAML written under `qa/gates` with catalog compliance summary.
- Architect/UX → PO: specs carry catalog refs; PO checklist validates consistency and completeness.
- Catalog Architect ↔ Others: pattern proposals and validations link to catalog lifecycle outputs.

Context preservation
- Use sharding when large docs: `sead-core/tasks/sead-shard-doc.md` and `sead-core/sharding` config in `core-config.yaml:620`.
- Maintain catalog references and cross references in output per sharding config (`include_context_headers`, `create_dependency_maps`).

