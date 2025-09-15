# SEAD Create AI Frontend Prompt Task

## Purpose

To generate a masterful, catalog-compliant, and constitutionally-aligned prompt for use with AI-driven frontend development tools (e.g., Vercel v0, Lovable.ai, or similar) while maintaining SEAD governance principles and catalog pattern integration.

## Constitutional Compliance

### Pre-Action Requirements
- **Mandatory Catalog Read**: Review design-system, shared-types, and api-contracts catalog domains
- **Mode Detection**: Identify current development mode (prototype/development/build-to-deploy)
- **Context Preservation**: Maintain catalog references and constitutional constraints in generated prompts

### Mode-Specific Prompt Constraints

#### Prototype Mode
- **Experimental Prompts**: Allow AI generation beyond catalog boundaries for exploration
- **Pattern Discovery**: Instruct AI to document new patterns for potential catalog inclusion
- **Flexible Constraints**: Basic validation and simple catalog awareness
- **Innovation Focus**: Encourage creative solutions with catalog consideration

#### Development Mode
- **Catalog-Preferred Prompts**: Guide AI toward catalog-compliant solutions with justified deviations
- **Integration Testing**: Include validation steps for catalog pattern compatibility
- **Migration Planning**: Instruct AI to consider transition paths to full catalog compliance
- **Balanced Approach**: Catalog preference with innovation allowance

#### Build-to-Deploy Mode
- **Catalog-Only Prompts**: Restrict AI generation to strict catalog pattern compliance
- **Zero Deviations**: Block non-catalog approaches in generated prompts
- **Production Readiness**: Ensure all prompts produce constitutionally compliant code
- **Full Validation**: Include comprehensive catalog compliance verification

## Inputs

- Completed SEAD UI/UX Specification (`sead-front-end-spec.md`) with catalog integration
- Completed Frontend Architecture Document (`sead-front-end-architecture.md`) or full stack architecture
- Main System Architecture Document (`sead-architecture.md`) for API contracts and catalog context
- **Catalog Context**: Relevant design-system, shared-types, and api-contracts documentation
- **Constitutional Framework**: Current mode and applicable SEAD governance constraints

## Key Activities & Instructions

### 1. SEAD Core Prompting Principles

Before generating the prompt, understand these catalog-aware principles for AI code generation:

- **Catalog-First Explicit Detail**: Provide comprehensive catalog context and constitutional constraints alongside technical requirements
- **Constitutional Iteration**: Frame iterative development within SEAD governance boundaries and catalog evolution
- **Context with Constraints**: Always include catalog pattern context and mode-specific limitations
- **Mobile-First with Design System**: Frame mobile-first design using catalog design-system patterns and components

### 2. SEAD Structured Prompting Framework

Structure every prompt using this catalog-integrated, constitutionally-compliant framework:

1. **High-Level Goal with Catalog Context**: Start with objective including relevant catalog domains and constitutional constraints
   - _Example: "Create a responsive user registration form using catalog design-system patterns, shared-types validation, and api-contracts integration while maintaining [current mode] constitutional compliance."_

2. **Detailed Constitutional Instructions**: Provide granular steps including catalog pattern usage and governance compliance
   - _Example: "1. Use catalog design-system/forms/RegistrationForm.pattern. 2. Import shared-types/UserRegistration.ts for type safety. 3. Follow api-contracts/auth/register.contract for API integration. 4. Maintain constitutional compliance for [current mode]. 5. Document any catalog deviations for review."_

3. **Catalog Examples and Governance Constraints**: Include catalog pattern references, constitutional boundaries, and explicit limitations
   - _Example: "Reference design-system/components/Form.catalog for styling patterns. Use api-contracts/auth/register.yaml endpoint specification. Constitutional constraint: [mode-specific limitations]. DO NOT deviate from catalog patterns without explicit documentation."_

4. **Constitutional Scope Boundaries**: Define task scope within catalog and governance constraints
   - _Example: "Create only the RegistrationForm component following catalog patterns. Integrate with existing design-system components. Maintain catalog compliance. Do NOT modify core catalog files or violate constitutional constraints for [current mode]."_

### 3. SEAD Master Prompt Assembly

Synthesize inputs and principles into catalog-compliant, constitutionally-aligned prompt:

1. **Foundational Catalog Context**:
   - Start with project purpose, full tech stack, and catalog pattern library overview
   - Include constitutional framework context (current mode and applicable constraints)
   - Reference relevant catalog domains and their integration requirements

