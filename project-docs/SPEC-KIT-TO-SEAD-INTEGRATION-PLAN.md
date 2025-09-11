# Spec-Kit to SEAD Integration Implementation Plan

**Date**: January 9, 2025  
**Status**: Planning Phase (REVISED)  
**Context**: Port Spec-Kit workflow as SEAD tasks + templates (Option 1 + 3)

## Current State Analysis

### Spec-Kit Files Available for Porting
```
spec-kit/
├── templates/
│   ├── commands/
│   │   ├── specify.md       # Direct LLM instruction for spec creation
│   │   ├── plan.md          # Direct LLM instruction for planning  
│   │   └── tasks.md         # Direct LLM instruction for task breakdown
│   ├── spec-template.md     # Self-executing specification template
│   ├── plan-template.md     # Self-executing implementation plan template
│   └── tasks-template.md    # Task breakdown template
├── memory/
│   └── constitution.md      # Constitutional framework template
└── scripts/                 # Essential dependency scripts
    ├── create-new-feature.sh    # Creates feature branch + directory structure
    ├── setup-plan.sh           # Sets up planning workspace paths
    ├── check-task-prerequisites.sh # Validates task generation prerequisites
    ├── common.sh               # Shared utility functions
    ├── get-feature-paths.sh    # Path resolution utility
    └── update-agent-context.sh # Updates agent context files
```

### SEAD CLI Current State
- ✅ Commands exist: `sead specify`, `sead plan`, `sead stories`, `sead implement`
- ❌ Commands are placeholder implementations (generate instruction files only)
- ❌ No corresponding agent files in `sead-core/agents/`
- ❌ No corresponding constraint files in `sead-core/constitutional-rules/`
- ❌ No corresponding templates in `sead-core/templates/`

### Spec-Kit Architecture Understanding
**Spec-Kit uses direct LLM instruction model**:
- ❌ **No Agents**: Commands are direct procedural instructions for LLMs
- ✅ **Self-Executing Templates**: Templates contain embedded execution logic
- ✅ **Shell Script Dependencies**: Essential utilities for file/branch management
- ✅ **Constitutional Framework**: Governance rules embedded in templates

### Integration Strategy: Option 1 + 3

**Option 1**: Port Spec-Kit commands as SEAD tasks (leverages existing agent system)  
**Option 3**: Port Spec-Kit templates to SEAD template format (preserves proven logic)

## Implementation Plan

### Phase 1: Port Shell Script Dependencies

#### 1.1 Create SEAD Script Utilities
**Target Location**: `sead-core/scripts/` (new folder)

**Scripts to Port**:
```
sead-core/scripts/
├── sead-create-feature-workspace.sh    # From create-new-feature.sh
├── sead-setup-planning-workspace.sh    # From setup-plan.sh  
├── sead-validate-task-prerequisites.sh # From check-task-prerequisites.sh
├── sead-common-utilities.sh           # From common.sh
├── sead-path-resolution.sh            # From get-feature-paths.sh
└── sead-update-agent-context.sh       # From update-agent-context.sh
```

**Script Adaptations**:
- Adapt paths to SEAD workspace structure (`sead-workspace/` vs `specs/`)
- Integrate with SEAD catalog system
- Add mode-aware workspace creation
- Preserve JSON output format for CLI integration

#### 1.2 Create SEAD Task Files
**Target Location**: `sead-core/tasks/`

**New Task Files to Create**:
```
sead-core/tasks/
├── sead-create-specification.md        # From specify.md + spec-template.md logic
├── sead-create-implementation-plan.md  # From plan.md + plan-template.md logic
├── sead-generate-task-breakdown.md     # From tasks.md + tasks-template.md logic
└── sead-create-story-batch.md          # New task for `sead stories` command
```

**Task Content Structure**:
- Port direct LLM instructions from `spec-kit/templates/commands/`
- Integrate with SEAD script utilities
- Add SEAD constitutional framework integration
- Include catalog pattern awareness
- Preserve Spec-Kit's proven execution flow

### Phase 2: Template System Enhancement

#### 2.1 Create SEAD-Enhanced Templates
**Target Location**: `sead-core/templates/`

**New Template Files to Create**:
```
sead-core/templates/
├── sead-spec-kit-specification-tmpl.yaml  # Enhanced from spec-template.md
├── sead-spec-kit-plan-tmpl.yaml           # Enhanced from plan-template.md  
├── sead-spec-kit-tasks-tmpl.yaml          # Enhanced from tasks-template.md
└── sead-spec-kit-constitution-tmpl.yaml   # From constitution.md template
```

