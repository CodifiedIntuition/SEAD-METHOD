# Constitutional Compliance Module

**Purpose:** Standard constitutional compliance patterns used across all SEAD checklists.

## LLM Initialization Steps
```
1. Load `/sead-core/core-config.yaml` to determine current mode and enforcement level
2. Load `/sead-core/constitutional-rules/sead-[role]-constraints.yaml` (role-specific)
3. Review project charter/vision documents for current initiative
4. Confirm mode constraints and note blocking violations
```

## Governance Alignment Checks
- [ ] Stories/epics map to approved objectives and KPIs
- [ ] Regulatory or policy constraints documented per item
- [ ] Risk mitigations aligned with constitutional guidelines
- [ ] Decision logs cite responsible approvers
- [ ] Escalation paths documented for constraint conflicts

## Mode Enforcement Standards
- [ ] **Prototype mode:** Experimentation clearly labeled; follow-up tasks defined
- [ ] **Development mode:** Migration/validation plans exist for deviations
- [ ] **Build-to-deploy mode:** Zero deviations; compliance evidence collected
- [ ] Mode-specific readiness gates satisfied
- [ ] Validation artifacts attached per mode requirements

## Constitutional Exit Criteria
- [ ] All compliance checkpoints passed or waivers approved
- [ ] Outstanding actions assigned with deadlines
- [ ] Final summary prepared for constitutional audit trail
- [ ] Stakeholder accountability documented

## Module Parameters
When importing this module, specify:
- `role`: The specific SEAD role for constraint loading
- `context`: The specific work context (backlog, story, design, etc.)
- `validation_level`: Mode-specific validation depth required