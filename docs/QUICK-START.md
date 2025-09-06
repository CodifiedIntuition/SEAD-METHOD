# SEAD-METHOD™ Quick Start Guide

**Get up and running with SEAD in 15 minutes**

**Version**: 1.0  
**Date**: 2025-01-05  
**Status**: Production Ready

---

## What is SEAD?

SEAD-METHOD™ (Specification Enforced Agentic Agile Development) is a revolutionary development methodology that uses 12 specialized AI agents with constitutional constraints to deliver consistent, high-quality software development.

**Key Benefits**:
- 🏛️ **Constitutional compliance** prevents AI agent drift
- 📚 **Catalog patterns** ensure consistency across projects  
- 🤖 **12 AI agents** handle everything from planning to implementation
- ⚡ **3 development modes** scale from prototype to production

---

## Installation (3 minutes)

### Step 1: Install SEAD Package
```bash
# Install SEAD globally
npm install -g sead-method-core

# Verify installation
sead --version
```

### Step 2: Run Professional Installer
SEAD features a **BMAD-style professional installer** with interactive IDE setup:

```bash
# Interactive installation (recommended)
sead install

# The installer will ask you:
# 1. Which IDE you use (Claude Code, Cursor, VS Code, etc.)
# 2. Installation type (full, constitutional, or specific agents)
# 3. Where to install (.sead-core directory)
```

### Step 3: Verify Setup
```bash
# Check installation status  
sead status

# List available AI agents
sead list-agents

# Test agent availability
sead agents

# Expected output: 12 agents listed with descriptions
```

**🎉 Installation Complete!** SEAD agents are now available in your IDE:
- **Claude Code**: `/sead-architect`, `/sead-developer`
- **Cursor**: `@sead-architect`, `@sead-developer`
- **Other IDEs**: Commands generated based on your selection

---

## Your First SEAD Project (10 minutes)

### Step 1: Initialize Project (1 minute)

```bash
# Create new project in development mode
sead init my-first-app --mode development --template fullstack

# Navigate to project
cd my-first-app

# Check project structure
ls -la
```

**What was created**:
- `sead-workspace/` - Your specifications, plans, stories, implementations
- `sead-catalog/` - 11 domains of reusable patterns (API, UI, data, etc.)
- `sead.config.yaml` - Project configuration with constitutional constraints

### Step 2: Create Specification (2 minutes)

```bash
# Specify what you want to build
sead specify "Task management app with user authentication"
```

**What happens**:
- SEAD Analyst researches requirements
- Constitutional constraints ensure specification quality
- Output: `sead-workspace/specifications/frontend-spec-[timestamp].md`

**Check the output**:
```bash
ls sead-workspace/specifications/
cat sead-workspace/specifications/frontend-spec-*.md
```

### Step 3: Generate Plan (2 minutes)

```bash
# Create architectural plan with catalog integration
sead plan fullstack --catalog-mode development
```

**What happens**:
- SEAD Architect designs system architecture
- Catalog patterns ensure consistency
- Constitutional constraints prevent over-engineering
- Output: `sead-workspace/planning/fullstack-plan-[timestamp].md`

### Step 4: Create Stories (2 minutes)

```bash
# Generate implementation stories with catalog compliance
sead stories --enforce-catalog --context-preserve
```

**What happens**:
- SEAD Product Owner creates user stories
- SEAD Scrum Master validates story quality
- Stories reference catalog patterns
- Output: Multiple files in `sead-workspace/stories/`

**View your stories**:
```bash
ls sead-workspace/stories/
cat sead-workspace/stories/user-auth-001.md
```

### Step 5: Implement First Story (3 minutes)

```bash
# Implement authentication story with constitutional compliance
sead implement user-auth-001 --mode development --validate-compliance
```

**What happens**:
- SEAD Developer implements code using catalog patterns
- Constitutional constraints ensure quality
- Anti-drift protection maintains consistency
- Output: `sead-workspace/implementations/impl-user-auth-001-[timestamp].md`

**Check implementation**:
```bash
cat sead-workspace/implementations/impl-user-auth-001-*.md
```

