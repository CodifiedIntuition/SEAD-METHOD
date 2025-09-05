<!-- Powered by SEAD-METHOD™ Core -->

# SEAD Brownfield Create Story Task

## Purpose

To create detailed, actionable stories for brownfield projects by leveraging existing codebase analysis, discovered patterns, and catalog integration. This task transforms brownfield epic requirements into implementable stories that bridge existing system constraints with SEAD-METHOD™ catalog-driven development, ensuring stories are grounded in actual codebase patterns while maintaining constitutional compliance and progressive constraint enforcement.

## SEQUENTIAL Task Execution (Do not proceed until current Task is complete)

### 0. Load SEAD Configuration and Validate Brownfield Context

- Load `{root}/sead.config.yaml` and `{root}/sead-core/core-config.yaml` from the project root
- If files do not exist, HALT and inform the user: "SEAD configuration files not found. Run 'sead catalog generate --source .' to analyze existing codebase and initialize SEAD project"
- Extract key configurations: `devStoryLocation`, `prd.*`, `architecture.*`, `workflow.*`, `catalog.*`, `modes.*`
- **SEAD Enhancement**: Validate catalog generation has been completed for brownfield project
- **SEAD Enhancement**: Check existing story context and pattern usage history
- **SEAD Enhancement**: Verify epic definition exists with catalog pattern mapping

### 1. Epic Context and Story Identification

#### 1.1 Load Epic Context with Catalog Integration

- Load the target epic file with catalog pattern mapping
- **SEAD Enhancement**: Review epic's catalog evolution strategy
- **SEAD Enhancement**: Load catalog patterns identified for epic domain
- Identify the specific story within epic to develop
- **SEAD Enhancement**: Analyze story's position in catalog pattern dependency chain

#### 1.2 Analyze Existing Codebase Context for Story

- **SEAD Enhancement**: Load catalog patterns relevant to story requirements
- Review existing implementations that story will extend or modify:
  - Current API endpoints and contracts
  - Existing database schemas and data patterns
  - Current UI components and design patterns
  - Existing authentication and authorization patterns
- **SEAD Enhancement**: Map story requirements to discovered codebase patterns
- **SEAD Enhancement**: Identify pattern gaps that story implementation will address

### 2. Story Requirements Analysis with Pattern Context

#### 2.1 Extract Story Requirements from Epic and Codebase

- Extract functional requirements from epic definition
- **SEAD Enhancement**: Map requirements to existing catalog patterns:
  - API contracts that need creation or modification
  - Shared types that need extension or standardization
  - UI components that need development or refactoring
  - State management patterns that need implementation
  - Error handling patterns that need consistency
- **SEAD Enhancement**: Identify requirements that need new pattern creation
- Analyze non-functional requirements: performance, security, usability

#### 2.2 Assess Pattern Integration Complexity

- **SEAD Enhancement**: Evaluate existing pattern integration challenges:
  - Inconsistent API patterns across similar endpoints
  - Type definitions scattered across multiple files
  - UI components with varying design system compliance
  - State management approaches requiring standardization
- **SEAD Enhancement**: Determine pattern evolution vs. pattern creation strategy
- **SEAD Enhancement**: Assess impact on existing functionality and technical debt

### 3. SEAD Mode Determination and Constraint Analysis

#### 3.1 Story Complexity and Risk Assessment

- Analyze story technical complexity and business risk
- **SEAD Enhancement**: Evaluate appropriate SEAD mode based on:
  - **PROTOTYPE**: Experimental integrations, new pattern exploration, high uncertainty requirements
  - **DEVELOPMENT**: Standard feature enhancement, pattern evolution, catalog extension acceptable
  - **BUILD-TO-DEPLOY**: Production fixes, security updates, strict pattern compliance required
- Consider existing codebase stability and deployment frequency
- **SEAD Enhancement**: Review pattern maturity for story domain

#### 3.2 Constitutional Constraint Configuration

