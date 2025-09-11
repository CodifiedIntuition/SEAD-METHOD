# Catalog Architect Greenfield Gap Analysis

## Critical Gap Identified

**Issue**: The sead-catalog-architect agent lacks proper input requirements for greenfield catalog generation, missing the essential architectural and requirements context needed to create meaningful initial catalog patterns.

## Current State Analysis

### What sead-catalog-architect Currently Does:

1. **Activation Instructions** (lines 19-37 in sead-catalog-architect.md):
   - Scans existing catalog structure in `sead-catalog/`
   - Checks if brownfield or greenfield
   - **NO requirements to read project documents**

2. **Commands Available**:
   - `*greenfield-bootstrap` - Initialize pattern tracking for new project development
   - **But no indication it reads PRD/Architecture documents**

3. **Dependencies Listed**:
   - Tasks: `brownfield-codebase-analysis.md`, `pattern-identification-workflow.md`
   - **NO greenfield-specific tasks listed**
   - **NO references to reading PRD or architecture documents**

4. **Focus Areas** (lines 49):
   - "Catalog generation from **brownfield analysis**"
   - "Greenfield Guidance - Help teams capture patterns **during prototype development**"

## The Problem in Detail

### Greenfield Scenario Gap:

**Current Workflow:**
```
User Request → sead-catalog-architect → *greenfield-bootstrap → ???
```
**What's Missing:**
- No requirement to read `docs/sead-prd.md` 
- No requirement to read `docs/sead-architecture.md`
- No requirement to read `docs/sead-project-brief.md`
- No understanding of what patterns the system WILL need
- No seed patterns based on planned architecture

**Result**: Catalog architect creates empty template structure without meaningful initial patterns.

### What Should Happen:

**Proper Greenfield Workflow:**
```
sead-prd.md + sead-architecture.md → sead-catalog-architect → *greenfield-bootstrap → Seeded catalog with initial patterns
```

## Specific Gaps in Agent Configuration

### 1. Missing Activation Instructions

Current activation **SHOULD include**:
```yaml
- STEP 4.5: For greenfield projects, load and read docs/sead-project-brief.md (if exists)
- STEP 4.6: For greenfield projects, load and read docs/sead-prd.md (if exists) 
- STEP 4.7: For greenfield projects, load and read docs/sead-architecture.md (if exists)
- STEP 4.8: Extract planned patterns from architecture and requirements
```

### 2. Missing Dependencies

Should include greenfield-specific tasks:
```yaml
tasks:
  - greenfield-catalog-bootstrap.md  # MISSING
  - architecture-pattern-seeding.md  # MISSING  
  - prd-pattern-extraction.md        # MISSING
```

### 3. Missing Commands

Should have commands like:
```yaml
commands:
  - seed-from-architecture: Extract initial patterns from architecture document
  - seed-from-prd: Extract initial patterns from PRD requirements
  - validate-architecture-catalog-alignment: Ensure catalog supports architectural choices
```

### 4. Missing Input Requirements

The agent should **require** these inputs for greenfield operations:
- `docs/sead-project-brief.md` - For project context and mode
- `docs/sead-prd.md` - For requirements and functional patterns  
- `docs/sead-architecture.md` - For technical patterns and structure

## Impact Analysis

### Current Behavior Problems:

1. **Empty Catalog**: Creates template structure without meaningful patterns
2. **Missed Requirements**: No connection between planned architecture and catalog
3. **Workflow Disconnect**: Architects design systems, but catalog has no knowledge of the design
4. **Pattern Gap**: Initial development has no patterns to follow
5. **Constraint Failure**: Cannot enforce constraints on patterns that don't exist

### Missing Value Delivery:

1. **API Contracts**: Should seed from planned API design in architecture
2. **Shared Types**: Should extract from data models in PRD/architecture
3. **Design System**: Should create initial components from UX requirements
4. **State Management**: Should align with planned state architecture
5. **Error Handling**: Should create patterns matching planned error strategy

## Recommended Solution

### 1. Update Agent Activation Instructions

Add to `sead-core/agents/sead-catalog-architect.md` activation-instructions:

