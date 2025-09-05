<!-- Powered by SEAD-METHOD™ Core -->

# SEAD Project Manager (PM) Requirements Checklist

This checklist serves as a comprehensive framework to ensure the Product Requirements Document (PRD) and Epic definitions are complete, well-structured, and appropriately scoped for MVP development within SEAD constitutional constraints and catalog pattern compliance. The PM should systematically work through each item during the product definition process.

[[LLM: MANDATORY CONSTITUTIONAL INITIALIZATION - SEAD PM CHECKLIST

Before proceeding with this checklist, you MUST:

1. **Read Constitutional Constraints**: Load and read `/sead-core/constitutional-rules/sead-project-manager-constraints.yaml` - these are MANDATORY guidance frameworks
2. **Review Catalog Architecture**: Load and read `/sead-catalog/*/README.md` files to understand established patterns that PRD should reference
3. **Validate Mode Context**: Determine target development mode (prototype/development/build-to-deploy) for appropriate scope and constraint planning
4. **Constitutional Framework Integration**: Ensure PRD planning incorporates constitutional compliance and catalog evolution

Before proceeding with this checklist, ensure you have access to:

1. prd.md - The Product Requirements Document (check docs/prd.md)
2. Any user research, market analysis, or competitive analysis documents
3. Business goals and strategy documents with constitutional alignment considerations
4. Any existing epic definitions or user stories
5. SEAD catalog domain patterns for technical guidance integration

CRITICAL: If the PRD is missing, immediately ask the user for its location or content before proceeding.

CONSTITUTIONAL VALIDATION APPROACH:

1. **User-Centric with Constitutional Context** - Every requirement should tie back to user value within constitutional constraints
2. **MVP Focus with Catalog Alignment** - Ensure scope is truly minimal while viable and catalog-compliant
3. **Constitutional Clarity** - Requirements should be unambiguous and testable within constitutional framework
4. **Catalog Completeness** - All aspects of the product vision are covered with appropriate catalog references
5. **Constitutional Feasibility** - Requirements are technically achievable within constitutional constraints

EXECUTION MODE:
Ask the user if they want to work through the checklist:

- Section by section (interactive mode) - Review each section, present findings, get confirmation before proceeding
- All at once (comprehensive mode) - Complete full analysis and present comprehensive report at end]]

## 1. CONSTITUTIONAL FOUNDATION & CATALOG ALIGNMENT

[[LLM: SEAD PRDs must establish constitutional compliance and catalog integration from the beginning. This section is foundational to all other requirements.]]

### 1.1 Constitutional Framework Integration

- [ ] PRD acknowledges SEAD methodology and constitutional constraints as core requirements
- [ ] Development mode target is clearly specified (prototype/development/build-to-deploy) with appropriate scope implications
- [ ] Constitutional compliance is built into success criteria and acceptance metrics
- [ ] Anti-drift protection requirements are specified for technical implementation
- [ ] Escalation procedures are referenced for constitutional constraint conflicts

### 1.2 Catalog Pattern Foundation

- [ ] PRD references relevant catalog domains that will be utilized (API contracts, data strategy, etc.)
- [ ] Technical requirements align with established catalog patterns where applicable
- [ ] New catalog pattern requirements are identified and justified
- [ ] Catalog evolution opportunities are documented for project benefit
- [ ] Integration requirements reference catalog integration patterns

### 1.3 SEAD Agent Coordination Planning

- [ ] PRD identifies which SEAD agents will be required for implementation
- [ ] Agent handoff requirements and context preservation needs are specified
- [ ] Multi-agent collaboration points are identified and planned
- [ ] Constitutional validation requirements are distributed appropriately across agents

## 2. PROBLEM DEFINITION & CONTEXT

[[LLM: The foundation of any product is a clear problem statement within constitutional framework. As you review this section:

1. Verify the problem is real and worth solving within constitutional constraints
2. Check that the target audience is specific, not "everyone"
3. Ensure success metrics are measurable and constitutionally compliant, not vague aspirations
4. Look for evidence of user research, not just assumptions, with constitutional context
5. Confirm the problem-solution fit is logical within catalog capabilities]]

