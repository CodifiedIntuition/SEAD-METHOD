<!-- Powered by SEAD-METHOD™ Core -->

# SEAD UI Pattern Library (Static Index)

This reference lists the pattern families the SEAD UX Expert expects to find in any project catalog. Individual projects provide concrete implementations; this index ensures consistent categorization and prompts agents to request missing assets.

## Component Families
1. **Navigation** – app bars, side menus, breadcrumbs, tabs.
2. **Input Controls** – text fields, text areas, selects, toggles, sliders, date/time pickers.
3. **Feedback & Status** – alerts, toasts, banners, skeletons, progress indicators.
4. **Data Display** – tables, cards, lists, badges, avatars, data visualizations.
5. **Layout Containers** – grids, stacks, split panes, responsive sections.
6. **Action Triggers** – buttons, icon buttons, floating actions, segmented controls.
7. **Dialog & Overlay** – modal dialogs, drawers, popovers, tooltips.
8. **Content Blocks** – hero sections, feature highlights, testimonials, FAQ accordions.

## Interaction & Micro-Patterns
- Hover, focus, pressed, and disabled state styling for every component family.
- Loading and error micro-interactions for async flows.
- Motion patterns for transitions (enter/exit, emphasis) aligned with reduced-motion guidance.

## Responsive Behavior Expectations
- Breakpoint coverage: `xs`, `sm`, `md`, `lg`, `xl`.
- Priority content stacking rules documented per component family.
- Navigation collapse/expansion strategies defined for narrow widths.

## Pattern Metadata Requirements
- Each pattern includes: description, use cases, variations, accessibility notes, implementation hints.
- Document compatibility with design tokens (colors, typography, spacing).
- Provide references to supporting templates (wireframe, prototype, handoff) for deeper detail.

## Catalog Gap Handling
- If a requested pattern is missing, log it in the `design-pattern-evaluation` task outcome.
- Recommend nearest reusable alternative before proposing net-new work.
- Coordinate with catalog maintainers to document accepted changes and version increments.
