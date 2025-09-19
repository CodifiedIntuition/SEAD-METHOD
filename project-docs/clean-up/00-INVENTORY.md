# 00 — Inventory and Gaps

This captures the current state of `sead-core` and highlights mismatches between what agents reference vs. what exists. This helps scope rename/merge work.

Core entrypoints examined:
- `sead-core/core-config.yaml`
- `sead-core/agents/*.md`
- `sead-core/tasks/*.md`
- `sead-core/checklists/*.md`
- `sead-core/data/*.md`
- `sead-core/templates/*.yaml`
- `sead-core/workflows/*.yaml`

High-level counts (as of analysis):
- Agents: 12 (`sead-core/agents`)
- Tasks: 64 (`sead-core/tasks`)
- Checklists: 18 (`sead-core/checklists`)
- Data docs: 22 (`sead-core/data`)
- Templates: 43 (`sead-core/templates`)
- Workflows: 6 (`sead-core/workflows`)

Workflows present:
- Greenfield: `sead-greenfield-{ui|service|fullstack}.yaml`
- Brownfield: `sead-brownfield-{ui|service|fullstack}.yaml`

Key workspace config (outputs + discovery): `sead-core/core-config.yaml:400`
- CLI outputs: `stories`, `implementations`, `tasks`, `specifications`, `planning`
- Discovery paths for `stories`, `implementations`, `specifications`, `planning`, `tasks`, `qa_gates`

Agent→Tasks referenced that do NOT exist under `sead-core/tasks/`
- advanced-elicitation.md → likely `sead-advanced-elicitation.md`
- agent-coordination-workflow.md → missing
- brownfield-codebase-analysis.md → likely `brownfield-catalog-generation.md`
- catalog-evolution-planning.md → missing
- catalog-health-analysis.md → missing
- catalog-optimization-workflow.md → missing
- catalog-pattern-analysis.md → likely `catalog-dependency-analysis.md`
- constitutional-validation.md → likely `constitutional-validation-workflow.md` or `sead-constraint-validation.md`
- constraint-validation.md → likely `sead-constraint-validation.md`
- context-preservation.md → missing (see `sead-index-docs.md` / sharding guides)
- create-deep-research-prompt.md → likely `sead-create-deep-research-prompt.md`
- document-project.md → likely `sead-document-project.md`
- facilitate-brainstorming-session.md → likely `sead-facilitate-brainstorming-session.md`
- mode-transition-workflow.md → likely `mode-transition-planning.md`
- multi-agent-session-workflow.md → missing
- pattern-extraction.md → likely `sead-pattern-extraction.md` and/or `pattern-extraction-workflow.md`
- sead-kb-mode-interaction.md → missing
- workflow-orchestration.md → missing

Agent→Data referenced but missing under `sead-core/data/`
- agent-coordination-framework.md
- catalog-patterns-library.md
- catalog-patterns.md (many references) → closest: `pattern-guidelines.md`, `pattern-classification.md`
- constitutional-governance.md
- pattern-classification-framework.md → closest: `pattern-classification.md`, `pattern-quality-metrics.md`
- story-patterns.md

Agent→Templates referenced but missing under `sead-core/templates/`
- api-contract-catalog-tmpl.yaml
- brainstorming-output-tmpl.yaml
- catalog-health-report-tmpl.yaml
- catalog-story-tmpl.yaml
- competitor-analysis-tmpl.yaml
- constitutional-audit-tmpl.yaml
- constraint-story-tmpl.yaml
- design-system-catalog-tmpl.yaml
- integration-pattern-catalog-tmpl.yaml
- market-research-tmpl.yaml
- mode-transition-plan-tmpl.yaml
- project-brief-tmpl.yaml
- sead-competitor-analysis-tmpl.yaml
- sead-data-architecture-tmpl.yaml
- sead-deployment-architecture-tmpl.yaml
- sead-market-research-tmpl.yaml
- sead-specification-tmpl.yaml
- type-system-catalog-tmpl.yaml

Notes
- Several “sead-*” vs generic names exist for the same activity (e.g., `create-deep-research-prompt`), causing broken references in agent `dependencies` blocks.
- Some catalog/data names drifted (e.g., `catalog-patterns.md` vs `pattern-guidelines.md`), and some conceptual artifacts are likely intended but not yet created (e.g., coordination framework).

