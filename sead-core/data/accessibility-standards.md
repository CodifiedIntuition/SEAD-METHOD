<!-- Powered by SEAD-METHOD™ Core -->

# SEAD Accessibility Standards (Static Reference)

These standards translate core WCAG requirements into repeatable rules the SEAD UX Expert must enforce regardless of project specifics. When a project supplies additional policies, treat them as additive.

## 1. Compliance Targets
- Default target: WCAG 2.2 Level AA unless a higher level is mandated.
- Prototype mode may document planned compliance; development and build-to-deploy modes require evidence of execution.
- Track accessibility debts with priority, owner, and remediation timeline.

## 2. Perceivable Principles
- Minimum color contrast: 4.5:1 for body text, 3:1 for large text or non-text UI elements.
- Provide text alternatives for all meaningful imagery and icons.
- Ensure multimedia assets include captions, transcripts, and audio descriptions where applicable.
- Support user-controlled motion preferences; offer reduced-motion variants for animations.

## 3. Operable Principles
- Keyboard navigation covers entire experience with logical tab order and visible focus states.
- Touch targets measure at least 44x44 px (or equivalent area) with appropriate spacing.
- Provide mechanisms to bypass repetitive content (skip links, landmarks).
- Document behavior for timeouts or auto-refresh events and offer user overrides.

## 4. Understandable Principles
- Use clear, consistent terminology; avoid jargon unless defined in context.
- Form validation errors must include text instructions, programmatic associations, and recovery guidance.
- Maintain predictable navigation patterns; announce context changes to assistive technology.
- Support locale and language requirements, including correct `lang` attributes.

## 5. Robust Principles
- Ensure semantic HTML structure: headings nested sequentially, proper landmark roles.
- ARIA should be used sparingly to enhance (not replace) native semantics; document reasons for each usage.
- Test with at least two assistive technology stacks (e.g., NVDA + Firefox, VoiceOver + Safari) when in development or stricter modes.
- Provide accessibility acceptance criteria and testing procedures in handoff documents.
