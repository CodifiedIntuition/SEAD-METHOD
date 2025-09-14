<!-- Powered by SEAD-METHOD™ Core -->

# SEAD Brownfield Create Epic Task

## Purpose

To create comprehensive epic definitions for brownfield projects by analyzing existing codebase patterns, extracting domain knowledge, and organizing feature development around discovered catalog patterns. This task bridges existing system architecture with SEAD-METHOD™ catalog-driven development, ensuring epics are grounded in actual codebase realities while maintaining progressive constraint enforcement and catalog compliance.

## SEQUENTIAL Task Execution (Do not proceed until current Task is complete)

### 0. Load SEAD Configuration and Validate Brownfield Context

- Load `.sead-core/sead.config.yaml` and `.sead-core/sead-core/core-config.yaml` from the project root
- If files do not exist, HALT and inform the user: "SEAD configuration files not found. Run 'sead catalog generate --source .' to analyze existing codebase and initialize SEAD project"
- Extract key configurations: `devStoryLocation`, `prd.*`, `architecture.*`, `workflow.*`, `catalog.*`, `modes.*`
- **SEAD Enhancement**: Validate catalog generation has been completed for brownfield project
- **SEAD Enhancement**: Check catalog domain completeness based on detected codebase patterns
- **SEAD Enhancement**: Verify three-tier data and deployment strategy alignment with existing infrastructure

### 1. Analyze Existing Codebase with SEAD Catalog Context

#### 1.1 Load Existing Catalog and Pattern Analysis

- **SEAD Enhancement**: Load generated catalog from brownfield analysis
- Identify existing catalog domains populated: api-contracts, shared-types, design-system, state-management, etc.
- **SEAD Enhancement**: Review pattern extraction agent results for:
  - Discovered API patterns and contracts
  - Identified component architectures
  - Current state management approaches
  - Existing authentication patterns
  - Integration patterns and external dependencies
- **SEAD Enhancement**: Assess catalog completeness gaps for epic planning

#### 1.2 Examine Current Feature Architecture with Catalog Mapping

- **SEAD Enhancement**: Map existing features to catalog domains
- Identify feature clustering and architectural boundaries
- Analyze existing epic/feature organization if present:
  - User management and authentication features
  - Core business domain features  
  - Integration and external service features
  - Infrastructure and deployment features
- **SEAD Enhancement**: Document existing pattern usage and consistency levels
- **SEAD Enhancement**: Identify opportunities for pattern standardization

### 2. Domain Analysis and Epic Boundary Definition

#### 2.1 Identify Business Domain Boundaries with Catalog Context

- **SEAD Enhancement**: Use catalog pattern analysis to identify logical domain boundaries
- Map existing functionality to business capabilities:
  - User management and access control
  - Core business processes and data management
  - External integrations and APIs
  - Infrastructure and operational features
- **SEAD Enhancement**: Analyze catalog pattern distribution across domains
- **SEAD Enhancement**: Identify cross-domain dependencies and integration points

#### 2.2 Define Epic Scope with SEAD Mode Awareness

- **SEAD Enhancement**: Evaluate appropriate SEAD mode for each potential epic:
  - **PROTOTYPE**: Experimental features, new integrations, pattern exploration
  - **DEVELOPMENT**: Feature enhancements, pattern evolution, catalog extension
  - **BUILD-TO-DEPLOY**: Critical fixes, security updates, production optimizations
- Consider epic complexity, risk profile, and business impact
- **SEAD Enhancement**: Plan catalog evolution strategy per epic
- Define epic boundaries that align with catalog domain boundaries where possible

### 3. Stakeholder and Requirements Analysis

#### 3.1 Extract Requirements from Existing Documentation

- Review existing documentation for feature requirements:
  - README files and project documentation
  - API documentation and schemas
  - Existing user stories or feature requests
  - Issue trackers and enhancement requests
- **SEAD Enhancement**: Map documented requirements to catalog patterns
- **SEAD Enhancement**: Identify requirements that need new catalog patterns

#### 3.2 Analyze User Workflows and Use Cases with Catalog Integration

- **SEAD Enhancement**: Map user workflows to existing catalog patterns
- Identify user journey touchpoints and interaction patterns
- **SEAD Enhancement**: Assess user experience consistency opportunities through catalog standardization
- Document user value propositions for each epic area
- **SEAD Enhancement**: Consider three-tier data strategy impact on user experiences

### 4. Epic Definition with SEAD Constitutional Framework

#### 4.1 Create Epic Structure with Catalog Integration

For each identified epic:

**Epic Header with SEAD Enhancements:**
- Epic number and descriptive title
- Business domain alignment
- **SEAD Enhancement**: Primary catalog domains involved
- **SEAD Enhancement**: Recommended SEAD mode for epic stories
- **SEAD Enhancement**: Catalog pattern evolution strategy

**Epic Description with Constitutional Context:**
- Clear problem statement grounded in existing codebase analysis
- **SEAD Enhancement**: Current state catalog pattern usage
- **SEAD Enhancement**: Target state catalog completeness
- Business value and user impact
- **SEAD Enhancement**: Constitutional compliance requirements

#### 4.2 Define Epic Goals with Constraint Framework

- **Functional Goals**: What the epic will achieve for users
- **Technical Goals**: How it will improve the codebase
- **SEAD Enhancement**: Catalog Evolution Goals:
  - Patterns to standardize or consolidate
  - New patterns to capture and document
  - Integration patterns to establish
  - Quality improvements through catalog compliance
