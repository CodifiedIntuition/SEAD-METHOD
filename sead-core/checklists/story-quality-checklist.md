<!-- Powered by SEAD-METHOD™ Core -->

# SEAD Story Quality Checklist

Ensure every story achieves catalog-informed Definition of Ready before commitment.

[[LLM: PRE-CHECK]]
1. Load story context (title, description, linked docs).
2. Review `sead-core/data/catalog-pattern-priorities.md` and `catalog-efficiency-metrics.md` for priority alignment.
3. Confirm acceptance criteria template selected (`sead-acceptance-criteria-tmpl.yaml`).

## 1. Clarity & Context
- [ ] Story goal articulated in plain language with business value.
- [ ] Linked epic or strategy item documented.
- [ ] Dependencies, assumptions, and constraints listed.

## 2. Catalog Alignment
- [ ] Catalog components/patterns referenced by canonical name.
- [ ] Mode-specific justification provided for any deviation.
- [ ] Pattern gaps identified and assigned to `sead-pattern-extraction.md` if needed.

## 3. Acceptance Criteria & Validation
- [ ] Criteria numbered, testable, and tied to catalog artifacts.
- [ ] Validation activities (QA, UX, accessibility) scheduled per mode.
- [ ] Metrics or success indicators defined.

## 4. Implementation Readiness
- [ ] Required assets available (designs, API specs, data definitions).
- [ ] Risks and open questions captured with owners.
- [ ] Story size estimated and within team's working agreement.

## 5. Sign-off
- [ ] Product owner confirmed completeness.
- [ ] Stakeholder reviews recorded (UX/Engineering/QA as applicable).
- [ ] Story status updated to "Ready" in backlog tool.
