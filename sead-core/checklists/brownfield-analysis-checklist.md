<!-- Powered by SEAD-METHOD™ Core -->

# SEAD Brownfield Analysis Validation Checklist

This checklist serves as a comprehensive framework for the SEAD Catalog Architect to validate brownfield codebase analysis, ensuring thorough examination of existing systems for pattern extraction and catalog generation opportunities while respecting constitutional constraints.

[[LLM: MANDATORY CONSTITUTIONAL INITIALIZATION - READ FIRST

Before proceeding with this checklist, you MUST:

1. **Read SEAD Constitutional Rules**: Load and read `/sead-core/constitutional-rules/sead-catalog-architect-constraints.yaml` - these are MANDATORY constraints that govern all brownfield analysis actions
2. **Read Existing Catalog Structure**: Load and read `/sead-catalog/*/README.md` files to understand current catalog patterns and avoid duplication
3. **Verify Brownfield Context**: Understand the target codebase scope, technology stack, and analysis objectives
4. **Validate Mode Constraints**: Determine development mode and apply appropriate analysis depth and quality thresholds

REQUIRED ARTIFACTS:
Before proceeding with this checklist, ensure you have access to:

1. Target brownfield codebase with appropriate access permissions
2. Existing documentation (architecture docs, README files, API documentation)
3. Build and deployment configuration files
4. Version control history and commit patterns
5. Test suites and quality assurance artifacts
6. Dependency manifests and third-party integration points
7. Current team knowledge and architectural decisions documentation

CRITICAL: If any required artifacts are missing or inaccessible, STOP and escalate to user for access or alternative analysis approaches.

BROWNFIELD ANALYSIS SCOPE DEFINITION:
First, determine the analysis scope and objectives:

- **Full System Analysis**: Comprehensive analysis of entire codebase
- **Domain-Focused Analysis**: Analysis of specific architectural domains or components
- **Pattern Mining**: Focus on extracting reusable patterns for catalog
- **Modernization Assessment**: Analysis for system modernization and refactoring
- **Integration Mapping**: Understanding integration points and external dependencies

CONSTITUTIONAL VALIDATION APPROACH:
For each aspect of analysis, you must:

1. **Systematic Coverage** - Ensure all architectural layers and domains are examined
2. **Evidence-Based Assessment** - Document findings with specific code examples and metrics
3. **Pattern Recognition** - Identify both positive patterns and anti-patterns
4. **Constitutional Compliance** - Evaluate compatibility with SEAD governance framework
5. **Context Preservation** - Maintain analysis context for seamless agent handoffs
6. **Respectful Analysis** - Honor existing architectural decisions while identifying improvements

EXECUTION MODE:
Ask the user if they want to work through the checklist:

- Domain by domain (systematic mode) - Analyze each architectural domain thoroughly
- Component by component (detailed mode) - Deep dive into specific components or services
- All at once (comprehensive mode) - Complete full analysis and present comprehensive findings]]

## 1. CONSTITUTIONAL COMPLIANCE & ANALYSIS FRAMEWORK

[[LLM: Brownfield analysis must align with SEAD constitutional principles while respecting existing system constraints and architectural decisions.]]

### 1.1 Constitutional Framework Integration

- [ ] Analysis approach respects existing system architecture and design decisions
- [ ] Constitutional constraints are applied appropriately based on system modernization goals
- [ ] Mode-appropriate analysis depth is established (prototype = high-level, build-to-deploy = comprehensive)
- [ ] Analysis findings support constitutional governance objectives
- [ ] Context preservation mechanisms established for analysis handoffs

### 1.2 SEAD Methodology Alignment

- [ ] Analysis framework follows SEAD domain organization principles
- [ ] Pattern identification aligns with SEAD architectural taxonomy
- [ ] Analysis supports progressive constraint enforcement objectives
- [ ] Documentation approach complies with SEAD constitutional standards
- [ ] Analysis findings integrate with existing SEAD catalog structure

### 1.3 Respectful Legacy Assessment

