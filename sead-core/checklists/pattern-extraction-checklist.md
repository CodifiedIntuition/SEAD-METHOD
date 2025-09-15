<!-- Powered by SEAD-METHOD™ Core -->

# SEAD Pattern Extraction Validation Checklist

This checklist serves as a quality gate framework for the SEAD Pattern Extraction Specialist to validate extracted patterns, ensuring they meet SEAD constitutional standards and provide genuine reusability value for catalog inclusion.

[[LLM: MANDATORY CONSTITUTIONAL INITIALIZATION - READ FIRST

Before proceeding with this checklist, you MUST:

1. **Read SEAD Constitutional Rules**: Load and read `/sead-core/constitutional-rules/sead-pattern-extraction-constraints.yaml` - these are MANDATORY constraints that govern all pattern extraction actions
2. **Read Existing Catalog Patterns**: Load and read `/sead-catalog/*/README.md` files to understand established pattern formats and standards
3. **Verify Extraction Context**: Understand the source codebase or requirements from which patterns are being extracted
4. **Validate Mode Constraints**: Determine development mode and apply appropriate quality thresholds for pattern extraction

REQUIRED ARTIFACTS:
Before proceeding with this checklist, ensure you have access to:

1. Source codebase analysis results or pattern identification reports
2. Extracted pattern documentation and implementation examples
3. Pattern usage frequency and context analysis
4. Constitutional framework configuration for current project
5. Existing catalog structure and domain definitions
6. Team architectural preferences and coding standards

CRITICAL: If any required artifacts are missing or inaccessible, STOP and escalate to user for their location or content before proceeding.

PATTERN EXTRACTION TYPE DETECTION:
First, determine the pattern extraction approach:

- **Systematic Extraction**: Comprehensive analysis of entire codebase
- **Targeted Extraction**: Focus on specific architectural domains or components
- **Evolutionary Extraction**: Refining existing patterns based on new implementations
- **Cross-Project Extraction**: Identifying patterns across multiple codebases

CONSTITUTIONAL VALIDATION APPROACH:
For each pattern, you must:

1. **Quality Gate Enforcement** - Apply rigorous criteria for pattern inclusion
2. **Reusability Validation** - Ensure patterns provide genuine abstraction value
3. **Evidence-Based Assessment** - Document specific usage contexts and examples
4. **Constitutional Compliance** - Validate patterns support SEAD governance framework
5. **Catalog Integration** - Ensure patterns fit logically within catalog taxonomy
6. **Anti-Pattern Prevention** - Identify and exclude problematic implementation approaches

EXECUTION MODE:
Ask the user if they want to work through the checklist:

- Pattern by pattern (detailed mode) - Review each pattern individually with comprehensive validation
- Domain by domain (systematic mode) - Review all patterns within each architectural domain
- All at once (comprehensive mode) - Complete full extraction validation and present summary report]]

## 1. CONSTITUTIONAL COMPLIANCE & GOVERNANCE INTEGRATION

[[LLM: Pattern extraction must align with SEAD constitutional principles and support governance objectives. Validate that extracted patterns can enforce constraints appropriately.]]

### 1.1 Constitutional Framework Alignment

- [ ] Extracted patterns support mode-appropriate constraint enforcement (prototype/development/build-to-deploy)
- [ ] Pattern implementation can be validated programmatically for constitutional compliance
- [ ] Patterns include governance metadata for audit and compliance tracking
- [ ] Constitutional rules are embedded within pattern validation logic
- [ ] Pattern violations generate clear, actionable feedback for developers

### 1.2 Context Preservation & Agent Handoffs

- [ ] Patterns maintain sufficient context for seamless agent handoffs
- [ ] Pattern state and implementation progress can be serialized and restored
- [ ] Agent-specific implementation guidance is included within pattern documentation
- [ ] Handoff procedures preserve pattern customization and configuration
- [ ] Pattern dependencies and relationships are explicitly documented

### 1.3 SEAD Methodology Compliance

- [ ] Extracted patterns align with SEAD architectural domain organization
- [ ] Pattern classification follows SEAD taxonomy standards
- [ ] Patterns support progressive constraint enforcement across development modes
- [ ] Documentation format complies with SEAD constitutional documentation standards
- [ ] Pattern evolution mechanisms respect SEAD governance principles

## 2. PATTERN QUALITY & REUSABILITY ASSESSMENT

