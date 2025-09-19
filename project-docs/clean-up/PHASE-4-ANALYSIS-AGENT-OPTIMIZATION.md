# Phase 4: Agent Role Optimization Analysis

## Overview
Phase 4 focuses on optimizing agent roles to eliminate overlap and establish clear responsibilities. This analysis examines current agent command overlap and proposes optimization strategies.

## Task 1: Story Creation Hierarchy Analysis

### Current Overlap Problem
**Identical Commands Across Multiple Agents:**

| Command | Product Owner | Scrum Master | Project Manager |
|---------|---------------|--------------|-----------------|
| `create-epic` | ✅ | ❌ | ✅ |
| `create-story` | ✅ | ❌ | ✅ |
| `create-brownfield-epic` | ✅ | ❌ | ✅ |
| `create-brownfield-story` | ✅ | ❌ | ✅ |
| `draft` (create-next-story) | ❌ | ✅ | ❌ |

**Overlap Issues:**
- Product Owner and Project Manager have 100% identical story creation commands
- Creates confusion about which agent to use for story creation
- Duplicates responsibility and maintenance overhead
- Unclear authority in story creation decisions

### Proposed Hierarchy Solution

#### 📝 **sead-product-owner** - PRIMARY STORY CREATOR
**Role:** Business-focused story creation with catalog awareness
**Responsibilities:**
- ✅ `create-epic` - Business-driven epic creation with catalog patterns
- ✅ `create-story` - User story creation from requirements 
- ✅ `create-brownfield-epic` - Legacy system epic planning
- ✅ `create-brownfield-story` - Legacy integration stories
- ✅ Story validation and acceptance criteria definition
- ✅ Backlog prioritization and refinement

#### 🏃 **sead-scrum-master** - STORY DECOMPOSITION & SPRINT PLANNING  
**Role:** Technical story breakdown and sprint coordination
**Responsibilities:**
- ✅ `draft` (create-next-story) - Story decomposition from epics
- ✅ Story refinement for technical clarity
- ✅ Sprint planning and story assignment
- ✅ Story validation against technical constraints
- ❌ PRIMARY story creation (delegates to Product Owner)

#### 📋 **sead-project-manager** - EPIC-LEVEL COORDINATION
**Role:** High-level project coordination and dependency management
**Responsibilities:**
- ✅ Epic-level dependency analysis
- ✅ Cross-team coordination
- ✅ Resource planning and timeline management
- ✅ Stakeholder communication
- ❌ Direct story/epic creation (delegates to Product Owner)

### Command Optimization Plan

#### Product Owner - Enhanced Commands (Keep All)
```yaml
commands:
  # Primary Story Creation Authority
  - create-epic: Create catalog-aware epic for projects
  - create-story: Create user story from requirements with catalog patterns
  - create-brownfield-epic: Create epic for brownfield projects
  - create-brownfield-story: Create brownfield story with existing patterns
  
  # Story Management
  - validate-story-draft: Validate story against catalog compliance
  - story-refinement: Refine stories for catalog compliance
  - acceptance-criteria: Define mode-appropriate acceptance criteria
  
  # Backlog Management
  - backlog-prioritization: Prioritize based on catalog efficiency
  - sprint-planning: Plan sprints with catalog pattern availability
  - pattern-impact-analysis: Analyze impact of catalog changes
```

#### Scrum Master - Focused Commands (Remove Duplicates)
```yaml
commands:
  # Story Decomposition (Not Creation)
  - draft: Execute create-next-story (decompose epics into stories)
  - story-checklist: Validate story draft against checklist
  - validate-constraints: Check story against SEAD mode constraints
  
  # Technical Story Enhancement
  - link-catalog: Connect story to specific catalog components
  - mode-requirements: Generate mode-appropriate criteria
  - pattern-capture: Capture new patterns for catalog promotion
  
  # REMOVED COMMANDS (delegate to Product Owner):
  # - create-epic (Product Owner responsibility)
  # - create-story (Product Owner responsibility)
```

#### Project Manager - Strategic Commands (Remove Story Creation)
```yaml
commands:
  # Strategic Planning
  - create-prd: Create Product Requirements Document
  - create-brownfield-prd: Create brownfield PRD
  - project-planning: Comprehensive project planning
  - roadmap-planning: Product roadmap with catalog evolution
  
  # Coordination & Management  
  - resource-planning: Plan resources with catalog efficiency
  - risk-assessment: Mode-based risk assessment
  - milestone-planning: Project milestones with mode progression
  - stakeholder-communication: Updates with catalog compliance
  
  # REMOVED COMMANDS (delegate to Product Owner):
  # - create-epic (Product Owner responsibility)
  # - create-story (Product Owner responsibility)
  # - create-brownfield-epic (Product Owner responsibility)
  # - create-brownfield-story (Product Owner responsibility)
```

