<!-- Powered by SEAD-METHOD™ Core -->

# SEAD Change Navigation Checklist

**Purpose:** To systematically guide the selected SEAD Agent and user through the analysis and planning required when a significant change (pivot, tech issue, missing requirement, failed story) is identified during the SEAD workflow, while maintaining constitutional compliance and catalog integrity.

**Instructions:** Review each item with the user within constitutional constraints. Mark `[x]` for completed/confirmed, `[N/A]` if not applicable, or add notes for discussion points.

[[LLM: MANDATORY CONSTITUTIONAL INITIALIZATION - SEAD CHANGE NAVIGATION

Changes during development are inevitable, but how we handle them within SEAD constitutional constraints determines project success or failure.

CRITICAL: Before proceeding, you MUST:

1. **Read Constitutional Constraints**: Load and read your agent-specific constitutional constraints from `/sead-core/constitutional-rules/`
2. **Review Catalog Impacts**: Load and read relevant `/sead-catalog/*/README.md` files that might be affected by the change
3. **Validate Mode Constraints**: Apply appropriate constitutional constraints based on current development mode
4. **Assess Constitutional Impact**: Determine if change affects constitutional compliance or catalog integrity

Before proceeding, understand:

1. This checklist is for SIGNIFICANT changes that affect project direction within SEAD methodology
2. Minor adjustments within a story don't require this constitutional process
3. The goal is to minimize wasted work while adapting to new realities within constitutional constraints
4. User buy-in is critical - they must understand and approve changes within constitutional framework
5. Changes must maintain catalog pattern integrity and constitutional compliance

Required context:

- The triggering story or issue with constitutional context
- Current project state (completed stories, current epic) with catalog compliance status
- Access to PRD, architecture, and other key documents with constitutional validation
- Understanding of remaining work planned within constitutional constraints
- Impact assessment on established catalog patterns

CONSTITUTIONAL APPROACH:
This is an interactive process with the user within constitutional constraints. Work through each section together, discussing implications and constitutional options. The user makes final decisions, but provide expert guidance on technical feasibility, constitutional compliance, and catalog pattern impact.

REMEMBER: Changes are opportunities to improve within constitutional constraints, not constitutional failures. Handle them professionally and constructively while maintaining SEAD methodology integrity.]]

---

## 1. CONSTITUTIONAL IMPACT ASSESSMENT

[[LLM: SEAD changes must first assess constitutional and catalog impacts before addressing traditional concerns. This section is MANDATORY.]]

### 1.1 Constitutional Constraint Analysis

- [ ] **Current Constitutional Status**: Document current compliance with constitutional constraints for affected components
- [ ] **Change Impact on Constraints**: Assess how the proposed change affects constitutional compliance requirements
- [ ] **Mode-Specific Impact**: Evaluate if change affects development mode constraints (prototype/development/build-to-deploy)
- [ ] **Escalation Requirements**: Determine if change requires constitutional review or escalation procedures
- [ ] **Compliance Timeline Impact**: Assess impact on constitutional compliance timeline and milestones

### 1.2 Catalog Pattern Integrity Assessment

- [ ] **Affected Catalog Domains**: Identify which catalog domains (API, data, UI, etc.) are impacted by the change
- [ ] **Pattern Consistency Impact**: Assess how change affects existing catalog pattern consistency
- [ ] **New Pattern Requirements**: Determine if change requires new catalog patterns or pattern evolution
- [ ] **Integration Pattern Impact**: Evaluate effect on established integration patterns between domains
- [ ] **Catalog Integrity Validation**: Ensure change doesn't compromise overall catalog system integrity

### 1.3 Anti-Drift Protection Analysis

- [ ] **Architectural Drift Risk**: Assess if change introduces architectural drift or pattern fragmentation
- [ ] **Technical Debt Constitutional Impact**: Evaluate if change creates technical debt that violates constitutional constraints
- [ ] **Future Compliance Path**: Document path to maintain or restore full constitutional compliance post-change
- [ ] **Quality Gate Impact**: Assess effect on established quality gates and validation procedures