[[LLM: High-quality patterns are the foundation of an effective catalog. Rigorously evaluate each pattern against quality criteria and reusability standards.]]

### 2.1 Abstraction Quality Validation

- [ ] Pattern abstracts essential complexity while eliminating accidental complexity
- [ ] Abstraction level is appropriate for intended use cases and audience
- [ ] Pattern boundaries are clear with well-defined inputs, outputs, and side effects
- [ ] Pattern handles edge cases and error conditions appropriately
- [ ] Implementation variations are parameterized without compromising pattern integrity

### 2.2 Reusability Evidence & Validation

- [ ] Pattern demonstrates usage in at least 3 different contexts within source codebase
- [ ] Pattern can be applied to similar problems in different architectural layers
- [ ] Customization points are well-defined and don't break pattern functionality
- [ ] Pattern provides measurable value over ad-hoc implementations
- [ ] Pattern reduces development time and increases consistency when properly applied

### 2.3 Implementation Completeness

- [ ] Pattern includes complete, tested implementation examples
- [ ] All dependencies and prerequisites are explicitly documented
- [ ] Configuration options are comprehensive and well-documented
- [ ] Integration points with other patterns are clearly defined
- [ ] Pattern versioning supports backward compatibility and evolution

### 2.4 Documentation Excellence

- [ ] Pattern purpose and problem solved are clearly articulated
- [ ] When to use (and when NOT to use) guidance is provided
- [ ] Step-by-step implementation instructions are complete and testable
- [ ] Common pitfalls and troubleshooting guidance are included
- [ ] Related patterns and alternatives are referenced with trade-off analysis

## 3. TECHNICAL EXCELLENCE & BEST PRACTICES

[[LLM: Patterns must demonstrate technical excellence and follow industry best practices. Validate that patterns represent optimal solutions worthy of reuse.]]

### 3.1 Code Quality Standards

- [ ] Pattern implementation follows team coding standards and conventions
- [ ] Code is clean, readable, and self-documenting
- [ ] Naming conventions are consistent and meaningful
- [ ] Comments explain why, not just what, where appropriate
- [ ] Code structure supports maintainability and future modification

### 3.2 Architecture & Design Quality

- [ ] Pattern follows SOLID principles and established design patterns where appropriate
- [ ] Separation of concerns is properly maintained within pattern implementation
- [ ] Pattern avoids tight coupling and supports loose coupling principles
- [ ] Error handling and logging approaches are comprehensive and consistent
- [ ] Pattern design supports testing and debugging requirements

### 3.3 Security & Performance Considerations

- [ ] Security implications are identified and addressed within pattern design
- [ ] Performance characteristics are documented with benchmarks where relevant
- [ ] Resource usage patterns are appropriate for intended use cases
- [ ] Scalability considerations are addressed and documented
- [ ] Security vulnerabilities and mitigation strategies are documented

### 3.4 Technology Stack Integration

- [ ] Pattern integrates well with established technology stack
- [ ] Framework-specific optimizations are properly implemented
- [ ] Library dependencies are reasonable and well-maintained
- [ ] Pattern works correctly with build systems and deployment pipelines
- [ ] Compatibility with development tools and IDEs is validated

## 4. DOMAIN-SPECIFIC PATTERN VALIDATION

[[LLM: Different architectural domains have specific requirements and standards. Apply domain-specific validation criteria based on pattern classification.]]

### 4.1 API Contracts & Service Patterns

- [ ] API patterns follow RESTful or GraphQL best practices as appropriate
- [ ] Contract definitions are complete with request/response schemas
- [ ] Error handling and status code usage is consistent and meaningful
- [ ] Authentication and authorization patterns are properly integrated
- [ ] Rate limiting, caching, and performance optimizations are addressed

### 4.2 Shared Types & Data Patterns

- [ ] Type definitions are complete with appropriate constraints and validation
- [ ] Data transformation patterns handle edge cases and validation errors
- [ ] Schema evolution strategies support backward compatibility
- [ ] Type relationships and dependencies are clearly defined
- [ ] Serialization and deserialization approaches are optimized and tested

### 4.3 Design System & UI Patterns

- [ ] UI components follow accessibility guidelines and best practices
- [ ] Component API design is intuitive and flexible
- [ ] Visual design consistency is maintained across pattern variations
- [ ] Responsive design considerations are properly addressed
- [ ] Component composition and customization patterns are well-defined

### 4.4 State Management & Data Flow Patterns