- [ ] Existing architectural decisions are analyzed with appropriate context and rationale
- [ ] Legacy patterns are evaluated fairly without bias toward modern approaches
- [ ] Historical context and constraints that influenced design decisions are considered
- [ ] Modernization recommendations respect organizational and technical constraints
- [ ] Analysis identifies evolution paths that minimize disruption

## 2. CODEBASE STRUCTURE & ORGANIZATION ANALYSIS

[[LLM: Understanding codebase organization is crucial for effective pattern extraction and modernization planning. Analyze structure systematically.]]

### 2.1 Repository & Directory Structure Assessment

- [ ] Overall repository organization is documented with directory tree analysis
- [ ] Code organization patterns (by feature, by layer, by domain) are identified
- [ ] File naming conventions and consistency are evaluated
- [ ] Module/package/namespace organization is mapped and analyzed
- [ ] Configuration and infrastructure code organization is documented

### 2.2 Architectural Layer Identification

- [ ] Presentation layer components and patterns are identified and cataloged
- [ ] Business logic layer organization and patterns are documented
- [ ] Data access layer patterns and approaches are analyzed
- [ ] Cross-cutting concerns (logging, security, monitoring) are mapped
- [ ] Service and integration layers are identified and characterized

### 2.3 Component Boundaries & Relationships

- [ ] Major components and their responsibilities are identified
- [ ] Component dependencies and coupling relationships are mapped
- [ ] Interface boundaries and contracts are documented
- [ ] Data flow between components is analyzed and visualized
- [ ] Component lifecycle and deployment relationships are understood

### 2.4 Code Quality & Consistency Assessment

- [ ] Coding standards and convention consistency is evaluated across codebase
- [ ] Documentation quality and coverage is assessed
- [ ] Test coverage and quality patterns are analyzed
- [ ] Error handling approaches and consistency are documented
- [ ] Performance patterns and optimization approaches are identified

## 3. TECHNOLOGY STACK & DEPENDENCY ANALYSIS

[[LLM: Understanding technology choices and dependencies is essential for modernization planning and pattern extraction compatibility.]]

### 3.1 Technology Stack Inventory

- [ ] Programming languages and versions are documented
- [ ] Frameworks and libraries with versions are catalogued
- [ ] Database technologies and versions are identified
- [ ] Infrastructure and deployment technologies are mapped
- [ ] Development and build tools are inventoried

### 3.2 Dependency Management Assessment

- [ ] External dependency management approaches are evaluated
- [ ] Dependency versions and update strategies are analyzed
- [ ] Security vulnerabilities in dependencies are identified
- [ ] License compliance and compatibility issues are assessed
- [ ] Dependency conflicts and resolution strategies are documented

### 3.3 Integration & External System Mapping

- [ ] External service integrations are identified and catalogued
- [ ] API dependencies and contracts are documented
- [ ] Database and data source connections are mapped
- [ ] Authentication and authorization integrations are analyzed
- [ ] Monitoring and observability integrations are documented

### 3.4 Technology Modernization Assessment

- [ ] Technology stack currency and support status is evaluated
- [ ] Migration paths to modern alternatives are identified where appropriate
- [ ] Compatibility with SEAD catalog patterns is assessed
- [ ] Technology debt and modernization priorities are documented
- [ ] Constitutional compliance capabilities of current stack are evaluated

## 4. PATTERN IDENTIFICATION & EXTRACTION OPPORTUNITIES

[[LLM: The core value of brownfield analysis is identifying reusable patterns. Systematically identify patterns worthy of catalog inclusion.]]

### 4.1 Architectural Pattern Recognition

- [ ] High-level architectural patterns (MVC, microservices, layered, etc.) are identified
- [ ] Design patterns usage throughout codebase is documented
- [ ] Custom architectural patterns unique to the system are identified
- [ ] Pattern consistency and variation across components is analyzed
- [ ] Pattern evolution and refinement opportunities are identified

### 4.2 Implementation Pattern Mining

