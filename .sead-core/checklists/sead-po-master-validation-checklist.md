<!-- Powered by SEAD-METHOD™ Core -->

# SEAD Product Owner (PO) Master Validation Checklist

This checklist serves as a comprehensive framework for the SEAD Product Owner to validate project plans before development execution within constitutional constraints and catalog pattern compliance. It adapts intelligently based on project type (greenfield vs brownfield) and includes UI/UX considerations when applicable.

[[LLM: MANDATORY CONSTITUTIONAL INITIALIZATION - SEAD PO MASTER CHECKLIST

Before proceeding, you MUST:

1. **Read Constitutional Constraints**: Load and read `/sead-core/constitutional-rules/sead-product-owner-constraints.yaml` - these are MANDATORY validation constraints
2. **Review Catalog Standards**: Load and read relevant `/sead-catalog/*/README.md` files to understand established patterns for validation
3. **Validate Constitutional Context**: Apply constitutional compliance requirements throughout validation process
4. **Assess Catalog Integration**: Ensure all plans integrate properly with established catalog patterns

PROJECT TYPE DETECTION:
First, determine the project type by checking:

1. Is this a GREENFIELD project (new from scratch)?
   - Look for: New project initialization, no existing codebase references
   - Check for: prd.md, architecture.md, new project setup stories

2. Is this a BROWNFIELD project (enhancing existing system)?
   - Look for: References to existing codebase, enhancement/modification language
   - Check for: brownfield-prd.md, brownfield-architecture.md, existing system analysis

3. Does the project include UI/UX components?
   - Check for: frontend-architecture.md, UI/UX specifications, design files
   - Look for: Frontend stories, component specifications, user interface mentions

CONSTITUTIONAL DOCUMENT REQUIREMENTS:
Based on project type, ensure you have access to:

For GREENFIELD projects:
- prd.md - The Product Requirements Document with constitutional compliance
- architecture.md - The system architecture with catalog pattern references
- frontend-architecture.md - If UI/UX is involved with catalog design patterns
- All epic and story definitions with constitutional validation

For BROWNFIELD projects:
- brownfield-prd.md - The brownfield enhancement requirements with constitutional constraints
- brownfield-architecture.md - The enhancement architecture with catalog integration
- Existing project codebase access with constitutional compliance assessment (CRITICAL)
- Current deployment configuration and infrastructure details with catalog validation
- Database schemas, API documentation, monitoring setup with constitutional compliance

CONSTITUTIONAL SKIP INSTRUCTIONS:
- Skip sections marked [[BROWNFIELD ONLY]] for greenfield projects
- Skip sections marked [[GREENFIELD ONLY]] for brownfield projects  
- Skip sections marked [[UI/UX ONLY]] for backend-only projects
- Note all skipped sections in your final constitutional report

CONSTITUTIONAL VALIDATION APPROACH:
1. **Constitutional Analysis First** - Thoroughly analyze each item against constitutional constraints and catalog compliance
2. **Evidence-Based with Catalog References** - Cite specific sections or code when validating with catalog pattern references
3. **Constitutional Critical Thinking** - Question assumptions and identify constitutional gaps
4. **Constitutional Risk Assessment** - Consider what could go wrong with each decision within constitutional framework

EXECUTION MODE:
Ask the user if they want to work through the checklist:
- Section by section (interactive mode) - Review each section, get confirmation before proceeding
- All at once (comprehensive mode) - Complete full analysis and present constitutional report at end]]

## 1. CONSTITUTIONAL COMPLIANCE & CATALOG FOUNDATION

[[LLM: This section ensures all project plans align with SEAD constitutional requirements and catalog standards before traditional validation begins.]]

### 1.1 Constitutional Framework Validation

- [ ] Project plans explicitly acknowledge SEAD constitutional constraints and compliance requirements
- [ ] Development mode is clearly specified (prototype/development/build-to-deploy) with appropriate constitutional constraints
- [ ] Anti-drift protection measures are built into project planning and validation procedures
- [ ] Constitutional escalation procedures are referenced and integrated into project workflows
- [ ] Quality gates include constitutional compliance validation at appropriate milestones

