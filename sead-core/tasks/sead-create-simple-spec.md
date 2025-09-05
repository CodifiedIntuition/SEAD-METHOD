<!-- Powered by SEAD-METHOD™ Core -->

# SEAD Create Simple Spec Task

## Purpose

To create concise, actionable specifications for straightforward features using SEAD constitutional constraints and catalog pattern integration. This task produces lightweight but comprehensive specifications that maintain constitutional compliance, leverage catalog patterns effectively, and provide sufficient context for implementation without the overhead of full story creation processes.

## SEQUENTIAL Task Execution (Do not proceed until current Task is complete)

### 0. Load SEAD Configuration and Validate Context

- Load `{root}/sead.config.yaml` and `{root}/sead-core/core-config.yaml` from the project root
- If files do not exist, HALT and inform the user: "SEAD configuration files not found. Run 'sead init' or 'sead catalog generate --source .' to initialize SEAD project"
- Extract key configurations: `devStoryLocation`, `prd.*`, `architecture.*`, `workflow.*`, `catalog.*`, `modes.*`
- **SEAD Enhancement**: Load catalog patterns available for specification domain
- **SEAD Enhancement**: Validate current development mode and constitutional constraints
- **SEAD Enhancement**: Check context preservation requirements for agent handoffs

### 1. Specification Requirements Analysis with Catalog Context

#### 1.1 Feature Requirements Identification

- Gather feature requirements from user input or story context
- **SEAD Enhancement**: Map requirements to catalog domains:
  - API functionality requiring catalog API contracts
  - Data structures needing shared types integration
  - UI components requiring design system alignment
  - Business logic needing state management patterns
  - Error scenarios requiring error handling patterns
- **SEAD Enhancement**: Identify catalog pattern gaps that specification must address

#### 1.2 Scope and Complexity Assessment with SEAD Mode Determination

- Assess feature scope and technical complexity
- **SEAD Enhancement**: Determine appropriate SEAD mode for specification:
  - **PROTOTYPE**: Experimental features, new pattern exploration, high uncertainty
  - **DEVELOPMENT**: Standard features, catalog pattern extension acceptable
  - **BUILD-TO-DEPLOY**: Well-defined features, strict catalog compliance required
- **SEAD Enhancement**: Validate that "simple spec" approach is appropriate for complexity level
- Consider escalation to full story creation if complexity exceeds simple specification scope

### 2. Catalog Pattern Analysis and Selection

#### 2.1 Available Pattern Assessment

- **SEAD Enhancement**: Load catalog patterns relevant to specification requirements:
  - API contracts for backend functionality
  - Shared types for data structures
  - Design system components for UI elements
  - State management patterns for data flow
  - Authentication patterns for security requirements
  - Integration patterns for external services
  - Error handling patterns for exception scenarios

#### 2.2 Pattern Integration Strategy

- **SEAD Enhancement**: Determine catalog pattern usage approach:
  - **Direct Usage**: Existing patterns meet requirements exactly
  - **Extension**: Existing patterns need minor modifications or additions
  - **Evolution**: Existing patterns need significant enhancement
  - **Creation**: New patterns needed for novel requirements
- **SEAD Enhancement**: Plan pattern documentation and promotion strategy for new patterns
- **SEAD Enhancement**: Consider three-tier data and deployment strategy alignment

### 3. Constitutional Constraint Configuration

#### 3.1 Mode-Specific Constraint Setup

- **SEAD Enhancement**: Load constitutional constraints for determined SEAD mode
- **SEAD Enhancement**: Configure constraint enforcement requirements:
  - **PROTOTYPE MODE**: Pattern documentation requirements, experimentation guidelines
  - **DEVELOPMENT MODE**: Catalog integration preferences, validation checkpoints
  - **BUILD-TO-DEPLOY MODE**: Strict compliance requirements, mandatory validations
- **SEAD Enhancement**: Define acceptable deviation policies and escalation procedures

#### 3.2 Quality Gate and Validation Configuration

- **SEAD Enhancement**: Configure quality gates appropriate for simple specification:
  - Catalog pattern compliance validation
  - Constitutional constraint adherence checks
  - Context preservation validation for agent handoffs
  - Integration testing requirements with existing functionality
- **SEAD Enhancement**: Define validation criteria that balance thoroughness with simplicity

### 4. Simple Specification Creation with SEAD Framework

#### 4.1 Core Specification Structure with Constitutional Integration

**Feature Overview with SEAD Context:**
- Clear, concise feature description
- **SEAD Enhancement**: Business value statement with catalog pattern benefits
- **SEAD Enhancement**: SEAD mode selection rationale
- **SEAD Enhancement**: Catalog pattern integration summary

**Functional Requirements with Pattern References:**
- Essential functional requirements in clear, testable terms
- **SEAD Enhancement**: Catalog pattern references for each requirement:
  - API contracts to implement or extend
  - Shared types to use or create
  - UI components from design system
  - State management patterns to apply
