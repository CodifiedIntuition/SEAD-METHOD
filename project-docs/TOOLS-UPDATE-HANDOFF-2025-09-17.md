# SEAD-METHOD Tools Update Handoff

**Date**: 2025-09-17  
**Context**: Documentation has been updated to v1.3.5-beta.1, but tools need comprehensive updates  
**Branch**: `feature/sead-method-cleanup`  
**Status**: Ready for tools modernization

## Current State Summary

### ✅ Completed in This Session
- **Documentation fully updated** to reflect current functionality
- **Repository cleaned** of demo/test files and outdated artifacts
- **Version updated** to `1.3.5-beta.1` in main package.json
- **Structure clarified** between source (`sead-core/`) and installed (`.sead-core/`)
- **Project-docs restored** after accidental removal

### 🔧 Critical Tools Issues Identified

The tools in `/tools/` directory are significantly outdated and need comprehensive updates to match the current SEAD system.

## Major Tools Problems Found

### 1. Version Mismatches
- **tools/installer/package.json**: Version `4.42.1` (should be `1.3.5-beta.1`)
- **tools/sead-cli-reference.js**: Version `4.0.0` (should be `1.3.5-beta.1`)
- **Version inconsistency** across the entire tools ecosystem

### 2. Agent Naming Outdated
**File**: `tools/installer/config/ide-agent-config.yaml`

**Current (wrong)**:
```yaml
cline-order:
  bmad-master: 1
  bmad-orchestrator: 2
  pm: 3
  analyst: 4
  architect: 5
  po: 6
  sm: 7
  dev: 8
  qa: 9
  ux-expert: 10
```

**Should be**:
```yaml
cline-order:
  sead-master: 1
  sead-orchestrator: 2
  sead-project-manager: 3
  sead-analyst: 4
  sead-architect: 5
  sead-product-owner: 6
  sead-scrum-master: 7
  sead-developer: 8
  sead-qa: 9
  sead-ux-expert: 10
  sead-catalog-architect: 11
  sead-pattern-extraction: 12
```

### 3. Missing New Agents
The installer config is missing these critical new agents:
- `sead-catalog-architect`
- `sead-pattern-extraction`

### 4. Current Agent File Issues
**Directory**: `sead-core/agents/`

**Problem**: Duplicate architect files
- `sead-architect.md` 
- `sead-architect-updated.md`

**Action needed**: Determine which is current and remove the other.

### 5. Tools Functionality Gaps
The tools may not support current SEAD capabilities:
- 67+ tasks (vs previous smaller number)
- External asset integration workflows
- Constitutional validation workflows
- New catalog management features
- Updated IDE integrations (15+ IDEs)

## Current System State

### Actual Agents (14 total)
```bash
$ ls sead-core/agents/
sead-analyst.md
sead-architect-updated.md
sead-architect.md
sead-catalog-architect.md
sead-developer.md
sead-master.md
sead-orchestrator.md
sead-pattern-extraction.md
sead-product-owner.md
sead-project-manager.md
sead-qa.md
sead-scrum-master.md
sead-ux-expert.md
universal-commands.md
```

### Actual Tasks
```bash
$ ls sead-core/tasks/ | wc -l
67
```

### Current Package Version
```json
{
  "name": "sead-method-core",
  "version": "1.3.5-beta.1"
}
```

## Required Tools Updates

### 1. Version Synchronization
Update all version references to `1.3.5-beta.1`:
- `tools/installer/package.json`
- `tools/sead-cli-reference.js` 
- Any other version references in tools

### 2. Agent Configuration Updates
**File**: `tools/installer/config/ide-agent-config.yaml`

**Updates needed**:
- Replace all `bmad-*` references with `sead-*`
- Replace short names (`dev`, `pm`, `po`, `sm`) with full `sead-*` names
- Add missing agents: `sead-catalog-architect`, `sead-pattern-extraction`
- Update Roo Code permissions section with correct agent names
- Update Cline ordering with all 14 agents

### 3. Installer Logic Updates
**Files**: `tools/installer/lib/*.js`

**Potential issues**:
- May have hardcoded agent lists that need updating
- May not support new task categories
- May not handle external asset integration features
- IDE integration logic may be outdated

### 4. Clean Up Duplicate Files
**Issue**: Both `sead-architect.md` and `sead-architect-updated.md` exist

**Action needed**:
- Determine which file is current
- Remove the outdated one
- Update any references in tools

### 5. Feature Support Verification
Verify tools support current SEAD features:
- 67+ tasks instead of previous smaller number
- External asset integration commands
- Constitutional validation workflows
- New catalog management operations
- All 15+ IDE integrations mentioned in docs

## Testing Requirements

After updates, verify:
1. **Installation works**: `sead install` creates correct `.sead-core` structure
2. **Agent recognition**: All 14 agents are properly recognized
3. **IDE integration**: Commands work for all supported IDEs
4. **Version consistency**: All tools report `1.3.5-beta.1`
5. **New features**: External asset integration commands work

## Files to Update

### High Priority
1. `tools/installer/package.json` - Version update
2. `tools/installer/config/ide-agent-config.yaml` - Agent names and list
3. `tools/sead-cli-reference.js` - Version and functionality
4. `sead-core/agents/` - Remove duplicate architect file

### Medium Priority
5. `tools/installer/lib/resource-locator.js` - Agent discovery logic
6. `tools/installer/lib/config-loader.js` - Configuration loading
7. `tools/installer/lib/installer.js` - Installation logic
8. `tools/installer/lib/ide-setup.js` - IDE integration

### Low Priority (Verify Only)
9. `tools/installer/config/install.config.yaml` - Installation options
10. Other tools in `tools/flattener/` and `tools/builders/`

## Context for Next Session

**What's working**: Documentation is current, main package.json is correct, repository is clean

**What needs work**: Entire tools ecosystem needs modernization to match current SEAD functionality

**Priority**: High - tools are essential for user experience and npm package functionality

**Approach**: Systematic update of versions, agent names, and feature support across all tools

**Branch**: Continue work on `feature/sead-method-cleanup`

## Success Criteria

Tools update is complete when:
- ✅ All versions are `1.3.5-beta.1`
- ✅ All agent names use `sead-*` convention
- ✅ All 14 agents are supported in IDE configs
- ✅ Installation creates correct `.sead-core` structure with all current content
- ✅ All 67+ tasks are accessible
- ✅ External asset integration features work
- ✅ No duplicate or obsolete files remain

---

**Next Session Goal**: Complete tools modernization to match updated documentation and current SEAD functionality.