### 1.2 Catalog Pattern Integration Assessment

- [ ] All technical approaches reference and align with established catalog patterns from appropriate domains
- [ ] New catalog pattern requirements are identified, documented, and justified within constitutional framework
- [ ] Integration between different catalog domains is properly planned and validated
- [ ] Catalog evolution opportunities are documented and integrated into project timeline
- [ ] Pattern consistency is maintained across all planned components and integrations

### 1.3 Constitutional Project Setup Validation

- [ ] Project setup respects constitutional constraints for selected development mode
- [ ] Agent coordination requirements are properly planned within constitutional framework
- [ ] Context preservation mechanisms are built into project handoff procedures
- [ ] Constitutional validation checkpoints are integrated throughout project lifecycle

## 2. PROJECT SETUP & INITIALIZATION

[[LLM: Project setup is the foundation and must align with constitutional requirements. For greenfield, ensure clean start with constitutional compliance. For brownfield, ensure safe integration with existing system while maintaining constitutional constraints. Verify setup matches project type and constitutional requirements.]]

### 2.1 Constitutional Project Scaffolding [[GREENFIELD ONLY]]

- [ ] Epic 1 includes explicit steps for project creation/initialization with constitutional compliance foundation
- [ ] If using a starter template, steps for cloning/setup include constitutional validation procedures
- [ ] If building from scratch, all necessary scaffolding steps are defined with catalog pattern integration
- [ ] Initial README or documentation setup includes constitutional compliance guidelines
- [ ] Repository setup and initial commit processes are defined with catalog pattern references

### 2.2 Constitutional Existing System Integration [[BROWNFIELD ONLY]]

- [ ] Existing project analysis has been completed and documented with constitutional compliance assessment
- [ ] Integration points with current system are identified with catalog pattern validation
- [ ] Development environment preserves existing functionality while enabling constitutional compliance
- [ ] Local testing approach validated for existing features with constitutional constraint verification
- [ ] Rollback procedures defined for each integration point with constitutional compliance restoration

### 2.3 Constitutional Development Environment

- [ ] Local development environment setup is clearly defined with constitutional compliance requirements
- [ ] Required tools and versions are specified with catalog pattern compatibility validation
- [ ] Steps for installing dependencies include constitutional constraint verification
- [ ] Configuration files are addressed appropriately with catalog deployment pattern references
- [ ] Development server setup includes constitutional validation and catalog pattern integration

### 2.4 Constitutional Core Dependencies

- [ ] All critical packages/libraries are installed early with constitutional compliance validation
- [ ] Package management properly addresses constitutional constraint requirements
- [ ] Version specifications are appropriately defined within constitutional version constraint requirements
- [ ] Dependency conflicts or special requirements noted with constitutional compliance assessment
- [ ] [[BROWNFIELD ONLY]] Version compatibility with existing stack verified with constitutional constraint maintenance

## 3. INFRASTRUCTURE & DEPLOYMENT

[[LLM: Infrastructure must exist before use and align with catalog deployment patterns. For brownfield, must integrate with existing infrastructure without breaking constitutional compliance.]]

### 3.1 Constitutional Database & Data Store Setup

- [ ] Database selection/setup occurs before operations with catalog data strategy pattern compliance
- [ ] Schema definitions created before data operations with constitutional validation requirements
- [ ] Migration strategies defined if applicable with catalog migration pattern references
- [ ] Seed data or initial data setup included if needed with constitutional compliance validation
- [ ] [[BROWNFIELD ONLY]] Database migration risks identified and mitigated with constitutional constraint preservation
- [ ] [[BROWNFIELD ONLY]] Backward compatibility ensured with constitutional compliance maintenance

### 3.2 Constitutional API & Service Configuration

- [ ] API frameworks set up before implementing endpoints with catalog API contract pattern compliance
- [ ] Service architecture established before implementing services with constitutional validation
- [ ] Authentication framework set up before protected routes with catalog auth pattern integration
- [ ] Middleware and common utilities created before use with catalog pattern references
- [ ] [[BROWNFIELD ONLY]] API compatibility with existing system maintained with constitutional compliance
- [ ] [[BROWNFIELD ONLY]] Integration with existing authentication preserved with constitutional validation

