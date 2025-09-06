# /sead-validate-next-story Task

When this command is used, execute the following task:

<!-- Powered by SEAD-METHOD™ Core -->

# SEAD Validate Next Story Task

## Purpose

To comprehensively validate a SEAD story draft before implementation begins, ensuring it is complete, accurate, catalog-compliant, constitutionally sound, and provides sufficient context for successful development with preserved agent context. This task identifies issues and gaps that need to be addressed, preventing hallucinations while ensuring catalog compliance and implementation readiness.

## SEAD Mode Awareness

This validation task operates with mode-sensitive criteria:
- **PROTOTYPE Mode**: Basic completeness, pattern documentation validation
- **DEVELOPMENT Mode**: Catalog compliance assessment, extension validation, comprehensive testing
- **BUILD-TO-DEPLOY Mode**: Strict catalog adherence, zero deviation tolerance, complete validation

## SEQUENTIAL Task Execution (Do not proceed until current Task is complete)

### 0. Load SEAD Configuration and Catalog Context

- Load `sead.config.yaml` and `sead-core/core-config.yaml`
- If files do not exist, HALT and inform the user: "SEAD configuration files not found. Run 'sead init' to initialize SEAD project configuration."
- Extract key configurations: `devStoryLocation`, `prd.*`, `architecture.*`, `catalog.*`, `mode.*`, `constraints.*`
- **MANDATORY CATALOG READS** (Constitutional Requirement):
  - Read `{catalogPath}/validation-schemas/README.md` for validation pattern awareness
  - Read `{catalogPath}/test-patterns/README.md` for testing pattern requirements
  - Read `{catalogPath}/error-handling/README.md` for error handling patterns
  - Read story-relevant catalog domains based on story type (API, UI, data, etc.)
  - Document catalog versions being validated against
- Identify and load the following inputs:
  - **Story file**: The drafted SEAD story to validate (provided by user or discovered in `devStoryLocation`)
  - **Parent epic**: The epic containing this story's requirements
  - **Architecture documents**: Based on configuration (sharded or monolithic)
  - **SEAD story template**: `sead-core/templates/sead-story-tmpl.md` for completeness validation
  - **Catalog components**: All relevant catalog patterns for this story

### 1. SEAD Template Completeness Validation

- Load `sead-core/templates/sead-story-tmpl.md` and extract all section headings from the SEAD template
- **Missing sections check**: Compare story sections against SEAD template sections to verify all required sections are present
- **SEAD-specific sections**: Verify SEAD-enhanced sections exist:
  - SEAD Mode Configuration
  - Catalog Component References
  - Constraint Validation Criteria
  - Context Preservation Data
  - Constitutional Compliance Indicators
- **Placeholder validation**: Ensure no template placeholders remain unfilled (e.g., `{{EpicNum}}`, `{{role}}`, `_TBD_`)
- **Agent section verification**: Confirm all sections from template exist for future SEAD agent use
- **Structure compliance**: Verify story follows SEAD template structure and formatting
- **Mode indicator**: Confirm current SEAD mode is clearly specified

### 2. Catalog Integration and Compliance Validation

- **Catalog dependency mapping**: Are all required catalog components identified and referenced?
- **Pattern usage specification**: Are catalog patterns properly specified for implementation?
- **Version consistency**: Are catalog component versions consistent and current?
- **Missing catalog opportunities**: Are there catalog patterns that should be used but aren't referenced?
- **Extension justification**: If extensions are created (development mode), are they properly justified and documented?
- **Mode-appropriate usage**: Does catalog usage align with current SEAD mode constraints?
- **Pattern evolution planning**: Are opportunities for catalog promotion identified (development mode)?

### 3. Constitutional Compliance Validation

- **Required catalog reads**: Have all mandatory catalog reads been performed and documented?
- **Constitutional principles**: Are all 7 SEAD constitutional principles addressed:
  1. Catalog-First: Existing patterns checked before custom solutions
  2. Specification-Driven: Technical decisions reference architecture or catalog
  3. Progressive Constraints: Mode-appropriate constraints documented
  4. Context Preservation: Agent handoff context complete
  5. Collaborative Governance: Review and validation processes enabled
  6. Quality Gates: Mode-sensitive checkpoints defined
  7. Continuous Evolution: Pattern evolution opportunities identified
- **Constraint adherence**: Are mode-specific constraints properly documented and respected?
- **Anti-drift protection**: Are drift prevention measures in place?

