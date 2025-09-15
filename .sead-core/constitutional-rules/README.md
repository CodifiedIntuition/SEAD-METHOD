# SEAD Constitutional Rules System

This directory contains the complete 4-tier constitutional constraint system that prevents AI agent drift in SEAD-METHOD™ implementations.

## 🏛️ Constitutional Framework Overview

The SEAD constitutional system implements **balanced governance** - strict constraints where drift causes real problems, flexible guidance where creativity benefits outcomes.

### 📊 Constraint Tier System

| Tier | Risk Level | Agents | Constraint Length | Purpose |
|------|------------|--------|-------------------|---------|
| **Tier 1** | High Technical Drift | 3 agents | ~300 lines | Full constitutional constraints with strict enforcement |
| **Tier 2** | Medium Story/Product Drift | 4 agents | ~200 lines | Catalog-aware constraints with build-deploy enforcement |
| **Tier 3** | Low Process Drift | 3 agents | ~100 lines | Guidance frameworks with recommended practices |
| **Tier 4** | System Coordination | 2 agents | ~400 lines | Aggregate frameworks inheriting all other constraints |

## 🎯 Mode-Sensitive Application

Constraints are applied progressively based on SEAD development mode:

- **🧪 PROTOTYPE Mode**: Minimal constraints across all tiers (maximum creativity)
- **⚙️ DEVELOPMENT Mode**: Tier 1 enforced, Tier 2 guided, others recommended
- **🏭 BUILD-DEPLOY Mode**: Tier 1 & 2 strictly enforced, others guided

## 📁 Constraint Files

### Tier 1: Full Constitutional Constraints
- [`sead-developer-constraints.yaml`](./sead-developer-constraints.yaml) - Prevents technical implementation drift
- [`sead-architect-constraints.yaml`](./sead-architect-constraints.yaml) - Prevents architectural pattern drift  
- [`sead-qa-constraints.yaml`](./sead-qa-constraints.yaml) - Prevents testing standard drift

### Tier 2: Catalog-Aware Constraints
- [`sead-scrum-master-constraints.yaml`](./sead-scrum-master-constraints.yaml) - Prevents workflow process drift
- [`sead-catalog-architect-constraints.yaml`](./sead-catalog-architect-constraints.yaml) - Prevents catalog fragmentation drift
- [`sead-product-owner-constraints.yaml`](./sead-product-owner-constraints.yaml) - Prevents product specification drift
- [`sead-ux-expert-constraints.yaml`](./sead-ux-expert-constraints.yaml) - Prevents design system drift

### Tier 3: Guidance Frameworks
- [`sead-pattern-extraction-constraints.yaml`](./sead-pattern-extraction-constraints.yaml) - Guides consistent pattern identification
- [`sead-analyst-constraints.yaml`](./sead-analyst-constraints.yaml) - Guides catalog-aware analysis methodology
- [`sead-project-manager-constraints.yaml`](./sead-project-manager-constraints.yaml) - Guides catalog-efficient project planning

### Tier 4: Aggregate Frameworks
- [`sead-master-constraints.yaml`](./sead-master-constraints.yaml) - Inherits and coordinates all constraint tiers
- [`sead-orchestrator-constraints.yaml`](./sead-orchestrator-constraints.yaml) - Dynamic constraint coordination for multi-agent workflows

## 🔧 How Constraints Work

### 1. **Mandatory Pre-Action Reads**
Each agent must read specific catalog files before taking actions:
```yaml
mandatory_catalog_reads:
  before_code_work:
    triggers: ["code implementation", "architecture decisions"]
    required_files: ["shared-types/", "api-contracts/"]
    validation_actions: ["check_type_consistency", "validate_api_compliance"]
```

### 2. **Mode-Based Enforcement**
Constraints adapt based on current SEAD development mode:
```yaml
build_deploy_mode_constraints:
  mandatory_checks:
    - "100%_catalog_compliance_required"
  forbidden_actions:
    - "custom_solutions_without_justification"
```

### 3. **Anti-Drift Rules**
Specific prevention mechanisms for common drift patterns:
```yaml
anti_drift_enforcement:
  type_consistency:
    blocking_in_modes: ["build-to-deploy"]
    action: "validate_against_shared_types_before_creation"
```

