# /sead-document-project Task

When this command is used, execute the following task:

<!-- Powered by SEAD-METHOD™ Core -->

# SEAD Document an Existing Project

## Purpose

Generate comprehensive catalog-aware documentation for existing projects optimized for SEAD AI development agents. This task creates structured reference materials that enable SEAD agents to understand project context, conventions, catalog patterns, and constraints for effective contribution to any codebase while maintaining constitutional compliance and catalog evolution opportunities.

## SEAD Mode Awareness

This documentation task operates with mode-sensitive analysis:
- **PROTOTYPE Mode**: Focus on pattern discovery and experimental documentation
- **DEVELOPMENT Mode**: Catalog pattern mapping, extension opportunities, comprehensive analysis
- **BUILD-TO-DEPLOY Mode**: Strict catalog compliance assessment, deployment readiness validation

## Task Instructions

### 0. SEAD Configuration and Catalog Context

**MANDATORY CATALOG READS** (Constitutional Requirement):
- Read `{catalogPath}/api-contracts/README.md` for API pattern comparison
- Read `{catalogPath}/shared-types/README.md` for type system pattern analysis
- Read `{catalogPath}/design-system/README.md` for UI pattern identification
- Read `{catalogPath}/state-management/README.md` for state pattern discovery
- Read `{catalogPath}/error-handling/README.md` for error pattern mapping
- Read `{catalogPath}/integration-patterns/README.md` for integration pattern comparison
- Document catalog versions being analyzed against

### 1. Initial SEAD Project Analysis

**CRITICAL:** First, check if a PRD or requirements document exists in context. If yes, use it to focus your documentation efforts on relevant areas only AND identify catalog integration opportunities.

**IF PRD EXISTS**:

- Review the PRD to understand what enhancement/feature is planned
- Identify which modules, services, or areas will be affected
- **SEAD Enhancement**: Map planned features to required catalog patterns
- **SEAD Enhancement**: Identify catalog gaps that need to be filled
- Focus documentation ONLY on these relevant areas
- Skip unrelated parts of the codebase to keep docs lean
- **SEAD Enhancement**: Document catalog evolution opportunities from planned enhancement

**IF NO PRD EXISTS**:
Ask the user:

"I notice you haven't provided a PRD or requirements document. For SEAD-METHOD documentation that includes catalog pattern analysis, I recommend one of these options:

1. **Create a PRD first** - Would you like me to help create a brownfield PRD before documenting? This helps focus documentation on relevant areas and catalog integration opportunities.

2. **Provide existing requirements** - Do you have a requirements document, epic, or feature description you can share?

3. **Describe the focus with SEAD context** - Can you briefly describe what enhancement or feature you're planning? For example:
   - 'Adding payment processing to the user service' → Will map to catalog auth-patterns, api-contracts, integration-patterns
   - 'Refactoring the authentication module' → Will assess catalog auth-patterns compliance
   - 'Integrating with a new third-party API' → Will evaluate catalog integration-patterns alignment

4. **Document everything with catalog analysis** - Or should I proceed with comprehensive documentation of the entire codebase including catalog pattern mapping? (Note: This may create extensive documentation for large projects)

5. **Initialize SEAD catalog** - Would you like me to generate a catalog from this existing codebase using agent-driven analysis?

Please let me know your preference, or I can proceed with full SEAD documentation if you prefer."

Based on their response:

- If they choose option 1-4: Use that context to focus documentation with catalog integration
- If they choose option 5: Activate catalog generation workflow first
- If comprehensive: Proceed with full SEAD analysis below

Begin by conducting SEAD-enhanced analysis of the existing project. Use available tools to:

1. **Project Structure Discovery**: Examine the root directory structure, identify main folders, and understand the overall organization with catalog structure pattern comparison
2. **Technology Stack Identification**: Look for package.json, requirements.txt, etc. to identify languages, frameworks, and dependencies with catalog compatibility assessment  
3. **Build System Analysis**: Find build scripts, CI/CD configurations, and development commands with catalog deployment pattern comparison
4. **Existing Documentation Review**: Check for README files, docs folders, and any existing documentation
5. **Code Pattern Analysis**: Sample key files to understand coding patterns, naming conventions, and architectural approaches with catalog pattern matching
6. **SEAD Enhancement**: Catalog Pattern Discovery - Identify existing patterns that match or could be evolved into catalog patterns

Ask the user these SEAD-enhanced elicitation questions:

- What is the primary purpose of this project?
- Are there any specific areas of the codebase that are particularly complex or important for SEAD agents to understand?
- What types of tasks do you expect SEAD AI agents to perform on this project? (e.g., bug fixes, feature additions, refactoring, testing with catalog patterns)
- **SEAD Enhancement**: Do you have any existing design systems, API standards, or coding patterns that should be considered for catalog integration?
- **SEAD Enhancement**: What development mode would be most appropriate for future work on this project? (prototype/development/build-to-deploy)
- Are there any existing documentation standards or formats you prefer?
- What level of technical detail should the documentation target? (junior developers, senior developers, mixed team)
- Is there a specific feature or enhancement you're planning? (This helps focus documentation and catalog integration opportunities)