## 2. UNDERSTAND THE TRIGGER & CONTEXT

[[LLM: Start by fully understanding what went wrong and why within constitutional context. Don't jump to solutions yet. Ask probing questions:

- What exactly happened that triggered this review within constitutional constraints?
- Is this a one-time issue or symptomatic of constitutional compliance problems?
- Could this have been anticipated earlier with better constitutional validation?
- What constitutional assumptions were incorrect?

Be specific and factual, not blame-oriented, while maintaining constitutional awareness.]]

### 2.1 Constitutional Trigger Analysis

- [ ] **Identify Triggering Story**: Clearly identify the story (or stories) that revealed the issue with constitutional context
- [ ] **Define the Constitutional Issue**: Articulate the core problem precisely within constitutional framework
  - [ ] Is it a technical limitation/dead-end that violates constitutional constraints?
  - [ ] Is it a newly discovered requirement that affects constitutional compliance?
  - [ ] Is it a fundamental misunderstanding of constitutional requirements?
  - [ ] Is it a necessary pivot that affects catalog pattern integrity?
  - [ ] Is it a failed/abandoned story needing constitutional reassessment?
- [ ] **Assess Constitutional Impact**: Describe the immediate observed consequences with constitutional context (e.g., blocked progress, constitutional violations, non-viable tech within constraints)
- [ ] **Gather Constitutional Evidence**: Note any specific constitutional violations, catalog pattern conflicts, or constitutional compliance failures that support the issue definition

## 3. EPIC IMPACT ASSESSMENT

[[LLM: Changes ripple through the project structure and must maintain constitutional compliance. Systematically evaluate:

1. Can we salvage the current epic with modifications within constitutional constraints?
2. Do future epics still make sense given this change and constitutional requirements?
3. Are we creating or eliminating constitutional dependencies?
4. Does the epic sequence need reordering to maintain constitutional compliance?

Think about both immediate and downstream constitutional effects.]]

### 3.1 Constitutional Epic Analysis

- [ ] **Analyze Current Epic with Constitutional Context:**
  - [ ] Can the current epic containing the trigger story still be completed within constitutional constraints?
  - [ ] Does the current epic need modification (story changes, additions, removals) to maintain constitutional compliance?
  - [ ] Should the current epic be abandoned or fundamentally redefined to align with constitutional requirements?
- [ ] **Analyze Future Epics with Constitutional Framework:**
  - [ ] Review all remaining planned epics for constitutional compliance impact.
  - [ ] Does the issue require changes to planned stories in future epics to maintain constitutional compliance?
  - [ ] Does the issue invalidate any future epics from constitutional perspective?
  - [ ] Does the issue necessitate the creation of entirely new epics for constitutional compliance?
  - [ ] Should the order/priority of future epics be changed to maintain constitutional compliance?
- [ ] **Summarize Constitutional Epic Impact:** Briefly document the overall effect on the project's epic structure and flow within constitutional constraints.

## 4. CATALOG PATTERN CONFLICT & IMPACT ANALYSIS

[[LLM: Catalog patterns drive development in SEAD. Check each catalog domain for constitutional compliance:

1. Does this change invalidate established catalog patterns?
2. Are architectural assumptions in catalog patterns still valid?
3. Do integration flows need rethinking within constitutional constraints?
4. Are technical constraints different than cataloged patterns?

Be thorough - missed constitutional conflicts cause future problems.]]

### 4.1 Core Catalog Domain Impact

- [ ] **Review API Contracts (`/sead-catalog/api-contracts/`):**
  - [ ] Does the issue conflict with established API patterns or contracts?
  - [ ] Do API contracts need updates to maintain constitutional compliance?
- [ ] **Review Shared Types (`/sead-catalog/shared-types/`):**
  - [ ] Are established type definitions affected by the change?
  - [ ] Do type contracts need constitutional validation updates?
