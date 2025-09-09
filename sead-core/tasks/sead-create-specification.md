<!-- Powered by SEAD-METHOD™ Core -->

# SEAD Create Specification Task

## Purpose

To create constitutional specifications with SEAD catalog integration by combining Spec-Kit's proven workflow execution with SEAD's agent coordination system. This task ports Spec-Kit's direct LLM instruction model into SEAD's task framework, enabling existing SEAD agents (Analyst, Architect) to execute Spec-Kit's specification creation logic while maintaining catalog compliance and constitutional constraints.

## SEQUENTIAL Task Execution (Do not proceed until current Task is complete)

### 0. Load SEAD Configuration and Initialize Workspace

- Load `{root}/sead.config.yaml` and validate SEAD project initialization
- If not found, HALT and inform user: "SEAD configuration not found. Run 'sead init' to initialize SEAD project"
- Extract key configurations: `project.mode`, `catalog.*`, `modes.*`, `constitutional.*`
- **SEAD Enhancement**: Load catalog patterns available for specification domain
- **SEAD Enhancement**: Determine effective mode constraints and validation requirements

### 1. Execute SEAD Feature Workspace Creation

#### 1.1 Run SEAD Workspace Creation Script

- Execute `sead-core/scripts/sead-create-feature-workspace.sh --json "{feature_description}"` from repository root
- Parse JSON output for: `BRANCH_NAME`, `SPEC_FILE`, `FEATURE_DIR`, `SEAD_WORKSPACE`, `FEATURE_NUM`
- **SEAD Enhancement**: Verify SEAD workspace structure created correctly
- **SEAD Enhancement**: Confirm catalog integration points established
- All subsequent file paths must be absolute based on script output

#### 1.2 Validate Workspace Creation

- Confirm feature branch created and checked out: `BRANCH_NAME`
- Confirm specification file initialized: `SPEC_FILE`
- Confirm feature directory structure: `FEATURE_DIR` with subdirectories
- **SEAD Enhancement**: Verify SEAD workspace linking completed
- **SEAD Enhancement**: Check catalog directory availability for pattern integration

### 2. Load Specification Template and Requirements Analysis

#### 2.1 Load SEAD Specification Template

- **Primary**: Load SEAD template from `sead-core/templates/sead-spec-kit-specification-tmpl.yaml`
- **Fallback**: Load Spec-Kit template from `templates/spec-template.md` if SEAD template unavailable  
- **SEAD Enhancement**: Parse template for SEAD-specific sections (catalog patterns, mode constraints)
- Understand required sections and SEAD enhancements for constitutional compliance

#### 2.2 Execute Specification Template Logic (Ported from Spec-Kit)

**Execute this Spec-Kit Execution Flow**:
```
1. Parse user description from feature_description argument
   → If empty: ERROR "No feature description provided"
2. Extract key concepts from description
   → Identify: actors, actions, data, constraints
   → SEAD Enhancement: Map concepts to catalog domains
3. For each unclear aspect:
   → Mark with [NEEDS CLARIFICATION: specific question]
   → SEAD Enhancement: Check if catalog patterns can resolve ambiguities
4. Fill User Scenarios & Testing section
   → If no clear user flow: ERROR "Cannot determine user scenarios"
   → SEAD Enhancement: Reference catalog test patterns where applicable
5. Generate Functional Requirements
   → Each requirement must be testable
   → Mark ambiguous requirements
   → SEAD Enhancement: Include catalog pattern requirements
6. Identify Key Entities (if data involved)
   → SEAD Enhancement: Reference catalog shared types where applicable
7. Run Review Checklist (enhanced with SEAD criteria)
   → If any [NEEDS CLARIFICATION]: WARN "Spec has uncertainties"
   → If implementation details found: ERROR "Remove tech details"
   → SEAD Enhancement: Validate catalog pattern integration
   → SEAD Enhancement: Check constitutional compliance for current mode
8. Return: SUCCESS (spec ready for planning)
```

### 3. SEAD Constitutional Framework Integration

#### 3.1 Apply Mode-Specific Constraints

- **SEAD Enhancement**: Load mode constraints for current project mode (prototype|development|build-to-deploy)
- **SEAD Enhancement**: Apply mode-specific validation requirements:
  - **PROTOTYPE MODE**: Pattern documentation optional, experimentation encouraged
  - **DEVELOPMENT MODE**: Catalog integration preferred, validation checkpoints
  - **BUILD-TO-DEPLOY MODE**: Strict compliance required, mandatory validations
- Document mode selection rationale in specification

#### 3.2 Catalog Pattern Integration Analysis

