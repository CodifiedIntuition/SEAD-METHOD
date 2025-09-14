# SEAD Risk Profile Task

Generate a comprehensive, catalog-aware risk assessment matrix for story implementation using probability × impact analysis with constitutional compliance considerations.

## Constitutional Compliance

### Pre-Action Requirements
- **Mandatory Catalog Read**: Review relevant catalog domains and constitutional framework documentation
- **Mode Detection**: Identify current development mode (prototype/development/build-to-deploy)
- **Context Preservation**: Maintain catalog references and constraint awareness throughout risk assessment

### Mode-Specific Risk Assessment

#### Prototype Mode
- **Experimental Risk Tolerance**: Allow higher technical and innovation risks
- **Catalog Deviation Documentation**: Document non-catalog patterns for potential inclusion
- **Basic Constitutional Validation**: Simple governance compliance checks
- **Innovation vs. Risk Balance**: Weight creativity against fundamental security/data risks

#### Development Mode
- **Catalog Compliance Risks**: Assess risks of catalog deviation and migration complexity
- **Integration Risk Focus**: Emphasize risks related to catalog pattern integration
- **Constitutional Governance**: Include governance framework compliance risks
- **Balanced Risk Management**: Catalog-aware risk mitigation with justified exceptions

#### Build-to-Deploy Mode
- **Catalog-Only Risk Assessment**: Focus on risks within catalog pattern boundaries only
- **Constitutional Compliance Critical**: Treat governance violations as high-impact risks
- **Production Risk Emphasis**: Prioritize operational and security risks
- **Zero Tolerance**: No tolerance for constitutional framework violations

## Inputs

```yaml
required:
  - story_id: '{epic}.{story}' # e.g., "1.3"
  - story_path: 'docs/stories/{epic}.{story}.*.md'
  - story_title: '{title}' # If missing, derive from story file H1
  - story_slug: '{slug}' # If missing, derive from title (lowercase, hyphenated)
  - catalog_context: 'relevant catalog domains and patterns'
  - development_mode: 'prototype|development|build-to-deploy'
  - constitutional_constraints: 'applicable SEAD governance principles'
```

## Purpose

Identify, assess, and prioritize risks in story implementation while maintaining catalog compliance and constitutional alignment. Provide risk mitigation strategies and testing focus areas based on SEAD governance principles.

## SEAD Risk Assessment Framework

### Enhanced Risk Categories with Constitutional Context

**Category Prefixes:**

- `TECH`: Technical Risks (including catalog integration)
- `SEC`: Security Risks (constitutional security compliance)
- `PERF`: Performance Risks (catalog pattern performance)
- `DATA`: Data Risks (constitutional data governance)
- `BUS`: Business Risks (catalog adoption and governance)
- `OPS`: Operational Risks (constitutional compliance monitoring)
- `CAT`: Catalog Risks (pattern compliance and evolution)
- `GOV`: Governance Risks (constitutional framework adherence)

1. **Technical Risks (TECH)** - Catalog-Enhanced
   - Architecture complexity within catalog constraints
   - Integration challenges with catalog patterns
   - Technical debt from catalog deviations
   - Scalability concerns in catalog-compliant solutions
   - System dependencies on catalog components

2. **Security Risks (SEC)** - Constitutional Security
   - Authentication/authorization within catalog auth patterns
   - Data exposure vulnerabilities in catalog-compliant systems
   - Injection attacks against catalog API patterns
   - Session management using catalog session strategies
   - Cryptographic weaknesses in catalog security patterns

3. **Performance Risks (PERF)** - Catalog Pattern Performance
   - Response time degradation from catalog overhead
   - Throughput bottlenecks in catalog-compliant designs
   - Resource exhaustion in catalog pattern implementations
   - Database query optimization within catalog data patterns
   - Caching failures in catalog-defined caching strategies

4. **Data Risks (DATA)** - Constitutional Data Governance
   - Data loss potential in catalog data management patterns
   - Data corruption risks in catalog-compliant storage
   - Privacy violations within catalog privacy patterns
   - Compliance issues with catalog governance requirements
   - Backup/recovery gaps in catalog data strategies

5. **Business Risks (BUS)** - Catalog Adoption Risks
   - Feature doesn't meet user needs due to catalog constraints
   - Revenue impact from catalog adoption overhead
   - Reputation damage from catalog-related issues
   - Regulatory non-compliance despite catalog patterns
   - Market timing affected by catalog development constraints

6. **Operational Risks (OPS)** - Constitutional Operations
   - Deployment failures in catalog-compliant environments
   - Monitoring gaps in catalog pattern implementations
   - Incident response readiness for catalog-related issues
   - Documentation inadequacy for catalog integration
   - Knowledge transfer issues with catalog patterns

7. **Catalog Risks (CAT)** - New SEAD Category
   - Catalog pattern obsolescence or evolution conflicts
   - Integration complexity between catalog domains
   - Catalog pattern performance limitations
   - Team adoption resistance to catalog constraints
   - Catalog maintenance and evolution overhead

