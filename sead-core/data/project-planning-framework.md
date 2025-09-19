<!-- Powered by SEAD-METHOD™ Core -->

# SEAD Project Planning Framework

This reference guides SEAD-aligned project planning that leverages catalog patterns and respects mode constraints.

## Principles
- Catalog-first: Prefer existing patterns over bespoke solutions.
- Mode-aware: Tighten validation and reduce deviations as modes progress.
- Progressive validation: Plan milestones aligned to gates (QA, constraints, catalog compliance).

## Planning Flow
1. Context ingest: read `sead-core/core-config.yaml` and project `sead.config.yaml` (if present).
2. Mode assessment: identify current mode and its constraints.
3. Catalog scan: determine available patterns and gaps.
4. Scope definition: decompose into epics/stories with catalog references.
5. Risk profiling: include mode and catalog deviation risks.
6. Scheduling: align increments to gate readiness and catalog maturity.
7. Communication: stakeholder updates with catalog/constraint status.

## Artifacts
- Project Plan (use `sead-project-plan-tmpl.yaml`)
- Roadmap (use `sead-roadmap-tmpl.yaml`)
- Risk Assessment (use `sead-risk-assessment-tmpl.yaml`)
- Milestone Plan (use `sead-milestone-plan-tmpl.yaml`)
- Stakeholder Update (use `sead-stakeholder-update-tmpl.yaml`)

## References
- Workspace discovery: `sead-core/workspace-integration-guide.md`
- QA Gate: `sead-core/tasks/sead-qa-gate.md`
- Constraints: `sead-core/core-config.yaml`

