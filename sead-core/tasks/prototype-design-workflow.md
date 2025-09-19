<!-- Powered by SEAD-METHOD™ Core -->

# Prototype Design Workflow

## Purpose
Produce interactive, catalog-aligned prototypes that extend wireframes into high-fidelity flows suitable for usability testing and engineering review.

## Activation
Execute after wireframes are approved or when stakeholders request interactive validation of catalog components.

## Dependencies
- `/sead-core/checklists/sead-ux-checklist.md`
- `/sead-core/checklists/design-system-checklist.md`
- `/sead-core/checklists/accessibility-checklist.md`
- `/sead-core/data/design-system-guidelines.md`
- `/sead-core/data/ui-pattern-library.md`
- `/sead-core/data/accessibility-standards.md`
- `/sead-core/templates/sead-prototype-spec-tmpl.yaml`

## Workflow (Sequential)

### 1. Initialize Prototype Scope
1. Confirm project mode and corresponding fidelity/validation expectations.
2. Gather user requirements: scenarios to prototype, devices/viewports to support, performance constraints.
3. Inventory catalog assets required; note any missing interactions or tokens.

### 2. Extend Wireframes into Interaction Model
1. Define component states and transitions using catalog micro-interaction guidance.
2. Map data flows and error cases for each scenario.
3. Ensure accessibility states (focus order, announcements) are incorporated.

### 3. Build Prototype Specification
1. Load `/sead-core/templates/sead-prototype-spec-tmpl.yaml`.
2. Document screens, interactions, and variant mapping with catalog references.
3. Annotate responsive behaviors and motion guidelines.
4. Include performance considerations (loading strategies, skeleton usage) per frontend methodology.

### 4. Validation Cycle
1. Execute `design-system-checklist.md` to confirm consistency.
2. Run `accessibility-checklist.md` for interactive compliance.
3. If research is planned, coordinate with `user-research-planning-workflow`.
4. Capture stakeholder feedback and iterate as needed.

### 5. Handoff Package
1. Provide prototype links/files, annotated spec, and validation evidence.
2. Summarize outstanding catalog updates or technical risks.
3. Recommend next actions: engineering handoff, usability testing, or catalog extension.
