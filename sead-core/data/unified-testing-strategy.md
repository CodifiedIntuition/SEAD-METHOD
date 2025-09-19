<!-- Powered by SEAD-METHOD™ Core -->

# Unified Testing Strategy

**Purpose:** Comprehensive testing framework consolidating test levels, priorities, and strategic guidance for SEAD-METHOD quality assurance.

*This document consolidates: test-levels-framework.md, test-priorities-matrix.md*

## Part 1: Test Level Decision Framework

### Test Level Selection Matrix

| Test Level | When to Use | Characteristics | Example Scenarios |
|------------|-------------|-----------------|-------------------|
| **Unit Tests** | Testing pure functions, business logic, algorithms, input validation | Fast execution, no external dependencies, highly maintainable | Price calculations, data transformations, validation rules |
| **Integration Tests** | Component interaction, database operations, API contracts, service communication | Moderate execution time, tests boundaries, may use test containers | User creation with role assignment, service-to-service communication |
| **End-to-End Tests** | Critical user journeys, cross-system workflows, compliance requirements | Slower execution, complete workflows, full environment setup | Complete checkout process, multi-system authentication flows |

### Test Level Selection Rules

#### Favor Unit Tests When:
- Logic can be isolated without side effects
- Fast feedback needed for development
- High cyclomatic complexity requires detailed coverage
- Business rules need precise validation

#### Favor Integration Tests When:
- Testing persistence layer interactions
- Validating service contracts and boundaries
- Testing middleware/interceptors behavior
- Component integration is critical to functionality

#### Favor E2E Tests When:
- User-facing critical paths require full validation
- Multi-system interactions must be verified
- Regulatory compliance scenarios need complete coverage
- Visual regression testing is important

### Anti-patterns to Avoid
- E2E testing for business logic validation (use unit tests)
- Unit testing framework behavior (trust the framework)
- Integration testing third-party libraries (mock them)
- Duplicate coverage across levels without justification

## Part 2: Test Priority Framework

### Priority Classification System

#### P0 - Critical (Must Test)
**Criteria:**
- Revenue-impacting functionality
- Security-critical paths
- Data integrity operations
- Regulatory compliance requirements
- Previously broken functionality (regression prevention)

**Testing Requirements:**
- Comprehensive coverage at all levels
- Both happy and unhappy paths
- Edge cases and error scenarios
- Performance under load

**Examples:** Payment processing, authentication/authorization, user data operations, financial calculations, GDPR/privacy compliance

#### P1 - High (Should Test)
**Criteria:**
- Core user journeys
- Frequently used features
- Features with complex logic
- Integration points between systems
- Features affecting user experience

**Testing Requirements:**
- Primary happy paths required
- Key error scenarios
- Critical edge cases
- Basic performance validation

**Examples:** User registration flow, search functionality, data import/export, notification systems, dashboard displays

#### P2 - Medium (Nice to Test)
**Criteria:**
- Secondary features
- Admin functionality
- Reporting features
- Configuration options
- UI polish and aesthetics

**Testing Requirements:**
- Happy path coverage
- Basic error handling
- Can defer edge cases

**Examples:** Admin settings panels, report generation, theme customization, help documentation, analytics tracking

#### P3 - Low (Test if Time Permits)
**Criteria:**
- Rarely used features
- Nice-to-have functionality
- Cosmetic issues
- Non-critical optimizations

**Testing Requirements:**
- Smoke tests only
- Can rely on manual testing
- Document known limitations

**Examples:** Advanced preferences, legacy feature support, experimental features, debug utilities

## Part 3: Risk-Based Priority Adjustments

### Increase Priority When:
- High user impact (affects >50% of users)
- High financial impact (>$10K potential loss)
- Security vulnerability potential
- Compliance/legal requirements
- Customer-reported issues
- Complex implementation (>500 LOC)
- Multiple system dependencies

### Decrease Priority When:
- Feature flag protected
- Gradual rollout planned
- Strong monitoring in place
- Easy rollback capability
- Low usage metrics
- Simple implementation
- Well-isolated component

## Part 4: Coverage Requirements by Priority

| Priority | Unit Coverage | Integration Coverage | E2E Coverage |
|----------|---------------|---------------------|--------------|
| **P0** | >90% | >80% | All critical paths |
| **P1** | >80% | >60% | Main happy paths |
| **P2** | >60% | >40% | Smoke tests |
| **P3** | Best effort | Best effort | Manual only |

## Part 5: SEAD Mode Integration

### Prototype Mode Testing
- **Focus**: Speed of implementation and experimentation capability
- **Quality Relaxation**: 20% lower thresholds for performance and coverage
- **Documentation Minimum**: Basic usage examples and known limitations
- **Testing Requirements**: Functional validation sufficient, comprehensive testing optional

### Development Mode Testing
- **Balanced Approach**: Quality and development velocity balanced
- **Standard Thresholds**: Full quality metrics applied as documented
- **Documentation Standard**: Comprehensive documentation required
- **Testing Requirements**: Full testing strategy implementation required

### Build-to-Deploy Mode Testing
- **Maximum Quality**: 15% higher thresholds for production readiness
- **Zero Tolerance**: Critical and high-severity issues must be resolved
- **Documentation Excellence**: Complete documentation with expert validation
- **Testing Rigor**: Enhanced testing requirements, including security and performance

## Part 6: Test Execution Strategy

### Test Execution Order
1. **Execute P0 tests first** (fail fast on critical issues)
2. **Execute P1 tests second** (core functionality validation)
3. **Execute P2 tests if time permits** (secondary feature validation)
4. **P3 tests only in full regression cycles** (comprehensive validation)

### Priority Decision Tree
```
Is it revenue-critical?
├─ YES → P0
└─ NO → Does it affect core user journey?
    ├─ YES → Is it high-risk?
    │   ├─ YES → P0
    │   └─ NO → P1
    └─ NO → Is it frequently used?
        ├─ YES → P1
        └─ NO → Is it customer-facing?
            ├─ YES → P2
            └─ NO → P3
```

## Part 7: Quality Gates and Continuous Improvement

### Continuous Priority Adjustment
Review and adjust priorities based on:
- Production incident patterns
- User feedback and complaints
- Usage analytics and metrics
- Test failure history
- Business priority changes

### Test Quality Metrics
- **Fast execution**: Unit tests ≤10s, Integration tests ≤30s, E2E tests ≤60s
- **High reliability**: 99.9%+ for P0, 99%+ for P1, 95%+ for P2/P3
- **Maintainable tests**: Clear naming, good structure, minimal duplication

### Test Naming Conventions
- **Unit**: `test_{component}_{scenario}`
- **Integration**: `test_{flow}_{interaction}`
- **E2E**: `test_{journey}_{outcome}`

### Test ID Format
`{EPIC}.{STORY}-{LEVEL}-{SEQ}`

Examples: `1.3-UNIT-001`, `1.3-INT-002`, `1.3-E2E-001`

## Usage Instructions
1. Determine current SEAD mode and apply appropriate testing rigor
2. Classify features by priority using decision tree and risk factors
3. Select appropriate test levels based on functionality and risk
4. Apply coverage requirements based on priority classification
5. Execute tests in priority order for efficient feedback
6. Continuously adjust priorities based on production feedback and business changes