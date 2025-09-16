<!-- Powered by SEAD-METHOD™ Core -->

# SEAD Developer Constraint Matrix

Use this matrix to interpret constitutional constraints for daily development work. It complements `sead-core/core-config.yaml` and `sead-core/constitutional-rules/sead-developer-constraints.yaml` by translating requirements into actionable guardrails.

## Mode Enforcement Summary
| Mode | Catalog Expectation | Implementation Scope | Validation Requirements | Escalation Trigger |
|------|--------------------|----------------------|-------------------------|--------------------|
| Prototype | Catalog preferred; document deviations | Lightweight spikes, disposable proof-of-concepts | Lint + basic tests; capture learnings for catalog | Deviations that prove valuable → raise pattern proposals |
| Development | Catalog-first; justify deviations with migration plan | Production-ready code using catalog building blocks | Comprehensive tests, accessibility, performance checks | Any deviation lacking approved migration path |
| Build-to-Deploy | Catalog-only, no new patterns | Final hardening and release work; zero drift | Full regression suite, accessibility evidence, security/perf scans | Any missing catalog asset or conflicting constraint |

## Constraint Checklist By Domain
- **Types & Data Models**
  - Must reference canonical definitions in `sead-catalog/shared-types/`. Additions require `sead-pattern-extraction.md` follow-up.
  - Version each change; no implicit structural shifts.

- **APIs & Contracts**
  - Align with `sead-catalog/api-contracts/`. Breaking changes require approval tracked via catalog governance.
  - Document request/response validation in `validation-schemas/`.

- **Frontend Components**
  - Use `design-system/` primitives; match token usage documented in `design-system-guidelines.md`.
  - Accessibility obligations from `accessibility-standards.md` apply to every UI surface.

- **State & Workflow**
  - Follow `state-management/` patterns; avoid bespoke state stores unless catalog endorses.
  - Integrate telemetry or analytics per catalog guidance when available.

- **Testing**
  - Map tests to `test-patterns/` templates; ensure coverage aligns with mode (prototype < development < build-to-deploy).
  - Record outcomes in task artifacts (e.g., `sead-catalog-compliance-check.md` reports).

## Escalation & Decision Logging
- When constraints conflict or catalog gaps block implementation, pause work and escalate to product/architecture using catalog governance channel.
- Capture deviation rationale in task outputs (especially `sead-constraint-validation.md` and `sead-pattern-extraction.md`).

## Usage Instructions
1. Load this matrix immediately after reading mode configuration.
2. Reference relevant rows/sections before coding.
3. Update task artifacts with decisions tied to this matrix to maintain auditability.
