<!-- Powered by SEAD-METHOD™ Core -->

# SEAD QA Gate

Create or update a catalog-aware quality gate decision file for a story based on review findings with SEAD constraint enforcement.

## Purpose

Generate a standalone quality gate file that provides a clear pass/fail decision with actionable feedback, catalog compliance validation, and mode-appropriate constraint enforcement. This gate serves as a constitutional checkpoint ensuring both quality standards and SEAD methodology compliance.

## SEAD Mode Awareness

This task operates with mode-sensitive quality gate criteria:
- **PROTOTYPE Mode**: Basic quality checks, experimental pattern documentation
- **DEVELOPMENT Mode**: Catalog compliance validation, extension tracking
- **BUILD-TO-DEPLOY Mode**: Strict catalog adherence, zero deviation tolerance

## Prerequisites

- Story has been reviewed (manually or via sead-review-story task)
- Review findings are available with catalog compliance assessment
- Understanding of story requirements, implementation, and SEAD mode constraints
- **SEAD Enhancement**: Catalog pattern usage has been validated
- **SEAD Enhancement**: Mode constraint adherence has been assessed

## SEQUENTIAL Task Execution (Do not proceed until current Task is complete)

### 1. Load SEAD Configuration and Catalog Context

**ALWAYS** check the `sead.config.yaml` and `sead-core/core-config.yaml` for:
- `qa.qaLocation/gates` - Gate file location
- `catalog.path` - Catalog directory path
- `mode.current` - Current SEAD development mode
- `constraints.*` - Mode-specific constraint configuration

**MANDATORY CATALOG READS** (Constitutional Requirement):
- Read `{catalogPath}/validation-schemas/README.md` for validation patterns
- Read `{catalogPath}/test-patterns/README.md` for testing compliance
- Read `{catalogPath}/error-handling/README.md` for error handling patterns
- Document catalog versions referenced in quality assessment

### 2. Spec-Kit Business Quality Validation (NEW - Insert before existing validation)

#### 2.1 Testability Validation (Spec-Kit Integration)
- Scan all functional requirements for measurable criteria:
  → Each requirement must have testable, unambiguous acceptance criteria
  → Flag vague language: "user-friendly", "fast", "reliable", "secure" without metrics
  → Validate Given-When-Then scenarios are measurable
  → Check edge cases have defined expected behaviors
  → Document testability score and issues found

Example validation:
- PASS: "System must authenticate user within 2 seconds of valid credential submission"
- FAIL: "System should have good performance" (not measurable)

#### 2.2 Ambiguity Detection Scanning (Spec-Kit Integration)
- Scan implementation and story content for [NEEDS CLARIFICATION] markers:
  → Any remaining markers indicate incomplete requirements
  → Check for assumption-based language: "should", "might", "probably"
  → Flag undefined terms and concepts
  → Validate all technical decisions have clear rationale
  → Document ambiguity detection results

#### 2.3 Business Stakeholder Readiness (Spec-Kit Integration)  
- Validate content is appropriate for non-technical stakeholders:
  → Check for inappropriate implementation details (database schemas, APIs)
  → Verify user value proposition is clearly articulated
  → Ensure business outcomes are measurable
  → Validate separation of WHAT (user needs) vs HOW (implementation)
  → Document stakeholder readiness score

### 3. SEAD Constitutional Framework Validation (Existing)

## Enhanced SEAD Quality Gate Schema

### Minimal Required Schema with SEAD Extensions

```yaml
schema: 2  # SEAD-enhanced schema version
story: '{epic}.{story}'
gate: PASS|CONCERNS|FAIL|WAIVED|CATALOG_VIOLATION
status_reason: '1-2 sentence explanation of gate decision'
reviewer: 'SEAD QA Agent'
updated: '{ISO-8601 timestamp}'
sead_mode: 'prototype|development|build-to-deploy'
catalog_compliance:
  status: 'compliant|partial|non-compliant|extended'
  patterns_used: []
  patterns_violated: []
  extensions_created: []
constraint_adherence:
  status: 'compliant|violated|waived'
  violations: []
  mode_appropriate: true|false
top_issues: [] # Empty array if no issues
waiver: { active: false } # Only set active: true if WAIVED
```

### SEAD Schema with Quality and Compliance Issues