### 2. Deep SEAD-Enhanced Codebase Analysis

CRITICAL: Before generating documentation, conduct extensive SEAD-aware analysis of the existing codebase:

1. **Explore Key Areas with Catalog Pattern Mapping**:
   - Entry points (main files, index files, app initializers) → Catalog structure patterns
   - Configuration files and environment setup → Catalog deployment patterns
   - Package dependencies and versions → Catalog compatibility assessment
   - Build and deployment configurations → Catalog deployment strategy alignment
   - Test suites and coverage → Catalog test pattern comparison
   - **SEAD Enhancement**: API endpoints → Catalog api-contracts pattern matching
   - **SEAD Enhancement**: UI components → Catalog design-system pattern analysis
   - **SEAD Enhancement**: Error handling → Catalog error-handling pattern evaluation
   - **SEAD Enhancement**: Data validation → Catalog validation-schemas assessment

2. **Ask SEAD-Enhanced Clarifying Questions**:
   - "I see you're using [technology X]. Are there any custom patterns or conventions that could be evolved into catalog patterns?"
   - "What are the most critical/complex parts of this system that developers struggle with that might benefit from catalog patterns?"
   - "Are there any undocumented 'tribal knowledge' areas I should capture and potentially evolve into catalog patterns?"
   - "What technical debt or known issues should I document, and could catalog patterns help resolve them?"
   - "Which parts of the codebase change most frequently and might benefit from catalog standardization?"
   - **SEAD Enhancement**: "What development constraints should future SEAD agents be aware of?"

3. **Map the Reality with Catalog Pattern Assessment**:
   - Identify ACTUAL patterns used (not theoretical best practices) and assess catalog compatibility
   - Find where key business logic lives and evaluate catalog pattern opportunities
   - Locate integration points and external dependencies with catalog integration pattern analysis
   - Document workarounds and technical debt that catalog patterns might resolve
   - Note areas that differ from standard patterns and assess catalog evolution potential
   - **SEAD Enhancement**: Create pattern inventory for potential catalog promotion

**IF PRD PROVIDED**: Also analyze what would need to change for the enhancement AND what catalog patterns would be required

### 3. SEAD-Enhanced Core Documentation Generation

Generate a comprehensive SEAD-AWARE BROWNFIELD architecture document that reflects the ACTUAL state of the codebase with catalog pattern analysis and evolution opportunities.

**CRITICAL**: This is NOT an aspirational architecture document. Document what EXISTS, including:

- Technical debt and workarounds with catalog pattern remediation opportunities
- Inconsistent patterns between different parts with catalog standardization potential
- Legacy code that can't be changed and its catalog pattern implications
- Integration constraints and catalog integration pattern applicability
- Performance bottlenecks and catalog performance pattern opportunities
- **SEAD Enhancement**: Existing patterns that could be evolved into catalog components
- **SEAD Enhancement**: Catalog compliance gaps and evolution roadmap

**SEAD Document Structure**:

