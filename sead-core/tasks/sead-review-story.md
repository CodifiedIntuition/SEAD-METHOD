<!-- Powered by SEAD-METHOD™ Core -->

# SEAD Review Story

Perform a comprehensive catalog-aware test architecture review with constitutional constraint validation and quality gate decision. This adaptive, risk-aware review creates both a story update and a detailed SEAD-compliant gate file.

## SEAD Mode Awareness

This review task operates with mode-sensitive validation:
- **PROTOTYPE Mode**: Basic quality checks, pattern documentation validation
- **DEVELOPMENT Mode**: Catalog compliance assessment, extension validation
- **BUILD-TO-DEPLOY Mode**: Strict catalog adherence enforcement, zero deviation tolerance

## Inputs

```yaml
required:
  - story_id: '{epic}.{story}' # e.g., "1.3"
  - story_path: '{devStoryLocation}/{epic}.{story}.*.md' # Path from sead.config.yaml
  - story_title: '{title}' # If missing, derive from story file H1
  - story_slug: '{slug}' # If missing, derive from title (lowercase, hyphenated)
  - sead_mode: '{prototype|development|build-to-deploy}' # Current development mode
```

## Prerequisites

- Story status must be "Review"
- Developer has completed all tasks and updated the File List
- All automated tests are passing
- **SEAD Enhancement**: Catalog compliance has been assessed by developer
- **SEAD Enhancement**: Mode constraint adherence has been documented

## SEAD Configuration and Catalog Context

**ALWAYS** check the `sead.config.yaml` and `sead-core/core-config.yaml` for:
- `qa.qaLocation/gates` - Gate file location
- `catalog.path` - Catalog directory path  
- `mode.current` - Current SEAD development mode
- `constraints.*` - Mode-specific constraint configuration

**MANDATORY CATALOG READS** (Constitutional Requirement):
- Read `{catalogPath}/test-patterns/README.md` for test pattern compliance
- Read `{catalogPath}/validation-schemas/README.md` for validation patterns
- Read `{catalogPath}/error-handling/README.md` for error handling patterns
- Read `{catalogPath}/api-contracts/README.md` for API contract compliance (if applicable)
- Read `{catalogPath}/design-system/README.md` for UI pattern compliance (if applicable)
- Document catalog versions being used in review

## SEAD Review Process - Catalog-Aware Test Architecture

### 1. SEAD Risk Assessment (Determines Review Depth)

**Auto-escalate to deep review when:**

- Auth/payment/security files touched
- No tests added to story
- Diff > 500 lines
- Previous gate was FAIL/CONCERNS/CATALOG_VIOLATION
- Story has > 5 acceptance criteria
- **SEAD Enhancement**: Catalog pattern violations detected
- **SEAD Enhancement**: Mode constraint violations present
- **SEAD Enhancement**: Custom patterns created in build-to-deploy mode

### 2. SEAD-Enhanced Comprehensive Analysis

**A. Requirements Traceability with Catalog Validation**

- Map each acceptance criteria to its validating tests (document mapping with Given-When-Then, not test code)
- Identify coverage gaps
- Verify all requirements have corresponding test cases
- **SEAD Enhancement**: Validate test cases use catalog test patterns where available
- **SEAD Enhancement**: Document any test pattern deviations and rationale

**B. Code Quality Review with Catalog Pattern Assessment**

- Architecture and design patterns alignment with catalog
- Refactoring opportunities using catalog patterns (and perform them)
- Code duplication or inefficiencies vs. catalog components
- Performance optimizations using catalog performance patterns
- Security vulnerabilities with catalog security pattern validation
- Best practices adherence including catalog pattern usage
- **SEAD Enhancement**: Catalog pattern compliance assessment
- **SEAD Enhancement**: Custom code justification in development mode
- **SEAD Enhancement**: Pattern evolution opportunities identification

**C. Test Architecture Assessment with Catalog Integration**

- Test coverage adequacy at appropriate levels using catalog test patterns
- Test level appropriateness (what should be unit vs integration vs e2e) per catalog guidance
- Test design quality and maintainability using catalog test patterns
- Test data management strategy alignment with catalog data patterns
- Mock/stub usage appropriateness per catalog integration patterns
- Edge case and error scenario coverage using catalog error patterns
- Test execution time and reliability
- **SEAD Enhancement**: Catalog test pattern usage validation
- **SEAD Enhancement**: Test pattern extension justification and tracking

**D. Non-Functional Requirements (NFRs) with Catalog Standards**

