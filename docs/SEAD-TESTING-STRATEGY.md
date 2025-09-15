# SEAD Method Testing Strategy - 6 Core Agents

## Executive Summary

Based on analysis of the SEAD-METHOD repository, I've identified critical dependencies that prevent the 6 core agents from functioning properly. This strategy provides a step-by-step approach to test and validate these agents through incremental bootstrapping and real-world validation.

## Current State Analysis

### ✅ What Exists (Good Foundation)
- Complete agent definitions with embedded YAML configuration
- Comprehensive task library (50+ tasks in `sead-core/tasks/`)  
- Template system (30+ templates in `sead-core/templates/`)
- Constitutional framework (`sead-core/constitutional-rules/`)
- Core configuration (`sead-core/core-config.yaml`)
- Catalog template structure (`sead-catalog/`)
- Documentation and checklists

### ❌ Critical Missing Dependencies
1. **No `sead.config.yaml`** - Required by ALL agents for project-specific configuration
2. **Empty catalog structure** - All catalog domains have only README.md files
3. **Missing project documents** - Referenced by agents but don't exist:
   - `docs/sead-project-brief.md`
   - `docs/sead-prd.md` 
   - `docs/sead-architecture.md`
   - `docs/sead-front-end-spec.md`
4. **No story files** - Story location configured but no actual stories
5. **No QA artifacts** - Gate files and assessment directories missing

## Recommended Testing Approach

### Option 1: In-Place Testing (RECOMMENDED) 
**Clone target repos into SEAD-METHOD workspace**

**Pros:**
- SEAD agents have immediate access to their dependencies  
- Can test catalog generation from existing codebases
- Maintains clean SEAD-METHOD repository structure
- Enables iterative development of missing dependencies

**Structure:**
```
SEAD-METHOD/
├── sead-core/ (existing)
├── sead-catalog/ (existing)
├── test-projects/
│   ├── target-repo-1/
│   ├── target-repo-2/
│   └── target-repo-3/
├── sead.config.yaml (NEW - points to test projects)
└── docs/ (enhanced with missing project docs)
```

### Option 2: Copy SEAD to Target Repos
**Copy SEAD structure to each target repository**

**Pros:**
- Real-world deployment scenario
- Tests SEAD portability

**Cons:**
- Must bootstrap dependencies in each repo separately
- Harder to iterate on SEAD improvements
- Pollutes target repos during testing

## 6 Core Agents Testing Priority Order

### Phase 1: Foundation Agents (Weeks 1-2)

#### 1. **sead-catalog-architect** (HIGHEST PRIORITY)
**Why First:** Creates the foundation catalog that all other agents depend on

**Dependencies to Bootstrap:**
- ✅ Already exists: `sead-core/core-config.yaml`
- ❌ Missing: `sead.config.yaml` (project-specific config)
- ❌ Missing: Target codebase for brownfield analysis

**Test Plan:**
```yaml
test_case_1: 
  name: "Brownfield Catalog Generation"
  setup:
    - Clone a sample repo into test-projects/
    - Create basic sead.config.yaml
    - Activate sead-catalog-architect
  execute:
    - Run brownfield-catalog-generation task
    - Extract patterns from existing codebase
    - Generate catalog structure
  validate:
    - Catalog domains populated with real patterns
    - Pattern quality meets standards
    - Documentation generated correctly
```

#### 2. **sead-pattern-extraction** (SECOND)
**Why Second:** Works with catalog-architect to extract and classify patterns

**Dependencies:** Same as catalog-architect plus generated catalog structure

**Test Plan:**
```yaml
test_case_1:
  name: "Pattern Classification Workflow" 
  setup:
    - Use catalog created by sead-catalog-architect
    - Activate sead-pattern-extraction
  execute:
    - Run pattern-identification-workflow task
    - Run pattern-classification-workflow task
    - Run pattern-quality-assessment task
  validate:
    - Patterns properly classified by domain
    - Quality metrics calculated
    - Integration recommendations generated
```

