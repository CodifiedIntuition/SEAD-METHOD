# /greenfield-catalog-bootstrap Task

When this command is used, execute the following task:

# Greenfield Catalog Bootstrap

**Agent**: sead-catalog-architect  
**Output**: Complete seeded catalog structure with meaningful patterns extracted from project documents  
**Dependencies**: docs/sead-project-brief.md, docs/sead-prd.md, docs/sead-architecture.md (constitutional validation enforced)  

## Overview

Bootstrap catalog structure for greenfield projects by extracting patterns from architectural and requirements documents rather than existing code. This task solves the critical gap where catalog architects need meaningful initial patterns before any code exists.

## Constitutional Framework Integration

This task operates under strict constitutional compliance enforced by `sead-catalog-architect-constraints.yaml`:

- **Document Requirements**: Automatically validated before execution
- **Mode-Appropriate Behavior**: Pattern extraction depth controlled by development mode  
- **Validation Gates**: Constitutional rules enforce completeness and quality
- **Escalation Procedures**: Clear paths when document requirements aren't met

## Input Requirements (Constitutionally Enforced)

### Required Documents (All Modes)
- `docs/sead-project-brief.md` - Project context and development mode
- `docs/sead-prd.md` - Functional requirements and entity models
- `docs/sead-architecture.md` - Technical patterns and system design

### Optional Documents (Mode Dependent)
- `docs/sead-front-end-spec.md` - UI components and design patterns (required in build-to-deploy)
- `docs/brainstorming/*.md` - Additional context and insights

## Pattern Extraction Strategy

### From Architecture Document
Extract technical implementation patterns:
- **API Contracts** (`sead-catalog/api-contracts/`) - Endpoint patterns, service contracts
- **Integration Patterns** (`sead-catalog/integration-patterns/`) - External service patterns
- **Data Strategy** (`sead-catalog/data-strategy/`) - Database and data flow patterns  
- **Deployment Strategy** (`sead-catalog/deployment-strategy/`) - Infrastructure patterns
- **Test Patterns** (`sead-catalog/test-patterns/`) - Testing approach templates

### From PRD Document
Extract functional and business patterns:
- **Shared Types** (`sead-catalog/shared-types/`) - Entity models and data structures
- **Validation Schemas** (`sead-catalog/validation-schemas/`) - Input validation patterns
- **Error Handling** (`sead-catalog/error-handling/`) - Error scenarios and user messages
- **Auth Patterns** (`sead-catalog/auth-patterns/`) - Authentication and authorization

### From Frontend Specification (if available)
Extract UI and interaction patterns:
- **Design System** (`sead-catalog/design-system/`) - Component patterns and design tokens
- **State Management** (`sead-catalog/state-management/`) - State patterns and data flow

## Mode-Specific Execution

### 🧪 **Prototype Mode**
- **Extraction Depth**: Basic pattern seeding
- **Required Patterns**: API contracts, shared types, design system basics
- **Quality Level**: Minimal documentation, rapid setup
- **Validation**: Basic structure compliance

### ⚙️ **Development Mode**  
- **Extraction Depth**: Comprehensive pattern extraction
- **Required Patterns**: All 11 catalog domains with meaningful content
- **Quality Level**: Full documentation with examples
- **Validation**: Pattern quality and consistency verification

### 🏭 **Build-to-Deploy Mode**
- **Extraction Depth**: Production-ready pattern validation
- **Required Patterns**: Complete catalog with all domains populated
- **Quality Level**: Production documentation with governance compliance
- **Validation**: Strict catalog-architecture alignment verification

## Execution Workflow

### Phase 1: Constitutional Document Validation
*Automatically enforced by constitutional rules before task execution*
1. Verify required documents exist and are readable
2. Validate document consistency and cross-references
3. Confirm mode-appropriate document completeness
4. Check development mode constraints

### Phase 2: Document Analysis and Pattern Identification
1. **Project Brief Analysis**
   - Extract development mode and constraints
   - Identify project scope and technical boundaries
   - Determine catalog population priorities

2. **PRD Analysis**
   - Extract entity models and relationships
   - Identify functional requirements patterns
   - Map user interactions to catalog domains
   - Extract validation and error handling requirements