- [ ] **Review State Management (`/sead-catalog/state-management/`):**
  - [ ] Are established state patterns still viable within constitutional constraints?
  - [ ] Does state management approach need constitutional realignment?

### 4.2 Integration & Infrastructure Impact

- [ ] **Review Integration Patterns (`/sead-catalog/integration-patterns/`):**
  - [ ] Do established integration approaches still work within constitutional constraints?
  - [ ] Are integration patterns affected by the constitutional issue?
- [ ] **Review Deployment Strategy (`/sead-catalog/deployment-strategy/`):**
  - [ ] Are deployment patterns affected by the change?
  - [ ] Do deployment strategies need constitutional compliance updates?
- [ ] **Review Data Strategy (`/sead-catalog/data-strategy/`):**
  - [ ] Are data patterns and schemas affected by constitutional requirements?
  - [ ] Do data strategies need updates to maintain constitutional compliance?

### 4.3 Quality & Validation Impact

- [ ] **Review Test Patterns (`/sead-catalog/test-patterns/`):**
  - [ ] Do established testing approaches still validate constitutional compliance?
  - [ ] Are test patterns sufficient for validating the change within constitutional constraints?
- [ ] **Review Error Handling (`/sead-catalog/error-handling/`):**
  - [ ] Are error handling patterns affected by the constitutional change?
  - [ ] Do error scenarios need constitutional validation updates?

### 4.4 Constitutional Catalog Impact Summary

- [ ] **List all catalog domains requiring constitutional updates** and the nature of changes needed
- [ ] **Assess catalog integrity impact** on overall system constitutional compliance
- [ ] **Document catalog evolution requirements** to maintain constitutional consistency

## 5. PATH FORWARD EVALUATION

