# SEAD-METHOD™ CLI Reference

**Version**: 1.0  
**Date**: 2025-01-05  
**Status**: Production Ready

## Table of Contents

1. [Overview](#overview)
2. [Installation & Setup](#installation--setup)
3. [Core Workflow Commands](#core-workflow-commands)
4. [Catalog Management Commands](#catalog-management-commands)
5. [Task System Commands](#task-system-commands)
6. [Project Management Commands](#project-management-commands)
7. [Global Options](#global-options)
8. [Configuration](#configuration)
9. [Exit Codes](#exit-codes)
10. [Examples](#examples)

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

### Package Installation

```bash
# Install globally via npm
npm install -g sead-method-core

# Verify installation
sead --version
```

### Professional Installer System

SEAD features a **BMAD-style professional installer** for IDE integration:

#### `sead install`
Interactive installation with IDE setup and agent configuration.

```bash
# Interactive installation (recommended)
sead install

# Installation options
sead install --full                     # Complete SEAD system
sead install --constitutional           # Constitutional framework focus  
sead install --agent <agent-name>       # Single agent installation

# IDE-specific installation
sead install --ide claude-code          # For Claude Code
sead install --ide cursor               # For Cursor
sead install --ide vs-code              # For VS Code + GitHub Copilot
sead install --ide windsurf             # For Windsurf
# [and 11+ more supported IDEs]

# Directory specification
sead install /path/to/project            # Install in specific directory
sead install .                          # Install in current directory (default)
```

**What gets installed:**
- `.sead-core/` directory with all SEAD resources
- IDE-specific command files (slash commands, chat modes, etc.)
- 12 AI agents as IDE commands
- 23 development tasks as IDE commands
- Constitutional rules and catalog templates

#### `sead status`
Show current installation status and information.

```bash
sead status                              # Show installation details

# Example output:
# SEAD Installation Status:
#   Directory:      /path/to/project
#   Version:        1.0.0  
#   Installed:      1/5/2025
#   Type:           full
#   IDE Setup:      claude-code
#   Total Files:    72
```

#### `sead list-agents` / `sead agents`
List all available SEAD agents with descriptions.

```bash
sead list-agents                         # List all agents
sead agents                             # Alias for list-agents

# Shows all 12 agents:
# sead-architect, sead-developer, sead-qa, sead-orchestrator, etc.
```

#### `sead update`
Update existing SEAD installation.

```bash
sead update                             # Update to latest version
sead update --force                     # Force update even if same version
```

### IDE Integration Commands

Once installed, SEAD agents are available directly in your IDE:

**Claude Code:**
```bash
/sead-architect "Design user authentication system"
/sead-developer "Implement login component"
/sead-qa "Review this code for security issues"
```

**Cursor:**  
```bash
@sead-architect "Design user authentication system"  
@sead-developer "Implement login component"
@sead-qa "Review this code for security issues"
```

**Other IDEs:** Commands generated based on IDE capabilities

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

Create constitutional specification using integrated Spec-Kit proven methodology with SEAD catalog integration and constraint validation.

#### Syntax
```bash
sead specify <description> [options]
```

#### Arguments
- `<description>`: Feature or system description to specify

#### Options
- `-m, --mode <mode>`: Development mode (prototype|development|build-to-deploy) (default: development)
- `-d, --data-tier <tier>`: Data tier to use (demo|mock|production) (default: mock)
- `-p, --deploy-tier <tier>`: Deployment tier (local-dev|cloud-staging|production-deploy) (default: cloud-staging)
- `-t, --type <type>`: Specification type (frontend|backend|fullstack) (default: frontend)
- `-i, --interactive`: Enable interactive specification creation

#### Examples
```bash
# Basic feature specification
sead specify "User authentication system"

# Interactive specification with development mode
sead specify "E-commerce checkout" --interactive --mode development

# Backend specification for production deployment
sead specify "Payment processing microservice" \
  --type backend --mode build-to-deploy --deploy-tier production-deploy

# Fullstack specification with production data tier
sead specify "Dashboard analytics" \
  --type fullstack --data-tier production --mode development
```

#### Generated Output
- **Location**: `sead-workspace/tasks/`
- **Task File**: `sead-create-specification-execution-YYYY-MM-DDTHH-MM-SS.md`
- **Content**: Spec-Kit integrated task with SEAD constitutional compliance and catalog pattern integration
- **Execution**: Ready for SEAD agents with complete context preservation

---

### `sead plan`

Generate agentic implementation plan using integrated Spec-Kit proven methodology with constitutional constraint awareness and catalog compliance.

#### Syntax
```bash
sead plan <tech-stack> [options]
```

#### Arguments
- `<tech-stack>`: Technology stack description (e.g., "Next.js with TypeScript and Auth0")

#### Options
- `-m, --catalog-mode <mode>`: Catalog enforcement mode (prototype|development|build-to-deploy) (default: development)
- `-d, --data-tier <tier>`: Data strategy tier (demo|mock|production) (default: mock)
- `-p, --deploy-tier <tier>`: Deployment tier (local-dev|cloud-staging|production-deploy) (default: cloud-staging)
- `-a, --architecture <type>`: Architecture type (frontend|backend|fullstack) (default: fullstack)
- `-i, --interactive`: Enable interactive planning session

#### Examples
```bash
# Basic fullstack planning
sead plan "Next.js with TypeScript and Prisma"

# Development-ready plan with production data
sead plan "React with Node.js API" --catalog-mode development --data-tier production

# Backend architecture for production deployment
sead plan "FastAPI with PostgreSQL and Redis" \
  --architecture backend \
  --deploy-tier production-deploy \
  --catalog-mode build-to-deploy

# Interactive frontend planning session
sead plan "Vue.js with TailwindCSS" --interactive --architecture frontend
```

#### Generated Output
- **Location**: `sead-workspace/tasks/`
- **Task File**: `sead-create-implementation-plan-execution-YYYY-MM-DDTHH-MM-SS.md`
- **Content**: Spec-Kit integrated planning task with constitutional compliance and catalog integration
- **Execution**: Ready for SEAD agents with architecture context and constraint validation

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

## Development Tool Commands

### `sead flatten`

Flatten codebase into a single XML file with comprehensive statistics and analysis. This tool is essential for understanding project structure, generating documentation, and preparing codebase for AI analysis.

#### Syntax
```bash
sead flatten [options]
```

#### Options
- `-i, --input <path>`: Input directory to flatten (default: current directory)
- `-o, --output <path>`: Output file path (default: 'flattened-codebase.xml')

#### Features
- **Intelligent File Discovery**: Automatically discovers all files while respecting .gitignore patterns
- **Binary Detection**: Identifies and excludes binary files using advanced heuristics
- **Comprehensive Statistics**: Generates detailed statistics including:
  - File count and size distribution
  - Lines of code analysis
  - Extension breakdown
  - Directory structure analysis
  - Duplicate file detection
  - Git integration status
  - Temporal analysis (oldest/newest files)
  - Compression analysis
- **Streaming XML Generation**: Efficiently handles large codebases with streaming output
- **Markdown Reports**: Generates detailed markdown reports alongside XML output

#### Examples
```bash
# Basic codebase flattening (auto-detects project root)
sead flatten

# Flatten specific directory with custom output
sead flatten --input ./src --output ./docs/codebase-analysis.xml

# Flatten current directory with custom filename
sead flatten --output ./project-snapshot.xml
```

#### Interactive Mode
When run without arguments, `sead flatten` will:
1. Auto-detect the project root by looking for common markers (.git, package.json, etc.)
2. Suggest optimal input and output paths
3. Provide confirmation prompts for user review
4. Generate both XML and detailed markdown statistics report

#### Output Structure
- **XML File**: Contains all text file contents with clear start/end markers
- **Markdown Report**: Detailed statistics including file breakdown, size analysis, quality metrics
- **Statistics Include**: File counts, size percentiles, extension analysis, directory breakdown, temporal data, Git integration status

---

### `sead build`

Build web-compatible bundles for SEAD agents and teams. Creates distributable packages that contain all necessary resources for agent operation in web environments.

#### Syntax
```bash
sead build [options]
```

#### Options
- `-a, --agents-only`: Build only agent bundles
- `-t, --teams-only`: Build only team bundles
- `-e, --expansions-only`: Build only expansion pack bundles
- `--no-expansions`: Skip building expansion packs
- `--no-clean`: Skip cleaning output directories

#### Features
- **Agent Bundle Creation**: Packages individual SEAD agents with all dependencies
- **Team Bundle Generation**: Creates coordinated team packages with shared resources
- **Expansion Pack Support**: Builds extension packages for specialized functionality
- **Web Compatibility**: Ensures all resources are web-accessible with proper path resolution
- **Dependency Resolution**: Automatically resolves and includes all required dependencies
- **Template Integration**: Incorporates SEAD-specific templates and instructions

#### Examples
```bash
# Build all bundles (agents, teams, and expansion packs)
sead build

# Build only agent bundles
sead build --agents-only

# Build only team bundles without cleaning output first
sead build --teams-only --no-clean

# Build expansion packs only
sead build --expansions-only

# Build agents and teams but skip expansion packs
sead build --no-expansions
```

#### Additional Build Commands

##### `sead build list-agents`
List all available agents that can be built.

```bash
sead build list-agents
```

##### `sead build list-expansions`
List all available expansion packs.

```bash
sead build list-expansions
```

##### `sead build validate`
Validate agent and team configurations before building.

```bash
sead build validate
```

#### Output Structure
Built bundles are created in the `dist/` directory with the following structure:
```
dist/
├── agents/
│   ├── sead-architect-bundle.md
│   ├── sead-developer-bundle.md
│   └── ... (other agent bundles)
├── teams/
│   ├── dev-team-bundle.md
│   └── ... (other team bundles)
└── expansions/
    ├── specialization-pack-bundle.md
    └── ... (other expansion bundles)
```

Each bundle includes:
- Complete agent/team configuration
- All referenced resources and dependencies
- Web-compatible resource paths
- Startup instructions and operational guidelines

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

## Task System Commands

SEAD-METHOD provides a comprehensive task system with 21+ specialized development tasks that work directly with SEAD agents. Each task provides guided execution with constitutional constraints and catalog awareness.

### `sead task list`

Display all available SEAD tasks organized by category.

#### Syntax
```bash
sead task list [options]
```

#### Options
- `--category <category>`: Filter by category (workflow|quality|analysis|documentation)
- `--detailed`: Show detailed task descriptions
- `--agent-mapping`: Show which SEAD agent handles each task

#### Examples
```bash
# List all available tasks
sead task list

# Show only quality assurance tasks
sead task list --category quality

# Show detailed descriptions with agent mappings
sead task list --detailed --agent-mapping
```

---

### Quality Assurance Tasks

#### `sead task qa-gate`
Execute comprehensive quality assurance gate with catalog compliance validation.

#### Syntax
```bash
sead task qa-gate [options]
```

#### Options
- `--mode <mode>`: Development mode for QA criteria (prototype|development|build-to-deploy)
- `--strict`: Enable strict catalog compliance checking
- `--interactive`: Enable interactive QA process
- `--report`: Generate QA gate report

#### Agent Integration
- **Primary Agent**: SEAD QA
- **Constraints**: sead-qa-constraints.yaml
- **Commands**: `*qa-gate`, `*validate-constraints`, `*check-compliance`

---

#### `sead task apply-qa-fixes`
Apply quality assurance fixes with catalog compliance validation.

#### Syntax
```bash
sead task apply-qa-fixes [options]
```

#### Options
- `--validate-catalog`: Validate catalog compliance (default: true)
- `--interactive`: Enable interactive QA mode
- `--scope <scope>`: Fix scope (file|component|project)

#### Agent Integration
- **Primary Agent**: SEAD QA
- **Commands**: `*review-qa`, `*apply-fixes`, `*validate-changes`

---

#### `sead task review-story`
Comprehensive story review with catalog pattern validation.

#### Syntax
```bash
sead task review-story [options]
```

#### Options
- `--story <id>`: Story ID to review
- `--interactive`: Enable interactive review mode
- `--validation-depth <depth>`: Review depth (basic|comprehensive|deep)

#### Agent Integration
- **Primary Agent**: SEAD QA
- **Commands**: `*review-story`, `*validate-patterns`, `*check-acceptance-criteria`

---

#### `sead task verify-build`
Verify build compliance with catalog standards and constitutional requirements.

#### Syntax
```bash
sead task verify-build [options]
```

#### Options
- `--mode <mode>`: Development mode for verification (prototype|development|build-to-deploy)
- `--strict`: Enable strict compliance checking
- `--interactive`: Enable interactive verification

#### Agent Integration
- **Primary Agent**: SEAD QA
- **Commands**: `*run-tests`, `*validate-build`, `*check-deployment-readiness`

---

### Requirements & Analysis Tasks

#### `sead task advanced-elicitation`
Advanced requirements elicitation with stakeholder interaction.

#### Syntax
```bash
sead task advanced-elicitation [options]
```

#### Options
- `--interactive`: Enable interactive elicitation mode (default: false)
- `--mode <mode>`: Development mode context (prototype|development|build-to-deploy)
- `--stakeholders <list>`: Stakeholder roles to focus on

#### Agent Integration
- **Primary Agent**: SEAD Analyst
- **Commands**: `*elicit`, `*catalog-research`, `*validate-constraints`

---

#### `sead task create-deep-research-prompt`
Generate comprehensive research prompts with constitutional awareness.

#### Syntax
```bash
sead task create-deep-research-prompt [options]
```

#### Options
- `--topic <topic>`: Research topic or domain
- `--interactive`: Enable interactive prompt creation
- `--depth <level>`: Research depth (surface|moderate|comprehensive)

#### Agent Integration
- **Primary Agent**: SEAD Analyst
- **Commands**: `*research`, `*generate-prompt`, `*validate-scope`

---

#### `sead task risk-profile`
Generate risk assessment profile with constitutional constraint analysis.

#### Syntax
```bash
sead task risk-profile [options]
```

#### Options
- `--interactive`: Enable interactive risk assessment
- `--scope <scope>`: Risk assessment scope (feature|project|system)
- `--framework <type>`: Risk framework to apply

#### Agent Integration
- **Primary Agent**: SEAD Project Manager
- **Commands**: `*risk-assess`, `*analyze-constraints`, `*generate-mitigation`

---

#### `sead task facilitate-brainstorming-session`
Lead structured brainstorming with catalog-aware ideation.

#### Syntax
```bash
sead task facilitate-brainstorming-session [options]
```

#### Options
- `--topic <topic>`: Brainstorming topic or challenge
- `--interactive`: Enable interactive facilitation (default: true)
- `--participants <count>`: Expected participant count

#### Agent Integration
- **Primary Agent**: SEAD Scrum Master
- **Commands**: `*facilitate`, `*guide-ideation`, `*capture-outcomes`

---

### Story & Documentation Tasks

#### `sead task create-next-story`
Create next user story with catalog integration and constraint awareness.

#### Syntax
```bash
sead task create-next-story [options]
```

#### Options
- `--interactive`: Enable interactive story creation
- `--mode <mode>`: Development mode for story constraints
- `--template <template>`: Story template to use

#### Agent Integration
- **Primary Agent**: SEAD Product Owner
- **Commands**: `*create-story`, `*validate-constraints`, `*check-catalog-patterns`

---

#### `sead task document-project`
Generate comprehensive project documentation with catalog integration.

#### Syntax
```bash
sead task document-project [options]
```

#### Options
- `--interactive`: Enable interactive documentation
- `--scope <scope>`: Documentation scope (minimal|standard|comprehensive)
- `--format <format>`: Output format (markdown|html|pdf)

#### Agent Integration
- **Primary Agent**: SEAD Analyst
- **Commands**: `*document`, `*organize-content`, `*validate-completeness`

---

#### `sead task generate-project-brief`
Generate project brief with constitutional framework integration.

#### Syntax
```bash
sead task generate-project-brief [options]
```

#### Options
- `--interactive`: Enable interactive brief generation
- `--scope <scope>`: Project scope and complexity (small|medium|large)
- `--template <template>`: Brief template to use

#### Agent Integration
- **Primary Agent**: SEAD Project Manager
- **Commands**: `*generate-brief`, `*validate-scope`, `*check-feasibility`

---

#### `sead task index-docs`
Create documentation index with catalog references and constitutional links.

#### Syntax
```bash
sead task index-docs [options]
```

#### Options
- `--source <path>`: Documentation source path (default: ./docs)
- `--interactive`: Enable interactive indexing
- `--format <format>`: Index format (tree|flat|categorized)

#### Agent Integration
- **Primary Agent**: SEAD Analyst
- **Commands**: `*index-docs`, `*organize-taxonomy`, `*validate-links`

---

### Development Tasks

#### `sead task create-simple-spec`
Create simplified specification with catalog pattern references.

#### Syntax
```bash
sead task create-simple-spec [options]
```

#### Options
- `--interactive`: Enable interactive spec creation
- `--mode <mode>`: Development mode for spec constraints
- `--template <template>`: Specification template

#### Agent Integration
- **Primary Agent**: SEAD Architect
- **Commands**: `*create-spec`, `*validate-architecture`, `*check-patterns`

---

#### `sead task correct-course`
Course correction with constraint validation and catalog alignment.

#### Syntax
```bash
sead task correct-course [options]
```

#### Options
- `--interactive`: Enable interactive course correction
- `--mode <mode>`: Development mode for constraints
- `--severity <level>`: Correction severity (minor|major|critical)

#### Agent Integration
- **Primary Agent**: SEAD Scrum Master
- **Commands**: `*course-correct`, `*analyze-deviation`, `*plan-realignment`

---

#### `sead task approve-solution`
Review and approve implementation solutions.

#### Syntax
```bash
sead task approve-solution [options]
```

#### Options
- `--interactive`: Enable interactive approval mode
- `--mode <mode>`: Development mode for approval criteria
- `--solution <id>`: Solution identifier to approve

#### Agent Integration
- **Primary Agent**: SEAD Architect
- **Commands**: `*approve-solution`, `*validate-architecture`, `*check-compliance`

---

### Brownfield Integration Tasks

#### `sead task brownfield-create-epic`
Create epic for brownfield integration with catalog awareness.

#### Syntax
```bash
sead task brownfield-create-epic [options]
```

#### Options
- `--source <path>`: Existing codebase path (default: .)
- `--interactive`: Enable interactive epic creation
- `--analysis-depth <level>`: Codebase analysis depth

#### Agent Integration
- **Primary Agent**: SEAD Catalog Architect
- **Commands**: `*create-epic`, `*analyze-patterns`, `*plan-integration`

---

#### `sead task brownfield-create-story`
Create story for brownfield integration with pattern extraction.

#### Syntax
```bash
sead task brownfield-create-story [options]
```

#### Options
- `--source <path>`: Existing codebase path (default: .)
- `--interactive`: Enable interactive story creation
- `--pattern-focus <domain>`: Focus on specific pattern domain

#### Agent Integration
- **Primary Agent**: SEAD Catalog Architect
- **Commands**: `*create-story`, `*extract-patterns`, `*validate-integration`

---

#### `sead task brownfield-catalog-generation`
Generate catalog from brownfield codebase with AI-powered pattern extraction.

#### Syntax
```bash
sead task brownfield-catalog-generation [options]
```

#### Options
- `--source <path>`: Source codebase path (default: .)
- `--interactive`: Enable interactive generation
- `--use-ai`: Use AI agents for pattern analysis (default: true)

#### Agent Integration
- **Primary Agent**: SEAD Pattern Extraction
- **Secondary Agent**: SEAD Catalog Architect
- **Commands**: `*extract-patterns`, `*classify-patterns`, `*build-catalog`

---

### Task Execution Examples

#### Interactive Task Execution
```bash
# Execute task with guided prompts
sead task qa-gate --interactive --mode development

# Create story with step-by-step guidance
sead task create-next-story --interactive --template user-story

# Generate project documentation interactively
sead task document-project --interactive --scope comprehensive
```

#### Automated Task Execution
```bash
# Run QA gate with strict validation
sead task qa-gate --strict --mode build-to-deploy

# Generate catalog from existing codebase
sead task brownfield-catalog-generation --source ./legacy-app --use-ai

# Create project brief for large project
sead task generate-project-brief --scope large --format markdown
```

#### Task Chaining
```bash
# Chain multiple related tasks
sead task advanced-elicitation --interactive && \
sead task create-deep-research-prompt --topic "user requirements" && \
sead task create-next-story --mode development
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
| `sead catalog integrate-external` | Integrate external assets into catalog | `--source`, `--type`, `--guided`, `--mode` |

### Development Tool Commands
| Command | Purpose | Key Options |
|---------|---------|-------------|
| `sead flatten` | Flatten codebase into single XML file with comprehensive statistics | `--input`, `--output` |
| `sead build` | Build web bundles for agents and teams | `--agents-only`, `--teams-only`, `--expansions-only` |

#### External Asset Integration Details

The `sead catalog integrate-external` command provides comprehensive integration of external assets while maintaining SEAD constitutional compliance. This includes:

**Supported Asset Types**:
- **Design Systems**: Figma exports, design tokens, web chat design systems
- **API Specifications**: OpenAPI/Swagger files, GraphQL schemas, Postman collections  
- **Component Libraries**: React/Vue/Angular components, Storybook exports
- **Pattern Collections**: Authentication flows, integration patterns, testing strategies

**Integration Modes**:
- **Prototype**: Basic validation and integration for rapid experimentation
- **Development**: Comprehensive quality checks and documentation requirements
- **Production**: Strict validation with security and performance requirements

**Quality Gates by Mode**:
- Constitutional compliance validation at all levels
- Mode-aware quality requirements scaling
- Automatic conflict resolution and pattern deduplication
- Generated adoption strategies and team training materials

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