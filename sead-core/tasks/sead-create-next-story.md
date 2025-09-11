<!-- Powered by SEAD-METHOD™ Core -->

# SEAD Create Next Story Task

## Purpose

To identify the next logical story based on project progress and epic definitions, and then to prepare a comprehensive, catalog-aware, constraint-compliant, and actionable story file using the SEAD Story Template. This task ensures the story is enriched with all necessary technical context, catalog component references, SEAD mode constraints, and acceptance criteria, making it ready for efficient implementation by a SEAD Developer Agent with preserved context across agent handoffs.

## SEQUENTIAL Task Execution (Do not proceed until current Task is complete)

### 0. Load SEAD Configuration and Validate Catalog

- Load `{root}/sead.config.yaml` and `{root}/sead-core/core-config.yaml` from the project root
- If files do not exist, HALT and inform the user: "SEAD configuration files not found. Run 'sead init' to initialize a SEAD project, or migrate existing project with 'sead catalog generate --source .'"
- Extract key configurations: `devStoryLocation`, `prd.*`, `architecture.*`, `workflow.*`, `catalog.*`, `modes.*`
- **SEAD Enhancement**: Validate catalog availability and current development mode
- **SEAD Enhancement**: Check catalog completeness for current mode constraints

### 1. Identify Next Story for Preparation with SEAD Mode Awareness

#### 1.1 Locate Epic Files and Review Existing Stories with Catalog Context

- Based on `prdSharded` from config, locate epic files (sharded location/pattern or monolithic PRD sections)
- **SEAD Enhancement**: Load catalog index to understand available patterns for story implementation
- If `devStoryLocation` has story files, load the highest `{epicNum}.{storyNum}.story.md` file
- **If highest story exists:**
  - Verify status is 'Done' AND catalog compliance validated. If not, alert user: "ALERT: Found incomplete or non-compliant story! File: {lastEpicNum}.{lastStoryNum}.story.md Status: [current status] Catalog Compliance: [compliance status] You should fix this story first, but would you like to accept risk & override to create the next story in draft?"
  - **SEAD Enhancement**: Check if story completion included proper catalog pattern usage and constraint validation
  - If proceeding, select next sequential story in the current epic
  - **SEAD Enhancement**: Evaluate if mode progression is appropriate between stories
  - If epic is complete, prompt user: "Epic {epicNum} Complete with SEAD Compliance: All stories in Epic {epicNum} have been completed and validated. Would you like to: 1) Begin Epic {epicNum + 1} with story 1 2) Select a specific story to work on 3) Evaluate mode progression 4) Cancel story creation"
  - **CRITICAL**: NEVER automatically skip to another epic. User MUST explicitly instruct which story to create.
- **If no story files exist:** The next story is ALWAYS 1.1 (first story of first epic)
- **SEAD Enhancement**: Announce story with mode context: "Identified next story for preparation: {epicNum}.{storyNum} - {Story Title} [Mode: {current_sead_mode}] [Catalog Patterns Available: {relevant_pattern_count}]"

### 2. Gather Story Requirements and SEAD Context

#### 2.1 Extract Story Requirements with Catalog Integration
- Extract story requirements from the identified epic file
- **SEAD Enhancement**: Identify relevant catalog patterns for story requirements
- **SEAD Enhancement**: Analyze required vs. available catalog components
- **SEAD Enhancement**: Determine mode-appropriate constraint requirements

#### 2.2 Review Previous Story Context with SEAD Enhancements
- If previous story exists, review Dev Agent Record sections for:
  - Completion Notes and Debug Log References
  - Implementation deviations and technical decisions
  - Challenges encountered and lessons learned
  - **SEAD Enhancement**: Catalog pattern usage and effectiveness
  - **SEAD Enhancement**: Constraint compliance experiences
  - **SEAD Enhancement**: New patterns captured for catalog promotion
- Extract relevant insights that inform the current story's preparation
- **SEAD Enhancement**: Identify catalog evolution opportunities from previous implementations

### 3. Gather Architecture Context with Catalog Awareness

#### 3.1 Determine Architecture Reading Strategy with SEAD Enhancements