- [ ] Common implementation approaches are identified and abstracted
- [ ] Code templates and boilerplate patterns are extracted
- [ ] Configuration patterns and approaches are documented
- [ ] Data transformation and validation patterns are identified
- [ ] Error handling and logging patterns are catalogued

### 4.3 Integration & Communication Patterns

- [ ] Service-to-service communication patterns are identified
- [ ] External API integration approaches are documented
- [ ] Data synchronization and consistency patterns are analyzed
- [ ] Event-driven and messaging patterns are identified
- [ ] Caching and performance optimization patterns are extracted

### 4.4 Domain-Specific Pattern Analysis

- [ ] Business domain patterns and models are identified
- [ ] User interface and experience patterns are documented
- [ ] Security and authorization patterns are extracted
- [ ] Data persistence and retrieval patterns are analyzed
- [ ] Testing and quality assurance patterns are catalogued

## 5. ANTI-PATTERN & TECHNICAL DEBT IDENTIFICATION

[[LLM: Identifying problematic patterns is as important as identifying good ones. Document anti-patterns to avoid in catalog and modernization efforts.]]

### 5.1 Code Quality Anti-Patterns

- [ ] Code duplication and copy-paste patterns are identified and quantified
- [ ] Complex and poorly structured code sections are documented
- [ ] Inconsistent coding standards and naming violations are catalogued
- [ ] Over-engineered and unnecessarily complex implementations are identified
- [ ] Under-documented and unclear code sections are mapped

### 5.2 Architectural Anti-Patterns

- [ ] Tight coupling and dependency violations are identified
- [ ] Circular dependencies and architectural violations are documented
- [ ] Single point of failure patterns are identified
- [ ] Performance bottlenecks and scalability issues are analyzed
- [ ] Security vulnerabilities and insecure patterns are catalogued

### 5.3 Technical Debt Assessment

- [ ] Accumulated technical debt is quantified and categorized
- [ ] Maintenance burden and development velocity impacts are assessed
- [ ] Modernization and refactoring priorities are established
- [ ] Technical debt remediation effort estimates are provided
- [ ] Risk assessment for continuing with current technical debt levels

### 5.4 Evolution & Modernization Barriers

- [ ] Barriers to pattern adoption and modernization are identified
- [ ] Legacy constraints that prevent improvement are documented
- [ ] Organizational and process barriers to change are assessed
- [ ] Technical barriers and compatibility issues are analyzed
- [ ] Change management requirements for modernization are outlined

## 6. DATA ARCHITECTURE & PERSISTENCE PATTERNS

[[LLM: Data patterns are often the most complex and critical for system understanding. Thoroughly analyze data architecture and patterns.]]

### 6.1 Data Model & Schema Analysis

- [ ] Database schemas and relationships are documented
- [ ] Data model evolution and migration patterns are analyzed
- [ ] Entity relationships and constraints are mapped
- [ ] Data validation and integrity patterns are identified
- [ ] Schema versioning and evolution approaches are documented

### 6.2 Data Access & Persistence Patterns

- [ ] Data access layer patterns and approaches are analyzed
- [ ] ORM usage patterns and custom data access code are documented
- [ ] Transaction management and consistency patterns are identified
- [ ] Caching patterns and data optimization approaches are catalogued
- [ ] Data synchronization and backup patterns are analyzed

### 6.3 Data Integration & ETL Patterns

- [ ] Data integration patterns and approaches are documented
- [ ] ETL processes and data transformation patterns are identified
- [ ] Data validation and quality assurance patterns are analyzed
- [ ] Data migration and import/export patterns are catalogued
- [ ] Real-time data processing patterns are documented

### 6.4 Data Security & Compliance Patterns

- [ ] Data encryption and security patterns are identified
- [ ] Access control and authorization patterns for data are documented
- [ ] Data privacy and compliance patterns are analyzed
- [ ] Audit trail and data lineage patterns are catalogued
- [ ] Data retention and archival patterns are documented

