# 03 — Rationalization Plan (Canonical modules, naming, ownership)

Guiding principles
- Catalog-first and mode-aware stay central; do not weaken constraints.
- Reduce duplicate tasks by consolidating around lifecycle modules and flags.
- Keep role clarity: agents call canonical tasks; avoid agent-specific forks unless essential.
- Prefer stable, explicit names; add aliases only during migration.

Module boundaries (canonical)
- pattern.* → identify, extract, classify, document, validate, integrate (lifecycle)
- catalog.* → bootstrap (greenfield|brownfield), structure (taxonomy+deps), validate, integrate-external
- story.* → create (basic|next|brownfield), refine, validate, shard
- qa.* → review, gate, nfr, test-design, trace, compliance-check
- ux.* → design-system-analysis, wireframe, prototype, research-plan, accessibility-audit, ux-validation
- planning.* → project-plan, backlog-prioritization, sprint-planning, mode-transition, resource-optimization

Naming conventions
- Tasks: use kebab-case; domain prefix first (pattern-*, catalog-*, story-*, qa-*, ux-*, planning-*).
- Agent-specific operator tasks keep `sead-` prefix when they encapsulate multiple canonical steps with role rules (e.g., `sead-review-story`, `sead-create-next-story`).
- Data and checklists: keep descriptive nouns; avoid “-framework” vs “-guidelines” drift unless purpose differs.
- Templates: `<domain>-<artifact>-tmpl.yaml` or `sead-<artifact>-tmpl.yaml` for cross-domain specs.

Canon vs Alias (examples)
- canonical: `pattern-identification-workflow.md` (alias: —)
- canonical: `sead-pattern-extraction.md` + references lifecycle docs (alias for `pattern-extraction.md` during migration)
- canonical: `catalog-validation-workflow.md` (alias for `constitutional-validation.md` where appropriate)
- canonical: `sead-create-story.md` (`--next`, `--brownfield` flags in CLI), keep `sead-brownfield-create-story.md` for prose guidance only
- canonical: `sead-constraint-validation.md` (dev audience) and `constitutional-validation-workflow.md` (PO audience); cross-link explicitly

Ownership and IO
- Each canonical module specifies:
  - Inputs: rules, catalog domains, story/spec discovery paths
  - Outputs: CLI outputs or docs paths per `core-config.yaml`
  - Cross-links: related modules to avoid prose duplication

Deprecation policy
- Mark non-canonical names as deprecated in agent `dependencies` after migration.
- Maintain aliases for one release; remove in the subsequent minor version.