- Security: Authentication, authorization, data protection using catalog auth patterns
- Performance: Response times, resource usage per catalog performance patterns
- Reliability: Error handling using catalog error patterns, recovery mechanisms
- Maintainability: Code clarity, documentation, catalog pattern adherence
- **SEAD Enhancement**: NFR alignment with catalog quality standards
- **SEAD Enhancement**: Mode-appropriate NFR constraint enforcement

**E. SEAD Testability Evaluation**

- Controllability: Can we control the inputs using catalog patterns?
- Observability: Can we observe the outputs using catalog monitoring patterns?
- Debuggability: Can we debug failures easily with catalog debugging patterns?
- **SEAD Enhancement**: Catalog pattern testability assessment
- **SEAD Enhancement**: Context preservation for future agent handoffs

**F. Technical Debt Identification with Catalog Perspective**

- Accumulated shortcuts that ignore catalog patterns
- Missing tests that could use catalog test patterns
- Outdated dependencies not aligned with catalog standards
- Architecture violations including catalog pattern violations
- **SEAD Enhancement**: Catalog pattern debt identification
- **SEAD Enhancement**: Mode-appropriate debt tolerance assessment

### 3. SEAD-Enhanced Active Refactoring

- Refactor code where safe and appropriate using catalog patterns
- Run tests to ensure changes don't break functionality
- Document all changes in QA Results section with clear WHY and HOW
- Do NOT alter story content beyond QA Results section
- Do NOT change story Status or File List; recommend next status only
- **SEAD Enhancement**: Prioritize refactoring to catalog patterns
- **SEAD Enhancement**: Document new patterns created for catalog consideration
- **SEAD Enhancement**: Ensure refactoring respects mode constraints

### 4. SEAD Standards Compliance Check

- Verify adherence to `docs/coding-standards.md`
- Check compliance with `docs/unified-project-structure.md`
- Validate testing approach against `docs/testing-strategy.md`
- Ensure all guidelines mentioned in the story are followed
- **SEAD Enhancement**: Validate catalog pattern usage compliance
- **SEAD Enhancement**: Check mode constraint adherence
- **SEAD Enhancement**: Verify constitutional requirement fulfillment
- **SEAD Enhancement**: Validate context preservation completeness

### 5. SEAD Acceptance Criteria Validation

- Verify each AC is fully implemented
- Check for any missing functionality
- Validate edge cases are handled
- **SEAD Enhancement**: Confirm catalog compliance criteria met
- **SEAD Enhancement**: Validate mode constraint criteria satisfied
- **SEAD Enhancement**: Check pattern evolution criteria (development mode)

### 6. SEAD Documentation and Comments Enhancement

- Verify code is self-documenting where possible
- Add comments for complex logic if missing
- Ensure any API changes are documented
- **SEAD Enhancement**: Document catalog pattern usage
- **SEAD Enhancement**: Include mode constraint rationale
- **SEAD Enhancement**: Add context preservation documentation

## Output 1: Update Story File - SEAD QA Results Section ONLY

**CRITICAL**: You are ONLY authorized to update the "QA Results" section of the story file. DO NOT modify any other sections.

**SEAD QA Results Anchor Rule:**

- If `## QA Results` doesn't exist, append it at end of file
- If it exists, append a new dated entry below existing entries  
- Never edit other sections

After review and any refactoring, append your SEAD results to the story file in the QA Results section:

```markdown
## QA Results

### Review Date: [Date]

### Reviewed By: SEAD QA Agent (Catalog-Aware Test Architect)

### SEAD Mode Context
- **Mode**: {prototype|development|build-to-deploy}
- **Catalog Version**: {catalog-version}
- **Constraint Level**: {constraint-enforcement-level}

### Code Quality Assessment

[Overall assessment of implementation quality with catalog pattern compliance]

### Catalog Pattern Compliance

**Patterns Used Successfully:**
- `{catalogPath}/pattern-domain/pattern-name-vX.X.X` - [usage description]

**Pattern Deviations:**
- `{catalogPath}/pattern-domain/pattern-name-vX.X.X` - [deviation reason and justification]

**Custom Patterns Created:**
- `custom-pattern-name` - [description and catalog promotion potential]

### Refactoring Performed

[List any refactoring performed with catalog pattern integration]

- **File**: [filename]
  - **Change**: [what was changed]
  - **Why**: [reason for change with catalog pattern reference]
  - **How**: [how it improves the code and aligns with catalog]
  - **Catalog Pattern**: [relevant catalog pattern used or created]

### SEAD Compliance Check

- **Coding Standards**: [✓/✗] [notes if any]
- **Project Structure**: [✓/✗] [notes if any]  
- **Testing Strategy**: [✓/✗] [notes with catalog test pattern references]
- **All ACs Met**: [✓/✗] [notes if any]
- **Catalog Compliance**: [✓/✗] [pattern compliance status]
- **Mode Constraints**: [✓/✗] [constraint adherence status]
- **Context Preservation**: [✓/✗] [agent handoff context completeness]

### SEAD Improvements Checklist

[Check off items handled, leave unchecked for dev with catalog references]

- [x] Refactored user service using catalog error patterns (services/user.service.ts)
- [x] Added missing edge case tests using catalog test patterns (services/user.service.test.ts)
- [ ] Consider refactoring to catalog validation-schemas/user-validation-v1.0.3
- [ ] Add integration test using catalog integration-patterns/auth-test-v1.1.0
- [ ] Update API documentation to match catalog api-contracts/user-api-v2.0.0

### Security Review with Catalog Patterns

[Security concerns with catalog auth pattern compliance assessment]

### Performance Considerations with Catalog Standards

[Performance issues with catalog performance pattern alignment]

### SEAD Constitutional Compliance

**Required Catalog Reads Completed:**
- [✓] test-patterns/README.md reviewed
- [✓] validation-schemas/README.md reviewed  
- [✓] error-handling/README.md reviewed

**Constitutional Principles Validated:**
- [✓] Catalog-First: Existing patterns checked before custom solutions
- [✓] Progressive Constraints: Mode-appropriate validation applied
- [✓] Context Preservation: Agent handoff context complete
- [✓] Quality Gates: Mode-sensitive checkpoints applied

### Files Modified During Review

[Files modified with catalog pattern integration notes]

### SEAD Gate Status

SEAD Gate: {STATUS} [{MODE}] → qa.qaLocation/gates/{epic}.{story}-{slug}.yml
Catalog Compliance: {COMPLIANCE_STATUS}
Risk profile: qa.qaLocation/assessments/{epic}.{story}-risk-{YYYYMMDD}.md
NFR assessment: qa.qaLocation/assessments/{epic}.{story}-nfr-{YYYYMMDD}.md
SEAD compliance: qa.qaLocation/assessments/{epic}.{story}-sead-{YYYYMMDD}.md

### Recommended Status

[✓ Ready for Done with SEAD Compliance] / [✗ Changes Required - See unchecked items above]
(Story owner decides final status)

### Context Preservation for Next Agent

**Catalog Patterns Applied:** [List with versions]
**Mode Constraints Validated:** [Summary]
**Extension Opportunities:** [Future catalog promotion candidates]
```

## Output 2: Create SEAD Quality Gate File

**Template and Directory:**

- Use SEAD-enhanced qa-gate template with catalog compliance sections
- Create directory defined in `qa.qaLocation/gates` (see `sead.config.yaml`) if missing
- Save to: `qa.qaLocation/gates/{epic}.{story}-{slug}.yml`

SEAD Gate file structure:

```yaml
schema: 2  # SEAD-enhanced schema version
story: '{epic}.{story}'
story_title: '{story title}'
gate: PASS|CONCERNS|FAIL|CATALOG_VIOLATION|WAIVED
status_reason: '1-2 sentence explanation of gate decision'
reviewer: 'SEAD QA Agent (Catalog-Aware Test Architect)'
updated: '{ISO-8601 timestamp}'
sead_mode: 'prototype|development|build-to-deploy'

# SEAD-specific compliance tracking
catalog_compliance:
  status: 'compliant|partial|non-compliant|extended'
  patterns_used:
    - pattern: '{catalogPath}/pattern-domain/pattern-name'
      version: 'vX.X.X'
      usage: 'description of how pattern was used'
  patterns_violated:
    - pattern: '{catalogPath}/pattern-domain/pattern-name'
      reason: 'justification for deviation'
      mode_allowed: true|false
  extensions_created:
    - name: 'custom-pattern-name'
      description: 'pattern description'
      promotion_potential: 'high|medium|low'
      catalog_domain: 'target catalog domain for promotion'

constraint_adherence:
  status: 'compliant|violated|waived'
  mode_appropriate: true|false
  violations:
    - constraint: 'specific constraint violated'
      severity: 'low|medium|high'
      blocking: true|false

constitutional_compliance:
  required_reads_completed: true|false
  principles_validated:
    catalog_first: true|false
    specification_driven: true|false
    progressive_constraints: true|false
    context_preservation: true|false
    collaborative_governance: true|false
    quality_gates: true|false
    continuous_evolution: true|false

top_issues: [] # Enhanced with catalog and constraint issues
waiver: { active: false }

# Standard fields enhanced with SEAD context
quality_score: 0-100 
expires: '{ISO-8601 timestamp}'

evidence:
  tests_reviewed: { count }
  risks_identified: { count }
  catalog_patterns_assessed: { count }
  trace:
    ac_covered: [1, 2, 3]
    ac_gaps: [4]
    catalog_coverage: ['api-contracts', 'test-patterns', 'error-handling']

nfr_validation:
  security:
    status: PASS|CONCERNS|FAIL
    catalog_alignment: 'assessment of security pattern usage'
    notes: 'Specific findings with catalog references'
  performance:
    status: PASS|CONCERNS|FAIL
    catalog_alignment: 'assessment of performance pattern usage'  
    notes: 'Specific findings with catalog references'
  reliability:
    status: PASS|CONCERNS|FAIL
    catalog_alignment: 'assessment of reliability pattern usage'
    notes: 'Specific findings with catalog references'
  maintainability:
    status: PASS|CONCERNS|FAIL
    catalog_alignment: 'assessment of maintainability pattern usage'
    notes: 'Specific findings with catalog references'

recommendations:
  immediate: # Must fix before production
    - action: 'Add rate limiting using catalog pattern'
      refs: ['api/auth/login.ts']
      catalog_pattern: 'integration-patterns/rate-limiting-v1.1.0'
  future: # Can be addressed later
    - action: 'Consider refactoring to catalog caching pattern'
      refs: ['services/data.ts']
      catalog_pattern: 'integration-patterns/caching-v2.0.0'
  catalog_evolution: # Patterns to promote to catalog
    - pattern: 'custom-auth-middleware'
      domain: 'auth-patterns'
      priority: 'high'
```

