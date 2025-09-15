# SEAD-METHOD Missing Dependency Analysis

## Overview
Analysis of all SEAD agent dependency files to identify missing files that need to be created for the system to function properly.

---

## MISSING CHECKLISTS (sead-core/checklists/)

### High Priority - Multiple Agents Depend On These:

| File | Agents That Need It | Priority |
|------|-------------------|----------|
| `catalog-generation-checklist.md` | catalog-architect | High |
| `pattern-extraction-checklist.md` | catalog-architect, pattern-extraction | High |
| `brownfield-analysis-checklist.md` | catalog-architect | High |
| `catalog-health-checklist.md` | master | High |
| `mode-transition-checklist.md` | master | High |
| `constitutional-compliance-checklist.md` | master, product-owner | High |
| `agent-coordination-checklist.md` | master | Medium |
| `catalog-compliance-checklist.md` | product-owner, ux-expert | High |
| `story-quality-checklist.md` | product-owner | Medium |
| `pattern-quality-checklist.md` | pattern-extraction | High |
| `catalog-readiness-checklist.md` | pattern-extraction | High |
| `sead-ux-checklist.md` | ux-expert | Medium |
| `design-system-checklist.md` | ux-expert | Medium |
| `accessibility-checklist.md` | ux-expert | Medium |

---

## MISSING DATA FILES (sead-core/data/)

### High Priority - Multiple Agents Depend On These:

| File | Agents That Need It | Priority |
|------|-------------------|----------|
| `sead-kb.md` | master, analyst, scrum-master, qa, developer | Critical |
| `catalog-patterns-library.md` | master | High |
| `mode-constraint-matrix.md` | master, product-owner, ux-expert | Critical |
| `constitutional-governance.md` | master | High |
| `agent-coordination-framework.md` | master | High |
| `catalog-efficiency-metrics.md` | master, product-owner | High |
| `catalog-patterns.md` | analyst, architect | High |
| `constraint-matrix.md` | scrum-master, qa, architect, developer | Critical |
| `story-patterns.md` | scrum-master | Medium |
| `catalog-pattern-priorities.md` | product-owner | High |
| `product-strategy-framework.md` | product-owner | Medium |
| `catalog-validation-rules.md` | qa | High |
| `pattern-guidelines.md` | developer | High |
| `design-system-guidelines.md` | ux-expert | High |
| `accessibility-standards.md` | ux-expert | Medium |
| `ui-pattern-library.md` | ux-expert | High |
| `user-research-framework.md` | ux-expert | Medium |
| `pattern-classification-framework.md` | pattern-extraction | High |
| `pattern-quality-metrics.md` | pattern-extraction | High |
| `anti-pattern-catalog.md` | pattern-extraction | High |
| `domain-pattern-taxonomy.md` | pattern-extraction | High |
| `catalog-domains.md` | catalog-architect | High |
| `pattern-classification.md` | catalog-architect | High |
| `extraction-strategies.md` | catalog-architect | High |
| `brownfield-analysis-framework.md` | catalog-architect | High |

---

## MISSING TASK FILES (sead-core/tasks/)

### High Priority - Multiple Agents Depend On These:

| File | Agents That Need It | Priority |
|------|-------------------|----------|
| `create-doc.md` | master, analyst, architect, ux-expert, pattern-extraction, catalog-architect | Critical |
| `execute-checklist.md` | master, product-owner, scrum-master, architect, ux-expert, pattern-extraction | Critical |
| `catalog-pattern-analysis.md` | analyst, scrum-master, architect | High |
| `constraint-validation.md` | analyst, scrum-master, architect, qa, developer | Critical |
| `pattern-extraction.md` | scrum-master, architect, developer | High |
| `context-preservation.md` | scrum-master | Medium |
| `backlog-prioritization-workflow.md` | product-owner | Medium |
| `story-refinement-workflow.md` | product-owner | Medium |
| `catalog-dependency-analysis.md` | product-owner | High |
| `sprint-planning-workflow.md` | product-owner | Medium |
| `constitutional-validation-workflow.md` | product-owner | High |
| `sead-create-epic.md` | product-owner | Medium |
| `sead-create-story.md` | product-owner | Medium |
| `catalog-compliance-check.md` | qa, developer | High |
| `sead-nfr-assess.md` | qa | Medium |
| `sead-test-design.md` | qa | Medium |
| `sead-trace-requirements.md` | qa | Medium |
| `design-system-analysis.md` | ux-expert | High |
| `wireframe-creation-workflow.md` | ux-expert | Medium |
| `prototype-design-workflow.md` | ux-expert | Medium |
| `user-research-planning-workflow.md` | ux-expert | Medium |
| `accessibility-audit-workflow.md` | ux-expert | Medium |
| `design-pattern-evaluation.md` | ux-expert | Medium |
| `ux-validation-workflow.md` | ux-expert | Medium |
| `pattern-identification-workflow.md` | pattern-extraction, catalog-architect | High |
| `pattern-classification-workflow.md` | pattern-extraction | High |
| `pattern-quality-assessment.md` | pattern-extraction | High |
| `pattern-documentation-workflow.md` | pattern-extraction | High |
| `catalog-integration-preparation.md` | pattern-extraction | High |
| `brownfield-codebase-analysis.md` | catalog-architect | High |
| `greenfield-catalog-bootstrap.md` | catalog-architect | High |
| `interactive-catalog-creation.md` | catalog-architect | High |
| `catalog-taxonomy-design.md` | catalog-architect | High |
| `pattern-extraction-workflow.md` | catalog-architect | High |
| `catalog-validation-workflow.md` | catalog-architect | High |

