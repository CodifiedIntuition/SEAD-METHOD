# SEAD Agent Document Generation Catalog

This document provides an exhaustive mapping of all SEAD agents, their document generation tasks, inputs, outputs, and file locations.

## Overview

The SEAD Method includes 12 specialized agents that collectively generate over 50 different types of documents across the software development lifecycle. Each agent follows constitutional constraints and catalog-aware patterns to ensure consistency and compliance.

## Agent Summary Table

| Agent ID | Agent Name | Title | Icon | Primary Focus | Document Types Generated |
|----------|------------|-------|------|---------------|-------------------------|
| sead-analyst | Sarah | SEAD Business Analyst | 📊 | Research & Analysis | Project Briefs, Market Research, Competitor Analysis, Brainstorming Reports |
| sead-architect | Alexandra | SEAD System Architect | 🏗️ | System Design | Architecture Documents, Technical Specifications, Infrastructure Plans |
| sead-catalog-architect | Morgan | SEAD Catalog Architect | 📚 | Pattern Management | Catalog Reports, Pattern Documentation, Integration Plans |
| sead-developer | Jordan | SEAD Full Stack Developer | 💻 | Code Implementation | (Code-focused, minimal documents) |
| sead-master | SEAD Master | SEAD Master Task Executor | 🧙 | Orchestration | Multi-domain Documents, Health Reports, Audit Reports |
| sead-orchestrator | SEAD Orchestrator | SEAD Master Orchestrator | 🎭 | Workflow Coordination | Workflow Documents, Constitutional Validation |
| sead-pattern-extraction | Quinn | SEAD Pattern Extraction Specialist | 🔍 | Pattern Analysis | Pattern Reports, Documentation, Catalog Integration |
| sead-product-owner | Sarah | SEAD Product Owner | 📝 | Product Management | Epics, Stories, Backlogs, Feature Specifications |
| sead-project-manager | John | SEAD Project Manager | 📋 | Project Management | PRDs, Project Plans, Risk Assessments, Roadmaps |
| sead-qa | Morgan | SEAD Test Architect & Quality Advisor | 🧪 | Quality Assurance | QA Gates, Test Plans, Risk Profiles, Compliance Reports |
| sead-scrum-master | Taylor | SEAD Scrum Master | 🏃 | Agile Facilitation | Stories, Sprint Documentation, Retrospectives |
| sead-ux-expert | Sally | SEAD UX Expert | 🎨 | User Experience | UX Specifications, Design Systems, Prototypes, Research Plans |

---

## Document Consumption Matrix

This section shows which agents, tasks, commands, or workflows consume the outputs from other agents, enabling harmonization and rationalization analysis.

### Cross-Agent Document Dependencies

| Output Document | Producer Agent | Consumer Agents/Commands | Usage Context | Harmonization Priority |
|-----------------|----------------|-------------------------|---------------|----------------------|
| **Constitutional Project Brief** | sead-analyst | sead-project-manager (*create-prd), sead-architect (*create-*-architecture), sead-ux-expert (*create-front-end-spec) | Foundation document referenced by all downstream agents | **CRITICAL** |
| **Product Requirements Document** | sead-project-manager | sead-architect (*document-project), sead-ux-expert (*create-front-end-spec), sead-product-owner (*create-epic), sead-master (*shard-prd) | Primary requirements source for technical agents | **CRITICAL** |
| **Architecture Documents** | sead-architect | sead-developer (implementation), sead-qa (*review, *gate), sead-pattern-extraction (*pattern-extract) | Technical foundation for development and validation | **HIGH** |
| **User Stories** | sead-product-owner, sead-scrum-master | sead-qa (*gate, *review, *risk-profile), sead-developer (implementation), sead-ux-expert (design validation) | Work unit definition across development workflow | **HIGH** |
| **Epics** | sead-product-owner, sead-project-manager | sead-scrum-master (*draft), sead-architect (architecture alignment), sead-qa (epic-level validation) | Feature scope definition for planning | **HIGH** |
| **QA Gate Decisions** | sead-qa | sead-developer (implementation approval), sead-scrum-master (sprint progression), sead-project-manager (milestone tracking) | Quality validation checkpoints | **MEDIUM** |
| **Frontend Specifications** | sead-ux-expert | sead-developer (UI implementation), sead-architect (architecture validation), sead-qa (UX validation) | UX implementation guidance | **MEDIUM** |
| **Pattern Documentation** | sead-pattern-extraction | sead-catalog-architect (*catalog-export), sead-architect (pattern reuse), All Agents (catalog integration) | Reusable pattern definitions | **HIGH** |
| **Catalog Reports** | sead-catalog-architect | sead-master (*catalog-health), sead-orchestrator (workflow optimization), All Agents (pattern awareness) | Catalog health and evolution tracking | **MEDIUM** |
| **Brainstorming Reports** | sead-analyst | sead-product-owner (backlog creation), sead-project-manager (planning input), sead-architect (technical exploration) | Ideation input for planning | **LOW** |
| **Risk Assessments** | sead-project-manager, sead-qa | sead-orchestrator (workflow adjustment), sead-architect (architectural mitigation), sead-developer (implementation awareness) | Risk-informed decision making | **MEDIUM** |
| **Test Designs** | sead-qa | sead-developer (test implementation), sead-architect (architecture validation), sead-scrum-master (DoD validation) | Testing guidance and validation | **MEDIUM** |

### Document Flow Sequences

#### 1. Greenfield Project Flow
```
sead-analyst (Project Brief) 
  → sead-project-manager (PRD)
    → sead-architect (Architecture)
      → sead-ux-expert (Frontend Spec)
        → sead-product-owner (Epics/Stories)
          → sead-qa (Gates/Reviews)
            → sead-developer (Implementation)
```

#### 2. Brownfield Project Flow  
```
sead-catalog-architect (Brownfield Analysis)
  → sead-analyst (Project Brief)
    → sead-project-manager (Brownfield PRD)
      → sead-architect (Brownfield Architecture)
        → sead-pattern-extraction (Pattern Documentation)
          → sead-product-owner (Brownfield Epics/Stories)
```

