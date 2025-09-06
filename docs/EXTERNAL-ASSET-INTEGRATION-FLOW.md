# External Asset Integration Flow for SEAD Method

## Overview

This document outlines the workflow for importing external assets (design systems, component libraries, API specifications, etc.) created outside the SEAD Method into a catalog-compliant structure.

## Common External Asset Scenarios

### 1. **Complete Design System** 
- Created in web chat, Figma, or other design tools
- Includes components, tokens, typography, color palettes
- May have existing code implementations

### 2. **Component Libraries**
- React/Vue/Angular components from external sources
- Storybook exports or component documentation
- Third-party UI library adaptations

### 3. **API Specifications**
- OpenAPI/Swagger files from external APIs
- GraphQL schemas from other services
- Database schemas or data models

### 4. **Pattern Collections**
- Authentication flows from external providers
- Integration patterns for third-party services
- Testing strategies or validation schemas

## 🔄 **External Asset Integration Workflow**

### **Phase 1: Asset Preparation and Staging**

#### **1.1 Staging Area Setup**
```bash
# Create staging area for external assets
mkdir -p external-assets-staging/
├── design-system/          # Design system files
├── component-library/      # Code components  
├── api-specifications/     # API docs/schemas
├── patterns/              # Other pattern collections
└── documentation/         # External documentation
```

#### **1.2 Asset Organization by Domain**
Organize external assets by target catalog domain:

| External Asset Type | Target Catalog Domain | Staging Location |
|-------------------|----------------------|------------------|
| **Design Tokens** | `design-system/` | `external-assets-staging/design-system/tokens/` |
| **UI Components** | `design-system/` | `external-assets-staging/design-system/components/` |
| **API Specs** | `api-contracts/` | `external-assets-staging/api-specifications/` |
| **Type Definitions** | `shared-types/` | `external-assets-staging/shared-types/` |
| **Auth Flows** | `auth-patterns/` | `external-assets-staging/patterns/auth/` |
| **Validation Rules** | `validation-schemas/` | `external-assets-staging/patterns/validation/` |
| **Test Utilities** | `test-patterns/` | `external-assets-staging/patterns/testing/` |

### **Phase 2: Asset Analysis and Compatibility Assessment**

#### **2.1 Use sead-catalog-architect for Analysis**
```bash
sead agent activate sead-catalog-architect
*analyze-external-assets    # New command for external asset analysis
```

**Agent Actions:**
1. **Asset Inventory**: Catalog all external files and their purposes
2. **Quality Assessment**: Evaluate asset quality and completeness
3. **SEAD Compatibility**: Check alignment with catalog structure
4. **Integration Planning**: Plan transformation and integration steps

#### **2.2 Create External Asset Analysis Report**
```markdown
# External Asset Analysis Report

## Asset Inventory
- Design System: 47 components, 15 token files, 3 theme variants
- API Specifications: 12 endpoints, OpenAPI 3.0 format
- Authentication: OAuth 2.0 flows, PKCE implementation

## Quality Assessment
- Component Documentation: Complete ✅
- Design Token Structure: Needs standardization ⚠️
- API Contract Completeness: Missing error schemas ❌

## Integration Requirements
- Transform design tokens to SEAD format
- Extract reusable component patterns
- Create API contract templates
- Document integration decisions
```

### **Phase 3: Asset Transformation and SEAD Compliance**

#### **3.1 Constitutional Validation Setup**

**Create Integration Project Brief:**
```bash
sead agent activate sead-product-owner
*create-project-brief
# Focus: "External Asset Integration Project"
# Mode: Development (comprehensive integration)
# Goal: Transform external assets to catalog-compliant patterns
```

**Create Integration Architecture:**
```bash  
sead agent activate sead-architect
*create-integration-architecture    # New architectural pattern
# Input: External asset analysis + target SEAD catalog structure
# Output: Integration strategy with transformation mappings
```

#### **3.2 Domain-Specific Transformation**

**For Design Systems:**
```bash
sead agent activate sead-catalog-architect
*design-system-transform
# Input: external-assets-staging/design-system/
# Output: sead-catalog/design-system/ (SEAD-compliant)
# Process: 
#   - Convert tokens to SEAD format
#   - Extract component patterns
#   - Create usage documentation
#   - Validate against constraints
```

**For API Specifications:**
```bash
sead agent activate sead-catalog-architect  
*api-contract-transform
# Input: external-assets-staging/api-specifications/
# Output: sead-catalog/api-contracts/
# Process:
#   - Convert OpenAPI to SEAD format
#   - Extract type definitions
#   - Create integration patterns
#   - Document usage constraints
```

### **Phase 4: Catalog Integration and Validation**

#### **4.1 Catalog Merge Strategy**

**Existing Catalog + External Assets:**
```bash
sead agent activate sead-catalog-architect
*catalog-merge-external
# Input: Current sead-catalog/ + transformed external assets
# Output: Unified catalog with external patterns integrated
# Process:
#   - Conflict resolution
#   - Pattern deduplication  
#   - Cross-reference validation
#   - Documentation consolidation
```

#### **4.2 Constitutional Compliance Validation**
```bash
sead agent activate sead-qa
*validate-external-integration
# Verify: All external assets meet SEAD constraints
# Check: Catalog structure compliance
# Test: Pattern usability and documentation
# Report: Integration quality assessment
```

