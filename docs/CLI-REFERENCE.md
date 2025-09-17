# SEAD-METHOD™ CLI Reference

**Version**: 1.3.5-beta.1  
**Date**: 2025-09-17  
**Status**: Production Ready

## Table of Contents

1. [Overview](#overview)
2. [Installation & Setup Commands](#installation--setup-commands)
3. [Core Workflow Commands](#core-workflow-commands)
4. [Catalog Management Commands](#catalog-management-commands)
5. [Task-Specific Commands](#task-specific-commands)
6. [Project Management Commands](#project-management-commands)
7. [External Asset Integration Commands](#external-asset-integration-commands)
8. [Quality Assurance Commands](#quality-assurance-commands)
9. [Agent System Commands](#agent-system-commands)
10. [Global Options](#global-options)
11. [Configuration](#configuration)
12. [Exit Codes](#exit-codes)
13. [Examples](#examples)

---

## Overview

The SEAD-METHOD CLI (`sead`) provides a unified interface to the complete SEAD development workflow with 30+ commands supporting constitutional AI agents, catalog-driven development, and external asset integration.

### Command Syntax

```bash
sead <command> [arguments] [options]
```

### Global Aliases
- `sead-method` - Full command name
- `sead` - Primary alias (recommended)

---

## Installation & Setup Commands

### `sead init`
Initialize a new SEAD project with basic structure.

```bash
sead init [project-name]
```

**Arguments:**
- `project-name` - Name of the project directory (optional)

**Examples:**
```bash
sead init my-app
sead init  # Uses current directory
```

---

### `sead install`
Install SEAD methodology and IDE integration in current project.

```bash
sead install [options]
```

**Options:**
- `--ide <ide-name>` - Specify IDE for integration (auto-detected if omitted)
- `--force` - Force reinstallation
- `--no-ide` - Skip IDE integration

**Examples:**
```bash
sead install                    # Auto-detect IDE
sead install --ide cursor      # Specific IDE
sead install --no-ide          # CLI only
```

---

### `sead status`
Display current SEAD installation and project status.

```bash
sead status [options]
```

**Options:**
- `--verbose` - Show detailed status information
- `--json` - Output in JSON format

**Output:**
- Installation status
- IDE integration status
- Catalog compliance status
- Agent availability

---

### `sead uninstall`
Remove SEAD installation from current project.

```bash
sead uninstall [options]
```

**Options:**
- `--keep-catalog` - Preserve project catalog
- `--force` - Force removal without confirmation

---

### `sead update`
Update SEAD installation to latest version.

```bash
sead update [options]
```

**Options:**
- `--reset-agents` - Reset agent configurations
- `--preserve-config` - Keep custom configurations

---

## Core Workflow Commands

### `sead specify`
Create constitutional specifications with catalog awareness.

```bash
sead specify <description> [options]
```

**Arguments:**
- `description` - Project or feature description

**Options:**
- `--mode <mode>` - Development mode: `prototype`, `development`, `build-to-deploy`
- `--catalog-check` - Validate against existing catalog
- `--template <template>` - Use specific specification template

**Examples:**
```bash
sead specify "user authentication system" --mode development
sead specify "payment processing" --mode build-to-deploy --catalog-check
```

---

### `sead plan`
Generate implementation plans with catalog integration.

```bash
sead plan <description> [options]
```

**Arguments:**
- `description` - Technical architecture or implementation approach

**Options:**
- `--catalog-integration` - Include catalog pattern integration
- `--mode <mode>` - Target development mode
- `--tech-stack <stack>` - Specify technology stack

**Examples:**
```bash
sead plan "Next.js + FastAPI + PostgreSQL" --catalog-integration
sead plan "microservices architecture" --mode development
```

---

### `sead stories`
Create and manage user stories with constraint validation.

```bash
sead stories [options]
```

**Options:**
- `--enforce-catalog` - Enforce catalog compliance
- `--validate-compliance` - Run constitutional validation
- `--mode <mode>` - Development mode constraint level
- `--template <template>` - Story template to use

**Examples:**
```bash
sead stories --enforce-catalog --mode development
sead stories --validate-compliance --template epic
```

---

### `sead implement`
Execute implementation with catalog patterns and validation.

```bash
sead implement <story-id> [options]
```

**Arguments:**
- `story-id` - Story or feature identifier

**Options:**
- `--mode <mode>` - Development mode for constraints
- `--qa-gate` - Include quality assurance validation
- `--catalog-only` - Use only catalog patterns
- `--validate-compliance` - Run constitutional compliance checks

**Examples:**
```bash
sead implement auth-001 --mode development --qa-gate
sead implement payment-flow --mode build-to-deploy --catalog-only
```

---

## Catalog Management Commands

### `sead catalog`
Main catalog management interface.

```bash
sead catalog <subcommand> [options]
```

**Subcommands:**
- `validate` - Validate catalog compliance
- `generate` - Generate catalog from project
- `init` - Initialize project catalog
- `integrate-external` - Integrate external assets

---

### `sead catalog validate`
Validate catalog compliance and pattern consistency.

```bash
sead catalog validate [options]
```

**Options:**
- `--strict` - Strict validation mode
- `--verbose` - Detailed validation output
- `--fix` - Auto-fix minor issues

---

### `sead catalog generate`
Generate catalog from existing codebase.

```bash
sead catalog generate [options]
```

**Options:**
- `--source <path>` - Source directory to analyze
- `--output <path>` - Catalog output directory
- `--patterns <types>` - Pattern types to extract

---

### `sead catalog integrate-external`
Integrate external assets into catalog.

```bash
sead catalog integrate-external [options]
```

**Options:**
- `--source <path>` - External assets directory
- `--validate-compliance` - Validate SEAD compliance
- `--transform` - Transform assets to SEAD patterns

---

## Task-Specific Commands

### Requirements & Analysis Commands

#### `sead advanced-elicitation`
Advanced requirements elicitation workflow.

```bash
sead advanced-elicitation [options]
```

#### `sead facilitate-brainstorming-session`
Structured brainstorming session facilitation.

```bash
sead facilitate-brainstorming-session [options]
```

#### `sead facilitate-ideation-session`
Creative ideation session management.

```bash
sead facilitate-ideation-session [options]
```

#### `sead risk-profile`
Generate comprehensive risk assessment.

```bash
sead risk-profile [options]
```

---

### Architecture & Design Commands

#### `sead brownfield-create-epic`
Create epics for brownfield/legacy projects.

```bash
sead brownfield-create-epic [options]
```

#### `sead brownfield-create-story`
Create stories for brownfield development.

```bash
sead brownfield-create-story [options]
```

#### `sead generate-project-brief`
Generate comprehensive project briefs.

```bash
sead generate-project-brief [options]
```

#### `sead create-implementation-plan`
Create detailed implementation plans.

```bash
sead create-implementation-plan [options]
```

---

### Development Commands

#### `sead create-next-story`
Create next logical story in sequence.

```bash
sead create-next-story [options]
```

#### `sead create-simple-spec`
Create simplified specifications.

```bash
sead create-simple-spec [options]
```

#### `sead generate-ai-frontend-prompt`
Generate AI-optimized frontend prompts.

```bash
sead generate-ai-frontend-prompt [options]
```

#### `sead correct-course`
Course correction for project issues.

```bash
sead correct-course [options]
```

---

## External Asset Integration Commands

### `sead external-asset-analysis`
Analyze external assets for SEAD compatibility.

```bash
sead external-asset-analysis [options]
```

**Options:**
- `--source <path>` - Assets directory to analyze
- `--detailed` - Detailed compatibility analysis
- `--output <format>` - Output format (json, yaml, markdown)

---

### `sead external-adoption-strategy`
Generate adoption strategy for external assets.

```bash
sead external-adoption-strategy [options]
```

**Options:**
- `--assets <path>` - External assets path
- `--timeline <duration>` - Adoption timeline
- `--risk-level <level>` - Risk tolerance level

---

### `sead external-design-system-transformation`
Transform external design systems to SEAD compliance.

```bash
sead external-design-system-transformation [options]
```

**Options:**
- `--input <file>` - Design system input file
- `--output <path>` - Transformation output directory
- `--preserve-tokens` - Preserve original design tokens

---

### `sead external-asset-validation`
Validate external asset integration.

```bash
sead external-asset-validation [options]
```

**Options:**
- `--assets <path>` - Assets to validate
- `--compliance-level <level>` - Validation strictness
- `--fix-violations` - Auto-fix compliance violations

---

## Quality Assurance Commands

### `sead qa-gate`
Execute quality assurance gate validation.

```bash
sead qa-gate [options]
```

**Options:**
- `--full-validation` - Complete QA validation suite
- `--constitutional-check` - Constitutional compliance check
- `--catalog-compliance` - Catalog pattern compliance

---

### `sead review-story`
Review story implementation and compliance.

```bash
sead review-story [options]
```

**Options:**
- `--story-id <id>` - Specific story to review
- `--constitutional-check` - Include constitutional validation
- `--suggest-improvements` - Generate improvement suggestions

---

### `sead verify-build`
Verify build readiness and compliance.

```bash
sead verify-build [options]
```

**Options:**
- `--mode <mode>` - Target deployment mode
- `--full-suite` - Complete verification suite
- `--fix-issues` - Auto-fix detected issues

---

### `sead validate-next-story`
Validate readiness for next story development.

```bash
sead validate-next-story [options]
```

**Options:**
- `--prerequisites` - Check story prerequisites
- `--dependencies` - Validate dependencies
- `--catalog-readiness` - Check catalog compliance

---

## Agent System Commands

### `sead list-agents`
List available SEAD agents and their status.

```bash
sead list-agents [options]
```

**Options:**
- `--detailed` - Show agent descriptions and capabilities
- `--status` - Show agent availability status
- `--constitutional` - Show constitutional constraints

---

### `sead task`
Execute specific agent tasks.

```bash
sead task <task-name> [options]
```

**Arguments:**
- `task-name` - Name of the task to execute

**Options:**
- `--agent <agent>` - Specific agent to use
- `--mode <mode>` - Development mode
- `--validate` - Validate task execution

---

## Project Management Commands

### `sead project-status`
Comprehensive project status and health check.

```bash
sead project-status [options]
```

**Options:**
- `--verbose` - Detailed status information
- `--deployment-ready` - Check deployment readiness
- `--compliance-summary` - Constitutional compliance summary

---

### `sead document-project`
Generate comprehensive project documentation.

```bash
sead document-project [options]
```

**Options:**
- `--format <format>` - Documentation format
- `--include-catalog` - Include catalog documentation
- `--constitutional-docs` - Include constitutional framework docs

---

### `sead document-issue`
Document and track project issues.

```bash
sead document-issue [options]
```

**Options:**
- `--issue-type <type>` - Type of issue
- `--severity <level>` - Issue severity level
- `--assign-agent <agent>` - Assign to specific agent

---

### `sead index-docs`
Index and organize project documentation.

```bash
sead index-docs [options]
```

**Options:**
- `--rebuild` - Rebuild documentation index
- `--include-external` - Include external documentation
- `--generate-toc` - Generate table of contents

---

## Pattern & Workflow Commands

### `sead brownfield-catalog-generation`
Generate catalog from existing/legacy codebase.

```bash
sead brownfield-catalog-generation [options]
```

**Options:**
- `--source <path>` - Source codebase path
- `--pattern-types <types>` - Types of patterns to extract
- `--quality-threshold <level>` - Pattern quality threshold

---

### `sead pattern-extraction-workflow`
Execute pattern extraction workflow.

```bash
sead pattern-extraction-workflow [options]
```

**Options:**
- `--target <path>` - Target directory for analysis
- `--extraction-strategy <strategy>` - Extraction approach
- `--validate-patterns` - Validate extracted patterns

---

### `sead catalog-validation-workflow`
Execute catalog validation workflow.

```bash
sead catalog-validation-workflow [options]
```

**Options:**
- `--strict-mode` - Strict validation rules
- `--fix-violations` - Auto-fix violations
- `--generate-report` - Generate validation report

---

### `sead constitutional-validation-workflow`
Execute constitutional compliance validation.

```bash
sead constitutional-validation-workflow [options]
```

**Options:**
- `--agent <agent>` - Validate specific agent
- `--output-type <type>` - Validation output type
- `--enforce-fixes` - Enforce compliance fixes

---

### `sead interactive-catalog-creation`
Interactive catalog creation wizard.

```bash
sead interactive-catalog-creation [options]
```

**Options:**
- `--guided` - Guided creation process
- `--template <template>` - Use catalog template
- `--import-existing` - Import existing patterns

---

## Global Options

All SEAD commands support these global options:

### `--verbose, -v`
Enable verbose logging output.

### `--no-banner`
Disable SEAD banner display.

### `--config <file>`
Use custom configuration file.

### `--dry-run`
Preview changes without executing them.

### `--force`
Force execution without confirmations.

### `--json`
Output results in JSON format.

### `--help, -h`
Show command help information.

### `--version`
Show SEAD version information.

---

## Configuration

### Configuration File Locations
- Global: `~/.sead/config.yaml`
- Project: `./.sead/config.yaml`
- Custom: `--config <file>`

### Configuration Structure
```yaml
# .sead/config.yaml
sead:
  mode: development              # Default development mode
  catalog:
    enforce_compliance: true     # Enforce catalog compliance
    auto_validation: true        # Auto-validate patterns
  agents:
    default_constraints: strict  # Agent constraint level
  ide:
    integration: auto           # IDE integration mode
  external_assets:
    auto_transform: true        # Auto-transform external assets
    compliance_check: true      # Check compliance during integration
```

---

## Exit Codes

| Code | Meaning |
|------|---------|
| 0 | Success |
| 1 | General error |
| 2 | Configuration error |
| 3 | Catalog compliance violation |
| 4 | Constitutional constraint violation |
| 5 | External asset integration error |
| 6 | Agent coordination error |
| 7 | Validation failure |
| 8 | Installation/setup error |

---

## Examples

### Complete Project Setup
```bash
# Initialize and set up new project
sead init my-app
cd my-app
sead install --ide cursor

# Create initial specification and catalog
sead specify "e-commerce platform" --mode development
sead interactive-catalog-creation --guided

# Generate implementation plan
sead plan "Next.js + Stripe + PostgreSQL" --catalog-integration
```

### Brownfield Integration
```bash
# Analyze existing codebase
sead brownfield-catalog-generation --source ./src
sead pattern-extraction-workflow --validate-patterns

# Integrate external design system
sead external-asset-analysis --source ./design-system
sead external-adoption-strategy --timeline "3-months"
sead catalog integrate-external --source ./design-system --transform
```

### Development Workflow
```bash
# Create and implement features
sead stories --enforce-catalog --mode development
sead implement user-auth --qa-gate --validate-compliance

# Quality assurance
sead review-story --constitutional-check
sead qa-gate --full-validation
sead verify-build --mode build-to-deploy
```

### Validation and Compliance
```bash
# Comprehensive validation
sead catalog validate --strict --verbose
sead constitutional-validation-workflow --enforce-fixes
sead project-status --deployment-ready

# External asset validation
sead external-asset-validation --compliance-level strict
sead catalog-validation-workflow --generate-report
```

---

*For detailed examples and advanced usage patterns, see the [User Guide](./USER-GUIDE.md) and [Constitutional Framework Guide](./CONSTITUTIONAL-FRAMEWORK-GUIDE.md)*