### Phase 2: Architecture & Planning (Weeks 2-3)

#### 3. **sead-architect** (THIRD)
**Why Third:** Needs catalog foundation to create architecture aligned with patterns

**Dependencies to Bootstrap:**
- ❌ Missing: `docs/sead-architecture.md` (referenced in tasks)
- ❌ Missing: Architecture sharding directory structure

**Test Plan:**
```yaml
test_case_1:
  name: "Architecture Documentation Generation"
  setup:
    - Use populated catalog from Phase 1
    - Create basic architecture template
    - Activate sead-architect
  execute:
    - Run sead-document-project task for architecture
    - Generate technical specifications
    - Create implementation guidance
  validate:
    - Architecture aligns with catalog patterns
    - Constitutional compliance validated
    - Implementation guidance actionable
```

#### 4. **sead-product-owner** (FOURTH)
**Why Fourth:** Needs architectural foundation to create meaningful product requirements

**Dependencies to Bootstrap:**
- ❌ Missing: `docs/sead-prd.md` 
- ❌ Missing: Epic/story directory structure

**Test Plan:**
```yaml
test_case_1:
  name: "Brownfield PRD Creation"
  setup:
    - Use architecture from Phase 2
    - Activate sead-product-owner
  execute:
    - Run sead-brownfield-create-epic task
    - Generate product requirements
    - Create user stories framework  
  validate:
    - PRD aligns with technical architecture
    - Epic structure supports development workflow
    - Catalog integration points identified
```

### Phase 3: Development Workflow (Weeks 3-4)

#### 5. **sead-scrum-master** (FIFTH) 
**Why Fifth:** Orchestrates development workflow using artifacts from previous phases

**Dependencies to Bootstrap:**
- ❌ Missing: Story files in configured location
- ❌ Missing: QA directory structure

**Test Plan:**
```yaml
test_case_1:
  name: "Story Creation Workflow"
  setup:
    - Use PRD and epics from Phase 2
    - Activate sead-scrum-master
  execute:
    - Run sead-create-next-story task
    - Generate story with catalog integration
    - Validate story completeness
  validate:
    - Story includes catalog component references
    - Mode constraints properly configured
    - Context preservation data complete
```

#### 6. **sead-developer** (SIXTH)
**Why Last:** Requires all previous artifacts to function properly

**Dependencies to Bootstrap:**
- ❌ Missing: Complete story with acceptance criteria
- ❌ Missing: Catalog pattern implementation examples

**Test Plan:**
```yaml
test_case_1:
  name: "Story Implementation"
  setup:
    - Use story created by sead-scrum-master
    - Ensure catalog patterns available
    - Activate sead-developer
  execute:
    - Implement story using catalog patterns
    - Apply constitutional constraints
    - Run validation workflow
  validate:
    - Implementation follows catalog patterns
    - Constitutional compliance achieved
    - Code quality gates passed
```

## Bootstrapping Process

### Step 1: Create Essential Configuration Files

#### A. Create `sead.config.yaml`
```yaml
# Place in SEAD-METHOD root directory
project:
  name: "SEAD Testing"
  type: "brownfield-testing"
  
# Point to test projects
repositories:
  - path: "./test-projects/target-repo-1"
    type: "brownfield"
  - path: "./test-projects/target-repo-2"  
    type: "brownfield"

# Use existing SEAD structure
sead_core_path: "./sead-core"
catalog_path: "./sead-catalog"
templates_path: "./sead-core/templates"

# Configure for testing
development:
  mode: "development"
  story_location: "./test-stories"
  qa_location: "./test-qa"
  docs_location: "./test-docs"

# Enable all features for testing
features:
  catalog_generation: true
  pattern_extraction: true
  constitutional_validation: true
  context_preservation: true
```

#### B. Create Test Directory Structure  
```bash
mkdir -p test-projects test-stories test-qa test-docs
mkdir -p test-docs/prd-shards test-docs/arch-shards
```

