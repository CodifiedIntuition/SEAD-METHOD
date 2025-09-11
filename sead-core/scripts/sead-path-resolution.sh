#!/bin/bash
# SEAD Path Resolution - Adapted from Spec-Kit get-feature-paths.sh
# Get paths for current feature branch without creating anything
# Used by commands that need to find existing feature files

set -e

# Source SEAD common utilities
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/sead-common-utilities.sh"

# Get all SEAD paths
eval $(get_sead_feature_paths)

# Check if on feature branch (flexible SEAD checking)
check_feature_branch "$CURRENT_BRANCH" || exit 1

# Output paths (don't create anything - read-only operation)
echo "REPO_ROOT: $REPO_ROOT"
echo "BRANCH: $CURRENT_BRANCH"
echo "SEAD_WORKSPACE: $SEAD_WORKSPACE"
echo "FEATURE_DIR: $FEATURE_DIR"
echo "FEATURE_SPEC: $FEATURE_SPEC"
echo "IMPL_PLAN: $IMPL_PLAN"
echo "TASKS: $TASKS"
echo "RESEARCH: $RESEARCH"
echo "DATA_MODEL: $DATA_MODEL"
echo "QUICKSTART: $QUICKSTART"
echo "CONTRACTS_DIR: $CONTRACTS_DIR"
echo "STORIES_DIR: $STORIES_DIR"
echo "IMPLEMENTATIONS_DIR: $IMPLEMENTATIONS_DIR"
echo "PLANNING_DIR: $PLANNING_DIR"

# SEAD-specific additions
CATALOG_DIR=$(get_catalog_dir "$REPO_ROOT")
CURRENT_MODE=$(get_sead_mode "$REPO_ROOT")
echo "CATALOG_DIR: $CATALOG_DIR"
echo "SEAD_MODE: $CURRENT_MODE"

# Check SEAD project status
if check_sead_project "$REPO_ROOT"; then
    echo "SEAD_PROJECT: true"
else
    echo "SEAD_PROJECT: false"
fi

# Check catalog status
eval $(check_catalog_status "$REPO_ROOT")
echo "CATALOG_STATUS: $catalog_available"
echo "CATALOG_DOMAIN_COUNT: $catalog_domains"