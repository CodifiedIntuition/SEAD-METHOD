# External Asset Analysis Task

## Purpose
Analyze staged external assets for quality, compatibility, and integration planning with SEAD catalog structure.

## Inputs
- `external-assets-staging/` directory contents
- Current `sead-catalog/` structure (if exists)
- Project mode from `sead-core/core-config.yaml`

## Outputs  
- `docs/external-asset-analysis.md` - Comprehensive analysis report
- Quality assessment and compatibility matrix
- Integration planning recommendations

## Constitutional Compliance
Enforced by `before_external_integration` rules in constitutional constraints.

## Mode Behavior
- **Prototype**: Basic asset inventory and simple quality check
- **Development**: Comprehensive analysis with detailed compatibility assessment  
- **Build-to-Deploy**: Strict validation with production-readiness requirements

## Workflow Steps

### 1. Pre-Analysis Validation
```yaml
constitutional_check:
  - Verify external-assets-staging/ directory exists
  - Confirm staging area has proper structure
  - Validate mode-appropriate quality requirements
```

### 2. Asset Discovery and Inventory
```yaml
asset_inventory:
  scan_directories:
    - external-assets-staging/design-system/
    - external-assets-staging/component-library/
    - external-assets-staging/api-specifications/
    - external-assets-staging/patterns/
    - external-assets-staging/documentation/
  
  classify_assets:
    design_tokens: [".json", ".js", ".ts", ".css", ".scss"]
    ui_components: [".tsx", ".vue", ".jsx", ".js"]
    api_contracts: [".yaml", ".json", ".openapi", ".swagger"]
    shared_types: [".ts", ".d.ts"]
    patterns: [".md", ".yaml", ".json"]
    documentation: [".md", ".mdx", ".html"]
  
  metadata_extraction:
    - file_count_by_type
    - size_analysis
    - dependency_mapping
    - version_information
```

### 3. Quality Assessment
```yaml
quality_metrics:
  documentation_coverage:
    - check_readme_files
    - validate_usage_examples
    - assess_api_documentation
    - evaluate_component_stories
  
  code_quality:
    - typescript_definitions_present
    - eslint_compliance_check
    - test_coverage_analysis
    - dependency_health_check
  
  completeness_assessment:
    - missing_file_identification
    - broken_reference_detection
    - incomplete_pattern_flagging
```

### 4. SEAD Compatibility Analysis  
```yaml
sead_compatibility:
  catalog_structure_alignment:
    - map_assets_to_catalog_domains
    - identify_structure_conflicts
    - assess_transformation_complexity
  
  constraint_compatibility:
    - validate_naming_conventions
    - check_type_system_alignment
    - assess_design_token_compatibility
    - verify_api_contract_standards
  
  integration_complexity:
    - estimate_transformation_effort
    - identify_manual_intervention_needs
    - flag_architectural_conflicts
```

### 5. Integration Planning
```yaml
integration_strategy:
  transformation_requirements:
    - file_format_conversions_needed
    - structural_reorganization_tasks
    - documentation_enhancement_needs
    - test_creation_requirements
  
  catalog_impact_analysis:
    - existing_pattern_conflicts
    - catalog_domain_expansion_needs
    - merge_strategy_recommendations
  
  risk_assessment:
    - integration_complexity_rating
    - potential_breaking_changes
    - rollback_strategy_requirements
    - team_training_needs
```

### 6. Report Generation
```yaml
analysis_report:
  template: "external-asset-analysis-report-tmpl.yaml"
  sections:
    - executive_summary
    - asset_inventory_details
    - quality_assessment_results  
    - sead_compatibility_matrix
    - integration_recommendations
    - risk_mitigation_strategies
    - resource_requirements_estimate
    - next_steps_workflow
```

## Mode-Specific Requirements

### Prototype Mode
- Basic asset classification and counting
- Simple quality flags (missing docs, broken files)
- High-level integration feasibility assessment
- Minimal documentation requirements

### Development Mode  
- Comprehensive quality assessment across all dimensions
- Detailed SEAD compatibility analysis
- Integration complexity estimation with effort breakdown
- Risk assessment with mitigation strategies
- Complete documentation of findings

### Build-to-Deploy Mode
- Production-readiness validation for all assets
- Strict SEAD compliance verification
- Security assessment of external assets
- Complete traceability documentation
- Formal approval workflow integration

## Validation Gates
- Asset staging structure compliance
- Mode-appropriate quality thresholds met
- SEAD compatibility minimum standards achieved
- Integration architecture feasibility confirmed

## Error Handling
- Missing staging directory: Block with guidance to create structure
- Insufficient quality: Warning with improvement recommendations
- SEAD incompatibility: Error with transformation requirements
- Mode constraint violations: Block with mode-specific guidance

## Success Criteria
- Complete asset inventory with classification
- Quality assessment meeting mode requirements  
- SEAD compatibility analysis with actionable insights
- Integration strategy with clear next steps
- Risk assessment with mitigation plans
- Comprehensive documentation for handoff

## Integration Points
- Feeds into `external-design-system-transformation.md` 
- Feeds into `external-api-contract-transformation.md`
- Feeds into `catalog-external-integration.md`
- Requires `integration-architecture-tmpl.yaml` creation by sead-architect