### Step 2: Prepare Target Repositories

**Recommended Test Repos:**
1. **Simple Node.js API** - Tests API contract extraction
2. **React/Next.js Frontend** - Tests UI pattern extraction  
3. **Full-Stack Application** - Tests end-to-end catalog generation

```bash
# Clone into test environment
cd SEAD-METHOD/test-projects/
git clone <target-repo-1> ./api-project
git clone <target-repo-2> ./frontend-project
git clone <target-repo-3> ./fullstack-project
```

### Step 3: Bootstrap Missing Documents

Create minimal versions of referenced documents:

#### A. Basic Project Brief
```bash
# test-docs/sead-project-brief.md
echo "# Test Project Brief\nTesting SEAD agent functionality" > test-docs/sead-project-brief.md
```

#### B. Placeholder Architecture
```bash
# Use template as starting point  
cp sead-core/templates/sead-architecture-tmpl.yaml test-docs/sead-architecture.md
```

### Step 4: Incremental Agent Testing

#### Test Sequence:
1. **Start with sead-catalog-architect**
   - Activate agent: Load agent file  
   - Run: `brownfield-catalog-generation` task on simple API project
   - Validate: Catalog structure created with API patterns

2. **Add sead-pattern-extraction**
   - Use catalog from step 1
   - Run: Pattern identification and classification
   - Validate: Patterns properly categorized

3. **Continue through remaining 4 agents**
   - Each builds on artifacts from previous agents
   - Validate end-to-end workflow

## Package vs Test-First Decision

### Recommendation: TEST FIRST, PACKAGE LATER

**Rationale:**
1. **Dependency Issues:** Packaging before testing would distribute broken agents
2. **Iterative Improvement:** Testing reveals gaps that need fixing before release  
3. **Real-World Validation:** Testing against actual codebases validates approach
4. **Documentation:** Testing generates examples and documentation for package

**Packaging Timeline:**
- **Week 4:** Initial package creation after core agents working
- **Week 6:** Beta release with documentation and examples
- **Week 8:** Public release with tested workflows

## Success Criteria

### Phase 1 Success (Catalog Foundation):
- [ ] sead-catalog-architect can analyze existing codebases
- [ ] Catalog structure populated with real patterns
- [ ] sead-pattern-extraction can classify and quality-assess patterns

### Phase 2 Success (Architecture & Planning):
- [ ] sead-architect creates catalog-aligned architecture docs  
- [ ] sead-product-owner creates meaningful brownfield PRDs
- [ ] Generated artifacts integrate with catalog patterns

### Phase 3 Success (Development Workflow):
- [ ] sead-scrum-master creates implementable stories with catalog integration
- [ ] sead-developer can implement stories using catalog patterns
- [ ] End-to-end workflow from analysis to implementation works

### Overall Success (Ready for Package):
- [ ] All 6 core agents functional with real codebases
- [ ] Constitutional framework enforced throughout
- [ ] Context preservation enables agent handoffs
- [ ] Documentation complete with working examples

## Risk Mitigation

### High Risk: Circular Dependencies
**Issue:** Agents reference files that need other agents to create
**Mitigation:** Bootstrap minimal versions manually, then let agents enhance them

### Medium Risk: Constitutional Constraint Conflicts  
**Issue:** Strict constraints might prevent agents from working in test environment
**Mitigation:** Start in prototype mode, gradually increase constraint enforcement

### Low Risk: Catalog Pattern Quality
**Issue:** Generated patterns might not meet quality standards
**Mitigation:** Start with simple codebases, refine quality criteria iteratively

## Next Steps

1. **Create `sead.config.yaml`** with test project configuration
2. **Set up test repository structure** in `test-projects/` 
3. **Clone 2-3 target repositories** of varying complexity
4. **Start Phase 1 testing** with sead-catalog-architect
5. **Document issues and fixes** as agents are tested
6. **Iterate on missing dependencies** based on test results

This approach ensures the 6 core agents work reliably before considering packaging or broader distribution.