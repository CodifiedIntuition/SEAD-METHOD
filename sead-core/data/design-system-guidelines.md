<!-- Powered by SEAD-METHOD™ Core -->

# SEAD Design System Guidelines (Static Reference)

Use this document as the canonical reference for how SEAD UX deliverables should leverage the design system when catalog assets are provided by a project. It defines non-project-specific rules the agent must follow when creating or validating artifacts.

## 1. Catalog-First Philosophy
- Prioritize existing catalog components, layouts, and tokens before introducing bespoke solutions.
- When the project catalog is incomplete, propose extensions using `design-pattern-evaluation.md` and capture rationale.
- Maintain traceability by listing catalog references as numbered options for user selection.

## 2. Component Structure Expectations
- Components inherit from a base catalog entity. Document the inheritance chain (e.g., `Button/Base → Button/Primary`).
- Specify expected properties and state mapping suitable for React/TypeScript handoffs (no `any`).
- Describe interaction states (hover, focus, active, busy, disabled) and tie them to catalog micro-interactions.

## 3. Token Usage Rules
- Color, spacing, radius, and typography must reference catalog tokens; never hard-code values.
- Dark/light or theme variants should point to the applicable theme token set.
- Include guidance for motion tokens when transitions or animations are required.

## 4. Responsive Layout Requirements
- Breakpoints align with `xs`, `sm`, `md`, `lg`, `xl` scale; document how components adapt at each.
- Grids flexboxes, or stack utilities should be reused from catalog layout primitives when available.
- Provide fallback stacking order for narrow viewports and note any content prioritization changes.

## 5. Documentation & Handoff
- Artifacts must include: catalog references, accessibility notes, validation steps, and implementation hints.
- Record version metadata or date stamps for each update.
- Link supporting checklists to prove compliance (design-system, accessibility, catalog-compliance).