```yaml
schema: 2
story: '1.3'
gate: CONCERNS
status_reason: 'Code quality acceptable but catalog pattern violations present.'
reviewer: 'SEAD QA Agent'
updated: '2025-01-12T10:15:00Z'
sead_mode: 'development'
catalog_compliance:
  status: 'partial'
  patterns_used:
    - 'api-contracts/auth-endpoints-v1.2.0'
    - 'error-handling/api-errors-v2.1.0'
  patterns_violated:
    - 'validation-schemas/user-validation-v1.0.3'
  extensions_created:
    - 'custom-auth-middleware' # Tracked for future catalog promotion
constraint_adherence:
  status: 'compliant'
  violations: []
  mode_appropriate: true
top_issues:
  - id: 'CATALOG-001'
    severity: medium
    category: 'catalog_compliance'
    finding: 'Custom validation logic instead of catalog pattern'
    suggested_action: 'Refactor to use catalog validation-schemas/user-validation-v1.0.3'
    catalog_reference: 'validation-schemas/user-validation-v1.0.3'
  - id: 'SEC-001'
    severity: high
    category: 'security'
    finding: 'No rate limiting on login endpoint'
    suggested_action: 'Add rate limiting middleware using catalog pattern'
    catalog_reference: 'integration-patterns/rate-limiting-v1.1.0'
  - id: 'TEST-001'
    severity: medium
    category: 'testing'
    finding: 'No integration tests for auth flow'
    suggested_action: 'Add integration test coverage using catalog test patterns'
    catalog_reference: 'test-patterns/integration-auth-tests-v1.0.0'
waiver: { active: false }
```

### SEAD Schema for BUILD-TO-DEPLOY Catalog Violation

```yaml
schema: 2
story: '1.3'
gate: CATALOG_VIOLATION
status_reason: 'Build-to-deploy mode violations block deployment readiness.'
reviewer: 'SEAD QA Agent'
updated: '2025-01-12T10:15:00Z'
sead_mode: 'build-to-deploy'
catalog_compliance:
  status: 'non-compliant'
  patterns_used:
    - 'api-contracts/auth-endpoints-v1.2.0'
  patterns_violated:
    - 'error-handling/api-errors-v2.1.0'
    - 'validation-schemas/user-validation-v1.0.3'
  extensions_created: 
    - 'custom-error-handler' # NOT allowed in build-to-deploy mode
constraint_adherence:
  status: 'violated'
  violations:
    - 'Custom code created instead of catalog patterns'
    - 'Extensions not allowed in build-to-deploy mode'
  mode_appropriate: false
top_issues:
  - id: 'MODE-001'
    severity: high
    category: 'constraint_violation'
    finding: 'Custom implementations in build-to-deploy mode'
    suggested_action: 'BLOCK: Refactor to use only catalog patterns or change to development mode'
    catalog_reference: 'ALL catalog patterns'
waiver: { active: false } # Waivers not allowed for mode constraint violations
```

## SEAD Gate Decision Criteria (Enhanced with Dual-Phase Scoring)

### Combined Quality Gate Assessment (Enhanced)
Each story must pass both Spec-Kit business quality validation and SEAD constitutional compliance:

**Spec-Kit Business Score:**
- Testability: PASS/FAIL
- Ambiguity Detection: PASS/FAIL  
- Stakeholder Readiness: PASS/FAIL

**SEAD Constitutional Score:**
- Constitutional Compliance: PASS/FAIL
- Catalog Integration: PASS/FAIL
- Mode Appropriateness: PASS/FAIL

**Overall Gate Result:** PASS/FAIL (must pass both Spec-Kit and SEAD phases)

### PASS
- All acceptance criteria met
- No high-severity issues
- Test coverage meets project standards
- **Spec-Kit Business Quality**: All business quality validations pass
- **SEAD Constitutional**: Catalog compliance achieved, mode constraints respected, context preservation data complete

### CONCERNS  
- Non-blocking issues present
- Should be tracked and scheduled
- Can proceed with awareness
- **Spec-Kit Business Quality**: Minor business language or testability issues
- **SEAD Constitutional**: Minor catalog pattern violations (development mode), extensions created and properly tracked

### FAIL
- Acceptance criteria not met
- High-severity issues present
- Recommend return to InProgress
- **Spec-Kit Business Quality**: Major testability failures, ambiguity markers remain, inappropriate for stakeholders
- **SEAD Constitutional**: Major catalog compliance failures, mode constraint violations (prototype/development)

### CATALOG_VIOLATION (SEAD-specific)
- **BUILD-TO-DEPLOY Mode**: Any catalog pattern deviation
- **DEVELOPMENT Mode**: Untracked extensions or major violations  
- **PROTOTYPE Mode**: Not applicable (violations allowed)
- **BLOCKING**: Cannot proceed without resolution

### WAIVED
- Issues explicitly accepted
- Requires approval and reason
- Proceed despite known issues
- **SEAD Enhancement**: Cannot waive mode constraint violations
- **SEAD Enhancement**: Catalog violations require constitutional review

## Enhanced SEAD Severity Scale and Categories

**FIXED VALUES - NO VARIATIONS:**

