# 07 — Migration Map (Old → New)

Tasks (agents referenced → canonical)
- advanced-elicitation.md → sead-advanced-elicitation.md
- brownfield-codebase-analysis.md → brownfield-catalog-generation.md
- catalog-pattern-analysis.md → catalog-dependency-analysis.md (validate fit case-by-case)
- constitutional-validation.md → constitutional-validation-workflow.md
- constraint-validation.md → sead-constraint-validation.md
- create-deep-research-prompt.md → sead-create-deep-research-prompt.md
- document-project.md → sead-document-project.md
- facilitate-brainstorming-session.md → sead-facilitate-brainstorming-session.md
- mode-transition-workflow.md → mode-transition-planning.md
- pattern-extraction.md → sead-pattern-extraction.md (and/or pattern-extraction-workflow.md where lifecycle is intended)
- context-preservation.md → use sead-index-docs.md and sharding guidance; consider adding a thin `context-preservation.md` that links to those
- agent-coordination-workflow.md / multi-agent-session-workflow.md / workflow-orchestration.md → consolidate as `orchestration` content under `project-docs` and/or add a planning task if needed
- catalog-evolution-planning.md / catalog-health-analysis.md / catalog-optimization-workflow.md → consider combining into `catalog-structure` and `catalog-validate` tasks with sections
- sead-kb-mode-interaction.md → fold into existing data (`mode-constraint-matrix.md`) and agent constraint docs

Data (missing but referenced)
- catalog-patterns.md → add an index page that explains current pattern docs: `pattern-guidelines.md`, `pattern-classification.md`, `pattern-quality-metrics.md`, and where to find domain patterns in a consumer catalog
- agent-coordination-framework.md → add a concise framework doc under `sead-core/data/`
- constitutional-governance.md → add or point to `sead-constitution.md` with a summary page
- pattern-classification-framework.md → merge into existing `pattern-classification.md`; add a header alias note
- story-patterns.md → add short guidance linking to story templates and quality checklists

Templates (missing but referenced)
- project-brief-tmpl.yaml → map to existing `sead-project-brief-tmpl.yaml`
- brainstorming-output-tmpl.yaml → map to `sead-brainstorming-output-tmpl.yaml`
- competitor-analysis-tmpl.yaml → map to `sead-competitor-analysis-tmpl.yaml` (if present) or add one based on current pattern
- market-research-tmpl.yaml → map to `sead-market-research-tmpl.yaml` (if added) or adjust agents to use `sead-project-brief-tmpl.yaml`
- catalog-health-report-tmpl.yaml → if needed, generate from `catalog-validation-workflow` structure
- constraint-story-tmpl.yaml / catalog-story-tmpl.yaml → prefer `sead-story-tmpl.yaml`; add sections for constraint/catelog refs
- api/type/integration/design-system “catalog-*” tmpl names → prefer domain-specific templates already present; if truly needed, add thin wrappers that include the spec spine
- sead-data-architecture-tmpl.yaml / sead-deployment-architecture-tmpl.yaml → either add from existing content or re-point to `integration-architecture-tmpl.yaml` + dedicated sections

Agent dependency updates (examples)
- sead-analyst: replace nonexistent `create-deep-research-prompt.md` with `sead-create-deep-research-prompt.md`; replace `document-project.md` with `sead-document-project.md`; ensure templates use `sead-*` equivalents.
- sead-architect: replace `constraint-validation.md` with `sead-constraint-validation.md`; replace `pattern-extraction.md` with `sead-pattern-extraction.md`; consider dropping missing arch templates or adding them.
- sead-scrum-master: replace `catalog-pattern-analysis.md` with `catalog-dependency-analysis.md`; for `context-preservation.md` refer to `sead-index-docs.md` + sharding.
- sead-catalog-architect: replace `brownfield-codebase-analysis.md` with `brownfield-catalog-generation.md`; ensure external-* tasks point to existing files.

Deprecation handling
- Keep old names as alias stubs (brief docs that redirect) for one release where needed; remove in next minor.
- Update CLI help and docs to only show canonical names.