---

## MISSING TEMPLATE FILES (sead-core/templates/)

### High Priority - Multiple Agents Depend On These:

| File | Agents That Need It | Priority |
|------|-------------------|----------|
| `sead-specification-tmpl.yaml` | analyst | High |
| `catalog-story-tmpl.yaml` | scrum-master | High |
| `constraint-story-tmpl.yaml` | scrum-master | High |
| `sead-epic-tmpl.yaml` | product-owner | Medium |
| `sead-acceptance-criteria-tmpl.yaml` | product-owner | Medium |
| `sead-feature-spec-tmpl.yaml` | product-owner | Medium |
| `catalog-compliance-report-tmpl.yaml` | qa | High |
| `sead-data-architecture-tmpl.yaml` | architect | Medium |
| `sead-deployment-architecture-tmpl.yaml` | architect | Medium |
| `sead-wireframe-tmpl.yaml` | ux-expert | Medium |
| `sead-prototype-spec-tmpl.yaml` | ux-expert | Medium |
| `sead-user-research-plan-tmpl.yaml` | ux-expert | Medium |
| `sead-design-system-tmpl.yaml` | ux-expert | High |
| `sead-accessibility-audit-tmpl.yaml` | ux-expert | Medium |
| `pattern-extraction-report-tmpl.yaml` | pattern-extraction, catalog-architect | High |
| `pattern-documentation-tmpl.yaml` | pattern-extraction | High |
| `api-pattern-tmpl.yaml` | pattern-extraction | High |
| `component-pattern-tmpl.yaml` | pattern-extraction | High |
| `state-pattern-tmpl.yaml` | pattern-extraction | High |
| `data-pattern-tmpl.yaml` | pattern-extraction | High |
| `error-pattern-tmpl.yaml` | pattern-extraction | High |
| `test-pattern-tmpl.yaml` | pattern-extraction | High |
| `auth-pattern-tmpl.yaml` | pattern-extraction | High |
| `integration-pattern-tmpl.yaml` | pattern-extraction | High |
| `deployment-pattern-tmpl.yaml` | pattern-extraction | High |
| `catalog-generation-plan-tmpl.yaml` | catalog-architect | High |
| `brownfield-analysis-report-tmpl.yaml` | catalog-architect | High |
| `catalog-taxonomy-tmpl.yaml` | catalog-architect | High |
| `api-contract-catalog-tmpl.yaml` | catalog-architect | High |
| `type-system-catalog-tmpl.yaml` | catalog-architect | High |
| `design-system-catalog-tmpl.yaml` | catalog-architect | High |
| `integration-pattern-catalog-tmpl.yaml` | catalog-architect | High |

---

## PRIORITY LEVELS EXPLAINED

### Critical (Must Create First)
Files that are referenced by 3+ agents and are core to SEAD functionality:
- `sead-kb.md` - Central knowledge base
- `create-doc.md` - Document creation workflow
- `execute-checklist.md` - Checklist execution workflow  
- `constraint-validation.md` - Core constraint enforcement
- `mode-constraint-matrix.md` - Mode behavior definitions
- `constraint-matrix.md` - Agent constraint rules

### High Priority (Create Second)
Files that are referenced by 2+ agents or are core to specific domains:
- All catalog and pattern-related files
- Core workflow and analysis files
- Essential templates for agent operations

### Medium Priority (Create Third)
Files that are referenced by single agents but are important for completeness:
- Specialized workflow files
- Domain-specific templates
- Supporting checklists

---

## RECOMMENDED CREATION ORDER

### Phase 1: Core Infrastructure (Critical)
1. `sead-kb.md` - Central knowledge base
2. `create-doc.md` - Document creation workflow
3. `execute-checklist.md` - Checklist execution workflow
4. `constraint-validation.md` - Constraint enforcement
5. `mode-constraint-matrix.md` - Mode definitions
6. `constraint-matrix.md` - Agent constraints

### Phase 2: Catalog System (High Priority)
1. Catalog-related data files
2. Pattern extraction workflows
3. Catalog architect dependencies
4. Pattern extraction agent dependencies

### Phase 3: Agent Workflows (High Priority)
1. Shared task files (catalog-pattern-analysis, etc.)
2. Core templates (story, architecture, etc.)
3. Agent-specific checklists

### Phase 4: Specialized Features (Medium Priority)
1. UX-specific workflows and templates
2. QA-specific tasks and templates
3. Product owner workflows
4. Specialized checklists

---

## AGENT RATIONALIZATION NOTES

### Overlapping Responsibilities to Address:
1. **Pattern Work**: Currently both `pattern-extraction` and `catalog-architect` do pattern work
   - **Recommendation**: `pattern-extraction` finds/extracts patterns, `catalog-architect` organizes/structures them
   
2. **Constraint Validation**: Multiple agents have constraint validation tasks
   - **Recommendation**: `qa` agent should be primary constraint validator, others just check their own work
   
3. **Catalog Updates**: Multiple agents can update catalogs
   - **Recommendation**: Only `catalog-architect` should update catalog structure, others can suggest additions

### Suggested Agent Specialization:
- **pattern-extraction**: Find, extract, and classify patterns from code
- **catalog-architect**: Organize, structure, and maintain catalog taxonomy
- **qa**: Validate constraints and compliance across all work
- **developer**: Implement using catalog patterns, suggest new patterns
- **architect**: Design systems using catalog patterns, validate architectural compliance

---

## TOTAL FILES TO CREATE: 88
- **Critical**: 6 files
- **High Priority**: 52 files  
- **Medium Priority**: 30 files