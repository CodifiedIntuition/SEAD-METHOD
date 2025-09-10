# SEAD Agent → Document Outputs (Exhaustive by Task)

Purpose: reference tables showing, for each SEAD agent, the tasks/commands that generate documents, with inputs, outputs, output locations, and a short description. Sources: CLI Reference, SEAD File Types & Catalog Documentation, and task specs in `sead-core/tasks`.

Legend:
- Location values reflect documented, canonical paths when defined; otherwise marked as TBD (project-defined) to avoid guessing.
- “Star-commands” (e.g., `*create-...`) are agent-internal commands referenced in the docs; they are included when they produce files.

---

## SEAD Analyst

| Task/Command | Inputs (key docs/context) | Output(s) | Location | Description | Consumers |
| - | - | - | - | - | - |
| `sead task advanced-elicitation` | Optional: `docs/sead-project-brief.md`; relevant `sead-catalog/*` | Brainstorming session notes | `docs/brainstorming/session-*.md` | Structured elicitation outcomes with catalog awareness | Product Owner (PRD), Architect (spec/plan), Analyst (document-project) |
| `sead task create-deep-research-prompt` | Topic, mode, scope | Research prompt(s) | TBD (project-defined) | Catalog-aware prompts to guide deeper technical research | Analyst/Architect during plan/spec refinement |
| `sead task document-project` | Project docs, catalog; scope | Project documentation set | `docs/project-documentation/*` | Consolidated documentation; scope: minimal/standard/comprehensive | Team onboarding, stakeholders, audit/review |
| `sead task index-docs` | Source path (default `./docs`) | Documentation index | `docs/INDEX.md` | Tree/flat/categorized index with link validation | All contributors (navigation), doc tooling |

---

## SEAD Product Owner

| Task/Command | Inputs (key docs/context) | Output(s) | Location | Description | Consumers |
| - | - | - | - | - | - |
| `sead task create-next-story` | `docs/sead-prd.md`, `docs/sead-architecture.md`, relevant `sead-catalog/*` | Story document(s) | `sead-workspace/stories/*.md` | Constraint-aware user stories referencing catalog patterns | `sead implement`, `sead task qa-gate`, `sead task risk-profile`, `sead task review-story` |
| `*create-prd` (star-command) | `docs/sead-project-brief.md`, catalog scan | Product Requirements Doc | `docs/sead-prd.md` | Comprehensive PRD with catalog integration | Architect (architecture), SM/PO (stories), Spec/Plan inputs |

Note: Some story creation flows use the Scrum Master agent (see below). CLI maps `create-next-story` to Product Owner as primary.

---

## SEAD Scrum Master

| Task/Command | Inputs (key docs/context) | Output(s) | Location | Description | Consumers |
| - | - | - | - | - | - |
| `sead task facilitate-brainstorming-session` | Topic, participants; optional project brief | Brainstorming session notes | `docs/brainstorming/session-*.md` | Facilitated ideation with constitutional framing | Product Owner (PRD), Architect (spec/plan) |
| `*create-story` (star-command) | PRD epics, architecture, catalog | Story document(s) | `sead-workspace/stories/*.md` | Story creation with catalog and mode gates | `sead implement`, `qa-gate`, `risk-profile`, `review-story` |
| `*create-epic` (star-command) | PRD epics, catalog | Epic document | `docs/epics/epic-{number}.md` | Epic aggregation for related stories | Story creation and planning |

---

## SEAD Architect

| Task/Command | Inputs (key docs/context) | Output(s) | Location | Description | Consumers |
| - | - | - | - | - | - |
| `sead task create-simple-spec` | Mode, catalog patterns | Spec (lightweight) | `sead-workspace/specifications/spec-*.md` | Simplified specification referencing catalog patterns | `sead plan`, task planning |
| `sead task approve-solution` | Solution ID, architecture, constraints | ADR / approval record | `docs/decision-records/adr-YYYYMMDD-<slug>.md` (recommended) | Architecture/solution approval with constraints & catalog checks | Developer (implementation), QA (review criteria), governance history |
| `*create-backend-architecture` | `docs/sead-prd.md`, catalog | System architecture | `docs/sead-architecture.md` | Overall technical architecture with catalog integration | PO/SM (stories), Developer, QA |
| `*create-front-end-architecture` | `docs/sead-prd.md`, `docs/sead-architecture.md`, `sead-catalog/design-system/` | Frontend architecture | `docs/frontend-architecture.md` | UI/UX architecture aligned to design system | Developer, QA |
| `*create-brownfield-architecture` | Existing codebase, `docs/brownfield-analysis.md`, extracted catalog | Brownfield architecture | `docs/brownfield-architecture.md` | Integration-focused architecture for existing systems | Story creation, Developer, QA |
| `*create-integration-architecture` | External asset analysis, target catalog | Integration architecture | `docs/integration-architecture.md` | Strategy for integrating external assets into catalog | `*catalog-merge-external`, external integration validation |