### 4. Enhanced File Structure and Source Tree Validation

- **File paths clarity**: Are new/existing files to be created/modified clearly specified with catalog pattern alignment?
- **Source tree relevance**: Is relevant project structure included in Dev Notes with catalog structure patterns?
- **Directory structure**: Are new directories/components properly located according to project structure AND catalog conventions?
- **File creation sequence**: Do tasks specify where files should be created in logical order using catalog patterns?
- **Path accuracy**: Are file paths consistent with project structure from architecture docs AND catalog structure patterns?
- **Catalog pattern file locations**: Are files properly organized according to catalog design system patterns?

### 5. Enhanced UI/Frontend Completeness Validation (if applicable)

- **Component specifications**: Are UI components sufficiently detailed for implementation using catalog design system patterns?
- **Catalog design system usage**: Are design system catalog components properly referenced and specified?
- **Styling/design guidance**: Is visual implementation guidance clear with catalog pattern references?
- **User interaction flows**: Are UX patterns specified using catalog interaction patterns?
- **Responsive/accessibility**: Are these considerations addressed using catalog accessibility patterns?
- **Integration points**: Are frontend-backend integration points clear with catalog integration patterns?
- **State management**: Is state management specified using catalog state management patterns?

### 6. Enhanced Acceptance Criteria Satisfaction Assessment

- **AC coverage**: Will all acceptance criteria be satisfied by the listed tasks using catalog patterns?
- **Catalog compliance criteria**: Are catalog compliance requirements included in acceptance criteria?
- **AC testability**: Are acceptance criteria measurable and verifiable using catalog test patterns?
- **Missing scenarios**: Are edge cases or error conditions covered using catalog error patterns?
- **Success definition**: Is "done" clearly defined for each AC including catalog compliance?
- **Task-AC mapping**: Are tasks properly linked to specific acceptance criteria with catalog pattern integration?
- **Mode-specific criteria**: Are mode-appropriate acceptance criteria included?

### 7. Enhanced Validation and Testing Instructions Review

- **Test approach clarity**: Are testing methods clearly specified using catalog test patterns?
- **Catalog test pattern usage**: Are appropriate catalog test patterns referenced and specified?
- **Test scenarios**: Are key test cases identified using catalog test scenario patterns?
- **Validation steps**: Are acceptance criteria validation steps clear with catalog validation patterns?
- **Testing tools/frameworks**: Are required testing tools specified with catalog integration?
- **Test data requirements**: Are test data needs identified using catalog data patterns?
- **Error scenario testing**: Are error scenarios tested using catalog error patterns?

### 8. Enhanced Security Considerations Assessment (if applicable)

- **Security requirements**: Are security needs identified and addressed using catalog auth patterns?
- **Authentication/authorization**: Are access controls specified using catalog auth patterns?
- **Data protection**: Are sensitive data handling requirements clear with catalog security patterns?
- **Vulnerability prevention**: Are common security issues addressed using catalog security patterns?
- **Compliance requirements**: Are regulatory/compliance needs addressed with catalog compliance patterns?
- **Security testing**: Are security test requirements specified using catalog security test patterns?

### 9. Enhanced Tasks/Subtasks Sequence Validation

- **Logical order**: Do tasks follow proper implementation sequence with catalog pattern integration?
- **Dependencies**: Are task dependencies clear and correct including catalog pattern dependencies?
- **Granularity**: Are tasks appropriately sized and actionable with catalog pattern context?
- **Completeness**: Do tasks cover all requirements and acceptance criteria using catalog patterns?
- **Blocking issues**: Are there any tasks that would block others, especially catalog pattern conflicts?
- **Catalog pattern sequencing**: Are catalog patterns applied in logical implementation order?

### 10. Enhanced Anti-Hallucination Verification

- **Source verification**: Every technical claim must be traceable to source documents OR catalog patterns
- **Architecture alignment**: Dev Notes content matches architecture specifications AND catalog patterns
- **No invented details**: Flag any technical decisions not supported by source documents OR catalog
- **Reference accuracy**: Verify all source references AND catalog pattern references are correct and accessible
- **Fact checking**: Cross-reference claims against epic, architecture documents, AND catalog patterns
- **Catalog pattern accuracy**: Verify catalog pattern usage is accurate and version-appropriate
- **Mode constraint accuracy**: Verify mode constraints are correctly applied and documented

### 11. SEAD Dev Agent Implementation Readiness

