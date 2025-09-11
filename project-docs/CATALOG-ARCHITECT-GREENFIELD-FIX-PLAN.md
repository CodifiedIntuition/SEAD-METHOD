# Catalog Architect Greenfield Fix Plan - YAML Structure Integration

## Current YAML-Based Structure Analysis

The SEAD Method already has a robust constitutional rules framework that we can leverage:

### ✅ **Existing Framework Components:**
1. **Constitutional Rules**: `/sead-core/constitutional-rules/sead-catalog-architect-constraints.yaml`
2. **Core Configuration**: `/sead-core/core-config.yaml` 
3. **Agent Loading System**: `devLoadAlwaysFiles` and `mandatory_catalog_reads`
4. **Mode-Based Constraints**: Already defined per development mode
5. **Validation Gates**: Structured validation system

## 🔧 **Revised Solution Using YAML Structure**

### **1. Enhance Constitutional Rules (sead-catalog-architect-constraints.yaml)**

Add new section for greenfield operations:

```yaml
# ADD TO EXISTING FILE: sead-core/constitutional-rules/sead-catalog-architect-constraints.yaml

# Before ANY greenfield bootstrap work
before_greenfield_bootstrap:
  triggers:
    - "greenfield catalog creation"
    - "initial pattern seeding"  
    - "catalog structure bootstrap"
    - "pattern capture preparation"
  required_files:
    - "docs/sead-project-brief.md"    # Project context and mode
    - "docs/sead-prd.md"             # Requirements and functional patterns
    - "docs/sead-architecture.md"    # Technical patterns and system design
    - "sead-catalog-template/README.md"
  optional_files:
    - "docs/sead-front-end-spec.md"  # UI patterns if available
    - "docs/brainstorming/*.md"      # Additional context
  validation_actions:
    - "validate_project_documents_exist"
    - "extract_planned_patterns_from_architecture" 
    - "identify_requirements_patterns_from_prd"
    - "assess_catalog_seeding_opportunities"
    - "validate_development_mode_constraints"
  failure_behaviors:
    - trigger: "missing_project_brief"
      action: "error_with_guidance"
      message: "Greenfield catalog bootstrap requires project brief. Create with sead-product-owner first."
    - trigger: "missing_prd"
      action: "error_with_guidance" 
      message: "Greenfield catalog bootstrap requires PRD. Create with sead-product-owner first."
    - trigger: "missing_architecture"
      action: "error_with_guidance"
      message: "Greenfield catalog bootstrap requires architecture. Create with sead-architect first."
```

### **2. Enhance Mode-Based Constraints**

Update existing mode constraints to include greenfield behavior:

```yaml
# UPDATE EXISTING SECTIONS in sead-catalog-architect-constraints.yaml

mode_based_constraints:
  prototype:
    greenfield_requirements:
      - "basic_pattern_seeding_from_documents"
      - "template_structure_initialization"
    required_document_reads:
      - "docs/sead-project-brief.md"
    optional_document_reads: 
      - "docs/sead-prd.md"
      - "docs/sead-architecture.md"
    catalog_seeding_level: "minimal"
    
  development:
    greenfield_requirements:
      - "comprehensive_pattern_extraction_from_documents"
      - "structured_catalog_domain_seeding"
      - "pattern_validation_preparation"
    required_document_reads:
      - "docs/sead-project-brief.md"
      - "docs/sead-prd.md"
      - "docs/sead-architecture.md"
    catalog_seeding_level: "comprehensive"
    
  build-to-deploy:
    greenfield_requirements:
      - "complete_pattern_extraction_validation"
      - "full_catalog_compliance_preparation"
      - "production_ready_pattern_seeding"
    required_document_reads:
      - "docs/sead-project-brief.md"
      - "docs/sead-prd.md" 
      - "docs/sead-architecture.md"
      - "docs/sead-front-end-spec.md"
    catalog_seeding_level: "production_ready"
```

### **3. Add Greenfield Workflow Validation Gates**