- **SEAD Enhancement**: Constitutional Compliance Goals:
  - Mode-appropriate constraint enforcement
  - Progressive validation implementation
  - Context preservation across epic stories

### 5. Story Decomposition with Catalog Pattern Mapping

#### 5.1 Identify Story Candidates with Pattern Alignment

- **SEAD Enhancement**: Break epic into stories aligned with catalog domain boundaries
- Consider atomic functionality units that align with existing patterns
- **SEAD Enhancement**: Map each story candidate to required catalog components:
  - API contracts needed
  - Shared types required
  - UI components involved
  - State management patterns
  - Authentication touchpoints
  - Integration requirements

#### 5.2 Prioritize Stories with SEAD Mode Considerations

- **SEAD Enhancement**: Prioritize based on catalog pattern dependencies
- Consider technical risk and complexity through SEAD mode lens:
  - Stories requiring new patterns (prototype mode candidates)
  - Stories extending existing patterns (development mode candidates)  
  - Stories using established patterns (build-to-deploy mode candidates)
- **SEAD Enhancement**: Plan story sequence to optimize catalog evolution
- Account for cross-story dependencies and integration points

### 6. Epic Documentation with Constitutional Framework

#### 6.1 Create Comprehensive Epic Documentation

**Epic Overview Section:**
- Epic title, number, and business domain
- **SEAD Enhancement**: Catalog domain involvement summary
- Problem statement and current state analysis
- **SEAD Enhancement**: Pattern standardization opportunities
- Success criteria and acceptance conditions

**Story Outline Section:**
- Ordered list of constituent stories with titles
- **SEAD Enhancement**: Catalog pattern mapping per story
- **SEAD Enhancement**: Recommended SEAD mode per story
- Story prioritization rationale
- **SEAD Enhancement**: Pattern dependency flow between stories

**Technical Context Section:**
- **SEAD Enhancement**: Relevant catalog patterns and components
- Architecture integration points
- **SEAD Enhancement**: Three-tier data strategy considerations
- **SEAD Enhancement**: Deployment strategy alignment
- External dependencies and integration requirements

#### 6.2 Constitutional Compliance Integration

**SEAD Mode Strategy:**
- **SEAD Enhancement**: Epic-level mode recommendations with rationale
- Story-level mode flexibility and constraint requirements
- **SEAD Enhancement**: Progressive constraint enforcement plan
- Quality gate definitions and validation checkpoints

**Catalog Evolution Plan:**
- **SEAD Enhancement**: Patterns to be standardized during epic
- **SEAD Enhancement**: New patterns to be captured and documented
- **SEAD Enhancement**: Pattern promotion strategy from prototype to production
- **SEAD Enhancement**: Cross-epic pattern sharing and reuse opportunities

### 7. Epic Validation and Quality Assurance

#### 7.1 Epic Completeness Validation

- Verify epic aligns with business domain boundaries
- **SEAD Enhancement**: Confirm catalog pattern mapping completeness
- Validate story decomposition covers all epic goals
- **SEAD Enhancement**: Check constitutional compliance requirements are specified
- Ensure epic scope is appropriate and achievable

#### 7.2 Stakeholder Review Preparation

- **SEAD Enhancement**: Prepare catalog pattern impact summary
- Create epic presentation materials highlighting:
  - Business value and user impact
  - Technical improvement opportunities
  - **SEAD Enhancement**: Pattern standardization benefits
  - **SEAD Enhancement**: Long-term catalog evolution strategy
- **SEAD Enhancement**: Include mode-based development timeline estimates

### 8. Epic Integration with SEAD Ecosystem

#### 8.1 Catalog Integration Setup

- **SEAD Enhancement**: Update catalog index with epic pattern requirements
- **SEAD Enhancement**: Create catalog pattern placeholder entries for epic development
- **SEAD Enhancement**: Establish pattern version tracking for epic lifecycle
- **SEAD Enhancement**: Configure three-tier strategy alignment per epic

#### 8.2 Context Preservation Configuration

- **SEAD Enhancement**: Epic Context Package Creation:
  - Catalog pattern baseline and target state
  - Constitutional compliance requirements
  - Cross-epic dependency mapping
  - Pattern evolution decision history
- **SEAD Enhancement**: Agent Handoff Preparation:
  - Story creation context preservation
  - Implementation agent context requirements
  - QA validation context specifications

## SEAD Success Criteria

- Epic definitions are grounded in actual codebase pattern analysis
- Catalog pattern evolution strategy is clearly defined per epic
- Constitutional compliance requirements are specified and realistic
- Story decomposition aligns with catalog domain boundaries
- Context preservation enables seamless multi-agent development
- Three-tier data and deployment strategy considerations are integrated

## SEAD Innovation Benefits

- **Brownfield Integration**: Epic planning grounded in actual codebase realities rather than theoretical requirements
- **Catalog Evolution**: Systematic approach to improving codebase consistency through epic-driven pattern standardization
- **Constitutional Governance**: Mode-based constraints ensure appropriate engineering practices for epic complexity
- **Pattern Reuse**: Epic planning optimizes catalog pattern sharing and evolution
- **Context Continuity**: Epic structure preserves domain knowledge for long-term development efficiency

## Output

Comprehensive epic definition files that bridge existing codebase patterns with SEAD-METHOD™ development approach:
- Epic documentation with catalog pattern integration
- Story outline with mode recommendations
- Constitutional compliance framework
- Catalog evolution strategy
- Context preservation setup for multi-agent development