# 02 — Overlap Analysis (Tasks, Checklists, Data, Templates, Workflows)

Goal: identify families of files with overlapping intent, then propose consolidation boundaries.

Patterns family (lifecycle)
- Identification: `pattern-identification-workflow.md`
- Extraction: `pattern-extraction-workflow.md`, `sead-pattern-extraction.md`
- Classification: `pattern-classification-workflow.md`
- Documentation: `pattern-documentation-workflow.md`
- Quality: `pattern-quality-assessment.md`
- Overlap: extraction vs documentation contain parallel sections for abstraction, examples, QA.
- Recommendation: keep “workflow” series as lifecycle phases; reduce duplicated guidance by referencing the lifecycle index from each phase. Make `sead-pattern-extraction.md` the short, operator-style entrypoint that calls into the lifecycle.

Catalog family
- Greenfield: `greenfield-catalog-bootstrap.md`, `interactive-catalog-creation.md`
- Brownfield: `brownfield-catalog-generation.md`
- Structure: `catalog-taxonomy-design.md`
- Validation: `catalog-validation-workflow.md`, `sead-catalog-compliance-check.md`
- Dependency insights: `catalog-dependency-analysis.md`
- Overlap: several tasks repeat validation and taxonomy touchpoints.
- Recommendation: consolidate to three canonical tasks: 1) `catalog-bootstrap` (greenfield+brownfield params), 2) `catalog-structure` (taxonomy+dependency mapping), 3) `catalog-validate` (validation and compliance checks). Keep brownfield details under one task with plan sections.

Story creation family
- `sead-create-story.md`, `sead-create-next-story.md`, `sead-brownfield-create-story.md`
- Overlap: “next story” is a superset of basic story creation; brownfield adds source mapping.
- Recommendation: make `sead-create-story` canonical with flags: `--next` (sequence logic) and `--brownfield` (source linking). Keep brownfield-specific doc, but route agents to the canonical entry when automated.

Constraint validation family
- `sead-constraint-validation.md` (dev), `constitutional-validation-workflow.md` (PO/governance)
- Overlap: both validate against constraints; audiences differ.
- Recommendation: keep both but explicitly cross-link (PO → dev and dev → PO) and name them with audience clarity in agent dependencies.

External asset integration family
- `external-asset-analysis.md`, `external-design-system-transformation.md`, `external-api-contract-transformation.md`, `external-asset-validation.md`, `external-adoption-strategy.md`
- Overlap: analysis/validation repeat structure with domain-specific details.
- Recommendation: keep discrete tasks (DS vs API), but centralize common “external asset” intro and validation steps into a shared preface referenced by each task.

UX/design family
- `wireframe-creation-workflow.md`, `prototype-design-workflow.md`, `user-research-planning-workflow.md`, `accessibility-audit-workflow.md`, `design-system-analysis.md`, `ux-validation-workflow.md`, `design-pattern-evaluation.md`
- Overlap: multiple tasks re-assert mode matrix and design-system guidance.
- Recommendation: keep specialized tasks; factor “mode-aware UX checklist” into one data/checklist reference and link to it across tasks.

Planning/PM family
- `project-planning-workflow.md`, `resource-optimization-workflow.md`, `backlog-prioritization-workflow.md`, `mode-transition-planning.md`, `sprint-planning-workflow.md`, `story-refinement-workflow.md`
- Overlap: checklists for readiness and mode considerations repeated.
- Recommendation: standardize on a “planning preflight” short checklist and link in each planning task.

Checklists family
- Constitutional, PO/PM, Architect, UX/Design System/Accessibility, Story Draft/DoD, Brownfield, Catalog Generation/Readiness/Compliance
- Overlap: multiple checklists ask for mode check and catalog references.
- Recommendation: keep role-specific checklists but point their “mode section” to a shared data document (`mode-constraint-matrix.md`) and avoid repeating that content.

Templates family
- Many specialized YAML templates; several referenced templates are missing (see 00-Inventory).
- Overlap: multiple spec templates share structure; the story and QA gate templates are canonical.
- Recommendation: define a core “spec spine” (title, context, mode, catalog refs, validation) and extend per domain; remove unused references and add missing ones or re-point agents.

Workflows family
- Six files split by {greenfield|brownfield} × {ui|service|fullstack}; sequences largely overlap.
- Recommendation: a single `sead-application.yaml` with params: `project_type`, `scope`, `mode`, and optional toggles for v0/AI UI steps.

