<!-- Powered by SEAD-METHOD™ Core -->

# SEAD Mode Constraint Matrix (UX Focus)

This matrix translates `sead-core/core-config.yaml` mode definitions into UX-specific guidance. Always reference this file when determining level of rigor.

| Mode | Description | Catalog Expectation | UX Output Fidelity | Validation Requirements | Notes |
|------|-------------|--------------------|--------------------|-------------------------|-------|
| Prototype | Rapid experiments, learning focus | Catalog usage encouraged; deviations allowed if documented | Low to mid fidelity (sketches, lightweight wireframes) | Basic heuristic review, optional quick user checks | Record hypotheses and planned follow-ups; capture new pattern ideas. |
| Development | Building production-ready features | Prefer catalog components; document and justify deviations | Mid to high fidelity wireframes/prototypes aligned with tokens | Comprehensive accessibility checklist, targeted usability sessions | Provide implementation-ready specs and pattern update requests. |
| Build-to-Deploy | Final assembly with zero drift | Catalog-only; no new patterns without prior approval | High fidelity specs with full state coverage and annotations | Strict accessibility evidence, regression-tested research, sign-offs | Deviation not allowed; include final validation package for release. |

## Usage Instructions
1. Determine current mode from `core-config.yaml`.
2. Apply catalog expectations to all planning and design decisions.
3. Use table to set artifact fidelity, required checklists, and validation depth.
4. Reference when negotiating trade-offs or scheduling follow-up work.
