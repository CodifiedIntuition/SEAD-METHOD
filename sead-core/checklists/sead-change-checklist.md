<!-- Powered by SEAD-METHOD™ Core -->

# SEAD Product Owner Change Impact Checklist

Use this checklist before accepting scope changes, backlog reprioritizations, or catalog updates.

[[LLM: PREP WORK]]
1. Load `/sead-core/core-config.yaml` for mode and enforcement rules.
2. Review `sead-core/data/product-strategy-framework.md` to confirm alignment.
3. Check related catalog domains for affected patterns.

## 1. Change Definition
- [ ] Document change request source, goal, and urgency.
- [ ] Identify impacted epics/stories and link to catalog references.
- [ ] Note affected stakeholders and downstream agents.

## 2. Catalog & Constraint Assessment
- [ ] Verify catalog patterns exist; if not, trigger `sead-pattern-extraction.md`.
- [ ] Assess mode constraints via `mode-constraint-matrix.md` (ensure feasibility).
- [ ] Evaluate compliance implications (security, accessibility, governance).

## 3. Impact Analysis
- [ ] Update backlog priority using `catalog-efficiency-metrics.md` benchmarks.
- [ ] Recalculate capacity or sprint commitments if necessary.
- [ ] Determine regression or validation work required.

## 4. Decision & Communication
- [ ] Obtain approvals from required stakeholders (Product, Engineering, Design).
- [ ] Communicate decision with numbered summary and catalog references.
- [ ] Update documentation (roadmap, backlog, release notes).

## 5. Follow-up Actions
- [ ] Create tasks for remediation, validation, or documentation updates.
- [ ] Schedule checkpoints to review outcomes.
- [ ] Record final status and rationale for audit trail.