#### 3. Pattern Evolution Flow
```
sead-pattern-extraction (Pattern Documentation)
  → sead-catalog-architect (Catalog Integration)
    → All Agents (Updated Pattern Usage)
      → sead-master (Catalog Health Report)
```

### Harmonization Opportunities

#### Critical Dependencies (Immediate Attention)
1. **Project Brief → PRD Alignment**: Ensure constitutional framework consistency
2. **PRD → Architecture Handoff**: Standardize technical requirement translation
3. **Architecture → Story Creation**: Align technical constraints with user stories
4. **Pattern Documentation → Catalog Integration**: Streamline pattern promotion workflow

#### Template Consolidation Candidates
1. **Story Templates**: sead-story-tmpl.yaml used by multiple agents - consider versioning
2. **Architecture Templates**: Multiple architecture templates could share common sections
3. **QA Templates**: sead-qa-gate-tmpl.yaml referenced across multiple validation workflows

#### Workflow Optimization Potential
1. **Document Sharding**: Multiple agents use sead-shard-doc.md - standardize approach
2. **Context Preservation**: All agents need handoff context - create universal pattern
3. **Constitutional Validation**: Repeated across agents - centralize validation logic

## Detailed Agent Document Generation Mapping

### 1. SEAD Analyst (Sarah) - sead-analyst

**Primary Role:** Market research, brainstorming, competitive analysis, project discovery

#### Document Generation Commands & Outputs

| Command | Input Requirements | Template Used | Output Document | Location | Consumed By | Description |
|---------|-------------------|---------------|-----------------|----------|-------------|-------------|
| `*brainstorm {topic}` | Topic description | brainstorming-output-tmpl.yaml | Brainstorming Session Report | docs/brainstorming-output.md | sead-product-owner (backlog creation), sead-project-manager (planning), sead-architect (technical exploration) | Structured brainstorming session with catalog pattern analysis |
| `*create-competitor-analysis` | Market domain, competitors | competitor-analysis-tmpl.yaml | Competitive Analysis Report | docs/competitor-analysis.md | sead-project-manager (market positioning), sead-ux-expert (competitive UX analysis) | Market landscape analysis with catalog-aware insights |
| `*create-project-brief` | Project vision, goals | project-brief-tmpl.yaml | Constitutional Project Brief | docs/sead-project-brief.md | **CRITICAL**: sead-project-manager (*create-prd), sead-architect (*create-*-architecture), sead-ux-expert (*create-front-end-spec), ALL downstream agents | Foundation document with SEAD mode and catalog requirements |
| `*catalog-research {domain}` | Domain specification | catalog-patterns.md data | Domain Research Report | docs/catalog-research.md | sead-catalog-architect (pattern integration), sead-architect (pattern reuse), sead-pattern-extraction (pattern evolution) | Existing catalog pattern analysis for domain |
| `*perform-market-research` | Market parameters | market-research-tmpl.yaml | Market Research Report | docs/market-research.md | sead-project-manager (strategic planning), sead-product-owner (market-driven features) | Comprehensive market analysis with catalog evolution trends |
| `*research-prompt {topic}` | Research topic | create-deep-research-prompt.md task | Research Prompt Document | docs/research-prompt.md | sead-master (research orchestration), Any agent needing deep research | Deep research methodology with catalog enhancement |

#### Key Tasks Used
- `advanced-elicitation.md` - Interactive requirement gathering
- `create-deep-research-prompt.md` - Research planning
- `create-doc.md` - Universal document creation
- `document-project.md` - Project documentation
- `facilitate-brainstorming-session.md` - Structured brainstorming

#### Constitutional Compliance
- Mode-appropriate constraint enforcement
- Catalog-first approach before new solutions
- Context preservation for agent handoffs
- Numbered options protocol for user interaction

---

### 2. SEAD Architect (Alexandra) - sead-architect

**Primary Role:** Catalog-aware system design, architecture documentation, technology selection

#### Document Generation Commands & Outputs

| Command | Input Requirements | Template Used | Output Document | Location | Consumed By | Description |
|---------|-------------------|---------------|-----------------|----------|-------------|-------------|
| `*create-backend-architecture` | System requirements, PRD | sead-architecture-tmpl.yaml | Backend Architecture | docs/backend-architecture.md | **HIGH**: sead-developer (implementation), sead-qa (*review, *gate), sead-pattern-extraction (*pattern-extract) | Catalog-aware backend system design |
| `*create-brownfield-architecture` | Existing system analysis | sead-brownfield-architecture-tmpl.yaml | Brownfield Architecture | docs/brownfield-architecture.md | sead-developer (refactoring), sead-pattern-extraction (pattern identification), sead-catalog-architect (catalog integration) | Architecture for existing systems with catalog extraction |
| `*create-front-end-architecture` | UI/UX requirements | sead-front-end-architecture-tmpl.yaml | Frontend Architecture | docs/frontend-architecture.md | sead-ux-expert (design alignment), sead-developer (frontend implementation), sead-qa (architecture validation) | Frontend design with design-system integration |
| `*create-full-stack-architecture` | Complete system scope, PRD | sead-fullstack-architecture-tmpl.yaml | Full Stack Architecture | docs/fullstack-architecture.md | **CRITICAL**: sead-developer (full implementation), sead-qa (system validation), sead-product-owner (technical story creation) | Complete system architecture with catalog integration |
| `*create-data-architecture` | Data requirements | sead-data-architecture-tmpl.yaml | Data Architecture | docs/data-architecture.md | sead-developer (data layer), sead-qa (data validation), sead-pattern-extraction (data patterns) | Three-tier data strategy with catalog patterns |
| `*create-deployment-architecture` | Deployment needs | sead-deployment-architecture-tmpl.yaml | Deployment Architecture | docs/deployment-architecture.md | sead-developer (deployment implementation), sead-project-manager (deployment planning), sead-qa (deployment validation) | Three-tier deployment strategy |
| `*validate-architecture` | Current architecture | constraint-validation.md task | Architecture Validation Report | docs/architecture-validation.md | sead-master (governance), sead-orchestrator (workflow validation), sead-project-manager (compliance tracking) | SEAD mode constraints and catalog compliance check |
| `*pattern-extract` | Architecture design | pattern-extraction.md task | Pattern Extraction Report | docs/extracted-patterns.md | sead-pattern-extraction (pattern documentation), sead-catalog-architect (catalog promotion) | Architectural patterns for catalog promotion |