## Task 2: Catalog Operations Centralization Analysis

### Current Catalog Command Distribution

| Agent | Catalog Commands |
|-------|------------------|
| sead-product-owner | `catalog-scan`, `catalog-dependency-analysis`, `pattern-impact-analysis` |
| sead-scrum-master | `catalog-scan`, `link-catalog`, `pattern-capture` |
| sead-project-manager | `catalog-scan` |
| sead-architect | `catalog-scan`, `catalog-validation` |
| sead-catalog-architect | `catalog-scan`, `bootstrap-catalog`, `validate-catalog`, `pattern-lifecycle` |

### Proposed Centralization: sead-catalog-architect

#### Enhanced sead-catalog-architect (Central Authority)
```yaml
commands:
  # Core Catalog Operations
  - catalog-scan: Comprehensive catalog analysis
  - bootstrap-catalog: Initialize catalog structure
  - validate-catalog: Validate catalog integrity
  - pattern-lifecycle: Manage pattern lifecycle
  
  # Extended Operations (from other agents)
  - catalog-dependency-analysis: Analyze dependencies (from Product Owner)
  - pattern-impact-analysis: Analyze pattern change impact (from Product Owner)
  - link-catalog: Connect artifacts to catalog components (from Scrum Master)
  - pattern-capture: Capture new patterns for promotion (from Scrum Master)
  - catalog-validation: Technical validation (from Architect)
```

#### Other Agents - Simplified Catalog Interface
- **Basic `catalog-scan`** - Read-only catalog querying
- **Delegate complex operations** to sead-catalog-architect
- **Use catalog references** in their artifacts without direct manipulation

## Task 3: Document Management Rationalization Analysis

### Current Document Creation Overlap

| Document Type | Multiple Agents Creating |
|---------------|-------------------------|
| Architecture Documents | sead-architect, sead-project-manager |
| Requirements/Specs | sead-product-owner, sead-project-manager, sead-analyst |
| Analysis Reports | sead-analyst, sead-architect, sead-qa |
| Validation Reports | sead-qa, sead-scrum-master, sead-architect |

### Proposed Document Ownership

#### 🏗️ sead-architect - Technical Architecture
- Architecture documents (all types)
- Technical specifications
- System design documents
- Integration specifications

#### 📝 sead-product-owner - Requirements & Product Specs
- Product Requirements Documents (PRD)
- User stories and epics
- Acceptance criteria
- Feature specifications

#### 🔍 sead-analyst - Research & Analysis
- Research reports
- Analysis documents
- Feasibility studies
- Requirements analysis

#### ✅ sead-qa - Quality & Validation
- Quality reports
- Validation documents
- Test specifications
- Compliance reports

## Implementation Strategy

### Phase 4.1: Story Creation Hierarchy (Week 1)
1. ✅ Update sead-product-owner.md - Keep all story creation commands
2. ✅ Update sead-scrum-master.md - Remove duplicate commands, add delegation notes
3. ✅ Update sead-project-manager.md - Remove story creation commands
4. ✅ Create agent interaction guide for story creation workflow

### Phase 4.2: Catalog Operations Centralization (Week 1) 
1. ✅ Enhance sead-catalog-architect.md with consolidated commands
2. ✅ Simplify catalog commands in other agents
3. ✅ Create catalog operation delegation patterns
4. ✅ Update task dependencies for catalog operations

### Phase 4.3: Document Management Rationalization (Week 2)
1. ✅ Define clear document ownership in each agent
2. ✅ Remove duplicate document creation commands
3. ✅ Create document creation delegation workflow
4. ✅ Update task dependencies for document creation

### Phase 4.4: Validation & Testing (Week 2)
1. ✅ Create agent role testing framework
2. ✅ Validate agent optimization preserves functionality
3. ✅ Test agent delegation workflows
4. ✅ Measure overlap reduction and efficiency gains

## Success Metrics

### Quantitative Targets
- **Command Overlap Reduction**: 70% reduction in duplicate commands
- **Agent Role Clarity**: 100% unique primary responsibilities
- **Maintenance Efficiency**: 40% reduction in agent maintenance overhead

### Qualitative Improvements
- **Clear Authority**: No ambiguity in which agent handles which tasks
- **Efficient Delegation**: Smooth handoffs between agent responsibilities  
- **Consistent Experience**: Users know exactly which agent to use when
- **Reduced Confusion**: Elimination of identical commands across agents

## Risk Mitigation

### Backward Compatibility
- Maintain deprecated commands with delegation messages
- Provide clear migration guidance for existing workflows
- Implement gradual deprecation warnings

### User Experience
- Clear documentation of new agent responsibilities
- Migration guide for common workflows
- Updated help commands reflecting new structure

### Functionality Preservation
- All existing capabilities maintained through delegation
- No loss of features, only improved organization
- Comprehensive testing of delegation workflows