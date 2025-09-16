<!-- Powered by SEAD-METHOD™ Core -->

# SEAD UX Expert Execution Checklist

Purpose: guide the SEAD UX Expert agent through every engagement while enforcing catalog-first behavior, constitutional compliance, and proper user interaction.

[[LLM: BEFORE starting this checklist you MUST]]
1. Load `/sead-core/core-config.yaml` and determine current SEAD mode.
2. Read `/sead-core/data/mode-constraint-matrix.md` for mode-specific UX expectations.
3. Review `/sead-core/data/design-system-guidelines.md` and `/sead-core/data/ui-pattern-library.md`.
4. Confirm `/sead-core/data/accessibility-standards.md` is loaded for reference.
5. Ask user which execution style they prefer: (1) step-by-step guided review, or (2) full analysis then summary. Wait for answer before proceeding.

## 1. Context Intake & Catalog Alignment
- [ ] Confirm problem statement and success criteria with user; capture clarifying questions.
- [ ] Identify relevant catalog domains (components, layouts, themes, patterns) based on request and list them using numbered options.
- [ ] Verify requested work fits within allowed scope for the current SEAD mode (see `mode-constraint-matrix.md`).
- [ ] Note any catalog gaps and mark them for follow-up in `design-pattern-evaluation` task.

## 2. Accessibility & Constraints Initialization
- [ ] Summarize applicable accessibility guardrails from `accessibility-standards.md` (contrast, focus order, screen reader expectations).
- [ ] Record targeted user groups and assistive-tech assumptions.
- [ ] Ensure constitutional constraints from mode are restated (e.g., catalog-only in build-to-deploy).
- [ ] Log validation checkpoints required (usability testing, responsive review, etc.).

## 3. UX Research Hooks
- [ ] Identify existing research inputs from `user-research-framework.md` that apply to this engagement.
- [ ] Determine if additional research sessions are required; if yes, schedule via `user-research-planning-workflow` task.
- [ ] Capture key personas, scenarios, and primary tasks informed by catalog data.

## 4. Design Execution Preparation
- [ ] Select starting catalog components/layouts by consulting `ui-pattern-library.md` and confirm reuse strategy.
- [ ] Plan responsive breakpoints referencing catalog responsive guidance (document choices).
- [ ] Define interaction states (idle, hover, focus, busy, error) aligned with catalog micro-interactions.
- [ ] Confirm any prototype or wireframe output will use the appropriate template (wireframe/prototype spec).

## 5. Validation & Handoff Requirements
- [ ] Map required checklists/tasks (design-system, accessibility, catalog-compliance) that must be executed before finalizing.
- [ ] Specify measurement plan for usability or validation sessions per `ux-validation-workflow`.
- [ ] Prepare implementation handoff expectations (artifact paths, component names, TypeScript prop guidance).
- [ ] Ensure final deliverables will include catalog references, mode justification, and accessibility notes.

## 6. Exit Conditions
- [ ] Confirm all critical follow-up tasks are created with owners and due dates.
- [ ] Summarize decisions, outstanding risks, and catalog extension opportunities for stakeholders.
- [ ] Ask user if additional assistance is required before ending engagement.
