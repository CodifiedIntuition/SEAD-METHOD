<!-- Powered by SEAD-METHOD™ Core -->

# SEAD Apply QA Fixes

Implement catalog-aware fixes based on SEAD QA results (gate and assessments) for a specific story with constitutional compliance and constraint enforcement. This task is for the SEAD Dev agent to systematically consume QA outputs and apply code/test changes while maintaining catalog compliance and only updating allowed sections in the story file.

## SEAD Mode Awareness

This fix application task operates with mode-sensitive constraints:
- **PROTOTYPE Mode**: Allow experimental fixes, document pattern discoveries
- **DEVELOPMENT Mode**: Prefer catalog patterns, track extensions for promotion
- **BUILD-TO-DEPLOY Mode**: STRICT catalog compliance, block non-catalog fixes

## Purpose

- Read SEAD QA outputs for a story (enhanced gate YAML + assessment markdowns)
- Create a prioritized, deterministic fix plan with catalog pattern integration
- Apply code and test changes using catalog patterns to close gaps and address issues
- Maintain constitutional compliance and catalog evolution tracking
- Update only the allowed story sections for the SEAD Dev agent

## Inputs

```yaml
required:
  - story_id: '{epic}.{story}' # e.g., "2.2"
  - qa_root: from `sead-config.yaml` key `qa.qaLocation` (e.g., `docs/project/qa`)
  - story_root: from `sead-config.yaml` key `devStoryLocation` (e.g., `docs/project/stories`)
  - sead_mode: '{prototype|development|build-to-deploy}' # Current development mode
  - catalog_path: from `sead-config.yaml` key `catalog.path`

optional:
  - story_title: '{title}' # derive from story H1 if missing
  - story_slug: '{slug}' # derive from title (lowercase, hyphenated) if missing
```

## SEAD Configuration and Catalog Context

**MANDATORY CATALOG READS** (Constitutional Requirement):
- Read `{catalogPath}/test-patterns/README.md` for testing fix patterns
- Read `{catalogPath}/error-handling/README.md` for error fix patterns
- Read `{catalogPath}/validation-schemas/README.md` for validation fix patterns
- Read story-relevant catalog domains based on identified issues
- Document catalog versions being used for fixes

## Enhanced SEAD QA Sources to Read

- **SEAD Gate (Enhanced YAML)**: `{qa_root}/gates/{epic}.{story}-*.yml`
  - If multiple, use the most recent by modified time
  - Includes SEAD-specific fields: `catalog_compliance`, `constraint_adherence`, `constitutional_compliance`
- **SEAD Assessments (Enhanced Markdown)**:
  - Test Design: `{qa_root}/assessments/{epic}.{story}-test-design-*.md`
  - Traceability: `{qa_root}/assessments/{epic}.{story}-trace-*.md`
  - Risk Profile: `{qa_root}/assessments/{epic}.{story}-risk-*.md`
  - NFR Assessment: `{qa_root}/assessments/{epic}.{story}-nfr-*.md`
  - **SEAD-specific**: `{qa_root}/assessments/{epic}.{story}-sead-*.md` (catalog compliance assessment)

## Prerequisites

- Repository builds and tests run locally
- SEAD configuration accessible and valid
- Catalog patterns available at specified path
- **SEAD Enhancement**: Current development mode constraints understood
- Lint and test commands available with catalog pattern validation

## SEAD Process (Do not skip steps)

### 0) Load SEAD Config & Validate Catalog Access

- Read `sead-config.yaml` and `sead-core/core-config.yaml`
- Resolve `qa_root`, `story_root`, `catalog_path`, and `sead_mode`
- **Constitutional Requirement**: Validate catalog pattern access and versions
- Locate story file in `{story_root}/{epic}.{story}.*.md`
  - HALT if missing and ask for correct story id/path
- **SEAD Enhancement**: Confirm current development mode and constraint levels

### 1) Collect Enhanced SEAD QA Findings

