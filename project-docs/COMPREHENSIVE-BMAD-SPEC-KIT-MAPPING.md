# Comprehensive BMAD-Spec-Kit Command Mapping Analysis

**Purpose**: Complete mapping of ALL BMAD-origin commands in SEAD to Spec-Kit commands to identify comprehensive enhancement opportunities.

**Date**: 2025-01-05  
**Status**: Comprehensive Analysis

---

## 🎯 **Complete Command Overlap Analysis**

### **DIRECT FUNCTIONAL OVERLAPS**

| **BMAD Task** | **Spec-Kit Command** | **Overlap Level** | **Enhancement Opportunity** |
|---------------|----------------------|------------------|----------------------------|
| `advanced-elicitation` | `specify.md` | **HIGH** ✅ | Add structured spec output + NEEDS CLARIFICATION tracking |
| `create-next-story` | `tasks.md` | **HIGH** ✅ | Add numbered task system (T001, T002) + dependency analysis |
| `document-project` | `plan.md` | **MEDIUM** 🔶 | Add artifact breakdown (research.md, data-model.md, contracts/) |
| `brownfield-create-epic` | `specify.md` | **MEDIUM** 🔶 | Add constitutional spec generation for brownfield analysis |
| `brownfield-create-story` | `tasks.md` | **MEDIUM** 🔶 | Add structured task breakdown for brownfield modifications |

### **ARCHITECTURAL & PLANNING OVERLAPS**

| **BMAD Task** | **Spec-Kit Command** | **Overlap Level** | **Enhancement Opportunity** |
|---------------|----------------------|------------------|----------------------------|
| `create-deep-research-prompt` | `plan.md` (research phase) | **HIGH** ✅ | Add structured research.md output format |
| `facilitate-brainstorming-session` | `specify.md` (ideation phase) | **MEDIUM** 🔶 | Add structured specification capture from brainstorming |
| `shard-doc` | `plan.md` (artifact organization) | **MEDIUM** 🔶 | Add structured document breakdown patterns |
| `index-docs` | `plan.md` (documentation phase) | **LOW** 🟨 | Add hierarchical documentation structure |

### **QUALITY ASSURANCE OVERLAPS**

| **BMAD Task** | **Spec-Kit Command** | **Overlap Level** | **Enhancement Opportunity** |
|---------------|----------------------|------------------|----------------------------|
| `test-design` | `tasks.md` (test task generation) | **HIGH** ✅ | Add structured test scenario generation + TDD ordering |
| `risk-profile` | `plan.md` (risk assessment phase) | **HIGH** ✅ | Add constitutional risk constraint generation |
| `trace-requirements` | `tasks.md` (requirement mapping) | **HIGH** ✅ | Add requirement-to-task traceability matrix |
| `nfr-assess` | `plan.md` (NFR validation) | **HIGH** ✅ | Add non-functional requirement specifications |
| `qa-gate` | `tasks.md` (validation tasks) | **MEDIUM** 🔶 | Add constitutional compliance validation tasks |
| `apply-qa-fixes` | `tasks.md` (remediation tasks) | **MEDIUM** 🔶 | Add structured fix implementation tasks |
| `review-story` | `specify.md` (spec validation) | **MEDIUM** 🔶 | Add specification review and refinement |
| `validate-next-story` | `specify.md` (spec validation) | **MEDIUM** 🔶 | Add story specification validation rules |

### **WORKFLOW & COORDINATION OVERLAPS**

| **BMAD Task** | **Spec-Kit Command** | **Overlap Level** | **Enhancement Opportunity** |
|---------------|----------------------|------------------|----------------------------|
| `correct-course` | `plan.md` (plan adjustment) | **MEDIUM** 🔶 | Add structured plan correction workflow |
| `kb-mode-interaction` | `specify.md` (knowledge integration) | **LOW** 🟨 | Add knowledge base integration to specifications |
| `generate-ai-frontend-prompt` | `tasks.md` (implementation tasks) | **LOW** 🟨 | Add structured prompt generation for tasks |

---

## 📋 **Detailed Enhancement Opportunities**

### **HIGH-PRIORITY ENHANCEMENTS (Direct Overlaps)**

#### **1. BMAD `test-design` ← Spec-Kit `tasks.md` Testing Structure**

**Current BMAD Capability:**
- Comprehensive test scenario design
- Test level recommendations (unit/integration/e2e)
- Test priorities matrix (P0/P1/P2/P3)
- Given-When-Then requirement mapping

**Add from Spec-Kit:**
- Structured test task generation (T001, T002...)
- TDD-ordered test implementation sequence
- Parallel test execution planning
- Constitutional test compliance rules

**Enhanced Output:**
```yaml
Traditional: test-design-assessment.md
Enhanced: 
  - test-design-assessment.md (existing)
  - test-tasks-breakdown.md (T001: Unit tests, T002: Integration tests)
  - test-execution-plan.md (parallel execution strategy)
  - test-constitutional-rules.md (mode-based test requirements)
```

#### **2. BMAD `risk-profile` ← Spec-Kit `plan.md` Risk Constraints**

**Current BMAD Capability:**
- Probability × impact risk analysis
- Risk categorization (TECH, SEC, PERF, DATA)
- Risk mitigation strategies
- Testing focus area recommendations

**Add from Spec-Kit:**
- Constitutional risk constraint generation
- Risk-based specification requirements
- Phase-based risk validation gates
- Structured risk documentation

**Enhanced Output:**
```yaml
Traditional: risk-assessment-matrix.md
Enhanced:
  - risk-assessment-matrix.md (existing)
  - risk-constraints.md (constitutional requirements)
  - risk-validation-gates.md (phase-based checks)
  - risk-specification.md (testable risk requirements)
```

