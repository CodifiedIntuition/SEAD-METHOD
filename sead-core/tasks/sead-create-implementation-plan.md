<!-- Powered by SEAD-METHOD™ Core -->

# SEAD Create Implementation Plan Task

## Purpose

To create comprehensive implementation plans with SEAD catalog integration by combining Spec-Kit's proven planning execution flow with SEAD's constitutional framework and agent coordination system. This task ports Spec-Kit's technical planning logic into SEAD's task framework, enabling existing SEAD agents (Architect, Developer) to execute Spec-Kit's planning methodology while maintaining catalog compliance and mode-appropriate constraints.

## SEQUENTIAL Task Execution (Do not proceed until current Task is complete)

### 0. Load SEAD Configuration and Validate Prerequisites

- Load `{root}/sead.config.yaml` and validate SEAD project initialization
- If not found, HALT and inform user: "SEAD configuration not found. Run 'sead init' to initialize SEAD project"
- Extract key configurations: `project.mode`, `catalog.*`, `modes.*`, `constitutional.*`
- **SEAD Enhancement**: Validate catalog availability and current development mode
- **SEAD Enhancement**: Check specification prerequisites exist

### 1. Execute SEAD Planning Workspace Setup

#### 1.1 Run SEAD Planning Workspace Script

- Execute `sead-core/scripts/sead-setup-planning-workspace.sh --json` from repository root
- Parse JSON output for: `FEATURE_SPEC`, `IMPL_PLAN`, `FEATURE_DIR`, `PLANNING_DIR`, `BRANCH`, `SEAD_MODE`, `CATALOG_AVAILABLE`, `CATALOG_DOMAINS`
- **SEAD Enhancement**: Verify specification file exists and is accessible
- **SEAD Enhancement**: Confirm catalog integration status for planning decisions
- All subsequent file paths must be absolute based on script output

### 2. Load and Analyze Feature Specification with SEAD Context

#### 2.1 Load Feature Specification (Ported from Spec-Kit)

- **Execute Spec-Kit Logic**: Load feature specification from `FEATURE_SPEC` path
- **If specification not found**: ERROR "No feature spec at {path}. Run sead task create-specification first."
- Read and analyze the feature specification to understand:
  - Feature requirements and user stories
  - Functional and non-functional requirements  
  - Success criteria and acceptance criteria
  - Any technical constraints or dependencies mentioned
- **SEAD Enhancement**: Extract SEAD-specific sections:
  - SEAD mode configuration and constraints
  - Catalog pattern requirements and integration strategy
  - Constitutional compliance requirements

#### 2.2 Load Constitutional Framework (SEAD Enhancement)

- **SEAD Enhancement**: Load constitutional rules from `sead-core/constitutional-rules/` for current mode
- **SEAD Enhancement**: Load catalog patterns relevant to specification requirements
- **If Spec-Kit constitution available**: Load from `spec-kit/memory/constitution.md` as supplementary guidance
- **SEAD Enhancement**: Merge constitutional requirements with mode-specific constraints

### 3. Execute Spec-Kit Planning Flow with SEAD Enhancements

#### 3.1 Fill Technical Context (Ported from Spec-Kit)

**Execute Spec-Kit Logic**: Analyze specification and fill technical context:
- **Language/Version**: Detect from project or mark NEEDS CLARIFICATION
- **Primary Dependencies**: Extract from requirements or mark NEEDS CLARIFICATION
- **Storage**: Determine data requirements or mark N/A  
- **Testing**: Define testing strategy or mark NEEDS CLARIFICATION
- **Target Platform**: Identify deployment target or mark NEEDS CLARIFICATION
- **Performance Goals**: Extract performance requirements or mark NEEDS CLARIFICATION
- **Constraints**: Identify technical constraints or mark NEEDS CLARIFICATION
- **Scale/Scope**: Determine project scale or mark NEEDS CLARIFICATION

**SEAD Enhancements to Technical Context**:
- **SEAD Mode**: Current mode and constraint implications
- **Catalog Patterns**: Available patterns for technical implementation
- **Constitutional Constraints**: Mode-specific governance requirements
- **Agent Handoff Requirements**: Context preservation needs for implementation agents

