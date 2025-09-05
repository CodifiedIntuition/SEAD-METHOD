# SEAD-METHOD™

**Specification Enforced Agentic Agile Development**

A hybrid methodology that prevents AI agent drift through catalog-based constraint enforcement, combining the best of agentic workflows with constitutional specification-driven development.

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/sead-method/core)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE)
[![Node](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen.svg)](https://nodejs.org/)

## 🎯 The Problem

AI agents lose context between sessions, leading to:
- **Code/spec drift** - Implementation deviates from original specifications
- **Inconsistent patterns** - Different agents make conflicting architectural choices  
- **Deployment failures** - Issues discovered too late in the pipeline
- **Context loss** - Agents forget previous decisions across sessions

## 🚀 The SEAD Solution

**Catalog-based constraint enforcement** with three progressive development modes:

| Mode | Purpose | Constraints | AI Behavior | Validation |
|------|---------|-------------|-------------|------------|
| **🧪 PROTOTYPE** | Rapid experimentation | Minimal - can deviate from catalog | Creative, allows custom solutions | Basic linting |
| **⚙️ DEVELOPMENT** | Production-ready features | Must use catalog when available, can extend | Prefers catalog, documents new patterns | Type checking, contract validation |
| **🏭 BUILD-TO-DEPLOY** | Deployment-ready | STRICT - only catalog items | Factory assembly approach | Full compliance checking |

## 🚀 Current Status

**PRODUCTION READY**: Phase 7 Documentation System Complete! 🚀

SEAD-METHOD is now fully operational with comprehensive documentation, complete CLI implementation, and production-ready methodology for immediate adoption.

### ✅ Phase 7 Complete: Comprehensive Documentation & Quality System
- **📚 Complete Documentation Suite** (5 comprehensive guides):
  - **User Guide** - 36+ section methodology guide covering getting started to advanced usage
  - **CLI Reference** - 50+ command documentation with complete syntax and examples  
  - **Constitutional Framework Guide** - 40+ section governance guide with 7 core principles
  - **Agent Coordination Guide** - Multi-agent workflow and coordination documentation
  - **Quick Start Guide** - 15-minute getting started walkthrough
- **✅ Constitutional Checklists** (6 quality assurance checklists):
  - Architecture validation, Definition of Done, story validation, change management, requirements validation, project validation
- **🚀 Production Statistics**: 2,500+ lines of comprehensive documentation supporting real-world adoption

### ✅ Complete Phase Status
- **✅ Phase 1-6**: Foundation, Catalog System, Agent Ecosystem, Constitutional Framework, Task/Template Library, CLI Implementation
- **✅ Phase 7**: Documentation System and Quality Assurance - **COMPLETE!**

### ✅ Production-Ready Infrastructure
- **12-Agent Ecosystem**: Complete tiered constitutional constraint system preventing AI drift
- **4-Command CLI**: Full development lifecycle (`sead specify`, `sead plan`, `sead stories`, `sead implement`)
- **Catalog Generation**: AI-powered brownfield analysis and pattern extraction
- **Constitutional Framework**: 7 core principles with 12 agent-specific implementations
- **Complete Documentation**: User guides, CLI reference, framework guides, coordination documentation
- **Quality Assurance**: 6 constitutional checklists ensuring methodology compliance

## 📦 Installation

```bash
# Install globally
npm install -g @sead-method/core

# Or use directly
npx @sead-method/core init my-project
```

## 🏁 Quick Start

### Initialize a New Project
```bash
# Create new SEAD project
sead init my-project
cd my-project

# Check project status
sead status
```

### Core Workflow
```bash
# 1. Create constitutional specification  
sead specify "user authentication system" --mode development

# 2. Create agentic implementation plan
sead plan "Next.js + FastAPI + PostgreSQL" --catalog-mode development

# 3. Generate constraint-aware stories
sead stories --enforce-catalog --context-preserve

# 4. Implement with catalog constraints
sead implement auth-001 --mode development --validate-compliance
```

### Catalog Management
```bash
# Generate catalog from existing codebase (Brownfield)
sead catalog generate --source ./existing-project --interactive

# Initialize catalog for new project (Greenfield)  
sead catalog init --mode greenfield --track-patterns

# Validate catalog integrity
sead catalog validate
```

## 🏗️ Architecture

### Three-Tier Alignment
SEAD-METHOD operates on three aligned tiers that progress from flexibility to consistency:

#### Development Modes
- **🧪 PROTOTYPE**: Maximum creativity, minimal constraints
- **⚙️ DEVELOPMENT**: Catalog preferred, extensions tracked  
- **🏭 BUILD-TO-DEPLOY**: Strict catalog-only enforcement

#### Data Strategy
- **🎭 DEMO**: Full schema in simple storage (SQLite/JSON)
- **🏗️ MOCK**: Production-scale fake data in production storage
- **🏭 PRODUCTION**: Strict catalog-enforced schema validation

#### Deployment Strategy  
- **🏠 LOCAL-DEV**: Docker Compose with tunneling for sharing
- **☁️ CLOUD-STAGING**: Lightweight cloud with branch environments
- **🏭 PRODUCTION-DEPLOY**: Full CI/CD with blue/green deployment

## 📁 Repository Structure

```
SEAD-METHOD/ (root)
├── sead-core/                   # Core SEAD methodology
│   ├── agents/                  # 12 SEAD agents with catalog awareness
│   ├── constitutional-rules/    # Constitutional framework preventing drift
│   ├── tasks/                   # SEAD development tasks
│   ├── templates/               # SEAD templates and workflows
│   └── core-config.yaml         # SEAD system configuration
├── sead-catalog-template/       # Template for project catalogs
│   ├── api-contracts/           # API specifications and contracts
│   ├── shared-types/           # TypeScript interfaces, data models
│   ├── design-system/          # UI components and design patterns
│   ├── state-management/       # Store patterns, action schemas
│   ├── error-handling/         # Error types and handling patterns
│   ├── validation-schemas/     # Input validation, data constraints
│   ├── test-patterns/          # Test templates and fixtures
│   ├── auth-patterns/         # Authentication & authorization
│   ├── integration-patterns/   # External service integration
│   ├── data-strategy/          # Three-tier data management
│   └── deployment-strategy/    # Three-tier deployment system
├── examples/                    # Example SEAD projects
│   └── basic-setup-example/     # Basic project initialization example
├── cli.js                       # Unified SEAD CLI interface
├── package.json                 # NPM package configuration
└── docs/                        # Documentation and guides
```

### Clean Architecture Benefits
- **`sead-core/`**: The actual SEAD methodology (agents, rules, tasks, templates)
- **`sead-catalog-template/`**: Template copied to new projects via `sead init`
- **`examples/`**: Clear examples showing SEAD project setup
- **Root level**: Clean CLI interface and configuration

## 🤖 SEAD Agents

Enhanced AI agents with catalog awareness and constraint enforcement:

- **📊 SEAD Analyst** (Sarah) - Catalog-aware research and specification creation
- **🏗️ SEAD Architect** (Alexandra) - Catalog-driven system architecture
- **💻 SEAD Developer** (Jordan) - Catalog-compliant implementation
- **✅ SEAD QA** (Morgan) - Catalog compliance validation
- **📋 SEAD Scrum Master** (Taylor) - Constraint-aware story management

Each agent respects the current development mode and enforces appropriate catalog constraints.

## 📋 Available Commands

### Core Workflow
- `sead init [project]` - Initialize SEAD project
- `sead specify <description>` - Create constitutional specification  
- `sead plan <tech-stack>` - Create agentic implementation plan
- `sead stories` - Generate constraint-aware user stories
- `sead implement <story-id>` - Implement with catalog constraints

### Catalog Management
- `sead catalog generate` - Generate catalog from existing codebase
- `sead catalog init` - Initialize greenfield catalog
- `sead catalog validate` - Validate catalog integrity
- `sead catalog promote` - Promote patterns to higher catalog tier

### Project Management
- `sead status` - Show project status and catalog health
- `sead validate` - Validate project against current mode constraints

## 🔄 Workflow Examples

### Brownfield Adoption
```bash
# Generate catalog from existing project
sead catalog generate --source ./my-existing-app --interactive

# Start using SEAD with generated catalog
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

## 🎯 Key Benefits

### For Development Teams
- **Reduced Context Switching** - Catalog references eliminate confusion
- **Predictable Deployments** - Progressive validation prevents surprises  
- **Flexible Creativity** - Choose constraint level based on project phase
- **Faster Iteration** - Prototype mode removes blockers for experimentation

### For Organizations  
- **Quality Consistency** - Build-to-deploy mode ensures production standards
- **Risk Reduction** - Progressive validation catches issues early
- **Knowledge Preservation** - Catalog captures organizational patterns
- **Scalable Development** - Factory assembly approach scales to any team size

## 📚 Documentation

### 🚀 Production Documentation Suite
- [📖 User Guide](./docs/USER-GUIDE.md) - Complete 36+ section methodology guide
- [💻 CLI Reference](./docs/CLI-REFERENCE.md) - Comprehensive 50+ command documentation  
- [🏛️ Constitutional Framework Guide](./docs/CONSTITUTIONAL-FRAMEWORK-GUIDE.md) - In-depth 40+ section governance guide
- [🤖 Agent Coordination Guide](./docs/AGENT-COORDINATION-GUIDE.md) - Multi-agent workflow documentation
- [⚡ Quick Start Guide](./docs/QUICK-START.md) - 15-minute getting started walkthrough

### 📋 Quality Assurance Resources  
- [Constitutional Checklists](./sead-core/checklists/) - 6 comprehensive quality validation checklists
- [Implementation Analysis](./docs/BMAD-SPECKIT-INCORPORATION-ANALYSIS.md) - Methodology development details

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

SEAD-METHOD builds upon the foundations of:
- **BMAD-METHOD™** - Agentic workflow orchestration and agent ecosystem
- **Spec-Kit** - Constitutional specification-driven development

## 🆘 Support

- 📖 [Documentation](./docs/)
- 🐛 [Issue Tracker](https://github.com/sead-method/core/issues)
- 💬 [Discussions](https://github.com/sead-method/core/discussions)
- 📧 [Email Support](mailto:support@sead-method.org)

---

**SEAD-METHOD™** - *Preventing AI agent drift through catalog-based constraint enforcement*

Built with ❤️ by the SEAD-METHOD community