- **SEAD Enhancement**: Load mode-specific constraints from SEAD configuration
- **SEAD Enhancement**: Configure pattern usage requirements:
  - Mandatory catalog patterns that must be used
  - Optional patterns that provide consistency benefits
  - Acceptable pattern deviation policies for brownfield constraints
  - New pattern creation approval and documentation requirements
- **SEAD Enhancement**: Define validation checkpoints and quality gates
- **SEAD Enhancement**: Configure context preservation requirements for agent handoffs

### 4. Story Architecture and Implementation Planning

#### 4.1 Technical Architecture Planning with Catalog Integration

**API Layer Planning:**
- **SEAD Enhancement**: Reference existing API contracts from catalog
- Map story requirements to API contract modifications or additions
- **SEAD Enhancement**: Plan API consistency improvements with catalog patterns
- Define new endpoint specifications that align with existing patterns

**Data Layer Planning:**
- **SEAD Enhancement**: Reference existing data architecture patterns
- Map story data requirements to existing schemas and types
- **SEAD Enhancement**: Plan shared type standardization opportunities
- Define new data contracts that maintain consistency with catalog patterns

**UI Layer Planning (if applicable):**
- **SEAD Enhancement**: Reference design system catalog components
- Map story UI requirements to existing component library
- **SEAD Enhancement**: Plan component consistency and reuse opportunities
- Define new component specifications that align with design system

#### 4.2 Integration and Dependency Planning

- **SEAD Enhancement**: Map story dependencies to catalog integration patterns
- Identify existing services and components that story will interact with
- **SEAD Enhancement**: Plan authentication pattern integration where applicable
- **SEAD Enhancement**: Define error handling consistency with catalog patterns
- Plan testing strategy using catalog test patterns where available

### 5. Story Documentation Creation with Constitutional Framework

#### 5.1 Create Story File Structure with SEAD Enhancements

- Create `{epicNum}.{storyNum}.story.md` file using SEAD Story Template
- **SEAD Enhancement**: Include comprehensive SEAD sections:
  - SEAD Mode Configuration with brownfield constraints
  - Catalog Component References with existing pattern integration
  - Constraint Validation Criteria specific to brownfield context
  - Context Preservation Data including existing system integration points

#### 5.2 Story Core Information with Pattern Context

**Story Header with SEAD Enhancements:**
- Clear, descriptive title that reflects brownfield context
- Epic reference with catalog domain alignment
- **SEAD Enhancement**: Existing system integration summary
- **SEAD Enhancement**: Primary catalog patterns to be used or evolved

**User Story with Technical Context:**
- Standard user story format with clear business value
- **SEAD Enhancement**: Technical context referencing existing system capabilities
- **SEAD Enhancement**: Pattern evolution or integration requirements
- **SEAD Enhancement**: Brownfield constraint acknowledgments

#### 5.3 Enhanced Acceptance Criteria with Pattern Compliance

**Functional Acceptance Criteria:**
- Clear, testable functional requirements
- **SEAD Enhancement**: Integration with existing system functionality
- **SEAD Enhancement**: Backward compatibility requirements where applicable
- User experience consistency with existing patterns

**SEAD Catalog Compliance Criteria:**
- **SEAD Enhancement**: Required catalog patterns to use or extend
- **SEAD Enhancement**: Acceptable deviation policies for brownfield constraints
- **SEAD Enhancement**: Pattern documentation requirements for new discoveries
- **SEAD Enhancement**: Consistency validation with existing similar functionality

**Constitutional Validation Criteria:**
- **SEAD Enhancement**: Mode-specific validation requirements
- **SEAD Enhancement**: Constraint compliance checkpoints
- **SEAD Enhancement**: Quality gate definitions
- **SEAD Enhancement**: Context preservation validation for agent handoffs

### 6. Implementation Guidance with Brownfield Context

#### 6.1 Technical Implementation Strategy