#### 3.2 Execute Constitutional Check (Enhanced Spec-Kit + SEAD)

**Spec-Kit Constitutional Check (Preserved)**:
- **Simplicity**: Project count (max 3), framework usage, data model simplicity, pattern avoidance
- **Architecture**: Library-first approach, CLI interfaces, documentation requirements
- **Testing (NON-NEGOTIABLE)**: RED-GREEN-Refactor cycle, test-first mandate, integration testing
- **Observability**: Structured logging, error context requirements
- **Versioning**: Version numbering, breaking change handling

**SEAD Constitutional Enhancements**:
- **Catalog Integration**: Required pattern usage, pattern extension policies, new pattern documentation
- **Mode Compliance**: 
  - **PROTOTYPE**: Pattern experimentation guidelines, documentation flexibility
  - **DEVELOPMENT**: Catalog extension requirements, validation checkpoint policies
  - **BUILD-TO-DEPLOY**: Strict compliance mandates, mandatory validation gates
- **Agent Coordination**: Context preservation requirements, handoff validation criteria

### 4. Execute Planning Phases (Ported from Spec-Kit with SEAD Enhancements)

#### 4.1 Phase 0: Research with Catalog Integration

**Spec-Kit Research Logic (Preserved)**:
1. Extract unknowns from Technical Context
   - For each NEEDS CLARIFICATION → research task
   - For each dependency → best practices task  
   - For each integration → patterns task
2. Generate and dispatch research tasks
3. Consolidate findings in `research.md` with decisions, rationale, alternatives

**SEAD Research Enhancements**:
- **Catalog Pattern Research**: Analyze available catalog patterns for unknowns
- **Mode-Specific Research**: Research appropriate for current SEAD mode constraints
- **Constitutional Compliance Research**: Validate technical choices against constitutional requirements
- **Agent Context Research**: Gather context needed for implementation agent handoffs

#### 4.2 Phase 1: Design & Contracts with Catalog Integration

**Spec-Kit Design Logic (Preserved)**:
1. Extract entities from feature spec → `data-model.md`
2. Generate API contracts from functional requirements → `/contracts/`
3. Generate contract tests from contracts (failing tests)
4. Extract test scenarios from user stories → `quickstart.md`
5. Update agent file incrementally (Claude/Gemini/Copilot context)

**SEAD Design Enhancements**:
- **Catalog Entity Integration**: Map entities to catalog shared types, plan extensions
- **Catalog API Integration**: Integrate with catalog API contracts, plan pattern usage
- **SEAD Test Pattern Integration**: Use catalog test patterns for contract testing
- **Constitutional Validation**: Ensure design meets mode-specific constraints
- **Agent Context Preparation**: Prepare implementation context package for Developer agents

#### 4.2.1 Enhanced Design Validation (Minor Spec-Kit Integration)
After Phase 1 design generation, add:
- Validate all design decisions have clear rationale documented
- Check that technical context has no remaining NEEDS CLARIFICATION markers
- Ensure architectural decisions trace back to specification requirements
- Verify catalog pattern usage is justified and appropriate

### 5. Phase 2 Planning Approach (Describe Only - Not Execute)

#### 5.1 Task Generation Strategy (Spec-Kit + SEAD)

**Task Generation Strategy** (describe what `/tasks` command will do):
- Load SEAD task template from `sead-core/templates/sead-spec-kit-tasks-tmpl.yaml`
- Generate tasks from Phase 1 design documents (contracts, data model, quickstart)
- **Spec-Kit Task Logic**: Each contract → contract test [P], each entity → model task [P], each story → integration test
- **SEAD Task Enhancements**: 
  - Catalog pattern implementation tasks
  - Constitutional compliance validation tasks
  - Agent handoff verification tasks
  - Mode-specific quality gate tasks

#### 5.2 Ordering and Execution Strategy

**Spec-Kit Ordering** (preserved):
- TDD order: Tests before implementation
- Dependency order: Models before services before UI
- Parallel execution: Mark [P] for independent files

**SEAD Ordering Enhancements**:
- Catalog pattern setup tasks first
- Constitutional compliance validation throughout
- Agent handoff checkpoints at phase boundaries
- Mode-specific quality gates at appropriate intervals

