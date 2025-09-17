<!-- Powered by SEAD-METHOD™ Core -->

# Unified Quality Framework

**Purpose:** Comprehensive quality framework consolidating metrics, validation rules, and efficiency measures for SEAD-METHOD catalog governance.

*This document consolidates: catalog-efficiency-metrics.md, pattern-quality-metrics.md, catalog-validation-rules.md*

## Part 1: Catalog Efficiency Metrics

### Core Metrics
- **Reuse Coverage (%)** – proportion of stories leveraging existing catalog patterns
- **Deviation Count** – number of approved deviations per sprint; target zero in build-to-deploy
- **Pattern Debt Index** – weighted backlog of required catalog updates (Tier 1–4 from catalog-pattern-priorities.md)
- **Validation Throughput** – time from story ready to catalog compliance confirmation
- **Accessibility Confidence** – percentage of stories with validated accessibility evidence

### Data Collection Guidelines
1. Record metrics during sprint reviews or backlog refinement sessions
2. Update `sead-backlog-tmpl.yaml` and sprint artifacts with latest values
3. Investigate negative trends immediately; trigger corrective tasks (`sead-correct-course.md`)

### Interpretation Tips
- High deviation count may indicate missing patterns; schedule `sead-pattern-extraction.md`
- Low reuse coverage signals need for training or catalog evangelism
- Pattern debt index should trend downward as catalog matures

## Part 2: Pattern Quality Assessment Framework

### Quantitative Quality Metrics

#### **Maintainability Index (0-100 scale)**
- **Tier 1 Requirement**: 85-100 (Excellent maintainability)
- **Tier 2 Requirement**: 70-84 (Good maintainability)  
- **Tier 3 Requirement**: 55-69 (Moderate maintainability)
- **Tier 4 Requirement**: 40-54 (Acceptable for experimentation)

**Calculation Factors**:
- Cyclomatic complexity weighting: 40%
- Lines of code per method/function: 25%
- Comment density and quality: 20%
- Code duplication percentage: 15%

#### **Code Coverage Metrics**
- **Unit Test Coverage**:
  - Tier 1: ≥90% statement coverage, ≥85% branch coverage
  - Tier 2: ≥75% statement coverage, ≥70% branch coverage
  - Tier 3: ≥60% statement coverage, ≥55% branch coverage
  - Tier 4: ≥40% statement coverage, ≥35% branch coverage

#### **Performance Metrics**
- **API Patterns**:
  - Tier 1: ≤100ms p95, ≤200ms p99
  - Tier 2: ≤250ms p95, ≤500ms p99
  - Tier 3: ≤500ms p95, ≤1s p99
  - Tier 4: Acceptable baseline performance for experiments

- **UI Component Patterns**:
  - Tier 1: ≤16ms render time, ≤50ms first meaningful paint
  - Tier 2: ≤32ms render time, ≤100ms first meaningful paint
  - Tier 3: ≤50ms render time, ≤200ms first meaningful paint
  - Tier 4: Functional performance adequate for prototyping

### Qualitative Quality Assessment

#### **Documentation Quality Requirements**
- **Tier 1 Standards**: Expert review validation with perfect clarity scores
- **Tier 2 Standards**: Good clarity scores from domain expert review
- **Tier 3 Standards**: Adequate clarity for target audience
- **Tier 4 Standards**: Basic documentation explaining experimental purpose

#### **Accessibility Compliance (WCAG 2.1)**
- **Tier 1**: AAA compliance, comprehensive testing, assistive technology support
- **Tier 2**: AA compliance, automated testing, keyboard navigation support
- **Tier 3**: A compliance minimum, basic accessibility considerations
- **Tier 4**: Accessibility awareness, major barriers identified

## Part 3: Catalog Validation Rules

### Core Validation Principles
- **Catalog First**: Tests must exercise catalog-approved components, APIs, and data models. Any deviation requires documented waiver plus `sead-pattern-extraction.md` follow-up
- **Mode Alignment**: Validation depth scales with `core-config.yaml` mode—prototype (baseline checks), development (comprehensive coverage), build-to-deploy (zero deviations, full evidence)
- **Traceability**: Every requirement maps to catalog entities; test cases must reference canonical paths

### Domain-Specific Validation Rules
- **UI / Design System**: Verify catalog components render correctly across states; accessibility acceptance derived from `accessibility-standards.md` and design tokens
- **API Contracts**: Assert request/response structures match catalog contracts; schema validation uses `validation-schemas/` assets
- **State Management**: Ensure state transitions follow catalog patterns; monitor side effects logged via catalog utilities
- **Error Handling**: Confirm catalog error responses, user messaging, and logging patterns are honored

### Evidence Requirements
- Link test artifacts to catalog references
- Record validation results with PASS/FAIL per rule
- Capture waivers with rationale, owner, expiration, and remediation plan

### Quality Gate Integration Points
1. **Initial Quality Assessment**: Baseline quality measurement during pattern identification
2. **Classification Support**: Quality metrics inform tier classification decisions
3. **Continuous Monitoring**: Ongoing quality tracking for pattern evolution
4. **Promotion Criteria**: Quality thresholds for tier advancement
5. **Deprecation Triggers**: Quality degradation detection for pattern retirement

### SEAD Mode Considerations
- **Prototype Mode**: Focus on innovation metrics and experimental validation
- **Development Mode**: Standard quality metrics with comprehensive assessment
- **Build-to-Deploy Mode**: Enhanced quality requirements with strict threshold enforcement

## Usage Instructions
1. Load this document when initiating any quality assessment workflow
2. Reference relevant sections based on current SEAD mode and quality context
3. Apply appropriate tier requirements based on pattern classification
4. Document all quality measurements and validation results for audit trail