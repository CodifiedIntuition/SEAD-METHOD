# /external-api-contract-transformation Task

When this command is used, execute the following task:

# External API Contract Transformation Task

## Purpose
Transform external API specifications to SEAD catalog format, ensuring consistent contract definitions, type safety, and integration patterns.

## Inputs
- `external-assets-staging/api-specifications/` directory contents
- `docs/external-asset-analysis.md` - Analysis results
- `docs/integration-architecture.md` - Integration strategy
- Current `sead-catalog/api-contracts/` structure (if exists)

## Outputs
- Populated `sead-catalog/api-contracts/` with transformed specifications
- TypeScript type definitions for all API contracts
- Integration patterns and client generation templates
- Documentation and usage examples

## Constitutional Compliance
Enforced by external integration constitutional rules and api-contracts constraints.

## Mode Behavior
- **Prototype**: Basic schema conversion and endpoint extraction
- **Development**: Comprehensive transformation with type safety and documentation
- **Build-to-Deploy**: Production-ready contracts with full validation and security

## Workflow Steps

### 1. Pre-Transformation Validation
```yaml
constitutional_check:
  - Verify external-asset-analysis.md exists and is complete
  - Confirm integration-architecture.md provides API integration strategy
  - Validate API specification staging structure
  - Check mode-appropriate transformation requirements
```

### 2. API Specification Analysis
```yaml
specification_analysis:
  supported_formats:
    - OpenAPI 3.0/3.1 (YAML/JSON)
    - Swagger 2.0
    - GraphQL SDL/Introspection
    - JSON Schema definitions
    - Postman Collections
    - Insomnia exports
  
  extraction_process:
    endpoint_mapping:
      - extract_all_endpoints
      - categorize_by_resource_type
      - identify_crud_patterns
      - map_authentication_requirements
    
    schema_extraction:
      - extract_request_schemas
      - extract_response_schemas
      - identify_shared_data_models
      - map_error_response_patterns
    
    metadata_capture:
      - api_versioning_strategy
      - authentication_mechanisms
      - rate_limiting_information
      - deprecation_notices
      - documentation_links
```

### 3. Schema Transformation
```yaml
schema_transformation:
  type_generation:
    request_types:
      - convert_schemas_to_typescript
      - generate_interface_definitions  
      - create_validation_schemas
      - add_runtime_type_guards
    
    response_types:
      - extract_response_models
      - generate_union_types_for_variants
      - create_error_type_definitions
      - add_pagination_type_patterns
    
    shared_types:
      - identify_reusable_data_models
      - extract_common_enums
      - create_shared_interface_hierarchy
      - generate_utility_types

  sead_compliance:
    - convert_to_sead_naming_conventions
    - add_sead_metadata_annotations
    - create_constraint_validations
    - generate_usage_documentation
```

### 4. Contract Definition Creation
```yaml
contract_creation:
  endpoint_contracts:
    structure: "sead-catalog/api-contracts/endpoints/"
    format:
      - [ServiceName]/
        - [ResourceName]/
          - create.contract.ts
          - read.contract.ts  
          - update.contract.ts
          - delete.contract.ts
          - list.contract.ts
  
  contract_content:
    - endpoint_url_template
    - http_method
    - request_type_definition
    - response_type_definition
    - error_handling_specification
    - authentication_requirements
    - validation_rules
    - usage_examples

  integration_patterns:
    - client_generation_templates
    - error_handling_patterns
    - retry_logic_specifications
    - caching_strategy_definitions
    - rate_limiting_compliance
```

### 5. Shared Types Integration
```yaml
shared_types_integration:
  type_organization:
    target: "sead-catalog/shared-types/"
    structure:
      - api-types/
        - [ServiceName]/
          - request-types.ts
          - response-types.ts
          - shared-models.ts
          - error-types.ts
  
  type_relationships:
    - establish_type_hierarchies
    - create_composition_patterns
    - define_extension_interfaces
    - document_type_dependencies
  
  validation_integration:
    - create_runtime_validators
    - integrate_with_form_schemas
    - generate_mock_data_factories
    - establish_test_data_patterns
```

### 6. Documentation and Examples
```yaml
documentation_creation:
  api_documentation:
    - service_overview_documentation
    - endpoint_usage_examples
    - authentication_setup_guides
    - error_handling_documentation
    - integration_best_practices
  
  code_examples:
    - client_usage_examples
    - error_handling_examples
    - authentication_flow_examples
    - data_transformation_examples
    - testing_pattern_examples

  sead_integration_guides:
    - catalog_adoption_strategies
    - migration_from_existing_clients
    - constraint_compliance_examples
    - validation_integration_guides
```

### 7. Validation and Quality Assurance
```yaml
transformation_validation:
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
  
  integration_testing:
    - generate_mock_servers
    - create_integration_test_suites
    - validate_client_generation
    - test_error_scenarios
```

## Mode-Specific Requirements

### Prototype Mode
- Basic schema conversion to TypeScript
- Core endpoint extraction with minimal documentation
- Simple client patterns for immediate usage
- Basic validation checks

### Development Mode
- Comprehensive schema transformation with full type safety
- Complete endpoint documentation with examples
- Integration patterns with error handling
- Thorough validation and constraint documentation

### Build-to-Deploy Mode
- Production-ready contracts with security validation
- Complete API documentation with adoption strategies
- Comprehensive error handling and retry patterns
- Strict validation with performance requirements
- Security scanning and compliance verification

## Transformation Rules
- Convert all schemas to TypeScript for type safety
- Extract endpoint patterns with comprehensive documentation
- Create usage constraints and examples for each contract
- Generate validation schemas for runtime checking
- Preserve API semantics while ensuring SEAD compliance
- Maintain backward compatibility where possible

## Error Handling
- Invalid API specifications: Error with format conversion guidance
- Missing schema definitions: Warning with manual definition requirements
- Type conversion failures: Block with specific remediation steps
- Authentication gaps: Warning with security enhancement needs
- SEAD compliance failures: Block with compliance remediation

## Success Criteria
- All API specifications converted to SEAD TypeScript format
- Complete type definitions for requests and responses
- Integration patterns with comprehensive documentation
- Examples demonstrating proper client usage
- Validation ensuring catalog and constraint compliance
- Clear adoption pathway for development teams

## Integration Points
- Requires completed `external-asset-analysis.md`
- Requires `integration-architecture.md` from sead-architect
- Integrates with `sead-catalog/shared-types/` for type definitions
- Feeds into `catalog-external-integration.md`
- Supports `external-adoption-strategy.md` creation
- Integrates with existing `sead-catalog/api-contracts/` structure