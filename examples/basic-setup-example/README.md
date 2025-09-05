# Basic SEAD-METHOD Setup Example

This directory shows a basic SEAD-METHOD project setup after running `sead init`.

## What's Included

- `sead.config.yaml` - Basic SEAD project configuration
- Example project structure that would be created by `sead init`

## Purpose

This example demonstrates:
1. **Project Structure**: How SEAD projects are organized
2. **Configuration**: Basic SEAD configuration options
3. **Catalog Integration**: How projects connect to the catalog system

## Getting Started

To create a similar project:

```bash
# Initialize new SEAD project
sead init my-project-name

# The above command creates a structure similar to this example
```

## Next Steps

After initialization:
1. Generate catalog from existing code: `sead catalog generate --source ./existing-code`
2. Or start development: `sead specify "your feature description"`
3. Plan architecture: `sead plan "your tech stack"`
4. Create stories: `sead stories`
5. Implement: `sead implement story-id`

This example provides a reference for what `sead init` creates in your projects.