## 7. USER INTERFACE & EXPERIENCE ANALYSIS

[[LLM: For systems with user interfaces, UI/UX patterns are crucial for design system development and user experience consistency.]]

### 7.1 UI Architecture & Organization

- [ ] Frontend architecture patterns and organization are analyzed
- [ ] Component structure and hierarchy are documented
- [ ] State management patterns and approaches are identified
- [ ] Routing and navigation patterns are catalogued
- [ ] Asset management and optimization patterns are documented

### 7.2 Design System & Component Analysis

- [ ] Reusable UI components and patterns are identified
- [ ] Design consistency and style patterns are analyzed
- [ ] Accessibility patterns and compliance are evaluated
- [ ] Responsive design patterns and approaches are documented
- [ ] Theming and customization patterns are catalogued

### 7.3 User Experience Pattern Assessment

- [ ] User workflow and interaction patterns are mapped
- [ ] Form design and validation patterns are identified
- [ ] Error handling and user feedback patterns are analyzed
- [ ] Performance optimization patterns for UX are documented
- [ ] User onboarding and help patterns are catalogued

### 7.4 Frontend-Backend Integration Patterns

- [ ] API integration and data fetching patterns are analyzed
- [ ] Authentication and session management patterns are documented
- [ ] Error handling for service integration is evaluated
- [ ] Real-time communication patterns are identified
- [ ] Client-side caching and optimization patterns are catalogued

## 8. SECURITY & COMPLIANCE PATTERN ANALYSIS

[[LLM: Security patterns are critical for system understanding and must be thoroughly analyzed for compliance and modernization planning.]]

### 8.1 Authentication & Authorization Patterns

- [ ] User authentication mechanisms and patterns are documented
- [ ] Authorization and role-based access control patterns are analyzed
- [ ] Session management and security patterns are identified
- [ ] Single sign-on and identity integration patterns are catalogued
- [ ] Security token and credential management patterns are documented

### 8.2 Data Security & Privacy Patterns

- [ ] Data encryption patterns (at rest and in transit) are analyzed
- [ ] Sensitive data handling and protection patterns are identified
- [ ] Privacy compliance patterns and approaches are documented
- [ ] Data anonymization and pseudonymization patterns are catalogued
- [ ] Security audit and logging patterns are analyzed

### 8.3 Application Security Patterns

- [ ] Input validation and sanitization patterns are documented
- [ ] Cross-site scripting (XSS) and injection prevention patterns are analyzed
- [ ] Cross-site request forgery (CSRF) protection patterns are identified
- [ ] Security header and configuration patterns are catalogued
- [ ] Vulnerability management and patching patterns are documented

### 8.4 Infrastructure Security Patterns

- [ ] Network security and firewall patterns are analyzed
- [ ] Container and deployment security patterns are identified
- [ ] Secrets management and configuration security patterns are documented
- [ ] Infrastructure monitoring and security patterns are catalogued
- [ ] Incident response and security recovery patterns are analyzed

## 9. PERFORMANCE & SCALABILITY ANALYSIS

[[LLM: Performance patterns are essential for system understanding and modernization planning. Analyze performance characteristics systematically.]]

### 9.1 Performance Pattern Identification

- [ ] Caching patterns and strategies are documented
- [ ] Database query optimization patterns are analyzed
- [ ] Resource pooling and connection management patterns are identified
- [ ] Asynchronous processing patterns are catalogued
- [ ] Load balancing and distribution patterns are documented

### 9.2 Scalability Architecture Assessment

- [ ] Horizontal and vertical scaling patterns are analyzed
- [ ] Microservices and service decomposition patterns are identified
- [ ] Data partitioning and sharding patterns are documented
- [ ] Event-driven and message queue patterns are catalogued
- [ ] CDN and content distribution patterns are analyzed

### 9.3 Monitoring & Observability Patterns

- [ ] Application monitoring and metrics patterns are documented
- [ ] Logging patterns and centralization approaches are analyzed
- [ ] Distributed tracing patterns are identified where present
- [ ] Alerting and notification patterns are catalogued
- [ ] Performance profiling and analysis patterns are documented

