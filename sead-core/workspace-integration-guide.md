# SEAD Workspace Integration Guide

## Overview

SEAD-METHOD now supports both traditional file locations and CLI workspace outputs through a unified discovery system. This guide explains how agents can find files regardless of where they were created.

## Configuration Locations

### Core Configuration
`sead-core/core-config.yaml` contains the master workspace configuration with discovery paths.

### Project Configuration
`sead.config.yaml` (project-level) inherits workspace configuration and can override paths.

## Discovery Path System

When agents need to find files, they should check locations in this order:

### Stories
1. `./sead-workspace/stories/` (CLI outputs)
2. `docs/stories/` (traditional location)
3. `./stories/` (alternative location)

### Implementations
1. `./sead-workspace/implementations/` (CLI outputs)
2. `docs/implementations/` (traditional location)  
3. `./implementations/` (alternative location)

### Specifications
1. `./sead-workspace/specifications/` (CLI outputs)
2. `docs/specifications/` (traditional location)
3. `./specs/` (alternative location)

### Planning
1. `./sead-workspace/planning/` (CLI outputs)
2. `docs/planning/` (traditional location)
3. `./planning/` (alternative location)

### Tasks
1. `./sead-workspace/tasks/` (CLI outputs)
2. `docs/tasks/` (traditional location)
3. `./tasks/` (alternative location)

### QA Gates
1. `docs/qa/gates/` (traditional location)
2. `./qa/gates/` (alternative location)
3. `./sead-workspace/qa/gates/` (CLI outputs)

## CLI Command Outputs

### `sead stories`
- **Output**: `./sead-workspace/stories/story-creation-{timestamp}.md`
- **Contains**: Agent coordination instructions for story creation
- **Discovery**: Will be found by agents checking `workspace.discovery_paths.stories`

### `sead implement`
- **Output**: `./sead-workspace/implementations/impl-{story-id}-{timestamp}.md`  
- **Contains**: Agent coordination instructions for implementation
- **Discovery**: Will be found by agents checking `workspace.discovery_paths.implementations`

### `sead specify` (via task)
- **Output**: `./sead-workspace/tasks/sead-create-specification-execution-{timestamp}.md`
- **Contains**: Task execution framework for specification creation
- **Discovery**: Will be found by agents checking `workspace.discovery_paths.tasks`

### `sead plan` (via task)
- **Output**: `./sead-workspace/tasks/sead-create-implementation-plan-execution-{timestamp}.md`
- **Contains**: Task execution framework for implementation planning
- **Discovery**: Will be found by agents checking `workspace.discovery_paths.tasks`

## Agent Integration

### For Task Files (sead-core/tasks/*.md)

When tasks reference `devStoryLocation` or similar config values, they should:

1. Load `sead.config.yaml` to get workspace configuration
2. Check `workspace.discovery_paths` for the relevant artifact type
3. Search paths in order until files are found
4. Use the first location where matching files exist

### For Agent Files (sead-core/agents/*.md)

Agents should:

1. Read workspace configuration on activation (step 3 in activation instructions)
2. When commands reference file discovery, use discovery paths from config
3. Prioritize CLI workspace outputs while maintaining backward compatibility

### Configuration Access Pattern

```yaml
# From sead.config.yaml or sead-core/core-config.yaml
workspace:
  discovery_paths:
    stories:
      - "./sead-workspace/stories"  # Check CLI outputs first
      - "docs/stories"              # Check traditional location second  
      - "./stories"                 # Check alternative location third
```

## Backward Compatibility

- **Traditional workflows** continue to work unchanged
- **Existing file locations** are preserved and discovered
- **CLI workflows** add new capabilities without breaking existing patterns
- **Discovery order** prioritizes CLI outputs but falls back to traditional locations

## Benefits

1. **Unified Discovery**: Agents find files regardless of creation method
2. **CLI Integration**: Quick tactical workflows are fully supported
3. **Backward Compatibility**: Existing workflows remain functional
4. **Flexible Workspaces**: Teams can choose their preferred file organization
5. **Configuration-Driven**: Easy to customize for different project needs

## Usage Examples

### Traditional Workflow
```bash
# Files created manually in docs/stories/
# Agents find them via discovery_paths fallback
```

### CLI Workflow  
```bash
sead stories  # Creates ./sead-workspace/stories/story-creation-{timestamp}.md
# Agents find them via discovery_paths priority
```

### Mixed Workflow
```bash
# Some stories in docs/stories/, some in sead-workspace/stories/
# Agents find all stories by checking both locations
```

This integration ensures that the CLI commands provide a lightweight alternative to the full 25-step process while maintaining full compatibility with existing SEAD methodology and agent coordination.