### 4. **Escalation Procedures**
Clear escalation paths when constraints cannot be satisfied:
```yaml
escalation_rules:
  catalog_gaps:
    trigger: "required_pattern_not_in_catalog"
    action: "escalate_to_sead_architect"
    data_required: ["gap_analysis", "proposed_solution"]
```

## 🚀 Implementation

### Agent Integration
Each SEAD agent automatically loads its constraint file during activation:
```bash
# Agent reads constraints on startup
sead agent activate sead-developer  # Loads sead-developer-constraints.yaml
```

### CLI Integration
Constraints are enforced through CLI commands:
```bash
sead implement --mode=build-deploy  # Strict Tier 1 & 2 enforcement
sead implement --mode=development   # Tier 1 enforced, Tier 2 guided
sead implement --mode=prototype     # Minimal constraints
```

### Validation
Constraint compliance is validated at multiple checkpoints:
```bash
sead validate constraints           # Check current constraint compliance
sead validate --tier=1             # Validate specific tier compliance
sead validate --mode=build-deploy  # Validate mode-appropriate compliance
```

## 📖 Constraint Anatomy

Each constraint file follows a consistent structure:

### 1. **Agent Identity**
```yaml
agent_id: "sead-developer"
agent_name: "Alex"
constitutional_compliance: true
constraint_tier: "full_constitutional"
```

### 2. **Mandatory Reads**
```yaml
mandatory_catalog_reads:
  before_action_type:
    triggers: [list of trigger conditions]
    required_files: [catalog files that must be read]
    validation_actions: [checks that must be performed]
```

### 3. **Mode-Specific Constraints**
```yaml
build_deploy_mode_constraints:
  mandatory_checks: [strict requirements]
  validation_gates: [blocking validations]
  rejection_criteria: [automatic rejection conditions]
```

### 4. **Anti-Drift Enforcement**
```yaml
anti_drift_enforcement:
  drift_type:
    validation_gates: [prevention mechanisms]
    blocking_in_modes: [modes where violations block progress]
```

### 5. **Escalation Rules**
```yaml
escalation_rules:
  constraint_violation_type:
    trigger: "specific violation condition"
    action: "escalation target and process"
    data_required: [information needed for escalation]
```

## 🎯 Benefits

### Prevents Common AI Agent Problems
- **📝 Specification Drift**: Agents maintain consistency with original specs
- **🔄 Context Loss**: Catalog preserves decisions across sessions  
- **🏗️ Architecture Inconsistency**: Shared patterns prevent conflicting choices
- **🚀 Deployment Surprises**: Progressive validation catches issues early

### Maintains Development Velocity
- **🧪 Prototype Freedom**: Minimal constraints during exploration
- **⚙️ Development Balance**: Guided compliance without blocking innovation
- **🏭 Deployment Confidence**: Strict validation ensures production readiness

### Enables Collaborative AI
- **🤝 Cross-Agent Consistency**: Shared catalog creates coherent handoffs
- **📚 Knowledge Preservation**: Constitutional rules maintain institutional knowledge
- **🔍 Predictable Behavior**: Constraints make agent behavior reliable and auditable

## 🔍 Troubleshooting

### Constraint Violations
```bash
# Check what's blocking progress
sead validate constraints --verbose

# Get guidance on resolving violations  
sead help constraints [violation-type]

# Request constraint exception (with justification)
sead override constraint [constraint-id] --reason="justification"
```

### Mode Transitions
```bash
# Check mode transition readiness
sead mode check-readiness --target=build-deploy

# Get guidance for mode advancement
sead mode advance-guidance --current=development
```

### Catalog Compliance
```bash
# Check catalog compliance status
sead catalog validate --agent=[agent-name]

# Get recommendations for compliance
sead catalog compliance-guidance --tier=[1|2|3|4]
```

## 📚 Related Documentation

- [SEAD Constitution](./sead-constitution.md) - Core principles and governance framework
- [Agent Documentation](../agents/) - Individual agent specifications and capabilities
- [Catalog Documentation](../../sead-catalog/) - Available patterns and templates
- [CLI Documentation](../../cli/) - Command-line interface and usage

---

**Note**: This constitutional system represents a breakthrough in AI agent governance - solving real problems teams face with AI development while maintaining the creative potential that makes AI agents valuable.