- **SEAD Enhancement**: Analyze specification requirements for catalog pattern opportunities:
  - API functionality → catalog API contracts domain
  - Data structures → catalog shared types domain  
  - UI requirements → catalog design system domain
  - Business logic → catalog state management patterns
  - Error scenarios → catalog error handling patterns
- **SEAD Enhancement**: Document required catalog patterns vs. available patterns
- **SEAD Enhancement**: Identify catalog pattern gaps that require creation or extension

### 4. Write Enhanced SEAD Specification

#### 4.1 Create Specification Document Structure

Write specification to `SPEC_FILE` using enhanced template structure:

**Core Spec-Kit Sections (Preserved)**:
- Feature Name, Branch, Status, Input description
- User Scenarios & Testing with acceptance scenarios
- Functional Requirements (testable, unambiguous)
- Key Entities (if data involved)
- Review & Acceptance Checklist

**SEAD Enhancement Sections (Added)**:
- **SEAD Mode Configuration**: Current mode, rationale, constraints
- **Catalog Integration Strategy**:
  - Required catalog patterns with usage plan
  - Available vs. missing pattern analysis  
  - Pattern extension or creation requirements
- **Constitutional Compliance Framework**:
  - Mode-specific validation criteria
  - Quality gate requirements
  - Agent handoff preparation data
- **Context Preservation Package**:
  - Implementation context for Developer agents
  - QA validation requirements for QA agents
  - Architecture integration points for Architect agents

#### 4.2 Apply Spec-Kit Quality Standards with SEAD Enhancements

- Ensure all Spec-Kit quality criteria met (no implementation details, business-focused, testable requirements)
- **SEAD Enhancement**: Validate catalog pattern references are accurate and available
- **SEAD Enhancement**: Confirm mode constraints are appropriately applied
- **SEAD Enhancement**: Verify context preservation data is complete for agent handoffs

### 5. SEAD Workspace Integration

#### 5.1 Link Specification to SEAD Workspace

- Create specification link in `sead-workspace/specifications/` directory
- Update SEAD workspace index if available
- **SEAD Enhancement**: Prepare artifact relationships for cross-command integration
- **SEAD Enhancement**: Initialize context preservation data for planning phase

#### 5.2 Prepare Agent Handoff Context

- **SEAD Enhancement**: Package specification context for Planning Agent:
  - Catalog patterns identified for implementation planning
  - Mode constraints summary for architectural decisions
  - Constitutional compliance requirements for validation
  - Feature requirements mapped to technical implementation needs
- **SEAD Enhancement**: Configure quality gates for planning phase validation

### 6. Validation and Completion

#### 6.1 Execute SEAD-Enhanced Review Checklist

**Spec-Kit Criteria (Preserved)**:
- [ ] No implementation details (languages, frameworks, APIs)
- [ ] Focused on user value and business needs  
- [ ] Written for non-technical stakeholders
- [ ] All mandatory sections completed
- [ ] Requirements are testable and unambiguous
- [ ] No [NEEDS CLARIFICATION] markers remain

**SEAD Enhancement Criteria (Added)**:
- [ ] SEAD mode constraints appropriately applied
- [ ] Catalog pattern integration strategy defined
- [ ] Constitutional compliance requirements specified
- [ ] Context preservation data complete for agent handoffs
- [ ] Quality gates configured for subsequent phases

#### 6.2 Report Completion with SEAD Context

Report completion with:
- Branch name and specification file path
- SEAD mode configuration and constraint summary
- Catalog pattern integration status
- Constitutional compliance readiness assessment
- Agent handoff context preparation status
- Ready for planning phase indicator

## SEAD Success Criteria

- Specification follows Spec-Kit proven structure and quality standards
- SEAD catalog patterns appropriately integrated without over-engineering
- Constitutional compliance framework applied for current mode
- Context preservation enables seamless handoff to Planning Agent
- Specification provides clear foundation for technical implementation planning
- Mode constraints balanced between governance and practical flexibility

## SEAD Innovation Benefits

- **Proven Workflow**: Leverages Spec-Kit's battle-tested specification creation process
- **Agent Integration**: Enables existing SEAD agents to execute Spec-Kit logic effectively  
- **Constitutional Governance**: Applies appropriate constraints without bureaucratic overhead
- **Catalog Leverage**: Integrates organizational patterns for consistency and efficiency
- **Context Continuity**: Preserves context across agent handoffs for seamless development
- **Mode Flexibility**: Adapts governance requirements to project phase and complexity

## Output

A comprehensive specification document that combines:
- Spec-Kit's proven specification structure and quality standards
- SEAD catalog pattern integration strategy
- Constitutional compliance framework appropriate for current mode
- Context preservation package for seamless agent handoffs
- Foundation for technical implementation planning with architectural guidance