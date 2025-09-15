<!-- Powered by SEAD-METHOD™ Core -->

# SEAD Catalog Generation Validation Checklist

This checklist serves as a comprehensive framework for the SEAD Catalog Architect to validate catalog generation processes, ensuring high-quality, reusable patterns that align with SEAD constitutional constraints and organizational standards.

[[LLM: MANDATORY CONSTITUTIONAL INITIALIZATION - READ FIRST

Before proceeding with this checklist, you MUST:

1. **Read SEAD Constitutional Rules**: Load and read `/sead-core/constitutional-rules/sead-catalog-architect-constraints.yaml` - these are MANDATORY constraints that govern all catalog generation actions
2. **Read Existing Catalog Structure**: Load and read `/sead-catalog/*/README.md` files to understand current catalog organization and patterns
3. **Verify Mode Constraints**: Determine if you're in prototype, development, or build-to-deploy mode and apply appropriate constraint levels for catalog generation
4. **Validate Context Preservation**: Ensure catalog generation maintains context for seamless agent handoffs

REQUIRED ARTIFACTS:
Before proceeding with this checklist, ensure you have access to:

1. Source codebase or greenfield requirements for catalog generation
2. Existing catalog structure and patterns (if any)
3. Pattern extraction reports and analysis documents
4. Project technical specifications and constraints
5. Team architectural preferences and standards
6. Constitutional framework configuration for current project mode

CRITICAL: If any required artifacts are missing or inaccessible, STOP and escalate to user for their location or content before proceeding.

CATALOG GENERATION TYPE DETECTION:
First, determine the catalog generation type:

- **Brownfield**: Extracting patterns from existing codebase
- **Greenfield**: Creating catalog structure for new development
- **Hybrid**: Combining existing patterns with new development needs
- **Evolution**: Extending/refining existing catalog patterns

CONSTITUTIONAL VALIDATION APPROACH:
For each section, you must:

1. **Catalog Compliance First** - Ensure generated patterns align with SEAD catalog methodology
2. **Quality Gate Enforcement** - Apply rigorous quality criteria for pattern inclusion
3. **Evidence-Based Validation** - Cite specific pattern examples and usage contexts
4. **Constitutional Adherence** - Apply mode-appropriate constraints for catalog generation
5. **Reusability Assessment** - Validate that patterns provide genuine reuse value
6. **Anti-Drift Protection** - Ensure catalog prevents architectural inconsistency

EXECUTION MODE:
Ask the user if they want to work through the checklist:

- Section by section (interactive mode) - Review each section, present findings, get confirmation before proceeding
- All at once (comprehensive mode) - Complete full validation and present comprehensive report at end]]

## 1. CONSTITUTIONAL COMPLIANCE & CATALOG FRAMEWORK

[[LLM: Catalog generation must align with SEAD constitutional principles. This section validates that the generation process respects mode constraints and organizational governance.]]

### 1.1 Constitutional Framework Alignment

- [ ] Catalog generation mode (prototype/development/build-to-deploy) identified and constraints applied
- [ ] Constitutional rules for catalog architect properly loaded and referenced
- [ ] Mode-appropriate quality thresholds established for pattern inclusion
- [ ] Catalog generation scope aligns with current development mode constraints
- [ ] Context preservation mechanisms established for agent handoff continuity

### 1.2 SEAD Methodology Compliance

- [ ] Catalog structure follows SEAD domain organization principles
- [ ] Pattern classification aligns with SEAD architectural domains
- [ ] Constitutional constraint enforcement mechanisms integrated into catalog patterns
- [ ] Catalog supports progressive constraint application across development modes
- [ ] Documentation standards comply with SEAD constitutional requirements

### 1.3 Organizational Governance Validation

- [ ] Catalog generation respects organizational architectural standards
- [ ] Team coding conventions and preferences incorporated into patterns
- [ ] Technology stack constraints properly reflected in catalog structure
- [ ] Compliance requirements (security, regulatory) addressed in catalog patterns
- [ ] Approval processes for catalog evolution clearly defined

## 2. PATTERN QUALITY & SELECTION CRITERIA

