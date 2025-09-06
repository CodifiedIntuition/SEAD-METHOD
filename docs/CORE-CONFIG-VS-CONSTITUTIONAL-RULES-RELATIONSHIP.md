# Core Config vs Constitutional Rules Relationship

## 🏗️ **Architecture Overview**

The SEAD Method uses a **two-layer governance system** with clear separation of concerns:

### **Layer 1: System Configuration** (`core-config.yaml`)
- **Purpose**: Project-wide settings, mode definitions, and technical infrastructure
- **Scope**: System-level behavior and capabilities
- **Audience**: Project configuration and infrastructure setup

### **Layer 2: Agent Governance** (`constitutional-rules/*.yaml`)  
- **Purpose**: Agent-specific behavioral constraints and validation rules
- **Scope**: Individual agent behavior within constitutional framework
- **Audience**: AI agents and their constraint enforcement

## 📋 **Detailed Relationship Analysis**

### **Core Configuration (`sead-core/core-config.yaml`)**

#### **What It Contains:**
```yaml
# PROJECT SETTINGS
project:
  name: "SEAD-METHOD"
  methodology: "Specification Enforced Agentic Agile Development"

# MODE DEFINITIONS (System-Wide)
modes:
  prototype: {validation_level: "basic", catalog_enforcement: "optional"}
  development: {validation_level: "comprehensive", catalog_enforcement: "preferred"}
  build-to-deploy: {validation_level: "strict", catalog_enforcement: "mandatory"}

# CATALOG STRUCTURE (Technical Framework)
catalog:
  required_components: ["api-contracts", "shared-types", "design-system", ...]
  pattern_validation: {require_documentation: true, require_examples: true}
  
# INFRASTRUCTURE CONSTRAINTS (Technical Rules)
constraints:
  shared-types: {required_reads_before: [...], validation_rules: [...]}
  design-system: {required_reads_before: [...], forbidden_by_mode: {...}}
  
# DATA & DEPLOYMENT STRATEGIES
data_strategy: {demo: {...}, mock: {...}, production: {...}}
deployment_strategy: {local-dev: {...}, cloud-staging: {...}, production-deploy: {...}}
```

#### **Core Config Responsibilities:**
- ✅ **Mode Definitions**: What each mode means system-wide
- ✅ **Catalog Structure**: What domains exist and their technical requirements  
- ✅ **Infrastructure Rules**: File reading requirements, validation rules
- ✅ **Technical Constraints**: Shared types, design tokens, API contracts
- ✅ **System Capabilities**: Data strategies, deployment strategies
- ✅ **Agent Loading**: Which files agents must read (`devLoadAlwaysFiles`)

### **Constitutional Rules (`constitutional-rules/sead-*-constraints.yaml`)**

#### **What They Contain:**
```yaml
# AGENT IDENTITY
agent_id: "sead-catalog-architect"
constitutional_compliance: true
constraint_tier: "catalog_aware"

# BEHAVIORAL CONSTRAINTS (Agent-Specific)
mandatory_catalog_reads:
  before_catalog_design:
    triggers: ["catalog structure design", "pattern taxonomy creation"]
    required_files: ["sead-catalog-template/README.md", "shared-types/catalog-types.ts"]
    validation_actions: ["check_catalog_template_currency", "validate_structure_standards"]

# MODE-SPECIFIC BEHAVIOR (How This Agent Behaves in Each Mode)
mode_based_constraints:
  prototype: {required_validations: [...], allowed_deviations: [...]}
  development: {required_validations: [...], forbidden_actions: [...]}
  build-to-deploy: {required_validations: [...], blocking_violations: [...]}

# DRIFT PREVENTION (Agent-Specific Rules)
anti_drift_enforcement:
  catalog_structure: {validation_gates: [...], blocking_in_modes: [...]}
  
# ESCALATION (When Agent Can't Proceed)
escalation_rules:
  pattern_complexity_overload: {trigger: "...", action: "escalate_to_sead_architect"}
```

#### **Constitutional Rules Responsibilities:**
- ✅ **Agent Behavior**: How specific agents must behave
- ✅ **Constraint Enforcement**: When and how to enforce specific rules
- ✅ **Context-Specific Validation**: Agent-specific validation requirements
- ✅ **Escalation Procedures**: What to do when constraints can't be met
- ✅ **Anti-Drift Prevention**: Agent-specific prevention mechanisms

## 🔄 **How They Work Together**

### **Agent Activation Sequence:**
```
1. Agent reads core-config.yaml        → Gets system settings and mode definitions
2. Agent reads its constraint file     → Gets agent-specific behavioral rules  
3. Agent applies mode-specific rules   → Combines system mode + agent behavior
4. Agent performs validation           → Uses both system and agent constraints
5. Agent executes with governance      → Operates under combined rule system
```

