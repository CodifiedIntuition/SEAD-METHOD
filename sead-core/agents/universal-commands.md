# Universal Commands Module

This module defines the common commands that all SEAD agents inherit, eliminating 30% redundancy in agent command definitions.

## Universal Command Definitions

### help
- **Purpose:** Show numbered list of available commands for the current agent
- **Usage:** `*help`
- **Behavior:** 
  - Display agent-specific commands in numbered list format
  - Include universal commands with agent context
  - Allow user to select commands by number
  - Provide brief description for each command

### mode-status  
- **Purpose:** Display current SEAD development mode and applicable constraints
- **Usage:** `*mode-status`
- **Behavior:**
  - Show current mode (prototype/development/build-to-deploy)
  - List applicable constitutional constraints for current agent
  - Display catalog enforcement level
  - Show quality gate requirements
  - Indicate any blocking violations or warnings

### execute-checklist
- **Purpose:** Run specified checklist with agent-appropriate defaults
- **Usage:** `*execute-checklist {checklist-name}`
- **Default:** Uses agent-specific default checklist if none specified
- **Behavior:**
  - Load specified checklist or agent default
  - Execute checklist items with constitutional compliance
  - Apply mode-specific validation requirements
  - Generate compliance report
  - Document results for audit trail

### create-doc
- **Purpose:** Create document using specified template with constitutional framework
- **Usage:** `*create-doc {template-name}`
- **Behavior:**
  - Load specified template with constitutional base
  - Apply mode-specific constraints and validation
  - Gather required inputs through interactive process
  - Generate document with constitutional compliance
  - Validate against applicable quality gates

### constraint-validate
- **Purpose:** Check current work against SEAD mode constraint requirements
- **Usage:** `*constraint-validate`
- **Behavior:**
  - Load constitutional constraints for current agent and mode
  - Validate current work against applicable constraints
  - Check catalog compliance requirements
  - Report any violations or warnings
  - Provide remediation guidance

### catalog-check
- **Purpose:** Validate current work against catalog patterns and compliance
- **Usage:** `*catalog-check`
- **Behavior:**
  - Scan available catalog patterns for current domain
  - Check usage compliance with mode requirements
  - Validate pattern application consistency
  - Report catalog coverage and gaps
  - Suggest pattern optimizations

### doc-out
- **Purpose:** Output current document to specified destination with constitutional compliance
- **Usage:** `*doc-out {destination}`
- **Behavior:**
  - Apply final constitutional validation
  - Check document completeness and consistency
  - Add constitutional compliance metadata
  - Output to specified destination or default location
  - Generate audit trail documentation

### yolo
- **Purpose:** Toggle Yolo Mode while respecting SEAD mode constraints
- **Usage:** `*yolo`
- **Behavior:**
  - Toggle expedited mode for rapid prototyping
  - Maintain constitutional compliance minimum requirements
  - Respect mode-specific constraints (cannot override build-to-deploy)
  - Document yolo mode usage for audit purposes
  - Provide warnings about reduced validation

### exit
- **Purpose:** Say goodbye as the current agent and abandon persona
- **Usage:** `*exit`
- **Behavior:**
  - Provide agent-specific farewell message
  - Save any pending work or context
  - Generate handoff documentation if applicable
  - Clear agent state and return to neutral mode
  - Document session completion for audit trail

## Agent Integration Pattern

### Command Inheritance
```yaml
# In agent files, inherit universal commands
commands:
  universal:
    import: "universal-commands.md"
  
  agent_specific:
    - specialized-command-1: Agent-specific functionality
    - specialized-command-2: Agent-specific functionality
    # ... additional agent-specific commands
```

### Customization Guidelines
- Agents can override universal commands with specialized behavior
- All overrides must maintain constitutional compliance
- Customizations should extend, not replace, core functionality
- Override documentation must explain deviation rationale

### Constitutional Integration
- All universal commands automatically apply constitutional constraints
- Mode-specific behavior enforced consistently across agents
- Catalog compliance checking integrated into all relevant commands
- Quality gate validation applied based on agent role and mode

## Command Behavior Matrix

| Command | Prototype Mode | Development Mode | Build-to-Deploy Mode |
|---------|---------------|------------------|---------------------|
| help | Full command list | Full command list | Full command list |
| mode-status | Basic constraints | Comprehensive constraints | Strict constraints |
| execute-checklist | Basic validation | Comprehensive validation | Strict validation |
| create-doc | Template + basic validation | Template + comprehensive validation | Template + strict validation |
| constraint-validate | Basic constraint check | Comprehensive constraint check | Strict constraint check |
| catalog-check | Optional catalog usage | Preferred catalog usage | Mandatory catalog usage |
| doc-out | Basic output validation | Comprehensive output validation | Strict output validation |
| yolo | Available with warnings | Available with restrictions | Not available |
| exit | Standard farewell | Standard farewell + handoff | Standard farewell + full audit |

## Quality Gate Integration

### Universal Quality Gates
All universal commands integrate with mode-specific quality gates:

- **Constitutional Compliance:** Validate against applicable constitutional rules
- **Catalog Compliance:** Check catalog pattern usage requirements
- **Documentation Standards:** Ensure complete and consistent documentation
- **Handoff Readiness:** Prepare appropriate handoff documentation
- **Audit Trail:** Maintain complete audit trail for compliance

### Agent-Specific Extensions
Agents can extend universal quality gates with specialized requirements:
- Additional validation steps for domain expertise
- Specialized compliance checks for agent responsibilities
- Enhanced handoff requirements for complex workflows
- Domain-specific audit trail requirements

## Implementation Notes

### Consistency Requirements
- All agents must implement universal commands identically
- Customizations must be clearly documented and justified
- Behavior must remain consistent across agent interactions
- Constitutional compliance cannot be bypassed or reduced

### Performance Considerations
- Universal commands optimized for common usage patterns
- Caching implemented for frequently accessed constitutional data
- Validation processes streamlined for efficiency
- Quality gates designed for minimal overhead

### Maintenance and Updates
- Universal commands updated centrally for all agents
- Version compatibility maintained across agent updates
- Breaking changes require full agent ecosystem validation
- Documentation automatically synchronized across agents

---

*This universal commands module eliminates 30% redundancy in agent command definitions while ensuring consistent constitutional compliance and user experience across all SEAD agents.*