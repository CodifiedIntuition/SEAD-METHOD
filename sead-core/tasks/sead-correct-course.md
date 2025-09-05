<!-- Powered by SEAD-METHOD™ Core -->

# SEAD Correct Course Task

## Purpose

To analyze and correct development trajectory when implementation diverges from SEAD constitutional constraints, catalog compliance, or story requirements. This task provides systematic course correction that preserves context, maintains catalog integrity, and ensures constitutional compliance while minimizing development disruption and technical debt accumulation.

## SEQUENTIAL Task Execution (Do not proceed until current Task is complete)

### 0. Load SEAD Configuration and Validate Current State

- Load `{root}/sead.config.yaml` and `{root}/sead-core/core-config.yaml` from the project root
- If files do not exist, HALT and inform the user: "SEAD configuration files not found. Run 'sead init' or 'sead catalog generate --source .' to initialize SEAD project"
- Extract key configurations: `devStoryLocation`, `prd.*`, `architecture.*`, `workflow.*`, `catalog.*`, `modes.*`
- **SEAD Enhancement**: Load current development mode and constraint configuration
- **SEAD Enhancement**: Validate catalog state and pattern integrity
- **SEAD Enhancement**: Check constitutional compliance framework status

### 1. Current State Analysis and Deviation Detection

#### 1.1 Load Current Implementation Context

- Identify current story or development context requiring course correction
- Load relevant story file and implementation status
- **SEAD Enhancement**: Load catalog patterns that should be in use
- **SEAD Enhancement**: Load constitutional constraints applicable to current mode
- **SEAD Enhancement**: Analyze agent handoff history and context preservation state

#### 1.2 Deviation Analysis with Constitutional Framework

**Constitutional Compliance Assessment:**
- **SEAD Enhancement**: Evaluate current implementation against mode-specific constraints:
  - **PROTOTYPE MODE**: Pattern documentation and experimentation guidelines
  - **DEVELOPMENT MODE**: Catalog extension policies and validation requirements
  - **BUILD-TO-DEPLOY MODE**: Strict catalog compliance and constraint adherence
- **SEAD Enhancement**: Identify constitutional violations and their impact severity
- **SEAD Enhancement**: Assess constraint enforcement gaps and validation failures

**Catalog Pattern Compliance Assessment:**
- **SEAD Enhancement**: Compare current implementation with required catalog patterns
- **SEAD Enhancement**: Identify catalog pattern deviations:
  - Inconsistent API contract usage
  - Non-standard type definitions
  - Design system compliance gaps
  - State management pattern violations
  - Error handling inconsistencies
  - Authentication pattern deviations
- **SEAD Enhancement**: Assess pattern evolution opportunities vs. compliance correction needs

#### 1.3 Impact Analysis and Risk Assessment

**Technical Impact Assessment:**
- **SEAD Enhancement**: Analyze technical debt introduced by deviations
- **SEAD Enhancement**: Assess catalog fragmentation and consistency impact
- **SEAD Enhancement**: Evaluate security and performance implications
- **SEAD Enhancement**: Identify cascading effects on other components and stories

**Project Impact Assessment:**
- **SEAD Enhancement**: Evaluate development velocity impact
- **SEAD Enhancement**: Assess team consistency and knowledge sharing implications
- **SEAD Enhancement**: Analyze deployment risk and quality assurance challenges
- **SEAD Enhancement**: Consider long-term maintenance burden

### 2. Root Cause Analysis with SEAD Context

#### 2.1 Constitutional Constraint Analysis

- **SEAD Enhancement**: Identify why constitutional constraints were not followed:
  - Inadequate constraint awareness or training
  - Conflicting requirements or unclear constraint guidance
  - Technical limitations preventing compliant implementation
  - Time pressure compromising quality gates
- **SEAD Enhancement**: Evaluate constraint framework effectiveness and clarity
- **SEAD Enhancement**: Assess mode selection appropriateness for requirements

#### 2.2 Catalog Pattern Usage Analysis

- **SEAD Enhancement**: Identify catalog pattern usage failures:
  - Catalog patterns not discovered or understood
  - Pattern documentation insufficient for implementation
  - Patterns inappropriate for specific requirements
  - Pattern evolution needed but not performed
- **SEAD Enhancement**: Evaluate catalog completeness and accessibility
- **SEAD Enhancement**: Assess pattern quality and implementation guidance

#### 2.3 Context Preservation and Agent Handoff Analysis

- **SEAD Enhancement**: Analyze context preservation failures:
  - Incomplete context transfer between agent sessions
  - Missing catalog pattern context or references
  - Lost constitutional constraint context
  - Inadequate technical decision history preservation
- **SEAD Enhancement**: Evaluate agent handoff effectiveness and documentation quality

### 3. Course Correction Strategy with Constitutional Guidance

#### 3.1 Correction Approach Selection

**Immediate Correction Strategy:**
- **SEAD Enhancement**: For critical constitutional violations requiring immediate attention:
  - Security pattern compliance failures
  - API contract violations affecting integrations
  - Data consistency pattern violations
  - Authentication/authorization bypass issues

**Progressive Correction Strategy:**
- **SEAD Enhancement**: For consistency improvements and pattern standardization:
  - Design system alignment opportunities
  - State management pattern consolidation
  - Error handling consistency improvements
  - Testing pattern implementation

**Evolutionary Correction Strategy:**
- **SEAD Enhancement**: For pattern evolution and catalog improvement:
  - New pattern creation from successful experiments
  - Pattern documentation and standardization
  - Cross-component consistency improvements
  - Performance optimization pattern development

#### 3.2 Mode-Appropriate Correction Planning