### **Phase 5: Team Adoption and Maintenance**

#### **5.1 Integration Documentation**
```bash
sead agent activate sead-catalog-architect
*adoption-strategy-external
# Output: Team onboarding for external patterns
# Include: Usage guidelines, migration paths, maintenance
```

#### **5.2 External Asset Evolution Strategy**
```markdown
# External Asset Maintenance Plan

## Update Synchronization
- Monitor source design system for updates
- Establish integration pipeline for external changes
- Create version mapping between external and SEAD versions

## Governance
- External asset approval process  
- Quality gates for external updates
- Documentation maintenance responsibilities
```

## 🎯 **Specific Example: Complete Design System Integration**

### **Scenario**: You have a complete design system from web chat with:
- 50+ React components
- Design tokens (colors, typography, spacing)
- Icon library
- Documentation and usage examples

### **Step-by-Step Integration:**

#### **1. Asset Staging**
```bash
external-assets-staging/design-system/
├── components/
│   ├── Button.tsx
│   ├── Modal.tsx
│   ├── Form.tsx
│   └── ...47 more components
├── tokens/
│   ├── colors.json
│   ├── typography.json
│   └── spacing.json
├── icons/
│   └── icon-library/
└── documentation/
    ├── component-stories.md
    └── usage-guidelines.md
```

#### **2. Constitutional Project Setup**
```bash
# Create integration project context
sead agent activate sead-product-owner
*create-project-brief
# Title: "Web Chat Design System Integration"
# Mode: Development  
# Scope: Transform external design system to SEAD catalog compliance

# Document integration architecture
sead agent activate sead-architect  
*create-integration-architecture
# Input: External design system analysis
# Output: Integration strategy with SEAD design-system catalog
```

#### **3. Design System Transformation**
```bash
sead agent activate sead-catalog-architect
*design-system-transform

# Process:
# 1. Analyze external component patterns
# 2. Extract reusable design patterns
# 3. Convert tokens to SEAD format:
#    colors.json → sead-catalog/design-system/tokens/colors.ts
#    typography.json → sead-catalog/design-system/tokens/typography.ts
# 4. Transform components:
#    Button.tsx → sead-catalog/design-system/components/Button/
# 5. Create pattern documentation
# 6. Generate usage constraints
```

#### **4. Catalog Integration**
```bash
# Merge with existing catalog
sead agent activate sead-catalog-architect
*catalog-merge-external

# Result: sead-catalog/design-system/
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.stories.tsx  
│   │   ├── Button.test.tsx
│   │   └── README.md
│   ├── Modal/
│   └── ...
├── tokens/
│   ├── colors.ts
│   ├── typography.ts
│   └── index.ts
└── patterns/
    ├── component-patterns.md
    └── usage-constraints.yaml
```

#### **5. Validation and Adoption**
```bash
# Constitutional compliance check
sead agent activate sead-qa
*validate-external-integration
# Verify: Design system meets SEAD constraints
# Test: Component usability in development workflow
# Document: Integration quality report

# Team adoption strategy
sead agent activate sead-catalog-architect  
*adoption-strategy-external
# Output: Migration guide from old patterns to integrated design system
# Include: Developer onboarding, usage examples, constraint guidance
```

## 🔧 **Required Enhancements to SEAD Method**

To fully support this workflow, we should add:

### **New Commands for sead-catalog-architect:**
- `*analyze-external-assets` - Analyze staged external assets
- `*design-system-transform` - Transform external design systems
- `*api-contract-transform` - Transform external API specs  
- `*catalog-merge-external` - Merge external patterns with existing catalog
- `*validate-external-integration` - Validate integration compliance

### **New Task Files:**
- `external-asset-analysis.md` - Asset analysis workflow
- `catalog-external-integration.md` - Integration strategy workflow
- `external-asset-validation.md` - Quality validation workflow

### **New Templates:**
- `external-asset-analysis-report-tmpl.yaml`
- `integration-architecture-tmpl.yaml`
- `external-adoption-strategy-tmpl.yaml`

### **Constitutional Rules Enhancement:**
Add to `sead-catalog-architect-constraints.yaml`:
```yaml
# Before external asset integration
before_external_integration:
  triggers: ["external asset integration", "asset transformation"]
  required_files: ["external-assets-staging/", "docs/integration-architecture.md"]
  validation_actions: ["validate_external_asset_quality", "check_sead_compatibility"]
```

## 🎯 **Benefits of This Approach**

### **1. Constitutional Compliance**
- External assets are validated against SEAD constraints
- Integration maintains catalog integrity
- Quality gates ensure consistent standards

### **2. Systematic Integration**
- Clear workflow prevents ad-hoc asset dumping
- Transformation ensures SEAD compatibility
- Documentation preserves integration decisions

### **3. Team Adoption**  
- Structured onboarding for external patterns
- Clear migration paths from old to new patterns
- Maintenance strategy for ongoing updates

### **4. Asset Evolution**
- Version tracking between external source and SEAD catalog
- Update synchronization strategy
- Governance for external asset changes

This workflow transforms the challenge of external asset integration into a systematic, catalog-compliant process that maintains the integrity of the SEAD Method while enabling teams to leverage high-quality external resources.