Workflow command contributions that yield documents (co-produced with other agents):
- `sead specify` → final technical specification in `sead-workspace/specifications/*`
- `sead plan` → plan in `sead-workspace/planning/*`

---

## SEAD Developer

| Task/Command | Inputs (key docs/context) | Output(s) | Location | Description | Consumers |
| - | - | - | - | - | - |
| `sead implement <story-id>` | Story, architecture, catalog, mode | Implementation record | `sead-workspace/implementations/impl-<story-id>-*.md` | Implementation notes with catalog usage & compliance | `sead task qa-gate`, `sead task verify-build`, `sead status`, `sead validate` |

Note: Developer tasks primarily produce code; documentation is the implementation record tied to the story.

---

## SEAD QA

| Task/Command | Inputs (key docs/context) | Output(s) | Location | Description | Consumers |
| - | - | - | - | - | - |
| `sead task qa-gate` | Implemented story, architecture, `sead-catalog/test-patterns/` | QA gate report | `docs/qa/qa-gate-{date}.md` | Mode-aware quality gate with catalog compliance status | `sead validate --quality-gates`, release/deploy reviews, story rework |
| `sead task review-story` | Story file, catalog patterns | Story review report | Story file append or `docs/qa/story-reviews/<story-id>.md` (project-defined) | Catalog-aware review against acceptance criteria | Product Owner/Scrum Master (refine story), Developer before implementation |
| `sead task verify-build` | Mode, build/test outputs | Build verification report | `docs/qa/build-verification-*.md` (project-defined) | Compliance verification for build readiness | Release readiness checks, `sead validate` |
| `sead task risk-profile` | Story, mode, catalog context | Risk report (+ gate YAML block) | `docs/qa/assessments/{epic}.{story}-sead-risk-{YYYYMMDD}.md` | Constitutional, catalog-aware risk assessment (see task spec) | QA gate (paste YAML), Architect (plan updates), leadership risk tracking |

---

## SEAD Catalog Architect

| Task/Command | Inputs (key docs/context) | Output(s) | Location | Description | Consumers |
| - | - | - | - | - | - |
| `sead task brownfield-create-epic` | Source codebase, analysis depth | Epic document | `docs/epics/epic-{number}.md` | Brownfield epic with catalog integration plan | Story creation and implementation planning |
| `sead task brownfield-create-story` | Source codebase, pattern focus | Story document(s) | `sead-workspace/stories/*.md` | Brownfield stories referencing extracted patterns | `sead implement`, QA tasks |
| `*create-catalog-plan` | Project docs, catalog template | Catalog generation plan | `docs/catalog-generation-plan.md` | Strategy for populating catalog domains | Catalog generation; team alignment |
| `*analyze-external-assets` | `external-assets-staging/*` | Analysis report | `docs/external-asset-analysis.md` | External asset inventory/quality/compatibility analysis | `docs/integration-architecture.md` creation; Catalog integration planning |
| `*design-system-transform` | Staged design system assets | Transformed catalog patterns | `sead-catalog/design-system/*` | Convert tokens/components to SEAD catalog format | `*catalog-merge-external`; Dev/UX using patterns |
| `*api-contract-transform` | Staged API specs | Transformed API catalog | `sead-catalog/api-contracts/*` | Convert OpenAPI/GraphQL to SEAD catalog patterns | `*catalog-merge-external`; Dev/QA referencing contracts |
| `*catalog-merge-external` | Catalog + transformed assets | Decision log; merged catalog | Decision log: TBD; Catalog: `sead-catalog/*` | Merge external patterns into catalog with conflict resolution | `*validate-external-integration`, adoption strategy, developer teams |
| `*validate-external-integration` | Merged catalog | Validation report | `docs/external-asset-validation-report.md` | Validate integrated external assets vs constraints | Governance/QA sign-off before adoption |
| `*adoption-strategy-external` | Validated integration | Adoption strategy | `docs/external-asset-adoption-strategy.md` | Team onboarding and migration guidance | Team enablement and migration workstreams |
| `sead catalog init` | Mode, template | Seeded catalog | `./sead-catalog/` | Initialize greenfield catalog structure | All technical agents; spec/plan/stories reference patterns |
| `sead catalog validate` | Catalog path | Validation report | Text/JSON/HTML per options | Validate integrity/consistency/compliance | Governance reviews, CI checks, `sead validate` |

