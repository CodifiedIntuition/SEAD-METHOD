# SEAD-METHOD™ CLI Reference

**Version**: 1.0  
**Date**: 2025-01-05  
**Status**: Production Ready

## Table of Contents

1. [Overview](#overview)
2. [Installation & Setup](#installation--setup)
3. [Core Workflow Commands](#core-workflow-commands)
4. [Catalog Management Commands](#catalog-management-commands)
5. [Project Management Commands](#project-management-commands)
6. [Global Options](#global-options)
7. [Configuration](#configuration)
8. [Exit Codes](#exit-codes)
9. [Examples](#examples)

---

## Overview

The SEAD-METHOD CLI provides a unified interface to the complete SEAD development workflow. All commands are designed to work together seamlessly while maintaining constitutional compliance and catalog pattern integration.

### Command Syntax

```bash
sead <command> [arguments] [options]
```

### Global Help

```bash
# Show all available commands
sead --help

# Show help for specific command
sead <command> --help

# Show version information
sead --version
```

---

## Installation & Setup

### Installation

```bash
# Install globally via npm
npm install -g sead-method

# Verify installation
sead --version

# Check system requirements
sead doctor
```

### Initial Setup

```bash
# Configure SEAD for first use
sead configure

# Set default development mode
sead config set defaultMode development

# Set preferred catalog location
sead config set catalogPath ./sead-catalog
```

---

## Core Workflow Commands

### `sead init`

Initialize a new SEAD project with constitutional framework and catalog structure.

#### Syntax
```bash
sead init <project-name> [options]
```

#### Arguments
- `<project-name>`: Name of the project directory to create

#### Options
- `--mode <mode>`: Development mode (prototype|development|build-to-deploy)
- `--template <template>`: Project template (fullstack|frontend|backend|api|mobile)
- `--catalog <path>`: Custom catalog location
- `--constitutional <level>`: Constitutional compliance level (minimal|progressive|strict)
- `--git`: Initialize git repository
- `--install`: Install dependencies after initialization
- `--force`: Overwrite existing directory

#### Examples
```bash
# Basic project initialization
sead init my-app

# Fullstack project with development mode
sead init e-commerce --mode development --template fullstack

# Project with custom catalog
sead init enterprise-app --catalog ./company-catalog --mode build-to-deploy

# Force overwrite with git initialization
sead init my-app --force --git --install
```

#### Output Structure
```
my-app/
├── sead.config.yaml              # SEAD configuration
├── sead-workspace/               # Workspace for specifications, plans, stories
│   ├── specifications/
│   ├── planning/ 
│   ├── stories/
│   └── implementations/
├── sead-catalog/                 # Project catalog (11 domains)
│   ├── api-contracts/
│   ├── shared-types/
│   ├── design-system/
│   └── ... (8 more domains)
└── package.json                  # Project dependencies
```

---

### `sead specify`

Create constitutional specification with catalog integration and constraint validation.

#### Syntax
```bash
sead specify <description> [options]
```

#### Arguments
- `<description>`: Feature or system description to specify

#### Options
- `--mode <mode>`: Development mode for appropriate constraints
- `--catalog-integration`: Enable catalog pattern integration (default: true)
- `--constitutional-compliance`: Enforce constitutional validation (default: true)
- `--output <file>`: Custom output file path
- `--template <type>`: Specification template (feature|system|enhancement)
- `--interactive`: Interactive specification creation
- `--ai-assist`: Enable AI-assisted specification enhancement

#### Examples
```bash
# Basic feature specification
sead specify "User authentication system"

# Interactive specification with catalog integration
sead specify "E-commerce checkout" --interactive --mode development

# System-level specification for production
sead specify "Payment processing microservice" \
  --template system --mode build-to-deploy

# Custom output location
sead specify "Dashboard analytics" \
  --output ./docs/specs/dashboard-spec.md
```

#### Generated Output
- **Location**: `sead-workspace/specifications/`
- **Filename**: `frontend-spec-YYYY-MM-DDTHH-MM-SS.md`
- **Content**: Constitutional specification with catalog references

---

### `sead plan`

Generate agentic planning with constitutional constraint awareness and catalog compliance.

#### Syntax
```bash
sead plan <tech-stack> [options]
```

#### Arguments
- `<tech-stack>`: Technology stack (fullstack|frontend|backend|api|mobile|data)

#### Options
- `--catalog-mode <mode>`: Catalog compliance level (prototype|development|build-to-deploy)
- `--data-tier <tier>`: Data strategy tier (demo|mock|production)
- `--constitutional-validation`: Enable constitutional constraint validation
- `--architecture <style>`: Architecture style (monolith|microservices|serverless)
- `--deployment <target>`: Deployment target (local|cloud|hybrid)
- `--output <file>`: Custom output file path
- `--interactive`: Interactive planning session

#### Examples
```bash
# Basic fullstack planning
sead plan fullstack

# Development-ready plan with production data
sead plan fullstack --catalog-mode development --data-tier production

# Microservices architecture for cloud deployment
sead plan backend \
  --architecture microservices \
  --deployment cloud \
  --mode build-to-deploy

# Interactive planning session
sead plan frontend --interactive --catalog-mode development
```

#### Generated Output
- **Location**: `sead-workspace/planning/`
- **Filename**: `fullstack-plan-YYYY-MM-DDTHH-MM-SS.md`
- **Content**: Comprehensive architectural plan with catalog integration

---

### `sead stories`

Create constraint-aware stories with constitutional compliance and readiness assessment.

#### Syntax
```bash
sead stories [options]
```

#### Options
- `--enforce-catalog`: Require catalog pattern compliance (default: true)
- `--context-preserve`: Maintain context across stories (default: true)
- `--constitutional-validation`: Apply constitutional constraints (default: true)
- `--count <number>`: Number of stories to generate (default: auto-detect)
- `--epic <name>`: Generate stories for specific epic
- `--priority <level>`: Filter by priority (high|medium|low)
- `--output-dir <path>`: Custom output directory
- `--template <type>`: Story template (user|technical|epic)

#### Examples
```bash
# Generate all stories with full validation
sead stories --enforce-catalog --context-preserve

# Generate stories for authentication epic
sead stories --epic authentication --priority high

# Generate 5 stories with custom output
sead stories --count 5 --output-dir ./custom-stories

# Technical stories only
sead stories --template technical --constitutional-validation
```

#### Generated Output
- **Location**: `sead-workspace/stories/`
- **Files**: Multiple story files (e.g., `user-auth-001.md`, `story-creation-timestamp.md`)
- **Content**: Constitutional stories with catalog compliance requirements

---

### `sead implement`

Execute catalog-driven implementation with constitutional compliance and QA gates.

#### Syntax
```bash
sead implement <story-id> [options]
```

#### Arguments
- `<story-id>`: Story identifier or filename to implement

#### Options
- `--mode <mode>`: Development mode constraints (prototype|development|build-to-deploy)
- `--validate-compliance`: Enable constitutional compliance validation (default: true)
- `--catalog-integration`: Ensure catalog pattern usage (default: true)
- `--agent <agent-name>`: Specify implementing agent (default: sead-developer)
- `--output <file>`: Custom implementation output file
- `--dry-run`: Show implementation plan without executing
- `--interactive`: Interactive implementation with user feedback

#### Examples
```bash
# Implement story with development mode constraints
sead implement user-auth-001 --mode development

# Strict implementation for production
sead implement payment-processing-001 \
  --mode build-to-deploy \
  --validate-compliance

# Dry run to preview implementation approach
sead implement dashboard-001 --dry-run

# Interactive implementation with specific agent
sead implement ui-component-001 \
  --interactive \
  --agent sead-ux-expert
```

#### Generated Output
- **Location**: `sead-workspace/implementations/`
- **Filename**: `impl-user-auth-001-YYYY-MM-DDTHH-MM-SS.md`
- **Content**: Detailed implementation with constitutional compliance validation

---

## Catalog Management Commands

### `sead catalog generate`

Generate catalog from existing project (brownfield analysis) using AI-powered pattern extraction.

#### Syntax
```bash
sead catalog generate [options]
```

#### Options
- `--source <path>`: Source project path (required for brownfield)
- `--guided`: Interactive catalog generation with human oversight
- `--ai-driven`: Automated pattern extraction (default: guided)
- `--domains <list>`: Specific domains to analyze (comma-separated)
- `--output <path>`: Output catalog location (default: ./sead-catalog)
- `--format <type>`: Output format (markdown|yaml|json)
- `--depth <level>`: Analysis depth (surface|detailed|comprehensive)

#### Examples
```bash
# Guided catalog generation from existing project
sead catalog generate --source ./my-existing-app --guided

# AI-driven analysis of specific domains
sead catalog generate \
  --source ./api-server \
  --ai-driven \
  --domains api-contracts,auth-patterns,error-handling

# Comprehensive analysis with custom output
sead catalog generate \
  --source ./enterprise-app \
  --depth comprehensive \
  --output ./enterprise-catalog
```

#### Generated Output
- **Location**: Specified output path (default: `./sead-catalog/`)
- **Structure**: 11 domain directories with extracted patterns
- **Content**: Markdown documentation with pattern analysis

---

### `sead catalog init`

Initialize greenfield catalog structure with domain templates.

#### Syntax
```bash
sead catalog init [options]
```

#### Options
- `--mode <mode>`: Catalog initialization mode (minimal|standard|comprehensive)
- `--domains <list>`: Specific domains to initialize (default: all 11)
- `--template <type>`: Domain template style (basic|enterprise|startup)
- `--output <path>`: Catalog output location (default: ./sead-catalog)

#### Examples
```bash
# Initialize standard catalog with all domains
sead catalog init --mode standard

# Initialize specific domains only
sead catalog init \
  --domains api-contracts,shared-types,error-handling \
  --template basic

# Enterprise catalog initialization
sead catalog init \
  --mode comprehensive \
  --template enterprise \
  --output ./company-catalog
```

---

### `sead catalog validate`

Validate catalog integrity, consistency, and constitutional compliance.

#### Syntax
```bash
sead catalog validate [options]
```

#### Options
- `--constitutional-compliance`: Check constitutional constraint alignment
- `--pattern-consistency`: Validate pattern consistency across domains
- `--integration-validation`: Check cross-domain integration points
- `--evolution-assessment`: Assess catalog evolution opportunities
- `--report <format>`: Generate validation report (text|json|html)
- `--fix`: Attempt to fix validation issues automatically

#### Examples
```bash
# Comprehensive catalog validation
sead catalog validate \
  --constitutional-compliance \
  --pattern-consistency \
  --integration-validation

# Generate HTML validation report
sead catalog validate --report html --output ./reports/

# Auto-fix validation issues
sead catalog validate --fix
```

---

## Project Management Commands

### `sead status`

Show comprehensive project status including constitutional compliance and catalog integration.

#### Syntax
```bash
sead status [options]
```

#### Options
- `--detailed`: Show detailed status information
- `--constitutional-summary`: Include constitutional compliance status
- `--catalog-health`: Show catalog integration health
- `--agent-status`: Display agent coordination status
- `--format <type>`: Output format (text|json|yaml)

#### Examples
```bash
# Basic project status
sead status

# Detailed status with constitutional summary
sead status --detailed --constitutional-summary

# JSON output for automation
sead status --format json --catalog-health
```

---

### `sead validate`

Comprehensive project validation across all SEAD dimensions.

#### Syntax
```bash
sead validate [options]
```

#### Options
- `--constitutional`: Validate constitutional compliance
- `--catalog`: Validate catalog integration and usage
- `--end-to-end`: Validate complete workflow integrity
- `--agents`: Validate agent coordination and handoffs
- `--quality-gates`: Check quality gate compliance
- `--report <format>`: Generate validation report (text|json|html)

#### Examples
```bash
# Full project validation
sead validate --constitutional --catalog --end-to-end

# Quality gate validation only
sead validate --quality-gates --agents

# Generate comprehensive HTML report
sead validate --all --report html --output ./validation-report.html
```

---

### `sead config`

Manage SEAD configuration settings.

#### Syntax
```bash
sead config <action> [key] [value] [options]
```

#### Actions
- `get <key>`: Get configuration value
- `set <key> <value>`: Set configuration value
- `list`: List all configuration
- `reset`: Reset to default configuration

#### Examples
```bash
# List current configuration
sead config list

# Set default development mode
sead config set defaultMode development

# Get catalog path
sead config get catalogPath

# Reset all configuration
sead config reset
```

---

## Global Options

### Common Options Available for All Commands

- `--help, -h`: Show command help
- `--version, -v`: Show version information
- `--verbose`: Enable verbose output
- `--debug`: Enable debug mode with detailed logging
- `--quiet, -q`: Suppress non-essential output
- `--no-color`: Disable colored output
- `--config <file>`: Use custom configuration file

### Environment Variables

```bash
# SEAD configuration
export SEAD_MODE=development
export SEAD_CATALOG_PATH=./custom-catalog
export SEAD_CONSTITUTIONAL_LEVEL=progressive

# Debug and logging
export SEAD_DEBUG=true
export SEAD_LOG_LEVEL=verbose
export SEAD_LOG_FILE=./sead.log

# Output preferences  
export SEAD_NO_COLOR=true
export SEAD_QUIET=false
```

---

## Configuration

### Configuration File: `sead.config.yaml`

```yaml
# SEAD Project Configuration
version: "1.0"
project:
  name: "my-project"
  mode: development
  constitutional_level: progressive

# Catalog configuration
catalog:
  path: "./sead-catalog"
  domains:
    - api-contracts
    - shared-types
    - design-system
    - state-management
    - error-handling
    - validation-schemas
    - test-patterns
    - auth-patterns
    - integration-patterns
    - data-strategy
    - deployment-strategy

# Agent configuration
agents:
  coordination_mode: sequential
  context_preservation: true
  handoff_validation: true

# Constitutional constraints
constitutional:
  enforcement_level: progressive
  quality_gates: true
  anti_drift_protection: true
  escalation_enabled: true

# Output preferences
output:
  format: markdown
  timestamps: true
  detailed_logs: false
```

### User Configuration: `~/.sead/config.yaml`

```yaml
# Global SEAD User Configuration
user:
  name: "Developer Name"
  email: "dev@example.com"
  organization: "My Company"

# Default preferences
defaults:
  mode: development
  constitutional_level: progressive
  catalog_validation: true
  agent_coordination: true

# CLI preferences
cli:
  editor: "code"
  pager: "less"
  color_output: true
  verbose_by_default: false
```

---

## Exit Codes

SEAD CLI uses standard exit codes to indicate command results:

- `0`: Success - Command completed successfully
- `1`: General Error - Command failed with general error
- `2`: Configuration Error - Invalid configuration or setup issue
- `3`: Constitutional Violation - Command blocked by constitutional constraints
- `4`: Catalog Error - Catalog validation or integration failure
- `5`: Agent Coordination Error - Agent handoff or coordination failure
- `6`: Validation Error - Quality gate or validation failure
- `7`: User Input Required - Command requires user interaction
- `8`: Resource Not Found - Required file, directory, or resource missing
- `9`: Permission Denied - Insufficient permissions for operation
- `10`: Network Error - Network or remote service failure

### Error Handling Examples

```bash
# Check command success
sead implement story-001
if [ $? -eq 0 ]; then
  echo "Implementation successful"
else
  echo "Implementation failed with code $?"
fi

# Handle constitutional violations
sead implement story-001 --mode build-to-deploy
case $? in
  0) echo "Success" ;;
  3) echo "Constitutional constraint violation" ;;
  6) echo "Quality gate failure" ;;
  *) echo "Other error: $?" ;;
esac
```

---

## Examples

### Complete Project Workflow

```bash
# 1. Initialize new project
sead init e-commerce-app --mode development --template fullstack --git

# Navigate to project
cd e-commerce-app

# 2. Create specification
sead specify "E-commerce platform with user auth, product catalog, and checkout" \
  --mode development --interactive

# 3. Generate architectural plan  
sead plan fullstack --catalog-mode development --data-tier production

# 4. Create implementation stories
sead stories --enforce-catalog --context-preserve

# 5. Implement first story
sead implement user-auth-001 --mode development --validate-compliance

# 6. Check project status
sead status --detailed --constitutional-summary

# 7. Validate entire project
sead validate --constitutional --catalog --end-to-end
```

### Brownfield Project Integration

```bash
# Generate catalog from existing project
sead catalog generate --source ./legacy-app --guided

# Initialize SEAD in existing project
sead init enhanced-legacy --catalog ./generated-catalog

# Copy existing code
cp -r ./legacy-app/src ./enhanced-legacy/

# Specify enhancement requirements
sead specify "Modernize legacy authentication system" --mode development

# Plan integration approach
sead plan backend --catalog-mode development --architecture microservices

# Create integration stories
sead stories --epic modernization --enforce-catalog

# Implement incrementally
sead implement auth-modernization-001 --mode development
```

### Multi-Environment Development

```bash
# Prototype phase
sead init mvp-prototype --mode prototype
cd mvp-prototype
sead specify "Core user workflow prototype" --mode prototype
sead plan frontend --catalog-mode prototype
sead implement core-workflow-001 --mode prototype

# Development phase  
sead config set defaultMode development
sead specify "Enhanced user workflow with persistence" --mode development
sead implement user-workflow-002 --mode development

# Production phase
sead config set defaultMode build-to-deploy
sead specify "Production-ready user workflow with monitoring" --mode build-to-deploy
sead implement user-workflow-003 --mode build-to-deploy --validate-compliance
```

### Team Collaboration

```bash
# Project lead: Initialize shared project
sead init team-project --mode development --constitutional progressive
git init && git add . && git commit -m "Initial SEAD setup"
git remote add origin https://github.com/team/project.git && git push -u origin main

# Team member: Clone and configure
git clone https://github.com/team/project.git
cd team-project
sead config set defaultMode development

# Team member: Work on assigned story
sead implement user-dashboard-001 --mode development
git add . && git commit -m "Implement user dashboard"
git push origin feature/user-dashboard

# Project lead: Validate integration
git pull origin feature/user-dashboard
sead validate --constitutional --catalog --agents
```

---

## Command Reference Summary

### Core Workflow Commands
| Command | Purpose | Key Options |
|---------|---------|-------------|
| `sead init` | Initialize SEAD project | `--mode`, `--template`, `--catalog` |
| `sead specify` | Create constitutional specification | `--mode`, `--interactive`, `--constitutional-compliance` |
| `sead plan` | Generate architectural plan | `--catalog-mode`, `--data-tier`, `--architecture` |
| `sead stories` | Create implementation stories | `--enforce-catalog`, `--context-preserve`, `--epic` |
| `sead implement` | Execute story implementation | `--mode`, `--validate-compliance`, `--agent` |

### Catalog Management Commands  
| Command | Purpose | Key Options |
|---------|---------|-------------|
| `sead catalog generate` | Extract patterns from existing project | `--source`, `--guided`, `--domains` |
| `sead catalog init` | Initialize greenfield catalog | `--mode`, `--domains`, `--template` |
| `sead catalog validate` | Validate catalog integrity | `--constitutional-compliance`, `--fix` |

### Project Management Commands
| Command | Purpose | Key Options |
|---------|---------|-------------|
| `sead status` | Show project status | `--detailed`, `--constitutional-summary` |
| `sead validate` | Comprehensive project validation | `--constitutional`, `--catalog`, `--end-to-end` |
| `sead config` | Manage configuration | `get`, `set`, `list`, `reset` |

---

**Document Version**: 1.0  
**Last Updated**: 2025-01-05  
**SEAD-METHOD™ Version**: 1.0  
**Status**: Production Ready

For the latest CLI updates and community examples, visit our [GitHub repository](https://github.com/CodifiedIntuition/SEAD-METHOD).