- Parse the latest SEAD gate YAML:
  - `gate` (PASS|CONCERNS|FAIL|CATALOG_VIOLATION|WAIVED)
  - `sead_mode` and constraint context
  - `catalog_compliance` status and violations
  - `constraint_adherence` status and violations
  - `constitutional_compliance` indicators
  - `top_issues[]` with enhanced categories including catalog compliance
  - `nfr_validation.*.status` with catalog pattern alignments
  - `trace` coverage summary/gaps with catalog test pattern usage
  - `test_design.coverage_gaps[]` with catalog pattern references
  - `risk_summary.recommendations.must_fix[]` including catalog compliance issues
- Read any present assessment markdowns and extract explicit gaps/recommendations
- **SEAD Enhancement**: Extract catalog pattern violations and extension opportunities

### 2) Build Enhanced SEAD Fix Plan (Priority Order)

Apply in order, highest priority first with SEAD constraints:

**Mode-Specific Priority Adjustment:**
- **BUILD-TO-DEPLOY Mode**: Catalog violations are BLOCKING (highest priority)
- **DEVELOPMENT Mode**: Catalog violations are high priority, extensions allowed if tracked
- **PROTOTYPE Mode**: Catalog violations are medium priority, experimentation allowed

**Priority Order:**
1. **Mode Constraint Violations** (BLOCKING in build-to-deploy mode)
2. **Catalog Compliance Issues** (per mode priority)
3. **High severity items** in `top_issues` (security/perf/reliability/maintainability)
4. **NFR statuses**: all FAIL must be fixed → then CONCERNS (using catalog patterns where available)
5. **Test Design** `coverage_gaps` (prioritize P0 scenarios using catalog test patterns)
6. **Trace uncovered requirements** (AC-level with catalog pattern integration)
7. **Risk** `must_fix` recommendations (with catalog pattern solutions)
8. **Medium severity issues**, then low (catalog pattern preferred)

**SEAD Enhancement - Catalog Integration Guidance:**
- Prefer catalog patterns over custom solutions when available
- Track extensions created (development mode) for future catalog promotion
- Document pattern usage for context preservation
- Block non-catalog solutions in build-to-deploy mode

### 3) Apply SEAD-Enhanced Changes

- **Constitutional Compliance**: Use catalog patterns for fixes where available
- Implement code fixes per plan using catalog patterns:
  - Error handling fixes using `catalog/error-handling/` patterns
  - Validation fixes using `catalog/validation-schemas/` patterns
  - Test fixes using `catalog/test-patterns/` patterns
  - API fixes using `catalog/api-contracts/` patterns
- Add missing tests to close coverage gaps (prefer catalog test patterns)
- **Mode-Sensitive Implementation**:
  - PROTOTYPE: Allow experimental fixes, document discoveries
  - DEVELOPMENT: Prefer catalog patterns, track custom extensions
  - BUILD-TO-DEPLOY: ONLY use catalog patterns, block custom solutions
- Follow project architecture AND catalog conventions
- **SEAD Enhancement**: Document catalog pattern usage for context preservation

### 4) Enhanced SEAD Validation

- Run lint and fix issues (include catalog pattern compliance where tooling exists)
- Run tests until all tests pass (include catalog compliance tests if available)
- **SEAD-Specific Validation**:
  - Verify catalog pattern usage is correct and version-consistent
  - Confirm mode constraints are respected
  - Check that extensions are properly documented (development mode)
  - Validate context preservation data is complete
- Iterate until clean AND catalog-compliant per mode constraints

### 5) Update Story (SEAD-Enhanced Allowed Sections ONLY)

CRITICAL: SEAD Dev agent is ONLY authorized to update these sections of the story file. Do not modify any other sections:

**Standard Allowed Sections:**
- Tasks / Subtasks Checkboxes (mark any fix subtask you added as done)
- Dev Agent Record →
  - Agent Model Used (if changed)
  - Debug Log References (commands/results, e.g., lint/tests/catalog validation)
  - Completion Notes List (what changed, why, how, catalog patterns used)
  - File List (all added/modified/deleted files)
- Change Log (new dated entry describing applied fixes with catalog context)
- Status (see Enhanced Status Rule below)

**SEAD-Enhanced Fields in Dev Agent Record:**
- **Catalog Patterns Used**: List catalog patterns applied during fixes
- **Extensions Created**: Document any custom patterns created (development mode only)
- **Mode Constraints Respected**: Confirm constraint adherence
- **Context Preservation**: Update agent handoff context