```markdown
# [Project Name] SEAD Brownfield Architecture Document

## Introduction

This document captures the CURRENT STATE of the [Project Name] codebase with SEAD catalog pattern analysis, including technical debt, workarounds, real-world patterns, and catalog evolution opportunities. It serves as a reference for SEAD AI agents working on enhancements with constitutional compliance and catalog awareness.

### Document Scope

[If PRD provided: "Focused on areas relevant to: {enhancement description} with catalog pattern integration analysis"]
[If no PRD: "Comprehensive documentation of entire system with catalog pattern mapping"]

### SEAD Context
- **Analysis Mode**: {prototype|development|build-to-deploy}
- **Catalog Version**: {catalog-version}
- **Constitutional Compliance**: All mandatory catalog reads completed
- **Pattern Discovery Focus**: [Description of pattern analysis approach]

### Change Log

| Date   | Version | Description                 | Author    | SEAD Context |
| ------ | ------- | --------------------------- | --------- | ------------ |
| [Date] | 1.0     | Initial SEAD brownfield analysis | [SEAD Analyst] | Catalog pattern discovery |

## Quick Reference - Key Files and Catalog Pattern Mapping

### Critical Files for Understanding the System

- **Main Entry**: `src/index.js` → Maps to catalog: {structure patterns}
- **Configuration**: `config/app.config.js`, `.env.example` → Maps to catalog: {deployment patterns}
- **Core Business Logic**: `src/services/`, `src/domain/` → Maps to catalog: {api-contracts, validation-schemas}
- **API Definitions**: `src/routes/` → Maps to catalog: {api-contracts patterns}
- **Database Models**: `src/models/` → Maps to catalog: {shared-types patterns}
- **Error Handling**: `src/utils/errorHandler.js` → Maps to catalog: {error-handling patterns}
- **UI Components**: `src/components/` → Maps to catalog: {design-system patterns}

### SEAD Catalog Pattern Analysis

**Existing Patterns Discovered:**
- `custom-api-middleware` → Could evolve to catalog: api-contracts/middleware-patterns
- `user-validation-logic` → Could evolve to catalog: validation-schemas/user-validation
- `error-response-format` → Could evolve to catalog: error-handling/api-errors

**Catalog Integration Opportunities:**
- API response standardization using catalog api-contracts
- Error handling consistency using catalog error-handling patterns
- UI component standardization using catalog design-system patterns

## High Level Architecture with Catalog Assessment

### Technical Summary with SEAD Context

Current architecture assessment against SEAD catalog patterns and constitutional requirements.

### Actual Tech Stack with Catalog Compatibility

| Category  | Technology | Version | SEAD Catalog Compatibility | Notes |
| --------- | ---------- | ------- | ------------------------- | ----- |
| Runtime   | Node.js    | 16.x    | ✓ Compatible with api-contracts | [Constraints] |
| Framework | Express    | 4.18.2  | ✓ Compatible with api-contracts | Custom middleware could use catalog patterns |
| Database  | PostgreSQL | 13      | ✓ Compatible with shared-types | Could benefit from catalog data-strategy patterns |

## SEAD Pattern Discovery and Catalog Mapping

### Discovered Patterns Eligible for Catalog Promotion

1. **API Response Pattern**
   - **Location**: `src/utils/responseFormatter.js`
   - **Description**: Consistent API response structure
   - **Catalog Domain**: api-contracts/response-patterns
   - **Promotion Priority**: High
   - **Usage Frequency**: Used across all controllers

2. **Authentication Middleware Pattern**
   - **Location**: `src/middleware/auth.js`
   - **Description**: JWT validation with role checking
   - **Catalog Domain**: auth-patterns/jwt-middleware
   - **Promotion Priority**: Medium
   - **Usage Frequency**: Used on 80% of endpoints

### Catalog Compliance Assessment

**Current Compliance Score**: 3/10 (Many opportunities for catalog integration)

**Compliance Areas:**
- ✗ API Contracts: Custom format, not using catalog patterns
- ✗ Error Handling: Inconsistent error responses across services
- ✗ Validation: Custom validation logic, not using catalog schemas
- ✓ Structure: Follows reasonable project organization
- ✗ Testing: No test patterns, missing catalog test integration

### Technical Debt with Catalog Remediation Opportunities

**Critical Technical Debt:**
1. **Payment Service**: Legacy code in `src/legacy/payment.js`
   - **Catalog Opportunity**: Could be refactored using catalog integration-patterns
   - **SEAD Constraint**: In build-to-deploy mode, would require catalog compliance
   - **Remediation**: Create catalog integration-patterns/payment-gateway

2. **User Service**: Inconsistent with other services
   - **Catalog Opportunity**: Could be standardized using catalog api-contracts
   - **SEAD Constraint**: Development mode would allow tracked extensions
   - **Remediation**: Evolve to catalog api-contracts/user-service

## SEAD Constitutional Compliance Assessment

### Constitutional Principles Evaluation

1. **Catalog-First**: ❌ Current implementation ignores potential catalog patterns
2. **Specification-Driven**: ⚠️ Partial - has API docs but not catalog-aligned
3. **Progressive Constraints**: ✅ Could implement with mode configuration
4. **Context Preservation**: ❌ No agent handoff context currently
5. **Collaborative Governance**: ⚠️ Has code review but no catalog governance
6. **Quality Gates**: ⚠️ Basic testing but no catalog compliance checks
7. **Continuous Evolution**: ❌ No pattern evolution process

### Recommended SEAD Mode for Future Development

**Suggested Mode**: DEVELOPMENT
- **Rationale**: Existing codebase has established patterns that could be evolved
- **Catalog Strategy**: Allow extensions while tracking for promotion
- **Constraint Level**: Medium - enforce catalog usage where available, track extensions
- **Evolution Path**: 6-month plan to promote discovered patterns to catalog

## If Enhancement PRD Provided - SEAD Impact Analysis

### Files That Will Need Modification with Catalog Integration

Based on the enhancement requirements and catalog patterns:

- `src/services/userService.js` - Add new user fields using catalog shared-types
- `src/models/User.js` - Update schema using catalog validation-schemas
- `src/routes/userRoutes.js` - New endpoints following catalog api-contracts
- `src/middleware/validation.js` - Use catalog validation-schemas patterns

### New SEAD Components Needed

- `src/services/newFeatureService.js` - Implement using catalog api-contracts patterns
- `src/models/NewFeature.js` - Create using catalog shared-types patterns
- Catalog pattern extensions to track for future promotion

### SEAD Integration Considerations

- Must integrate with existing auth middleware (opportunity for catalog auth-patterns)
- Should follow catalog response format patterns (upgrade from custom format)
- Will create new patterns suitable for catalog promotion (development mode)

## SEAD Development Guidelines

### Constitutional Requirements for Future Development

1. **Mandatory Catalog Reads**: All agents must read relevant catalog patterns
2. **Mode Constraint Enforcement**: Respect development mode extension policies
3. **Pattern Evolution Tracking**: Document new patterns for catalog promotion
4. **Context Preservation**: Maintain agent handoff context for seamless work
5. **Quality Gate Compliance**: Include catalog compliance in all reviews

### Catalog Evolution Roadmap

**Phase 1 (0-3 months): Pattern Documentation**
- Document existing patterns identified in analysis
- Create catalog components for high-priority patterns
- Establish catalog governance process

**Phase 2 (3-6 months): Pattern Implementation**
- Refactor key services to use catalog patterns
- Implement catalog test patterns
- Add catalog compliance validation

**Phase 3 (6-12 months): Full Catalog Integration**
- Transition to development mode with catalog enforcement
- Consider build-to-deploy mode for critical components
- Complete catalog pattern coverage

## Appendix - SEAD Implementation Support

### SEAD CLI Integration

```bash
# Initialize SEAD for this project
sead init --mode development --catalog-generate