- [ ] State management approaches are appropriate for application complexity
- [ ] Data flow patterns are predictable and debuggable
- [ ] State synchronization and consistency mechanisms are robust
- [ ] Performance implications of state patterns are documented and optimized
- [ ] Testing strategies for stateful components are provided

### 4.5 Integration & Communication Patterns

- [ ] External service integration patterns handle failures gracefully
- [ ] Communication protocols are appropriate for use case requirements
- [ ] Message formats and schemas are well-defined and versioned
- [ ] Retry logic, circuit breakers, and resilience patterns are implemented
- [ ] Monitoring and observability patterns are integrated

## 5. CATALOG INTEGRATION & TAXONOMY ALIGNMENT

[[LLM: Patterns must fit logically within catalog taxonomy and integrate well with existing patterns. Validate organizational and structural requirements.]]

### 5.1 Domain Classification Accuracy

- [ ] Pattern is classified within appropriate architectural domain
- [ ] Domain boundaries are respected without unnecessary cross-domain coupling
- [ ] Pattern complexity is appropriate for domain classification level
- [ ] Related patterns within domain are properly referenced and linked
- [ ] Domain-specific naming conventions are followed consistently

### 5.2 Catalog Structure Integration

- [ ] Pattern documentation follows established catalog format and structure
- [ ] File organization aligns with catalog directory conventions
- [ ] Pattern metadata is complete and accurate for search and discovery
- [ ] Cross-references to related patterns are comprehensive and bidirectional
- [ ] Pattern versioning aligns with catalog versioning strategy

### 5.3 Pattern Relationship Validation

- [ ] Dependencies on other patterns are explicitly documented and validated
- [ ] Pattern compositions and combinations are tested and documented
- [ ] Conflicts with existing patterns are identified and resolved
- [ ] Alternative pattern implementations are compared with trade-off analysis
- [ ] Pattern evolution paths are planned and documented

### 5.4 Discovery & Navigation Support

- [ ] Pattern includes appropriate tags and keywords for searchability
- [ ] Usage examples cover common scenarios and use cases
- [ ] Getting started guides support rapid pattern adoption
- [ ] Advanced usage patterns and customizations are documented
- [ ] Troubleshooting and FAQ sections address common issues

## 6. VALIDATION & TESTING FRAMEWORK

[[LLM: Patterns must be testable and verifiable to ensure continued quality and correctness. Validate testing approaches and validation mechanisms.]]

### 6.1 Pattern Implementation Testing

- [ ] Unit tests cover pattern implementation logic and edge cases
- [ ] Integration tests validate pattern interaction with dependencies
- [ ] End-to-end tests demonstrate pattern usage in realistic scenarios
- [ ] Performance tests validate pattern efficiency and scalability
- [ ] Security tests identify vulnerabilities and validate mitigations

### 6.2 Usage Validation & Compliance Checking

- [ ] Pattern usage can be validated programmatically for compliance
- [ ] Constraint violations are detected and reported with clear error messages
- [ ] Pattern implementation guidelines can be enforced through tooling
- [ ] Code review checklists include pattern-specific validation criteria
- [ ] Automated validation integrates with CI/CD pipeline

### 6.3 Documentation & Example Validation

- [ ] All documentation examples are tested and working
- [ ] Code samples can be executed in isolated test environments
- [ ] Configuration examples include all required parameters
- [ ] Step-by-step tutorials are validated through user testing
- [ ] Troubleshooting guides are tested against actual error scenarios

### 6.4 Regression Prevention

- [ ] Pattern modifications undergo regression testing
- [ ] Backward compatibility is maintained or migration paths provided
- [ ] Pattern evolution doesn't break existing implementations
- [ ] Version compatibility matrix is maintained and tested
- [ ] Breaking changes follow established governance and communication processes

## 7. AI AGENT IMPLEMENTATION SUITABILITY

[[LLM: Patterns may be implemented by AI agents. Validate that patterns are structured for AI agent comprehension and implementation.]]

### 7.1 Implementation Clarity & Structure

- [ ] Pattern implementation steps are discrete and clearly sequenced
- [ ] Prerequisites and dependencies are explicitly listed and checkable
- [ ] Success criteria for each implementation step are measurable
- [ ] Error conditions and recovery procedures are well-defined
- [ ] Pattern complexity is appropriate for AI agent implementation capabilities

### 7.2 Metadata & Structured Information

