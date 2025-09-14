# SEAD-METHOD™ Constitution

**Version**: 1.0  
**Ratified**: 2025-01-04  
**Last Amended**: 2025-01-04

## Core Principles

### I. Catalog-First Development
Every feature and component must first be cataloged and validated against existing patterns before implementation. Catalogs serve as the organization's source of truth for approved patterns, components, and constraints. All development activities must reference and contribute to catalog knowledge.

**Requirements:**
- New patterns must be cataloged before widespread use
- Existing catalog patterns must be reused over custom implementations  
- All code must include catalog references for traceability
- Pattern deviations require explicit justification and approval

### II. Specification-Driven Implementation  
Specifications are executable artifacts that generate implementation, not documentation that describes code. All development follows the specification → implementation plan → code generation workflow. Code serves specifications, not the reverse.

**Requirements:**
- Features begin with precise, testable specifications
- Implementation plans derive directly from specifications
- Code generation follows approved implementation plans
- Manual coding occurs only when generation is insufficient

### III. Progressive Constraint Enforcement
Development modes enforce increasing constraint strictness: Prototype (minimal) → Development (catalog-preferred) → Build-to-Deploy (strict catalog-only). This prevents deployment surprises while enabling creative exploration.

**Requirements:**
- Prototype mode: Basic validation, rapid experimentation allowed
- Development mode: Catalog patterns preferred, comprehensive validation
- Build-to-Deploy mode: Strict catalog compliance, full governance enforcement
- Mode promotions require explicit validation gates

### IV. Context Preservation Through Catalogs
Organizational knowledge, decisions, and patterns must persist across projects, teams, and time through catalog systems. No critical context should exist only in individual minds or undocumented tribal knowledge.

**Requirements:**
- All architectural decisions documented in catalog
- Pattern rationale and constraints explicitly captured
- Cross-project knowledge sharing through catalog references
- Agent handoffs preserve context through catalog citations

### V. Agent-Orchestrated Development
Multi-agent systems provide specialized expertise while maintaining consistency through shared catalog awareness. Each agent operates within constitutional constraints while contributing specialized domain knowledge.

**Requirements:**
- All agents must validate catalog compliance
- Agent decisions must reference constitutional principles
- Cross-agent handoffs preserve context and constraints
- Agent outputs must be traceable to constitutional requirements

### VI. Three-Tier Architectural Alignment
Data strategies, deployment strategies, and development modes must align consistently across prototype, development, and production environments. This ensures predictable promotion paths and prevents environment-specific surprises.

**Requirements:**
- Data tier (demo/mock/production) aligns with development mode
- Deployment tier (local/cloud/production) matches constraint enforcement
- Promotion between tiers requires explicit validation
- Tier misalignment triggers automatic warnings

### VII. Constitutional Compliance Over Convenience
When conflicts arise between convenience and constitutional requirements, constitutional compliance takes precedence. This ensures long-term system integrity over short-term development speed.

**Requirements:**
- Constitutional violations block progression to higher modes
- Convenience workarounds require constitutional amendment process
- Compliance validation automated where possible
- Manual overrides require explicit approval and documentation

## Governance Framework

### Constitutional Authority
This constitution supersedes all other development practices, guidelines, and convenience patterns. All SEAD agents, workflows, and CLI commands must enforce constitutional compliance.

### Amendment Process
1. **Proposal**: Constitutional amendments require detailed rationale and impact analysis
2. **Agent Integration**: All affected agents must be updated to enforce new requirements
3. **Catalog Updates**: Relevant catalog domains must reflect constitutional changes
4. **Validation**: Amendment effectiveness validated through real project application
5. **Documentation**: All templates, workflows, and examples updated consistently

### Compliance Enforcement
- **Automated**: CLI commands validate constitutional compliance where possible
- **Agent-Based**: All SEAD agents verify constitutional adherence in their outputs
- **Progressive**: Enforcement strictness increases with development mode
- **Traceable**: All compliance decisions documented with constitutional references

### Constitutional Violations
**Blocking Violations** (prevent mode promotion):
- Catalog-required patterns missing in Build-to-Deploy mode
- Specification-implementation misalignment
- Agent outputs lacking constitutional compliance validation
- Context loss during agent handoffs

**Warning Violations** (flagged but not blocking):
- Catalog pattern deviations in Development mode
- Constitutional principle references missing
- Tier misalignment in lower modes
- Agent decision rationale incomplete

## SEAD-Specific Extensions

### Catalog Constitutional Integration
Catalogs themselves must follow constitutional principles:
- **Catalog-First**: New catalog domains require constitutional justification
- **Specification-Driven**: Catalog patterns derived from proven specifications
- **Progressive Enforcement**: Catalog compliance increases with mode strictness
- **Context Preservation**: Catalog evolution history maintained
- **Agent-Orchestrated**: Catalog updates require multi-agent validation
- **Three-Tier Alignment**: Catalog patterns support all development modes
- **Constitutional Compliance**: Catalog contents validated against constitution

### Agent Constitutional Behavior
All SEAD agents must demonstrate constitutional compliance:
- Begin all outputs with relevant constitutional principle references
- Validate their decisions against applicable constitutional requirements
- Flag constitutional violations in input or context
- Preserve constitutional compliance through agent handoffs
- Document constitutional rationale for all recommendations
- Escalate constitutional conflicts to appropriate resolution processes

### Mode-Based Constitutional Enforcement

#### Prototype Mode
- **Catalog-First**: Basic pattern awareness, experimental deviations allowed
- **Specification-Driven**: Rough specifications acceptable, focus on exploration
- **Progressive Constraints**: Minimal enforcement, rapid iteration priority
- **Context Preservation**: Basic context capture, informal documentation
- **Agent-Orchestrated**: Simplified agent workflows, reduced validation
- **Three-Tier Alignment**: Local development tier only
- **Constitutional Compliance**: Core principles awareness, warnings only

#### Development Mode  
- **Catalog-First**: Preferred pattern usage, documented deviations
- **Specification-Driven**: Detailed specifications required, implementation plans validated
- **Progressive Constraints**: Comprehensive validation, catalog compliance preferred
- **Context Preservation**: Full context documentation, catalog integration
- **Agent-Orchestrated**: Complete agent workflows, cross-validation
- **Three-Tier Alignment**: Mock data tier, cloud deployment tier
- **Constitutional Compliance**: Active enforcement, blocking violations for critical principles

#### Build-to-Deploy Mode
- **Catalog-First**: Strict catalog compliance, no undocumented deviations
- **Specification-Driven**: Executable specifications required, full implementation plans
- **Progressive Constraints**: Complete constraint enforcement, comprehensive validation
- **Context Preservation**: Full audit trail, catalog versioning
- **Agent-Orchestrated**: Full multi-agent coordination, constitutional validation
- **Three-Tier Alignment**: Production data tier, production deployment tier  
- **Constitutional Compliance**: Complete enforcement, all violations blocking

---

**Constitutional Authority**: This constitution governs all SEAD-METHOD development activities and takes precedence over convenience, legacy practices, or tool limitations. Constitutional compliance is not optional—it is the foundation of SEAD-METHOD effectiveness.