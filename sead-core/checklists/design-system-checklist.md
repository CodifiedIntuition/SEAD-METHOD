<!-- Powered by SEAD-METHOD™ Core -->

# SEAD Design System Quality Checklist

Purpose: validate any catalog-integrated design system update before it is handed off to engineering or added to the shared catalog. Use after compiling initial findings via `design-system-analysis` task.

[[LLM: REQUIRED PREPARATION]]
- Load `/sead-core/data/design-system-guidelines.md` for baseline rules.
- Load `/sead-core/data/ui-pattern-library.md` for available components.
- Review `/sead-core/data/mode-constraint-matrix.md` to apply correct rigor.
- Ensure latest catalog references (components, layouts, themes, micro-interactions) are accessible—remind user if actual catalog assets are project-supplied.

## 1. Pattern Inventory Verification
- [ ] Confirm every proposed component/variant exists in catalog or is flagged as new.
- [ ] Document reuse chains (which base component each variant extends).
- [ ] Validate naming conventions align with `design-system-guidelines.md`.
- [ ] Map each pattern to supported breakpoints and interaction states.

## 2. Visual & Interaction Consistency
- [ ] Check spacing, typography, and color usage against token definitions.
- [ ] Ensure interaction states (hover, focus, pressed, disabled, busy) follow catalog micro-interaction standards.
- [ ] Verify theming support (light/dark or other available themes) is documented.
- [ ] Confirm responsive behavior matches catalog responsive guidance.

## 3. Accessibility Compliance
- [ ] Validate color contrast values meet `accessibility-standards.md` thresholds.
- [ ] Confirm focus order, keyboard navigation, and ARIA usage guidance are documented.
- [ ] Ensure error states and messaging include screen reader instructions.
- [ ] Capture assistive technology testing recommendations.

## 4. Technical Ready Signals
- [ ] Provide implementation notes (expected TypeScript props, states, data requirements).
- [ ] Reference any dependencies on external libraries or design tokens.
- [ ] Outline performance considerations (lazy loading, animation budgets) from frontend methodology.
- [ ] Highlight regression risks when integrating into existing systems.

## 5. Handoff & Governance
- [ ] Summarize updates in a numbered list for quick review.
- [ ] Attach or reference supporting artifacts (wireframes, prototypes, documentation templates).
- [ ] Confirm sign-off requirements based on SEAD mode (prototype vs. build-to-deploy rigor).
- [ ] Log outstanding catalog extensions or documentation tasks for follow-up.