---

## SEAD Pattern Extraction

| Task/Command | Inputs (key docs/context) | Output(s) | Location | Description | Consumers |
| - | - | - | - | - | - |
| `sead task brownfield-catalog-generation` | Source codebase; optional analysis | Populated catalog; extraction report | `sead-catalog/*`; `docs/pattern-extraction-report.md` | AI-powered pattern extraction and catalog population | Catalog Architect integration; Architect (brownfield architecture); story creation |
| `*api-contract-extract` | Codebase API definitions; `docs/brownfield-analysis.md` | API contracts | `sead-catalog/api-contracts/*` | Extract and document API contracts for catalog | Developers/QA/Architect referencing contracts |

---

## SEAD Project Manager

| Task/Command | Inputs (key docs/context) | Output(s) | Location | Description | Consumers |
| - | - | - | - | - | - |
| `sead task generate-project-brief` | Scope/template, constraints | Project brief | `docs/sead-project-brief.md` | Initial project scope with constitutional framing | Product Owner (PRD), Architect (architecture), Catalog Architect (greenfield bootstrap) |
| `sead task risk-profile` | Story, mode, catalog context | Risk report | See QA row above | Risk assessment framework (agent alignment varies by flow) | QA gate (YAML), Architect updates, leadership visibility |

---

## SEAD UX Expert

| Task/Command | Inputs (key docs/context) | Output(s) | Location | Description | Consumers |
| - | - | - | - | - | - |
| (No standalone CLI tasks that generate files are defined in docs) | — | — | — | Participates in architecture/design documents alongside Architect | Developer (component work), Architect (design integrity) |

---

## SEAD Master / SEAD Orchestrator

| Task/Command | Inputs (key docs/context) | Output(s) | Location | Description | Consumers |
| - | - | - | - | - | - |
| (Coordinator roles) | — | — | — | Coordinate multi-agent workflows; do not typically author persistent documents directly | All agents (workflow coordination) |

---

## Workflow Commands That Produce Documents (Cross-Agent Contribution)

| Command | Primary Agent(s) | Inputs | Output(s) | Location | Description | Consumers |
| - | - | - | - | - | - | - |
| `sead specify` | SEAD Architect (+ Analyst) | Mode, catalog, user description | Technical specification | `sead-workspace/specifications/*` | Constitutional specification with catalog integration | `sead plan`, task planning, story shaping |
| `sead plan` | SEAD Architect | Catalog status, spec status, mode | Plan document | `sead-workspace/planning/*` | Architecture/implementation plan with constraints | Developer context, QA criteria, task breakdown, solution approvals |
| `sead stories` | Scrum Master/Product Owner | PRD, architecture, catalog | Story files | `sead-workspace/stories/*` | Batch story generation with catalog constraints | `sead implement`, QA tasks, risk profiling |
| `sead implement` | SEAD Developer | Story, architecture, catalog | Implementation record | `sead-workspace/implementations/*` | Implementation notes with compliance validation | `qa-gate`, verify-build, status/validate |

---

## Notes
- Where paths are marked “TBD (project-defined)”, projects should standardize locations and update CLI/task defaults as needed.
- This file is derived from repository documentation. If new tasks are added or outputs change, please update this map to keep it exhaustive.

---

## Suggested Harmonization and Rationalization

Goals: reduce duplication, converge on canonical producers, standardize templates/locations, and make downstream usage predictable.

Principles
- One canonical producer per artifact type; others become aliases or feeders.
- One canonical location per artifact type; discourage ad‑hoc paths.
- One shared schema/front‑matter across workflows and tasks.
- Explicit Produced‑By → Consumed‑By graph via a project manifest.