- **SEAD Enhancement**: Adjust correction approach based on current SEAD mode:
  - **PROTOTYPE MODE**: Focus on pattern documentation and experimentation capture
  - **DEVELOPMENT MODE**: Balance pattern compliance with evolutionary improvements
  - **BUILD-TO-DEPLOY MODE**: Prioritize strict compliance and validation requirements
- **SEAD Enhancement**: Consider mode transition if current mode inappropriate for correction needs

### 4. Corrective Implementation Planning with Catalog Integration

#### 4.1 Technical Correction Planning

**Catalog Pattern Integration:**
- **SEAD Enhancement**: Map required corrections to catalog patterns:
  - API contracts to implement or align with
  - Shared types to standardize or consolidate
  - UI components to align with design system
  - State management patterns to implement
  - Error handling patterns to standardize
- **SEAD Enhancement**: Plan pattern evolution where existing patterns insufficient
- **SEAD Enhancement**: Design implementation strategy that minimizes disruption

**Constitutional Compliance Restoration:**
- **SEAD Enhancement**: Plan constraint compliance restoration:
  - Validation pipeline implementation or fixes
  - Quality gate establishment or strengthening
  - Documentation and approval workflow correction
  - Agent handoff context preservation improvement
- **SEAD Enhancement**: Design progressive compliance improvement strategy

#### 4.2 Implementation Sequencing and Risk Management

- **SEAD Enhancement**: Sequence corrections to minimize risk:
  - Critical compliance issues first (security, data integrity)
  - High-impact consistency improvements second
  - Quality of life and efficiency improvements third
- **SEAD Enhancement**: Plan rollback strategies for each correction phase
- **SEAD Enhancement**: Design testing and validation approach for corrections

### 5. Context Preservation and Documentation Update

#### 5.1 Corrective Action Documentation

- **SEAD Enhancement**: Document deviation analysis and correction rationale
- **SEAD Enhancement**: Update story context with correction decisions and implementation
- **SEAD Enhancement**: Record constitutional compliance restoration steps
- **SEAD Enhancement**: Document catalog pattern changes and evolution decisions

#### 5.2 Agent Context Package Updates

- **SEAD Enhancement**: Update developer agent context with corrected requirements:
  - Revised catalog pattern requirements and usage guidance
  - Updated constitutional constraint summary
  - Corrected implementation approach and technical decisions
  - Enhanced quality assurance requirements and validation criteria
- **SEAD Enhancement**: Prepare context for future agent handoffs with lessons learned

### 6. Corrective Implementation Execution

#### 6.1 Systematic Implementation with Validation

- **SEAD Enhancement**: Implement corrections following planned sequence
- **SEAD Enhancement**: Validate each correction phase against:
  - Constitutional constraint compliance
  - Catalog pattern integration success
  - Functional requirement preservation
  - Quality and performance maintenance
- **SEAD Enhancement**: Monitor context preservation and agent handoff continuity

#### 6.2 Progressive Validation and Quality Assurance

- **SEAD Enhancement**: Implement mode-appropriate validation:
  - Catalog pattern compliance verification
  - Constitutional constraint adherence testing
  - Integration testing with existing functionality
  - Performance and security impact assessment
- **SEAD Enhancement**: Conduct agent handoff validation to ensure context preservation

### 7. Course Correction Validation and Stabilization

#### 7.1 Correction Effectiveness Assessment

- **SEAD Enhancement**: Validate constitutional compliance restoration
- **SEAD Enhancement**: Verify catalog pattern integration success
- **SEAD Enhancement**: Confirm story requirement fulfillment
- **SEAD Enhancement**: Assess technical debt reduction and code quality improvement

#### 7.2 Process Improvement Integration

- **SEAD Enhancement**: Update SEAD configuration based on correction insights:
  - Constraint framework improvements
  - Catalog pattern documentation enhancements
  - Agent handoff process improvements
  - Validation pipeline strengthening
- **SEAD Enhancement**: Share lessons learned for future deviation prevention

### 8. Stabilization and Future Prevention

#### 8.1 Long-term Stability Measures

- **SEAD Enhancement**: Implement monitoring for similar deviations
- **SEAD Enhancement**: Strengthen validation pipelines and quality gates
- **SEAD Enhancement**: Improve catalog pattern accessibility and documentation
- **SEAD Enhancement**: Enhance constitutional constraint training and awareness

#### 8.2 Continuous Improvement Integration

- **SEAD Enhancement**: Extract pattern improvements from correction process
- **SEAD Enhancement**: Update constitutional constraints based on real-world application
- **SEAD Enhancement**: Improve agent handoff processes and context preservation
- **SEAD Enhancement**: Enhance SEAD methodology based on course correction insights

## SEAD Success Criteria

- Constitutional compliance is restored without compromising functionality
- Catalog pattern integration improves codebase consistency and quality
- Course correction process preserves development context and agent continuity
- Technical debt is reduced rather than increased through correction process
- Future deviation prevention measures are implemented and validated
- SEAD methodology is strengthened through correction lessons learned

## SEAD Innovation Benefits

- **Systematic Recovery**: Structured approach to development trajectory correction preserves project momentum
- **Constitutional Governance**: Constraint framework provides clear correction guidance without micromanagement
- **Catalog Evolution**: Course correction drives catalog pattern improvement and standardization
- **Context Continuity**: Correction process preserves agent handoff continuity and development efficiency
- **Learning Integration**: Course correction insights strengthen SEAD methodology for future applications

## Output

- Comprehensive course correction plan with constitutional compliance restoration
- Updated story and implementation context with correction rationale
- Corrected implementation with improved catalog pattern integration
- Enhanced agent context preservation for continued development
- Process improvement recommendations for deviation prevention
- Strengthened SEAD methodology based on correction insights