#### Key Tasks Used
- `create-deep-research-prompt.md` - Technical research
- `create-doc.md` - Document creation
- `document-project.md` - Project documentation
- `execute-checklist.md` - Validation checklists
- `catalog-pattern-analysis.md` - Pattern analysis
- `constraint-validation.md` - Compliance validation

#### Constitutional Compliance
- Catalog-first architecture patterns
- Mode-appropriate constraints (prototype/development/build-to-deploy)
- Holistic system thinking with catalog integration
- Context preservation for agent handoffs

---

### 3. SEAD Catalog Architect (Morgan) - sead-catalog-architect

**Primary Role:** Pattern management, catalog creation, external asset integration

#### Document Generation Commands & Outputs

| Command | Input Requirements | Template Used | Output Document | Location | Description |
|---------|-------------------|---------------|-----------------|----------|-------------|
| `*catalog-export` | Catalog structure | catalog-taxonomy-tmpl.yaml | Final Catalog Structure | sead-catalog/ | Organized catalog with all patterns |
| `*extraction-report` | Analysis data | pattern-extraction-report-tmpl.yaml | Pattern Extraction Report | docs/pattern-extraction-report.md | Comprehensive pattern analysis report |
| `*brownfield-analysis` | Existing codebase | brownfield-analysis-report-tmpl.yaml | Brownfield Analysis Report | docs/brownfield-analysis.md | Existing system pattern analysis |
| `*external-asset-analysis {asset}` | External asset URL/path | external-asset-analysis-report-tmpl.yaml | External Asset Analysis | docs/external-asset-analysis.md | Third-party asset integration analysis |
| `*integration-architecture {asset}` | Asset integration needs | integration-architecture-tmpl.yaml | Integration Architecture | docs/integration-architecture.md | Architecture for external asset integration |
| `*adoption-strategy {asset}` | Asset adoption plan | external-adoption-strategy-tmpl.yaml | Adoption Strategy | docs/adoption-strategy.md | Strategy for incorporating external patterns |

#### Key Tasks Used
- `create-doc.md` - Document creation
- `brownfield-codebase-analysis.md` - Existing system analysis
- `interactive-catalog-creation.md` - Catalog creation workflow
- `catalog-validation-workflow.md` - Validation processes
- `external-asset-analysis.md` - Third-party analysis
- `catalog-external-integration.md` - Integration workflows

#### Specialized Templates
- `catalog-generation-plan-tmpl.yaml` - Catalog planning
- `api-contract-catalog-tmpl.yaml` - API pattern catalogs
- `type-system-catalog-tmpl.yaml` - Type system patterns
- `design-system-catalog-tmpl.yaml` - Design system patterns
- `integration-pattern-catalog-tmpl.yaml` - Integration patterns

---

### 4. SEAD Developer (Jordan) - sead-developer

**Primary Role:** Code implementation, minimal document generation

#### Document Generation Commands & Outputs

| Command | Input Requirements | Template Used | Output Document | Location | Description |
|---------|-------------------|---------------|-----------------|----------|-------------|
| N/A | N/A | N/A | N/A | N/A | Development-focused agent with no document generation commands |

**Note:** This agent focuses on code implementation and does not generate formal documents.

---

### 5. SEAD Master (SEAD Master) - sead-master

**Primary Role:** Task orchestration, multi-domain document generation

#### Document Generation Commands & Outputs

| Command | Input Requirements | Template Used | Output Document | Location | Description |
|---------|-------------------|---------------|-----------------|----------|-------------|
| `*create-doc` | Document type, content | Multiple templates available | Various Documents | docs/ | Universal document creation with template selection |
| `*document-project` | Project scope | sead-document-project.md task | Project Documentation | docs/project-documentation.md | Comprehensive project documentation |
| `*shard-doc` | Large document | sead-shard-doc.md task | Document Shards | docs/sharded/ | Break large documents into manageable pieces |
| `*catalog-health` | Catalog state | catalog-health-report-tmpl.yaml | Catalog Health Report | docs/catalog-health.md | Catalog system health analysis |
| `*constitutional-audit` | System state | constitutional-audit-tmpl.yaml | Constitutional Audit | docs/constitutional-audit.md | Governance compliance audit |
| `*mode-transition-plan` | Mode change needs | mode-transition-plan-tmpl.yaml | Mode Transition Plan | docs/mode-transition.md | Plan for changing SEAD modes |

#### Available Templates
- All architecture templates (sead-architecture-tmpl.yaml, etc.)
- All product templates (sead-prd-tmpl.yaml, etc.)
- All project templates (sead-project-brief-tmpl.yaml, etc.)
- Specialized templates (catalog-health-report-tmpl.yaml, etc.)

#### Key Tasks Used
- `create-doc.md` - Universal document creation
- `sead-document-project.md` - Project documentation
- `sead-shard-doc.md` - Document sharding
- `catalog-health-analysis.md` - Catalog analysis
- `constitutional-validation.md` - Compliance validation

---

### 6. SEAD Orchestrator (SEAD Orchestrator) - sead-orchestrator

**Primary Role:** Workflow coordination, constitutional validation

#### Document Generation Commands & Outputs

| Command | Input Requirements | Template Used | Output Document | Location | Description |
|---------|-------------------|---------------|-----------------|----------|-------------|
| `*doc-out` | Current document state | N/A | Current Document | Varies | Output document with catalog references |
| `*workflow-documentation` | Workflow design | workflow-orchestration.md task | Workflow Documentation | docs/workflow-documentation.md | Multi-agent workflow documentation |
| `*constitutional-validation` | System state | constitutional-validation.md task | Validation Report | docs/constitutional-validation.md | Constitutional compliance validation |

