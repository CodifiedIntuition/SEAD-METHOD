#!/bin/bash
# SEAD Planning Workspace Setup - Adapted from Spec-Kit setup-plan.sh
# Sets up implementation plan structure and returns paths needed for planning
# Usage: ./sead-setup-planning-workspace.sh [--json]

set -e

JSON_MODE=false
for arg in "$@"; do
    case "$arg" in
        --json) JSON_MODE=true ;;
        --help|-h) echo "Usage: $0 [--json]"; exit 0 ;;
    esac
done

# Source SEAD common utilities
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/sead-common-utilities.sh"

# Get all SEAD paths
eval $(get_sead_feature_paths)

# Check if on feature branch (flexible SEAD checking)
check_feature_branch "$CURRENT_BRANCH" || {
    if $JSON_MODE; then
        printf '{"error":"Not on feature branch","branch":"%s"}\n' "$CURRENT_BRANCH"
        exit 1
    else
        echo "ERROR: Not on feature branch: $CURRENT_BRANCH"
        exit 1
    fi
}

# Check if SEAD project is initialized
check_sead_project "$REPO_ROOT" || exit 1

# Create SEAD workspace if it doesn't exist
create_sead_workspace "$REPO_ROOT"

# Create feature directory if it doesn't exist
mkdir -p "$FEATURE_DIR"

# Create planning directory in main workspace
mkdir -p "$PLANNING_DIR"

# Copy SEAD plan template if available
SEAD_PLAN_TEMPLATE="$REPO_ROOT/sead-core/templates/sead-spec-kit-plan-tmpl.yaml"
SPEC_KIT_TEMPLATE="$REPO_ROOT/templates/plan-template.md"  # Fallback
PLAN_FILE="$FEATURE_DIR/plan.md"

if [[ -f "$SEAD_PLAN_TEMPLATE" ]]; then
    echo "Using SEAD plan template"
    # Note: Will need template processing when templates are implemented
    touch "$PLAN_FILE"  # Placeholder
elif [[ -f "$SPEC_KIT_TEMPLATE" ]]; then
    echo "Using Spec-Kit template fallback"
    cp "$SPEC_KIT_TEMPLATE" "$PLAN_FILE"
else
    echo "Warning: No plan template found, creating minimal structure" >&2
    # Create minimal plan structure
    cat > "$PLAN_FILE" << 'EOF'
# Implementation Plan: [FEATURE]

**Branch**: `BRANCH_PLACEHOLDER` | **Date**: DATE_PLACEHOLDER | **Spec**: [link]
**SEAD Mode**: MODE_PLACEHOLDER
**Input**: Feature specification from `SPEC_FILE_PLACEHOLDER`

## Summary
[Extract from feature spec: primary requirement + technical approach]

## Technical Context
**Language/Version**: [e.g., Python 3.11, TypeScript 5.0]
**Primary Dependencies**: [e.g., FastAPI, Next.js, PostgreSQL]
**Storage**: [if applicable]
**Testing**: [e.g., pytest, vitest]
**Target Platform**: [e.g., Web, API, CLI]
**SEAD Catalog Patterns**: [patterns to use/extend]

## Constitutional Check
*SEAD Mode Constraints Review*

**Simplicity**: 
- Projects: [count] (SEAD mode allows [limit])
- Using framework directly?
- SEAD catalog patterns applied?

**Architecture**:
- Catalog integration planned?
- Mode constraints satisfied?
- Context preservation configured?

## Phase 0: Research
[Research requirements and unknowns]

## Phase 1: Design & Contracts
[API contracts, data models, catalog patterns]

## Phase 2: Task Planning
[Task breakdown approach - implemented by separate command]

## SEAD Integration

### Catalog Patterns
- [ ] Required patterns identified
- [ ] Pattern extensions planned  
- [ ] New patterns documented

### Mode Compliance
- [ ] SEAD_MODE_PLACEHOLDER constraints reviewed
- [ ] Quality gates defined
- [ ] Agent handoff prepared

### Context Preservation
- [ ] Implementation context package prepared
- [ ] QA validation requirements defined
- [ ] Cross-command artifact linking configured
EOF

    # Replace placeholders
    local current_mode=$(get_sead_mode "$REPO_ROOT")
    sed -i "s/BRANCH_PLACEHOLDER/$CURRENT_BRANCH/g" "$PLAN_FILE"
    sed -i "s/DATE_PLACEHOLDER/$(date +%Y-%m-%d)/g" "$PLAN_FILE"
    sed -i "s/SPEC_FILE_PLACEHOLDER/$FEATURE_SPEC/g" "$PLAN_FILE"
    sed -i "s/MODE_PLACEHOLDER/$current_mode/g" "$PLAN_FILE"
    sed -i "s/SEAD_MODE_PLACEHOLDER/$current_mode/g" "$PLAN_FILE"
fi

# Link plan to main planning directory (SEAD enhancement)
PLAN_LINK="$PLANNING_DIR/plan-$CURRENT_BRANCH.md"
ln -sf "../features/$CURRENT_BRANCH/plan.md" "$PLAN_LINK" 2>/dev/null || cp "$PLAN_FILE" "$PLAN_LINK"

# Get SEAD mode and catalog status
CURRENT_MODE=$(get_sead_mode "$REPO_ROOT")
eval $(check_catalog_status "$REPO_ROOT")

if $JSON_MODE; then
    printf '{"FEATURE_SPEC":"%s","IMPL_PLAN":"%s","FEATURE_DIR":"%s","PLANNING_DIR":"%s","BRANCH":"%s","SEAD_MODE":"%s","CATALOG_AVAILABLE":%s,"CATALOG_DOMAINS":%d}\n' \
        "$FEATURE_SPEC" "$PLAN_FILE" "$FEATURE_DIR" "$PLANNING_DIR" "$CURRENT_BRANCH" "$CURRENT_MODE" "$catalog_available" "$catalog_domains"
else
    # Output all paths for LLM use (spec-kit compatible)
    echo "FEATURE_SPEC: $FEATURE_SPEC"
    echo "IMPL_PLAN: $PLAN_FILE"
    echo "SPECS_DIR: $FEATURE_DIR"  # spec-kit compatibility
    echo "PLANNING_DIR: $PLANNING_DIR" 
    echo "BRANCH: $CURRENT_BRANCH"
    echo "SEAD_MODE: $CURRENT_MODE"
    echo "CATALOG_AVAILABLE: $catalog_available"
    echo "CATALOG_DOMAINS: $catalog_domains"
fi