[[LLM: High-quality patterns are essential for catalog success. Evaluate each potential pattern against rigorous quality criteria before inclusion.]]

### 2.1 Pattern Identification Quality Gates

- [ ] All identified patterns demonstrate genuine reusability across multiple contexts
- [ ] Patterns address real architectural concerns and provide concrete value
- [ ] Pattern complexity is appropriate (not too simple to be trivial, not too complex to be maintainable)
- [ ] Each pattern has clear boundaries and well-defined responsibilities
- [ ] Patterns avoid anti-patterns and demonstrate architectural best practices

### 2.2 Reusability Assessment

- [ ] Patterns abstract common solutions without being overly generic
- [ ] Each pattern can be applied in at least 3 different contexts
- [ ] Pattern parameterization allows customization without breaking core functionality
- [ ] Dependencies between patterns are minimal and clearly documented
- [ ] Patterns can evolve independently without breaking existing implementations

### 2.3 Documentation & Usability Validation

- [ ] Each pattern includes clear usage examples and implementation guidance
- [ ] Pattern documentation explains the problem solved and when to use it
- [ ] Integration instructions are comprehensive and testable
- [ ] Common pitfalls and troubleshooting guidance provided
- [ ] Pattern versions are clearly defined with migration guidance

### 2.4 Technical Excellence Standards

- [ ] All patterns follow industry best practices for their respective domains
- [ ] Security considerations are addressed within pattern design
- [ ] Performance implications are documented and optimized
- [ ] Patterns support testing and debugging requirements
- [ ] Accessibility requirements built into UI/UX patterns where applicable

## 3. CATALOG ORGANIZATION & TAXONOMY

[[LLM: Logical organization enables effective pattern discovery and usage. Validate that the catalog structure supports team workflow and scales effectively.]]

### 3.1 Domain Structure Validation

- [ ] Catalog domains align with architectural layers and team responsibilities
- [ ] Domain boundaries are clear with minimal overlap between categories
- [ ] Each domain contains 3-15 patterns (not too sparse, not overwhelming)
- [ ] Domain hierarchy supports both browsing and search-based discovery
- [ ] Cross-domain relationships are documented and navigable

### 3.2 Naming & Convention Consistency

- [ ] Pattern naming follows consistent conventions across all domains
- [ ] File and directory structure is predictable and logical
- [ ] Version numbering scheme is applied consistently
- [ ] Tag and categorization systems are comprehensive and accurate
- [ ] Search and filtering capabilities support multiple discovery approaches

### 3.3 Catalog Navigation & Discoverability

- [ ] README files provide clear entry points and navigation guidance
- [ ] Index files enable quick pattern discovery by use case
- [ ] Cross-references and related patterns are well-linked
- [ ] Getting started guides support new team member onboarding
- [ ] Advanced usage patterns are documented for experienced users

### 3.4 Scalability & Evolution Planning

- [ ] Catalog structure can accommodate future pattern additions
- [ ] Pattern deprecation and migration processes are defined
- [ ] Versioning strategy supports backward compatibility requirements
- [ ] Catalog evolution governance processes are established
- [ ] Metrics for catalog usage and effectiveness are defined

## 4. PATTERN EXTRACTION & ANALYSIS VALIDATION

[[LLM: For brownfield catalog generation, validate that pattern extraction is comprehensive and accurate. For greenfield, ensure pattern capture mechanisms are established.]]

### 4.1 Extraction Completeness (Brownfield)

- [ ] All architectural layers and domains have been systematically analyzed
- [ ] Pattern extraction covers both explicit and implicit architectural decisions
- [ ] Edge cases and exception handling patterns have been identified
- [ ] Integration and communication patterns between components captured
- [ ] Configuration and deployment patterns properly extracted

### 4.2 Pattern Abstraction Quality

- [ ] Extracted patterns are properly abstracted from specific implementation details
- [ ] Common variations and options are parameterized appropriately
- [ ] Pattern abstractions maintain essential complexity while removing accidental complexity
- [ ] Abstraction level is appropriate for intended audience and use cases
- [ ] Pattern boundaries respect separation of concerns principles

