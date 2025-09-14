# SEAD Advanced Elicitation Task

## Purpose

- Provide catalog-aware reflective and brainstorming actions to enhance content quality
- Enable deeper exploration of ideas through structured elicitation techniques with catalog integration
- Support iterative refinement through multiple analytical perspectives while maintaining catalog compliance
- Usable during template-driven document creation or any chat conversation with SEAD constraint awareness

## Constitutional Compliance

### Pre-Action Requirements
- **Mandatory Catalog Read**: Review relevant catalog components before elicitation
- **Mode Detection**: Identify current development mode (prototype/development/build-to-deploy)
- **Context Preservation**: Maintain catalog references and constraint context throughout elicitation

### Mode-Specific Constraints

#### Prototype Mode
- **Flexible Exploration**: Allow experimental ideas and catalog deviations
- **Document Experiments**: Track non-catalog approaches for potential promotion
- **Simple Validation**: Basic feasibility checks only

#### Development Mode  
- **Catalog Preference**: Guide elicitation toward catalog-compliant solutions
- **Justify Deviations**: Require reasoning for non-catalog approaches
- **Migration Planning**: Consider path to catalog compliance

#### Build-to-Deploy Mode
- **Catalog Only**: Restrict elicitation to catalog-compliant solutions
- **Zero Deviations**: Block suggestions that violate catalog constraints
- **Full Compliance**: Ensure all elicitation maintains constitutional compliance

## Usage Scenarios

### Scenario 1: Catalog-Aware Template Document Creation

After outputting a section during document creation:

1. **Catalog Context Review**: Analyze which catalog components are relevant
2. **Section Review**: Ask user to review the drafted section for catalog compliance
3. **Offer Catalog-Aware Elicitation**: Present 9 methods filtered by mode constraints
4. **Simple Selection**: User types a number (0-8) to engage method, or 9 to proceed
5. **Execute & Loop**: Apply selected method with catalog awareness, then re-offer choices

### Scenario 2: General Chat Elicitation with Constitutional Framework

User can request advanced elicitation on any agent output:

- User says "do advanced elicitation" or similar
- Agent selects 9 relevant methods appropriate for current mode and catalog context
- Same simple 0-9 selection process with constitutional compliance

## Task Instructions

### 1. Catalog-Aware Method Selection

**Context Analysis**: Before presenting options, analyze:

- **Catalog Integration**: Which catalog domains are relevant (API, types, UI, state, etc.)
- **Mode Constraints**: What methods are allowed in current development mode
- **Content Type**: Technical specs, user stories, architecture, requirements, etc.
- **Catalog Compliance**: Current adherence to catalog patterns
- **Constitutional Alignment**: Alignment with SEAD governance principles
- **Stakeholder Needs**: Who will use this information within catalog context

**Method Selection Strategy**:

1. **Always Include Core Methods** (choose 3-4, mode-filtered):
   - Expand or Contract for Audience (with catalog pattern awareness)
   - Critique and Refine (catalog compliance focus)
   - Identify Potential Risks (including catalog deviation risks)
   - Assess Alignment with Goals (catalog and constitutional alignment)

2. **Context-Specific Methods** (choose 4-5, catalog-aware):
   - **Technical Content**: Tree of Thoughts (catalog-constrained), ReWOO (with catalog integration), Meta-Prompting (constitutional compliance)
   - **User-Facing Content**: Agile Team Perspective (catalog adoption), Stakeholder Roundtable (catalog impact assessment)
   - **Creative Content**: Innovation Tournament (within catalog bounds), Escape Room Challenge (catalog constraint solutions)
   - **Strategic Content**: Red Team vs Blue Team (catalog vs innovation), Hindsight Reflection (catalog evolution)

3. **Always Include**: "Proceed / No Further Actions" as option 9

### 2. Catalog Context and Constitutional Review

When invoked after outputting a section:

1. **Provide Catalog Context Summary**: Give a brief summary highlighting catalog integration points and constitutional compliance
2. **Explain Visual Elements**: If the section contains diagrams, explain them with catalog pattern references
3. **Clarify Constitutional Scope**: Inform user they can apply elicitation to:
   - The entire section (holistic catalog compliance)
   - Individual items within catalog context
   - Specific catalog integration points

### 3. Present Mode-Appropriate Elicitation Options

**Review Request Process:**

- Ask user to review the drafted section for catalog compliance and constitutional alignment
- In the SAME message, inform them they can suggest direct changes OR select an elicitation method
- Present 9 intelligently selected methods (0-8) plus "Proceed" (9), filtered by current mode constraints
- Keep descriptions short with catalog context hints
- Await simple numeric selection

**Action List Presentation Format:**

```text
**SEAD Advanced Elicitation Options** [MODE: {current_mode}]
Choose a number (0-8) or 9 to proceed:

0. [Method Name] (catalog-aware)
1. [Method Name] (constitutional focus)
2. [Method Name] (mode-appropriate)
3. [Method Name] (integration-focused)
4. [Method Name] (compliance-checked)
5. [Method Name] (constraint-aware)
6. [Method Name] (catalog-validated)
7. [Method Name] (governance-aligned)
8. [Method Name] (context-preserved)
9. Proceed / No Further Actions
```

**Response Handling:**

- **Numbers 0-8**: Execute method with catalog awareness and constitutional compliance
- **Number 9**: Proceed with catalog references and context preservation
- **Direct Feedback**: Apply changes while maintaining catalog compliance

### 4. Constitutional Method Execution Framework

**Execution Process:**

1. **Catalog Integration Check**: Verify relevant catalog components are referenced
2. **Retrieve Method**: Access elicitation method with constitutional enhancements
3. **Apply Context**: Execute method with catalog awareness and mode constraints
4. **Validate Results**: Ensure outputs comply with current mode constraints
5. **Preserve Context**: Maintain catalog references throughout elicitation
6. **Re-offer Choice**: Present same options with updated context

**Execution Guidelines:**

- **Catalog Compliance**: All suggestions must align with catalog patterns (mode-dependent)
- **Constitutional Adherence**: Respect SEAD governance principles throughout
- **Context Preservation**: Maintain catalog references and constraint awareness
- **Mode Sensitivity**: Adapt suggestions to current development mode constraints
- **Integration Focus**: Tie elicitation back to catalog components and patterns
- **Governance Alignment**: Ensure all outputs support SEAD constitutional framework

### 5. Escalation Procedures

**Constraint Conflicts:**
- If elicitation suggests catalog violations, escalate to user with alternatives
- Provide clear reasoning for constraint boundaries
- Offer catalog-compliant alternatives when possible

**Mode Transition Guidance:**
- If suggestions require different mode, explain transition implications
- Guide user through mode-appropriate development paths
- Maintain constitutional compliance during transitions

## Integration Points

### Catalog Domains
- **API Contracts**: Elicitation respects defined API patterns
- **Shared Types**: Suggestions maintain type consistency
- **Design System**: UI/UX elicitation follows design catalog
- **State Management**: State-related elicitation uses catalog patterns
- **Error Handling**: Error scenarios follow catalog error patterns

### Constitutional Framework
- **Catalog-First Principle**: Prioritize catalog solutions in elicitation
- **Progressive Constraints**: Apply mode-appropriate constraint levels
- **Context Preservation**: Maintain references throughout process
- **Specification-Driven**: Align elicitation with defined specifications

## Success Criteria

- All elicitation maintains catalog awareness and constitutional compliance
- Mode-appropriate constraint enforcement throughout process
- Context preservation across all elicitation activities
- Integration with catalog domains and patterns
- Constitutional framework adherence in all suggestions