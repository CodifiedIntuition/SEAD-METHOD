<!-- Powered by SEAD-METHOD™ Core -->

# SEAD Verify Build Task

## Purpose

To comprehensively validate that build outputs comply with SEAD constitutional constraints, catalog pattern requirements, and deployment readiness standards. This task ensures that build artifacts meet progressive validation criteria, maintain catalog pattern integrity, and preserve context for deployment and maintenance phases while preventing technical debt accumulation.

## SEQUENTIAL Task Execution (Do not proceed until current Task is complete)

### 0. Load SEAD Configuration and Build Context

- Load `.sead-core/sead.config.yaml` and `.sead-core/sead-core/core-config.yaml` from the project root
- If files do not exist, HALT and inform the user: "SEAD configuration files not found. Run 'sead init' or 'sead catalog generate --source .' to initialize SEAD project"
- Extract key configurations: `build.*`, `deployment.*`, `catalog.*`, `modes.*`, `validation.*`
- **SEAD Enhancement**: Load current development mode and build-appropriate constraints
- **SEAD Enhancement**: Validate catalog state and pattern compliance requirements
- **SEAD Enhancement**: Check three-tier deployment strategy alignment

### 1. Pre-Build Validation with Constitutional Framework

#### 1.1 Development Mode and Constraint Assessment

- **SEAD Enhancement**: Determine appropriate build validation level based on SEAD mode:
  - **PROTOTYPE MODE**: Basic functionality validation, pattern documentation verification
  - **DEVELOPMENT MODE**: Comprehensive testing, catalog compliance verification
  - **BUILD-TO-DEPLOY MODE**: Full validation suite, strict constitutional compliance
- **SEAD Enhancement**: Load mode-specific validation requirements and quality gates
- **SEAD Enhancement**: Verify build target aligns with mode constraints and expectations

#### 1.2 Catalog Pattern Compliance Pre-Check

- **SEAD Enhancement**: Validate catalog pattern usage before build execution:
  - API contracts implemented according to catalog specifications
  - Shared types used consistently across codebase
  - Design system components integrated properly
  - State management patterns followed correctly
  - Error handling patterns implemented consistently
  - Authentication patterns integrated securely
- **SEAD Enhancement**: Identify potential build failures due to pattern inconsistencies
- **SEAD Enhancement**: Verify pattern documentation is current and complete

### 2. Build Execution with Progressive Validation

#### 2.1 Build Process Execution with Monitoring

- Execute build process using project build configuration
- **SEAD Enhancement**: Monitor build process for constitutional constraint violations:
  - Type checking compliance with shared types catalog
  - Linting compliance with coding standards patterns
  - Bundling compliance with deployment strategy patterns
  - Testing compliance with test pattern requirements
- **SEAD Enhancement**: Capture build metrics and performance indicators
- **SEAD Enhancement**: Log catalog pattern compliance during build process

#### 2.2 Build Output Generation and Analysis

- **SEAD Enhancement**: Analyze generated build artifacts for catalog compliance:
  - Bundle structure follows deployment strategy patterns
  - Asset organization matches catalog architectural patterns
  - Configuration files align with three-tier deployment strategy
  - Documentation artifacts reflect catalog pattern usage
- **SEAD Enhancement**: Validate build reproducibility and consistency
- **SEAD Enhancement**: Check build artifact integrity and completeness

### 3. Constitutional Compliance Validation

#### 3.1 Mode-Specific Validation Execution

**PROTOTYPE MODE Validation:**
- **SEAD Enhancement**: Basic functionality validation with pattern documentation check
- **SEAD Enhancement**: Experimental pattern capture and documentation verification
- **SEAD Enhancement**: Context preservation validation for pattern evolution
- **SEAD Enhancement**: Minimal quality gate compliance suitable for experimentation

**DEVELOPMENT MODE Validation:**
- **SEAD Enhancement**: Comprehensive testing suite execution with catalog pattern validation
- **SEAD Enhancement**: Catalog compliance verification with acceptable deviation documentation
- **SEAD Enhancement**: Integration testing with existing catalog patterns
- **SEAD Enhancement**: Performance validation against established baselines

**BUILD-TO-DEPLOY MODE Validation:**
- **SEAD Enhancement**: Full validation suite with zero tolerance for constitutional violations
- **SEAD Enhancement**: Strict catalog pattern compliance with no acceptable deviations
- **SEAD Enhancement**: Security validation including authentication pattern compliance
- **SEAD Enhancement**: Production readiness assessment with deployment strategy validation

#### 3.2 Cross-Cutting Constitutional Validation

- **SEAD Enhancement**: Context Preservation Validation:
  - Agent handoff context maintained through build process
  - Catalog pattern references preserved in build outputs
  - Constitutional compliance documentation current and accessible
  - Implementation decision history maintained and traceable

### 4. Catalog Pattern Integration Validation

#### 4.1 Pattern Usage Verification

- **SEAD Enhancement**: API Contract Compliance:
  - Generated API interfaces match catalog contract specifications
  - Request/response schemas align with shared types catalog
  - Error handling follows catalog error patterns
  - Authentication integration uses catalog auth patterns

- **SEAD Enhancement**: Design System Integration:
  - UI components use catalog design system patterns
  - Styling follows design system specifications
  - Component composition follows catalog architectural patterns
  - Responsive design follows catalog responsive patterns

#### 4.2 Pattern Consistency and Quality Assessment