#### **3. BMAD `trace-requirements` ← Spec-Kit `tasks.md` Traceability Structure**

**Current BMAD Capability:**
- Requirements-to-test mapping
- Given-When-Then traceability patterns
- Gap analysis for test coverage
- Acceptance criteria validation

**Add from Spec-Kit:**
- Structured traceability task generation
- Requirement-to-implementation task mapping
- Constitutional traceability requirements
- Automated traceability validation

**Enhanced Output:**
```yaml
Traditional: traceability-matrix.md
Enhanced:
  - traceability-matrix.md (existing)
  - traceability-tasks.md (T001: Trace AC1, T002: Validate mapping)
  - traceability-validation.md (constitutional compliance)
  - requirement-implementation-map.md (structured mapping)
```

#### **4. BMAD `nfr-assess` ← Spec-Kit `plan.md` NFR Specifications**

**Current BMAD Capability:**
- Core NFR assessment (security, performance, reliability, maintainability)
- YAML gate file generation
- Technical preferences integration
- Architecture reference validation

**Add from Spec-Kit:**
- Structured NFR specification generation
- Constitutional NFR constraint creation
- NFR-to-implementation task mapping
- Phase-based NFR validation

**Enhanced Output:**
```yaml
Traditional: nfr-assessment.md + YAML gate block
Enhanced:
  - nfr-assessment.md (existing)
  - nfr-specifications.md (testable NFR requirements)
  - nfr-constitutional-rules.md (mode-based NFR constraints)
  - nfr-implementation-tasks.md (structured NFR task breakdown)
```

### **MEDIUM-PRIORITY ENHANCEMENTS (Partial Overlaps)**

#### **5. BMAD `brownfield-create-epic` ← Spec-Kit `specify.md` Brownfield Specs**

**Enhancement**: Add constitutional specification generation for brownfield analysis
- Structured brownfield requirement capture
- Legacy system constraint documentation
- Migration specification generation
- Risk-aware brownfield specifications

#### **6. BMAD `create-deep-research-prompt` ← Spec-Kit `plan.md` Research Structure**

**Enhancement**: Add structured research.md output format
- Phase-based research artifact generation
- Technical decision documentation
- Research-to-specification traceability
- Constitutional research requirements

#### **7. BMAD `facilitate-brainstorming-session` ← Spec-Kit `specify.md` Ideation Capture**

**Enhancement**: Add structured specification capture from brainstorming
- Brainstorming-to-specification workflow
- Idea prioritization and specification
- Constitutional constraint application to ideas
- Structured ideation documentation

---

## 🚀 **Implementation Strategy: Comprehensive Enhancement**

### **Phase 1: High-Priority Overlaps (QA-Focused)**
```bash
# Enhance QA-related BMAD tasks with Spec-Kit structure
sead task test-design --mode development
sead task risk-profile --mode development  
sead task trace-requirements --mode development
sead task nfr-assess --mode development
→ Generate both BMAD sophisticated analysis + Spec-Kit structured output
→ Create constitutional constraints for validation
```

### **Phase 2: Planning & Architecture Overlaps**
```bash
# Enhance planning BMAD tasks with Spec-Kit artifacts
sead task create-deep-research-prompt --mode development
sead task document-project --mode development
→ Generate structured artifacts (research.md, data-model.md, contracts/)
→ Populate sead-catalog/ domains automatically
```

### **Phase 3: Workflow & Story Overlaps**
```bash
# Enhance workflow BMAD tasks with Spec-Kit structure
sead task create-next-story --mode development
sead task brownfield-create-epic --mode development
→ Generate numbered task breakdowns with dependencies
→ Create constitutional workflow constraints
```

---

## 📊 **Expected Catalog Population**

### **From QA Enhancements:**
```bash
sead task test-design --mode development
→ sead-catalog/test-patterns/[test-strategies].md
→ sead-catalog/validation-schemas/[test-requirements].md

sead task risk-profile --mode development
→ sead-catalog/error-handling/[risk-mitigation].md
→ sead-catalog/validation-schemas/[risk-constraints].md

sead task nfr-assess --mode development
→ sead-catalog/validation-schemas/[nfr-requirements].md
→ sead-catalog/deployment-strategy/[performance-constraints].md
```

### **From Planning Enhancements:**
```bash
sead task create-deep-research-prompt --mode development
→ sead-catalog/data-strategy/[research-findings].md
→ sead-catalog/integration-patterns/[technical-decisions].md

sead task document-project --mode development
→ sead-catalog/api-contracts/[extracted-endpoints].md
→ sead-catalog/shared-types/[data-models].md
```

---

## ✅ **Comprehensive Enhancement Value**

### **Total BMAD Tasks Identified**: 20
### **High Overlap Tasks**: 8 (40%)
### **Medium Overlap Tasks**: 7 (35%)
### **Low Overlap Tasks**: 5 (25%)

### **Enhancement Impact**:
1. **QA System**: 6 enhanced tasks create comprehensive constitutional QA framework
2. **Planning System**: 4 enhanced tasks generate structured architectural artifacts  
3. **Workflow System**: 3 enhanced tasks create spec-driven story/epic management
4. **Catalog Population**: All enhanced tasks automatically populate relevant domains

**This comprehensive approach creates a unified spec-driven development system while preserving BMAD's sophisticated agent-based workflows.**

---

**Document Version**: 2.0  
**Last Updated**: 2025-01-05  
**Status**: Comprehensive Analysis Complete