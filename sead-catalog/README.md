# SEAD-METHOD Catalog

This catalog contains the constraint system for your SEAD-METHOD project.

## Structure

- **api-contracts/**: API specifications and contracts
- **shared-types/**: Common data models and type definitions
- **design-system/**: UI components and design patterns
- **state-management/**: State management patterns and schemas
- **error-handling/**: Error types and handling patterns
- **validation-schemas/**: Input validation and data constraints
- **test-patterns/**: Test templates and testing patterns
- **auth-patterns/**: Authentication and authorization patterns
- **integration-patterns/**: External service integration patterns
- **data-strategy/**: Three-tier data management system
- **deployment-strategy/**: Three-tier deployment system

## Usage

The catalog enforces constraints based on your development mode:

- **🧪 PROTOTYPE**: Minimal constraints, experimental extensions allowed
- **⚙️ DEVELOPMENT**: Catalog preferred, extensions tracked for migration
- **🏭 BUILD-TO-DEPLOY**: Strict catalog-only enforcement

## Commands

```bash
# Generate catalog from existing codebase
sead catalog generate --source ./existing-project

# Validate catalog integrity  
sead catalog validate

# Check project status
sead status
```
