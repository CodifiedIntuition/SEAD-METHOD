# BMAD Task Migration Plan to SEAD-METHOD

## Overview

This plan addresses migrating missing BMAD tasks to SEAD and ensuring proper integration with agents, workflows, and the constitutional framework. The focus is on maintaining catalog-aware functionality while establishing robust sharding capabilities.

## Current Status Analysis

### Missing BMAD Tasks in SEAD
1. **`shard-doc.md`** - Critical missing task referenced by all workflows and agents
2. **`kb-mode-interaction.md`** - Knowledge base interaction capability
3. **`nfr-assess.md`** - Non-Functional Requirements assessment
4. **`test-design.md`** - Test design and strategy task
5. **`trace-requirements.md`** - Requirements traceability task
6. **`create-brownfield-story.md`** - Different from `sead-brownfield-create-story.md`

### SEAD Agent References to Missing Tasks
- **sead-master.md** references `sead-shard-doc.md` (line 82, 129)
- **sead-project-manager.md** references `sead-shard-doc.md` (line 86, 113)
- **sead-architect.md** references `shard-doc.md` (line 84)
- **sead-product-owner.md** references `sead-shard-doc.md` (line 88, 115)

### SEAD Workflow References to Missing Tasks
All 6 workflows reference `shard_constitutional_documents` action and suggest using "sead-shard-doc task" which doesn't exist.

## Migration Plan

### Phase 1: Critical Sharding Infrastructure (Priority: HIGH)

#### Task 1.1: Create `sead-shard-doc.md`
**Objective**: Implement the missing sharding capability that all workflows depend on

**Actions**:
- [ ] Adapt BMAD's `shard-doc.md` to SEAD context
- [ ] Add SEAD-specific constitutional awareness
- [ ] Integrate catalog-aware document organization
- [ ] Support for SEAD templates and structure
- [ ] Test with markdown-tree-parser tool integration
- [ ] Validate against SEAD workflows requirements

**Dependencies**: None - this is foundational
**Estimated Effort**: 4 hours
**Deliverables**: `/sead-core/tasks/sead-shard-doc.md`

#### Task 1.2: Update Agent References
**Objective**: Ensure all agent references to sharding are consistent

**Actions**:
- [ ] Standardize all agent references to use `sead-shard-doc.md`
- [ ] Update sead-architect.md to use `sead-shard-doc.md` instead of `shard-doc.md`
- [ ] Verify all agents have proper constitutional constraints for sharding
- [ ] Test agent command references

**Dependencies**: Task 1.1
**Estimated Effort**: 2 hours
**Deliverables**: Updated agent files

#### Task 1.3: Workflow Integration Testing
**Objective**: Ensure sharding works correctly in all SEAD workflows

**Actions**:
- [ ] Test sharding action in brownfield workflows
- [ ] Test sharding action in greenfield workflows
- [ ] Validate constitutional document sharding
- [ ] Verify catalog integration during sharding

**Dependencies**: Task 1.1, 1.2
**Estimated Effort**: 3 hours
**Deliverables**: Verified workflow functionality

### Phase 2: Constitutional Quality Assurance Infrastructure (Priority: HIGH)

**UPDATED APPROACH**: Instead of importing traditional BMAD QA tasks, implement Constitutional QA that integrates traditional quality validation with SEAD's constitutional framework. See `CONSTITUTIONAL-QA-IMPLEMENTATION-PLAN.md` for detailed design.

#### Task 2.1: Create `sead-constitutional-nfr-assess.md`
**Objective**: Constitutional Non-Functional Requirements assessment

**Actions**:
- [ ] Create constitutional NFR assessment framework
- [ ] Map NFRs to constitutional principles (privacy → Privacy Protection, performance → User Autonomy)
- [ ] Implement mode-appropriate NFR validation (prototype/development/build-to-deploy scaling)
- [ ] Integrate with catalog patterns for NFR implementation guidance
- [ ] Add anti-drift protection for architectural consistency

**Dependencies**: Constitutional Framework understanding
**Estimated Effort**: 4 hours
**Deliverables**: `/sead-core/tasks/sead-constitutional-nfr-assess.md`

#### Task 2.2: Create `sead-constitutional-test-design.md`
**Objective**: Test design with constitutional compliance validation

**Actions**:
- [ ] Create constitutional test design framework
- [ ] Implement functional + constitutional compliance + catalog validation test categories
- [ ] Add mode-aware test design (test requirements scale with development mode)
- [ ] Integrate with sead-qa, sead-developer, sead-architect agent workflows
- [ ] Add anti-drift protection through architectural test coverage

**Dependencies**: Constitutional Framework understanding
**Estimated Effort**: 4 hours
**Deliverables**: `/sead-core/tasks/sead-constitutional-test-design.md`

