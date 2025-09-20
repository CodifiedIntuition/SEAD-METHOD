<!-- Powered by SEAD-METHOD™ Core -->

# Unified Constraint Definitions

**Purpose:** Comprehensive constraint framework consolidating mode-specific and role-specific constraint definitions for SEAD-METHOD governance.

*This document consolidates: constraint-matrix.md, mode-constraint-matrix.md*

## Part 1: Mode Enforcement Framework

### Mode Definitions & Expectations

| Mode | Description | Catalog Expectation | Implementation Scope | Validation Requirements | Escalation Trigger |
|------|-------------|--------------------|--------------------|-------------------------|-------------------|
| **Prototype** | Rapid experiments, learning focus | Catalog usage encouraged; deviations allowed if documented | Lightweight spikes, disposable proof-of-concepts | Lint + basic tests; capture learnings for catalog | Deviations that prove valuable → raise pattern proposals |
| **Development** | Building production-ready features | Prefer catalog components; document and justify deviations | Production-ready code using catalog building blocks | Comprehensive tests, accessibility, performance checks | Any deviation lacking approved migration path |
| **Build-to-Deploy** | Final assembly with zero drift | Catalog-only; no new patterns without prior approval | Final hardening and release work; zero drift | Full regression suite, accessibility evidence, security/perf scans | Any missing catalog asset or conflicting constraint |

### UX-Specific Mode Constraints

| Mode | UX Output Fidelity | UX Validation Requirements | UX Notes |
|------|-------------------|----------------------------|----------|
| **Prototype** | Low to mid fidelity (sketches, lightweight wireframes) | Basic heuristic review, optional quick user checks | Record hypotheses and planned follow-ups; capture new pattern ideas |
| **Development** | Mid to high fidelity wireframes/prototypes aligned with tokens | Comprehensive accessibility checklist, targeted usability sessions | Provide implementation-ready specs and pattern update requests |
| **Build-to-Deploy** | High fidelity specs with full state coverage and annotations | Strict accessibility evidence, regression-tested research, sign-offs | Deviation not allowed; include final validation package for release |

## Part 2: Domain-Specific Constraint Checklist

### Types & Data Models
- **Catalog Requirement**: Must reference canonical definitions in `sead-catalog/shared-types/`
- **Change Management**: Additions require `sead-pattern-extraction.md` follow-up
- **Versioning**: Version each change; no implicit structural shifts
- **Mode Constraints**:
  - Prototype: Document new type explorations
  - Development: Justify deviations with migration plan
  - Build-to-Deploy: Zero new types without catalog approval

### APIs & Contracts
- **Catalog Requirement**: Align with `sead-catalog/api-contracts/`
- **Change Management**: Breaking changes require approval tracked via catalog governance
- **Documentation**: Document request/response validation in `validation-schemas/`
- **Mode Constraints**:
  - Prototype: Document experimental endpoints
  - Development: Provide migration path for deviations
  - Build-to-Deploy: Strict contract compliance required

### Frontend Components
- **Catalog Requirement**: Use `design-system/` primitives; match token usage from `design-system-guidelines.md`
- **Accessibility**: Obligations from `accessibility-standards.md` apply to every UI surface
- **Integration**: Component integration must follow catalog patterns
- **Mode Constraints**:
  - Prototype: Document component explorations
  - Development: Justify component deviations
  - Build-to-Deploy: Zero custom components without approval

### State & Workflow
- **Catalog Requirement**: Follow `state-management/` patterns; avoid bespoke state stores unless catalog endorses
- **Telemetry**: Integrate telemetry or analytics per catalog guidance when available
- **Consistency**: State management must align with constitutional governance
- **Mode Constraints**:
  - Prototype: Document state experimentation
  - Development: Provide state migration strategy
  - Build-to-Deploy: Catalog state patterns only

### Testing & Validation
- **Catalog Requirement**: Map tests to `test-patterns/` templates
- **Coverage**: Ensure coverage aligns with mode (prototype < development < build-to-deploy)
- **Documentation**: Record outcomes in task artifacts
- **Mode Constraints**:
  - Prototype: Basic validation sufficient
  - Development: Comprehensive test coverage required
  - Build-to-Deploy: Full validation suite mandatory

## Part 3: Constraint Enforcement Procedures

### Decision Logging Requirements
- **Deviation Documentation**: Capture deviation rationale in task outputs
- **Constraint Conflicts**: Document conflicts in `sead-constraint-validation.md`
- **Pattern Extraction**: Record new patterns in `sead-pattern-extraction.md`
- **Audit Trail**: Maintain decisions tied to constraint matrix for auditability

### Escalation & Governance
- **Conflict Resolution**: When constraints conflict or catalog gaps block implementation, pause work and escalate
- **Escalation Path**: Product/architecture using catalog governance channel
- **Documentation**: Update task artifacts with decisions and rationale
- **Follow-up**: Ensure corrective actions are tracked and completed

### Constitutional Compliance Integration
- **Governance Alignment**: Constraint enforcement aligns with SEAD constitutional framework
- **Mode Awareness**: Constitutional compliance varies by mode
- **Context Preservation**: Maintain constraint history and rationale
- **Quality Gates**: Constraint validation enforces governance decisions

## Part 4: Usage Instructions

### Initialization Process
1. Load `core-config.yaml` to determine current mode
2. Reference appropriate mode row for expectations and requirements
3. Apply domain-specific constraints based on work context
4. Document all constraint decisions for audit trail

### Daily Development Workflow
1. Reference constraint matrix before beginning implementation
2. Apply mode-specific validation requirements
3. Document deviations with rationale and mitigation plans
4. Update task artifacts with constraint compliance status

### Quality Gate Integration
1. Validate constraint compliance at each quality gate
2. Ensure mode-appropriate rigor is applied
3. Document any waivers or exceptions with approval
4. Maintain traceability to constitutional requirements

### Continuous Monitoring
1. Track constraint violation trends and patterns
2. Update constraint definitions based on lessons learned
3. Ensure constraint framework evolution aligns with constitutional governance
4. Maintain constraint effectiveness through regular review and updates