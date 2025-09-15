<!-- Powered by SEAD-METHOD™ Core -->

# SEAD Approve Solution Task

## Purpose

To systematically evaluate and approve technical solutions using SEAD constitutional constraints, catalog pattern compliance, and progressive validation criteria. This task ensures that proposed solutions align with catalog patterns, meet constitutional requirements, and preserve context for implementation and future maintenance while balancing innovation with consistency.

## SEQUENTIAL Task Execution (Do not proceed until current Task is complete)

### 0. Load SEAD Configuration and Solution Context

- Load `.sead-core/sead.config.yaml` and `.sead-core/sead-core/core-config.yaml` from the project root
- If files do not exist, HALT and inform the user: "SEAD configuration files not found. Run 'sead init' or 'sead catalog generate --source .' to initialize SEAD project"
- Extract key configurations: `validation.*`, `catalog.*`, `modes.*`, `governance.*`, `approval.*`
- **SEAD Enhancement**: Load current development mode and approval criteria
- **SEAD Enhancement**: Validate catalog patterns relevant to solution domain
- **SEAD Enhancement**: Check constitutional constraint framework for solution evaluation

### 1. Solution Analysis and Context Understanding

#### 1.1 Solution Requirements and Scope Analysis

- Review proposed solution requirements and technical specifications
- **SEAD Enhancement**: Map solution to catalog domains:
  - API contracts affected or required
  - Shared types impacted or created
  - Design system components involved
  - State management patterns affected
  - Error handling patterns required
  - Authentication patterns impacted
  - Integration patterns needed
  - Testing patterns required
- **SEAD Enhancement**: Identify solution scope and complexity relative to current catalog patterns

#### 1.2 Constitutional Framework Context Assessment

- **SEAD Enhancement**: Determine appropriate SEAD mode for solution evaluation:
  - **PROTOTYPE**: Experimental solutions, pattern exploration, high uncertainty acceptance
  - **DEVELOPMENT**: Standard solutions, catalog extension acceptable, balanced validation
  - **BUILD-TO-DEPLOY**: Production-critical solutions, strict catalog compliance required
- **SEAD Enhancement**: Load mode-specific approval criteria and validation requirements
- **SEAD Enhancement**: Review constitutional constraints applicable to solution domain

### 2. Catalog Pattern Compliance Evaluation

#### 2.1 Existing Pattern Analysis

- **SEAD Enhancement**: Evaluate solution alignment with existing catalog patterns:
  - **Direct Compliance**: Solution uses existing patterns without modification
  - **Pattern Extension**: Solution extends existing patterns with documented rationale
  - **Pattern Evolution**: Solution enhances existing patterns with broad applicability
  - **Pattern Creation**: Solution requires new patterns with clear justification

#### 2.2 Pattern Integration Assessment

- **SEAD Enhancement**: Assess catalog pattern integration quality:
  - **Consistency**: Solution maintains consistency with existing pattern philosophy
  - **Interoperability**: Solution integrates seamlessly with existing catalog patterns
  - **Reusability**: Solution creates reusable patterns for future applications
  - **Documentation**: Solution includes comprehensive pattern documentation and examples

- **SEAD Enhancement**: Evaluate pattern evolution impact:
  - Effects on existing pattern usage and backward compatibility
  - Migration requirements for existing implementations
  - Long-term catalog maintenance and evolution implications
  - Cross-domain pattern interaction and dependency effects

### 3. Constitutional Constraint Compliance Assessment

#### 3.1 Mode-Specific Constraint Evaluation

**PROTOTYPE MODE Constraint Assessment:**
- **SEAD Enhancement**: Experimental pattern acceptance with documentation requirements
- **SEAD Enhancement**: Innovation encouragement balanced with learning capture
- **SEAD Enhancement**: Flexible validation criteria appropriate for exploration
- **SEAD Enhancement**: Context preservation requirements for pattern evolution

**DEVELOPMENT MODE Constraint Assessment:**
- **SEAD Enhancement**: Balanced compliance requirements with acceptable deviations
- **SEAD Enhancement**: Pattern evolution support with proper approval and documentation
- **SEAD Enhancement**: Quality gate compliance with reasonable flexibility
- **SEAD Enhancement**: Integration requirements with existing catalog patterns

**BUILD-TO-DEPLOY MODE Constraint Assessment:**
- **SEAD Enhancement**: Strict catalog compliance with zero tolerance for violations
- **SEAD Enhancement**: Comprehensive validation requirements with full testing coverage
- **SEAD Enhancement**: Security and performance requirements with established benchmarks
- **SEAD Enhancement**: Production readiness with complete documentation and monitoring

#### 3.2 Cross-Cutting Constitutional Validation

- **SEAD Enhancement**: Context Preservation Assessment:
  - Solution maintains agent handoff context and decision history
  - Implementation guidance preserves rationale and architectural decisions
  - Documentation enables effective knowledge transfer and maintenance
  - Pattern usage examples support future development and evolution

### 4. Technical Solution Quality Assessment

#### 4.1 Architecture and Design Quality Evaluation

- **SEAD Enhancement**: Technical architecture assessment with catalog pattern integration:
  - Solution architecture aligns with established catalog architectural patterns
  - Integration points follow catalog integration patterns and best practices
  - Error handling and resilience follow catalog error handling patterns
  - Performance characteristics align with catalog performance patterns

#### 4.2 Implementation Quality and Maintainability Assessment

