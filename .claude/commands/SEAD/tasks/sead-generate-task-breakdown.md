# /sead-generate-task-breakdown Task

When this command is used, execute the following task:

<!-- Powered by SEAD-METHOD™ Core -->

# SEAD Generate Task Breakdown Task

## Purpose

To generate executable task breakdowns with SEAD catalog integration by combining Spec-Kit's proven task generation methodology with SEAD's constitutional framework and agent coordination system. This task ports Spec-Kit's task breakdown logic into SEAD's task framework, creating immediately executable tasks that incorporate catalog pattern implementation, constitutional compliance validation, and agent coordination requirements.

## SEQUENTIAL Task Execution (Do not proceed until current Task is complete)

### 0. Load SEAD Configuration and Validate Prerequisites

- Load `.sead-core/sead.config.yaml` and validate SEAD project initialization  
- If not found, HALT and inform user: "SEAD configuration not found. Run 'sead init' to initialize SEAD project"
- Extract key configurations: `project.mode`, `catalog.*`, `modes.*`, `constitutional.*`
- **SEAD Enhancement**: Validate planning phase completion and catalog availability

### 1. Execute SEAD Task Prerequisites Validation

#### 1.1 Run SEAD Task Prerequisites Script

- Execute `sead-core/scripts/sead-validate-task-prerequisites.sh --json` from repository root (when available)
- **Fallback**: Execute `sead-core/scripts/sead-path-resolution.sh` to get current paths
- Parse output for: `FEATURE_DIR`, `AVAILABLE_DOCS`, `SEAD_MODE`, `CATALOG_STATUS`
- **SEAD Enhancement**: Validate implementation plan exists and is complete
- **SEAD Enhancement**: Confirm catalog integration status for task generation

#### 1.2 Validate Planning Prerequisites (Ported from Spec-Kit)

**Execute Spec-Kit Validation Logic**:
- Check if feature directory exists: `FEATURE_DIR`
- **Required**: Check if implementation plan exists: `plan.md` 
- **If plan.md not found**: ERROR "plan.md not found in {FEATURE_DIR}. Run sead task create-implementation-plan first."

**SEAD Enhancement Validations**:
- **SEAD Enhancement**: Validate plan contains SEAD integration sections
- **SEAD Enhancement**: Check catalog pattern availability for task generation
- **SEAD Enhancement**: Confirm constitutional compliance framework configured

### 2. Load and Analyze Design Documents (Ported from Spec-Kit with SEAD Enhancements)

#### 2.1 Load Required and Optional Design Documents

**Execute Spec-Kit Document Loading Logic**:
- **Always read**: `plan.md` for tech stack and libraries  
- **IF EXISTS**: Read `data-model.md` for entities
- **IF EXISTS**: Read `contracts/` for API endpoints
- **IF EXISTS**: Read `research.md` for technical decisions  
- **IF EXISTS**: Read `quickstart.md` for test scenarios

**Note from Spec-Kit**: Not all projects have all documents (CLI tools might not have contracts/, simple libraries might not need data-model.md). Generate tasks based on what's available.

**SEAD Enhancement Document Analysis**:
- **SEAD Enhancement**: Extract SEAD mode constraints from plan
- **SEAD Enhancement**: Load catalog pattern requirements from design documents
- **SEAD Enhancement**: Analyze constitutional compliance requirements
- **SEAD Enhancement**: Identify agent coordination requirements

### 3. Generate Tasks Following Spec-Kit Template with SEAD Enhancements

#### 3.1 Load Task Generation Template

- **Primary**: Load SEAD template from `sead-core/templates/sead-spec-kit-tasks-tmpl.yaml`
- **Fallback**: Load Spec-Kit template from `templates/tasks-template.md` if SEAD template unavailable
- **SEAD Enhancement**: Parse template for SEAD-specific task categories and constitutional requirements

#### 3.2 Execute Spec-Kit Task Generation Rules with SEAD Enhancements

**Spec-Kit Task Generation Rules (Preserved)**:
Replace example tasks with actual tasks based on:
- **Setup tasks**: Project init, dependencies, linting
- **Test tasks [P]**: One per contract, one per integration scenario  
- **Core tasks**: One per entity, service, CLI command, endpoint
- **Integration tasks**: DB connections, middleware, logging
- **Polish tasks [P]**: Unit tests, performance, docs

**Spec-Kit Task Generation Logic (Preserved)**:
- Each contract file → contract test task marked [P]
- Each entity in data-model → model creation task marked [P]
- Each endpoint → implementation task (not parallel if shared files)
- Each user story → integration test marked [P]
- Different files = can be parallel [P]
- Same file = sequential (no [P])

**SEAD Task Generation Enhancements**:
- **Catalog Pattern Tasks**: 
  - Catalog pattern setup tasks (required patterns, extensions)
  - Pattern validation tasks [P] (independent pattern domains)
  - Pattern integration verification tasks
- **Constitutional Compliance Tasks**:
  - Mode constraint validation tasks throughout workflow
  - Quality gate checkpoint tasks at phase boundaries  
  - Constitutional compliance verification tasks
- **Agent Coordination Tasks**:
  - Agent handoff validation tasks
  - Context preservation verification tasks
  - Cross-agent communication checkpoint tasks

### 4. Order Tasks by Dependencies with SEAD Enhancements

#### 4.1 Apply Spec-Kit Task Ordering (Preserved)

**Spec-Kit Ordering Rules**:
- Setup before everything
- Tests before implementation (TDD)
- Models before services  
- Services before endpoints
- Core before integration
- Everything before polish

#### 4.2 Apply SEAD Task Ordering Enhancements  