- [ ] Pattern includes structured metadata for automated processing
- [ ] Implementation requirements are machine-readable where possible
- [ ] Validation criteria are specific and programmatically verifiable
- [ ] Pattern relationships are explicitly defined in structured format
- [ ] Configuration options include type information and validation rules

### 7.3 Context Preservation & State Management

- [ ] Pattern implementation state can be tracked and resumed
- [ ] Intermediate results and progress can be serialized and restored
- [ ] Context information is sufficient for implementation handoffs
- [ ] Pattern customizations and configurations are preservable
- [ ] Implementation history and decisions are trackable

### 7.4 Error Handling & Recovery

- [ ] Common implementation errors are identified with specific recovery steps
- [ ] Pattern validation can detect and report implementation issues
- [ ] Self-healing capabilities are built into pattern where appropriate
- [ ] Rollback procedures are defined for failed implementations
- [ ] Debug information and logging support troubleshooting

## 8. ORGANIZATIONAL ADOPTION & CHANGE MANAGEMENT

[[LLM: Patterns must support organizational adoption and team workflow integration. Validate change management and adoption considerations.]]

### 8.1 Team Skill & Knowledge Requirements

- [ ] Required skills and knowledge for pattern implementation are documented
- [ ] Learning curve and training requirements are reasonable
- [ ] Pattern complexity matches team capability and experience level
- [ ] Mentorship and support requirements are identified
- [ ] Knowledge transfer mechanisms are established

### 8.2 Workflow Integration

- [ ] Pattern fits into existing development workflow without major disruption
- [ ] Integration with current tools and processes is validated
- [ ] Pattern adoption can be gradual and incremental
- [ ] Existing code can be migrated to pattern usage systematically
- [ ] Pattern usage doesn't create bottlenecks or dependencies

### 8.3 Value Proposition & Benefits

- [ ] Pattern provides clear, measurable benefits over current approaches
- [ ] Cost-benefit analysis demonstrates positive ROI for pattern adoption
- [ ] Success metrics for pattern usage are defined and trackable
- [ ] Pattern addresses real pain points experienced by development team
- [ ] Business value of pattern adoption is articulated clearly

### 8.4 Resistance & Risk Management

- [ ] Potential sources of resistance to pattern adoption are identified
- [ ] Risk mitigation strategies address technical and organizational concerns
- [ ] Fallback plans exist if pattern adoption encounters significant issues
- [ ] Change management approach addresses team concerns and feedback
- [ ] Communication strategy supports pattern adoption and understanding

[[LLM: FINAL PATTERN EXTRACTION VALIDATION REPORT

Now that you've completed the pattern extraction checklist, generate a comprehensive validation report that includes:

1. Constitutional Compliance Summary
   - Overall constitutional framework alignment
   - Governance integration completeness
   - Context preservation validation
   - Mode-appropriate constraint support

2. Executive Summary
   - Pattern extraction quality assessment (Excellent/Good/Needs Improvement)
   - Total patterns extracted and validated by domain
   - Critical quality issues requiring resolution
   - Recommended patterns ready for catalog inclusion

3. Pattern Quality Analysis
   - Quality gate pass rate and common issues identified
   - Reusability assessment results with evidence
   - Technical excellence evaluation by domain
   - Documentation completeness and clarity scores

4. Catalog Integration Assessment
   - Taxonomy alignment and classification accuracy
   - Pattern relationship validation results
   - Discovery and navigation support evaluation
   - Existing pattern conflict resolution status

5. Implementation Readiness
   - AI agent implementation suitability rating
   - Testing and validation framework completeness
   - Team adoption preparedness assessment
   - Tooling and automation support availability

6. Domain-Specific Analysis
   - Quality assessment by architectural domain
   - Domain-specific best practices compliance
   - Cross-domain pattern integration validation
   - Domain coverage gaps and opportunities

7. Risk Assessment & Mitigation
   - Top 5 risks for successful pattern adoption
   - Technical implementation risks and mitigation strategies
   - Organizational change management risks
   - Quality degradation risks and prevention measures

8. Recommendations & Action Items
   - Must-fix issues before pattern inclusion in catalog
   - Should-fix issues for optimal pattern quality
   - Nice-to-have improvements for future iterations
   - Specific action items with priorities and timelines

After presenting the report, ask the user if they would like detailed analysis of specific patterns, domains, or guidance on addressing identified quality issues.]]