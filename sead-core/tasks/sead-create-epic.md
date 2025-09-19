<!-- Powered by SEAD-METHOD™ Core -->

# SEAD Create Epic

Create a catalog-aware epic document using the standard template and SEAD constraints.

## Purpose
Produce an executable epic artifact that references catalog patterns and aligns with current mode.

## Prerequisites
- Read `sead-core/core-config.yaml` for mode and discovery paths
- Catalog scan completed for relevant domains

## Steps
1. Load template `sead-core/templates/sead-epic-tmpl.yaml`
2. Populate sections with catalog references (API, shared types, design system)
3. Note mode constraints that apply to scope
4. Save epic to the configured stories/planning location (per discovery paths)
5. Run `execute-checklist` with `sead-story-draft-checklist.md`

## Outputs
- Epic document (YAML/MD) saved under workspace or docs per config

## Constitutional Notes
- Prefer catalog patterns; document any extensions and promotion plans

