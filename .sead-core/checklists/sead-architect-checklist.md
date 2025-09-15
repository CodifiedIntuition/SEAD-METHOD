<!-- Powered by SEAD-METHOD™ Core -->

# SEAD Architect Solution Validation Checklist

This checklist serves as a comprehensive framework for the SEAD Architect to validate the technical design and architecture before development execution. The Architect must systematically work through each item, ensuring the architecture is robust, scalable, secure, and aligned with the product requirements while strictly adhering to SEAD constitutional constraints and catalog patterns.

[[LLM: MANDATORY CONSTITUTIONAL INITIALIZATION - READ FIRST

Before proceeding with this checklist, you MUST:

1. **Read SEAD Constitutional Rules**: Load and read `/sead-core/constitutional-rules/sead-architect-constraints.yaml` - these are MANDATORY constraints that govern all your actions
2. **Read Catalog Architecture**: Load and read `/sead-catalog/*/README.md` files to understand established patterns for all domains
3. **Verify Mode Constraints**: Determine if you're in prototype, development, or build-to-deploy mode and apply appropriate constraint levels
4. **Validate Catalog Compliance**: Every architecture decision must reference and align with existing catalog patterns

REQUIRED ARTIFACTS:
Before proceeding with this checklist, ensure you have access to:

1. architecture.md - The primary architecture document (check docs/architecture.md)
2. prd.md - Product Requirements Document for requirements alignment (check docs/prd.md)
3. frontend-architecture.md or fe-architecture.md - If this is a UI project (check docs/frontend-architecture.md)
4. All catalog domain README files from `/sead-catalog/`
5. Any system diagrams referenced in the architecture
6. API documentation if available
7. Technology stack details and version specifications

CRITICAL: If any required documents are missing or inaccessible, STOP and escalate to user for their location or content before proceeding.

PROJECT TYPE DETECTION:
First, determine the project type by checking:

- Does the architecture include a frontend/UI component?
- Is there a frontend-architecture.md document?
- Does the PRD mention user interfaces or frontend requirements?

If this is a backend-only or service-only project:

- Skip sections marked with [[FRONTEND ONLY]]
- Focus extra attention on API design, service architecture, and integration patterns
- Note in your final report that frontend sections were skipped due to project type

CONSTITUTIONAL VALIDATION APPROACH:
For each section, you must:

1. **Catalog Compliance First** - Check proposed patterns against established catalog standards
2. **Deep Analysis** - Don't just check boxes, thoroughly analyze each item against the provided documentation
3. **Evidence-Based** - Cite specific sections or quotes from documents and catalog patterns when validating
4. **Constitutional Adherence** - Apply mode-appropriate constraints (strict for build-to-deploy, flexible for prototype)
5. **Risk Assessment** - Consider what could go wrong with each architectural decision
6. **Anti-Drift Protection** - Validate that architecture decisions maintain consistency with catalog patterns

EXECUTION MODE:
Ask the user if they want to work through the checklist:

- Section by section (interactive mode) - Review each section, present findings, get confirmation before proceeding
- All at once (comprehensive mode) - Complete full analysis and present comprehensive report at end]]

## 1. CONSTITUTIONAL COMPLIANCE & CATALOG ALIGNMENT

