# SEAD-METHOD™ User Guide

**Version**: 1.3.5-beta.1  
**Date**: 2025-09-17  
**Status**: Production Ready

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Core Architecture](#core-architecture)
4. [Development Modes](#development-modes)
5. [Agent System](#agent-system)
6. [Constitutional Framework](#constitutional-framework)
7. [Catalog System](#catalog-system)
8. [External Asset Integration](#external-asset-integration)
9. [CLI Workflow](#cli-workflow)
10. [IDE Integration](#ide-integration)
11. [Project Lifecycle](#project-lifecycle)
12. [Best Practices](#best-practices)
13. [Troubleshooting](#troubleshooting)

---

## Introduction

SEAD-METHOD™ (Specification Enforced Agentic Agile Development) is a revolutionary development methodology that combines AI agents with constitutional constraints and catalog-based patterns to deliver consistent, high-quality software development at scale.

### What Makes SEAD Different?

- **🏛️ Constitutional AI Agents**: 14 specialized agents with built-in constraints prevent drift
- **📚 Catalog-Driven Development**: 67+ tasks, 40+ templates, 25+ checklists ensure consistency  
- **🔄 External Asset Integration**: Seamlessly adopt existing design systems, APIs, and components
- **⚡ Three Development Modes**: From rapid prototyping to production-grade deployment
- **🤖 Multi-Agent Coordination**: Orchestrated workflows with constitutional compliance
- **📋 Comprehensive Validation**: Quality gates, pattern validation, and compliance checking

### Key Benefits

- **Eliminates AI Agent Drift**: Constitutional constraints keep agents focused and consistent
- **Accelerates Development**: Pre-built patterns and workflows reduce repetitive work
- **Ensures Quality**: Multiple validation layers catch issues early
- **Scales Seamlessly**: Works for solo developers to enterprise teams
- **Integrates Everything**: Adopt existing assets while maintaining SEAD compliance

---

## Installation

### Global Installation
```bash
# Install globally via npm
npm install -g sead-method-core

# Verify installation
sead --version
```

### Project Setup
```bash
# Initialize new SEAD project
sead init my-project
cd my-project

# Install SEAD methodology and IDE integration
sead install

# Verify installation
sead status
```

### What Gets Installed
When you run `sead install`, SEAD creates:

```
your-project/
├── .sead-core/                    # Hidden SEAD directory
│   ├── agents/                    # 14 specialized AI agents
│   ├── tasks/                     # 67+ development tasks
│   ├── templates/                 # 40+ reusable templates
│   ├── checklists/               # 25+ quality validation lists
│   ├── constitutional-rules/      # Agent constraint definitions
│   ├── data/                     # Knowledge bases and frameworks
│   ├── workflows/                # Orchestrated multi-step processes
│   └── scripts/                  # Utility scripts
├── sead-catalog/                 # Your project's pattern catalog
└── [IDE-specific integration files]
```

---

## Core Architecture

### SEAD Components

1. **Constitutional Agents**: AI agents with built-in behavioral constraints
2. **Pattern Catalog**: Project-specific validated patterns and components
3. **Validation Framework**: Multi-layer quality and compliance checking
4. **External Integration**: Asset adoption and transformation system
5. **Workflow Orchestration**: Multi-agent coordination and task sequencing

### File Organization

- **Source Repository** (`sead-core/`): Development and source files
- **Installed Projects** (`.sead-core/`): Hidden directory with SEAD resources
- **Project Catalog** (`sead-catalog/`): Your validated patterns and assets

---

## Development Modes

SEAD operates in three distinct modes with progressive constraint enforcement:

| Mode | Purpose | Constraints | AI Behavior | Validation |
|------|---------|-------------|-------------|------------|
| **🧪 PROTOTYPE** | Rapid experimentation | Minimal - can deviate | Creative, allows custom solutions | Basic linting |
| **⚙️ DEVELOPMENT** | Production features | Must use catalog when available | Prefers catalog, documents new patterns | Type checking, compliance validation |
| **🏭 BUILD-TO-DEPLOY** | Deployment ready | STRICT - only catalog items | Factory assembly approach | Full compliance checking |

### Mode Selection
```bash
# Set project mode
sead specify "authentication system" --mode prototype
sead plan "user dashboard" --mode development  
sead implement "payment-flow" --mode build-to-deploy
```

---

## Agent System

SEAD includes 14 specialized AI agents, each with constitutional constraints:

### Core Agents
- **sead-master**: Universal task execution and agent coordination
- **sead-orchestrator**: Multi-agent workflow coordination
- **sead-architect**: Software architecture with catalog compliance
- **sead-developer**: Implementation with pattern awareness
- **sead-qa**: Quality assurance and validation

### Specialized Agents
- **sead-catalog-architect**: Catalog management and pattern extraction
- **sead-pattern-extraction**: Legacy code pattern identification
- **sead-product-owner**: Product strategy and requirements
- **sead-project-manager**: Project planning and coordination
- **sead-analyst**: Requirements analysis and research
- **sead-ux-expert**: UX design and design system integration
- **sead-scrum-master**: Agile process facilitation

### Agent Usage in IDEs
```bash
# Claude Code
/sead-architect "Design microservices architecture"
/sead-developer "Implement authentication using catalog patterns"

# Cursor
@sead-qa "Review code for constitutional compliance"
@sead-orchestrator "Coordinate feature implementation workflow"
```

---

## Constitutional Framework

### Constitutional Constraints
Each agent operates under specific constitutional rules that:
- **Prevent Drift**: Keep agents focused on their specialized roles
- **Enforce Quality**: Require adherence to coding standards and patterns
- **Maintain Consistency**: Ensure architectural decisions align across agents
- **Validate Compliance**: Check outputs against catalog and mode requirements

### Constraint Examples
```yaml
# sead-developer-constraints.yaml
must_use_catalog_patterns: true
require_type_safety: true
validate_before_output: true
document_new_patterns: true
mode_specific_validation: true
```

### Constitutional Validation
```bash
# Validate agent outputs against constitutional rules
sead validate constitutional --agent sead-developer --output ./component.tsx

# Check project compliance
sead constitutional-validation-workflow
```

---

## Catalog System

### Catalog Purpose
The catalog serves as your project's validated pattern library, containing:
- **Approved Components**: Tested, reusable UI/logic components
- **API Contracts**: Validated interface definitions
- **Architectural Patterns**: Proven structural approaches
- **Configuration Templates**: Standardized setup patterns

### Catalog Operations
```bash
# Generate catalog from existing codebase
sead brownfield-catalog-generation

# Validate catalog compliance
sead catalog validate

# Add external assets to catalog
sead catalog integrate-external --source ./external-assets/

# Interactive catalog creation
sead interactive-catalog-creation
```

### Catalog Structure
```
sead-catalog/
├── components/           # Reusable components
├── patterns/            # Architectural patterns  
├── templates/           # Code templates
├── api-contracts/       # API specifications
├── design-system/       # Design tokens and components
└── validation-rules/    # Custom validation logic
```

---

## External Asset Integration

### Supported Asset Types
- **🎨 Design Systems**: Figma exports, design tokens, style guides
- **📦 Component Libraries**: React/Vue/Angular components, Storybook exports
- **🔗 API Specifications**: OpenAPI/Swagger specs, GraphQL schemas
- **🧩 Pattern Collections**: Authentication flows, integration patterns

### Integration Workflow
```bash
# 1. Stage external assets
mkdir external-assets-staging/
# Organize: design-system/, api-specs/, components/

# 2. Analyze and validate assets
sead external-asset-analysis --source ./external-assets-staging/

# 3. Transform to SEAD-compliant patterns  
sead external-design-system-transformation --input ./figma-tokens.json

# 4. Integrate into catalog
sead catalog-external-integration --validate-compliance

# 5. Generate adoption strategy
sead external-adoption-strategy
```

### Asset Transformation
SEAD automatically transforms external assets to maintain constitutional compliance while preserving functionality.

---

## CLI Workflow

### Primary Workflow Commands
```bash
# 1. Project specification
sead specify "user authentication system" --mode development

# 2. Implementation planning
sead plan "Next.js + FastAPI stack" --catalog-integration

# 3. Story creation and breakdown
sead stories --enforce-catalog --validate-compliance

# 4. Implementation with validation
sead implement auth-001 --mode development --qa-gate
```

### Task-Specific Commands
```bash
# Requirements and analysis
sead advanced-elicitation
sead facilitate-brainstorming-session
sead risk-profile

# Architecture and design
sead brownfield-create-epic
sead generate-project-brief
sead create-implementation-plan

# Quality and validation
sead qa-gate
sead review-story
sead verify-build
```

### Catalog and Pattern Commands
```bash
# Pattern extraction and management
sead brownfield-catalog-generation
sead pattern-extraction-workflow
sead catalog-validation-workflow

# External integration
sead external-asset-analysis
sead external-adoption-strategy
sead catalog-external-integration
```

---

## IDE Integration

SEAD supports 15+ IDEs with automatic detection and configuration:

### Supported IDEs
- **Claude Code** (recommended): Slash commands `/sead-architect`, `/sead-developer`
- **Cursor**: Agent chat `@sead-architect`, `@sead-developer`
- **VS Code + GitHub Copilot**: Chat modes in `.github/chatmodes/`
- **Windsurf**: Workflow commands `/sead-architect`
- **Cline**: Rules in `.clinerules/`
- **Others**: Roo Code, Trae, Gemini CLI, Qwen Code, Auggie CLI, Codex, Kilo Code

### IDE Setup
```bash
# Automatic IDE detection and setup
sead install

# Manual IDE configuration
sead install --ide cursor
sead install --ide vscode
```

### IDE-Specific Features
- **Claude Code**: Full SEAD integration with constitutional validation
- **Cursor**: Multi-agent coordination in chat
- **VS Code**: GitHub Copilot chat modes for SEAD agents
- **Windsurf**: Workflow-based SEAD commands

---

## Project Lifecycle

### 1. Project Initialization
```bash
sead init my-project
cd my-project
sead install
```

### 2. Requirements and Planning
```bash
sead specify "core requirements" --mode development
sead plan "technical architecture" --catalog-compliance
sead generate-project-brief
```

### 3. Catalog Development
```bash
# For new projects
sead interactive-catalog-creation

# For existing codebases
sead brownfield-catalog-generation
sead pattern-extraction-workflow
```

### 4. External Asset Integration
```bash
sead external-asset-analysis --source ./assets/
sead external-adoption-strategy
sead catalog-external-integration
```

### 5. Implementation
```bash
sead stories --mode development
sead implement feature-001 --qa-gate
sead review-story --constitutional-check
```

### 6. Quality Assurance
```bash
sead qa-gate --full-validation
sead verify-build --mode build-to-deploy
sead constitutional-validation-workflow
```

### 7. Deployment Preparation
```bash
sead implement --mode build-to-deploy
sead catalog validate --strict
sead project-status --deployment-ready
```

---

## Best Practices

### Constitutional Compliance
1. **Always validate agent outputs** against constitutional rules
2. **Use appropriate development modes** for different project phases
3. **Regularly check catalog compliance** to prevent drift
4. **Document new patterns** when extending the catalog

### Catalog Management
1. **Start with existing assets** through external integration
2. **Validate patterns thoroughly** before adding to catalog
3. **Maintain catalog documentation** for team understanding
4. **Regular catalog reviews** to remove outdated patterns

### Multi-Agent Coordination
1. **Use sead-orchestrator** for complex multi-step workflows
2. **Leverage agent specialization** for appropriate tasks
3. **Validate cross-agent consistency** in outputs
4. **Document agent decision rationale** for future reference

### External Integration
1. **Analyze assets before integration** to understand compatibility
2. **Transform gradually** to maintain functionality during adoption
3. **Validate compliance** throughout the integration process
4. **Create adoption strategies** for team coordination

---

## Troubleshooting

### Common Issues

#### Installation Problems
```bash
# Check installation status
sead status

# Reinstall SEAD
sead uninstall
sead install

# IDE detection issues
sead install --ide manual
```

#### Catalog Compliance Errors
```bash
# Validate catalog
sead catalog validate --verbose

# Check constitutional compliance
sead constitutional-validation-workflow

# Pattern conflicts
sead pattern-quality-assessment
```

#### Agent Coordination Issues
```bash
# Check agent status
sead list-agents

# Validate agent constraints
sead validate constitutional --agent sead-developer

# Reset agent state
sead update --reset-agents
```

#### External Integration Problems
```bash
# Analyze asset compatibility
sead external-asset-analysis --detailed

# Check transformation status
sead external-asset-validation

# Review integration logs
sead catalog-integration-validation
```

### Getting Help
```bash
# Show detailed help
sead --help

# Command-specific help
sead specify --help
sead catalog --help

# Check system status
sead project-status --verbose
```

### Support Resources
- [CLI Reference](./CLI-REFERENCE.md) - Complete command documentation
- [Constitutional Framework Guide](./CONSTITUTIONAL-FRAMEWORK-GUIDE.md) - Constraint system details
- [Agent Coordination Guide](./AGENT-COORDINATION-GUIDE.md) - Multi-agent workflow patterns
- [External Asset Integration Flow](./EXTERNAL-ASSET-INTEGRATION-FLOW.md) - Asset adoption strategies

---

*For additional support, issues, or feature requests, visit the [SEAD-METHOD repository](https://github.com/CodifiedIntuition/SEAD-METHOD)*