8. **Governance Risks (GOV)** - New SEAD Category
   - Constitutional framework violations
   - Inadequate constraint enforcement
   - Governance process bypassing
   - Context loss during agent handoffs
   - Constitutional compliance monitoring failures

## SEAD Risk Analysis Process

### 1. Catalog-Aware Risk Identification

For each category, identify specific risks with catalog and constitutional context:

```yaml
risk:
  id: 'CAT-001' # Use enhanced prefixes: SEC, PERF, DATA, BUS, OPS, TECH, CAT, GOV
  category: catalog
  title: 'API contract divergence from catalog pattern'
  description: 'Story implementation may deviate from established API contract patterns, creating integration risks'
  affected_components:
    - 'UserRegistrationAPI'
    - 'api-contracts/auth/register.yaml'
  catalog_domains:
    - 'api-contracts'
    - 'shared-types'
  constitutional_implications: 'Violates catalog-first principle in development mode'
  detection_method: 'Catalog compliance review revealed pattern deviation'
  mode_relevance: 'Critical in development/deploy modes, acceptable in prototype'
```

### 2. Constitutional Risk Assessment

Evaluate each risk using probability × impact with constitutional weighting:

**Constitutional Probability Adjustment:**
- Prototype Mode: Base probability assessment
- Development Mode: +1 probability for catalog deviations
- Build-to-Deploy Mode: +2 probability for constitutional violations

**Constitutional Impact Weighting:**
- Governance violations: +1 impact level in development/deploy modes
- Catalog compliance risks: +1 impact level in deploy mode
- Context preservation failures: +1 impact level across all modes

### Risk Score = (Probability × Impact) × Constitutional Multiplier

**Constitutional Multipliers:**
- Prototype Mode: 1.0x (standard scoring)
- Development Mode: 1.2x (20% increase for catalog risks)
- Build-to-Deploy Mode: 1.5x (50% increase for constitutional risks)

### 3. SEAD Risk Prioritization

Create constitutional risk matrix:

```markdown
## Constitutional Risk Matrix

| Risk ID  | Description             | Catalog Domain | Probability | Impact     | Base Score | Constitutional Score | Priority |
| -------- | ----------------------- | -------------- | ----------- | ---------- | ---------- | ------------------- | -------- |
| GOV-001  | Context loss violation  | All            | High (3)    | High (3)   | 9          | 13.5 (Deploy)      | Critical |
| CAT-001  | API pattern deviation   | api-contracts  | Medium (2)  | High (3)   | 6          | 9.0 (Deploy)       | Critical |
| SEC-001  | Auth outside catalog    | auth-patterns  | Medium (2)  | Medium (2) | 4          | 6.0 (Deploy)       | High     |
```

### 4. Constitutional Risk Mitigation Strategies

For each identified risk, provide SEAD-aligned mitigation:

```yaml
mitigation:
  risk_id: 'CAT-001'
  strategy: 'preventive' # preventive|detective|corrective|constitutional
  constitutional_approach: 'catalog_compliance' # catalog_compliance|governance_escalation|mode_transition
  actions:
    - 'Review api-contracts catalog for compliant patterns'
    - 'Implement catalog-approved API structure'
    - 'Document any necessary catalog evolution needs'
    - 'Validate against constitutional constraints for current mode'
  catalog_integration:
    - 'Update api-contracts if pattern evolution needed'
    - 'Ensure cross-domain consistency with shared-types'
    - 'Validate integration with auth-patterns'
  testing_requirements:
    - 'Catalog compliance validation tests'
    - 'Constitutional framework adherence checks'
    - 'Integration tests with existing catalog patterns'
  residual_risk: 'Low - Catalog pattern ensures consistency and maintainability'
  constitutional_compliance: 'Full compliance achieved for current mode'
  owner: 'sead-developer'
  timeline: 'Before constitutional validation gate'
```

## SEAD Outputs

### Output 1: Constitutional Gate YAML Block

Generate for pasting into gate file under `sead_risk_summary`:

```yaml
# sead_risk_summary (paste into gate file):
sead_risk_summary:
  constitutional_context:
    mode: 'development'
    catalog_domains: ['api-contracts', 'shared-types', 'auth-patterns']
    governance_compliance: 'validated'
  risk_totals:
    critical: X # constitutional score ≥ 12
    high: Y # constitutional score 8-11
    medium: Z # constitutional score 4-7
    low: W # constitutional score 1-3
  catalog_risks:
    pattern_deviations: X
    integration_failures: Y
    governance_violations: Z
  highest:
    id: GOV-001
    base_score: 9
    constitutional_score: 13.5
    title: 'Context preservation violation'
  constitutional_recommendations:
    must_fix:
      - 'Implement catalog compliance validation'
      - 'Add constitutional constraint enforcement'
    monitor:
      - 'Track catalog pattern adoption metrics'
      - 'Monitor governance framework adherence'
    catalog_evolution:
      - 'Consider pattern updates for recurring deviations'
```