- **If `architectureVersion: >= v4` and `architectureSharded: true`**: Read `{architectureShardedLocation}/index.md` then follow structured reading order below
- **Else**: Use monolithic `architectureFile` for similar sections
- **SEAD Enhancement**: Load relevant catalog architectural patterns
- **SEAD Enhancement**: Check three-tier data and deployment strategy alignment

#### 3.2 Read Architecture Documents Based on Story Type with Catalog Context

**For ALL Stories:** 
- tech-stack.md + catalog/shared-types/
- unified-project-structure.md + catalog/design-system/
- coding-standards.md + catalog/validation-schemas/
- testing-strategy.md + catalog/test-patterns/
- **SEAD Enhancement**: Load applicable catalog patterns for story domain

**Story Type Specific with SEAD Enhancements:**

**Frontend Stories:**
- user-interface-design.md + catalog/design-system/
- component-architecture.md + catalog/design-system/components/
- state-management.md + catalog/state-management/
- **SEAD Enhancement**: Validate design system catalog completeness

**Backend Stories:**
- api-design.md + catalog/api-contracts/
- data-architecture.md + catalog/data-strategy/
- integration-architecture.md + catalog/integration-patterns/
- **SEAD Enhancement**: Validate API contract catalog alignment

**Full-Stack Stories:**
- All above sections + catalog integration validation
- **SEAD Enhancement**: Cross-tier constraint validation

### 4. SEAD Mode Configuration and Constraint Setup

#### 4.1 Determine Story Mode Requirements
- Analyze story complexity and risk profile
- **SEAD Enhancement**: Evaluate appropriate SEAD mode for story:
  - **PROTOTYPE**: High uncertainty, experimental features, pattern exploration
  - **DEVELOPMENT**: Standard features, catalog extension acceptable, production-bound
  - **BUILD-TO-DEPLOY**: Critical features, strict catalog compliance, deployment-ready
- Consider user preference and project phase
- Document mode selection rationale

#### 4.2 Configure Mode-Specific Constraints
- Load mode-specific constraints from SEAD configuration
- **SEAD Enhancement**: Define validation requirements:
  - Catalog pattern usage requirements
  - Acceptable deviation policies
  - Constraint enforcement mechanisms
  - Quality gate requirements

### 5. Catalog Pattern Analysis and Component Selection

#### 5.1 Identify Required Catalog Components
- Map story requirements to catalog domains:
  - API contracts needed
  - Shared types required
  - Design system components
  - State management patterns
  - Error handling patterns
  - Validation schemas
  - Test patterns
  - Authentication patterns
  - Integration patterns

#### 5.2 Assess Catalog Completeness
- **Available Patterns**: List catalog patterns that directly support story requirements
- **Partial Patterns**: Identify patterns that need extension or modification
- **Missing Patterns**: Document patterns that need creation or capture
- **SEAD Enhancement**: Plan pattern evolution strategy for development mode

### 6. Create Story File with SEAD Enhancements

#### 6.1 Initialize Story File Structure
- Create `{epicNum}.{storyNum}.story.md` file using SEAD Story Template
- **SEAD Enhancement**: Include SEAD-specific sections:
  - SEAD Mode Configuration
  - Catalog Component References
  - Constraint Validation Criteria
  - Context Preservation Data

#### 6.2 Populate Core Story Information with Catalog Context
- **Story Title**: Clear, descriptive title
- **Epic Reference**: Link to epic with catalog domain context
- **User Story**: Enhanced with catalog component references
- **SEAD Enhancement**: Mode Rationale section explaining mode selection
- **SEAD Enhancement**: Catalog Dependencies listing required patterns

#### 6.3 Define Enhanced Acceptance Criteria
- Standard functional acceptance criteria
- **SEAD Enhancement**: Catalog Compliance Criteria:
  - Required catalog patterns to use
  - Acceptable deviation policies
  - Pattern capture requirements (development mode)
  - Constraint validation checkpoints
- **SEAD Enhancement**: Mode-Specific Validation:
  - Prototype: Pattern documentation requirements
  - Development: Catalog extension validation
  - Build-to-deploy: Strict compliance verification

