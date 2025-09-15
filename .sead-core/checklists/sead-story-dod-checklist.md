<!-- Powered by SEAD-METHOD™ Core -->

# SEAD Story Definition of Done (DoD) Checklist

## Instructions for Developer Agent

Before marking a story as 'Review', please go through each item in this checklist. Report the status of each item (e.g., [x] Done, [ ] Not Done, [N/A] Not Applicable) and provide brief comments if necessary.

[[LLM: MANDATORY CONSTITUTIONAL INITIALIZATION - DEVELOPER DOD VALIDATION

This checklist is for DEVELOPER AGENTS to self-validate their work before marking a story complete with full SEAD constitutional compliance.

CRITICAL: Before proceeding, you MUST:

1. **Read Constitutional Constraints**: Load and read `/sead-core/constitutional-rules/sead-developer-constraints.yaml` - these are MANDATORY constraints
2. **Read Catalog Patterns**: Load and read relevant `/sead-catalog/*/README.md` files for domains you worked in
3. **Verify Mode Constraints**: Apply appropriate constraint levels based on current development mode (prototype/development/build-to-deploy)
4. **Validate Catalog Compliance**: All implemented code must align with established catalog patterns

CONSTITUTIONAL VALIDATION PRINCIPLES:

This is a self-assessment with constitutional accountability. Be honest about what's actually done vs what should be done within SEAD constraints. It's better to identify constitutional violations now than have them found in review.

EXECUTION APPROACH:

1. **Constitutional First** - Validate catalog compliance before marking any item complete
2. Go through each section systematically with constitutional lens
3. Mark items as [x] Done, [ ] Not Done, or [N/A] Not Applicable
4. Add brief comments explaining any [ ] or [N/A] items with constitutional context
5. Be specific about what was actually implemented within catalog constraints
6. Flag any constitutional violations or technical debt created
7. Document any catalog pattern deviations with explicit justification

The goal is quality delivery with full constitutional compliance, not just checking boxes.]]

## Constitutional Compliance Validation

[[LLM: This section is MANDATORY and must pass before evaluating traditional DoD items. Constitutional compliance is the foundation of SEAD quality.]]

### Catalog Pattern Compliance

- [ ] **API Patterns**: All new/modified APIs strictly follow `/sead-catalog/api-contracts/` established patterns
- [ ] **Type Consistency**: All data types align with `/sead-catalog/shared-types/` specifications
- [ ] **State Management**: All state changes follow `/sead-catalog/state-management/` patterns
- [ ] **Error Handling**: All error scenarios use `/sead-catalog/error-handling/` established patterns
- [ ] **Integration Patterns**: All external integrations use `/sead-catalog/integration-patterns/` approved approaches
- [ ] **Validation Schemas**: All data validation uses `/sead-catalog/validation-schemas/` patterns
- [ ] **Testing Patterns**: All tests follow `/sead-catalog/test-patterns/` established approaches

### Constitutional Constraint Adherence

- [ ] **Mode-Appropriate Constraints**: Implementation respects current development mode constraints (prototype/development/build-to-deploy)
- [ ] **No Constitutional Violations**: Zero violations of constitutional rules in implemented code
- [ ] **Catalog Reference Traceability**: All architectural decisions can be traced to specific catalog patterns
- [ ] **Anti-Drift Validation**: Implementation maintains consistency with existing codebase patterns
- [ ] **Version Specifications**: All new dependencies use specific versions (no version ranges) per constitutional requirements

### Pattern Evolution Documentation

- [ ] **Pattern Deviations Documented**: Any deviations from catalog patterns explicitly documented with rationale
- [ ] **Constitutional Approval**: Major pattern changes have appropriate constitutional review documentation
- [ ] **Future Compliance Path**: Any technical debt includes path to full catalog compliance

## Traditional DoD Items (Enhanced with Constitutional Context)

### 1. Requirements Met

