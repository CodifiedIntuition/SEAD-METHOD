# Catalog Pattern Validation Module

**Purpose:** Standard catalog compliance and pattern validation used across all SEAD checklists.

## LLM Catalog Preparation
```
1. Load `/sead-core/data/design-system-guidelines.md`
2. Load `/sead-core/data/ui-pattern-library.md` 
3. Load `/sead-core/data/mode-constraint-matrix.md`
4. Load `/sead-core/data/catalog-pattern-priorities.md`
5. Confirm access to relevant catalog directories (project-supplied runtime assets)
```

## Catalog Reference Integrity
- [ ] Each deliverable cites catalog components/layouts/themes using canonical names
- [ ] New pattern proposals include rationale and link to design-pattern-evaluation outcomes
- [ ] All variations list applicable mode(s) and validation status
- [ ] Catalog references formatted as numbered lists for easy selection
- [ ] Pattern gaps identified and assigned to pattern extraction if needed

## Catalog Stewardship
- [ ] Catalog compliance status recorded for each item
- [ ] Pattern evolution proposals follow governance workflow
- [ ] Anti-drift safeguards (reviews, validation gates) scheduled
- [ ] Catalog maintainer notified when new patterns or updates require publishing

## Mode-Specific Catalog Compliance
- [ ] **Prototype mode:** Experimentation documented, deviations flagged for follow-up
- [ ] **Development mode:** Catalog-first approaches used; deviations justified and scheduled for migration
- [ ] **Build-to-deploy mode:** No deviations; confirm zero custom patterns introduced
- [ ] Catalog dependency analysis captured for sequencing and planning

## Catalog Exit Validation
- [ ] All catalog components referenced are available and validated
- [ ] Deviation documentation complete with mitigation plans
- [ ] Pattern extraction tasks created for reusable elements
- [ ] Catalog impact communication prepared for stakeholders

## Module Parameters
When importing this module, specify:
- `artifact_type`: The type of deliverable being validated (story, design, component, etc.)
- `catalog_domains`: Relevant catalog areas (components, layouts, themes, patterns)
- `deviation_tolerance`: Mode-specific tolerance for catalog deviations