## SEAD Gate Decision Criteria

**Enhanced deterministic rule (apply in order):**

1. **SEAD Mode Constraint Violations:**
   - If BUILD-TO-DEPLOY mode with any custom patterns → Gate = CATALOG_VIOLATION
   - If mode constraints violated → Gate = CATALOG_VIOLATION

2. **Catalog Compliance Assessment:**
   - If catalog_compliance.status == 'non-compliant' AND mode != 'prototype' → Gate = FAIL
   - If major catalog pattern violations in development mode → Gate = CONCERNS

3. **Risk thresholds (if risk_summary present):**
   - If any risk score ≥ 9 → Gate = FAIL (unless waived)
   - Else if any score ≥ 6 → Gate = CONCERNS

4. **Test coverage gaps (if trace available):**
   - If any P0 test missing AND no catalog test pattern used → Gate = CONCERNS
   - If security/data-loss P0 test missing → Gate = FAIL

5. **Issue severity:**
   - If any `top_issues.severity == high` → Gate = FAIL (unless waived)
   - Else if any `severity == medium` → Gate = CONCERNS

6. **NFR statuses:**
   - If any NFR status is FAIL → Gate = FAIL
   - Else if any NFR status is CONCERNS → Gate = CONCERNS
   - Else → Gate = PASS

**SEAD-Specific Gate Types:**
- **PASS**: All criteria met including catalog compliance
- **CONCERNS**: Non-critical issues or tracked extensions (development mode)
- **FAIL**: Critical issues or catalog violations (non-prototype modes)
- **CATALOG_VIOLATION**: Mode constraint violations (blocking in build-to-deploy)
- **WAIVED**: Issues acknowledged and explicitly waived (mode constraints cannot be waived)

## SEAD Constitutional Requirements

This task must adhere to SEAD constitutional principles:

1. **Catalog-First**: Always validate catalog pattern usage before accepting custom solutions
2. **Specification-Driven**: All quality decisions must reference architecture or catalog sources
3. **Progressive Constraints**: Apply mode-appropriate constraint enforcement
4. **Context Preservation**: Ensure complete agent handoff context documentation
5. **Collaborative Governance**: Enable team review of catalog compliance decisions
6. **Quality Gates**: Provide mode-sensitive validation checkpoints
7. **Continuous Evolution**: Track and plan evolution of catalog patterns

## Anti-Drift Protection

This review includes specific protections against common AI agent drift patterns:

- **Catalog Deviation Detection**: Mandatory catalog reads prevent ignoring existing patterns
- **Context Loss Prevention**: Explicit context preservation requirements
- **Spec Inconsistency Blocking**: Catalog and architecture cross-validation
- **Mode Violation Enforcement**: Constitutional constraint validation
- **Quality Standard Drift**: Consistent mode-appropriate standards enforcement

## Completion

After SEAD review:

1. Update the QA Results section in the story file with SEAD enhancements
2. Create the SEAD-compliant gate file in directory from `qa.qaLocation/gates`
3. Recommend status: "Ready for Done with SEAD Compliance" or "Changes Required"
4. If files were modified, list them in QA Results and ask Dev to update File List
5. Always provide constructive feedback with catalog pattern references
6. Document context preservation data for future agent handoffs
7. Track catalog evolution opportunities for continuous improvement