### 4.3 Context & Usage Analysis

- [ ] Each pattern includes context about when and why it should be used
- [ ] Usage frequency and importance are documented
- [ ] Alternatives and trade-offs are clearly explained
- [ ] Prerequisites and dependencies are fully documented
- [ ] Success criteria and validation approaches are defined

### 4.4 Validation & Testing Framework

- [ ] Pattern implementations can be validated through automated testing
- [ ] Example implementations are provided and tested
- [ ] Integration testing approaches are documented
- [ ] Pattern compliance can be verified programmatically
- [ ] Regression testing prevents pattern degradation over time

## 5. IMPLEMENTATION GUIDANCE & TOOLING

[[LLM: Patterns must be implementable by development teams and AI agents. Validate that guidance is clear, complete, and actionable.]]

### 5.1 Implementation Clarity

- [ ] Step-by-step implementation instructions are provided for each pattern
- [ ] Code examples are complete, tested, and working
- [ ] Configuration examples include all necessary parameters
- [ ] Dependencies and prerequisites are explicitly listed
- [ ] Common implementation mistakes are identified and addressed

### 5.2 AI Agent Implementation Support

- [ ] Patterns include structured metadata for automated processing
- [ ] Implementation steps are broken down into discrete, actionable tasks
- [ ] Validation criteria are specific and measurable
- [ ] Error handling and recovery procedures are well-defined
- [ ] Pattern complexity is appropriate for AI agent implementation

### 5.3 Team Onboarding & Training

- [ ] Getting started documentation supports rapid team onboarding
- [ ] Training materials and workshops are planned or available
- [ ] Mentorship and support processes are established
- [ ] Common questions and answers are documented
- [ ] Success stories and case studies are available

### 5.4 Tooling & Automation Integration

- [ ] CLI tools for pattern generation and validation are available or planned
- [ ] IDE integrations support pattern discovery and implementation
- [ ] Build system integration automates pattern validation
- [ ] Documentation generation is automated and up-to-date
- [ ] Metrics and reporting tools provide usage insights

## 6. CONSTITUTIONAL INTEGRATION & CONSTRAINT ENFORCEMENT

[[LLM: Catalog patterns must integrate with SEAD constitutional framework to provide constraint enforcement and governance capabilities.]]

### 6.1 Constraint Definition & Validation

- [ ] Each pattern defines specific constraints that must be followed
- [ ] Constraints are appropriate for different development modes (prototype/development/build-to-deploy)
- [ ] Validation mechanisms can detect constraint violations
- [ ] Constraint violations provide clear, actionable error messages
- [ ] Progressive constraint enforcement supports development workflow

### 6.2 Mode-Aware Pattern Behavior

- [ ] Patterns adapt behavior based on current development mode
- [ ] Prototype mode patterns prioritize speed and experimentation
- [ ] Development mode patterns balance flexibility with structure
- [ ] Build-to-deploy mode patterns enforce strict compliance and quality
- [ ] Mode transitions are supported without breaking existing implementations

### 6.3 Context Preservation & Agent Handoffs

- [ ] Patterns maintain context information for seamless agent handoffs
- [ ] Pattern state can be serialized and restored across sessions
- [ ] Handoff procedures preserve pattern implementation context
- [ ] Agent-specific pattern information is properly maintained
- [ ] Context loss prevention mechanisms are established

### 6.4 Governance & Compliance Reporting

- [ ] Pattern usage can be tracked and reported for governance purposes
- [ ] Compliance metrics are defined and measurable
- [ ] Audit trails for pattern modifications are maintained
- [ ] Exception handling and approval processes are documented
- [ ] Regular review and validation processes are established

## 7. CATALOG DEPLOYMENT & ADOPTION STRATEGY

[[LLM: Catalog success requires effective deployment and team adoption. Validate that rollout strategy maximizes adoption and minimizes disruption.]]

### 7.1 Deployment Planning & Execution

- [ ] Catalog deployment strategy is defined and tested
- [ ] Version control and distribution mechanisms are established
- [ ] Rollback procedures are available in case of issues
- [ ] Integration with existing development tools is validated
- [ ] Performance impact of catalog usage is acceptable

