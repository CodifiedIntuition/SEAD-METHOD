<!-- Powered by SEAD-METHOD™ Core -->

# SEAD Catalog Compliance Checklist

This checklist ensures any UX deliverable aligns with SEAD catalog governance before it is recorded or handed off. Run it prior to final approval, after executing domain-specific tasks.

[[LLM: PRE-CHECK ACTIONS]]
- Load `/sead-core/core-config.yaml` to identify active mode and catalog enforcement level.
- Review `/sead-core/data/design-system-guidelines.md`, `/sead-core/data/ui-pattern-library.md`, and `/sead-core/data/mode-constraint-matrix.md`.
- Collect outputs from relevant workflows (wireframe, prototype, design-system analysis, accessibility audit).

## 1. Catalog Reference Integrity
- [ ] Each deliverable cites catalog components/layouts/themes using canonical names.
- [ ] New pattern proposals include rationale and link to `design-pattern-evaluation` outcomes.
- [ ] All variations list applicable mode(s) and validation status.
- [ ] Catalog references are formatted as numbered lists for easy selection.

## 2. Compliance With Mode Constraints
- [ ] Prototype mode: experimentation documented, deviations flagged for follow-up.
- [ ] Development mode: catalog-first approaches used; deviations justified and scheduled for migration.
- [ ] Build-to-deploy mode: no deviations; confirm zero custom patterns introduced.
- [ ] Validation artifacts attached per mode requirements (e.g., test plans, accessibility evidence).

## 3. Documentation Quality
- [ ] Associated templates (wireframe/prototype/spec/handoff) are complete and stored in agreed repository location.
- [ ] Accessibility notes from checklist are embedded in final artifact.
- [ ] Implementation guidance includes expected TypeScript props and state mapping to catalog patterns.
- [ ] Change log or version metadata updated for catalog maintainers.

## 4. Governance & Sign-off
- [ ] Stakeholders identified (UX, Frontend, Product, Accessibility) with approval status.
- [ ] Outstanding risks and dependencies logged in project tracker.
- [ ] Catalog maintainer notified when new patterns or updates require publishing.
- [ ] Confirm readiness to exit checklist; if not ready, document required remediation tasks.