### **Example: Catalog Architect in Development Mode**

**From Core Config:**
```yaml
modes:
  development:
    catalog_enforcement: "preferred"      # System-level mode setting
    validation_level: "comprehensive"    # System-level validation requirement
    constraints: ["use_catalog_when_available", "justify_new_patterns"]
```

**From Constitutional Rules:**
```yaml
mode_based_constraints:
  development:
    required_validations: ["comprehensive_pattern_documentation", "catalog_structure_compliance"]
    forbidden_actions: ["undocumented_pattern_modifications", "inconsistent_catalog_organization"]
```

**Combined Result:**
- Agent knows it's in development mode (from core config)
- Agent must prefer catalog patterns (from core config)
- Agent must comprehensively document patterns (from constitutional rules)
- Agent cannot modify patterns without documentation (from constitutional rules)

## 🎯 **Key Insights for Greenfield Fix**

### **Where to Add Greenfield Support:**

#### **1. Core Config Enhancement** (System-Level):
```yaml
catalog:
  # ADD: Greenfield bootstrap configuration
  greenfield_bootstrap:
    enabled: true
    document_sources: ["docs/sead-project-brief.md", "docs/sead-prd.md", "docs/sead-architecture.md"]
    extraction_mapping: {api_contracts_from: ["architecture", "prd"], ...}
```

#### **2. Constitutional Rules Enhancement** (Agent-Specific):
```yaml
mandatory_catalog_reads:
  # ADD: Before greenfield bootstrap validation
  before_greenfield_bootstrap:
    triggers: ["greenfield catalog creation", "initial pattern seeding"]
    required_files: ["docs/sead-project-brief.md", "docs/sead-prd.md", "docs/sead-architecture.md"]
    validation_actions: ["validate_project_documents_exist", "extract_planned_patterns"]
```

### **Division of Responsibilities:**

| Component | Core Config | Constitutional Rules |
|-----------|-------------|-------------------|
| **Greenfield System Setup** | ✅ Define what files to read<br>✅ Configure extraction mapping<br>✅ Set bootstrap capabilities | ❌ |
| **Greenfield Agent Behavior** | ❌ | ✅ Define when to read documents<br>✅ Specify validation requirements<br>✅ Set mode-specific behavior |
| **Document Requirements** | ✅ List available document sources | ✅ Require specific documents per mode |
| **Pattern Extraction Logic** | ✅ Define extraction mappings | ✅ Validate extraction completeness |

## 🏛️ **Constitutional Framework Hierarchy**

### **4-Tier System (from README):**
```
Tier 1: Full Constitutional Constraints    (sead-catalog-architect = Tier 2)
├── Tier 2: Catalog-Aware Constraints     ← CATALOG ARCHITECT IS HERE
├── Tier 3: Guidance Frameworks
└── Tier 4: Aggregate Frameworks
```

### **Catalog Architect's Position:**
- **Tier 2**: "Catalog-Aware Constraints" 
- **Medium Risk**: "Story/Product Drift"
- **~200 lines**: Moderate constraint complexity
- **Build-Deploy Enforcement**: Strict enforcement in production mode

### **Mode Application to Catalog Architect:**
- **🧪 Prototype**: Minimal constraints, basic pattern seeding
- **⚙️ Development**: Comprehensive validation, pattern documentation required
- **🏭 Build-Deploy**: Strict catalog compliance, full governance enforcement

## 🛠️ **Implementation Strategy**

### **Phase 1: Core Config Updates**
```yaml
# ADD TO core-config.yaml
catalog:
  greenfield_bootstrap:
    enabled: true
    document_sources: [...]
    mode_behavior: {...}
```

### **Phase 2: Constitutional Rules Updates**  
```yaml
# ADD TO sead-catalog-architect-constraints.yaml
before_greenfield_bootstrap:
  triggers: [...]
  required_files: [...]
  validation_actions: [...]

mode_based_constraints:
  prototype:
    greenfield_requirements: [...]
  development:
    greenfield_requirements: [...]
  build_to_deploy:
    greenfield_requirements: [...]
```

### **Phase 3: Integration Validation**
- Agent reads core config → gets greenfield capability definition
- Agent reads constitutional rules → gets greenfield behavioral requirements
- Agent combines both → executes greenfield bootstrap with proper governance

## 📝 **Summary**

**Core Config** = "What the system can do" (capabilities, infrastructure, technical rules)
**Constitutional Rules** = "How agents must behave" (governance, validation, constraints)

**Greenfield Fix Needs Both:**
- Core config defines greenfield bootstrap **capability** and **technical mappings**  
- Constitutional rules define greenfield bootstrap **behavior** and **validation requirements**

This separation maintains the elegant architecture while solving the greenfield catalog seeding gap through proper governance channels!