<!-- Powered by SEAD-METHOD™ Core -->

# SEAD Story Quality Checklist

**Purpose:** Ensure every story achieves catalog-informed Definition of Ready before commitment.

## Module Imports
```yaml
imports:
  - module: catalog-pattern-validation-module
    parameters:
      artifact_type: story
      catalog_domains: [components, patterns, layouts]
      deviation_tolerance: mode_specific
  - module: quality-gate-module
    parameters:
      quality_context: story
      stakeholder_roles: [product_owner, ux, engineering, qa]
      validation_depth: definition_of_ready
  - module: documentation-standards-module
    parameters:
      artifact_types: [story, acceptance_criteria, definition_of_done]
      handoff_targets: [development_team]
      template_requirements: [sead-acceptance-criteria-tmpl]
```

## Catalog Pattern Validation
*[Imported from catalog-pattern-validation-module]*

## Quality Gate Standards  
*[Imported from quality-gate-module]*

## Documentation Standards
*[Imported from documentation-standards-module]*

## Story-Specific Requirements

### Story Structure & Context
- [ ] Story follows standard format: "As a [user] I want [goal] so that [benefit]"
- [ ] Business value and user impact clearly articulated
- [ ] Story linked to parent epic or strategy with traceability

### Acceptance Criteria Validation
- [ ] Acceptance criteria template (`sead-acceptance-criteria-tmpl.yaml`) properly applied
- [ ] Criteria are numbered, testable, and verifiable
- [ ] Each criterion tied to specific catalog artifacts or validation steps
- [ ] Edge cases and error scenarios documented

### Story Sizing & Estimation
- [ ] Story size estimated using team's standard approach
- [ ] Story fits within single sprint/iteration boundary
- [ ] Complexity assessment includes catalog integration effort
- [ ] Dependencies mapped with other stories in current/future sprints