**Enhanced Status Rule:**
- If gate was PASS and all identified gaps are closed with catalog compliance → set `Status: Ready for Done`
- If gate was CATALOG_VIOLATION and violations persist → set `Status: Ready for Review` with mode constraint blocking note
- Otherwise → set `Status: Ready for Review` and notify SEAD QA to re-run the review

### 6) SEAD Gate File Interaction

- SEAD Dev does not modify gate YAML
- If fixes address issues with catalog patterns, request SEAD QA to re-run `sead-review-story` to update the gate
- **SEAD Enhancement**: Include catalog pattern usage summary in fix completion notes

## SEAD Blocking Conditions

- Missing `sead-config.yaml` or `sead-core/core-config.yaml`
- Story file not found for `story_id`
- Catalog patterns inaccessible or version conflicts
- No QA artifacts found (neither gate nor assessments)
- **Mode Constraint Violations**: 
  - BUILD-TO-DEPLOY mode with catalog pattern violations (BLOCKING until resolved)
  - Custom solutions required but catalog patterns exist (development/build-to-deploy modes)

## Enhanced SEAD Completion Checklist

**Standard Completion:**
- Lint: 0 problems
- Tests: all tests pass
- All high severity `top_issues` addressed
- NFR FAIL → resolved; CONCERNS minimized or documented

**SEAD-Specific Completion:**
- **Catalog Compliance**: Mode-appropriate catalog pattern usage verified
- **Constitutional Requirements**: All mandatory catalog reads completed and documented
- **Mode Constraints**: Constraint adherence verified and documented
- **Context Preservation**: Agent handoff context updated with catalog pattern usage
- **Pattern Evolution**: Extensions documented for catalog promotion (development mode)
- **Anti-Drift Protection**: Fixes align with catalog patterns and don't create new drift

## SEAD Example: Story 2.2 with Catalog Integration

Given SEAD gate `docs/project/qa/gates/2.2-*.yml` shows:

- `gate: CONCERNS`
- `catalog_compliance.status: partial`
- `catalog_compliance.patterns_violated: ['test-patterns/integration-test-v1.0.0']`
- `coverage_gaps`: Back action behavior untested (AC2) - should use catalog test pattern
- `coverage_gaps`: Centralized dependencies enforcement untested (AC4)

**SEAD Fix plan:**

1. **Address catalog test pattern violation**: Refactor test to use `catalog/test-patterns/integration-test-v1.0.0` for back action testing
2. **Add missing tests using catalog patterns**: Ensure Toolkit Menu "Back" action test uses catalog integration patterns
3. **Dependency enforcement test**: Add static test using catalog validation patterns for imports through `deps.ts`
4. **Document catalog usage**: Update Dev Agent Record with catalog patterns used
5. Re-run lint/tests including catalog compliance validation
6. Update Dev Agent Record + File List with catalog pattern context

## Key SEAD Principles

- **Constitutional Compliance**: Always use catalog patterns where available before creating custom solutions
- **Mode-Sensitive Constraints**: Respect current development mode constraints rigorously
- **Pattern Evolution**: Track extension opportunities for catalog promotion
- **Context Preservation**: Maintain complete catalog usage context for future agents
- **Anti-Drift Protection**: Ensure fixes don't create new technical drift from catalog standards
- **Quality Gates**: Include catalog compliance in all validation checkpoints
- **Deterministic prioritization**: Risk-first with catalog compliance integration
- **Minimal, catalog-aligned changes**: Use proven patterns over custom solutions
- **Strict adherence**: Only update allowed story sections, maintain catalog governance

## Constitutional Requirements

This task must adhere to SEAD constitutional principles:
1. **Catalog-First**: Use existing catalog patterns before creating custom solutions for fixes
2. **Specification-Driven**: All fix decisions reference QA findings, architecture, or catalog patterns
3. **Progressive Constraints**: Apply mode-appropriate constraint enforcement during fixes
4. **Context Preservation**: Update complete agent handoff context with catalog usage
5. **Collaborative Governance**: Enable QA re-review with catalog compliance context
6. **Quality Gates**: Include catalog compliance in fix validation
7. **Continuous Evolution**: Document pattern evolution opportunities discovered during fixes