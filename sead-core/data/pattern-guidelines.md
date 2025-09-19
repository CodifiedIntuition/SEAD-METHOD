<!-- Powered by SEAD-METHOD™ Core -->

# SEAD Pattern Guidelines for Developers

This reference outlines how developers should reuse, extend, or introduce catalog patterns while preserving SEAD constitutional constraints.

## 1. Reuse First
- Search relevant catalog domains (`design-system/`, `api-contracts/`, `shared-types/`, `state-management/`, etc.) before creating new assets.
- When a request matches an existing pattern, document the reference (path + version) in your task output.
- Favor composition over modification; extend via configuration or slotting mechanisms provided by catalog patterns.

## 2. Evaluate Gaps Carefully
- If no pattern fits, confirm gap through `sead-constraint-validation.md` (capture requirements, constraints, impact).
- Collaborate with UX and architecture roles to verify the gap is real, not a misunderstanding of existing assets.
- Record evidence (user stories, technical blockers) that justify pattern evolution.

## 3. Propose New Patterns Responsibly
- Use `sead-pattern-extraction.md` to outline proposed additions or updates.
- Include anatomy, states, accessibility obligations, testing strategy, and migration path.
- Seek approval from catalog maintainers before implementation in build-to-deploy mode.

## 4. Keep Patterns Versioned & Traceable
- Increment pattern versions when behavior changes.
- Provide change logs referencing originating tasks or stories.
- Ensure deprecation paths exist; coordinate communication with impacted teams.

## 5. Align With Testing & Validation
- Tie new or updated patterns to catalog test templates in `test-patterns/`.
- Confirm accessibility tests cover new states.
- Update documentation artifacts (`design-system`, `shared-types`) immediately after implementation.

## Usage Notes
- Review these guidelines before running catalog-related tasks.
- Embed references to this document when capturing decisions in task outputs.
- If conflicting guidance arises, escalate per `constraint-matrix.md` rules.