- **SEAD Enhancement**: Implementation quality evaluation:
  - Code quality meets constitutional standards and catalog pattern guidelines
  - Testing strategy uses catalog test patterns and meets coverage requirements
  - Documentation quality enables effective maintenance and evolution
  - Security implementation follows catalog authentication and authorization patterns

### 5. Risk Assessment and Mitigation Analysis

#### 5.1 Technical Risk Evaluation

- **SEAD Enhancement**: Technical risk assessment with catalog pattern context:
  - Pattern fragmentation risk from solution implementation
  - Backward compatibility risk with existing catalog patterns
  - Performance and security risk relative to catalog baseline patterns
  - Integration risk with existing system components and patterns

#### 5.2 Governance and Compliance Risk Assessment

- **SEAD Enhancement**: Constitutional compliance risk evaluation:
  - Risk of creating precedent for future constitutional violations
  - Risk of catalog pattern inconsistency and fragmentation
  - Risk of context preservation failure in future development
  - Risk of escalating technical debt and maintenance burden

### 6. Approval Decision Framework

#### 6.1 Approval Criteria Evaluation Matrix

- **SEAD Enhancement**: Systematic evaluation against SEAD approval criteria:

**Catalog Pattern Compliance (Weight: 40%)**
- Pattern usage consistency and integration quality
- Pattern evolution appropriateness and documentation
- Long-term catalog health and maintainability impact

**Constitutional Constraint Adherence (Weight: 30%)**
- Mode-specific constraint compliance level
- Quality gate satisfaction and validation coverage
- Context preservation and agent handoff support

**Technical Quality and Innovation (Weight: 20%)**
- Architecture quality and integration soundness
- Implementation quality and maintainability
- Innovation value balanced with consistency requirements

**Risk Management and Mitigation (Weight: 10%)**
- Technical risk assessment and mitigation strategy
- Governance risk evaluation and prevention measures
- Long-term impact on SEAD methodology effectiveness

#### 6.2 Decision Rationale Documentation

- **SEAD Enhancement**: Comprehensive approval decision documentation:
  - Detailed rationale for approval or rejection with specific criteria references
  - Catalog pattern impact analysis with long-term implications
  - Constitutional constraint compliance assessment with mode-specific considerations
  - Implementation guidance with context preservation requirements

### 7. Approval Outcome and Implementation Guidance

#### 7.1 Approval Decision Communication

**APPROVED Solutions:**
- **SEAD Enhancement**: Clear approval communication with implementation guidance:
  - Catalog pattern usage requirements and integration specifications
  - Constitutional constraint compliance requirements and validation criteria
  - Context preservation requirements for implementation and maintenance
  - Quality assurance requirements and acceptance criteria

**CONDITIONALLY APPROVED Solutions:**
- **SEAD Enhancement**: Conditional approval with specific requirements:
  - Required modifications for full catalog pattern compliance
  - Additional validation requirements and quality gate criteria
  - Documentation improvements needed for context preservation
  - Timeline for condition satisfaction and re-evaluation

**REJECTED Solutions:**
- **SEAD Enhancement**: Rejection communication with improvement guidance:
  - Specific constitutional violations or catalog pattern conflicts
  - Required changes for future approval consideration
  - Alternative approaches aligned with catalog patterns
  - Learning opportunities and pattern evolution suggestions

#### 7.2 Implementation Context Package Creation

- **SEAD Enhancement**: Implementation guidance package for approved solutions:
  - Catalog pattern integration specifications with usage examples
  - Constitutional constraint compliance requirements with validation procedures
  - Context preservation instructions for agent handoffs and documentation
  - Quality assurance criteria with testing and validation requirements

### 8. Post-Approval Monitoring and Validation

#### 8.1 Implementation Tracking and Validation

- **SEAD Enhancement**: Post-approval implementation monitoring:
  - Catalog pattern compliance tracking during implementation
  - Constitutional constraint adherence validation at key milestones
  - Context preservation effectiveness assessment
  - Quality gate satisfaction and validation coverage monitoring

#### 8.2 Learning Integration and Process Improvement

- **SEAD Enhancement**: Approval process improvement integration:
  - Lessons learned from approval decision outcomes
  - Catalog pattern evolution insights from solution implementation
  - Constitutional constraint framework improvements based on real-world application
  - Agent workflow and context preservation enhancements

## SEAD Success Criteria

- Solution approval process maintains catalog pattern integrity and consistency
- Constitutional constraint compliance is balanced with innovation and development velocity
- Approval decisions preserve context for effective implementation and maintenance
- Catalog pattern evolution is managed systematically through solution approval process
- Risk assessment accurately identifies and mitigates governance and technical risks
- Approval outcomes strengthen SEAD methodology and organizational learning

## SEAD Innovation Benefits

- **Systematic Governance**: Constitutional framework provides consistent solution evaluation criteria
- **Pattern Evolution**: Approval process manages catalog pattern evolution while maintaining consistency
- **Context Preservation**: Approval decisions maintain agent handoff context and decision history
- **Quality Assurance**: Progressive validation ensures solution quality appropriate for development mode
- **Learning Integration**: Approval process strengthens SEAD methodology through systematic feedback

## Output

Comprehensive solution approval outcome including:
- Detailed approval decision with specific criteria evaluation
- Catalog pattern compliance assessment and integration guidance
- Constitutional constraint adherence evaluation and validation requirements
- Implementation context package for approved solutions
- Risk assessment and mitigation strategy for identified concerns
- Process improvement recommendations for future approval effectiveness