### Severity Levels
- `low`: Minor issues, cosmetic problems, minor catalog deviations
- `medium`: Should fix soon, not blocking, catalog extensions in development mode
- `high`: Critical issues, should block release, catalog violations in build-to-deploy

### SEAD Issue Categories
- `catalog_compliance`: Catalog pattern usage violations
- `constraint_violation`: SEAD mode constraint violations
- `context_preservation`: Agent handoff context issues
- `security`: Security issues with catalog pattern references
- `performance`: Performance issues with catalog pattern references
- `reliability`: Reliability issues
- `testing`: Testing gaps with catalog test pattern references
- `maintainability`: Maintainability concerns
- `architecture`: Architecture issues with catalog alignment
- `documentation`: Documentation gaps
- `requirements`: Requirements issues

## Enhanced SEAD Issue ID Prefixes

- `CATALOG-`: Catalog compliance issues
- `MODE-`: SEAD mode constraint violations  
- `CONTEXT-`: Context preservation issues
- `SEC-`: Security issues (with catalog references)
- `PERF-`: Performance issues (with catalog references)
- `REL-`: Reliability issues
- `TEST-`: Testing gaps (with catalog pattern references)
- `MNT-`: Maintainability concerns
- `ARCH-`: Architecture issues (with catalog alignment)
- `DOC-`: Documentation gaps
- `REQ-`: Requirements issues

## SEAD Output Requirements

1. **ALWAYS** create gate file at: `qa.qaLocation/gates` from `sead.config.yaml`
2. **ALWAYS** append this exact format to story's QA Results section:

   ```text
   SEAD Gate: {STATUS} [{MODE}] → qa.qaLocation/gates/{epic}.{story}-{slug}.yml
   Catalog Compliance: {COMPLIANCE_STATUS}
   ```

3. Keep status_reason to 1-2 sentences maximum
4. Use severity values exactly: `low`, `medium`, or `high`
5. **SEAD Enhancement**: Include catalog pattern references for all issues where applicable
6. **SEAD Enhancement**: Document mode constraint adherence status
7. **SEAD Enhancement**: Track catalog extensions created (development mode only)

## Example SEAD Story Update

After creating SEAD gate file, append to story's QA Results section:

```markdown
## QA Results

### Review Date: 2025-01-12

### Reviewed By: SEAD QA Agent (Catalog-Aware)

[... existing review content ...]

### SEAD Gate Status

SEAD Gate: CONCERNS [DEVELOPMENT] → qa.qaLocation/gates/{epic}.{story}-{slug}.yml
Catalog Compliance: PARTIAL - Extensions tracked for promotion
Mode Constraints: COMPLIANT - Development mode extensions allowed
Context Preservation: COMPLETE - Agent handoff data verified

### Catalog Usage Summary
- Patterns Used: api-contracts/auth-endpoints-v1.2.0, error-handling/api-errors-v2.1.0
- Extensions Created: custom-auth-middleware (tracked for catalog promotion)
- Violations: validation-schemas/user-validation-v1.0.3 (should refactor)
```

## SEAD Constitutional Requirements

This task must adhere to SEAD constitutional principles:

1. **Catalog-First**: Validate catalog pattern usage before accepting custom solutions
2. **Specification-Driven**: All quality decisions must reference architecture or catalog sources
3. **Progressive Constraints**: Apply mode-appropriate constraint enforcement
4. **Context Preservation**: Verify agent handoff context completeness
5. **Collaborative Governance**: Enable team review of catalog compliance decisions
6. **Quality Gates**: Provide mode-sensitive validation checkpoints
7. **Continuous Evolution**: Track pattern evolution opportunities

## Anti-Drift Protection

This QA gate includes specific protections against common AI agent drift patterns:

- **Catalog Deviation Detection**: Identifies when implementations ignore existing patterns
- **Context Loss Prevention**: Validates context preservation data completeness
- **Spec Inconsistency Blocking**: Prevents architecture and catalog conflicts
- **Mode Violation Enforcement**: Blocks inappropriate actions per development mode
- **Quality Standard Consistency**: Maintains consistent quality expectations across modes

## SEAD Mode-Specific Quality Criteria

### PROTOTYPE Mode
- Focus on pattern documentation and learning capture
- Allow experimental approaches with proper documentation
- Track pattern effectiveness for future catalog promotion
- Basic quality standards with flexibility for exploration

### DEVELOPMENT Mode  
- Require catalog pattern usage when available
- Allow tracked extensions with promotion planning
- Comprehensive quality validation with catalog compliance
- Context preservation validation for production readiness

### BUILD-TO-DEPLOY Mode
- STRICT catalog compliance required
- Zero tolerance for undocumented patterns
- Full constraint enforcement with blocking violations
- Complete context preservation and deployment readiness validation