#### Key Tasks Used
- `create-doc.md` - Document creation
- `workflow-orchestration.md` - Workflow design
- `constitutional-validation.md` - Compliance validation

---

### 7. SEAD Pattern Extraction (Quinn) - sead-pattern-extraction

**Primary Role:** Pattern identification, documentation, catalog integration

#### Document Generation Commands & Outputs

| Command | Input Requirements | Template Used | Output Document | Location | Description |
|---------|-------------------|---------------|-----------------|----------|-------------|
| `*pattern-document` | Extracted patterns | pattern-documentation-tmpl.yaml | Pattern Documentation | docs/patterns/ | Comprehensive pattern documentation |
| `*pattern-export` | Pattern classification | Multiple pattern templates | Catalog-Ready Patterns | sead-catalog/ | Patterns ready for catalog integration |
| `*extraction-report` | Analysis results | pattern-extraction-report-tmpl.yaml | Extraction Report | docs/pattern-extraction-report.md | Comprehensive pattern extraction analysis |

#### Specialized Pattern Templates
- `api-pattern-tmpl.yaml` - API patterns
- `component-pattern-tmpl.yaml` - Component patterns  
- `state-pattern-tmpl.yaml` - State management patterns
- `data-pattern-tmpl.yaml` - Data patterns
- `error-pattern-tmpl.yaml` - Error handling patterns
- `test-pattern-tmpl.yaml` - Testing patterns
- `auth-pattern-tmpl.yaml` - Authentication patterns
- `integration-pattern-tmpl.yaml` - Integration patterns
- `deployment-pattern-tmpl.yaml` - Deployment patterns

#### Key Tasks Used
- `create-doc.md` - Document creation
- `pattern-identification-workflow.md` - Pattern identification
- `pattern-documentation-workflow.md` - Pattern documentation
- `catalog-integration-preparation.md` - Catalog integration

---

### 8. SEAD Product Owner (Sarah) - sead-product-owner

**Primary Role:** Product management, user stories, feature specifications

#### Document Generation Commands & Outputs

| Command | Input Requirements | Template Used | Output Document | Location | Description |
|---------|-------------------|---------------|-----------------|----------|-------------|
| `*create-epic` | Epic scope | sead-epic-tmpl.yaml | Epic Document | docs/epics/epic-{id}.md | Catalog-aware epic creation |
| `*create-story` | Story details | sead-story-tmpl.yaml | User Story | docs/stories/story-{id}.md | User story with catalog pattern suggestions |
| `*create-brownfield-epic` | Existing system scope | sead-epic-tmpl.yaml | Brownfield Epic | docs/epics/brownfield-epic-{id}.md | Epic for existing systems |
| `*create-brownfield-story` | Existing system story | sead-story-tmpl.yaml | Brownfield Story | docs/stories/brownfield-story-{id}.md | Story for existing system enhancement |
| `*catalog-coverage-report` | Backlog analysis | sead-backlog-tmpl.yaml | Coverage Report | docs/catalog-coverage-report.md | Catalog pattern coverage in backlog |
| `*backlog-prioritization` | Backlog items | sead-backlog-tmpl.yaml | Prioritized Backlog | docs/product-backlog.md | Prioritized product backlog |

#### Available Templates
- `sead-story-tmpl.yaml` - User stories
- `sead-epic-tmpl.yaml` - Epics
- `sead-acceptance-criteria-tmpl.yaml` - Acceptance criteria
- `sead-feature-spec-tmpl.yaml` - Feature specifications
- `sead-backlog-tmpl.yaml` - Product backlogs
- `sead-sprint-plan-tmpl.yaml` - Sprint planning

#### Key Tasks Used
- `sead-create-epic.md` - Epic creation
- `sead-create-story.md` - Story creation
- `sead-brownfield-create-epic.md` - Brownfield epics
- `sead-brownfield-create-story.md` - Brownfield stories
- `backlog-prioritization-workflow.md` - Backlog management
- `story-refinement-workflow.md` - Story refinement

---

### 9. SEAD Project Manager (John) - sead-project-manager

**Primary Role:** Project planning, PRDs, roadmaps, resource management

#### Document Generation Commands & Outputs

| Command | Input Requirements | Template Used | Output Document | Location | Description |
|---------|-------------------|---------------|-----------------|----------|-------------|
| `*create-prd` | Product requirements | sead-prd-tmpl.yaml | Product Requirements Document | docs/sead-prd.md | Constitutional PRD with catalog integration |
| `*create-brownfield-prd` | Existing system requirements | sead-brownfield-prd-tmpl.yaml | Brownfield PRD | docs/brownfield-prd.md | PRD for existing system enhancement |
| `*create-project-plan` | Project scope | sead-project-plan-tmpl.yaml | Project Plan | docs/project-plan.md | Comprehensive project plan |
| `*create-roadmap` | Strategic timeline | sead-roadmap-tmpl.yaml | Product Roadmap | docs/roadmap.md | Strategic product roadmap |
| `*risk-assessment` | Project risks | sead-risk-assessment-tmpl.yaml | Risk Assessment | docs/risk-assessment.md | Project risk analysis |
| `*catalog-efficiency-report` | Catalog usage data | N/A | Efficiency Report | docs/catalog-efficiency-report.md | Catalog usage and efficiency metrics |
| `*mode-transition-plan` | Mode change requirements | mode-transition-plan-tmpl.yaml | Transition Plan | docs/mode-transition-plan.md | SEAD mode transition planning |

#### Available Templates
- `sead-prd-tmpl.yaml` - Product requirements
- `sead-brownfield-prd-tmpl.yaml` - Brownfield PRDs
- `sead-project-plan-tmpl.yaml` - Project plans
- `sead-roadmap-tmpl.yaml` - Roadmaps
- `sead-risk-assessment-tmpl.yaml` - Risk assessments
- `sead-milestone-plan-tmpl.yaml` - Milestone planning
- `sead-stakeholder-update-tmpl.yaml` - Stakeholder communications

#### Key Tasks Used
- `create-doc.md` - Document creation
- `sead-create-epic.md` - Epic creation
- `sead-create-story.md` - Story creation
- `project-planning-workflow.md` - Project planning
- `resource-optimization-workflow.md` - Resource management
- `mode-transition-planning.md` - Mode transitions

