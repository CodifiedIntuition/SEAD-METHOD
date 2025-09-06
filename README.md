# SEAD-METHOD™

**Specification Enforced Agentic Agile Development**

A revolutionary development methodology that combines AI agents with constitutional constraints and catalog-based patterns to deliver consistent, high-quality software development at scale.

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/CodifiedIntuition/SEAD-METHOD)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE)
[![Node](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen.svg)](https://nodejs.org/)

## 🎯 The Problem

Traditional AI-assisted development suffers from:
- **Code/spec drift** - Implementation deviates from original specifications
- **Inconsistent patterns** - Different agents make conflicting architectural choices  
- **Context loss** - Agents forget previous decisions across sessions
- **Quality variance** - No systematic approach to maintain standards

## 🚀 The SEAD Solution

**Constitutional AI agents** with **catalog-based constraint enforcement** across three development modes:

| Mode | Purpose | Constraints | AI Behavior | Validation |
|------|---------|-------------|-------------|------------|
| **🧪 PROTOTYPE** | Rapid experimentation | Minimal - can deviate from catalog | Creative, allows custom solutions | Basic linting |
| **⚙️ DEVELOPMENT** | Production-ready features | Must use catalog when available, can extend | Prefers catalog, documents new patterns | Type checking, contract validation |
| **🏭 BUILD-TO-DEPLOY** | Deployment-ready | STRICT - only catalog items | Factory assembly approach | Full compliance checking |

## ⚡ Quick Start

### Install SEAD-METHOD
```bash
# Install globally
npm install -g sead-method-core

# Or use directly with npx
npx sead-method-core install
```

### Professional Installation Experience
SEAD features a **BMAD-style professional installer** with interactive setup:

```bash
# Interactive installation with IDE selection
sead install

# Install for specific IDE (15+ supported)
sead install --ide claude-code
sead install --ide cursor
sead install --ide vs-code

# Installation options
sead install --full                    # Complete SEAD system
sead install --constitutional          # Constitutional framework focus
sead install --agent sead-architect   # Single agent installation
```

### Verify Installation
```bash
# Check installation status
sead status

# List available agents
sead list-agents

# See all 12 agents with descriptions
sead agents
```

### Initialize Your First Project
```bash
# Create new SEAD project
sead init my-project
cd my-project

# SEAD is now installed to .sead-core/ with IDE integration ready!
```

## 🔧 IDE Integration

SEAD automatically integrates with **15+ popular IDEs** using the same professional installation system as BMAD-METHOD:

### Supported IDEs
- **Claude Code** (recommended) - Slash commands: `/sead-architect`, `/sead-developer`
- **Cursor** - Agent chat: `@sead-architect`, `@sead-developer`  
- **VS Code + GitHub Copilot** - Chat modes in `.github/chatmodes/`
- **Windsurf** - Workflow commands: `/sead-architect`, `/sead-developer`
- **Crush** - Agent personas via CTRL+P+TAB
- **Cline** - Rules stored in `.clinerules/`
- **And many more** - Roo Code, Trae, Gemini CLI, Qwen Code, Auggie CLI, Codex, Kilo Code

### What Gets Installed
```bash
✓ .sead-core/ - Hidden directory with all SEAD resources
  ├── agents/           # 12 constitutional AI agents
  ├── tasks/            # 23 development tasks
  ├── templates/        # Reusable code templates
  ├── workflows/        # Multi-step processes  
  ├── checklists/       # Quality assurance lists
  └── constitutional-rules/ # Constraint definitions

✓ IDE-specific commands automatically generated:
  /sead-architect      # Software architecture with constraints
  /sead-developer      # Implementation with catalog awareness
  /sead-qa            # Quality assurance and validation
  /sead-orchestrator  # Multi-agent coordination
  [and 8 more specialized agents]
```

### Agent Usage Examples
```bash
# In Claude Code
/sead-architect "Design a user authentication system with PostgreSQL"

# In Cursor  
@sead-developer "Implement the login component using our catalog patterns"

# In any IDE with SEAD installed
# Agents automatically follow constitutional constraints and catalog patterns
```

### Complete Development Workflow
```bash
# 1. Constitutional specification with catalog awareness
sead specify "user authentication system" --mode development

# 2. Agentic implementation planning with constraint enforcement
sead plan "Next.js + FastAPI + PostgreSQL" --catalog-mode development

# 3. Constraint-aware story creation with context preservation
sead stories --enforce-catalog --context-preserve

# 4. Catalog-driven implementation with quality gates
sead implement auth-001 --mode development --validate-compliance
```

## 🏗️ Architecture

### Three-Tier Progressive System
SEAD-METHOD operates on three aligned tiers that scale from creativity to consistency:

#### Development Modes
- **🧪 PROTOTYPE**: Maximum creativity, minimal constraints for rapid experimentation
- **⚙️ DEVELOPMENT**: Catalog preferred, extensions tracked and validated  
- **🏭 BUILD-TO-DEPLOY**: Strict catalog-only enforcement for production deployment

#### Data Strategy  
- **🎭 DEMO**: Full schema in simple storage (SQLite/JSON) for demos
- **🏗️ MOCK**: Production-scale fake data in production storage for testing
- **🏭 PRODUCTION**: Strict catalog-enforced schema validation for deployment

#### Deployment Strategy
- **🏠 LOCAL-DEV**: Docker Compose with tunneling for team collaboration
- **☁️ CLOUD-STAGING**: Lightweight cloud with branch-based environments
- **🏭 PRODUCTION-DEPLOY**: Full CI/CD with blue/green deployment patterns

## 🤖 Agent Ecosystem

SEAD-METHOD employs 12 specialized AI agents with constitutional constraints and a rich task ecosystem:

### Core Development Agents (Tier 1)
- **SEAD Developer** - Constitutional implementation with catalog compliance
- **SEAD Architect** - System design with architectural pattern enforcement
- **SEAD QA** - Quality assurance with comprehensive validation gates

### Coordination Agents (Tier 2)  
- **SEAD Scrum Master** - Process facilitation with story pattern awareness
- **SEAD Product Owner** - Requirements management with catalog integration
- **SEAD UX Expert** - Design system coordination with pattern consistency
- **SEAD Catalog Architect** - Pattern governance and catalog evolution

### Analysis & Planning Agents (Tier 3)
- **SEAD Analyst** - Requirements analysis with constitutional research
- **SEAD Pattern Extraction** - Brownfield pattern identification and classification
- **SEAD Project Manager** - Project coordination with risk management

### Orchestration Agents (Tier 4)
- **SEAD Master** - Universal task execution with full constraint inheritance
- **SEAD Orchestrator** - Multi-agent workflow coordination and context preservation

### Two-Tier Command Architecture

SEAD-METHOD provides both **high-level workflow commands** (from Spec-Kit) and **detailed task commands** (from BMAD-METHOD):

**🔄 Workflow Layer**: Constitutional development lifecycle
- `sead specify` → `sead plan` → `sead stories` → `sead implement`

**🎯 Task Layer**: 22+ specialized development tasks
- Quality gates, elicitation, documentation, brownfield integration
- Each task maps to specific SEAD agents with slash commands (`*help`, `*qa-gate`, etc.)
- Agent coordination with catalog awareness and constitutional compliance

## 📋 Core Commands

### Project Management
```bash
sead init [project]           # Initialize SEAD project with catalog structure
sead status                   # Show project status and catalog health
sead validate                 # Validate project against current mode constraints
```

### Development Workflow (Spec-Kit Enhanced)
```bash
sead specify <description>    # Create constitutional specification  
sead plan <tech-stack>        # Create agentic implementation plan
sead stories                  # Generate constraint-aware user stories
sead implement <story-id>     # Implement with catalog constraints
```

### Rich Task Ecosystem (21+ SEAD Development Tasks)

SEAD-METHOD provides a comprehensive task system that directly integrates with the 12-agent ecosystem. Each task provides guided execution with constitutional constraints and catalog awareness.

```bash
# List and explore tasks
sead task list                          # Show all 21+ available development tasks
sead task list --category quality       # Filter by category (quality|analysis|documentation|workflow)
sead task list --detailed --agent-mapping  # Show agent assignments and detailed descriptions
```

#### 🔍 Quality Assurance Tasks (SEAD QA Agent)
```bash
sead task qa-gate                       # Execute quality gates with catalog validation
sead task apply-qa-fixes               # Apply QA fixes with constitutional compliance  
sead task review-story                 # Comprehensive story review with pattern validation
sead task verify-build                 # Build verification against catalog standards
```

#### 📋 Requirements & Analysis Tasks (SEAD Analyst/Project Manager)
```bash
sead task advanced-elicitation         # Advanced stakeholder requirements gathering
sead task create-deep-research-prompt  # Generate comprehensive research prompts
sead task risk-profile                 # Constitutional constraint risk analysis  
sead task facilitate-brainstorming-session # Catalog-aware ideation sessions
sead task facilitate-ideation-session  # Constitutional framework ideation
```

#### 📝 Story & Documentation Tasks (SEAD Product Owner/Analyst)
```bash
sead task create-next-story            # User stories with catalog integration
sead task document-project             # Comprehensive project documentation
sead task generate-project-brief       # Constitutional project brief generation
sead task index-docs                   # Documentation with catalog references
sead task document-issue               # Issue documentation with constraint analysis
```

#### ⚙️ Development Tasks (SEAD Architect/Scrum Master)
```bash
sead task create-simple-spec           # Simplified specifications with catalog patterns
sead task correct-course               # Course correction with constraint validation
sead task approve-solution             # Solution approval with compliance checking
sead task generate-ai-frontend-prompt  # AI prompts with catalog pattern references
```

#### 🏗️ Brownfield Integration Tasks (SEAD Catalog Architect/Pattern Extraction)
```bash
sead task brownfield-create-epic       # Brownfield epic creation with pattern extraction
sead task brownfield-create-story      # Brownfield stories with catalog awareness  
sead task brownfield-catalog-generation # AI-powered pattern extraction from existing code
```

#### Task Execution Examples
```bash
# Interactive task execution with step-by-step guidance
sead task qa-gate --interactive --mode development --strict

# Automated execution with specific configuration
sead task brownfield-catalog-generation --source ./legacy-app --use-ai

# Task chaining for complete workflows
sead task advanced-elicitation --interactive && \
sead task create-next-story --mode development && \
sead task qa-gate --validate-constraints
```

**Key Task Features:**
- **🤖 Direct Agent Integration**: Each task maps to specific SEAD agents with constitutional constraints
- **🎯 Mode-Aware Execution**: Tasks respect development mode constraints (prototype/development/build-to-deploy)
- **📚 Catalog Integration**: All tasks leverage catalog patterns and validate compliance
- **💬 Interactive Guidance**: `--interactive` flag provides step-by-step execution assistance
- **🔄 Agent Coordination**: Tasks maintain context for seamless agent handoffs

### Catalog Management
```bash
sead catalog generate         # Generate catalog from existing codebase
sead catalog init            # Initialize greenfield catalog with pattern tracking
sead catalog validate        # Validate catalog integrity and compliance
```

## 🚀 Usage Examples

### Brownfield Adoption
```bash
# Generate catalog from existing project
sead catalog generate --source ./my-existing-app --interactive

# Start using SEAD with generated patterns
sead specify "add user profiles" --mode development
sead plan "React + Node.js" --catalog-mode development
```

### Greenfield Development  
```bash
# Initialize with pattern tracking
sead init my-new-project
sead catalog init --mode greenfield --track-patterns

# Develop with pattern capture
sead specify "user authentication" --mode prototype
sead implement auth-001 --mode prototype --capture-patterns
```

### Production Deployment
```bash
# Switch to strict mode for deployment
sead specify "payment processing" --mode build-to-deploy
sead implement payment-001 --mode build-to-deploy
# Only catalog patterns allowed, full validation enforced
```

## 📁 Project Structure

### Generated SEAD Project
```
my-project/
├── sead.config.yaml              # Project configuration and mode settings
├── sead-catalog/                 # Project-specific catalog patterns
│   ├── api-contracts/            # API specifications and contracts
│   ├── shared-types/            # TypeScript interfaces and data models
│   ├── design-system/           # UI components and design patterns
│   ├── state-management/        # Store patterns and action schemas
│   ├── error-handling/          # Error types and handling patterns
│   ├── validation-schemas/      # Input validation and data constraints
│   ├── test-patterns/           # Test templates and fixtures
│   ├── auth-patterns/          # Authentication & authorization patterns
│   ├── integration-patterns/    # External service integration patterns
│   ├── data-strategy/          # Three-tier data management patterns
│   └── deployment-strategy/     # Three-tier deployment configuration
├── sead-workspace/              # Agent coordination workspace
│   ├── specifications/          # Constitutional specifications
│   ├── planning/               # Implementation plans and architecture
│   ├── stories/                # User stories with constraint validation
│   └── implementations/        # Implementation outputs and validation
└── docs/                       # Project documentation
```

### SEAD-METHOD Repository
```
SEAD-METHOD/
├── sead-core/                   # Core SEAD methodology
│   ├── agents/                  # 12 specialized AI agents
│   ├── constitutional-rules/    # Constitutional framework and constraints  
│   ├── tasks/                   # SEAD development tasks
│   ├── templates/              # SEAD templates and patterns
│   ├── workflows/              # SEAD orchestration workflows
│   └── checklists/             # Quality assurance checklists
├── sead-catalog-template/       # Template for project catalogs
├── examples/                   # Example SEAD projects and configurations
├── docs/                       # Comprehensive documentation
└── cli.js                      # Unified SEAD CLI interface
```

## 🎯 Key Benefits

### For Development Teams
- **Consistency** - Catalog patterns eliminate architectural drift between sessions
- **Quality** - Constitutional constraints enforce best practices automatically  
- **Flexibility** - Choose constraint level based on project phase and requirements
- **Speed** - AI agents accelerate development while maintaining standards

### For Organizations
- **Predictability** - Progressive validation prevents deployment surprises
- **Scalability** - Factory assembly approach scales to any team size
- **Knowledge Preservation** - Catalog captures and enforces organizational patterns
- **Risk Reduction** - Constitutional framework prevents common AI agent drift issues

## 📚 Documentation

### Getting Started
- [📖 User Guide](./docs/USER-GUIDE.md) - Complete methodology guide (36+ sections)
- [⚡ Quick Start Guide](./docs/QUICK-START.md) - 15-minute getting started walkthrough
- [💻 CLI Reference](./docs/CLI-REFERENCE.md) - Comprehensive command documentation

### Advanced Usage  
- [🏛️ Constitutional Framework Guide](./docs/CONSTITUTIONAL-FRAMEWORK-GUIDE.md) - Governance and constraints
- [🤖 Agent Coordination Guide](./docs/AGENT-COORDINATION-GUIDE.md) - Multi-agent workflow patterns

### Reference
- [Constitutional Checklists](./sead-core/checklists/) - Quality validation checklists
- [Implementation Analysis](./docs/BMAD-SPECKIT-INCORPORATION-ANALYSIS.md) - Methodology foundations

## 🔄 Development Workflow

SEAD-METHOD provides a complete development lifecycle:

1. **Constitutional Specification** - Define features with catalog awareness and constraint validation
2. **Agentic Planning** - Create implementation plans using specialized AI agents with constitutional compliance  
3. **Constraint-Aware Stories** - Generate user stories that respect catalog patterns and mode requirements
4. **Catalog-Driven Implementation** - Implement features using validated patterns with quality gates
5. **Progressive Validation** - Ensure compliance at each stage with mode-appropriate constraints

## 🤝 Contributing

SEAD-METHOD is an open methodology. We welcome contributions!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 🙏 Acknowledgments

SEAD-METHOD builds upon proven methodologies:
- **BMAD-METHOD™** - Agentic workflow orchestration and specialized agent ecosystems
- **Spec-Kit** - Constitutional specification-driven development and governance frameworks

## 🆘 Support

- 📖 [Documentation](./docs/)
- 🐛 [Issue Tracker](https://github.com/CodifiedIntuition/SEAD-METHOD/issues)
- 💬 [Discussions](https://github.com/CodifiedIntuition/SEAD-METHOD/discussions)
- 📧 [Email Support](mailto:support@sead-method.org)

---

**SEAD-METHOD™** - *Preventing AI agent drift through constitutional constraints and catalog-based patterns*

Built with ❤️ by the SEAD-METHOD community