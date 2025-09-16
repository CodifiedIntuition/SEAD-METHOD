<!-- Powered by SEAD-METHOD™ Core -->

# Project Planning Workflow

Executable workflow to produce a catalog-aware, mode-compliant project plan and roadmap.

## Inputs
- Project context (specs/stories), current mode, catalog status

## Steps (Sequential)
1. Load `sead-core/core-config.yaml` and project config if present
2. Determine current mode and applicable constraints
3. Catalog assessment: coverage, gaps, extension needs
4. Define scope and deliverables aligned to catalog patterns
5. Create Project Plan from `sead-project-plan-tmpl.yaml`
6. Create Roadmap from `sead-roadmap-tmpl.yaml`
7. Create Risk Assessment from `sead-risk-assessment-tmpl.yaml`
8. Define Milestones from `sead-milestone-plan-tmpl.yaml`
9. Prepare Stakeholder Update from `sead-stakeholder-update-tmpl.yaml`
10. Validate with `sead-constraint-validation.md` and QA gate readiness

## Outputs
- Plan, Roadmap, Risk, Milestones, Stakeholder Update saved to planning/spec locations per discovery

