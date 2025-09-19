<!-- Powered by SEAD-METHOD™ Core -->

# SEAD Create Story

Create a SEAD story using the standard template with catalog references and draft validation.

## Purpose
Generate a story that is ready for refinement and validation against catalog/mode constraints.

## Prerequisites
- Read `sead-core/core-config.yaml` for discovery paths and mode
- Identify relevant catalog patterns and acceptance criteria templates

## Steps
1. Load `sead-core/templates/sead-story-tmpl.yaml`
2. Fill user value, acceptance criteria, and catalog references
3. Save to stories location (per discovery paths)
4. Run `execute-checklist` with `sead-story-draft-checklist.md`
5. If brownfield context, cross-link with `sead-brownfield-create-story.md`

## Outputs
- Story markdown saved in workspace/docs stories folder

## Notes
- Use `sead-validate-next-story.md` for early validation

