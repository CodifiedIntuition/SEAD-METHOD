#!/bin/bash
# SEAD Common Utilities - Adapted from Spec-Kit common.sh
# Provides shared functions for SEAD workspace and feature management

# Get repository root
get_repo_root() {
    git rev-parse --show-toplevel
}

# Get current branch
get_current_branch() {
    git rev-parse --abbrev-ref HEAD
}

# Check if current branch is a feature branch
# SEAD adaptation: More flexible branch naming, still supports spec-kit format
# Returns 0 if valid, 1 if not
check_feature_branch() {
    local branch="$1"
    # Support both spec-kit format (001-feature-name) and SEAD flexible format
    if [[ "$branch" =~ ^[0-9]{3}- ]] || [[ "$branch" =~ ^feature/ ]] || [[ "$branch" != "main" && "$branch" != "master" && "$branch" != "develop" ]]; then
        return 0
    else
        echo "WARNING: Branch '$branch' may not be a feature branch."
        echo "Supported formats: 001-feature-name, feature/name, or any non-main branch"
        return 1
    fi
}

# Get SEAD workspace directory (adaptation from spec-kit specs/ directory)
get_sead_workspace() {
    local repo_root="$1"
    echo "$repo_root/sead-workspace"
}

# Get feature directory path - supports both spec-kit and SEAD structures
get_feature_dir() {
    local repo_root="$1"
    local branch="$2"
    
    # Try SEAD workspace first
    local sead_workspace=$(get_sead_workspace "$repo_root")
    if [[ -d "$sead_workspace" ]]; then
        echo "$sead_workspace/features/$branch"
    else
        # Fallback to spec-kit structure for compatibility
        echo "$repo_root/specs/$branch"
    fi
}

# Get all standard paths for a SEAD feature
# Usage: eval $(get_sead_feature_paths)
# Sets: REPO_ROOT, CURRENT_BRANCH, FEATURE_DIR, FEATURE_SPEC, IMPL_PLAN, TASKS, STORIES_DIR
get_sead_feature_paths() {
    local repo_root=$(get_repo_root)
    local current_branch=$(get_current_branch)
    local feature_dir=$(get_feature_dir "$repo_root" "$current_branch")
    local sead_workspace=$(get_sead_workspace "$repo_root")
    
    echo "REPO_ROOT='$repo_root'"
    echo "CURRENT_BRANCH='$current_branch'"
    echo "SEAD_WORKSPACE='$sead_workspace'"
    echo "FEATURE_DIR='$feature_dir'"
    echo "FEATURE_SPEC='$feature_dir/specification.md'"
    echo "IMPL_PLAN='$feature_dir/plan.md'"
    echo "TASKS='$feature_dir/tasks.md'"
    echo "RESEARCH='$feature_dir/research.md'"
    echo "DATA_MODEL='$feature_dir/data-model.md'"
    echo "QUICKSTART='$feature_dir/quickstart.md'"
    echo "CONTRACTS_DIR='$feature_dir/contracts'"
    echo "STORIES_DIR='$sead_workspace/stories'"
    echo "IMPLEMENTATIONS_DIR='$sead_workspace/implementations'"
    echo "PLANNING_DIR='$sead_workspace/planning'"
}

# SEAD-specific: Get catalog directory
get_catalog_dir() {
    local repo_root="$1"
    echo "$repo_root/sead-catalog"
}

# SEAD-specific: Check if SEAD project is initialized
check_sead_project() {
    local repo_root="$1"
    if [[ -f "$repo_root/sead.config.yaml" ]]; then
        return 0
    else
        echo "ERROR: No SEAD project found. Run 'sead init' first."
        return 1
    fi
}

# SEAD-specific: Get development mode from config
get_sead_mode() {
    local repo_root="$1"
    local config_file="$repo_root/sead.config.yaml"
    
    if [[ -f "$config_file" ]]; then
        # Extract mode using basic parsing (could enhance with yq if available)
        grep -E "^\s*mode:" "$config_file" | head -1 | sed 's/.*mode:\s*//' | tr -d '"'"'"' '
    else
        echo "development"  # default fallback
    fi
}

# Check if a file exists and report (from spec-kit)
check_file() {
    local file="$1"
    local description="$2"
    if [[ -f "$file" ]]; then
        echo "  ✓ $description"
        return 0
    else
        echo "  ✗ $description"
        return 1
    fi
}

# Check if a directory exists and has files (from spec-kit)
check_dir() {
    local dir="$1"
    local description="$2"
    if [[ -d "$dir" ]] && [[ -n "$(ls -A "$dir" 2>/dev/null)" ]]; then
        echo "  ✓ $description"
        return 0
    else
        echo "  ✗ $description"
        return 1
    fi
}

# SEAD-specific: Validate catalog availability
check_catalog_status() {
    local repo_root="$1"
    local catalog_dir=$(get_catalog_dir "$repo_root")
    
    if [[ -d "$catalog_dir" ]]; then
        local domain_count=$(find "$catalog_dir" -type d -mindepth 1 -maxdepth 1 | wc -l)
        echo "catalog_available=true"
        echo "catalog_domains=$domain_count"
        return 0
    else
        echo "catalog_available=false"
        echo "catalog_domains=0"
        return 1
    fi
}

# SEAD-specific: Create SEAD workspace structure
create_sead_workspace() {
    local repo_root="$1"
    local sead_workspace=$(get_sead_workspace "$repo_root")
    
    mkdir -p "$sead_workspace/specifications"
    mkdir -p "$sead_workspace/planning" 
    mkdir -p "$sead_workspace/stories"
    mkdir -p "$sead_workspace/implementations"
    mkdir -p "$sead_workspace/features"
    
    echo "Created SEAD workspace at: $sead_workspace"
}