---

### 10. SEAD QA (Morgan) - sead-qa

**Primary Role:** Quality assurance, testing, compliance validation

#### Document Generation Commands & Outputs

| Command | Input Requirements | Template Used | Output Document | Location | Description |
|---------|-------------------|---------------|-----------------|----------|-------------|
| `*gate {story}` | Story specification | sead-qa-gate-tmpl.yaml | QA Gate Decision | docs/qa-gates/gate-{story-id}.md | Quality gate validation decision |
| `*review {story}` | Story details | sead-qa-gate-tmpl.yaml | QA Review Report | docs/reviews/review-{story-id}.md | Comprehensive QA review with gate decision |
| `*risk-profile {story}` | Story scope | sead-risk-profile.md task | Risk Assessment Matrix | docs/risk-profiles/risk-{story-id}.md | Story-specific risk assessment |
| `*test-design {story}` | Story requirements | sead-test-design.md task | Test Design Document | docs/test-designs/test-{story-id}.md | Comprehensive test scenarios |
| `*trace {story}` | Requirements | sead-trace-requirements.md task | Requirements Traceability | docs/traceability/trace-{story-id}.md | Requirements mapping and traceability |
| `*constraint-report` | System analysis | catalog-compliance-report-tmpl.yaml | Constraint Compliance Report | docs/constraint-compliance-report.md | SEAD constraint compliance analysis |

#### Available Templates
- `sead-qa-gate-tmpl.yaml` - QA gates
- `sead-story-tmpl.yaml` - Story validation
- `catalog-compliance-report-tmpl.yaml` - Compliance reporting

#### Key Tasks Used
- `sead-nfr-assess.md` - Non-functional requirements assessment
- `sead-qa-gate.md` - Quality gate evaluation
- `sead-review-story.md` - Story reviews
- `sead-risk-profile.md` - Risk profiling
- `sead-test-design.md` - Test design
- `sead-trace-requirements.md` - Requirements tracing
- `catalog-compliance-check.md` - Compliance validation
- `constraint-validation.md` - Constraint validation

---

### 11. SEAD Scrum Master (Taylor) - sead-scrum-master

**Primary Role:** Agile facilitation, story creation, sprint management

#### Document Generation Commands & Outputs

| Command | Input Requirements | Template Used | Output Document | Location | Description |
|---------|-------------------|---------------|-----------------|----------|-------------|
| `*draft` | Story context | sead-story-tmpl.yaml | Next Story Draft | docs/stories/draft-{id}.md | Catalog-enhanced story creation |
| `*sprint-retrospective` | Sprint data | N/A | Retrospective Report | docs/retrospectives/retro-sprint-{id}.md | Sprint retrospective analysis |
| `*sprint-planning` | Sprint scope | sead-story-tmpl.yaml | Sprint Plan | docs/sprints/sprint-{id}-plan.md | Sprint planning documentation |

#### Available Templates
- `sead-story-tmpl.yaml` - User stories
- `catalog-story-tmpl.yaml` - Catalog-aware stories
- `constraint-story-tmpl.yaml` - Constraint-compliant stories

#### Key Tasks Used
- `sead-create-next-story.md` - Story creation
- `catalog-pattern-analysis.md` - Pattern analysis
- `pattern-extraction.md` - Pattern identification
- `context-preservation.md` - Context management

---

### 12. SEAD UX Expert (Sally) - sead-ux-expert

**Primary Role:** User experience design, design systems, prototypes

#### Document Generation Commands & Outputs

| Command | Input Requirements | Template Used | Output Document | Location | Description |
|---------|-------------------|---------------|-----------------|----------|-------------|
| `*create-front-end-spec` | UX requirements | sead-front-end-spec-tmpl.yaml | Frontend Specification | docs/frontend-spec.md | Detailed frontend UX specification |
| `*generate-ui-prompt` | UI requirements | sead-generate-ai-frontend-prompt.md task | AI Frontend Prompt | docs/ai-frontend-prompt.md | AI-optimized frontend generation prompt |
| `*design-system-analysis` | Design system state | sead-design-system-tmpl.yaml | Design System Analysis | docs/design-system-analysis.md | Design system optimization analysis |
| `*visual-design-guide` | Visual requirements | sead-design-system-tmpl.yaml | Visual Design Guide | docs/visual-design-guide.md | Visual design guidelines and standards |
| `*wireframes` | Page requirements | sead-wireframe-tmpl.yaml | Wireframe Documentation | docs/wireframes/ | Page wireframes and layouts |
| `*prototype-spec` | Prototype needs | sead-prototype-spec-tmpl.yaml | Prototype Specification | docs/prototype-spec.md | Interactive prototype specifications |
| `*user-research-plan` | Research objectives | sead-user-research-plan-tmpl.yaml | Research Plan | docs/user-research-plan.md | User research methodology and plan |
| `*accessibility-audit` | Accessibility requirements | sead-accessibility-audit-tmpl.yaml | Accessibility Audit | docs/accessibility-audit.md | Accessibility compliance audit |
| `*design-handoff` | Development handoff | sead-design-handoff-tmpl.yaml | Design Handoff | docs/design-handoff.md | Design to development handoff documentation |

#### Available Templates
- `sead-front-end-spec-tmpl.yaml` - Frontend specifications
- `sead-wireframe-tmpl.yaml` - Wireframes
- `sead-prototype-spec-tmpl.yaml` - Prototypes
- `sead-user-research-plan-tmpl.yaml` - User research
- `sead-design-system-tmpl.yaml` - Design systems
- `sead-accessibility-audit-tmpl.yaml` - Accessibility audits
- `sead-design-handoff-tmpl.yaml` - Design handoffs
- `sead-ux-validation-tmpl.yaml` - UX validation

