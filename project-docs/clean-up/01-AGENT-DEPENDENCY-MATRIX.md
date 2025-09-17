# 01 — Agent Dependency Matrix, IO Contracts, and Roles

Purpose: clarify who does what, which tasks each agent can execute, standardize inputs they load (rules, catalog, stories, patterns), and where outputs are written.

Global context and IO (all agents)
- Always read `sead-core/core-config.yaml:1` for modes, catalog enforcement, discovery paths.
- Mode defaults and quality gates: `sead-core/core-config.yaml:200` and `sead-core/core-config.yaml:560`.
- Constitutional rules per agent: `sead-core/constitutional-rules/*.yaml` + `sead-core/constitutional-rules/sead-constitution.md`.
- Catalog path default and required components: `sead-core/core-config.yaml:120`.
- Output and discovery paths: `sead-core/core-config.yaml:400`.

Output locations (recommended, consistent)
- Stories: `sead-workspace/stories` (CLI) and/or `docs/stories` (traditional)
- Specifications: `sead-workspace/specifications` and/or `docs/specifications`
- Planning: `sead-workspace/planning` and/or `docs/planning`
- Tasks: `sead-workspace/tasks`
- QA Gates: `docs/qa/gates` or `sead-workspace/qa/gates`

sead-analyst (Research and ideation)
- Core role: discovery, brainstorming, research prompts, project briefs.
- Reads: core-config, agent constraints, catalog (when applicable), data frameworks (`user-research-framework.md` when relevant).
- Key tasks: create-deep-research-prompt, facilitate-brainstorming-session, create-doc (with project-brief template), document-project.
- Primary outputs: project briefs, research prompts, brainstorming outputs into `specifications` or `planning`.
- Notes: bundle catalog-first thinking; avoid generic template names that don’t exist (see migration map).

sead-product-owner (Requirements owner)
- Core role: PRD ownership, acceptance criteria, readiness.
- Reads: PO constraints, catalog, story/epic docs; uses readiness and constitutional checklists.
- Key tasks: sead-generate-project-brief, sead-create-epic, sead-create-story, sead-approve-solution, execute-checklist.
- Primary outputs: PRDs, epics/stories in `stories` and `specifications`.

sead-architect (System architecture)
- Core role: architecture documents and validation; mode-aware design.
- Reads: architect constraints, catalog, technical preferences.
- Key tasks: create-doc (with architecture templates), document-project, execute-checklist, pattern-extraction workflow (selectively).
- Primary outputs: architecture specs in `specifications`.
- Note: template set includes fullstack, front-end; data/deployment templates referenced but missing (see migration map).

sead-catalog-architect (Catalog generation)
- Core role: greenfield bootstrap and brownfield extraction; taxonomy design; external asset integration.
- Reads: unified-pattern-framework.md (catalog domains/taxonomy), extraction-strategies.md, brownfield-analysis-framework.md.
- Key tasks: greenfield-catalog-bootstrap, brownfield-catalog-generation, pattern-identification/extraction/classification/documentation workflows, catalog-taxonomy-design, catalog-validation-workflow, external-*.
- Primary outputs: catalog plans/specs in `planning` and `specifications`; actual catalog lives in consumer repos.

sead-ux-expert (UX/design system)
- Core role: front-end spec, wireframes, prototypes, accessibility; design-system analysis.
- Reads: UX constraints, unified-constraint-definitions.md (mode matrix), unified-design-standards.md (design-system guidelines, accessibility standards).
- Key tasks: create-doc (front-end-spec, wireframe/prototype specs), design-system-analysis, user-research-planning-workflow, accessibility-audit-workflow, ux-validation-workflow.
- Primary outputs: front-end-spec, wireframes/prototypes, accessibility audits in `specifications`.

sead-scrum-master (Backlog facilitation)
- Core role: decompose work, create next story, validate draft quality.
- Reads: SM constraints, catalog references from sharded PRD/Arch, story quality checklist.
- Key tasks: sead-create-next-story, sead-correct-course, execute-checklist (story-draft), sead-shard-doc.
- Primary outputs: stories to `stories` with QA-ready scaffolding.

sead-developer (Implementation)
- Core role: implement stories under mode constraints; catalog-first coding; produce QA-ready diffs.
- Reads: dev constraints + unified-constraint-definitions.md + mandatory catalog reads (shared-types, unified-design-standards.md, API contracts, etc.).
- Key tasks: sead-constraint-validation, sead-catalog-compliance-check, sead-apply-qa-fixes, sead-validate-next-story, sead-pattern-extraction (when capturing reuse), execute-checklist.
- Primary outputs: implementation diffs and updated story QA Results; no direct doc ownership outside story updates unless asked.

sead-qa (Quality architect)
- Core role: mode-aware quality gates, catalog compliance, NFRs, traceability, test design.
- Reads: QA constraints, unified-testing-strategy.md (test patterns), unified-quality-framework.md (validation schemas).
- Key tasks: sead-review-story, sead-qa-gate, sead-nfr-assess, sead-test-design, sead-trace-requirements, sead-catalog-compliance-check, sead-constraint-validation.
- Primary outputs: QA Results appended to story; gate files to `qa/gates`.

sead-project-manager / sead-orchestrator / sead-master (coordination)
- Core role: governance, coordination, cadence, and orchestration (non-overlapping with technical deliverables).
- Reads: PM/Orchestrator constraints, mode/quality gates.
- Tasks: planning workflows, mode transition planning, resource optimization, project documentation.
- Outputs: planning docs (roadmaps, milestone plans) to `planning`.

Standardized Input Load Order (per agent activation)
- 1) `sead-core/core-config.yaml` (modes, catalog enforcement, discovery)
- 2) Agent-specific constitutional rules `sead-core/constitutional-rules/<agent>-constraints.yaml`
- 3) Catalog mandatory reads (by domain; see `constraints` in core-config)
- 4) Story/spec discovery via `workspace.discovery_paths` (when a story/spec context is active)

Standardized Output Rules
- Stories/epics/specs: follow `workspace.cli_outputs` when running via CLI; otherwise use the first valid discovery path.
- QA gates: prefer `docs/qa/gates` (traditional), allow `sead-workspace/qa/gates` (CLI), keep consistent within a repo.