```yaml
# ADD TO EXISTING anti_drift_enforcement section

greenfield_catalog_seeding:
  validation_gates:
    - name: "document_availability_check"
      description: "Ensure required project documents exist for pattern extraction"
      action: "validate_required_documents_readable"
      blocking_in_modes: ["development", "build-to-deploy"]
      
    - name: "pattern_extraction_completeness"  
      description: "Ensure all discoverable patterns extracted from documents"
      action: "verify_pattern_extraction_from_project_documents"
      blocking_in_modes: ["build-to-deploy"]
      
    - name: "catalog_architecture_alignment"
      description: "Ensure seeded catalog supports planned architecture"
      action: "validate_catalog_architecture_compatibility"
      blocking_in_modes: ["development", "build-to-deploy"]
```

### **4. Update Agent Behavioral Rules**

```yaml
# UPDATE EXISTING behavioral_constraints section

behavioral_constraints:
  greenfield_workflow:
    required_pre_actions:
      - "scan_for_project_documents"
      - "validate_document_completeness_for_mode"
      - "extract_patterns_from_available_documents"
    
    document_reading_order:
      - "docs/sead-project-brief.md"      # First: context and mode
      - "docs/sead-prd.md"               # Second: functional patterns
      - "docs/sead-architecture.md"      # Third: technical patterns
      - "docs/sead-front-end-spec.md"    # Fourth: UI patterns (if exists)
    
    pattern_extraction_priorities:
      prototype_mode:
        - "basic_api_endpoint_patterns"
        - "core_data_type_patterns"
        - "essential_component_patterns"
      development_mode:
        - "comprehensive_api_contract_patterns"
        - "complete_shared_type_patterns"
        - "design_system_component_patterns"
        - "state_management_patterns"
        - "error_handling_patterns"
      build_to_deploy_mode:
        - "production_ready_all_patterns"
        - "validation_schema_patterns"
        - "test_pattern_templates"
        - "deployment_configuration_patterns"
```

### **5. Create Task Templates Using YAML Structure**

**A. Create `/sead-core/tasks/greenfield-catalog-bootstrap.md`:**

```markdown
# Greenfield Catalog Bootstrap

**Constitutional Requirements**: Enforced by sead-catalog-architect-constraints.yaml
**Mode Awareness**: Pattern extraction level determined by development mode
**Document Dependencies**: Automatically validated by constitutional rules

## Task Overview

Bootstrap catalog structure for greenfield projects by extracting patterns from project documents rather than existing code. This task bridges the gap between architectural planning and catalog creation.

## Constitutional Workflow

The constitutional rules system automatically enforces:
1. **Document Availability Validation**: Ensures required docs exist
2. **Mode-Appropriate Extraction**: Adjusts depth based on development mode  
3. **Pattern Quality Gates**: Validates extracted patterns meet standards
4. **Architecture Alignment**: Ensures catalog supports planned system design

## Execution Flow

### Phase 1: Constitutional Document Reading
*Automatically enforced by constitutional rules*
- ✅ Load `docs/sead-project-brief.md` for context and mode
- ✅ Load `docs/sead-prd.md` for functional requirements and entities
- ✅ Load `docs/sead-architecture.md` for technical patterns and design
- ✅ Load `docs/sead-front-end-spec.md` if available for UI patterns

### Phase 2: Pattern Extraction by Domain
*Pattern depth controlled by mode constraints*

**From Architecture Document:**
- Extract API endpoint patterns → `sead-catalog/api-contracts/`
- Extract data model patterns → `sead-catalog/shared-types/`
- Extract integration patterns → `sead-catalog/integration-patterns/`
- Extract deployment patterns → `sead-catalog/deployment-strategy/`

**From PRD Document:**
- Extract entity models → `sead-catalog/shared-types/`
- Extract validation requirements → `sead-catalog/validation-schemas/`
- Extract user interaction patterns → `sead-catalog/design-system/`
- Extract error scenarios → `sead-catalog/error-handling/`

**From Frontend Spec (if available):**
- Extract component patterns → `sead-catalog/design-system/`
- Extract state patterns → `sead-catalog/state-management/`

### Phase 3: Constitutional Validation
*Automatically enforced by validation gates*
- ✅ Verify pattern extraction completeness for mode
- ✅ Validate catalog-architecture alignment
- ✅ Confirm pattern quality standards met
- ✅ Generate catalog bootstrap report

## Mode-Specific Behavior

**🧪 Prototype Mode:**
- Minimal pattern extraction for rapid setup
- Focus on core API and type patterns
- Basic template structure

**⚙️ Development Mode:**  
- Comprehensive pattern extraction
- Full domain coverage
- Pattern relationship documentation

**🏭 Build-to-Deploy Mode:**
- Production-ready pattern extraction
- Complete validation coverage
- Full compliance verification

## Output Artifacts

1. **Seeded Catalog Structure**: All 11 domains with initial patterns
2. **Pattern Extraction Report**: Documentation of what was extracted from where
3. **Architecture Alignment Validation**: Confirmation catalog supports planned system
4. **Bootstrap Completion Status**: Constitutional compliance verification
```