### 9.4 Capacity Planning & Resource Management

- [ ] Resource utilization patterns and optimization are analyzed
- [ ] Capacity planning approaches and patterns are documented
- [ ] Auto-scaling patterns and triggers are identified
- [ ] Cost optimization patterns are catalogued
- [ ] Performance testing patterns and approaches are analyzed

## 10. AI AGENT ANALYSIS SUITABILITY & HANDOFF PREPARATION

[[LLM: Analysis results must be suitable for AI agent consumption and subsequent catalog generation. Validate analysis quality and completeness.]]

### 10.1 Analysis Documentation Quality

- [ ] All findings are documented with specific code examples and references
- [ ] Pattern descriptions are clear and implementable by AI agents
- [ ] Analysis includes structured metadata for automated processing
- [ ] Cross-references and relationships between patterns are explicit
- [ ] Analysis context and assumptions are clearly documented

### 10.2 Context Preservation & Handoff Readiness

- [ ] Analysis state and progress can be serialized for agent handoffs
- [ ] Pattern extraction priorities and recommendations are clear
- [ ] Analysis findings support catalog generation workflow requirements
- [ ] Missing information and follow-up analysis needs are identified
- [ ] Quality assurance validation criteria are defined for patterns

### 10.3 Catalog Generation Input Validation

- [ ] Analysis provides sufficient input for catalog generation workflows
- [ ] Pattern quality assessment criteria are applied consistently
- [ ] Extraction recommendations align with catalog taxonomy requirements
- [ ] Implementation examples are complete and testable
- [ ] Documentation quality meets catalog inclusion standards

### 10.4 Modernization & Evolution Planning

- [ ] Analysis supports modernization planning and prioritization
- [ ] Evolution paths from current state to target patterns are identified
- [ ] Migration strategies and approaches are outlined
- [ ] Risk assessment for modernization efforts is provided
- [ ] Success criteria and metrics for modernization are defined

[[LLM: FINAL BROWNFIELD ANALYSIS VALIDATION REPORT

Now that you've completed the brownfield analysis checklist, generate a comprehensive validation report that includes:

1. Constitutional Compliance Summary
   - Analysis framework alignment with SEAD principles
   - Respectful legacy assessment approach validation
   - Context preservation and handoff readiness
   - Mode-appropriate analysis depth confirmation

2. Executive Summary
   - Brownfield analysis quality and completeness (Excellent/Good/Needs Improvement)
   - System overview and architectural assessment
   - Key patterns identified for catalog inclusion
   - Critical modernization opportunities and risks

3. Codebase Assessment Results
   - Structure and organization quality evaluation
   - Technology stack currency and modernization needs
   - Code quality and consistency assessment
   - Architecture pattern identification results

4. Pattern Extraction Opportunities
   - High-value patterns identified by domain
   - Implementation pattern mining results
   - Reusability assessment and prioritization
   - Catalog integration recommendations

5. Anti-Pattern & Technical Debt Analysis
   - Critical anti-patterns and problematic code identification
   - Technical debt quantification and impact assessment
   - Modernization barriers and challenges
   - Risk mitigation strategies and priorities

6. Domain-Specific Analysis
   - Data architecture and persistence pattern assessment
   - UI/UX pattern identification (if applicable)
   - Security and compliance pattern analysis
   - Performance and scalability pattern evaluation

7. AI Agent Readiness Assessment
   - Analysis documentation quality for AI consumption
   - Pattern extraction input validation
   - Context preservation and handoff preparation
   - Catalog generation workflow support

8. Modernization Strategy Recommendations
   - Priority modernization opportunities with business impact
   - Migration strategies and evolution paths
   - Risk assessment and mitigation approaches
   - Success metrics and measurement criteria

After presenting the report, ask the user if they would like detailed analysis of specific domains, components, or guidance on pattern extraction priorities and modernization planning.]]