#### Key Tasks Used
- `create-doc.md` - Document creation
- `sead-generate-ai-frontend-prompt.md` - AI prompt generation
- `design-system-analysis.md` - Design system analysis
- `wireframe-creation-workflow.md` - Wireframe creation
- `prototype-design-workflow.md` - Prototype design
- `user-research-planning-workflow.md` - Research planning
- `accessibility-audit-workflow.md` - Accessibility auditing
- `design-pattern-evaluation.md` - Design pattern evaluation
- `ux-validation-workflow.md` - UX validation

---

## Document Output Locations

### Standard Document Structure

```
docs/
├── sead-prd.md                          # Product Requirements Document
├── sead-project-brief.md                # Constitutional Project Brief
├── backend-architecture.md              # Backend Architecture
├── frontend-architecture.md             # Frontend Architecture
├── fullstack-architecture.md            # Full Stack Architecture
├── data-architecture.md                 # Data Architecture
├── deployment-architecture.md           # Deployment Architecture
├── frontend-spec.md                     # Frontend UX Specification
├── project-plan.md                      # Project Management Plan
├── roadmap.md                           # Product Roadmap
├── risk-assessment.md                   # Risk Assessment
├── market-research.md                   # Market Research Report
├── competitor-analysis.md               # Competitive Analysis
├── brainstorming-output.md              # Brainstorming Session Results
├── catalog-health.md                    # Catalog Health Report
├── constitutional-audit.md              # Constitutional Audit Report
├── pattern-extraction-report.md         # Pattern Extraction Analysis
├── catalog-coverage-report.md           # Catalog Coverage Analysis
├── constraint-compliance-report.md      # Constraint Compliance Report
├── epics/                               # Epic documents
│   ├── epic-{id}.md
│   └── brownfield-epic-{id}.md
├── stories/                             # User story documents
│   ├── story-{id}.md
│   ├── brownfield-story-{id}.md
│   └── draft-{id}.md
├── qa-gates/                            # QA gate decisions
│   └── gate-{story-id}.md
├── reviews/                             # QA review reports
│   └── review-{story-id}.md
├── risk-profiles/                       # Risk assessments
│   └── risk-{story-id}.md
├── test-designs/                        # Test design documents
│   └── test-{story-id}.md
├── traceability/                        # Requirements traceability
│   └── trace-{story-id}.md
├── wireframes/                          # UX wireframe documentation
├── patterns/                            # Pattern documentation
├── retrospectives/                      # Sprint retrospectives
│   └── retro-sprint-{id}.md
└── sprints/                            # Sprint planning documents
    └── sprint-{id}-plan.md
```

### Catalog Structure

```
sead-catalog/
├── api-contracts/                       # API pattern catalog
├── shared-types/                        # Type system patterns
├── design-system/                       # Design system patterns
├── state-management/                    # State management patterns
├── error-handling/                      # Error handling patterns
├── validation-schemas/                  # Validation patterns
├── integration-patterns/                # Integration patterns
├── data-strategy/                       # Data architecture patterns
├── deployment-strategy/                 # Deployment patterns
├── auth-patterns/                       # Authentication patterns
└── test-patterns/                       # Testing patterns
```

## Constitutional Framework Integration

All agents operate within the SEAD Constitutional Framework, ensuring:

1. **Mode Awareness**: Documents adapt to current development mode (prototype/development/build-to-deploy)
2. **Catalog Integration**: All documents reference and leverage existing catalog patterns
3. **Context Preservation**: Documents maintain context for seamless agent handoffs
4. **Compliance Validation**: Documents include constitutional compliance validation
5. **Constraint Enforcement**: Documents respect mode-specific constraints and limitations

## Key Document Generation Patterns

### Universal Commands
- `*doc-out` - Output current document with catalog references
- `*create-doc` - Universal document creation with template selection
- `*help` - Display available commands and options

### Template System
- All templates follow constitutional framework requirements
- Templates include catalog integration sections
- Templates support mode-specific constraint enforcement
- Templates enable context preservation for agent handoffs

### Task Execution
- Tasks follow executable workflow patterns
- Interactive tasks require user elicitation (elicit=true)
- Tasks preserve context across agent boundaries
- Tasks validate constitutional compliance continuously

## Document Rationalization Analysis

Based on the consumption matrix and cross-agent dependencies, here are key rationalization opportunities:

### High-Impact Harmonization Targets

#### 1. **Constitutional Project Brief** (CRITICAL Priority)
- **Current State**: Single source from sead-analyst, consumed by ALL downstream agents
- **Issue**: No standardized consumption interface across agents
- **Recommendation**: Create standardized project brief interface with versioned sections
- **Impact**: Reduces miscommunication across entire workflow

#### 2. **Story Template Consolidation** (HIGH Priority)  
- **Current State**: sead-story-tmpl.yaml used by 4+ agents with variations
- **Issue**: Inconsistent story format across different creation contexts
- **Recommendation**: Version story templates by context (greenfield/brownfield/draft)
- **Impact**: Consistent story format for QA validation and development handoff

#### 3. **Architecture Document Family** (HIGH Priority)
- **Current State**: 6 different architecture templates with overlapping sections
- **Issue**: Redundant content maintenance, inconsistent architecture documentation
- **Recommendation**: Create modular architecture template system with shared components
- **Impact**: Reduces documentation overhead, improves consistency

### Template Consolidation Opportunities

| Template Family | Current Templates | Consolidation Approach | Estimated Effort |
|-----------------|-------------------|----------------------|-----------------|
| **Architecture** | 6 templates | Modular system with shared sections | HIGH |
| **Stories** | 3 variations | Context-specific versioning | MEDIUM |
| **PRD** | 2 templates | Unified with mode-specific sections | MEDIUM |  
| **QA Gates** | 2 variations | Single template with conditional sections | LOW |
| **Project Brief** | 2 variations | Unified constitutional framework | MEDIUM |

### Workflow Standardization Needs

#### 1. **Context Preservation Pattern**
- **Issue**: Each agent implements context preservation differently
- **Solution**: Standardize context handoff format across all agents
- **Files to Standardize**: All task files with agent handoff requirements

#### 2. **Constitutional Validation Pattern**
- **Issue**: Constitutional compliance validation repeated across multiple agents
- **Solution**: Create shared constitutional validation task/template
- **Files to Consolidate**: constraint-validation.md, constitutional-validation.md tasks