[[LLM: Present constitutional options clearly with pros/cons. For each constitutional path:

1. What's the effort required within constitutional constraints?
2. What work gets thrown away while maintaining constitutional compliance?
3. What constitutional risks are we taking?
4. How does this affect constitutional compliance timeline?
5. Is this sustainable long-term within constitutional framework?

Be honest about constitutional trade-offs. There's rarely a perfect constitutional solution.]]

### 5.1 Constitutional Option Analysis

- [ ] **Option 1: Direct Constitutional Adjustment / Integration:**
  - [ ] Can the issue be addressed by modifying/adding future stories within existing constitutional plan?
  - [ ] Define the scope and nature of these constitutional adjustments.
  - [ ] Assess feasibility, effort, and constitutional risks of this path.
- [ ] **Option 2: Constitutional Rollback with Pattern Preservation:**
  - [ ] Would reverting completed stories significantly simplify addressing the issue while preserving constitutional compliance?
  - [ ] Identify specific stories/commits to consider for rollback with constitutional impact assessment.
  - [ ] Assess the effort required for rollback while maintaining constitutional compliance.
  - [ ] Assess the impact of rollback (lost work, data implications) on constitutional compliance.
  - [ ] Compare the net constitutional benefit/cost vs. Direct Adjustment.
- [ ] **Option 3: Constitutional PRD MVP Review & Pattern Re-scoping:**
  - [ ] Is the original PRD MVP still achievable given the issue and constitutional constraints?
  - [ ] Does the MVP scope need reduction while maintaining constitutional compliance (removing features/epics)?
  - [ ] Do the core MVP goals need modification within constitutional framework?
  - [ ] Are alternative constitutional approaches needed to meet the original MVP intent?
  - [ ] **Extreme Constitutional Case:** Does the issue necessitate a fundamental replan or potentially a new PRD V2 with constitutional framework integration (to be handled by PM)?
- [ ] **Select Recommended Constitutional Path:** Based on the evaluation, agree on the most viable constitutional path forward.

## 6. CONSTITUTIONAL SPRINT CHANGE PROPOSAL COMPONENTS

[[LLM: The constitutional proposal must be actionable and clear. Ensure:

1. The issue is explained in plain language with constitutional context
2. Constitutional impacts are quantified where possible
3. The recommended path has clear constitutional rationale
4. Next steps are specific and assigned with constitutional accountability
5. Success criteria for the change include constitutional compliance validation

This constitutional proposal guides all subsequent work.]]

### 6.1 Constitutional Change Documentation

(Ensure all agreed-upon constitutional points from previous sections are captured in the proposal)

- [ ] **Constitutional Issue Summary:** Clear, concise problem statement with constitutional context.
- [ ] **Epic Constitutional Impact Summary:** How epics are affected within constitutional framework.
- [ ] **Catalog Adjustment Needs:** List of catalog documents to change with constitutional validation requirements.
- [ ] **Recommended Constitutional Path Forward:** Chosen solution with constitutional rationale.
- [ ] **PRD MVP Constitutional Impact:** Changes to scope/goals with constitutional compliance validation (if any).
- [ ] **High-Level Constitutional Action Plan:** Next steps for stories/updates with constitutional accountability.
- [ ] **Constitutional Agent Handoff Plan:** Identify roles needed (PM, Arch, Design Arch, PO) with constitutional responsibilities.

### 6.2 Constitutional Quality Assurance

- [ ] **Constitutional Compliance Validation:** Ensure all proposed changes maintain constitutional compliance
- [ ] **Catalog Integrity Protection:** Validate that changes preserve catalog pattern integrity
- [ ] **Anti-Drift Safeguards:** Confirm that changes don't introduce architectural drift
- [ ] **Future Constitutional Path:** Document how changes support long-term constitutional compliance

## 7. FINAL CONSTITUTIONAL REVIEW & HANDOFF

[[LLM: Constitutional changes require coordination. Before concluding:

1. Is the user fully aligned with the constitutional plan?
2. Do all stakeholders understand the constitutional impacts?
3. Are handoffs to other agents clear with constitutional context?
4. Is there a constitutional rollback plan if the change fails?
5. How will we validate the constitutional change worked?

Get explicit constitutional approval - implicit agreement causes constitutional problems.

FINAL CONSTITUTIONAL REPORT:
After completing the checklist, provide a concise constitutional summary:

- What changed and why within constitutional framework
- What we're doing about it within constitutional constraints
- Who needs to do what with constitutional accountability
- When we'll know if it worked within constitutional compliance

Keep it action-oriented, forward-looking, and constitutionally compliant.]]

### 7.1 Constitutional Validation & Approval

- [ ] **Review Constitutional Checklist:** Confirm all relevant constitutional items were discussed.
- [ ] **Review Constitutional Sprint Change Proposal:** Ensure it accurately reflects the discussion and constitutional decisions.
- [ ] **User Constitutional Approval:** Obtain explicit user approval for the constitutional proposal.
- [ ] **Confirm Constitutional Next Steps:** Reiterate the constitutional handoff plan and the next actions to be taken by specific agents with constitutional accountability.

### 7.2 Constitutional Continuity Assurance

- [ ] **Constitutional Compliance Path:** Document clear path to maintain constitutional compliance throughout change implementation
- [ ] **Catalog Pattern Evolution:** Ensure catalog patterns evolve appropriately to support the change
- [ ] **Quality Gate Updates:** Update quality gates and validation procedures to reflect constitutional changes
- [ ] **Constitutional Monitoring:** Establish monitoring for constitutional compliance during change implementation

---

[[LLM: CONSTITUTIONAL CHANGE IMPLEMENTATION NOTES

Remember that all changes in SEAD must:

1. **Preserve Constitutional Integrity**: Never compromise core constitutional principles
2. **Maintain Catalog Consistency**: Ensure catalog patterns remain coherent and useful
3. **Support Agent Coordination**: Enable proper handoffs between SEAD agents
4. **Enable Future Growth**: Position the project for continued constitutional compliance

Changes that violate these principles should be escalated through constitutional review procedures rather than implemented directly.]]