2. **Design System Integration**:
   - Reference catalog design-system patterns and component libraries
   - Include constitutional design constraints and governance requirements
   - Specify catalog compliance level required for current mode

3. **Constitutional Framework Application**:
   - Apply SEAD structured framework with catalog pattern integration
   - Include mode-specific constraints and validation requirements
   - Ensure constitutional compliance throughout generated code

4. **Catalog-Compliant Presentation**:
   - Output complete prompt with catalog references and constitutional boundaries
   - Explain catalog integration points and governance compliance requirements
   - **Constitutional Reminder**: All AI-generated code requires SEAD compliance review and catalog pattern validation

### 4. SEAD Prompt Template Structure

```markdown
# SEAD AI Frontend Generation Prompt

## Constitutional Framework Context
- **Development Mode**: [prototype/development/build-to-deploy]
- **Catalog Domains**: [design-system, shared-types, api-contracts, etc.]
- **Governance Constraints**: [Mode-specific constitutional limitations]

## Project Context with Catalog Integration
[Project purpose, tech stack, and catalog pattern library overview]

## High-Level Goal
[Objective including catalog compliance requirements and constitutional constraints]

## Catalog-Compliant Instructions

### Step 1: Catalog Pattern Integration
1. Review and implement [specific catalog patterns]
2. Integrate with [catalog domains] following governance constraints
3. Maintain constitutional compliance for [current mode]

### Step 2: Component Development
1. [Detailed, catalog-aware implementation steps]
2. [Constitutional compliance checkpoints]
3. [Integration with existing catalog patterns]

### Step 3: Validation and Compliance
1. Validate against catalog patterns
2. Ensure constitutional compliance
3. Document any deviations for review

## Catalog References and Constraints
- **Design System**: [Specific patterns and components to use]
- **API Contracts**: [Endpoint specifications and integration requirements]
- **Shared Types**: [Type definitions and validation schemas]
- **Constitutional Boundaries**: [What NOT to do based on current mode]

## Scope and Governance Boundaries
- **Allowed Modifications**: [Files and patterns that can be changed]
- **Constitutional Restrictions**: [What must remain unchanged]
- **Catalog Compliance**: [Required adherence level for current mode]
- **Validation Requirements**: [Post-generation compliance checks needed]

## Success Criteria
- All generated code follows catalog patterns appropriate for [current mode]
- Constitutional compliance maintained throughout
- Integration points with existing catalog preserved
- Documentation provided for any pattern deviations
```

### 5. Constitutional Validation and Refinement

1. **Catalog Compliance Review**: Verify prompt includes appropriate catalog pattern references
2. **Constitutional Alignment Check**: Ensure prompt respects current mode governance constraints
3. **Integration Validation**: Confirm prompt maintains context preservation requirements
4. **Governance Boundaries**: Validate prompt prevents constitutional violations

### 6. SEAD Prompt Delivery

**Output Format:**
- Complete, copy-pasteable prompt with catalog integration
- Constitutional compliance explanation and governance context
- Catalog pattern references and integration points clearly marked
- Mode-specific constraints and validation requirements highlighted

**Constitutional Reminders:**
- All AI-generated code requires SEAD governance review
- Catalog pattern compliance must be validated post-generation
- Constitutional constraints must be maintained throughout development
- Integration with existing catalog patterns is mandatory for non-prototype modes

## Escalation Procedures

**Catalog Pattern Conflicts:**
- If requirements conflict with catalog patterns, escalate with constitutional alternatives
- Provide mode-appropriate solutions within governance boundaries
- Document conflicts for potential catalog evolution consideration

**Constitutional Constraint Violations:**
- If prompt requirements violate mode constraints, explain governance implications
- Offer compliant alternatives that achieve similar outcomes
- Guide toward appropriate mode transitions if needed

**Integration Challenges:**
- If catalog integration proves impossible, document architectural limitations
- Propose catalog evolution or constitutional framework adjustments
- Maintain system integrity while addressing requirements

## Success Criteria

- Generated prompts maintain appropriate catalog compliance for current mode
- Constitutional constraints are preserved and enforced throughout AI generation
- Integration points with existing catalog patterns are clearly specified
- All governance boundaries are respected and validated
- Context preservation enables effective SEAD workflow continuation