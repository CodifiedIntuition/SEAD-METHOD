#!/bin/bash
# SEAD Feature Workspace Creation - Adapted from Spec-Kit create-new-feature.sh
# Creates feature branch, workspace structure, and initializes specification file
# Usage: ./sead-create-feature-workspace.sh "feature description"
#        ./sead-create-feature-workspace.sh --json "feature description"

set -e

JSON_MODE=false

# Collect non-flag args
ARGS=()
for arg in "$@"; do
    case "$arg" in
        --json)
            JSON_MODE=true
            ;;
        --help|-h)
            echo "Usage: $0 [--json] <feature_description>"; exit 0 ;;
        *)
            ARGS+=("$arg") ;;
    esac
done

FEATURE_DESCRIPTION="${ARGS[*]}"
if [ -z "$FEATURE_DESCRIPTION" ]; then
        echo "Usage: $0 [--json] <feature_description>" >&2
        exit 1
fi

# Source SEAD common utilities
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/sead-common-utilities.sh"

# Get repository root and check SEAD project
REPO_ROOT=$(get_repo_root)
check_sead_project "$REPO_ROOT" || exit 1

# Create SEAD workspace if it doesn't exist
create_sead_workspace "$REPO_ROOT"

# Get SEAD workspace and feature directories
SEAD_WORKSPACE=$(get_sead_workspace "$REPO_ROOT")
FEATURES_DIR="$SEAD_WORKSPACE/features"

# Find the highest numbered feature directory (maintaining spec-kit compatibility)
HIGHEST=0
if [ -d "$FEATURES_DIR" ]; then
    for dir in "$FEATURES_DIR"/*; do
        if [ -d "$dir" ]; then
            dirname=$(basename "$dir")
            number=$(echo "$dirname" | grep -o '^[0-9]\+' || echo "0")
            number=$((10#$number))
            if [ "$number" -gt "$HIGHEST" ]; then
                HIGHEST=$number
            fi
        fi
    done
fi

# Generate next feature number with zero padding
NEXT=$((HIGHEST + 1))
FEATURE_NUM=$(printf "%03d" "$NEXT")

# Create branch name from description (spec-kit compatible)
BRANCH_NAME=$(echo "$FEATURE_DESCRIPTION" | \
    tr '[:upper:]' '[:lower:]' | \
    sed 's/[^a-z0-9]/-/g' | \
    sed 's/-\+/-/g' | \
    sed 's/^-//' | \
    sed 's/-$//')

# Extract 2-3 meaningful words
WORDS=$(echo "$BRANCH_NAME" | tr '-' '\n' | grep -v '^$' | head -3 | tr '\n' '-' | sed 's/-$//')

# Final branch name
BRANCH_NAME="${FEATURE_NUM}-${WORDS}"

# Create and switch to new branch
git checkout -b "$BRANCH_NAME"

# Create feature directory
FEATURE_DIR="$FEATURES_DIR/$BRANCH_NAME"
mkdir -p "$FEATURE_DIR"
mkdir -p "$FEATURE_DIR/contracts"  # For API contracts

# Copy SEAD specification template if it exists
SEAD_SPEC_TEMPLATE="$REPO_ROOT/sead-core/templates/sead-spec-kit-specification-tmpl.yaml"
SPEC_TEMPLATE="$REPO_ROOT/templates/spec-template.md"  # Fallback to spec-kit
SPEC_FILE="$FEATURE_DIR/specification.md"

if [[ -f "$SEAD_SPEC_TEMPLATE" ]]; then
    # Use SEAD template (when available)
    echo "Using SEAD specification template"
    # Note: Will need template processing logic here when templates are implemented
    touch "$SPEC_FILE"  # Placeholder for now
elif [[ -f "$SPEC_TEMPLATE" ]]; then
    # Fallback to spec-kit template
    echo "Using Spec-Kit template fallback"
    cp "$SPEC_TEMPLATE" "$SPEC_FILE"
else
    echo "Warning: No specification template found" >&2
    # Create minimal specification structure
    cat > "$SPEC_FILE" << 'EOF'
# Feature Specification: [FEATURE NAME]

**Feature Branch**: `BRANCH_NAME_PLACEHOLDER`
**Created**: DATE_PLACEHOLDER
**Status**: Draft
**SEAD Mode**: development
**Input**: User description: "FEATURE_DESCRIPTION_PLACEHOLDER"

## User Scenarios & Testing

### Primary User Story
[Describe the main user journey]

### Acceptance Scenarios
1. **Given** [initial state], **When** [action], **Then** [expected outcome]

## Requirements

### Functional Requirements
- **FR-001**: System MUST [specific capability]

### Key Entities
- **[Entity]**: [Description]

## SEAD Integration

### Catalog Patterns
- [ ] API contracts: [patterns to use/create]
- [ ] Shared types: [types needed]
- [ ] Design system: [components needed]

### Constitutional Compliance
- [ ] Mode constraints satisfied
- [ ] Quality gates defined
- [ ] Context preservation configured
EOF

    # Replace placeholders
    sed -i "s/BRANCH_NAME_PLACEHOLDER/$BRANCH_NAME/g" "$SPEC_FILE"
    sed -i "s/DATE_PLACEHOLDER/$(date +%Y-%m-%d)/g" "$SPEC_FILE"
    sed -i "s/FEATURE_DESCRIPTION_PLACEHOLDER/$FEATURE_DESCRIPTION/g" "$SPEC_FILE"
fi

# Create additional SEAD workspace directories if they don't exist
mkdir -p "$SEAD_WORKSPACE/specifications"
mkdir -p "$SEAD_WORKSPACE/planning"
mkdir -p "$SEAD_WORKSPACE/stories"
mkdir -p "$SEAD_WORKSPACE/implementations"

# Link specification to main specifications directory (SEAD enhancement)
SPEC_LINK="$SEAD_WORKSPACE/specifications/spec-$BRANCH_NAME.md"
ln -sf "../features/$BRANCH_NAME/specification.md" "$SPEC_LINK" 2>/dev/null || cp "$SPEC_FILE" "$SPEC_LINK"

if $JSON_MODE; then
    printf '{"BRANCH_NAME":"%s","SPEC_FILE":"%s","FEATURE_NUM":"%s","FEATURE_DIR":"%s","SEAD_WORKSPACE":"%s"}\n' \
        "$BRANCH_NAME" "$SPEC_FILE" "$FEATURE_NUM" "$FEATURE_DIR" "$SEAD_WORKSPACE"
else
    # Output results for the LLM/CLI to use
    echo "BRANCH_NAME: $BRANCH_NAME"
    echo "SPEC_FILE: $SPEC_FILE"
    echo "FEATURE_NUM: $FEATURE_NUM"
    echo "FEATURE_DIR: $FEATURE_DIR"
    echo "SEAD_WORKSPACE: $SEAD_WORKSPACE"
fi