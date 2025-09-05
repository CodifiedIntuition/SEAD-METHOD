<!-- Powered by SEAD-METHOD™ Core -->

# SEAD Story Draft Checklist

The SEAD Scrum Master should use this checklist to validate that each story contains sufficient context for a developer agent to implement it successfully within SEAD constitutional constraints and catalog patterns, while assuming the dev agent has reasonable capabilities to figure things out using established patterns.

[[LLM: MANDATORY CONSTITUTIONAL INITIALIZATION - STORY DRAFT VALIDATION

Before proceeding with this checklist, you MUST:

1. **Read Constitutional Constraints**: Load and read `/sead-core/constitutional-rules/sead-scrum-master-constraints.yaml` - these are MANDATORY validation constraints
2. **Read Catalog Standards**: Load and read relevant `/sead-catalog/*/README.md` files to understand established patterns that stories should reference
3. **Verify Mode Context**: Determine if story is for prototype, development, or build-to-deploy mode and apply appropriate constraint expectations
4. **Validate Story Prerequisites**: Ensure story context aligns with constitutional requirements for clarity and catalog compliance

REQUIRED ACCESS:
Ensure you have access to:

1. The story document being validated (usually in docs/stories/ or provided directly)
2. The parent epic context with constitutional alignment
3. Any referenced architecture or design documents with catalog compliance
4. Previous related stories if this builds on prior work
5. SEAD catalog domain patterns relevant to the story scope

CRITICAL: This checklist validates individual stories BEFORE implementation begins with full constitutional compliance validation.

CONSTITUTIONAL VALIDATION PRINCIPLES:

1. **Catalog Clarity** - A developer should understand WHAT to build using established catalog patterns
2. **Constitutional Context** - WHY this is being built and how it fits within SEAD constraints
3. **Pattern Guidance** - Key technical decisions and catalog patterns to follow
4. **Compliance Testability** - How to verify the implementation works within constitutional constraints
5. **Catalog Self-Contained** - Most info needed is in the story itself with appropriate catalog references

CONSTITUTIONAL ASSUMPTIONS:
We assume competent developer agents who can:

- Research SEAD documentation and catalog patterns
- Make reasonable technical decisions within constitutional constraints
- Follow established catalog patterns and standards
- Ask for clarification when truly stuck within escalation procedures
- Apply mode-appropriate constraint levels

We're checking for SUFFICIENT guidance within constitutional frameworks, not exhaustive detail.]]

## 1. CONSTITUTIONAL COMPLIANCE & CATALOG ALIGNMENT

[[LLM: This section is MANDATORY and foundational. Without constitutional compliance, stories cannot provide proper guidance for implementation.]]

### 1.1 Catalog Pattern References

- [ ] Story explicitly references relevant catalog domain patterns (e.g., `/sead-catalog/api-contracts/` for API stories)
- [ ] Technical approach aligns with established catalog patterns for the domain
- [ ] Any deviations from catalog patterns are explicitly noted with justification
- [ ] Catalog pattern numbers/references are included for traceability
- [ ] Story acknowledges mode-specific catalog pattern constraints

### 1.2 Constitutional Constraint Integration

- [ ] Story scope aligns with current development mode constraints (prototype/development/build-to-deploy)
- [ ] Constitutional requirements are built into acceptance criteria
- [ ] Anti-drift validation requirements are specified
- [ ] Escalation procedures referenced for constraint conflicts
- [ ] Mode-appropriate complexity levels are maintained

### 1.3 Pattern Evolution Consideration

- [ ] Story identifies if it requires new catalog patterns or pattern evolution
- [ ] Constitutional approval process is referenced for significant pattern changes
- [ ] Impact on existing catalog patterns is assessed and documented

## 2. GOAL & CONTEXT CLARITY

[[LLM: Without clear goals within constitutional constraints, developers build the wrong thing. Verify:

1. The story states WHAT functionality to implement using catalog patterns
2. The business value or user benefit is clear within constitutional framework
3. How this fits into the larger epic/product is explained with constitutional context
4. Dependencies are explicit with constitutional validation ("requires Story X to be complete")
5. Success looks like something specific within catalog compliance, not vague]]

### 2.1 Constitutional Goal Definition

- [ ] Story goal/purpose is clearly stated within constitutional framework
- [ ] Relationship to epic goals is evident with constitutional alignment
- [ ] How the story fits into overall system flow is explained using catalog patterns
- [ ] Dependencies on previous stories are identified with constitutional validation (if applicable)
- [ ] Business context and value are clear within SEAD methodology constraints

### 2.2 Catalog-Compliant Success Criteria

- [ ] Success criteria reference specific catalog patterns and compliance validation
- [ ] Acceptance criteria include constitutional constraint validation
- [ ] Definition of done includes catalog pattern compliance verification
- [ ] Quality gates include anti-drift validation requirements

## 3. TECHNICAL IMPLEMENTATION GUIDANCE

[[LLM: Developers need enough technical context to start coding within constitutional constraints. Check:

1. Key files/components to create or modify are mentioned with catalog pattern references
2. Technology choices are specified where non-obvious within constitutional limits
3. Integration points with existing code are identified using catalog integration patterns
4. Data models or API contracts are defined or referenced using catalog standards
5. Non-standard patterns or exceptions are called out with constitutional approval

Note: We don't need every file listed - just the important ones with catalog context.]]

### 3.1 Catalog-Compliant Technical Scope

- [ ] Key files to create/modify are identified with catalog pattern references (not necessarily exhaustive)
- [ ] Technologies specifically needed for this story are mentioned with catalog compliance validation
- [ ] Critical APIs or interfaces are sufficiently described using catalog API contract patterns
- [ ] Necessary data models or structures are referenced using catalog data strategy patterns
- [ ] Required environment variables are listed with catalog deployment pattern references (if applicable)
- [ ] Any exceptions to standard coding patterns are noted with constitutional approval references

### 3.2 Constitutional Implementation Constraints

- [ ] Implementation approach respects current development mode constraints
- [ ] Complexity limitations are specified based on constitutional guidelines
- [ ] Integration patterns must use catalog-approved approaches
- [ ] Error handling must follow catalog error handling patterns
- [ ] Testing approach must use catalog testing patterns

## 4. REFERENCE EFFECTIVENESS

[[LLM: References should help developers understand catalog patterns, not create a treasure hunt. Ensure:

1. References point to specific catalog sections or patterns, not whole domains
2. The relevance of each catalog reference is explained
3. Critical information from catalog patterns is summarized in the story
4. References are accessible and use consistent catalog notation
5. Previous story context is summarized with constitutional compliance context if needed]]

### 4.1 Catalog Reference Quality

- [ ] References to catalog documents point to specific relevant patterns (e.g., `/sead-catalog/api-contracts/README.md#rest-patterns`)
- [ ] Critical information from catalog patterns is summarized (not just referenced) in the story
- [ ] Context is provided for why catalog references are relevant to this story
- [ ] References use consistent SEAD catalog format (e.g., `/sead-catalog/domain/pattern-name`)

### 4.2 Constitutional Documentation Integration

- [ ] References to constitutional constraints are specific and actionable
- [ ] Critical constitutional requirements from previous stories are summarized with compliance status
- [ ] Mode-specific constraint references are included where relevant
- [ ] Escalation procedures are referenced appropriately

## 5. SELF-CONTAINMENT ASSESSMENT

[[LLM: Stories should be mostly self-contained within catalog pattern system to avoid context switching. Verify:

1. Core requirements are in the story with catalog pattern references, not just in external references
2. Domain terms are explained or obvious from catalog context
3. Constitutional assumptions are stated explicitly
4. Edge cases are mentioned with catalog error handling references (even if deferred)
5. The story could be understood without reading 10 other documents beyond catalog patterns]]

### 5.1 Catalog-Supported Self-Containment

- [ ] Core information needed is included with appropriate catalog pattern references (not overly reliant on external docs)
- [ ] Implicit assumptions are made explicit with constitutional context
- [ ] Domain-specific terms or concepts are explained with catalog pattern references
- [ ] Edge cases or error scenarios are addressed using catalog error handling patterns

### 5.2 Constitutional Context Integration

- [ ] Story includes sufficient constitutional context to guide implementation
- [ ] Mode-specific constraints are explained within the story
- [ ] Anti-drift requirements are clearly stated
- [ ] Quality gates and validation requirements are self-contained

## 6. TESTING GUIDANCE

[[LLM: Testing ensures the implementation actually works within constitutional constraints using catalog patterns. Check:

1. Test approach is specified (unit, integration, e2e) using catalog testing patterns
2. Key test scenarios are listed with constitutional validation requirements
3. Success criteria are measurable within catalog compliance frameworks
4. Special test considerations include constitutional constraint validation
5. Acceptance criteria in the story are testable within catalog testing patterns]]

### 6.1 Catalog-Compliant Testing Approach

- [ ] Required testing approach is outlined using catalog testing patterns
- [ ] Key test scenarios are identified with catalog testing pattern references
- [ ] Success criteria are defined with catalog compliance validation requirements
- [ ] Special testing considerations are noted using catalog testing standards (if applicable)

### 6.2 Constitutional Testing Integration

- [ ] Testing approach includes constitutional constraint validation
- [ ] Anti-drift testing requirements are specified
- [ ] Mode-specific testing requirements are included
- [ ] Catalog pattern compliance testing is defined

## 7. SEAD METHODOLOGY INTEGRATION

[[LLM: This section ensures the story properly integrates with SEAD methodology and supports the overall constitutional framework.]]

### 7.1 Agent Coordination Requirements

- [ ] Story specifies which SEAD agents are expected to collaborate
- [ ] Handoff requirements between agents are defined
- [ ] Context preservation requirements are specified
- [ ] Agent escalation procedures are referenced appropriately

### 7.2 Catalog Evolution Support

- [ ] Story identifies opportunities for catalog pattern enhancement
- [ ] Requirements for documenting new patterns are specified
- [ ] Integration with existing catalog patterns is validated
- [ ] Future catalog maintainability is considered

## CONSTITUTIONAL VALIDATION RESULT

[[LLM: FINAL SEAD STORY VALIDATION REPORT

Generate a comprehensive constitutional validation report:

1. Constitutional Compliance Summary
   - Story constitutional readiness: READY / NEEDS REVISION / BLOCKED
   - Catalog pattern integration score (1-10)
   - Major constitutional gaps identified
   - Mode-appropriate constraint application

2. Catalog Pattern Analysis
   Fill in the validation table with:
   - PASS: Requirements clearly met with catalog compliance
   - PARTIAL: Some gaps but workable with catalog guidance
   - FAIL: Critical catalog information missing

3. Constitutional Issues (if any)
   - List concrete constitutional problems to fix
   - Suggest specific catalog pattern improvements
   - Identify any blocking constitutional dependencies
   - Note mode-specific constraint conflicts

4. Developer Perspective with Constitutional Context
   - Could YOU implement this story as written using catalog patterns?
   - What constitutional questions would you have?
   - What catalog pattern gaps might cause delays or rework?
   - Are constitutional constraints clear and actionable?

5. SEAD Integration Assessment
   - Agent coordination clarity
   - Catalog evolution opportunities
   - Constitutional framework support
   - Long-term pattern sustainability

6. Mode-Specific Validation
   - Appropriate complexity for current mode
   - Constraint application correctness
   - Escalation procedure clarity
   - Quality gate definition completeness

Be pragmatic - perfect documentation doesn't exist, but it must provide sufficient constitutional context and catalog guidance for a dev agent to implement successfully without compromising SEAD methodology integrity.]]

### Constitutional Validation Summary

| Category                                        | Status | Constitutional Issues |
| ----------------------------------------------- | ------ | --------------------- |
| 1. Constitutional Compliance & Catalog Alignment | _TBD_  |                       |
| 2. Goal & Context Clarity                       | _TBD_  |                       |
| 3. Technical Implementation Guidance            | _TBD_  |                       |
| 4. Reference Effectiveness                      | _TBD_  |                       |
| 5. Self-Containment Assessment                  | _TBD_  |                       |
| 6. Testing Guidance                             | _TBD_  |                       |
| 7. SEAD Methodology Integration                 | _TBD_  |                       |

### Constitutional Assessment Details

**Catalog Pattern Compliance**: [FULL COMPLIANCE / PARTIAL COMPLIANCE / NON-COMPLIANT]

**Constitutional Constraint Integration**: [COMPLETE / NEEDS ENHANCEMENT / MISSING]

**Mode-Appropriate Complexity**: [APPROPRIATE / TOO COMPLEX / TOO SIMPLE]

**Anti-Drift Protection**: [ROBUST / ADEQUATE / INSUFFICIENT]

### Final Constitutional Assessment

- **READY**: The story provides sufficient constitutional context and catalog guidance for implementation
- **NEEDS REVISION**: The story requires constitutional updates (see constitutional issues)  
- **BLOCKED**: External constitutional information required (specify what constitutional information)

### Catalog Pattern Integration Score: [1-10]

### Constitutional Recommendations

(To be populated with specific constitutional and catalog pattern guidance)

[[LLM: Only approve stories that provide clear constitutional context and sufficient catalog pattern guidance. Stories lacking constitutional compliance framework cannot provide proper implementation guidance for SEAD methodology.]]