3. **Architecture Analysis**
   - Extract technical implementation patterns  
   - Identify API design and service contracts
   - Map data flow and state management needs
   - Extract infrastructure and deployment patterns

4. **Frontend Specification Analysis** (if available)
   - Extract component hierarchy and design patterns
   - Identify design tokens and styling approaches
   - Map user interface state management patterns

### Phase 3: Pattern Extraction and Catalog Population

For each of the 11 catalog domains, extract relevant patterns:

1. **api-contracts/**: Service endpoints, request/response schemas
2. **shared-types/**: Data models, entity definitions, common interfaces  
3. **design-system/**: UI components, design tokens, layout patterns
4. **state-management/**: Data flow patterns, state structure templates
5. **error-handling/**: Error types, user messages, recovery patterns
6. **validation-schemas/**: Input validation rules, data constraints
7. **test-patterns/**: Testing approaches, fixture templates
8. **auth-patterns/**: Authentication flows, authorization patterns
9. **integration-patterns/**: External service integration templates
10. **data-strategy/**: Database patterns, data migration approaches
11. **deployment-strategy/**: Infrastructure configuration patterns

### Phase 4: Constitutional Validation and Quality Assurance
*Automatically enforced by validation gates*
1. Verify pattern extraction completeness for current mode
2. Validate catalog-architecture alignment
3. Confirm pattern quality and documentation standards
4. Generate catalog bootstrap completion report

### Phase 5: Handoff Preparation
1. Document pattern extraction decisions and rationale
2. Create catalog usage guidelines for development team
3. Establish pattern evolution and maintenance procedures
4. Prepare context preservation data for agent handoffs

## Output Artifacts

### Primary Outputs
1. **Seeded Catalog Structure**: All 11 domains populated with extracted patterns
2. **Pattern Extraction Report**: Detailed documentation of what was extracted from where
3. **Catalog Bootstrap Completion**: Constitutional compliance verification

### Supporting Documentation
4. **Architecture Alignment Matrix**: Validation that catalog supports planned system
5. **Pattern Usage Guidelines**: Team onboarding documentation
6. **Evolution Strategy**: Plan for catalog growth during development
7. **Agent Handoff Context**: Preserved decision rationale for future agents

## Quality Gates and Success Criteria

### Constitutional Compliance Verification
- ✅ All required documents read and analyzed
- ✅ Mode-appropriate pattern extraction completed
- ✅ Catalog structure meets constitutional standards
- ✅ Pattern quality validation passed

### Technical Validation
- ✅ All 11 catalog domains populated with meaningful patterns
- ✅ Extracted patterns support planned architecture
- ✅ Pattern documentation meets mode requirements
- ✅ Catalog enables constraint enforcement from day one

### Team Enablement
- ✅ Development team can immediately use catalog patterns
- ✅ Catalog provides clear constraints and guidance
- ✅ Pattern evolution strategy established
- ✅ Maintenance procedures documented

## Anti-Patterns to Avoid

- **Empty Template Creation**: Don't just create directory structure without patterns
- **Document Ignoring**: Never bypass constitutional document requirements
- **Pattern Overextraction**: Don't create patterns without clear architectural backing
- **Mode Constraint Violation**: Always respect development mode constraints
- **Context Loss**: Always document extraction decisions for future reference

## Integration with SEAD Workflow

This task enables the proper greenfield workflow:

```
1. sead-product-owner → Creates sead-project-brief.md + sead-prd.md
2. sead-architect → Creates sead-architecture.md
3. sead-catalog-architect → Executes this task → Seeded catalog with real patterns
4. All subsequent agents → Use meaningful patterns from day one
```

## Error Handling and Escalation

Constitutional rules automatically handle common error scenarios:

- **Missing Documents**: Clear guidance to create required documents first
- **Insufficient Patterns**: Warnings about limited extraction capabilities
- **Architecture Conflicts**: Escalation to sead-architect for resolution
- **Mode Violations**: Blocking with clear remediation guidance

---

**Note**: This task represents a breakthrough in greenfield development - ensuring catalog-driven development begins with meaningful patterns derived from architectural planning rather than empty templates that provide no guidance or constraints.