### 6. SEAD Integration and Context Preservation

#### 6.1 Create Implementation Context Package

- **SEAD Enhancement**: Package complete context for Developer agents:
  - Technical context with catalog pattern integration
  - Constitutional constraint summary with mode flexibility  
  - Design decisions with architectural rationale
  - Testing strategy with catalog test pattern usage
  - Implementation guidance with pattern selection criteria

#### 6.2 Prepare Quality Assurance Context

- **SEAD Enhancement**: Package QA context for QA agents:
  - Constitutional compliance validation checkpoints
  - Catalog pattern usage verification requirements
  - Mode-specific quality gate criteria
  - Cross-agent context preservation validation needs

### 7. Planning Document Creation and Workspace Integration

#### 7.1 Write Enhanced Implementation Plan

Write to `IMPL_PLAN` using enhanced Spec-Kit structure:

**Spec-Kit Sections (Preserved)**:
- Implementation Plan header with branch, spec link
- Summary, Technical Context, Constitutional Check
- Project Structure, Phase 0-2 descriptions
- Complexity Tracking, Progress Tracking

**SEAD Enhancement Sections (Added)**:
- **SEAD Integration Summary**: Mode configuration, catalog status, agent coordination
- **Catalog Pattern Strategy**: Required patterns, extensions planned, new patterns needed
- **Constitutional Compliance Tracking**: Mode constraint adherence, validation checkpoints
- **Agent Handoff Preparation**: Context packages, quality gate configuration

#### 7.2 Link Plan to SEAD Workspace

- Create plan link in `sead-workspace/planning/` directory
- **SEAD Enhancement**: Update workspace artifact relationships
- **SEAD Enhancement**: Prepare handoff context for Task Generation Agent
- **SEAD Enhancement**: Initialize implementation readiness tracking

### 8. Validation and Completion with SEAD Context

#### 8.1 Execute Enhanced Progress Tracking

**Spec-Kit Progress Tracking (Preserved)**:
- [ ] Phase 0: Research complete
- [ ] Phase 1: Design complete  
- [ ] Initial Constitution Check: PASS
- [ ] Post-Design Constitution Check: PASS
- [ ] All NEEDS CLARIFICATION resolved

**SEAD Progress Enhancements**:
- [ ] SEAD mode constraints validated
- [ ] Catalog pattern integration planned
- [ ] Constitutional compliance framework configured
- [ ] Agent handoff context prepared
- [ ] Implementation readiness validated

#### 8.2 Report Completion with SEAD Context

Report completion with:
- Branch name, plan file paths, generated artifacts
- **SEAD Enhancement**: Mode compliance status and constraint summary
- **SEAD Enhancement**: Catalog pattern integration readiness
- **SEAD Enhancement**: Constitutional compliance framework status
- **SEAD Enhancement**: Agent handoff context preparation completion
- **SEAD Enhancement**: Task generation readiness indicator

## SEAD Success Criteria

- Implementation plan follows Spec-Kit proven structure and constitutional checking
- SEAD catalog patterns appropriately integrated into technical planning
- Constitutional compliance framework applied with mode-appropriate flexibility
- Context preservation enables seamless handoff to Task Generation and Implementation agents
- Technical decisions documented with catalog pattern rationale
- Quality gate preparation configured for implementation phase validation

## SEAD Innovation Benefits

- **Proven Planning Process**: Leverages Spec-Kit's battle-tested implementation planning methodology
- **Constitutional Integration**: Applies governance framework without bureaucratic overhead
- **Catalog Leverage**: Integrates organizational patterns into technical decision-making
- **Agent Coordination**: Prepares comprehensive context for implementation team coordination
- **Mode Flexibility**: Balances governance requirements with project phase appropriateness
- **Quality Assurance**: Establishes validation framework before implementation begins

## Output

A comprehensive implementation plan document that combines:
- Spec-Kit's proven planning structure with constitutional checking methodology
- SEAD catalog pattern integration strategy with technical implementation guidance
- Constitutional compliance framework with mode-appropriate flexibility
- Agent handoff context packages for seamless implementation coordination
- Technical foundation ready for task breakdown and implementation execution