- **Self-contained context**: Can the story be implemented without reading external docs beyond specified catalog patterns?
- **Clear instructions**: Are implementation steps unambiguous with catalog pattern integration?
- **Complete technical context**: Are all required technical details present in Dev Notes including catalog pattern context?
- **Missing information**: Identify any critical information gaps including missing catalog patterns
- **Actionability**: Are all tasks actionable by a SEAD development agent with catalog awareness?
- **Context preservation**: Is agent handoff context complete for seamless implementation?
- **Catalog pattern readiness**: Are all referenced catalog patterns accessible and documented?

### 12. Generate Enhanced SEAD Validation Report

Provide a structured validation report including:

#### SEAD Template Compliance Issues
- Missing sections from SEAD story template
- Missing SEAD-specific sections (mode, catalog, constraints, context preservation)
- Unfilled placeholders or template variables
- Structural formatting issues
- Mode specification issues

#### Catalog Compliance Issues
- Missing catalog pattern references
- Incorrect catalog pattern usage
- Version inconsistencies
- Mode-inappropriate catalog usage
- Missing catalog opportunities
- Unjustified custom patterns (development/build-to-deploy modes)

#### Constitutional Compliance Issues  
- Missing mandatory catalog reads
- Constitutional principles not addressed
- Constraint adherence failures
- Anti-drift protection gaps
- Context preservation incompleteness

#### Critical Issues (Must Fix - Story Blocked)
- Missing essential information for implementation
- Inaccurate or unverifiable technical claims
- Incomplete acceptance criteria coverage
- Missing required SEAD sections
- Catalog pattern violations (build-to-deploy mode)
- Constitutional requirement failures
- Mode constraint violations

#### Should-Fix Issues (Important Quality Improvements)
- Unclear implementation guidance
- Missing security considerations with catalog patterns
- Task sequencing problems
- Incomplete testing instructions without catalog test patterns
- Catalog pattern usage suboptimal
- Context preservation gaps

#### Nice-to-Have Improvements (Optional Enhancements)
- Additional catalog pattern context that would help implementation
- Clarifications that would improve efficiency
- Documentation improvements
- Additional catalog pattern opportunities

#### Anti-Hallucination Findings
- Unverifiable technical claims
- Missing source references (architecture OR catalog)
- Inconsistencies with architecture documents OR catalog patterns
- Invented libraries, patterns, or standards not in catalog
- Mode constraint misunderstandings

#### SEAD-Specific Assessment
- **Catalog Readiness**: Are all catalog dependencies satisfied?
- **Mode Compliance**: Does story comply with current SEAD mode constraints?
- **Constitutional Adherence**: Are all constitutional requirements met?
- **Context Preservation Quality**: Is agent handoff context complete?
- **Pattern Evolution Potential**: Are catalog evolution opportunities identified?

#### Final SEAD Assessment
- **GO**: Story is ready for SEAD implementation with catalog compliance
- **NO-GO**: Story requires fixes before SEAD implementation
- **Implementation Readiness Score**: 1-10 scale including catalog compliance
- **Confidence Level**: High/Medium/Low for successful SEAD implementation
- **Catalog Compliance Score**: 1-10 scale for pattern usage quality
- **Constitutional Compliance Score**: 1-10 scale for requirement adherence
- **Mode Appropriateness**: Perfect/Good/Needs Work for current SEAD mode

#### Next Steps Recommendation
- Priority order for addressing identified issues
- Suggested agents for issue resolution
- Catalog pattern research recommendations
- Mode transition considerations if appropriate

## SEAD Constitutional Requirements

This validation task must adhere to SEAD constitutional principles:
1. **Catalog-First**: Validate catalog pattern usage throughout story
2. **Specification-Driven**: Verify all technical decisions reference valid sources
3. **Progressive Constraints**: Apply mode-appropriate validation rigor
4. **Context Preservation**: Ensure complete agent handoff context
5. **Collaborative Governance**: Enable team review and validation processes
6. **Quality Gates**: Provide mode-sensitive validation checkpoints
7. **Continuous Evolution**: Identify catalog evolution opportunities

## Anti-Drift Protection

This validation includes specific protections against AI agent drift:
- **Catalog Deviation Detection**: Identifies when implementations ignore existing patterns
- **Context Loss Prevention**: Validates context preservation completeness
- **Spec Inconsistency Prevention**: Prevents architecture and catalog conflicts
- **Mode Violation Detection**: Identifies inappropriate mode constraint violations
- **Quality Standard Consistency**: Ensures consistent validation across modes