[[LLM: Be specific - list each requirement and whether it's complete within constitutional constraints]]

- [ ] All functional requirements specified in the story are implemented using catalog-compliant patterns
- [ ] All acceptance criteria defined in the story are met with constitutional validation
- [ ] Implementation aligns with catalog patterns for the relevant domain(s)

### 2. Coding Standards & Project Structure

[[LLM: Code quality matters for maintainability and must align with catalog standards. Check each item carefully within constitutional context]]

- [ ] All new/modified code strictly adheres to `Operational Guidelines` and constitutional constraints
- [ ] All new/modified code aligns with `Project Structure` (file locations, naming, etc.) using catalog organizational patterns
- [ ] Adherence to `Tech Stack` for technologies/versions used with catalog compliance validation (if story introduces or modifies tech usage)
- [ ] Adherence to `Api Reference` and `Data Models` using catalog API contract patterns (if story involves API or data model changes)
- [ ] Basic security best practices applied for new/modified code using catalog security patterns (e.g., input validation, proper error handling, no hardcoded secrets)
- [ ] No new linter errors or warnings introduced beyond constitutional tolerance levels
- [ ] Code is well-commented where necessary (clarifying complex logic, not obvious statements) with catalog pattern references

### 3. Testing

[[LLM: Testing proves your code works within constitutional constraints. Be honest about test coverage using catalog testing patterns]]

- [ ] All required unit tests as per the story and `Operational Guidelines` Testing Strategy are implemented using catalog test patterns
- [ ] All required integration tests (if applicable) as per the story and `Operational Guidelines` Testing Strategy are implemented using catalog integration testing patterns
- [ ] All tests (unit, integration, E2E if applicable) pass successfully with constitutional validation
- [ ] Test coverage meets project standards (if defined) with catalog testing pattern compliance
- [ ] Tests validate catalog pattern compliance where applicable

### 4. Functionality & Verification

[[LLM: Did you actually run and test your code within constitutional constraints? Be specific about what you tested using catalog patterns]]

- [ ] Functionality has been manually verified by the developer using catalog-approved verification patterns (e.g., running the app locally, checking UI, testing API endpoints)
- [ ] Edge cases and potential error conditions considered and handled gracefully using catalog error handling patterns
- [ ] Integration points tested using catalog integration testing approaches
- [ ] Performance validated within catalog performance pattern guidelines

### 5. Story Administration

[[LLM: Documentation helps the next developer understand constitutional context. What should they know about catalog compliance?]]

- [ ] All tasks within the story file are marked as complete with constitutional validation notes
- [ ] Any clarifications or decisions made during development are documented in the story file with catalog pattern references
- [ ] The story wrap up section has been completed with notes of changes or information relevant to the next story or overall project, including constitutional compliance status
- [ ] Agent model used during development is documented with constitutional adherence notes
- [ ] Changelog of any changes is properly updated with catalog compliance references

### 6. Dependencies, Build & Configuration

[[LLM: Build issues block everyone and must maintain constitutional compliance. Ensure everything compiles and runs cleanly within catalog constraints]]

- [ ] Project builds successfully without errors using catalog build patterns
- [ ] Project linting passes with constitutional compliance validation
- [ ] Any new dependencies added were either pre-approved in the story requirements OR explicitly approved by the user during development with constitutional validation (approval documented in story file)
- [ ] If new dependencies were added, they are recorded in the appropriate project files (e.g., `package.json`, `requirements.txt`) with constitutional justification
- [ ] No known security vulnerabilities introduced by newly added and approved dependencies (validated against constitutional security requirements)
- [ ] If new environment variables or configurations were introduced by the story, they are documented and handled securely using catalog deployment patterns

### 7. Documentation (If Applicable)

[[LLM: Good documentation prevents future confusion and must include constitutional context. What needs explaining about catalog compliance?]]

- [ ] Relevant inline code documentation (e.g., JSDoc, TSDoc, Python docstrings) for new public APIs or complex logic is complete with catalog pattern references
- [ ] User-facing documentation updated, if changes impact users, with catalog pattern explanations where relevant
- [ ] Technical documentation (e.g., READMEs, system diagrams) updated if significant architectural changes were made, including catalog compliance notes

### 8. Catalog Integration & Compliance

[[LLM: This section ensures the story contributes positively to the overall catalog system health]]

- [ ] **Catalog Pattern Usage**: All implemented patterns are consistent with existing catalog standards
- [ ] **Pattern Documentation**: Any new reusable patterns are documented for potential catalog inclusion
- [ ] **Integration Validation**: All integration points tested against catalog integration patterns
- [ ] **Future Maintainability**: Implementation supports future catalog evolution and pattern refinement

### 9. Constitutional Quality Gates

[[LLM: These gates ensure constitutional compliance and prevent technical debt]]

- [ ] **Anti-Drift Validation**: Implementation does not introduce architectural drift or pattern inconsistencies
- [ ] **Mode Compliance**: All constraints for current development mode (prototype/development/build-to-deploy) are respected
- [ ] **Escalation Clarity**: Any constitutional conflicts or constraint violations are documented with escalation path
- [ ] **Catalog Integrity**: Implementation maintains or improves overall catalog pattern consistency

## Final Constitutional Confirmation

[[LLM: FINAL CONSTITUTIONAL DOD SUMMARY

After completing the checklist with full constitutional awareness:

1. **Constitutional Compliance Summary**
   - Confirm all constitutional constraints were respected
   - Document any approved deviations with rationale
   - Validate catalog pattern consistency
   - Note mode-appropriate constraint application

2. **Story Accomplishment Summary**
   - Summarize what was accomplished within constitutional constraints
   - List any items marked as [ ] Not Done with constitutional explanations
   - Identify any technical debt or follow-up work needed with catalog compliance path
   - Note any challenges or learnings for future stories with constitutional context

3. **Catalog Pattern Assessment**
   - Document how implementation enhances or maintains catalog patterns
   - Note any pattern evolution or refinement opportunities
   - Validate integration with existing catalog standards

4. **Quality Gate Status**
   - Confirm whether the story is truly ready for review with constitutional compliance
   - Document any constitutional concerns for reviewer attention
   - Validate that all anti-drift protections are in place

5. **Future Compliance Path**
   - Document any temporary deviations from catalog patterns with remediation timeline
   - Note any constitutional constraints that may need adjustment for future stories
   - Identify opportunities for catalog pattern enhancement

Be honest - it's better to flag constitutional issues now than have them discovered later and compromise system integrity.]]

### Constitutional DoD Confirmation

- [ ] **Full Constitutional Compliance**: I confirm that all implemented code respects SEAD constitutional constraints and catalog patterns
- [ ] **Mode-Appropriate Implementation**: I confirm that implementation complexity and approach aligns with current development mode constraints
- [ ] **Catalog Pattern Integrity**: I confirm that all patterns used are consistent with established catalog standards or properly documented deviations
- [ ] **Anti-Drift Protection**: I confirm that implementation does not introduce architectural drift or pattern inconsistencies
- [ ] **Quality Gate Validation**: I confirm that all constitutional quality gates have been satisfied

### Traditional DoD Confirmation

- [ ] I, the Developer Agent, confirm that all applicable traditional DoD items above have been addressed within constitutional constraints

### Final Story Readiness Assessment

**Constitutional Compliance Status**: [FULL COMPLIANCE / APPROVED DEVIATIONS / VIOLATIONS PRESENT]

**Story Review Readiness**: [READY FOR REVIEW / NEEDS CONSTITUTIONAL REMEDIATION / BLOCKED BY CONSTRAINTS]

**Catalog Pattern Impact**: [ENHANCES CATALOG / MAINTAINS CATALOG / NEUTRAL IMPACT / REQUIRES PATTERN EVOLUTION]

[[LLM: Only mark the story as ready for review if ALL constitutional constraints are satisfied and catalog pattern integrity is maintained. Any violations must be remediated or explicitly approved through constitutional escalation procedures before story completion.]]