#### Task 2.3: Create `sead-constitutional-trace.md`
**Objective**: Constitutional principles traceability through implementation

**Actions**:
- [ ] Create constitutional traceability matrix framework
- [ ] Implement constitutional principle → requirements → implementation → validation tracing
- [ ] Add catalog pattern traceability (which patterns implement which principles)
- [ ] Integrate with anti-drift protection through architectural decision logging
- [ ] Support constitutional compliance validation at handoff points

**Dependencies**: Constitutional Framework understanding
**Estimated Effort**: 3 hours
**Deliverables**: `/sead-core/tasks/sead-constitutional-trace.md`

### Phase 3: Knowledge Base Integration (Priority: MEDIUM)

#### Task 3.1: Create `sead-kb-mode-interaction.md`
**Objective**: Add knowledge base interaction capability

**Actions**:
- [ ] Adapt BMAD's `kb-mode-interaction.md` to SEAD context
- [ ] Update topic areas to reflect SEAD methodology
- [ ] Integrate with SEAD's constitutional framework
- [ ] Add catalog-specific knowledge areas
- [ ] Update example interactions for SEAD

**Dependencies**: None
**Estimated Effort**: 2 hours
**Deliverables**: `/sead-core/tasks/sead-kb-mode-interaction.md`

### Phase 4: Story Management Reconciliation (Priority: LOW)

#### Task 4.1: Analyze Story Creation Differences
**Objective**: Determine if BMAD's `create-brownfield-story.md` offers capabilities missing in SEAD

**Actions**:
- [ ] Compare BMAD's `create-brownfield-story.md` with SEAD's `sead-brownfield-create-story.md`
- [ ] Identify any missing functionality
- [ ] Determine if integration is needed or if SEAD version is sufficient

**Dependencies**: None
**Estimated Effort**: 1 hour
**Deliverables**: Analysis document and recommendation

## Integration Requirements

### Agent Integration
- [ ] Update all agent constitutional constraints to include new tasks
- [ ] Verify agents can properly invoke new tasks
- [ ] Test constitutional compliance during task execution

### Workflow Integration  
- [ ] Update workflows to use new task names consistently
- [ ] Test sharding integration in all 6 workflows
- [ ] Verify catalog-aware functionality works end-to-end

### Constitutional Framework Integration
- [ ] Add constitutional constraints for new tasks
- [ ] Ensure tasks respect SEAD's constitutional principles
- [ ] Validate constitutional compliance during execution

## Success Criteria

### Phase 1 Success Criteria
- [ ] All agent references to shard-doc are functional
- [ ] All 6 workflows can successfully execute sharding actions
- [ ] Documents can be sharded with proper catalog organization
- [ ] markdown-tree-parser integration works correctly

### Phase 2 Success Criteria
- [ ] Constitutional NFR assessments align with constitutional principles and quality gates
- [ ] Constitutional test design validates both functionality and constitutional compliance
- [ ] Constitutional traceability maintains principle adherence through implementation

### Phase 3 Success Criteria
- [ ] KB mode provides accurate SEAD methodology guidance
- [ ] Constitutional framework integration is seamless

### Overall Success Criteria
- [ ] All BMAD task capabilities are available in SEAD
- [ ] No broken references in agents or workflows
- [ ] Constitutional compliance is maintained
- [ ] Catalog integration works end-to-end

## Risk Mitigation

### High Risk: Sharding Implementation
**Risk**: Complex markdown parsing could fail
**Mitigation**: Implement both automated (markdown-tree-parser) and manual fallback methods

### Medium Risk: Constitutional Integration
**Risk**: New tasks might not comply with constitutional framework
**Mitigation**: Test each task against constitutional constraints before deployment

### Low Risk: Agent Reference Updates
**Risk**: Inconsistent references could break workflows
**Mitigation**: Systematic review and testing of all agent files

## Timeline Estimate

- **Phase 1**: 9 hours (Critical - do first)
- **Phase 2**: 11 hours (Constitutional QA development)
- **Phase 3**: 2 hours (Nice to have)
- **Phase 4**: 1 hour (Analysis only)
- **Integration & Testing**: 4 hours
- **Total**: 27 hours

**Note**: Phase 2 timeline updated to reflect Constitutional QA approach requiring deeper constitutional framework integration than traditional QA migration.

## Next Steps

1. **Review and approve this plan**
2. **Start with Phase 1 (sharding infrastructure)**
3. **Test sharding thoroughly before proceeding**
4. **Implement phases 2-3 in parallel**
5. **Conduct final integration testing**

This plan ensures SEAD has complete task coverage while maintaining its constitutional framework and catalog-aware capabilities.