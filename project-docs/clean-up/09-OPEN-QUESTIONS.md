# 09 — Open Questions / Decisions

- Should we add thin alias files for the most common missing task names (e.g., `constraint-validation.md`) or immediately update all agent `dependencies`? Proposal: update dependencies first; add aliases only where external users might already rely on old names.
- Do we want a dedicated `context-preservation.md` task, or is it sufficient to point to `sead-index-docs.md` and the sharding configuration in `core-config.yaml`? Proposal: add a short `context-preservation.md` that centralizes links and usage notes.
- Architecture templates: add `sead-data-architecture-tmpl.yaml` and `sead-deployment-architecture-tmpl.yaml`, or consolidate into `integration-architecture-tmpl.yaml` with sections? Proposal: start with consolidation; add dedicated templates only if teams demand them.
- Catalog health/evolution: create specific templates or embed as sections in `catalog-validation-workflow` + `catalog-taxonomy-design`? Proposal: embed as sections and avoid new templates unless the workflow proves insufficient.
- Workflows: parameterized single source vs multiple explicit files. Proposal: create the parameterized single source and keep wrappers for one release; retire wrappers after adoption.

