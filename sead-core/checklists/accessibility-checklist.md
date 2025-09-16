<!-- Powered by SEAD-METHOD™ Core -->

# SEAD Accessibility Enforcement Checklist

Use this checklist whenever the SEAD UX Expert evaluates or delivers UI work. It converts the project accessibility standards into executable validation steps.

[[LLM: INITIALIZE ACCESSIBILITY REVIEW]]
1. Load `/sead-core/data/accessibility-standards.md`.
2. Load `/sead-core/data/design-system-guidelines.md` to understand catalog token implications.
3. Ask the user for target platforms (web, mobile web, native) and assistive technologies to prioritize.
4. Determine current SEAD mode to calibrate validation depth (`mode-constraint-matrix.md`).

## 1. Foundational Compliance
- [ ] Document the target WCAG level and mode-enforced requirements.
- [ ] Verify semantic structure (headings, landmarks, lists) is defined for all views.
- [ ] Confirm focus management rules (initial focus, trap handling, return point) are specified.
- [ ] Ensure keyboard operability exists for every interactive element.

## 2. Perception & Presentation
- [ ] Contrast ratios meet or exceed thresholds listed in `accessibility-standards.md`.
- [ ] Typography scale supports readability (line height, spacing, minimum size).
- [ ] Media elements include transcripts/captions/alt text guidance.
- [ ] Motion and animation usage documents user controls or reduced motion alternatives.

## 3. Interaction States & Feedback
- [ ] Every component defines visible focus indicators distinct from hover states.
- [ ] Error states include textual descriptions, programmatic labels, and recovery guidance.
- [ ] Loading/progress patterns provide status updates accessible to screen readers.
- [ ] Touch targets meet minimum sizing and spacing guidelines where applicable.

## 4. Assistive Technology Scenarios
- [ ] Provide ARIA roles/attributes only where necessary and document reasoning.
- [ ] Describe expected announcements for key flows (e.g., form submission success, validation errors).
- [ ] Plan screen reader test cases across primary flows.
- [ ] Capture compatibility considerations for at least two assistive tech stacks (e.g., NVDA + Firefox, VoiceOver + Safari).

## 5. Validation & Follow-up
- [ ] Identify manual vs. automated testing steps and required tooling.
- [ ] Log any accessibility debt with priority and mitigation owner.
- [ ] Confirm accessibility review sign-off roles for current SEAD mode.
- [ ] Summarize residual risks and communicate to downstream teams.
