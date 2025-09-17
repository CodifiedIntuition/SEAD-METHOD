# Quality Gate Module

**Purpose:** Standard quality validation and sign-off procedures used across all SEAD checklists.

## Quality Standards Preparation
```
1. Load applicable quality framework documents for current context
2. Review validation requirements for current SEAD mode
3. Identify required stakeholders and approval flows
4. Confirm measurement criteria and success indicators
```

## Clarity & Context Validation
- [ ] Objective articulated in plain language with business value
- [ ] Dependencies, assumptions, and constraints listed
- [ ] Linked context items documented (epic, strategy, requirements)
- [ ] Success criteria and metrics defined
- [ ] Risk assessment completed with mitigation strategies

## Implementation Readiness Checks
- [ ] Required assets available (designs, specs, data definitions)
- [ ] Technical feasibility confirmed
- [ ] Resource availability and capacity validated
- [ ] Integration points and dependencies mapped
- [ ] Validation activities scheduled per mode requirements

## Stakeholder Accountability
- [ ] Required reviewers identified with roles and responsibilities
- [ ] Approval status tracked for all stakeholders
- [ ] Communication plan includes updates and risk escalation
- [ ] Decision documentation prepared for audit trail
- [ ] Outstanding questions captured with owners and deadlines

## Validation & Testing Requirements
- [ ] Validation methods defined (QA, UX, accessibility, performance)
- [ ] Test criteria and acceptance standards documented
- [ ] Manual vs. automated testing steps identified
- [ ] Regression risk assessment completed
- [ ] Validation scheduling aligned with delivery timeline

## Quality Exit Criteria
- [ ] All quality checkpoints passed or exceptions documented
- [ ] Stakeholder sign-offs obtained per governance requirements
- [ ] Outstanding actions assigned with clear owners and deadlines
- [ ] Final quality summary prepared for handoff
- [ ] Readiness confirmed to proceed to next phase

## Module Parameters
When importing this module, specify:
- `quality_context`: The specific quality domain (story, design, code, deployment)
- `stakeholder_roles`: Required approval roles for this context
- `validation_depth`: Mode-specific rigor and validation requirements