```yaml
activation-instructions:
  - STEP 4: Scan existing catalog structure in sead-catalog/ to understand current patterns
  - STEP 4.5: For greenfield projects, scan for and read planning documents:
    - docs/sead-project-brief.md (project context and mode)
    - docs/sead-prd.md (requirements and functional patterns)
    - docs/sead-architecture.md (technical patterns and system design)
  - STEP 4.6: Extract planned patterns from project documents for catalog seeding
  - STEP 5: Check if this is brownfield (existing codebase) or greenfield (new project) analysis
```

### 2. Create Missing Task Files

**A. Create `sead-core/tasks/greenfield-catalog-bootstrap.md`:**
```markdown
# Greenfield Catalog Bootstrap Workflow

**Input Requirements:**
- CRITICAL: docs/sead-project-brief.md (project context)
- CRITICAL: docs/sead-prd.md (functional requirements)  
- CRITICAL: docs/sead-architecture.md (technical architecture)

**Process:**
1. Extract API patterns from architecture
2. Extract type patterns from PRD entities
3. Extract UI patterns from UX requirements
4. Create seed patterns for each catalog domain
5. Generate initial catalog structure with meaningful patterns
```

**B. Create `sead-core/tasks/architecture-pattern-seeding.md`:**
```markdown
# Architecture Pattern Seeding

Extract architectural patterns from sead-architecture.md to seed catalog:
- API endpoint patterns → api-contracts/
- Data model patterns → shared-types/
- Component patterns → design-system/
- etc.
```

### 3. Update Agent Dependencies

Add to `sead-catalog-architect.md` dependencies:

```yaml
dependencies:
  tasks:
    - brownfield-codebase-analysis.md
    - greenfield-catalog-bootstrap.md      # NEW
    - architecture-pattern-seeding.md      # NEW
    - prd-pattern-extraction.md           # NEW
    - pattern-identification-workflow.md
    # ... existing tasks
```

### 4. Update Commands

Add greenfield-specific commands:

```yaml
commands:
  - help: Show numbered list of the following commands to allow selection
  - brownfield-analyze: Analyze existing codebase to extract patterns for catalog generation
  - greenfield-bootstrap: Initialize catalog from project documents (PRD, architecture)
  - seed-from-architecture: Extract patterns from architecture document  # NEW
  - seed-from-prd: Extract patterns from PRD requirements              # NEW
  - validate-architecture-alignment: Ensure catalog supports architecture # NEW
  # ... existing commands
```

### 5. Update Input-Output Documentation

**Enhanced Greenfield Catalog Generation:**

| Agent | Command | **Input Files Required** | **Output File** | **Input Sources** |
|-------|---------|-------------------------|-----------------|------------------|
| **sead-catalog-architect** | `*greenfield-bootstrap` | • **CRITICAL**: `docs/sead-project-brief.md`<br>• **CRITICAL**: `docs/sead-prd.md`<br>• **CRITICAL**: `docs/sead-architecture.md`<br>• Empty sead-catalog template | • Seeded `sead-catalog/` structure<br>• Pattern capture hooks<br>• `docs/catalog-bootstrap-report.md` | • Project requirements analysis<br>• Architecture pattern extraction<br>• PRD entity modeling<br>• Template structure enhancement |

## Validation Requirements

### New Validation Logic:

1. **Greenfield Detection**: If no existing codebase detected
2. **Document Requirements**: Validate PRD and architecture documents exist
3. **Pattern Extraction**: Successfully extract patterns from documents  
4. **Seed Validation**: Ensure seeded patterns are meaningful and complete
5. **Alignment Check**: Validate catalog supports planned architecture

### Error Handling:

- **Missing PRD**: Error with guidance to create PRD first
- **Missing Architecture**: Error with guidance to create architecture first
- **Empty Documents**: Warning about limited pattern extraction capability
- **Pattern Conflicts**: Guidance on resolving architectural inconsistencies

## Implementation Priority

### Phase 1 (Critical):
1. Update sead-catalog-architect activation instructions
2. Create greenfield-catalog-bootstrap.md task
3. Update agent dependencies

### Phase 2 (Important):
4. Create architecture-pattern-seeding.md task
5. Add new commands to agent
6. Update input-output documentation

### Phase 3 (Enhancement):
7. Add validation logic and error handling
8. Create pattern extraction templates
9. Add catalog-architecture alignment validation

This fix ensures that greenfield projects start with meaningful, architecturally-aligned catalog patterns rather than empty templates, enabling proper constraint enforcement from day one.