### 3.3 Constitutional Deployment Pipeline

- [ ] CI/CD pipeline established before deployment actions with catalog deployment pattern integration
- [ ] Infrastructure as Code (IaC) set up before use with constitutional compliance validation
- [ ] Environment configurations defined early with catalog deployment strategy references
- [ ] Deployment strategies defined before implementation with constitutional constraint compliance
- [ ] [[BROWNFIELD ONLY]] Deployment minimizes downtime while maintaining constitutional compliance
- [ ] [[BROWNFIELD ONLY]] Blue-green or canary deployment implemented with constitutional validation

### 3.4 Constitutional Testing Infrastructure

- [ ] Testing frameworks installed before writing tests with catalog testing pattern compliance
- [ ] Test environment setup precedes test implementation with constitutional validation integration
- [ ] Mock services or data defined before testing with catalog testing pattern references
- [ ] [[BROWNFIELD ONLY]] Regression testing covers existing functionality with constitutional compliance validation
- [ ] [[BROWNFIELD ONLY]] Integration testing validates new-to-existing connections with constitutional constraint verification

## 4. EXTERNAL DEPENDENCIES & INTEGRATIONS

[[LLM: External dependencies often block progress and must comply with constitutional constraints. For brownfield, ensure new dependencies don't conflict with existing ones or constitutional requirements.]]

### 4.1 Constitutional Third-Party Services

- [ ] Account creation steps identified for required services with constitutional compliance validation
- [ ] API key acquisition processes defined with constitutional security constraint requirements
- [ ] Steps for securely storing credentials included with catalog security pattern references
- [ ] Fallback or offline development options considered with constitutional resilience requirements
- [ ] [[BROWNFIELD ONLY]] Compatibility with existing services verified with constitutional compliance maintenance
- [ ] [[BROWNFIELD ONLY]] Impact on existing integrations assessed with constitutional constraint validation

### 4.2 Constitutional External APIs

- [ ] Integration points with external APIs clearly identified with catalog integration pattern references
- [ ] Authentication with external services properly sequenced with constitutional security requirements
- [ ] API limits or constraints acknowledged with constitutional resilience planning
- [ ] Backup strategies for API failures considered with catalog resilience pattern integration
- [ ] [[BROWNFIELD ONLY]] Existing API dependencies maintained with constitutional compliance validation

### 4.3 Constitutional Infrastructure Services

- [ ] Cloud resource provisioning properly sequenced with catalog deployment pattern compliance
- [ ] DNS or domain registration needs identified with constitutional compliance requirements
- [ ] Email or messaging service setup included if needed with catalog integration pattern references
- [ ] CDN or static asset hosting setup precedes use with constitutional performance requirements
- [ ] [[BROWNFIELD ONLY]] Existing infrastructure services preserved with constitutional compliance maintenance

## 5. UI/UX CONSIDERATIONS [[UI/UX ONLY]]

[[LLM: Only evaluate this section if the project includes user interface components with catalog design pattern compliance. Skip entirely for backend-only projects.]]

### 5.1 Constitutional Design System Setup

- [ ] UI framework and libraries selected and installed early with catalog design pattern compliance
- [ ] Design system or component library established with constitutional validation requirements
- [ ] Styling approach (CSS modules, styled-components, etc.) defined with catalog design pattern references
- [ ] Responsive design strategy established with constitutional accessibility requirements
- [ ] Accessibility requirements defined upfront with catalog accessibility pattern integration

### 5.2 Constitutional Frontend Infrastructure

- [ ] Frontend build pipeline configured before development with catalog deployment pattern compliance
- [ ] Asset optimization strategy defined with constitutional performance requirements
- [ ] Frontend testing framework set up with catalog testing pattern integration
- [ ] Component development workflow established with constitutional validation procedures
- [ ] [[BROWNFIELD ONLY]] UI consistency with existing system maintained with constitutional compliance

### 5.3 Constitutional User Experience Flow

- [ ] User journeys mapped before implementation with catalog navigation pattern references
- [ ] Navigation patterns defined early with constitutional usability requirements
- [ ] Error states and loading states planned with catalog error handling pattern integration
- [ ] Form validation patterns established with catalog validation pattern references
- [ ] [[BROWNFIELD ONLY]] Existing user workflows preserved or migrated with constitutional compliance validation

## 6. USER/AGENT RESPONSIBILITY

[[LLM: Clear ownership prevents confusion and must align with constitutional agent coordination requirements. Ensure tasks are assigned appropriately based on what only humans can do within constitutional framework.]]

### 6.1 Constitutional User Actions

- [ ] User responsibilities limited to human-only tasks within constitutional framework
- [ ] Account creation on external services assigned to users with constitutional security validation
- [ ] Purchasing or payment actions assigned to users with constitutional compliance requirements
- [ ] Credential provision appropriately assigned to users with constitutional security constraints

### 6.2 Constitutional Developer Agent Actions

- [ ] All code-related tasks assigned to developer agents with constitutional constraint compliance
- [ ] Automated processes identified as agent responsibilities with constitutional validation requirements
- [ ] Configuration management properly assigned with catalog pattern integration requirements
- [ ] Testing and validation assigned to appropriate agents with constitutional compliance verification

## 7. FEATURE SEQUENCING & DEPENDENCIES

[[LLM: Dependencies create the critical path and must maintain constitutional compliance. For brownfield, ensure new features don't break existing ones or violate constitutional constraints.]]

### 7.1 Constitutional Functional Dependencies

- [ ] Features depending on others sequenced correctly with constitutional validation checkpoints
- [ ] Shared components built before use with catalog pattern compliance requirements
- [ ] User flows follow logical progression with constitutional usability validation
- [ ] Authentication features precede protected features with catalog auth pattern integration
- [ ] [[BROWNFIELD ONLY]] Existing functionality preserved throughout with constitutional compliance maintenance

### 7.2 Constitutional Technical Dependencies

- [ ] Lower-level services built before higher-level ones with constitutional architectural compliance
- [ ] Libraries and utilities created before use with catalog pattern integration requirements
- [ ] Data models defined before operations with catalog data strategy pattern compliance
- [ ] API endpoints defined before client consumption with catalog API contract pattern integration
- [ ] [[BROWNFIELD ONLY]] Integration points tested at each step with constitutional validation procedures

### 7.3 Constitutional Cross-Epic Dependencies

- [ ] Later epics build upon earlier epic functionality with constitutional compliance continuity
- [ ] No epic requires functionality from later epics within constitutional constraint framework
- [ ] Infrastructure from early epics utilized consistently with catalog pattern integration
- [ ] Incremental value delivery maintained with constitutional validation milestones
- [ ] [[BROWNFIELD ONLY]] Each epic maintains system integrity with constitutional compliance verification

## 8. RISK MANAGEMENT [[BROWNFIELD ONLY]]

[[LLM: This section is CRITICAL for brownfield projects within constitutional framework. Think pessimistically about what could break constitutional compliance.]]

### 8.1 Constitutional Breaking Change Risks

- [ ] Risk of breaking existing functionality assessed with constitutional compliance impact evaluation
- [ ] Database migration risks identified and mitigated with constitutional constraint preservation
- [ ] API breaking change risks evaluated with catalog API contract pattern compliance
- [ ] Performance degradation risks identified with constitutional performance requirement maintenance
- [ ] Security vulnerability risks evaluated with constitutional security constraint compliance

### 8.2 Constitutional Rollback Strategy

- [ ] Rollback procedures clearly defined per story with constitutional compliance restoration
- [ ] Feature flag strategy implemented with constitutional validation integration
- [ ] Backup and recovery procedures updated with catalog deployment pattern compliance
- [ ] Monitoring enhanced for new components with constitutional observability requirements
- [ ] Rollback triggers and thresholds defined with constitutional compliance validation

### 8.3 Constitutional User Impact Mitigation

- [ ] Existing user workflows analyzed for impact with constitutional usability preservation
- [ ] User communication plan developed with constitutional transparency requirements
- [ ] Training materials updated with constitutional compliance documentation
- [ ] Support documentation comprehensive with catalog pattern reference integration
- [ ] Migration path for user data validated with constitutional data security compliance

## 9. MVP SCOPE ALIGNMENT

[[LLM: MVP means MINIMUM viable product within constitutional constraints. For brownfield, ensure enhancements are truly necessary and constitutionally compliant.]]

### 9.1 Constitutional Core Goals Alignment

- [ ] All core goals from PRD addressed with constitutional compliance integration
- [ ] Features directly support MVP goals within constitutional constraint framework
- [ ] No extraneous features beyond MVP scope violate constitutional complexity limits
- [ ] Critical features prioritized appropriately with constitutional validation requirements
- [ ] [[BROWNFIELD ONLY]] Enhancement complexity justified within constitutional constraint limits

### 9.2 Constitutional User Journey Completeness

- [ ] All critical user journeys fully implemented with constitutional usability compliance
- [ ] Edge cases and error scenarios addressed with catalog error handling pattern integration
- [ ] User experience considerations included with constitutional accessibility requirements
- [ ] [[UI/UX ONLY]] Accessibility requirements incorporated with catalog accessibility pattern compliance
- [ ] [[BROWNFIELD ONLY]] Existing workflows preserved or improved with constitutional compliance validation

### 9.3 Constitutional Technical Requirements

- [ ] All technical constraints from PRD addressed with constitutional compliance validation
- [ ] Non-functional requirements incorporated with catalog pattern integration
- [ ] Architecture decisions align with constraints within constitutional framework
- [ ] Performance considerations addressed with constitutional performance requirements
- [ ] [[BROWNFIELD ONLY]] Compatibility requirements met with constitutional compliance maintenance

## 10. DOCUMENTATION & HANDOFF

[[LLM: Good documentation enables smooth development within constitutional framework. For brownfield, documentation of integration points is critical for constitutional compliance.]]

### 10.1 Constitutional Developer Documentation

- [ ] API documentation created alongside implementation with catalog API pattern references
- [ ] Setup instructions comprehensive with constitutional compliance requirements
- [ ] Architecture decisions documented with catalog pattern integration references
- [ ] Patterns and conventions documented with constitutional validation procedures
- [ ] [[BROWNFIELD ONLY]] Integration points documented in detail with constitutional compliance verification

### 10.2 Constitutional User Documentation

- [ ] User guides or help documentation included if required with constitutional usability compliance
- [ ] Error messages and user feedback considered with catalog error handling pattern integration
- [ ] Onboarding flows fully specified with constitutional accessibility requirements
- [ ] [[BROWNFIELD ONLY]] Changes to existing features documented with constitutional transparency compliance

### 10.3 Constitutional Knowledge Transfer

- [ ] [[BROWNFIELD ONLY]] Existing system knowledge captured with constitutional compliance context
- [ ] [[BROWNFIELD ONLY]] Integration knowledge documented with catalog pattern references
- [ ] Code review knowledge sharing planned with constitutional validation procedures
- [ ] Deployment knowledge transferred to operations with catalog deployment pattern integration
- [ ] Historical context preserved with constitutional compliance documentation

## 11. POST-MVP CONSIDERATIONS

[[LLM: Planning for success prevents technical debt and must support constitutional compliance. For brownfield, ensure enhancements don't limit future growth or constitutional evolution.]]

### 11.1 Constitutional Future Enhancements

- [ ] Clear separation between MVP and future features with constitutional constraint planning
- [ ] Architecture supports planned enhancements within constitutional framework
- [ ] Technical debt considerations documented with constitutional compliance remediation paths
- [ ] Extensibility points identified with catalog pattern evolution support
- [ ] [[BROWNFIELD ONLY]] Integration patterns reusable with constitutional compliance scalability

### 11.2 Constitutional Monitoring & Feedback

- [ ] Analytics or usage tracking included if required with constitutional privacy compliance
- [ ] User feedback collection considered with constitutional transparency requirements
- [ ] Monitoring and alerting addressed with catalog monitoring pattern integration
- [ ] Performance measurement incorporated with constitutional performance validation
- [ ] [[BROWNFIELD ONLY]] Existing monitoring preserved/enhanced with constitutional compliance maintenance

## CONSTITUTIONAL VALIDATION SUMMARY

[[LLM: FINAL SEAD PO VALIDATION REPORT GENERATION

Generate a comprehensive constitutional validation report that adapts to project type:

1. Constitutional Compliance Executive Summary
   - Project type: [Greenfield/Brownfield] with [UI/No UI] and constitutional integration
   - Overall constitutional readiness (percentage)
   - Constitutional Go/No-Go recommendation
   - Critical constitutional blocking issues count
   - Sections skipped due to project type with constitutional impact assessment

2. Constitutional Project-Specific Analysis

   FOR GREENFIELD:
   - Setup completeness with constitutional compliance integration
   - Dependency sequencing with constitutional validation checkpoints
   - MVP scope appropriateness within constitutional constraints
   - Development timeline feasibility with constitutional milestones

   FOR BROWNFIELD:
   - Integration risk level (High/Medium/Low) with constitutional compliance assessment
   - Existing system impact assessment with constitutional preservation validation
   - Rollback readiness with constitutional compliance restoration procedures
   - User disruption potential with constitutional impact mitigation

3. Constitutional Risk Assessment
   - Top 5 risks by severity with constitutional compliance context
   - Mitigation recommendations with catalog pattern integration
   - Timeline impact of addressing constitutional issues
   - [BROWNFIELD] Specific integration risks with constitutional compliance implications

4. Constitutional MVP Completeness
   - Core features coverage with constitutional validation requirements
   - Missing essential functionality within constitutional constraints
   - Scope creep identified with constitutional complexity assessment
   - True MVP vs over-engineering within constitutional framework

5. Constitutional Implementation Readiness
   - Developer clarity score (1-10) with constitutional guidance assessment
   - Ambiguous requirements count with constitutional validation needs
   - Missing technical details with catalog pattern integration requirements
   - [BROWNFIELD] Integration point clarity with constitutional compliance verification

6. Constitutional Recommendations
   - Must-fix before development with constitutional compliance priorities
   - Should-fix for quality with catalog pattern integration enhancement
   - Consider for improvement within constitutional framework
   - Post-MVP deferrals with constitutional evolution planning

7. [BROWNFIELD ONLY] Constitutional Integration Confidence
   - Confidence in preserving existing functionality with constitutional compliance
   - Rollback procedure completeness with constitutional restoration validation
   - Monitoring coverage for integration points with constitutional observability
   - Support team readiness with constitutional compliance knowledge

After presenting the report, ask if the user wants:

- Detailed analysis of any failed constitutional sections
- Specific story reordering suggestions with constitutional optimization
- Risk mitigation strategies with constitutional compliance integration
- [BROWNFIELD] Integration risk deep-dive with constitutional impact assessment]]

### Constitutional Category Statuses

| Category                                        | Status | Critical Constitutional Issues |
| ----------------------------------------------- | ------ | ------------------------------ |
| 1. Constitutional Compliance & Catalog Foundation | _TBD_  |                                |
| 2. Project Setup & Initialization               | _TBD_  |                                |
| 3. Infrastructure & Deployment                  | _TBD_  |                                |
| 4. External Dependencies & Integrations         | _TBD_  |                                |
| 5. UI/UX Considerations                         | _TBD_  |                                |
| 6. User/Agent Responsibility                    | _TBD_  |                                |
| 7. Feature Sequencing & Dependencies            | _TBD_  |                                |
| 8. Risk Management (Brownfield)                 | _TBD_  |                                |
| 9. MVP Scope Alignment                          | _TBD_  |                                |
| 10. Documentation & Handoff                     | _TBD_  |                                |
| 11. Post-MVP Considerations                     | _TBD_  |                                |

### Constitutional Deficiencies

(To be populated during constitutional validation)

### Constitutional Recommendations

(To be populated during constitutional validation)

### Constitutional Final Decision

- **CONSTITUTIONALLY APPROVED**: The plan is comprehensive, properly sequenced, and ready for implementation with full constitutional compliance and catalog integration.
- **CONSTITUTIONAL**: The plan requires specific constitutional adjustments before proceeding.
- **CONSTITUTIONALLY REJECTED**: The plan requires significant constitutional revision to address critical constitutional deficiencies and catalog compliance gaps.