- **SEAD Enhancement**: Cross-Component Consistency:
  - Similar functionality uses consistent catalog patterns
  - Data flow follows catalog state management patterns
  - Error boundaries and handling use catalog error patterns
  - Integration points follow catalog integration patterns

- **SEAD Enhancement**: Pattern Evolution Validation:
  - New patterns created during development are properly documented
  - Pattern extensions are approved and consistent with catalog architecture
  - Pattern deprecations are handled gracefully in build outputs
  - Pattern version compatibility maintained across build artifacts

### 5. Quality Assurance and Testing Validation

#### 5.1 Testing Strategy Execution with Catalog Patterns

- **SEAD Enhancement**: Execute testing strategy using catalog test patterns:
  - Unit tests follow catalog testing patterns
  - Integration tests validate catalog pattern interactions
  - End-to-end tests verify catalog pattern user experiences
  - Performance tests validate catalog pattern efficiency

#### 5.2 Quality Gate Validation

- **SEAD Enhancement**: Code Quality Assessment:
  - Code coverage meets mode-appropriate requirements
  - Code complexity remains within catalog pattern guidelines
  - Security scanning passes with catalog security patterns
  - Performance benchmarks meet catalog performance patterns

- **SEAD Enhancement**: Constitutional Compliance Assessment:
  - All mode-specific constraints satisfied
  - Catalog pattern usage meets compliance requirements
  - Context preservation validated for deployment phase
  - Documentation quality meets constitutional standards

### 6. Deployment Readiness Assessment

#### 6.1 Three-Tier Deployment Strategy Validation

- **SEAD Enhancement**: Local Development Tier Validation:
  - Docker configuration follows catalog containerization patterns
  - Environment setup aligns with catalog development patterns
  - Team collaboration features follow catalog integration patterns
  - Development workflow integration maintains catalog compliance

- **SEAD Enhancement**: Cloud Staging Tier Validation:
  - Staging deployment configuration follows catalog cloud patterns
  - Branch-based deployment strategy follows catalog workflow patterns
  - Integration testing environment uses catalog integration patterns
  - Performance testing follows catalog performance patterns

- **SEAD Enhancement**: Production Deployment Tier Validation (if applicable):
  - Production build artifacts meet strict catalog compliance
  - Security configuration follows catalog security patterns
  - Monitoring and logging use catalog observability patterns
  - Blue/green deployment strategy follows catalog deployment patterns

#### 6.2 Context Preservation for Deployment Phase

- **SEAD Enhancement**: Deployment Context Package Creation:
  - Catalog pattern usage documentation for operations team
  - Constitutional compliance verification records
  - Performance and security validation results
  - Context preservation data for maintenance and updates

### 7. Build Validation Results and Reporting

#### 7.1 Comprehensive Validation Reporting

- **SEAD Enhancement**: Constitutional Compliance Report:
  - Mode-specific validation results with pass/fail status
  - Catalog pattern compliance assessment with details
  - Quality gate results with specific metrics
  - Context preservation validation outcomes

- **SEAD Enhancement**: Catalog Pattern Integration Report:
  - Pattern usage summary with compliance levels
  - Pattern evolution captured during build validation
  - Cross-component consistency assessment
  - Pattern quality and documentation status

#### 7.2 Action Items and Recommendations

- **SEAD Enhancement**: Critical Issues Requiring Resolution:
  - Constitutional violations that prevent deployment
  - Catalog pattern compliance failures requiring immediate attention
  - Security or performance issues requiring remediation
  - Context preservation failures requiring correction

- **SEAD Enhancement**: Improvement Recommendations:
  - Pattern standardization opportunities
  - Quality gate strengthening suggestions
  - Performance optimization recommendations
  - Documentation improvement suggestions

### 8. Build Validation Finalization

#### 8.1 Validation Status Determination

- **SEAD Enhancement**: Build Approval Status:
  - APPROVED: All constitutional and catalog requirements met
  - CONDITIONAL: Minor issues that don't prevent deployment but require tracking
  - REJECTED: Critical violations requiring resolution before deployment

#### 8.2 Context Handoff for Deployment or Correction

- **SEAD Enhancement**: For Approved Builds:
  - Prepare deployment context package with catalog compliance verification
  - Create operations handoff with pattern usage documentation
  - Configure monitoring and maintenance context preservation

- **SEAD Enhancement**: For Rejected Builds:
  - Create detailed correction requirements with catalog pattern guidance
  - Prepare developer context for issue resolution
  - Configure validation re-run requirements and success criteria

## SEAD Success Criteria

- Build artifacts comply with constitutional constraints appropriate for development mode
- Catalog pattern integration meets quality and consistency requirements
- Context preservation maintains agent handoff effectiveness through build process
- Validation process catches issues early while maintaining development velocity
- Build validation strengthens catalog pattern ecosystem and constitutional compliance
- Deployment readiness assessment accurately reflects production capability

## SEAD Innovation Benefits

- **Progressive Validation**: Mode-based validation balances quality with development speed
- **Pattern Integrity**: Build validation ensures catalog pattern consistency and quality
- **Constitutional Governance**: Constraint enforcement prevents technical debt accumulation
- **Context Continuity**: Build process preserves agent handoff context for deployment
- **Quality Assurance**: Systematic validation reduces deployment risk and production issues

## Output

Comprehensive build validation results including:
- Constitutional compliance verification with mode-appropriate rigor
- Catalog pattern integration assessment with quality metrics
- Deployment readiness evaluation with three-tier strategy alignment
- Context preservation package for deployment or correction phases
- Action items and recommendations for continuous improvement
- Build approval status with clear rationale and next steps