**Existing System Integration:**
- **SEAD Enhancement**: Detailed analysis of existing code to be modified
- **SEAD Enhancement**: Pattern integration strategy with current implementations
- **SEAD Enhancement**: Technical debt addressing opportunities
- **SEAD Enhancement**: Backward compatibility maintenance approach

**Pattern Usage Guidance:**
- **SEAD Enhancement**: Specific catalog patterns to implement or extend
- **SEAD Enhancement**: Pattern adaptation guidance for brownfield constraints
- **SEAD Enhancement**: New pattern creation guidelines where existing patterns insufficient
- **SEAD Enhancement**: Consistency improvement opportunities through pattern adoption

#### 6.2 Testing Strategy with Pattern Integration

- **SEAD Enhancement**: Testing approach using catalog test patterns
- **SEAD Enhancement**: Integration testing with existing functionality
- **SEAD Enhancement**: Pattern compliance validation testing
- **SEAD Enhancement**: Regression testing strategy for modified existing functionality
- Test data strategy using catalog test data patterns where available

### 7. Context Preservation and Agent Handoff Preparation

#### 7.1 Brownfield Context Package Creation

- **SEAD Enhancement**: Existing System Analysis:
  - Current implementation patterns story will interact with
  - Technical debt and consistency issues to be addressed
  - Integration points and dependency analysis
  - Performance and security considerations from existing system

#### 7.2 Developer Agent Context Package

- **SEAD Enhancement**: Implementation Context:
  - Catalog patterns to be used with specific usage guidance
  - Existing code files to be modified with change rationale
  - Pattern evolution strategy with documentation requirements
  - Constitutional constraint summary with validation checkpoints
- **SEAD Enhancement**: Quality Assurance Context:
  - Catalog compliance validation requirements
  - Integration testing requirements with existing functionality
  - Pattern consistency validation criteria

### 8. Story Finalization with SEAD Constitutional Compliance

#### 8.1 Story Completeness Validation

- Verify story addresses all epic requirements in scope
- **SEAD Enhancement**: Confirm catalog pattern integration is comprehensive
- **SEAD Enhancement**: Validate constitutional compliance requirements are realistic for brownfield context
- **SEAD Enhancement**: Check context preservation data is complete for seamless agent handoffs
- Ensure story scope is appropriate and achievable within existing system constraints

#### 8.2 Story Status and Handoff Configuration

- Set initial status to "Draft" with SEAD compliance readiness indicators
- **SEAD Enhancement**: Configure pattern evolution tracking for story lifecycle
- **SEAD Enhancement**: Prepare agent handoff notes with:
  - Brownfield integration requirements and constraints
  - Catalog pattern package with existing system context
  - Constitutional compliance summary with mode-appropriate flexibility
  - Context preservation instructions for multi-agent development

## SEAD Success Criteria

- Story integrates seamlessly with existing brownfield codebase patterns
- Catalog pattern evolution strategy balances consistency with brownfield constraints
- Constitutional compliance requirements are realistic for existing system limitations
- Context preservation enables effective agent collaboration across story lifecycle
- Pattern documentation and standardization opportunities are captured
- Story implementation will improve overall codebase consistency

## SEAD Innovation Benefits

- **Brownfield Intelligence**: Story creation leverages actual codebase pattern analysis rather than theoretical requirements
- **Pattern Evolution**: Systematic approach to improving codebase consistency through story-driven pattern standardization
- **Constitutional Flexibility**: Mode-based constraints accommodate brownfield realities while driving improvement
- **Context Preservation**: Story structure captures existing system knowledge for effective agent handoffs
- **Technical Debt Management**: Story planning identifies and addresses consistency and quality improvement opportunities

## Output

A comprehensive `{epicNum}.{storyNum}.story.md` file that bridges existing brownfield codebase with SEAD-METHOD™ development approach:
- Complete story definition with brownfield context integration
- Catalog pattern evolution strategy specific to existing system constraints
- Constitutional compliance framework adapted for brownfield realities
- Context preservation package for multi-agent development
- Pattern standardization and consistency improvement guidance