### Output 2: SEAD Constitutional Risk Report

**Save to:** `qa.qaLocation/assessments/{epic}.{story}-sead-risk-{YYYYMMDD}.md`

```markdown
# SEAD Risk Profile: Story {epic}.{story}

Date: {date}
Reviewer: SEAD QA Agent
Development Mode: {mode}
Catalog Domains: {domains}

## Constitutional Framework Summary

- **Governance Compliance**: [Full|Partial|Requires Attention]
- **Catalog Integration**: [Complete|In Progress|Needs Review]
- **Context Preservation**: [Maintained|At Risk|Compromised]
- **Constitutional Score**: XX/150 (mode-adjusted)

## Executive Summary

- Total Risks Identified: X (Y catalog-specific, Z governance-related)
- Critical Constitutional Risks: Y
- High Catalog Compliance Risks: Z
- Mode-Adjusted Risk Score: XX/150

## Critical Constitutional Risks Requiring Immediate Attention

### 1. [ID]: Constitutional Risk Title

**Constitutional Score**: 13.5 (Critical)
**Base Score**: 9 (Mode Multiplier: 1.5x)
**Catalog Domain**: [affected domains]
**Constitutional Implications**: [governance framework impact]
**Mitigation**:

- Catalog compliance actions required
- Constitutional framework alignment steps
- Mode-appropriate resolution strategies

**Testing Focus**: Constitutional validation scenarios needed

## Risk Distribution

### By Constitutional Category

- Governance: X risks (Y critical)
- Catalog Compliance: X risks (Y critical)
- Security (Constitutional): X risks (Y critical)
- Performance (Catalog): X risks (Y critical)
- Data (Governance): X risks (Y critical)
- Operational (Constitutional): X risks (Y critical)

### By Catalog Domain

- API Contracts: X risks
- Shared Types: X risks
- Design System: X risks
- Auth Patterns: X risks
- [other domains]: X risks

## Constitutional Risk-Based Testing Strategy

### Priority 1: Governance Framework Tests

- Constitutional compliance validation
- Catalog pattern adherence testing
- Context preservation verification
- Mode constraint enforcement testing

### Priority 2: Catalog Integration Tests

- Cross-domain pattern compatibility
- Integration with existing catalog components
- Performance impact of catalog compliance

### Priority 3: Standard Risk Tests

- Traditional functional and security tests
- Regression testing within catalog constraints

## Constitutional Risk Acceptance Criteria

### Must Fix Before Production (Constitutional Blockers)

- All governance framework violations (GOV risks score ≥ 9)
- Critical catalog compliance failures in deploy mode
- Context preservation violations

### Can Deploy with Constitutional Mitigation

- Medium catalog risks with compensating patterns
- Low governance risks with monitoring in place

### Accepted Constitutional Risks

- Document any catalog limitations team accepts
- Include sign-off from SEAD governance authority

## SEAD Monitoring Requirements

Post-deployment constitutional monitoring for:

- Catalog pattern performance and adoption metrics
- Governance framework adherence monitoring
- Context preservation across agent handoffs
- Constitutional compliance dashboard metrics

## Constitutional Risk Review Triggers

Review and update SEAD risk profile when:

- Development mode transitions occur
- Catalog patterns are updated or evolved
- Constitutional framework modifications made
- Governance violations detected
- New catalog domains introduced
```

## Constitutional Risk Scoring Algorithm

Calculate SEAD constitutional risk score:

```text
Base Score = 150 (increased for constitutional framework)
For each risk (using constitutional scores):
  - Critical (≥12): Deduct 25 points
  - High (8-11): Deduct 15 points
  - Medium (4-7): Deduct 8 points
  - Low (1-3): Deduct 3 points

Additional Constitutional Penalties:
  - Governance violations: Additional -10 points per violation
  - Catalog non-compliance in deploy mode: Additional -5 points per issue
  - Context preservation failures: Additional -15 points per failure

Minimum score = 0 (constitutionally non-compliant)
Maximum score = 150 (full constitutional compliance)
```

## Constitutional Escalation Procedures

**Governance Violations:**
- If risks violate constitutional constraints, escalate to SEAD Master
- Provide constitutional compliance alternatives
- Document governance framework limitations for evolution

**Catalog Pattern Conflicts:**
- If requirements conflict with catalog patterns, escalate to Catalog Architect
- Offer pattern evolution or constitutional exemption procedures
- Maintain system integrity during resolution

**Mode Transition Requirements:**
- If risk mitigation requires mode transition, explain constitutional implications
- Guide through governance-compliant transition procedures
- Validate constitutional compliance post-transition

## Success Criteria

- All risk assessment maintains constitutional compliance for current mode
- Catalog integration risks are identified and mitigated appropriately
- Governance framework adherence is validated and enforced
- Risk mitigation strategies align with SEAD principles and catalog patterns
- Context preservation is maintained throughout risk management process