### **6. Update Core Configuration**

Add to `/sead-core/core-config.yaml`:

```yaml
# ADD TO EXISTING catalog section

catalog:
  # ... existing configuration ...
  
  # Greenfield catalog bootstrap configuration
  greenfield_bootstrap:
    enabled: true
    document_sources:
      - "docs/sead-project-brief.md"
      - "docs/sead-prd.md" 
      - "docs/sead-architecture.md"
      - "docs/sead-front-end-spec.md"
    
    pattern_extraction:
      api_contracts_from: ["architecture", "prd"]
      shared_types_from: ["architecture", "prd", "frontend_spec"]
      design_system_from: ["prd", "frontend_spec"]
      state_management_from: ["architecture", "frontend_spec"]
      error_handling_from: ["prd", "architecture"]
      validation_schemas_from: ["prd"]
      test_patterns_from: ["architecture"]
      auth_patterns_from: ["architecture", "prd"]
      integration_patterns_from: ["architecture"]
      data_strategy_from: ["architecture", "prd"]
      deployment_strategy_from: ["architecture"]
    
    mode_behavior:
      prototype:
        extraction_depth: "basic"
        required_domains: ["api-contracts", "shared-types", "design-system"]
      development:
        extraction_depth: "comprehensive" 
        required_domains: "all"
      build_to_deploy:
        extraction_depth: "production_ready"
        required_domains: "all"
        validation_required: true
```

## 🎯 **Implementation Benefits**

### **Leverages Existing Architecture:**
1. **Constitutional Rules**: Uses existing validation framework
2. **Mode Awareness**: Integrates with existing mode system
3. **Document Management**: Uses existing file reading patterns
4. **Validation Gates**: Uses existing gate system
5. **Agent Behavior**: Uses existing behavioral constraints

### **Maintains Consistency:**
1. **YAML Configuration**: Follows established patterns
2. **Validation Logic**: Uses existing validation mechanisms  
3. **Error Handling**: Uses existing error handling patterns
4. **Context Preservation**: Uses existing handoff patterns

### **Enables Proper Workflow:**
```
1. sead-product-owner → sead-project-brief.md + sead-prd.md
2. sead-architect → sead-architecture.md  
3. sead-catalog-architect → Reads all docs → Seeded catalog with meaningful patterns
4. All agents → Use real patterns from day one
```

## 🔄 **Next Steps**

### **Phase 1 (Immediate):**
1. Update `sead-catalog-architect-constraints.yaml` with greenfield rules
2. Create `greenfield-catalog-bootstrap.md` task
3. Test with sample project documents

### **Phase 2 (Integration):**
4. Update `core-config.yaml` with bootstrap configuration
5. Add validation logic for document reading
6. Create pattern extraction templates

### **Phase 3 (Enhancement):**
7. Add comprehensive error handling
8. Create bootstrap reporting templates  
9. Add catalog-architecture alignment validation

This approach maintains the existing YAML-based constitutional framework while solving the greenfield catalog seeding gap through structured, mode-aware document analysis rather than hardcoded file paths.