### Step 6: Validate Project

```bash
# Check overall project health
sead status --detailed --constitutional-summary

# Validate constitutional compliance
sead validate --constitutional --catalog
```

---

## Understanding Your SEAD Project

### Project Structure
```
my-first-app/
├── sead.config.yaml           # SEAD configuration
├── sead-workspace/            # Your work artifacts
│   ├── specifications/        # What to build
│   ├── planning/             # How to build it  
│   ├── stories/              # Implementation tasks
│   └── implementations/      # Detailed implementation
└── sead-catalog/             # Reusable patterns
    ├── api-contracts/        # API patterns
    ├── shared-types/         # Data types
    ├── design-system/        # UI patterns
    ├── state-management/     # State patterns
    ├── error-handling/       # Error patterns
    ├── validation-schemas/   # Validation patterns
    ├── test-patterns/        # Testing patterns
    ├── auth-patterns/        # Authentication patterns
    ├── integration-patterns/ # Integration patterns
    ├── data-strategy/        # Data patterns
    └── deployment-strategy/  # Deployment patterns
```

### The SEAD Agents You Just Used

1. **🔍 SEAD Analyst** - Researched your requirements
2. **🏗️ SEAD Architect** - Designed your system architecture
3. **🎯 SEAD Product Owner** - Created user stories
4. **👥 SEAD Scrum Master** - Validated story quality
5. **💻 SEAD Developer** - Implemented your code

### Constitutional Framework

SEAD prevents AI agent drift through:
- **📚 Catalog Compliance**: All decisions reference proven patterns
- **🏛️ Constitutional Constraints**: Built-in quality guardrails
- **⚖️ Mode-Appropriate Governance**: Right amount of process for your project phase

---

## Development Modes Explained

### 🧪 Prototype Mode - Fast & Flexible
```bash
sead init prototype-app --mode prototype
```
- **When**: MVP, proof of concept, experimentation
- **Constraints**: Minimal - focus on speed
- **Quality Gates**: Basic functionality only

### 🔧 Development Mode - Balanced Quality
```bash
sead init production-app --mode development  
```
- **When**: Feature development, team collaboration
- **Constraints**: Progressive - balance speed with quality  
- **Quality Gates**: Testing, documentation, code review

### 🚀 Build-to-Deploy Mode - Maximum Reliability
```bash
sead init enterprise-app --mode build-to-deploy
```
- **When**: Production systems, enterprise applications
- **Constraints**: Strict - maximum quality and reliability
- **Quality Gates**: Full test suite, security review, performance validation

---

## Next Steps

### Continue with Your First Project
```bash
# Implement more stories
sead implement story-002 --mode development
sead implement story-003 --mode development

# Check project progress
sead status --detailed

# Validate full project when ready
sead validate --constitutional --catalog --end-to-end
```

### Try Different Project Types

**Backend API Project**:
```bash
sead init api-service --mode development --template backend
sead specify "REST API for user management with authentication"
sead plan backend --catalog-mode development
```

**Frontend Only Project**:
```bash
sead init ui-dashboard --mode development --template frontend  
sead specify "Analytics dashboard with real-time charts"
sead plan frontend --catalog-mode development
```

**Existing Project Integration** (Brownfield):
```bash
# Generate catalog from existing project
sead catalog generate --source ./existing-project --guided

# Initialize SEAD with generated catalog
sead init enhanced-project --catalog ./generated-catalog
```

### Explore Advanced Features

**Interactive Specification**:
```bash
sead specify "Complex e-commerce platform" --interactive
```

**Custom Agent Selection**:
```bash
sead implement ui-component-001 --agent sead-ux-expert
```

**Catalog Management**:
```bash
# Validate your catalog patterns
sead catalog validate --constitutional-compliance

# Initialize specific catalog domains
sead catalog init --domains api-contracts,auth-patterns
```

---

## Common Commands Reference