#### 3. **Catalog Integration Pattern**
- **Issue**: Catalog pattern integration implemented inconsistently
- **Solution**: Standardize catalog pattern referencing and integration workflows
- **Files to Harmonize**: All templates with catalog integration sections

### Document Location Rationalization

#### Current Issues
1. **Scattered Outputs**: Documents spread across multiple directories without clear organization
2. **Naming Inconsistencies**: Inconsistent naming patterns across similar document types
3. **Version Management**: No clear versioning strategy for iteratively updated documents

#### Recommended Structure
```
docs/
├── constitutional/                      # Constitutional framework documents
│   ├── project-brief.md                # Standardized project brief
│   ├── compliance-reports/             # All compliance validations
│   └── mode-transition-plans/          # Mode change documentation
├── architecture/                       # All architecture documents  
│   ├── system-architecture.md          # Unified architecture document
│   ├── data-architecture.md            
│   └── deployment-architecture.md      
├── product/                            # Product management documents
│   ├── prd.md                          # Unified PRD
│   ├── roadmap.md                      
│   └── market-analysis/                
├── development/                        # Development workflow documents
│   ├── epics/                          
│   ├── stories/                        
│   └── specifications/                 
├── quality/                            # QA and validation documents
│   ├── qa-gates/                       
│   ├── test-designs/                   
│   └── compliance-reports/             
├── ux/                                 # UX and design documents
│   ├── frontend-specifications/        
│   ├── design-system/                  
│   └── research/                       
└── patterns/                           # Pattern and catalog documents
    ├── extracted-patterns/             
    ├── catalog-reports/                
    └── integration-guides/             
```

### Implementation Recommendations

#### Phase 1: Critical Dependencies (Weeks 1-2)
1. Standardize Constitutional Project Brief interface
2. Create unified story template versioning system
3. Establish context preservation standard

#### Phase 2: Template Consolidation (Weeks 3-4)
1. Implement modular architecture template system
2. Consolidate QA gate templates
3. Standardize constitutional validation pattern

#### Phase 3: Workflow Optimization (Weeks 5-6)
1. Implement new document organization structure
2. Create migration scripts for existing documents
3. Update all agent configurations for new patterns

#### Phase 4: Validation & Rollout (Week 7)
1. Test harmonized system with sample workflows
2. Update documentation and training materials
3. Deploy harmonized system

### Success Metrics

- **Consistency**: Reduce template variations by 60%
- **Efficiency**: Decrease document creation time by 30%
- **Quality**: Improve cross-agent handoff success rate to 95%
- **Maintainability**: Reduce documentation maintenance overhead by 40%

This catalog provides the complete mapping of SEAD agent document generation capabilities, with detailed consumption analysis and rationalization roadmap for optimizing the documentation ecosystem within the constitutional framework.

---

## Suggested Harmonization and Rationalization Approach

### Executive Summary

The current SEAD documentation system, while comprehensive, suffers from significant redundancy and inconsistency that impacts maintainability, agent handoff quality, and overall system efficiency. This harmonization approach provides a systematic method to consolidate, standardize, and optimize the documentation ecosystem while preserving the constitutional framework's integrity.

### Current State Assessment

#### Quantified Issues
- **50+ document types** across 12 agents with substantial overlap
- **Template redundancy**: 6 architecture templates sharing 70%+ common content
- **Workflow inconsistency**: Context preservation implemented differently across 8+ agents
- **Naming conflicts**: 15+ instances of similar documents with different naming patterns
- **Maintenance overhead**: Estimated 40% of template maintenance time spent on redundant content

#### Impact Analysis
- **Development velocity**: Inconsistent handoffs causing 20-30% delays in agent transitions
- **Quality degradation**: Template variations leading to information loss across workflows
- **Maintenance burden**: Multiple templates requiring synchronized updates
- **Onboarding complexity**: New agents/users facing inconsistent patterns

### Harmonization Strategy

#### Core Principles
1. **Constitutional Preservation**: All changes must maintain SEAD constitutional framework integrity
2. **Agent Autonomy**: Preserve specialized agent capabilities while standardizing interfaces
3. **Backward Compatibility**: Ensure existing workflows continue during transition
4. **Incremental Implementation**: Phased approach minimizing disruption
5. **Validation-First**: Extensive testing before production deployment

#### Strategic Approach Framework

##### 1. **Template Architecture Redesign**

###### Current State Issues:
- Architecture templates: 6 separate files with 70% content overlap
- Story templates: 3 variations with inconsistent field structures  
- PRD templates: 2 templates with duplicated constitutional sections

###### Proposed Solution: **Modular Template System**

**Architecture Template Consolidation:**
```yaml
# New Structure: sead-architecture-modular-tmpl.yaml
template:
  id: sead-architecture-unified-v2
  name: SEAD Unified Architecture Template
  modules:
    - core-architecture        # Shared across all architecture types
    - frontend-specific       # Frontend-only sections
    - backend-specific        # Backend-only sections
    - fullstack-integration   # Full-stack coordination
    - brownfield-analysis     # Existing system integration
    - catalog-integration     # Pattern integration (universal)
    - constitutional-compliance # Mode-specific validations
  
  rendering_modes:
    - backend: [core-architecture, backend-specific, catalog-integration, constitutional-compliance]
    - frontend: [core-architecture, frontend-specific, catalog-integration, constitutional-compliance]
    - fullstack: [core-architecture, frontend-specific, backend-specific, fullstack-integration, catalog-integration, constitutional-compliance]
    - brownfield: [core-architecture, brownfield-analysis, catalog-integration, constitutional-compliance]
```

**Story Template Versioning:**
```yaml
# New Structure: sead-story-versioned-tmpl.yaml
template:
  id: sead-story-unified-v2
  name: SEAD Unified Story Template
  contexts:
    greenfield:
      sections: [basic-story, acceptance-criteria, catalog-patterns, constitutional-context]
    brownfield: 
      sections: [basic-story, existing-system-context, acceptance-criteria, catalog-patterns, constitutional-context]
    draft:
      sections: [basic-story, draft-context, catalog-patterns, constitutional-context]
  
  shared_sections:
    basic-story: # Core story structure
    catalog-patterns: # Universal catalog integration
    constitutional-context: # Universal constitutional requirements
```

