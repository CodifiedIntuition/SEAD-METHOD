# External Design System Transformation Task

## Purpose
Transform external design systems to SEAD-compliant catalog format while preserving design intent and ensuring catalog integration compatibility.

## Inputs
- `external-assets-staging/design-system/` directory contents
- `docs/external-asset-analysis.md` - Analysis results
- `docs/integration-architecture.md` - Integration strategy
- Current `sead-catalog/design-system/` structure (if exists)

## Outputs
- Populated `sead-catalog/design-system/` with transformed patterns
- SEAD-compliant design tokens in TypeScript format
- Component patterns with documentation and constraints
- Usage examples and implementation guides

## Constitutional Compliance
Enforced by external integration constitutional rules and design-system constraints.

## Mode Behavior
- **Prototype**: Basic token conversion and component extraction
- **Development**: Comprehensive transformation with documentation and examples
- **Build-to-Deploy**: Production-ready patterns with full validation and tests

## Workflow Steps

### 1. Pre-Transformation Validation
```yaml
constitutional_check:
  - Verify external-asset-analysis.md exists and is complete
  - Confirm integration-architecture.md provides design system strategy
  - Validate staging directory structure
  - Check mode-appropriate transformation requirements
```

### 2. Design Token Transformation
```yaml
token_transformation:
  source_formats_supported:
    - JSON design tokens (Design Tokens Community Group format)
    - CSS custom properties
    - SCSS variables
    - JavaScript/TypeScript token objects
    - Figma tokens export
  
  transformation_process:
    color_tokens:
      - extract_color_palettes
      - convert_to_sead_color_schema
      - generate_semantic_color_mappings
      - create_accessibility_compliance_tokens
    
    typography_tokens:
      - extract_font_definitions
      - convert_to_sead_typography_schema
      - generate_responsive_typography_scales
      - create_semantic_text_styles
    
    spacing_tokens:
      - extract_spacing_scales
      - convert_to_sead_spacing_schema
      - generate_consistent_spacing_system
      - create_component_spacing_mappings
    
    component_tokens:
      - extract_component_specific_tokens
      - map_to_sead_component_patterns
      - generate_variant_token_systems
      - create_state_based_token_mappings

  output_format:
    target: "sead-catalog/design-system/tokens/"
    structure:
      - colors.ts
      - typography.ts
      - spacing.ts
      - shadows.ts
      - borders.ts
      - components.ts
      - index.ts
```

### 3. Component Pattern Extraction
```yaml
component_extraction:
  component_analysis:
    - identify_reusable_components
    - extract_component_apis
    - analyze_prop_interfaces
    - map_component_relationships
    - assess_composition_patterns
  
  pattern_transformation:
    atomic_components:
      - Button, Input, Label, Icon patterns
      - Transform to SEAD component schema
      - Extract variant systems
      - Document usage constraints
    
    molecular_components:
      - Form fields, Cards, Navigation items
      - Preserve composition patterns
      - Extract interaction patterns
      - Document accessibility requirements
    
    organism_components:  
      - Headers, Footers, Forms, Data tables
      - Extract layout patterns
      - Preserve responsive behaviors
      - Document integration patterns

  sead_compliance:
    - convert_to_typescript_definitions
    - add_sead_component_metadata
    - create_usage_constraint_documentation
    - generate_storybook_compatible_examples
    - validate_accessibility_compliance
```

### 4. Documentation Transformation
```yaml
documentation_enhancement:
  component_documentation:
    - extract_existing_component_docs
    - enhance_with_sead_standards
    - add_usage_examples
    - create_do_dont_guidelines
    - document_accessibility_features
  
  pattern_documentation:
    - design_principles_extraction
    - usage_pattern_documentation
    - constraint_definition
    - integration_guidance
    - migration_strategies

  sead_catalog_integration:
    - create_catalog_index_entries
    - establish_cross_references
    - document_dependencies
    - create_adoption_pathways
```

### 5. Validation and Quality Assurance
```yaml
transformation_validation:
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
  
  catalog_integration_validation:
    - verify_sead_structure_compliance
    - validate_documentation_completeness
    - check_example_functionality
    - test_constraint_enforcement
```

### 6. SEAD Catalog Integration
```yaml
catalog_population:
  structure_creation:
    target: "sead-catalog/design-system/"
    directories:
      - tokens/
      - components/
      - patterns/
      - guidelines/
      - examples/
  
  file_organization:
    tokens:
      - colors.ts (semantic color system)
      - typography.ts (type scale and fonts)
      - spacing.ts (spacing scale and layout)
      - components.ts (component-specific tokens)
    
    components:
      - [ComponentName]/
        - index.ts (main component export)
        - [ComponentName].tsx (component implementation)
        - [ComponentName].stories.tsx (usage examples)
        - [ComponentName].test.tsx (validation tests)
        - README.md (documentation and constraints)
    
    patterns:
      - composition-patterns.md
      - responsive-patterns.md
      - accessibility-patterns.md
      - interaction-patterns.md
```

## Mode-Specific Requirements

### Prototype Mode
- Basic token conversion to TypeScript
- Core component extraction without full documentation
- Minimal examples for immediate usage
- Simple validation checks

### Development Mode
- Comprehensive token transformation with semantic mappings
- Full component extraction with TypeScript definitions
- Complete documentation with usage examples
- Thorough validation and constraint documentation

### Build-to-Deploy Mode
- Production-ready token system with accessibility compliance
- Complete component library with full test coverage
- Comprehensive documentation with adoption strategies
- Strict validation with security and performance requirements

## Transformation Rules
- Convert all tokens to TypeScript for type safety
- Extract component patterns with comprehensive documentation
- Create usage constraints and examples for each pattern
- Generate test templates for validation
- Preserve design intent while ensuring SEAD compliance
- Maintain semantic meaning in token transformations

## Error Handling
- Missing source tokens: Warning with manual token creation guidance
- Invalid component structures: Error with restructuring requirements
- SEAD compliance failures: Block with specific remediation steps
- Documentation gaps: Warning with documentation enhancement needs

## Success Criteria
- All design tokens converted to SEAD TypeScript format
- Component patterns extracted with complete interfaces
- Usage documentation meeting mode requirements
- Examples demonstrating proper integration
- Validation ensuring catalog compliance
- Clear adoption pathway for development teams

## Integration Points
- Requires completed `external-asset-analysis.md`
- Requires `integration-architecture.md` from sead-architect
- Feeds into `catalog-external-integration.md`
- Supports `external-adoption-strategy.md` creation
- Integrates with existing `sead-catalog/design-system/` structure