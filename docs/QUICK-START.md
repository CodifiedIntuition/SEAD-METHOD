# SEAD-METHOD™ Quick Start Guide

**Get up and running with SEAD in 15 minutes**

**Version**: 1.3.5-beta.1  
**Date**: 2025-09-17  
**Status**: Production Ready

---

## What is SEAD?

SEAD-METHOD™ (Specification Enforced Agentic Agile Development) is a revolutionary development methodology that uses 14 specialized AI agents with constitutional constraints to deliver consistent, high-quality software development.

**Key Benefits**:
- 🏛️ **Constitutional AI agents** prevent drift and ensure quality
- 📚 **Catalog-driven patterns** ensure consistency across projects  
- 🤖 **14 specialized agents** handle everything from analysis to deployment
- ⚡ **3 development modes** scale from prototype to production
- 🔄 **External asset integration** adopts existing design systems and APIs
- 📋 **Comprehensive validation** with 25+ checklists and quality gates

---

## Installation (3 minutes)

### Step 1: Install SEAD Package
```bash
# Install SEAD globally
npm install -g sead-method-core

# Verify installation
sead --version
```

### Step 2: Initialize Your Project
```bash
# Create new project (or navigate to existing project)
sead init my-project
cd my-project

# Install SEAD methodology and IDE integration
sead install

# Check installation status
sead status
```

**What just happened?**
- ✅ Created `.sead-core/` with 14 AI agents, 67+ tasks, 40+ templates
- ✅ Set up IDE integration (Claude Code, Cursor, VS Code, etc.)
- ✅ Initialized project catalog structure
- ✅ Configured constitutional framework

---

## Your First SEAD Workflow (10 minutes)

### Step 3: Specify Your Project (2 minutes)
```bash
# Create constitutional specification
sead specify "task management application with user authentication" --mode development
```

**Output**: Creates specification document with:
- Constitutional requirements
- Catalog integration points
- Development mode constraints
- Quality validation requirements

### Step 4: Plan Implementation (2 minutes)
```bash
# Generate implementation plan
sead plan "Next.js frontend + FastAPI backend + PostgreSQL" --catalog-integration
```

**Output**: Creates implementation plan with:
- Architecture breakdown
- Technology stack validation
- Catalog pattern recommendations
- Constitutional compliance requirements

### Step 5: Create Project Catalog (3 minutes)
```bash
# Interactive catalog creation (for new projects)
sead interactive-catalog-creation --guided

# OR for existing codebases
sead brownfield-catalog-generation --source ./src
```

**Output**: Creates project catalog with:
- Validated patterns and components
- API contracts and interfaces
- Design system integration points
- Constitutional validation rules

### Step 6: Generate Stories and Implement (3 minutes)
```bash
# Create implementation stories
sead stories --enforce-catalog --mode development

# Implement first feature with quality gates
sead implement auth-001 --qa-gate --validate-compliance
```

**Output**: Creates:
- Constitutional user stories
- Implementation with catalog compliance
- Quality validation reports
- Constitutional compliance verification

---

## Development Modes Explained

SEAD operates in three modes with progressive constraint enforcement:

| Mode | When to Use | Constraints | Validation |
|------|-------------|-------------|------------|
| **🧪 PROTOTYPE** | Rapid experimentation, proof of concepts | Minimal - creative freedom | Basic linting |
| **⚙️ DEVELOPMENT** | Production features, team development | Must use catalog when available | Type checking, compliance validation |
| **🏭 BUILD-TO-DEPLOY** | Deployment-ready code | STRICT - only catalog patterns | Full compliance checking |

### Switch Modes Anytime
```bash
# Start with prototype for experimentation
sead specify "innovative UI concept" --mode prototype

# Move to development for implementation
sead implement ui-concept --mode development

# Finalize for deployment
sead verify-build --mode build-to-deploy
```

---

## IDE Integration (Already Set Up!)

SEAD automatically detected and configured your IDE during installation:

### Claude Code (Recommended)
```bash
# Use SEAD agents directly in Claude Code
/sead-architect "Design microservices architecture for user management"
/sead-developer "Implement login component using catalog patterns"
/sead-qa "Review authentication flow for constitutional compliance"
```

### Cursor
```bash
# Use SEAD agents in Cursor chat
@sead-architect Design scalable database schema
@sead-developer Implement API endpoints with validation
@sead-orchestrator Coordinate multi-agent feature development
```