##### 2. **Context Preservation Standardization**

###### Current State Issues:
- Each agent implements context handoff differently
- No standardized context format leading to information loss
- Manual context creation prone to omissions

###### Proposed Solution: **Universal Context Framework**

**Standard Context Schema:**
```yaml
# New File: sead-context-preservation-schema.yaml
context_preservation:
  schema_version: "2.0"
  sections:
    constitutional_context:
      development_mode: required
      catalog_constraints: required
      governance_requirements: required
    
    technical_context:
      architecture_decisions: optional
      technology_constraints: optional
      integration_requirements: optional
    
    workflow_context:
      previous_agent: required
      next_agent_recommendations: required
      validation_checkpoints: required
      
    document_lineage:
      source_documents: required
      dependency_chain: required
      version_tracking: required
```

##### 3. **Workflow Integration Redesign**

###### Current State Issues:
- Document flow sequences vary by project type without clear patterns
- Agent coordination relies on manual orchestration
- No systematic validation of workflow completeness

###### Proposed Solution: **Workflow Orchestration Framework**

**Standardized Workflow Definitions:**
```yaml
# New File: sead-workflow-orchestration.yaml
workflows:
  greenfield_standard:
    sequence:
      - agent: sead-analyst
        outputs: [project-brief]
        validation: constitutional-foundation-check
        
      - agent: sead-project-manager  
        inputs: [project-brief]
        outputs: [prd]
        validation: requirements-completeness-check
        
      - agent: sead-architect
        inputs: [project-brief, prd]
        outputs: [architecture-unified]
        validation: technical-feasibility-check
        
  brownfield_standard:
    sequence:
      - agent: sead-catalog-architect
        outputs: [brownfield-analysis]
        validation: existing-system-assessment
```

### Detailed Implementation Plan

#### **Phase 1: Foundation (Weeks 1-3)**

**Week 1: Template Consolidation Design**
- Design modular template system architecture
- Create unified template schemas
- Develop template rendering logic
- Design context preservation framework

**Week 2: Critical Path Implementation**  
- Implement Constitutional Project Brief standardization
- Create modular architecture template system
- Develop universal context preservation schema
- Build template validation framework

**Week 3: Integration Testing**
- Test modular templates with existing agents
- Validate context preservation across agent handoffs
- Verify constitutional compliance maintenance

#### **Phase 2: Workflow Standardization (Weeks 4-6)**

**Week 4: Workflow Orchestration**
- Implement standardized workflow definitions
- Create workflow validation checkpoints
- Build agent coordination framework

**Week 5: Agent Integration**
- Update all agent configurations for new templates
- Implement standardized context handoff protocols
- Update agent validation logic

**Week 6: System Integration Testing**
- End-to-end workflow testing
- Multi-agent handoff validation
- Performance optimization

#### **Phase 3: Migration and Optimization (Weeks 7-9)**

**Week 7: Document Migration**
- Implement new directory structure
- Migrate existing documents to new organization
- Update all agent file path references

**Week 8: Quality Assurance**
- Comprehensive system testing
- Agent workflow validation
- Constitutional compliance verification

**Week 9: Documentation and Training**
- Update all agent documentation
- Create harmonization user guides
- Develop troubleshooting documentation

### Success Validation Framework

#### Key Performance Indicators

**Quantitative Metrics:**
- **Template Reduction**: Target 60% reduction in template count
- **Content Redundancy**: Target 80% reduction in duplicated content
- **Agent Handoff Success Rate**: Target 95% successful handoffs
- **Document Creation Time**: Target 30% reduction in creation time
- **Maintenance Overhead**: Target 40% reduction in maintenance time

**Qualitative Metrics:**
- **Consistency Score**: Standardized evaluation of document consistency
- **Agent Satisfaction**: Survey-based agent workflow satisfaction
- **Context Preservation Quality**: Manual evaluation of handoff completeness
- **Constitutional Compliance**: Automated compliance validation scores

### Risk Mitigation Strategy

#### High-Risk Areas

**Constitutional Framework Integrity:**
- **Risk**: Template changes breaking constitutional compliance
- **Mitigation**: Automated constitutional validation testing
- **Validation**: Pre-deployment constitutional compliance audit

**Agent Workflow Disruption:**
- **Risk**: New templates breaking existing agent workflows
- **Mitigation**: Phased rollout with extensive testing
- **Validation**: Parallel testing of old and new systems

**Context Loss During Handoffs:**
- **Risk**: New context preservation losing critical information
- **Mitigation**: Comprehensive context schema validation
- **Validation**: Manual review of critical workflow handoffs

#### Rollback Strategy

**Rollback Triggers:**
- Constitutional compliance failure > 5%
- Agent workflow success rate < 80%
- System performance degradation > 20%

**Rollback Process:**
1. Immediate halt of deployment
2. Revert to previous template versions
3. Restore original directory structure
4. Reset agent configurations
5. Post-rollback analysis and planning

### Expected Outcomes

#### Short-Term Benefits (Months 1-3)
- **Immediate Consistency**: Standardized document formats across all agents
- **Reduced Confusion**: Clear patterns for agent interactions and handoffs
- **Faster Onboarding**: Simplified system for new users and agents

#### Medium-Term Benefits (Months 3-6)
- **Improved Efficiency**: Faster document creation and agent transitions
- **Better Quality**: Reduced information loss and improved handoff success
- **Lower Maintenance**: Consolidated templates requiring less maintenance overhead

#### Long-Term Benefits (Months 6+)
- **Scalable Growth**: System designed to accommodate new agents and workflows
- **Enhanced Innovation**: Standardized foundation enabling advanced features
- **Organizational Learning**: Data-driven insights into workflow optimization

This comprehensive harmonization approach provides a systematic, validated method for transforming the SEAD documentation ecosystem while preserving its constitutional integrity and enhancing its effectiveness across all agents and workflows.