Canonical Producers
- Specification: `sead specify` (Architect). Alias: `sead task create-simple-spec` → `sead specify --template simple`.
- Plan: `sead plan` (Architect). Task `sead task create-implementation-plan` writes into the same planning dir and schema.
- Stories: `sead stories` (SM/PO). Alias: `sead task create-next-story` → internal call to the same story engine/template.
- Implementation Record: `sead implement` (Developer) with standardized front‑matter.
- QA Gate: `sead task qa-gate` (QA) as the single canonical gate artifact.
- Catalog Ops: `sead catalog init|generate|validate` canonical; Catalog Architect star‑commands become subcommands.

Overlap → Harmonization

| Area | Overlap Today | Harmonization Action |
| - | - | - |
| Spec creation | `sead specify` vs `sead task create-simple-spec` | Make task an alias to `sead specify --template simple`; same schema/location |
| Plan vs approvals | Plan vs `sead task approve-solution` | Keep plan canonical; `approve-solution` writes ADR linked from the plan |
| Story generation | `sead stories` vs `sead task create-next-story` | Route through the same story generator/template and directory |
| QA docs | `qa-gate`, `review-story`, `verify-build` | `qa-gate` is canonical gate; others feed into it and link from story/impl |
| Catalog external | Star‑commands vs tasks/CLI | Promote star‑commands to `sead catalog` subcommands with identical outputs |

Schema and Templates
- Define a shared front‑matter schema: `id`, `title`, `type`, `mode`, `related {spec, plan, story, impl, qa[]}`, `catalog_patterns[]`, `decision_refs[]`, `created`, `updated`.
- Provide canonical templates for: spec, plan, story, impl, qa‑gate, ADR, epic, external integration docs.
- Add JSON/YAML schema files and basic doc‑lint rules (missing required keys, bad links, unknown pattern ids).

Locations (canonical)
- Spec: `sead-workspace/specifications/`
- Plan: `sead-workspace/planning/`
- Stories/Epics: `sead-workspace/stories/` and `sead-workspace/stories/epics/`
- Implementation records: `sead-workspace/implementations/`
- QA: `docs/qa/` (gates, build‑verification, assessments)
- ADRs/Decisions: `docs/decision-records/`
- External integration docs: `docs/external-*.md`
- Catalog: `sead-catalog/`

Produced‑By → Consumed‑By Manifest
- File: `project-docs/artifact-manifest.yaml` maintained by CLI.
- Content: every artifact id, path, produced‑by (command/agent), and consumers (commands/tasks/agents).
- CLI automatically appends/updates on `specify/plan/stories/implement/qa-gate/catalog` commands.

CLI Convergence Plan
- Expose Catalog Architect star‑commands as: `sead catalog analyze-external`, `transform-design-system`, `transform-api-contracts`, `merge-external`, `validate-external`, `adoption-strategy`.
- Make `sead task create-simple-spec` and `create-next-story` call into the workflow engines; mark them as aliases in docs.
- Ensure `approve-solution` writes ADRs using a shared ADR template and auto‑links to the current plan.

Docs and Links
- Convert textual references to relative links; add anchors where helpful.
- Add a docs index (already via `docs/INDEX.md`) and ensure every artifact type has a doc explaining schema and lifecycle.

Validation & CI
- Add a `docs:lint` script to verify schemas, required front‑matter, relative links, and cross‑refs to catalog patterns.
- Add a CI job that runs `sead validate --constitutional --catalog --agents --quality-gates` and `docs:lint` on PRs.

Migration Steps (Incremental)
1) Publish canonical schemas/templates and update docs.  
2) Mark overlapping tasks as aliases; update help text to point to canonical producers.  
3) Implement manifest writer and start recording producer/consumer links.  
4) Promote star‑commands to `sead catalog` subcommands.  
5) Enable doc‑lint and CI validation.  
6) Remove deprecated paths/templates after one release cycle.

Roadmap (Phased)
- Phase A (Docs): schemas, templates, links, artifact map finalized.
- Phase B (CLI): aliasing + manifest + catalog subcommands.
- Phase C (Validation): doc‑lint + CI; enforce canonical locations.
- Phase D (Cleanup): deprecate legacy paths and duplicated producers.