#### 6.4 Create Technical Implementation Guidance
- **Architecture Context**: Relevant architecture sections with catalog pattern references
- **Technical Requirements**: Enhanced with catalog component specifications
- **Implementation Notes**: Include catalog pattern usage guidelines
- **SEAD Enhancement**: Constraint Guidance:
  - Mode-appropriate implementation flexibility
  - Catalog pattern selection rationale
  - Extension vs. reuse decision criteria

#### 6.5 Define Testing Strategy with Catalog Patterns
- **Test Requirements**: Using catalog test patterns where available
- **Test Data**: Reference catalog test data patterns
- **Validation Strategy**: Include catalog compliance testing
- **SEAD Enhancement**: Constraint Validation Testing:
  - Mode constraint compliance tests
  - Catalog pattern integration tests
  - Cross-agent context preservation tests

### 7. Apply Spec-Kit Story Quality Enhancement (NEW)

#### 7.1 Generate Given-When-Then Acceptance Scenarios
- Transform acceptance criteria into testable Given-When-Then format:
  → **Given** [precondition/context], **When** [user action], **Then** [expected outcome]
  → Each scenario must be measurably testable
  → No vague outcomes like "works well" or "is user-friendly"
  → Include edge cases and error scenarios

Example enhancement:
- Before: "User can log in successfully"  
- After: "**Given** user has valid credentials, **When** user enters email and password, **Then** system authenticates user and redirects to dashboard within 2 seconds"

#### 7.2 Business Language Validation (Spec-Kit Integration)
- Review story content for technical implementation details that don't belong:
  → Remove: Database schemas, API endpoints, code architecture
  → Keep: User value, business outcomes, measurable criteria
  → Flag: Any HOW details that should be in implementation plan instead
- Ensure stakeholder-appropriate language:
  → Non-technical stakeholders can understand story value
  → Business outcomes clearly articulated
  → User needs (WHAT) separated from implementation approach (HOW)
- Update Progress: Business Language Validation Complete

### 8. Context Preservation Setup

#### 8.1 Agent Handoff Preparation
- **SEAD Enhancement**: Context Preservation Data:
  - Catalog component IDs and versions
  - Mode configuration and constraints
  - Pattern selection rationale
  - Previous story context references
- **SEAD Enhancement**: Developer Agent Context Package:
  - Required catalog patterns
  - Mode constraint summary
  - Architecture pattern references
  - Implementation decision history

#### 8.2 Validation and Quality Assurance Setup
- **QA Context**: Define catalog compliance validation requirements
- **Review Criteria**: Include constraint adherence checkpoints
- **SEAD Enhancement**: Progressive Validation Setup:
  - Mode-appropriate quality gates
  - Catalog pattern validation points
  - Context preservation verification

### 9. Finalize Story with SEAD Compliance

#### 9.1 Final Story Validation
- Verify all SEAD sections are complete
- Validate catalog component references are accurate
- Confirm mode constraints are properly specified
- Check context preservation data is complete

#### 9.2 Story Status and Handoff
- Set initial status to "Draft" 
- **SEAD Enhancement**: Include SEAD compliance readiness indicators
- Prepare handoff notes for Developer Agent with:
  - Catalog pattern package
  - Mode constraint summary
  - Context preservation instructions

## SEAD Success Criteria

- Story includes complete catalog component references
- Mode constraints are clearly specified and justified
- Context preservation data enables seamless agent handoffs
- Catalog compliance validation criteria are defined
- Pattern evolution strategy is documented (development mode)
- Three-tier data/deployment considerations are included where relevant

## SEAD Innovation Benefits

- **Context Preservation**: Catalog references maintain context across agent sessions
- **Constraint Clarity**: Mode-based constraints eliminate ambiguous implementation decisions
- **Pattern Reuse**: Catalog patterns ensure consistency and reduce custom development
- **Quality Assurance**: Progressive validation catches issues early in development cycle
- **Knowledge Capture**: Pattern evolution strategy captures organizational learning

## Output

A comprehensive `{epicNum}.{storyNum}.story.md` file that serves as a complete implementation guide with:
- Full SEAD mode configuration and constraint awareness
- Complete catalog component integration
- Enhanced context preservation for agent handoffs
- Progressive validation criteria
- Catalog compliance and evolution guidance