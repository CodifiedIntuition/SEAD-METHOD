<!-- Powered by SEAD-METHOD™ Core -->

# SEAD Product Owner Master Checklist

Purpose: guide the Product Owner through backlog preparation and artifact validation while honoring constitutional rules and catalog constraints.

[[LLM: PREPARATION]]
1. Load `/sead-core/core-config.yaml` to determine current mode and enforcement level.
2. Read `/sead-core/constitutional-rules/sead-product-owner-constraints.yaml`.
3. Review `sead-core/data/catalog-pattern-priorities.md`, `product-strategy-framework.md`, `catalog-efficiency-metrics.md`.
4. Confirm access to relevant catalog directories (project-supplied runtime assets).

## 1. Backlog Readiness
- [ ] All epics/stories link to catalog patterns or document gaps with follow-up tasks.
- [ ] Dependencies and sequencing captured using catalog dependency analysis outputs.
- [ ] Mode-specific readiness gates satisfied (prototype vs. development vs. build-to-deploy).
- [ ] Stakeholder alignment documented for upcoming work.

## 2. Story Quality & Acceptance Criteria
- [ ] Run `story-quality-checklist.md` for every story marked ready.
- [ ] Acceptance criteria reference catalog components and validation steps.
- [ ] Constitutional guardrails reflected in criteria (security, compliance, accessibility).
- [ ] Definition of Ready / Definition of Done updated based on mode and catalog updates.

## 3. Constitutional & Catalog Compliance
- [ ] Execute `constitutional-compliance-checklist.md` to validate backlog decisions.
- [ ] Confirm catalog compliance check outcomes recorded for affected stories.
- [ ] Document any escalations for missing catalog assets or conflicting constraints.
- [ ] Plan pattern extraction tasks when backlog introduces new reusable elements.

## 4. Change & Communication
- [ ] For scope changes, run `sead-change-checklist.md` and capture approvals.
- [ ] Communicate backlog updates to engineering, UX, and stakeholders with catalog references.
- [ ] Update shared documentation (roadmaps, strategy docs) with latest catalog impacts.
- [ ] Archive decisions and rationale for traceability.

## 5. Exit Criteria
- [ ] Backlog prioritized using `backlog-prioritization-workflow.md` outputs.
- [ ] Sprint planning/prep tasks created (if within sprint window).
- [ ] Risks, blockers, and mitigation plans captured.
- [ ] Confirm readiness to proceed or highlight outstanding actions with owners.