**Template Enhancement Strategy**:
- **Preserve Spec-Kit execution logic**: Port the `## Execution Flow (main)` sections
- **Add SEAD front-matter**: mode, catalog_patterns, constitutional_compliance
- **Integrate catalog references**: Add catalog pattern placeholders
- **Add context preservation**: Include agent handoff sections
- **Maintain self-execution**: Keep templates executable like original Spec-Kit

**Template Dependencies**:
- Templates must reference SEAD script utilities (Phase 1.1)
- Templates must integrate with SEAD workspace structure
- Templates must support SEAD mode constraints

### Phase 3: CLI Integration

#### 3.1 Update CLI Command Implementations
**Target Location**: `cli.js`

**Changes Required**:
```javascript
// Replace placeholder implementations with task execution
async function createSeadSpecification(description, options) {
    // Instead of generating instruction files:
    // 1. Execute sead-create-specification task
    // 2. Apply constitutional constraints via existing agents
    // 3. Use SEAD script utilities for workspace management
    // 4. Validate catalog compliance
}

async function createSeadPlan(techStack, options) {
    // Execute sead-create-implementation-plan task
    // Use existing SEAD agents (architect, analyst) with new task
}
```

**Integration Strategy**:
- **Use existing SEAD agents**: Don't create new agents, use existing ones with new tasks
- **Leverage task system**: Port Spec-Kit as tasks that existing agents can execute
- **Preserve CLI interface**: Keep existing `sead specify`, `sead plan`, etc. commands

### Phase 4: Integration and Harmonization

#### 4.1 Resolve Command Overlaps
**Overlap Resolution Strategy**:
1. **`sead specify` vs `sead task create-simple-spec`**:
   - Make `sead specify` the primary command
   - `sead task create-simple-spec` becomes `sead specify --template simple`
   - Both use same underlying agent with different templates

2. **`sead stories` vs `sead task create-next-story`**:
   - `sead stories` for batch generation (multiple stories)
   - `sead task create-next-story` for single sequential story
   - Share same agent with different execution modes

#### 4.2 Artifact Relationship Management
**Unified Artifact Tracking**:
```yaml
# Add to all outputs
artifact_relationships:
  spec_id: "spec-user-auth-2025-01-09"
  plan_id: "plan-fullstack-2025-01-09"
  story_ids: ["1.1.story", "1.2.story"]
  implementation_ids: ["impl-1.1-2025-01-09"]
  parent_workflow: "spec-kit-greenfield"
```

### Phase 5: Testing and Validation

#### 5.1 Command Integration Testing
**Test Scenarios**:
1. **Full Spec-Kit Workflow**: `specify → plan → stories → implement`
2. **Mode Progression**: prototype → development → build-to-deploy  
3. **Catalog Integration**: brownfield project with existing patterns
4. **Error Handling**: invalid inputs, missing dependencies
5. **Agent Handoffs**: context preservation between commands

#### 5.2 Compatibility Testing
**Ensure compatibility with existing SEAD features**:
- Existing BMAD tasks should continue working
- Catalog generation should work with new templates
- Installation system should include new agents
- Build system should package new templates

## Implementation Priorities