### Other IDEs
SEAD supports 15+ IDEs including VS Code, Windsurf, Cline, and more with automatic configuration.

---

## External Asset Integration

### Integrate Existing Assets (5 minutes)
```bash
# 1. Analyze external assets
sead external-asset-analysis --source ./external-assets/

# 2. Generate adoption strategy  
sead external-adoption-strategy --timeline "2-weeks"

# 3. Transform and integrate
sead catalog integrate-external --source ./external-assets/ --transform

# 4. Validate integration
sead external-asset-validation --compliance-level strict
```

**Supported Assets**:
- 🎨 **Design Systems**: Figma exports, design tokens, style guides
- 📦 **Component Libraries**: React/Vue/Angular components, Storybook exports
- 🔗 **API Specifications**: OpenAPI/Swagger specs, GraphQL schemas
- 🧩 **Pattern Collections**: Authentication flows, integration patterns

---

## Common Workflows

### For New Projects
```bash
sead init my-app
sead install
sead specify "project description" --mode development
sead interactive-catalog-creation --guided
sead plan "technology stack" --catalog-integration
sead stories --enforce-catalog
sead implement feature-001 --qa-gate
```

### For Existing Projects (Brownfield)
```bash
sead install  # In existing project directory
sead brownfield-catalog-generation --source ./src
sead pattern-extraction-workflow --validate-patterns
sead specify "new feature description" --mode development
sead implement feature-002 --catalog-only
```

### For External Asset Adoption
```bash
sead external-asset-analysis --source ./design-system/
sead external-adoption-strategy --risk-level low
sead catalog integrate-external --validate-compliance
sead stories --mode development  # Using integrated assets
```

---

## Quality Assurance & Validation

### Built-in Quality Gates
```bash
# Constitutional compliance check
sead constitutional-validation-workflow

# Catalog pattern validation
sead catalog validate --strict

# Comprehensive QA gate
sead qa-gate --full-validation

# Build readiness verification
sead verify-build --mode build-to-deploy
```

### Project Health Check
```bash
# Overall project status
sead project-status --verbose

# Deployment readiness
sead project-status --deployment-ready

# Constitutional compliance summary
sead project-status --compliance-summary
```

---

## Next Steps

### Explore Advanced Features
1. **Multi-Agent Coordination**: Use `sead-orchestrator` for complex workflows
2. **Pattern Extraction**: Extract patterns from legacy code with `sead pattern-extraction-workflow`
3. **External Integration**: Adopt existing design systems and APIs seamlessly
4. **Constitutional Customization**: Customize agent constraints for your organization

### Learn More
- 📖 [Complete User Guide](./USER-GUIDE.md) - Comprehensive methodology guide
- 💻 [CLI Reference](./CLI-REFERENCE.md) - All commands and options
- 🏛️ [Constitutional Framework](./CONSTITUTIONAL-FRAMEWORK-GUIDE.md) - Constraint system details
- 🤖 [Agent Coordination](./AGENT-COORDINATION-GUIDE.md) - Multi-agent patterns

### Get Help
```bash
# Command help
sead --help
sead specify --help

# Agent information
sead list-agents --detailed

# Project troubleshooting
sead status --verbose
```

---

## Troubleshooting

### Installation Issues
```bash
# Check installation
sead status

# Reinstall if needed
sead uninstall
sead install

# Manual IDE setup
sead install --ide manual
```

### Validation Errors
```bash
# Check catalog compliance
sead catalog validate --verbose

# Validate constitutional compliance
sead constitutional-validation-workflow

# Fix common issues
sead pattern-quality-assessment
```

### Agent Issues
```bash
# List available agents
sead list-agents

# Reset agent configurations
sead update --reset-agents
```

---

## Success! You're Ready for SEAD Development

You now have:
- ✅ **SEAD installed** with IDE integration
- ✅ **14 AI agents** ready for constitutional development
- ✅ **Project catalog** for pattern consistency
- ✅ **Quality gates** for validation and compliance
- ✅ **External integration** capability for existing assets

**Start developing with constitutional AI agents that never drift!**

```bash
# Begin your first constitutional development cycle
sead specify "your next amazing feature" --mode development
```

---

*For additional support, visit the [SEAD-METHOD repository](https://github.com/CodifiedIntuition/SEAD-METHOD) or check the comprehensive [User Guide](./USER-GUIDE.md)*