# Generate catalog from existing patterns
sead catalog generate --source . --interactive

# Validate catalog compliance
sead validate --mode development
```

### Constitutional Compliance Checklist for Agents

Before starting work on this codebase, SEAD agents must:

- [ ] Read all relevant catalog pattern documentation
- [ ] Understand current development mode constraints  
- [ ] Review pattern evolution opportunities
- [ ] Confirm context preservation requirements
- [ ] Validate quality gate expectations
```

### 4. SEAD Document Delivery with Catalog Context

1. **In Web UI**:
   - Present the entire SEAD document in one response (or multiple if too long)
   - Tell user to copy and save as `docs/sead-brownfield-architecture.md`
   - Mention catalog generation opportunity: "Would you like me to generate a SEAD catalog from the patterns I discovered?"

2. **In IDE Environment**:
   - Create the document as `docs/sead-brownfield-architecture.md`
   - Include catalog pattern files if discovered patterns are suitable for immediate promotion
   - Inform user this document contains architectural information with SEAD catalog integration guidance

The document should be comprehensive enough that future SEAD agents can understand:

- The actual state of the system with catalog pattern opportunities
- Where to find key files and logic with catalog pattern mappings
- What technical debt exists and catalog remediation opportunities
- What constitutional constraints must be respected
- If PRD provided: What needs to change for the enhancement with catalog integration

### 5. SEAD Quality Assurance with Constitutional Compliance

CRITICAL: Before finalizing the document:

1. **Accuracy Check**: Verify all technical details match the actual codebase
2. **Catalog Pattern Validation**: Confirm discovered patterns are accurately described and viable for catalog promotion
3. **Constitutional Compliance**: Verify all SEAD constitutional requirements are addressed
4. **Completeness Review**: Ensure all major system components are documented with catalog context
5. **Focus Validation**: If user provided scope, verify relevant areas are emphasized with catalog integration opportunities
6. **Clarity Assessment**: Check that explanations are clear for SEAD agents with catalog awareness
7. **Navigation**: Ensure document has clear section structure for easy reference

## Success Criteria

- Single comprehensive SEAD brownfield architecture document created
- Document reflects REALITY including technical debt and catalog remediation opportunities  
- All discovered patterns suitable for catalog promotion are documented
- Constitutional compliance assessment completed
- Catalog integration opportunities identified and prioritized
- SEAD mode recommendation provided with rationale
- Pattern evolution roadmap created
- Document enables SEAD agents to navigate and understand the actual codebase with catalog context
- Technical constraints and constitutional requirements are clearly documented

## SEAD Constitutional Requirements

This task must adhere to SEAD constitutional principles:
1. **Catalog-First**: Identify existing patterns for catalog integration throughout analysis
2. **Specification-Driven**: All technical assessments reference existing documentation and catalog patterns
3. **Progressive Constraints**: Recommend appropriate SEAD mode based on project maturity
4. **Context Preservation**: Document context needed for future agent handoffs
5. **Collaborative Governance**: Enable team participation in catalog evolution process
6. **Quality Gates**: Define catalog compliance checkpoints for future development
7. **Continuous Evolution**: Create roadmap for catalog pattern evolution and integration