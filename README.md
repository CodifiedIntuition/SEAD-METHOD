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

**BREAKTHROUGH ACHIEVED**: Constitutional Framework Integration Complete!

SEAD-METHOD now includes comprehensive constraint enforcement that prevents AI agent drift through technical catalog validation - solving real problems teams face with AI development agents.

### ✅ Recent Milestones  
- **Constitutional Framework**: 7 core principles preventing AI agent drift through catalog constraints
- **Technical Constraint Enforcement**: Prevents type conflicts, style inconsistencies, API mismatches, linting errors
- **Agent-Specific Constraints**: Detailed validation rules for Developer (consumption) and Architect (creation) agents
- **Mode-Based Blocking**: Progressive restrictions preventing deployment surprises
- **12-Agent Ecosystem**: Complete SEAD agent conversion with constitutional compliance
- **Agent-Driven Catalog Generation**: AI-powered brownfield analysis and pattern extraction
- **Working CLI**: `sead init`, `sead status`, `sead catalog generate` commands operational

### 🎯 Next Phase
- **Agent Integration**: Apply constitutional constraints to all 12 SEAD agents
- **CLI Integration**: Connect constraints to `sead specify`, `sead plan`, `sead stories`, `sead implement` commands
- **Component Completion**: Port remaining BMAD/Spec-Kit functionality with constitutional compliance

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

### Catalog Structure
```
sead-catalog/
├── api-contracts/           # OpenAPI specs, contract definitions
├── shared-types/           # TypeScript interfaces, data models
├── design-system/          # Components, patterns, themes
├── state-management/       # Store patterns, action schemas
├── error-handling/         # Error types, handling patterns
├── validation-schemas/     # Input validation, data constraints
├── test-patterns/          # Test templates, fixtures
├── auth-patterns/         # Authentication & authorization
├── integration-patterns/   # External service patterns
├── data-strategy/          # Three-tier data management
└── deployment-strategy/    # Three-tier deployment system
```

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

- [📖 User Guide](./docs/user-guide.md) - Comprehensive usage documentation
- [🏗️ Architecture Guide](./docs/architecture.md) - System design and concepts  
- [📋 API Reference](./docs/api-reference.md) - Command and configuration reference
- [🔧 Extension Guide](./docs/extension-guide.md) - Customize and extend SEAD
- [❓ Troubleshooting](./docs/troubleshooting.md) - Common issues and solutions

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