**SEAD Ordering Enhancements**:
- **Catalog Setup First**: Catalog pattern setup before core implementation
- **Constitutional Checkpoints**: Quality gates at logical phase boundaries
- **Agent Handoff Points**: Context preservation tasks before agent transitions  
- **Mode-Specific Gates**: Validation tasks appropriate for current SEAD mode

### 5. Create Task Breakdown Document with SEAD Integration

#### 5.1 Generate Task Document Structure

Create `FEATURE_DIR/tasks.md` with enhanced Spec-Kit structure:

**Spec-Kit Task Document Structure (Preserved)**:
- Correct feature name from implementation plan
- Numbered tasks (T001, T002, etc.)
- Clear file paths for each task
- Dependency notes  
- Parallel execution guidance with [P] markers

**SEAD Task Document Enhancements**:
- **SEAD Integration Header**: Mode configuration, catalog status, constitutional requirements
- **Catalog Pattern Section**: Pattern setup tasks, validation tasks, integration tasks
- **Constitutional Compliance Section**: Quality gate tasks, validation checkpoints, constraint verification
- **Agent Coordination Section**: Handoff tasks, context preservation tasks, communication checkpoints

#### 5.2 Include Parallel Execution Examples (Enhanced Spec-Kit)

**Spec-Kit Parallel Execution (Preserved)**:
- Group [P] tasks that can run together
- Show actual Task agent commands  
- Clear dependency relationships

**SEAD Parallel Execution Enhancements**:
- **Catalog Pattern Parallelism**: Independent pattern domains can be implemented in parallel
- **Constitutional Validation Parallelism**: Independent compliance checks can run in parallel
- **Agent Coordination Sequencing**: Handoff tasks must be sequential, but preparation can be parallel

### 6. SEAD Task Context and Agent Integration

#### 6.1 Create Implementation Context Package for Each Task

**SEAD Enhancement**: For each task, include:
- **Catalog Pattern Context**: Required patterns, usage guidance, extension instructions
- **Constitutional Constraint Context**: Mode-specific requirements, validation criteria  
- **Agent Context**: Which SEAD agent should execute, required context, handoff preparation
- **Quality Gate Context**: Validation checkpoints, acceptance criteria, escalation procedures

#### 6.2 Configure Task Agent Assignments

**SEAD Enhancement**: Assign tasks to appropriate SEAD agents:
- **Setup Tasks**: SEAD Developer with infrastructure focus
- **Test Tasks**: SEAD QA with catalog test pattern integration
- **Core Implementation Tasks**: SEAD Developer with catalog pattern guidance
- **Integration Tasks**: SEAD Architect with constitutional compliance focus
- **Polish Tasks**: SEAD QA with mode-appropriate quality standards

### 7. Task Document Creation and Workspace Integration

#### 7.1 Write Tasks Document with SEAD Enhancements

Write to `FEATURE_DIR/tasks.md` using structure that combines:

**Core Spec-Kit Content**:
- Feature name and implementation context
- Complete numbered task list with dependencies
- File paths and parallel execution guidance
- Task agent commands for execution

**SEAD Enhancement Content**:
- SEAD mode configuration and constraint summary
- Catalog pattern implementation strategy
- Constitutional compliance checkpoint schedule
- Agent coordination and handoff requirements

#### 7.2 Link Tasks to SEAD Workspace

- **SEAD Enhancement**: Create task link in `sead-workspace/stories/` directory (task stories)
- **SEAD Enhancement**: Update workspace artifact relationships
- **SEAD Enhancement**: Prepare implementation readiness indicators
- **SEAD Enhancement**: Initialize task execution tracking

### 8. Validation and Implementation Readiness

#### 8.1 Validate Task Completeness (Enhanced Spec-Kit)

**Spec-Kit Validation Criteria**:
- Tasks are immediately executable
- Each task is specific enough for LLM completion
- Dependencies clearly documented
- Parallel execution guidance accurate

**SEAD Validation Enhancements**:
- **Catalog Integration**: All required patterns have implementation tasks
- **Constitutional Compliance**: All mode constraints have validation tasks
- **Agent Coordination**: All handoff points have preparation tasks
- **Quality Assurance**: All quality gates have checkpoint tasks

#### 8.2 Report Task Generation Completion

Report completion with:
- Task document path and task count
- **SEAD Enhancement**: Catalog pattern implementation coverage
- **SEAD Enhancement**: Constitutional compliance checkpoint coverage  
- **SEAD Enhancement**: Agent coordination readiness status
- **SEAD Enhancement**: Implementation phase readiness indicator

## SEAD Success Criteria

- Task breakdown follows Spec-Kit proven generation methodology
- All tasks immediately executable with sufficient context for LLM agents
- SEAD catalog pattern implementation properly distributed across tasks
- Constitutional compliance validation appropriately integrated throughout workflow
- Agent coordination and handoff requirements clearly specified
- Mode-appropriate quality gates positioned at logical boundaries

## SEAD Innovation Benefits

- **Proven Task Generation**: Leverages Spec-Kit's battle-tested task breakdown methodology  
- **Constitutional Integration**: Distributes compliance requirements across executable tasks
- **Catalog Implementation**: Ensures organizational patterns implemented consistently
- **Agent Orchestration**: Enables coordinated multi-agent implementation execution
- **Quality Assurance**: Embeds validation checkpoints throughout development workflow
- **Mode Flexibility**: Adapts task complexity to project phase and governance requirements

## Output

A comprehensive task breakdown document that provides:
- Immediately executable tasks following Spec-Kit proven methodology
- SEAD catalog pattern implementation distributed across appropriate tasks
- Constitutional compliance validation integrated throughout workflow  
- Agent coordination requirements with handoff preparation tasks
- Quality gate checkpoints positioned for mode-appropriate governance
- Implementation roadmap ready for multi-agent execution coordination