### 2.1 Constitutional Problem Statement

- [ ] Clear articulation of the problem being solved within constitutional framework
- [ ] Identification of who experiences the problem with constitutional considerations
- [ ] Explanation of why solving this problem matters within constitutional constraints
- [ ] Quantification of problem impact (if possible) with constitutional compliance metrics
- [ ] Differentiation from existing solutions with constitutional and catalog advantages

### 2.2 Constitutional Business Goals & Success Metrics

- [ ] Specific, measurable business objectives defined within constitutional framework
- [ ] Clear success metrics and KPIs established with constitutional compliance validation
- [ ] Metrics are tied to user and business value within constitutional constraints
- [ ] Baseline measurements identified (if applicable) with constitutional context
- [ ] Timeframe for achieving goals specified with constitutional compliance milestones

### 2.3 Constitutional User Research & Insights

- [ ] Target user personas clearly defined with constitutional constraint considerations
- [ ] User needs and pain points documented within constitutional framework
- [ ] User research findings summarized (if available) with constitutional implications
- [ ] Competitive analysis included with constitutional differentiation
- [ ] Market context provided with constitutional compliance advantages

## 3. MVP SCOPE DEFINITION

[[LLM: MVP scope is critical within constitutional constraints - too much and you waste resources, too little and you can't validate constitutionally. Check:

1. Is this truly minimal within constitutional constraints? Challenge every feature
2. Does each feature directly address the core problem within catalog capabilities?
3. Are "nice-to-haves" clearly separated from "constitutional must-haves"?
4. Is the rationale for inclusion/exclusion documented with constitutional context?
5. Can you ship this in the target timeframe with constitutional compliance?]]

### 3.1 Constitutional Core Functionality

- [ ] Essential features clearly distinguished from nice-to-haves within constitutional framework
- [ ] Features directly address defined problem statement using catalog-compliant approaches
- [ ] Each Epic ties back to specific user needs and constitutional requirements
- [ ] Features and Stories are described from user perspective with constitutional context
- [ ] Minimum requirements for success defined within constitutional constraints

### 3.2 Constitutional Scope Boundaries

- [ ] Clear articulation of what is OUT of scope with constitutional rationale
- [ ] Future enhancements section included with catalog evolution considerations
- [ ] Rationale for scope decisions documented with constitutional and catalog context
- [ ] MVP minimizes functionality while maximizing learning within constitutional constraints
- [ ] Scope has been reviewed and refined multiple times for constitutional compliance

### 3.3 Constitutional MVP Validation Approach

- [ ] Method for testing MVP success defined within constitutional framework
- [ ] Initial user feedback mechanisms planned with constitutional compliance validation
- [ ] Criteria for moving beyond MVP specified with constitutional milestone gates
- [ ] Learning goals for MVP articulated within constitutional constraints
- [ ] Timeline expectations set with constitutional compliance checkpoints

## 4. USER EXPERIENCE REQUIREMENTS

[[LLM: UX requirements bridge user needs and technical implementation within constitutional constraints. Validate:

1. User flows cover the primary use cases completely within catalog patterns
2. Edge cases are identified (even if deferred) with constitutional error handling
3. Accessibility isn't an afterthought and aligns with constitutional principles
4. Performance expectations are realistic within constitutional constraints
5. Error states and recovery are planned using catalog error handling patterns]]

### 4.1 Constitutional User Journeys & Flows

- [ ] Primary user flows documented with constitutional compliance considerations
- [ ] Entry and exit points for each flow identified with catalog pattern integration
- [ ] Decision points and branches mapped with constitutional validation gates
- [ ] Critical path highlighted with constitutional compliance milestones
- [ ] Edge cases considered with catalog error handling pattern references

### 4.2 Constitutional Usability Requirements

- [ ] Accessibility considerations documented within constitutional framework
- [ ] Platform/device compatibility specified with catalog deployment pattern references
- [ ] Performance expectations from user perspective defined within constitutional constraints
- [ ] Error handling and recovery approaches outlined using catalog error patterns
- [ ] User feedback mechanisms identified with constitutional compliance validation