### Critical Path Items (Phase 1)
1. **sead-core/scripts/** - Port essential shell script utilities first
   - `sead-common-utilities.sh` (base dependency for all others)
   - `sead-create-feature-workspace.sh` (required for `sead specify`)
   - `sead-setup-planning-workspace.sh` (required for `sead plan`)
   
2. **sead-core/tasks/** - Port core task logic  
   - `sead-create-specification.md` (required for `sead specify`)
   - `sead-create-implementation-plan.md` (required for `sead plan`)

3. **sead-core/templates/** - Port essential templates
   - `sead-spec-kit-specification-tmpl.yaml` (spec output format)
   - `sead-spec-kit-plan-tmpl.yaml` (plan output format)

### Secondary Items (Phase 2)
1. **CLI Integration** - Update placeholder implementations 
2. **Task generation** - `sead-generate-task-breakdown.md` and template
3. **Story batch generation** - `sead-create-story-batch.md` for `sead stories`

### Optional Items (Phase 3)
1. **Advanced script utilities** - `update-agent-context.sh`, `validate-task-prerequisites.sh`
2. **Constitutional framework** - Full Spec-Kit constitution integration
3. **Workflow definitions** - Explicit workflow files (can be implicit initially)

## Success Criteria

### Functional Success
- [ ] `sead specify "feature"` creates proper specification file
- [ ] `sead plan "tech-stack"` creates proper implementation plan
- [ ] `sead stories` creates story files with catalog integration
- [ ] `sead implement story-id` executes with constitutional compliance
- [ ] All commands respect mode constraints (prototype|development|build-to-deploy)

### Quality Success  
- [ ] Agent handoffs preserve context across commands
- [ ] Catalog patterns integrated in all outputs
- [ ] Constitutional constraints enforced at each step
- [ ] Artifact relationships maintained and linkable
- [ ] Error handling provides clear guidance

### Integration Success
- [ ] Existing BMAD tasks continue to work
- [ ] New commands integrate with existing catalog system
- [ ] Installation system includes new components
- [ ] Documentation reflects integrated approach

## Risk Mitigation

### Context Length Risk
**Risk**: Implementation may exceed context limits during development  
**Mitigation**: Implement in phases, test incrementally, use TodoWrite for tracking

### Template Complexity Risk  
**Risk**: Templates become too complex for LLM processing  
**Mitigation**: Start with simple templates, enhance iteratively, test with sample data

### Integration Compatibility Risk
**Risk**: New agents conflict with existing BMAD tasks  
**Mitigation**: Maintain backward compatibility, use namespace separation, thorough testing

### Constitutional Constraint Risk
**Risk**: Constraints become too rigid for practical use  
**Mitigation**: Start with flexible constraints, allow mode-based overrides, gather user feedback

## Current Implementation Status

### ✅ **COMPLETED - Phases 1 & 2** (January 9, 2025)

**Phase 1: Shell Script Dependencies** - ✅ COMPLETE
- Created `sead-core/scripts/` with 4 utility scripts
- All scripts executable and SEAD-workspace aware
- Provides foundation for task execution

**Phase 2: SEAD Task Files** - ✅ COMPLETE  
- Created `sead-core/tasks/` with 3 task definitions
- Ports Spec-Kit logic into SEAD task framework
- Enhanced with catalog integration and constitutional compliance

**Phase 2: Enhanced Templates** - ✅ COMPLETE
- Created `sead-core/templates/` with 3 YAML templates
- Preserves Spec-Kit execution flows with SEAD enhancements
- Ready for CLI integration

### ✅ **COMPLETED - Phase 3: CLI Integration** (January 9, 2025)

**Objective**: Replace CLI placeholder implementations with actual task execution

**Files Updated**:
- `cli.js`: Complete CLI integration with cleanup of old placeholder code
  - `createSeadSpecification()`: Now uses `executeSeadTask('sead-create-specification')`
  - `createSeadPlan()`: Now uses `executeSeadTask('sead-create-implementation-plan')`
  - Cleaned up undefined variables and removed unused functions
  - Fixed duplicate command conflicts

**Integration Results**:
- ✅ `sead specify` command executes Spec-Kit logic via SEAD tasks
- ✅ `sead plan` command executes Spec-Kit logic via SEAD tasks  
- ✅ Both commands integrate with catalog patterns and constitutional framework
- ✅ Agent coordination context preserved for handoffs
- ✅ End-to-end workflow testing successful

### 🔧 **HOW TO CONTINUE FROM FRESH CONTEXT**

**Prerequisites Check**:
1. Verify files exist: `ls sead-core/scripts/` (should show 4 .sh files)
2. Verify files exist: `ls sead-core/tasks/` (should show 3 .md files)  
3. Verify files exist: `ls sead-core/templates/` (should show 3 .yaml files)

**Phase 3 Implementation Steps**:
1. **Update `createSeadSpecification()` in cli.js**:
   - Replace placeholder with `executeSeadTask('sead-create-specification')`
   - Use existing agent coordination system
   - Integrate with SEAD script utilities

2. **Update `createSeadPlan()` in cli.js**:
   - Replace placeholder with `executeSeadTask('sead-create-implementation-plan')`
   - Ensure planning workspace setup
   - Apply constitutional constraints

3. **Update `createSeadStories()` in cli.js**:
   - Can use existing `sead task create-next-story` or new batch generation
   - Integration point for story workflow

4. **Test Integration**:
   - Test `sead specify "test feature"` end-to-end
   - Test `sead plan "tech-stack"` end-to-end
   - Verify workspace creation and artifact linking

**Success Criteria**:
- `sead specify` creates actual specification files (not instruction files)
- `sead plan` creates actual implementation plans (not instruction files)
- Catalog integration works correctly
- Constitutional constraints applied appropriately
- Agent handoffs preserve context

This plan provides a structured approach to complete the Spec-Kit integration by replacing CLI placeholders with actual task execution using the infrastructure created in Phases 1 & 2.