# 06 — Implementation Plan (Phased)

Phase 0 — Prep and guardrails
- Confirm `.sead-core/` is generated from `sead-core/` (avoid drift) and document the generation step.
- Add short “Dev Note” blocks where tasks reference consumer `sead.config.yaml` (clarify dev vs install context).
- Create a working branch for cleanup.

Phase 1 — Name alignment and broken references
- Update agent `dependencies` to point at canonical tasks that exist now (see 07-MIGRATION-MAP).
- Add minimal alias stubs only if necessary (short-term) to prevent breakage.
- Acceptance: no agent references a missing task/template/data; CLI help lists only real files.

Phase 2 — Canonical modules and dedupe
- Apply module boundaries (03-RATIONALIZATION-PLAN.md) and prune duplicated prose by cross-linking lifecycle docs.
- Update tasks to reference shared data/checklists for mode and catalog context (avoid repetition).
- Acceptance: patterns/catalog/story/qa/ux/planning families show clear single points of truth.

Phase 3 — Workflow unification
- Draft `sead-core/workflows/sead-application.yaml` and migrate the 6 workflows to use it.
- Keep old files as wrappers (one release) with deprecation notes.
- Acceptance: a single workflow file can run all 6 use cases via params.

Phase 4 — Templates and data
- Create missing templates or re-point dependencies to existing ones per migration map.
- Add missing data docs that are widely referenced (e.g., `catalog-patterns.md` pointer page to existing pattern docs).
- Acceptance: all referenced templates/data exist and are discoverable.

Phase 5 — Agent command tidy-up
- For each agent, confirm `commands` align with canonical tasks and produce outputs per IO contracts.
- Remove overlapping commands that route to similar tasks; prefer flags/params where practical.
- Acceptance: commands feel distinct; role boundaries are clear.

Phase 6 — Documentation and packaging
- Update README and CLI docs to reflect new canonical names and workflow.
- Regenerate `.sead-core/` bundle and smoke test with `test-projects/`.
- Acceptance: publishable npm package; runbook for testing against sample repos.

Phase 7 — Post-migration cleanup
- Remove alias stubs and deprecated wrappers after one release.
- Acceptance: only canonical names remain.