- **SEAD Enhancement**: Constitutional compliance requirements integrated naturally

#### 4.2 Technical Specification with Catalog Integration

**Architecture Context:**
- **SEAD Enhancement**: Relevant architecture patterns from catalog
- **SEAD Enhancement**: Integration points with existing systems and patterns
- **SEAD Enhancement**: Three-tier data strategy considerations where applicable
- **SEAD Enhancement**: Deployment strategy alignment requirements

**Implementation Guidance:**
- **SEAD Enhancement**: Specific catalog patterns to use with usage examples
- **SEAD Enhancement**: Pattern extension or creation guidance where needed
- **SEAD Enhancement**: Constitutional constraint application in implementation
- **SEAD Enhancement**: Context preservation requirements for multi-agent development

### 5. Acceptance Criteria with Constitutional Validation

#### 5.1 Functional Acceptance Criteria

- Clear, testable acceptance criteria for feature functionality
- **SEAD Enhancement**: Catalog pattern integration validation criteria
- **SEAD Enhancement**: User experience consistency requirements with existing patterns
- **SEAD Enhancement**: Performance and security baseline requirements

#### 5.2 SEAD Constitutional Compliance Criteria

- **SEAD Enhancement**: Catalog pattern usage validation:
  - Required patterns implemented correctly
  - Pattern extensions documented and approved
  - New patterns created with proper documentation
  - Pattern consistency with existing implementations

- **SEAD Enhancement**: Mode-specific validation requirements:
  - **PROTOTYPE**: Pattern experimentation documented, lessons captured
  - **DEVELOPMENT**: Catalog evolution properly managed, validation gates passed
  - **BUILD-TO-DEPLOY**: Strict compliance verified, all constraints satisfied

### 6. Implementation Context and Agent Handoff Preparation

#### 6.1 Developer Context Package Creation

- **SEAD Enhancement**: Technical Implementation Context:
  - Catalog patterns to use with specific implementation guidance
  - Constitutional constraints summary with mode-appropriate flexibility
  - Architecture integration points and dependency requirements
  - Testing strategy using catalog test patterns where available

#### 6.2 Quality Assurance Context Package

- **SEAD Enhancement**: QA Validation Context:
  - Catalog pattern compliance validation requirements
  - Constitutional constraint verification checkpoints
  - Integration testing requirements with existing functionality
  - User experience consistency validation with design system patterns

### 7. Specification Validation and Refinement

#### 7.1 Completeness and Clarity Validation

- Verify specification covers all essential requirements without unnecessary complexity
- **SEAD Enhancement**: Confirm catalog pattern integration is comprehensive and practical
- **SEAD Enhancement**: Validate constitutional compliance requirements are clear and achievable
- **SEAD Enhancement**: Check context preservation data is complete for effective agent handoffs

#### 7.2 Implementation Feasibility Assessment

- **SEAD Enhancement**: Assess catalog pattern availability and maturity for requirements
- **SEAD Enhancement**: Validate constitutional constraints are appropriate for feature complexity
- **SEAD Enhancement**: Confirm specification scope remains within "simple spec" boundaries
- Consider escalation to full story process if complexity exceeds simple specification capabilities

### 8. Specification Finalization and Context Preservation

#### 8.1 Final Specification Package

- **SEAD Enhancement**: Complete specification document with:
  - Clear feature requirements and acceptance criteria
  - Catalog pattern integration strategy
  - Constitutional compliance framework
  - Implementation context for developer agents
  - Quality assurance validation requirements

#### 8.2 Agent Handoff Configuration

- **SEAD Enhancement**: Configure context preservation for development agents:
  - Catalog pattern package with usage guidance
  - Constitutional constraint summary with validation checkpoints
  - Architecture integration context with dependency mapping
  - Quality assurance requirements with testing strategy
- **SEAD Enhancement**: Prepare handoff notes for seamless multi-agent development

## SEAD Success Criteria

- Specification provides clear, actionable requirements without unnecessary complexity
- Catalog pattern integration enhances consistency and reduces custom development
- Constitutional compliance requirements are appropriate and achievable
- Context preservation enables effective agent collaboration
- Specification scope remains within simple spec boundaries while maintaining quality
- Implementation guidance reduces ambiguity and decision overhead

## SEAD Innovation Benefits

- **Lightweight Governance**: Constitutional constraints provide guidance without bureaucracy
- **Pattern Leverage**: Catalog integration reduces development effort and improves consistency  
- **Context Efficiency**: Simple specs maintain agent handoff effectiveness with minimal overhead
- **Quality Assurance**: Mode-appropriate validation ensures quality without over-engineering
- **Scalable Process**: Simple spec approach scales from prototype experiments to production features

## Output

A concise but comprehensive specification document that provides:
- Clear functional requirements with catalog pattern integration
- Constitutional compliance framework appropriate for feature complexity
- Implementation context package for developer agents
- Quality assurance validation requirements
- Context preservation for effective multi-agent development
- Balance of thoroughness and simplicity appropriate for straightforward features