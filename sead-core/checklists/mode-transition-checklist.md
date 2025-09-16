<!-- Powered by SEAD-METHOD™ Core -->

# Mode Transition Checklist

Purpose: Validate readiness to transition between SEAD modes (prototype → development → build-to-deploy).

## Preconditions
- [ ] Current mode identified and documented
- [ ] Catalog readiness evaluated (coverage, quality)
- [ ] Outstanding risks documented with owners

## Prototype → Development
- [ ] Core patterns captured in `sead-catalog/` (API, shared types, design system, validation, test)
- [ ] Deviations documented with promotion plan (extensions tracked)
- [ ] Specifications reference catalog patterns
- [ ] Minimal CI validation (lint/type) in place
- [ ] QA gate process defined using `sead-qa-gate`

## Development → Build-to-Deploy
- [ ] Catalog compliance ≥ 100% for in-scope areas
- [ ] Zero unapproved deviations/extensions
- [ ] Security/performance validations configured
- [ ] All story QA gates PASS with no WAIVED mode violations
- [ ] Deployment strategy documented and validated

## Post-Transition Actions
- [ ] Update project `sead.config.yaml` mode value
- [ ] Communicate mode change to all agents/stakeholders
- [ ] Adjust validation gates and checklists used by teams