### 7.2 Team Adoption & Change Management

- [ ] Adoption strategy addresses team skill levels and concerns
- [ ] Change management approach minimizes disruption to ongoing work
- [ ] Incentives and benefits of catalog usage are clearly communicated
- [ ] Resistance points are identified and addressed proactively
- [ ] Success metrics for adoption are defined and tracked

### 7.3 Training & Support Infrastructure

- [ ] Comprehensive training materials are available for all team members
- [ ] Support channels and escalation procedures are established
- [ ] Expert resources are available for complex pattern implementation
- [ ] Documentation is accessible and searchable
- [ ] Continuous improvement feedback mechanisms are in place

### 7.4 Monitoring & Evolution Management

- [ ] Catalog usage metrics are collected and analyzed
- [ ] Pattern effectiveness is measured and reported
- [ ] Evolution and improvement processes are systematic
- [ ] Community feedback is incorporated into catalog development
- [ ] Long-term maintenance and sustainability plans are established

## 8. EXTERNAL INTEGRATION & COMPATIBILITY

[[LLM: Catalogs must integrate with existing tools, frameworks, and external systems. Validate compatibility and integration quality.]]

### 8.1 Technology Stack Integration

- [ ] Catalog patterns are compatible with team's technology stack
- [ ] Framework-specific patterns are properly adapted
- [ ] Library and dependency requirements are reasonable and maintainable
- [ ] Integration with build systems and deployment pipelines is validated
- [ ] Performance implications of pattern usage are acceptable

### 8.2 External System & API Integration

- [ ] External service integration patterns are secure and reliable
- [ ] API patterns follow established conventions and standards
- [ ] Error handling for external dependencies is comprehensive
- [ ] Rate limiting and quotas are properly addressed
- [ ] Fallback and resilience patterns are included

### 8.3 Standards & Compliance Alignment

- [ ] Industry standard patterns are properly implemented
- [ ] Regulatory compliance requirements are addressed
- [ ] Security standards are met or exceeded
- [ ] Accessibility guidelines are followed for UI patterns
- [ ] Documentation standards align with organizational requirements

### 8.4 Vendor & Platform Compatibility

- [ ] Cloud platform patterns are portable or platform-specific variations exist
- [ ] Vendor lock-in risks are identified and mitigated
- [ ] Migration patterns support platform transitions
- [ ] Cost implications of pattern usage are documented
- [ ] Alternative implementations are available where appropriate

[[LLM: FINAL CATALOG GENERATION VALIDATION REPORT

Now that you've completed the checklist, generate a comprehensive validation report that includes:

1. Constitutional Compliance Summary
   - Overall constitutional framework alignment
   - Mode-appropriate constraint application
   - Governance integration completeness
   - Context preservation validation

2. Executive Summary
   - Catalog generation readiness (Ready/Needs Work/Not Ready)
   - Critical issues that must be addressed
   - Key strengths of the generated catalog
   - Recommended next steps

3. Pattern Quality Analysis
   - Total patterns generated/validated by domain
   - Quality gate pass rate and common issues
   - Reusability assessment results
   - Documentation completeness scores

4. Catalog Organization Assessment
   - Domain structure effectiveness
   - Navigation and discoverability rating
   - Naming consistency validation
   - Scalability and evolution readiness

5. Implementation Readiness
   - Team onboarding preparedness
   - AI agent implementation suitability
   - Tooling and automation coverage
   - Training and support infrastructure

6. Risk Assessment & Mitigation
   - Top 5 risks for catalog adoption success
   - Technical implementation risks
   - Organizational adoption challenges
   - Mitigation strategies with timelines

7. Adoption Strategy Validation
   - Deployment readiness assessment
   - Change management plan evaluation
   - Success metrics and monitoring setup
   - Long-term sustainability planning

8. Recommendations & Next Steps
   - Must-fix items before deployment
   - Should-fix items for optimal adoption
   - Nice-to-have improvements for future versions
   - Specific action items with owners and timelines

After presenting the report, ask the user if they would like detailed analysis of any specific section or guidance on addressing identified issues.]]