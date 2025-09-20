<!-- Powered by SEAD-METHOD™ Core -->

# SEAD Catalog Compliance Checklist

**Purpose:** Ensure any UX deliverable aligns with SEAD catalog governance before it is recorded or handed off. Run it prior to final approval, after executing domain-specific tasks.

## Module Imports
```yaml
imports:
  - module: catalog-pattern-validation-module
    parameters:
      artifact_type: ux_deliverable
      catalog_domains: [components, layouts, themes, patterns]
      deviation_tolerance: mode_specific
  - module: constitutional-compliance-module
    parameters:
      role: catalog-steward
      context: catalog_compliance
      validation_level: enforcement
  - module: documentation-standards-module
    parameters:
      artifact_types: [deliverable_docs, compliance_records]
      handoff_targets: [catalog_maintainer, engineering_team]
      template_requirements: [catalog-compliance-record]
```

## Catalog Pattern Validation Framework
*[Imported from catalog-pattern-validation-module]*

## Constitutional Compliance Standards
*[Imported from constitutional-compliance-module]*

## Documentation Standards
*[Imported from documentation-standards-module]*

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