### Essential Commands
```bash
# Project lifecycle
sead init <project-name>              # Initialize project
sead specify <description>            # Create specification  
sead plan <tech-stack>               # Generate architecture plan
sead stories                         # Create implementation stories
sead implement <story-id>            # Implement story

# Project management
sead status                          # Check project status
sead validate                        # Validate project compliance
sead config list                     # View configuration

# Catalog management  
sead catalog generate --source <path> # Generate from existing project
sead catalog validate                # Validate catalog integrity
```

### Useful Options
```bash
# Development modes
--mode prototype          # Fast prototyping
--mode development       # Balanced development (default)
--mode build-to-deploy   # Production-ready

# Quality options
--constitutional-compliance    # Enforce constitutional constraints
--validate-compliance         # Validate during implementation
--enforce-catalog            # Require catalog pattern usage

# Output options
--interactive               # Interactive mode with prompts
--detailed                 # Detailed output and status
--verbose                  # Verbose logging
```

---

## Getting Help

### Built-in Help
```bash
# General help
sead --help

# Command-specific help
sead init --help
sead specify --help
sead implement --help

# Check system health
sead doctor

# View configuration
sead config list
```

### Debugging Issues
```bash
# Enable debug mode
sead --debug implement story-001

# Check constitutional compliance
sead validate --constitutional --verbose

# Verify catalog integration
sead catalog validate --detailed
```

### Documentation
- **📖 Full User Guide**: `docs/USER-GUIDE.md`
- **💻 CLI Reference**: `docs/CLI-REFERENCE.md`  
- **🏛️ Constitutional Framework**: `docs/CONSTITUTIONAL-FRAMEWORK-GUIDE.md`
- **🤖 Agent Coordination**: `docs/AGENT-COORDINATION-GUIDE.md`

### Community & Support
- **GitHub Issues**: [Report bugs and request features](https://github.com/CodifiedIntuition/SEAD-METHOD/issues)
- **Discussions**: [Ask questions and share experiences](https://github.com/CodifiedIntuition/SEAD-METHOD/discussions)
- **Documentation**: [Contribute improvements](https://github.com/CodifiedIntuition/SEAD-METHOD)

---

## Troubleshooting Quick Fixes

### "Constitutional constraint violation"
```bash
# Check what constraint was violated
sead validate --constitutional --detailed

# Review your agent's constraints
cat sead-core/constitutional-rules/sead-developer-constraints.yaml

# Fix: Align with catalog patterns or escalate properly
```

### "Catalog pattern not found"
```bash
# Verify catalog structure
ls sead-catalog/

# Validate catalog integrity
sead catalog validate

# Fix: Initialize missing catalog domains
sead catalog init --domains <missing-domain>
```

### "Agent coordination failed"
```bash
# Check handoff status
sead status --agent-status

# Review previous agent's output
cat sead-workspace/implementations/latest-*.md

# Fix: Re-run with proper context preservation
sead implement story-001 --context-preserve
```

---

## What's Next?

🎉 **Congratulations!** You've successfully:
- ✅ Set up your first SEAD project
- ✅ Used 5 different SEAD agents
- ✅ Generated specifications, plans, stories, and implementations
- ✅ Experienced constitutional compliance and catalog patterns

### Ready for More?

1. **📖 Read the Full User Guide** for comprehensive methodology understanding
2. **🏛️ Study Constitutional Framework** to understand governance in depth  
3. **🤖 Learn Agent Coordination** for advanced multi-agent workflows
4. **🏢 Scale to Team Projects** with collaborative SEAD development
5. **🌟 Contribute to SEAD** by sharing patterns and improvements

### Join the SEAD Community

SEAD-METHOD™ is revolutionizing AI-assisted development. Join us to:
- Share your success stories and learnings
- Contribute new catalog patterns
- Suggest constitutional framework improvements  
- Help other developers adopt SEAD methodology

**Welcome to the future of AI-assisted software development!** 🚀

---

**Document Version**: 1.0  
**Last Updated**: 2025-01-05  
**SEAD-METHOD™ Version**: 1.0  
**Status**: Production Ready

**Get started now**: `npm install -g sead-method-core && sead init my-project`