### 4.3 Constitutional UI Requirements

- [ ] Information architecture outlined with catalog design system pattern references
- [ ] Critical UI components identified with catalog design pattern integration
- [ ] Visual design guidelines referenced with constitutional compliance considerations (if applicable)
- [ ] Content requirements specified within constitutional framework
- [ ] High-level navigation structure defined using catalog navigation patterns

## 5. FUNCTIONAL REQUIREMENTS

[[LLM: Functional requirements must be clear enough for implementation within constitutional constraints. Check:

1. Requirements focus on WHAT not HOW (no implementation details) while referencing catalog patterns
2. Each requirement is testable within constitutional compliance framework (how would QA verify it?)
3. Dependencies are explicit with constitutional validation (what needs to be built first?)
4. Requirements use consistent terminology aligned with catalog standards
5. Complex features are broken into manageable pieces within constitutional constraints]]

### 5.1 Constitutional Feature Completeness

- [ ] All required features for MVP documented with constitutional compliance validation
- [ ] Features have clear, user-focused descriptions with catalog pattern references
- [ ] Feature priority/criticality indicated within constitutional framework
- [ ] Requirements are testable and verifiable within constitutional compliance standards
- [ ] Dependencies between features identified with constitutional validation requirements

### 5.2 Constitutional Requirements Quality

- [ ] Requirements are specific and unambiguous within constitutional framework
- [ ] Requirements focus on WHAT not HOW while providing catalog pattern guidance
- [ ] Requirements use consistent terminology aligned with catalog standards
- [ ] Complex requirements broken into simpler parts within constitutional constraints
- [ ] Technical jargon minimized or explained with catalog pattern references

### 5.3 Constitutional User Stories & Acceptance Criteria

- [ ] Stories follow consistent format with constitutional compliance integration
- [ ] Acceptance criteria are testable within constitutional compliance framework
- [ ] Stories are sized appropriately (not too large) for constitutional validation
- [ ] Stories are independent where possible within constitutional constraints
- [ ] Stories include necessary constitutional context and catalog pattern references
- [ ] Local testability requirements (e.g., via CLI) defined in ACs for relevant backend/data stories with constitutional validation

## 6. NON-FUNCTIONAL REQUIREMENTS

[[LLM: Non-functional requirements must align with constitutional constraints and catalog patterns for sustainable implementation.]]

### 6.1 Constitutional Performance Requirements

- [ ] Response time expectations defined within constitutional framework
- [ ] Throughput/capacity requirements specified with catalog performance pattern references
- [ ] Scalability needs documented using catalog scaling patterns
- [ ] Resource utilization constraints identified within constitutional limits
- [ ] Load handling expectations set with constitutional compliance monitoring

### 6.2 Constitutional Security & Compliance

- [ ] Data protection requirements specified using catalog security patterns
- [ ] Authentication/authorization needs defined with catalog auth pattern references
- [ ] Compliance requirements documented within constitutional framework
- [ ] Security testing requirements outlined using catalog security testing patterns
- [ ] Privacy considerations addressed with constitutional compliance validation

### 6.3 Constitutional Reliability & Resilience

- [ ] Availability requirements defined within constitutional framework
- [ ] Backup and recovery needs documented using catalog deployment patterns
- [ ] Fault tolerance expectations set with catalog resilience pattern references
- [ ] Error handling requirements specified using catalog error handling patterns
- [ ] Maintenance and support considerations included within constitutional constraints

### 6.4 Constitutional Technical Constraints

- [ ] Platform/technology constraints documented with catalog pattern validation
- [ ] Integration requirements outlined using catalog integration patterns
- [ ] Third-party service dependencies identified with constitutional compliance assessment
- [ ] Infrastructure requirements specified using catalog deployment patterns
- [ ] Development environment needs identified within constitutional framework

## 7. EPIC & STORY STRUCTURE

[[LLM: Epic and story structure must support constitutional compliance and catalog pattern implementation throughout development lifecycle.]]

### 7.1 Constitutional Epic Definition

