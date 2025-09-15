# /external-asset-validation Task

When this command is used, execute the following task:

# External Asset Validation Task

## Purpose
Validate completed external asset integration for SEAD compliance, catalog integrity, pattern quality, and production readiness.

## Inputs
- Integrated `sead-catalog/` with external patterns
- `docs/external-asset-analysis.md` - Original analysis
- `docs/integration-architecture.md` - Integration strategy
- Integration decision logs and documentation

## Outputs
- `docs/external-asset-validation-report.md` - Comprehensive validation report
- Compliance certification for integrated patterns
- Quality assessment with remediation recommendations
- Production readiness evaluation

## Constitutional Compliance
Enforced by external integration constitutional rules and all catalog constraint validations.

## Mode Behavior
- **Prototype**: Basic functionality and structure validation
- **Development**: Comprehensive compliance and quality validation
- **Build-to-Deploy**: Strict production readiness and security validation

## Workflow Steps

### 1. Pre-Validation Setup
```yaml
validation_preparation:
  - Load all constitutional constraints for current mode
  - Identify integrated external patterns for validation
  - Establish validation criteria based on integration architecture
  - Prepare validation environment and tools
```

### 2. Structural Integrity Validation
```yaml
catalog_structure_validation:
  directory_structure:
    - verify_sead_catalog_structure_compliance
    - validate_domain_organization
    - check_file_naming_conventions
    - verify_cross_reference_integrity
  
  pattern_organization:
    - validate_pattern_categorization
    - verify_dependency_mappings
    - check_index_completeness
    - validate_navigation_structure
  
  integration_markers:
    - verify_external_pattern_identification
    - validate_integration_documentation
    - check_migration_pathway_completeness
    - verify_version_tracking
```

### 3. Constitutional Compliance Validation
```yaml
constitutional_compliance:
  constraint_enforcement:
    - validate_naming_convention_compliance
    - verify_type_system_consistency
    - check_design_system_token_usage
    - validate_api_contract_standards
  
  mode_specific_compliance:
    prototype_checks:
      - basic_pattern_functionality
      - minimal_documentation_presence
      - simple_usage_examples
    
    development_checks:
      - comprehensive_documentation
      - complete_usage_examples
      - constraint_validation_presence
      - integration_pattern_compliance
    
    build_to_deploy_checks:
      - production_readiness_validation
      - security_compliance_verification
      - performance_requirement_compliance
      - complete_test_coverage
  
  quality_gate_validation:
    - external_asset_quality_standards_met
    - catalog_compatibility_verified
    - integration_documentation_complete
    - all_constitutional_constraints_satisfied
```

### 4. Pattern Quality Validation
```yaml
pattern_quality_assessment:
  design_system_patterns:
    token_validation:
      - verify_token_consistency
      - validate_semantic_mappings
      - check_accessibility_compliance
      - test_cross_platform_compatibility
    
    component_validation:
      - verify_typescript_definitions
      - validate_prop_interfaces
      - check_composition_compatibility
      - test_responsive_behaviors
      - verify_accessibility_compliance
  
  api_contract_patterns:
    schema_validation:
      - verify_typescript_compilation
      - validate_type_completeness
      - check_schema_consistency
      - test_validation_rules
    
    contract_validation:
      - verify_endpoint_completeness
      - validate_request_response_matching
      - check_error_handling_coverage
      - test_authentication_integration
  
  shared_type_patterns:
    - verify_type_hierarchy_consistency
    - validate_interface_completeness
    - check_export_path_correctness
    - test_type_composition_patterns
```

### 5. Integration Validation
```yaml
integration_testing:
  catalog_integration:
    - test_pattern_discoverability
    - verify_cross_domain_references
    - validate_dependency_resolution
    - check_catalog_navigation_completeness
  
  usage_validation:
    - test_pattern_instantiation
    - verify_constraint_enforcement
    - validate_example_functionality
    - check_documentation_accuracy
  
  migration_validation:
    - test_adoption_pathways
    - verify_migration_scripts
    - validate_backward_compatibility
    - check_breaking_change_documentation
```

### 6. Security and Compliance Validation
```yaml
security_validation:
  external_asset_security:
    - scan_for_security_vulnerabilities
    - validate_dependency_security
    - check_for_malicious_code_patterns
    - verify_data_privacy_compliance
  
  integration_security:
    - validate_api_security_patterns
    - verify_authentication_implementations
    - check_authorization_patterns
    - validate_data_validation_schemas
  
  compliance_verification:
    - verify_licensing_compatibility
    - check_third_party_compliance
    - validate_open_source_requirements
    - verify_attribution_completeness
```

### 7. Performance and Production Readiness
```yaml
production_readiness:
  performance_validation:
    - assess_bundle_size_impact
    - validate_runtime_performance
    - check_memory_usage_patterns
    - verify_caching_strategies
  
  scalability_assessment:
    - validate_pattern_scalability
    - check_integration_performance
    - assess_catalog_growth_impact
    - verify_maintenance_requirements
  
  operational_readiness:
    - validate_deployment_compatibility
    - check_monitoring_integration
    - verify_logging_patterns
    - assess_debugging_capabilities
```

### 8. Validation Reporting
```yaml
validation_reporting:
  compliance_summary:
    - constitutional_compliance_status
    - quality_gate_results
    - security_validation_results
    - production_readiness_assessment
  
  remediation_recommendations:
    - identified_issues_with_priorities
    - specific_remediation_steps
    - timeline_estimates_for_fixes
    - resource_requirements
  
  certification_status:
    - pattern_certification_levels
    - approved_usage_contexts
    - constraint_enforcement_status
    - maintenance_requirements
```

## Mode-Specific Requirements

### Prototype Mode
- Basic functionality testing of integrated patterns
- Simple compliance checks for structural requirements
- Minimal security validation for development use
- Basic performance assessment

### Development Mode
- Comprehensive compliance validation across all constraints
- Complete quality assessment with detailed recommendations
- Thorough integration testing with usage validation
- Security scanning with remediation guidance

### Build-to-Deploy Mode
- Strict production readiness validation with zero tolerance
- Complete security and compliance verification
- Comprehensive performance and scalability assessment
- Full operational readiness evaluation with monitoring

## Validation Criteria
- All constitutional constraints satisfied for current mode
- Pattern quality meets or exceeds SEAD standards
- Integration maintains catalog structural integrity
- Security validation passes all required checks
- Documentation completeness meets mode requirements
- Performance impact within acceptable thresholds

## Error Handling
- Constitutional violations: Block with specific remediation steps
- Quality issues: Warning or error based on severity and mode
- Security vulnerabilities: Block with security remediation requirements
- Performance issues: Warning with optimization recommendations
- Integration failures: Block with integration fix requirements

## Success Criteria
- All validation checks pass for current development mode
- External patterns meet SEAD quality and compliance standards
- Integration maintains catalog integrity and navigation
- Security validation confirms safe integration
- Performance impact acceptable for production use
- Complete documentation enables team adoption

## Remediation Process
- Identify all validation failures and their severity
- Provide specific remediation steps for each issue
- Prioritize fixes based on mode requirements and impact
- Establish timeline for remediation completion
- Re-validate after remediation to ensure compliance

## Integration Points
- Requires completed `catalog-external-integration.md`
- Uses all constitutional constraints and quality standards
- Feeds into `external-adoption-strategy.md` for deployment planning
- Provides foundation for ongoing catalog maintenance
- Establishes baseline for future external asset integrations