[[LLM: SEAD's core innovation is preventing architectural drift through catalog-based constraints. This section is MANDATORY and must pass before proceeding.]]

### 1.1 Catalog Compliance Validation

- [ ] All proposed technology choices validated against `/sead-catalog/shared-types/` standards
- [ ] API design patterns align with `/sead-catalog/api-contracts/` established conventions
- [ ] State management approach complies with `/sead-catalog/state-management/` patterns
- [ ] Error handling strategy follows `/sead-catalog/error-handling/` established patterns
- [ ] Authentication patterns align with `/sead-catalog/auth-patterns/` specifications
- [ ] Data strategy components reference `/sead-catalog/data-strategy/` standards
- [ ] Integration patterns comply with `/sead-catalog/integration-patterns/` established approaches

### 1.2 Constitutional Constraints Application

- [ ] Mode-specific constraints applied (prototype = minimal, development = progressive, build-to-deploy = strict)
- [ ] Architectural complexity appropriate for selected development mode
- [ ] All technology selections include specific versions (no version ranges permitted)
- [ ] Catalog references numbered and traceable for audit purposes
- [ ] Escalation procedures defined for constraint conflicts

### 1.3 Anti-Drift Validation Gates

- [ ] Proposed patterns consistent with existing catalog standards
- [ ] No architectural decisions contradict established catalog patterns
- [ ] Technology stack cohesion maintained across all components
- [ ] Pattern evolution documented with rationale and constitutional approval

## 2. REQUIREMENTS ALIGNMENT

[[LLM: Before evaluating this section, take a moment to fully understand the product's purpose and goals from the PRD. What is the core problem being solved? Who are the users? What are the critical success factors? Keep these in mind as you validate alignment. For each item, don't just check if it's mentioned - verify that the architecture provides a concrete technical solution that aligns with catalog patterns.]]

### 2.1 Functional Requirements Coverage

- [ ] Architecture supports all functional requirements in the PRD
- [ ] Technical approaches for all epics and stories are addressed using catalog-compliant patterns
- [ ] Edge cases and performance scenarios are considered within catalog constraints
- [ ] All required integrations are accounted for using established integration patterns
- [ ] User journeys are supported by the technical architecture with catalog-approved flows

### 2.2 Non-Functional Requirements Alignment

- [ ] Performance requirements are addressed with catalog-approved specific solutions
- [ ] Scalability considerations are documented with catalog-compliant approach
- [ ] Security requirements have corresponding catalog-approved technical controls
- [ ] Reliability and resilience approaches are defined using catalog patterns
- [ ] Compliance requirements have catalog-validated technical implementations

### 2.3 Technical Constraints Adherence

- [ ] All technical constraints from PRD are satisfied within constitutional limits
- [ ] Platform/language requirements follow catalog specifications
- [ ] Infrastructure constraints are accommodated using catalog deployment strategies
- [ ] Third-party service constraints are addressed with catalog integration patterns
- [ ] Organizational technical standards are followed with catalog compliance validation

## 3. ARCHITECTURE FUNDAMENTALS

[[LLM: Architecture clarity is crucial for successful implementation. As you review this section, visualize the system as if you were explaining it to a new developer using catalog patterns. Are there any ambiguities that could lead to misinterpretation? Would an AI agent be able to implement this architecture without confusion using established catalog patterns? Look for specific diagrams, component definitions, and clear interaction patterns that reference catalog standards.]]

### 3.1 Catalog-Compliant Architecture Clarity

- [ ] Architecture is documented with clear diagrams using catalog-approved patterns
- [ ] Major components and their responsibilities are defined using catalog component patterns
- [ ] Component interactions and dependencies are mapped using catalog integration patterns
- [ ] Data flows are clearly illustrated using catalog data strategy patterns
- [ ] Technology choices for each component are specified with catalog validation references

### 3.2 Constitutional Separation of Concerns

- [ ] Clear boundaries between UI, business logic, and data layers follow catalog architectural patterns
- [ ] Responsibilities are cleanly divided between components using catalog design patterns
- [ ] Interfaces between components are well-defined using catalog API contract patterns
- [ ] Components adhere to single responsibility principle within catalog constraints
- [ ] Cross-cutting concerns (logging, auth, etc.) are properly addressed using catalog patterns

### 3.3 Catalog-Approved Design Patterns & Best Practices

- [ ] Appropriate design patterns are employed from catalog-approved pattern library
- [ ] Industry best practices are followed within constitutional constraints
- [ ] Anti-patterns are avoided using catalog validation guidelines
- [ ] Consistent architectural style throughout using catalog style guides
- [ ] Pattern usage is documented and explained with catalog pattern references

### 3.4 Constitutional Modularity & Maintainability

- [ ] System is divided into cohesive, loosely-coupled modules using catalog patterns
- [ ] Components can be developed and tested independently within catalog test patterns
- [ ] Changes can be localized to specific components following catalog change management
- [ ] Code organization promotes discoverability using catalog organizational patterns
- [ ] Architecture specifically designed for AI agent implementation with catalog guidance

## 4. TECHNICAL STACK & DECISIONS

[[LLM: Technology choices have long-term implications and must align with catalog standards. For each technology decision, consider: Is this the simplest solution that could work within catalog constraints? Are we over-engineering beyond constitutional limits? Will this scale within catalog patterns? What are the maintenance implications within catalog standards? Are there security vulnerabilities in the chosen versions? Verify that specific versions are defined, not ranges, and all selections reference catalog standards.]]

### 4.1 Catalog-Validated Technology Selection

- [ ] Selected technologies meet all requirements and catalog compliance standards
- [ ] Technology versions are specifically defined (not ranges) per constitutional requirements
- [ ] Technology choices are justified with clear rationale and catalog pattern references
- [ ] Alternatives considered are documented with pros/cons and catalog compliance assessment
- [ ] Selected stack components work well together within catalog integration patterns

### 4.2 Frontend Architecture [[FRONTEND ONLY]]

[[LLM: Skip this entire section if this is a backend-only or service-only project. Only evaluate if the project includes a user interface, and ensure all selections comply with catalog UI patterns.]]

- [ ] UI framework and libraries are specifically selected from catalog-approved options
- [ ] State management approach is defined using catalog state management patterns
- [ ] Component structure and organization is specified using catalog design system patterns
- [ ] Responsive/adaptive design approach is outlined using catalog UI patterns
- [ ] Build and bundling strategy is determined using catalog deployment strategies

### 4.3 Catalog-Compliant Backend Architecture

- [ ] API design and standards are defined using catalog API contract patterns
- [ ] Service organization and boundaries are clear using catalog integration patterns
- [ ] Authentication and authorization approach is specified using catalog auth patterns
- [ ] Error handling strategy is outlined using catalog error handling patterns
- [ ] Backend scaling approach is defined using catalog deployment strategies

### 4.4 Constitutional Data Architecture

- [ ] Data models are fully defined using catalog data strategy patterns
- [ ] Database technologies are selected with justification and catalog compliance validation
- [ ] Data access patterns are documented using catalog data strategy approaches
- [ ] Data migration/seeding approach is specified using catalog data patterns
- [ ] Data backup and recovery strategies are outlined using catalog deployment patterns

## 5. FRONTEND DESIGN & IMPLEMENTATION [[FRONTEND ONLY]]

[[LLM: This entire section should be skipped for backend-only projects. Only evaluate if the project includes a user interface. When evaluating, ensure alignment between the main architecture document and the frontend-specific architecture document, and validate all patterns against catalog design system standards.]]

### 5.1 Catalog-Compliant Frontend Philosophy & Patterns

- [ ] Framework & Core Libraries align with main architecture document and catalog standards
- [ ] Component Architecture (e.g., Atomic Design) is clearly described using catalog design patterns
- [ ] State Management Strategy is appropriate for application complexity within catalog constraints
- [ ] Data Flow patterns are consistent and clear using catalog integration patterns
- [ ] Styling Approach is defined and tooling specified using catalog design system patterns

### 5.2 Constitutional Frontend Structure & Organization

- [ ] Directory structure is clearly documented with ASCII diagram following catalog organizational patterns
- [ ] Component organization follows stated patterns and catalog design system standards
- [ ] File naming conventions are explicit and comply with catalog conventions
- [ ] Structure supports chosen framework's best practices within catalog constraints
- [ ] Clear guidance on where new components should be placed using catalog patterns

### 5.3 Catalog-Approved Component Design

- [ ] Component template/specification format is defined using catalog design system patterns
- [ ] Component props, state, and events are well-documented using catalog component patterns
- [ ] Shared/foundational components are identified from catalog design system library
- [ ] Component reusability patterns are established using catalog design patterns
- [ ] Accessibility requirements are built into component design using catalog accessibility standards

### 5.4 Constitutional Frontend-Backend Integration

- [ ] API interaction layer is clearly defined using catalog integration patterns
- [ ] HTTP client setup and configuration documented using catalog API contract patterns
- [ ] Error handling for API calls is comprehensive using catalog error handling patterns
- [ ] Service definitions follow consistent patterns using catalog integration standards
- [ ] Authentication integration with backend is clear using catalog auth patterns

### 5.5 Catalog-Compliant Routing & Navigation

- [ ] Routing strategy and library are specified using catalog-approved navigation patterns
- [ ] Route definitions table is comprehensive and follows catalog routing standards
- [ ] Route protection mechanisms are defined using catalog auth patterns
- [ ] Deep linking considerations addressed using catalog navigation patterns
- [ ] Navigation patterns are consistent with catalog design system standards

### 5.6 Constitutional Frontend Performance

- [ ] Image optimization strategies defined using catalog performance patterns
- [ ] Code splitting approach documented using catalog deployment strategies
- [ ] Lazy loading patterns established using catalog performance standards
- [ ] Re-render optimization techniques specified using catalog optimization patterns
- [ ] Performance monitoring approach defined using catalog monitoring standards

## 6. RESILIENCE & OPERATIONAL READINESS

[[LLM: Production systems fail in unexpected ways. As you review this section, think about Murphy's Law within catalog constraints - what could go wrong? Consider real-world scenarios: What happens during peak load? How does the system behave when a critical service is down? Can the operations team diagnose issues at 3 AM using catalog monitoring patterns? Look for specific resilience patterns from the catalog, not just mentions of "error handling".]]

### 6.1 Catalog-Compliant Error Handling & Resilience

- [ ] Error handling strategy is comprehensive using catalog error handling patterns
- [ ] Retry policies are defined where appropriate using catalog resilience patterns
- [ ] Circuit breakers or fallbacks are specified for critical services using catalog patterns
- [ ] Graceful degradation approaches are defined using catalog resilience strategies
- [ ] System can recover from partial failures using catalog recovery patterns

### 6.2 Constitutional Monitoring & Observability

- [ ] Logging strategy is defined using catalog monitoring patterns
- [ ] Monitoring approach is specified using catalog operational standards
- [ ] Key metrics for system health are identified using catalog monitoring guidelines
- [ ] Alerting thresholds and strategies are outlined using catalog operational patterns
- [ ] Debugging and troubleshooting capabilities are built in using catalog diagnostic patterns

### 6.3 Catalog-Approved Performance & Scaling

- [ ] Performance bottlenecks are identified and addressed using catalog optimization patterns
- [ ] Caching strategy is defined where appropriate using catalog performance patterns
- [ ] Load balancing approach is specified using catalog deployment strategies
- [ ] Horizontal and vertical scaling strategies are outlined using catalog scaling patterns
- [ ] Resource sizing recommendations are provided using catalog deployment guidelines

### 6.4 Constitutional Deployment & DevOps

- [ ] Deployment strategy is defined using catalog deployment patterns
- [ ] CI/CD pipeline approach is outlined using catalog deployment strategies
- [ ] Environment strategy (dev, staging, prod) is specified using catalog deployment patterns
- [ ] Infrastructure as Code approach is defined using catalog deployment standards
- [ ] Rollback and recovery procedures are outlined using catalog operational patterns

## 7. SECURITY & COMPLIANCE

[[LLM: Security is not optional and must follow catalog security patterns. Review this section with a hacker's mindset - how could someone exploit this system? Also consider compliance: Are there industry-specific regulations that apply? GDPR? HIPAA? PCI? Ensure the architecture addresses these proactively using catalog security patterns. Look for specific security controls from the catalog, not just general statements.]]

### 7.1 Catalog-Compliant Authentication & Authorization

- [ ] Authentication mechanism is clearly defined using catalog auth patterns
- [ ] Authorization model is specified using catalog auth patterns
- [ ] Role-based access control is outlined if required using catalog auth standards
- [ ] Session management approach is defined using catalog auth patterns
- [ ] Credential management is addressed using catalog security patterns

### 7.2 Constitutional Data Security

- [ ] Data encryption approach (at rest and in transit) is specified using catalog security patterns
- [ ] Sensitive data handling procedures are defined using catalog data security standards
- [ ] Data retention and purging policies are outlined using catalog data strategy patterns
- [ ] Backup encryption is addressed if required using catalog deployment security patterns
- [ ] Data access audit trails are specified if required using catalog monitoring patterns

### 7.3 Catalog-Approved API & Service Security

- [ ] API security controls are defined using catalog API security patterns
- [ ] Rate limiting and throttling approaches are specified using catalog API patterns
- [ ] Input validation strategy is outlined using catalog validation patterns
- [ ] CSRF/XSS prevention measures are addressed using catalog security patterns
- [ ] Secure communication protocols are specified using catalog security standards

### 7.4 Constitutional Infrastructure Security

- [ ] Network security design is outlined using catalog deployment security patterns
- [ ] Firewall and security group configurations are specified using catalog security standards
- [ ] Service isolation approach is defined using catalog deployment patterns
- [ ] Least privilege principle is applied using catalog security patterns
- [ ] Security monitoring strategy is outlined using catalog monitoring security patterns

## 8. IMPLEMENTATION GUIDANCE

[[LLM: Clear implementation guidance prevents costly mistakes and must reference catalog patterns. As you review this section, imagine you're a developer starting on day one with access to the catalog. Do they have everything they need to be productive using catalog patterns? Are coding standards clear enough to maintain consistency across the team using catalog conventions? Look for specific examples and patterns from the catalog.]]

### 8.1 Catalog-Compliant Coding Standards & Practices

- [ ] Coding standards are defined using catalog development patterns
- [ ] Documentation requirements are specified using catalog documentation standards
- [ ] Testing expectations are outlined using catalog testing patterns
- [ ] Code organization principles are defined using catalog organizational patterns
- [ ] Naming conventions are specified using catalog convention standards

### 8.2 Constitutional Testing Strategy

- [ ] Unit testing approach is defined using catalog testing patterns
- [ ] Integration testing strategy is outlined using catalog testing standards
- [ ] E2E testing approach is specified using catalog testing patterns
- [ ] Performance testing requirements are outlined using catalog performance testing standards
- [ ] Security testing approach is defined using catalog security testing patterns

### 8.3 Frontend Testing [[FRONTEND ONLY]]

[[LLM: Skip this subsection for backend-only projects. Ensure all testing approaches use catalog testing patterns.]]

- [ ] Component testing scope and tools defined using catalog frontend testing patterns
- [ ] UI integration testing approach specified using catalog UI testing standards
- [ ] Visual regression testing considered using catalog testing patterns
- [ ] Accessibility testing tools identified using catalog accessibility testing standards
- [ ] Frontend-specific test data management addressed using catalog testing data patterns

### 8.4 Catalog-Approved Development Environment

- [ ] Local development environment setup is documented using catalog development patterns
- [ ] Required tools and configurations are specified using catalog development standards
- [ ] Development workflows are outlined using catalog development patterns
- [ ] Source control practices are defined using catalog development standards
- [ ] Dependency management approach is specified using catalog dependency patterns

### 8.5 Constitutional Technical Documentation

- [ ] API documentation standards are defined using catalog API documentation patterns
- [ ] Architecture documentation requirements are specified using catalog documentation standards
- [ ] Code documentation expectations are outlined using catalog documentation patterns
- [ ] System diagrams and visualizations are included using catalog visualization standards
- [ ] Decision records for key choices are included with catalog compliance references

## 9. DEPENDENCY & INTEGRATION MANAGEMENT

[[LLM: Dependencies are often the source of production issues and must comply with catalog patterns. For each dependency, consider within catalog constraints: What happens if it's unavailable? Is there a newer version with security patches? Are we locked into a vendor? What's our contingency plan? Verify specific versions and fallback strategies using catalog dependency management patterns.]]

### 9.1 Catalog-Compliant External Dependencies

- [ ] All external dependencies are identified with catalog compliance validation
- [ ] Versioning strategy for dependencies is defined using catalog dependency patterns
- [ ] Fallback approaches for critical dependencies are specified using catalog resilience patterns
- [ ] Licensing implications are addressed using catalog legal compliance standards
- [ ] Update and patching strategy is outlined using catalog maintenance patterns

### 9.2 Constitutional Internal Dependencies

- [ ] Component dependencies are clearly mapped using catalog integration patterns
- [ ] Build order dependencies are addressed using catalog build patterns
- [ ] Shared services and utilities are identified using catalog component patterns
- [ ] Circular dependencies are eliminated using catalog dependency management standards
- [ ] Versioning strategy for internal components is defined using catalog versioning patterns

### 9.3 Catalog-Approved Third-Party Integrations

- [ ] All third-party integrations are identified with catalog integration pattern validation
- [ ] Integration approaches are defined using catalog integration standards
- [ ] Authentication with third parties is addressed using catalog auth patterns
- [ ] Error handling for integration failures is specified using catalog error handling patterns
- [ ] Rate limits and quotas are considered using catalog integration resilience patterns

## 10. AI AGENT IMPLEMENTATION SUITABILITY

[[LLM: This architecture may be implemented by AI agents using SEAD catalog patterns. Review with extreme clarity in mind. Are patterns consistent with catalog standards? Is complexity minimized within constitutional constraints? Would an AI agent make incorrect assumptions when following catalog patterns? Remember: explicit catalog references are better than implicit assumptions. Look for clear file structures, naming conventions, and implementation patterns that follow catalog standards.]]

### 10.1 Catalog-Compliant Modularity for AI Agents

- [ ] Components are sized appropriately for AI agent implementation using catalog component patterns
- [ ] Dependencies between components are minimized using catalog dependency management standards
- [ ] Clear interfaces between components are defined using catalog API contract patterns
- [ ] Components have singular, well-defined responsibilities within catalog constraints
- [ ] File and code organization optimized for AI agent understanding using catalog organizational patterns

### 10.2 Constitutional Clarity & Predictability

- [ ] Patterns are consistent and predictable using catalog pattern standards
- [ ] Complex logic is broken down into simpler steps using catalog complexity management patterns
- [ ] Architecture avoids overly clever or obscure approaches per catalog simplicity principles
- [ ] Examples are provided for unfamiliar patterns with catalog pattern references
- [ ] Component responsibilities are explicit and clear using catalog documentation standards

### 10.3 Catalog-Approved Implementation Guidance

- [ ] Detailed implementation guidance is provided using catalog implementation patterns
- [ ] Code structure templates are defined using catalog template standards
- [ ] Specific implementation patterns are documented with catalog pattern references
- [ ] Common pitfalls are identified with solutions using catalog troubleshooting patterns
- [ ] References to similar implementations are provided with catalog example libraries

### 10.4 Constitutional Error Prevention & Handling

- [ ] Design reduces opportunities for implementation errors using catalog error prevention patterns
- [ ] Validation and error checking approaches are defined using catalog validation patterns
- [ ] Self-healing mechanisms are incorporated where possible using catalog resilience patterns
- [ ] Testing patterns are clearly defined using catalog testing standards
- [ ] Debugging guidance is provided using catalog diagnostic patterns

## 11. ACCESSIBILITY IMPLEMENTATION [[FRONTEND ONLY]]

[[LLM: Skip this section for backend-only projects. Accessibility is a core requirement for any user interface and must follow catalog accessibility patterns.]]

### 11.1 Catalog-Compliant Accessibility Standards

- [ ] Semantic HTML usage is emphasized using catalog accessibility patterns
- [ ] ARIA implementation guidelines provided using catalog accessibility standards
- [ ] Keyboard navigation requirements defined using catalog accessibility patterns
- [ ] Focus management approach specified using catalog accessibility standards
- [ ] Screen reader compatibility addressed using catalog accessibility patterns

### 11.2 Constitutional Accessibility Testing

- [ ] Accessibility testing tools identified using catalog accessibility testing patterns
- [ ] Testing process integrated into workflow using catalog testing integration standards
- [ ] Compliance targets (WCAG level) specified using catalog accessibility compliance standards
- [ ] Manual testing procedures defined using catalog accessibility testing patterns
- [ ] Automated testing approach outlined using catalog testing automation standards

[[LLM: FINAL CONSTITUTIONAL VALIDATION REPORT GENERATION

Now that you've completed the checklist with full catalog compliance validation, generate a comprehensive validation report that includes:

1. Constitutional Compliance Summary
   - Overall catalog compliance percentage
   - Mode-appropriate constraint application
   - Catalog pattern reference validation
   - Anti-drift protection assessment

2. Executive Summary
   - Overall architecture readiness (High/Medium/Low)
   - Critical constitutional violations identified
   - Key catalog compliance strengths of the architecture
   - Project type (Full-stack/Frontend/Backend) and sections evaluated

3. Catalog Compliance Analysis
   - Pass rate for each catalog domain (percentage of items passed)
   - Most concerning catalog violations or gaps
   - Catalog domains requiring immediate attention
   - Pattern consistency assessment across domains

4. Constitutional Risk Assessment
   - Top 5 risks by severity with constitutional context
   - Catalog pattern violation implications
   - Mitigation recommendations for each with catalog references
   - Timeline impact of addressing constitutional issues

5. Recommendations
   - Must-fix items before development (constitutional blockers)
   - Should-fix items for better catalog compliance
   - Nice-to-have improvements within catalog standards
   - Catalog pattern evolution suggestions

6. AI Implementation Readiness
   - Specific concerns for AI agent implementation using catalog patterns
   - Areas needing additional catalog pattern clarification
   - Complexity hotspots to address within constitutional constraints
   - Catalog reference completeness assessment

7. Frontend-Specific Assessment (if applicable)
   - Frontend architecture completeness with catalog compliance
   - Alignment between main and frontend architecture docs with catalog standards
   - UI/UX specification coverage using catalog design patterns
   - Component design clarity with catalog pattern references

8. Constitutional Escalation Recommendations
   - Issues requiring constitutional review board assessment
   - Catalog pattern conflicts requiring resolution
   - Mode constraint adjustments recommended
   - Long-term constitutional compliance strategy

After presenting the report, ask the user if they would like detailed analysis of any specific section, especially those with constitutional violations or catalog compliance gaps.]]