- [ ] Epics represent cohesive units of functionality within constitutional constraints
- [ ] Epics focus on user/business value delivery with constitutional compliance validation
- [ ] Epic goals clearly articulated with constitutional framework integration
- [ ] Epics are sized appropriately for incremental delivery within constitutional constraints
- [ ] Epic sequence and dependencies identified with constitutional validation checkpoints

### 7.2 Constitutional Story Breakdown

- [ ] Stories are broken down to appropriate size for constitutional validation
- [ ] Stories have clear, independent value within constitutional framework
- [ ] Stories include appropriate acceptance criteria with constitutional compliance requirements
- [ ] Story dependencies and sequence documented with constitutional validation gates
- [ ] Stories aligned with epic goals and constitutional constraints

### 7.3 Constitutional First Epic Completeness

- [ ] First epic includes all necessary setup steps with constitutional compliance foundation
- [ ] Project scaffolding and initialization addressed with catalog pattern integration
- [ ] Core infrastructure setup included using catalog deployment patterns
- [ ] Development environment setup addressed within constitutional framework
- [ ] Local testability established early with constitutional validation requirements

## 8. TECHNICAL GUIDANCE

[[LLM: Technical guidance must bridge business requirements with constitutional constraints and catalog pattern implementation.]]

### 8.1 Constitutional Architecture Guidance

- [ ] Initial architecture direction provided with catalog pattern references
- [ ] Technical constraints clearly communicated within constitutional framework
- [ ] Integration points identified using catalog integration patterns
- [ ] Performance considerations highlighted within constitutional constraints
- [ ] Security requirements articulated using catalog security patterns
- [ ] Known areas of high complexity or technical risk flagged for constitutional architectural deep-dive

### 8.2 Constitutional Technical Decision Framework

- [ ] Decision criteria for technical choices provided within constitutional constraints
- [ ] Trade-offs articulated for key decisions with catalog pattern implications
- [ ] Rationale for selecting primary approach over alternatives documented with constitutional compliance context
- [ ] Non-negotiable technical requirements highlighted within constitutional framework
- [ ] Areas requiring technical investigation identified with constitutional validation requirements
- [ ] Guidance on technical debt approach provided within constitutional constraints

### 8.3 Constitutional Implementation Considerations

- [ ] Development approach guidance provided with catalog pattern references
- [ ] Testing requirements articulated using catalog testing patterns
- [ ] Deployment expectations set using catalog deployment strategies
- [ ] Monitoring needs identified with constitutional compliance validation
- [ ] Documentation requirements specified within constitutional framework

## 9. CROSS-FUNCTIONAL REQUIREMENTS

[[LLM: Cross-functional requirements must integrate constitutional compliance across all system aspects.]]

### 9.1 Constitutional Data Requirements

- [ ] Data entities and relationships identified with catalog data strategy pattern references
- [ ] Data storage requirements specified using catalog data patterns
- [ ] Data quality requirements defined within constitutional framework
- [ ] Data retention policies identified with constitutional compliance validation
- [ ] Data migration needs addressed (if applicable) using catalog migration patterns
- [ ] Schema changes planned iteratively, tied to stories requiring them with constitutional validation

### 9.2 Constitutional Integration Requirements

- [ ] External system integrations identified with catalog integration pattern references
- [ ] API requirements documented using catalog API contract patterns
- [ ] Authentication for integrations specified using catalog auth patterns
- [ ] Data exchange formats defined within constitutional constraints
- [ ] Integration testing requirements outlined using catalog integration testing patterns

### 9.3 Constitutional Operational Requirements

- [ ] Deployment frequency expectations set within constitutional framework
- [ ] Environment requirements defined using catalog deployment patterns
- [ ] Monitoring and alerting needs identified with constitutional compliance validation
- [ ] Support requirements documented within constitutional constraints
- [ ] Performance monitoring approach specified using catalog monitoring patterns

## 10. CLARITY & COMMUNICATION

[[LLM: Communication must ensure constitutional understanding and catalog pattern awareness across all stakeholders.]]

### 10.1 Constitutional Documentation Quality

