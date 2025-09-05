# SEAD Catalog Template

This directory contains the template structure for SEAD-METHOD catalog systems. When you initialize a new SEAD project, this template is used to create your project's catalog structure.

## Purpose

The SEAD catalog is the core constraint system that prevents AI agent drift by providing:
- **Approved patterns** that agents must use in build-to-deploy mode
- **Context preservation** through catalog references across sessions
- **Progressive constraints** that increase from prototype to production

## Directory Structure

```
sead-catalog/
├── api-contracts/           # API specifications, OpenAPI schemas, service contracts
├── shared-types/           # TypeScript interfaces, data models, common types
├── design-system/          # UI components, design tokens, style guidelines
├── state-management/       # Store patterns, action schemas, state structures
├── error-handling/         # Error types, handling patterns, user messages
├── validation-schemas/     # Input validation, data constraints, form schemas
├── test-patterns/          # Test templates, fixtures, testing utilities
├── auth-patterns/         # Authentication & authorization patterns
├── integration-patterns/   # External service integration templates
├── data-strategy/          # Three-tier data management
│   ├── demo-data/          # SQLite fixtures for prototyping
│   ├── mock-data/          # Production-scale generated data
│   ├── production-schemas/ # Live database schemas
│   ├── data-contracts/     # Data model contracts
│   └── seeding-patterns/   # Database initialization templates
└── deployment-strategy/    # Three-tier deployment system
    ├── local-dev/          # Docker Compose, development setup
    ├── cloud-staging/      # Lightweight cloud deployment
    ├── production-deploy/  # Full CI/CD, infrastructure as code
    ├── deployment-contracts/ # Environment configuration contracts
    └── infrastructure-patterns/ # Reusable infrastructure templates
```

## How It's Used

1. **Project Initialization**: `sead init` copies this template to your project
2. **Catalog Generation**: `sead catalog generate` populates it from existing code
3. **Agent Constraints**: SEAD agents read from catalog during development
4. **Mode Enforcement**: Different constraint levels based on development mode

## Three Development Modes

| Mode | Catalog Usage | Purpose |
|------|---------------|---------|
| **🧪 Prototype** | Optional reference | Rapid experimentation |
| **⚙️ Development** | Preferred patterns | Production-ready features |
| **🏭 Build-to-Deploy** | Mandatory compliance | Deployment-ready code |

## Getting Started

To use this template in a new project:

```bash
# Initialize new SEAD project (copies this template)
sead init my-project

# Generate catalog from existing codebase
sead catalog generate --source ./existing-code --interactive
```

This template structure ensures consistent constraint enforcement and context preservation across all SEAD-METHOD projects.