- [ ] Documents use clear, consistent language with constitutional framework terminology
- [ ] Documents are well-structured and organized within constitutional guidelines
- [ ] Technical terms are defined where necessary with catalog pattern references
- [ ] Diagrams/visuals included where helpful with constitutional compliance context
- [ ] Documentation is versioned appropriately within constitutional framework

### 10.2 Constitutional Stakeholder Alignment

- [ ] Key stakeholders identified with constitutional responsibility assignments
- [ ] Stakeholder input incorporated with constitutional compliance validation
- [ ] Potential areas of disagreement addressed within constitutional framework
- [ ] Communication plan for updates established with constitutional milestone integration
- [ ] Approval process defined within constitutional constraints

## CONSTITUTIONAL PRD & EPIC VALIDATION SUMMARY

[[LLM: FINAL SEAD PM CHECKLIST REPORT GENERATION

Create a comprehensive constitutional validation report that includes:

1. Constitutional Compliance Executive Summary
   - Overall PRD completeness with constitutional integration (percentage)
   - MVP scope appropriateness with constitutional constraints (Too Large/Just Right/Too Small)
   - Readiness for architecture phase with catalog pattern foundation (Ready/Nearly Ready/Not Ready)
   - Most critical constitutional gaps or catalog integration concerns

2. Constitutional Category Analysis Table
   Fill in the actual table with:
   - Status: PASS (90%+ complete with constitutional integration), PARTIAL (60-89% with some constitutional gaps), FAIL (<60% with major constitutional issues)
   - Critical Issues: Specific constitutional problems that block progress

3. Constitutional Top Issues by Priority
   - CONSTITUTIONAL BLOCKERS: Must fix constitutional issues before architect can proceed
   - CATALOG INTEGRATION HIGH: Should fix catalog alignment for quality
   - CONSTITUTIONAL MEDIUM: Would improve constitutional clarity
   - CATALOG LOW: Nice to have catalog enhancements

4. Constitutional MVP Scope Assessment
   - Features that might be cut for true MVP with constitutional compliance
   - Missing features that are essential for constitutional validation
   - Constitutional complexity concerns and constraints
   - Timeline realism with constitutional compliance milestones

5. Constitutional Technical Readiness
   - Clarity of constitutional technical constraints
   - Identified constitutional technical risks
   - Areas needing architect investigation with catalog pattern requirements

6. Constitutional Recommendations
   - Specific actions to address each constitutional blocker
   - Suggested catalog pattern improvements
   - Constitutional compliance next steps

After presenting the report, ask if the user wants:

- Detailed analysis of any failed constitutional sections
- Suggestions for improving specific catalog integration areas  
- Help with refining MVP scope within constitutional constraints]]

### Constitutional Category Statuses

| Category                                    | Status | Critical Constitutional Issues |
| ------------------------------------------- | ------ | ------------------------------ |
| 1. Constitutional Foundation & Catalog Alignment | _TBD_  |                                |
| 2. Problem Definition & Context             | _TBD_  |                                |
| 3. MVP Scope Definition                     | _TBD_  |                                |
| 4. User Experience Requirements             | _TBD_  |                                |
| 5. Functional Requirements                  | _TBD_  |                                |
| 6. Non-Functional Requirements              | _TBD_  |                                |
| 7. Epic & Story Structure                   | _TBD_  |                                |
| 8. Technical Guidance                       | _TBD_  |                                |
| 9. Cross-Functional Requirements            | _TBD_  |                                |
| 10. Clarity & Communication                 | _TBD_  |                                |

### Constitutional Deficiencies

(To be populated during constitutional validation)

### Constitutional Recommendations

(To be populated during constitutional validation)

### Constitutional Final Decision

- **CONSTITUTIONALLY READY FOR ARCHITECT**: The PRD and epics are comprehensive, properly structured, and ready for architectural design with full constitutional compliance and catalog integration.
- **NEEDS CONSTITUTIONAL REFINEMENT**: The requirements documentation requires additional constitutional work to address the identified constitutional deficiencies and catalog integration gaps.