# Pattern Classification Workflow

**Task ID**: pattern-classification-workflow  
**Agent**: sead-pattern-extraction + sead-catalog-architect  
**Output**: Classified patterns with validated domain assignment and tier classification  
**Dependencies**: pattern-quality-metrics.md, domain-pattern-taxonomy.md, anti-pattern-catalog.md, pattern-classification.md

## Overview

Systematic workflow for classifying extracted patterns using the SEAD domain taxonomy and quality tier framework, ensuring accurate pattern categorization that supports effective catalog organization and pattern discovery across all architectural domains.

## Phase 1: Pattern Domain Analysis and Assignment

### 1.1 Domain Boundary Analysis
**Agent**: sead-pattern-extraction
- Analyze pattern functionality and primary architectural concerns
- Identify pattern scope and responsibility boundaries
- Map pattern characteristics to SEAD domain taxonomy structure
- Assess cross-domain relationships and integration touchpoints

### 1.2 Primary Domain Assignment
**Agent**: sead-pattern-extraction + sead-catalog-architect
- Assign pattern to primary domain based on core functionality
- Validate domain assignment against taxonomy criteria
- Document rationale for domain placement and alternative considerations
- Identify secondary domains for cross-domain pattern relationships

**Elicit**: 
```
DOMAIN CLASSIFICATION ANALYSIS

Pattern: [Pattern Name]

Primary Domain Analysis:
- Core Functionality: [description]
- Architectural Layer: [API/UI/State/Data/Error/Testing/Auth/Integration/Deploy]
- Primary Responsibility: [main concern addressed]
- Proposed Primary Domain: [domain name]
- Confidence Level: [High/Medium/Low]

Secondary Domain Relationships:
- Related Domain 1: [domain] - Relationship: [integration/dependency/composition]
- Related Domain 2: [domain] - Relationship: [integration/dependency/composition]
- Cross-Domain Impact: [description of multi-domain implications]

Domain Assignment Rationale:
- Why this domain is most appropriate: [reasoning]
- Alternative domain considerations: [domains considered and why rejected]
- Boundary clarity: [how pattern boundaries align with domain boundaries]

Validation Required:
- Domain expert review needed: [Yes/No]
- Alternative domain validation: [list domains to validate against]
- Cross-domain relationship validation: [specific relationships to verify]

Proceed with domain assignment or require additional analysis?
```

## Phase 2: Subdomain Classification and Taxonomy Placement

### 2.1 Subdomain Analysis
**Agent**: sead-pattern-extraction
- Analyze pattern specificity within assigned primary domain
- Map pattern to appropriate subdomain based on taxonomy hierarchy
- Assess pattern granularity and specialization level
- Validate subdomain placement against existing pattern organization

### 2.2 Taxonomy Hierarchy Positioning
**Agent**: sead-catalog-architect
- Position pattern within domain taxonomy hierarchy
- Ensure consistent classification with existing patterns
- Validate taxonomy placement supports pattern discoverability
- Document taxonomy rationale and classification decisions

**Elicit**:
```
SUBDOMAIN TAXONOMY CLASSIFICATION

Pattern: [Pattern Name]
Primary Domain: [confirmed domain]

Subdomain Analysis:
- Target Subdomain: [subdomain classification]
- Specialization Level: [foundational/specialized/contextual/experimental]
- Granularity Assessment: [low-level implementation/mid-level pattern/high-level strategy]
- Positioning Rationale: [why this subdomain placement]

Taxonomy Hierarchy Position:
- Domain: [primary domain]
- Subdomain: [specific subdomain]
- Pattern Category: [pattern type within subdomain]
- Hierarchical Path: [full taxonomy path]

Consistency Validation:
- Similar Patterns in Subdomain: [list existing patterns]
- Classification Consistency: [how pattern aligns with subdomain patterns]
- Discoverability Impact: [how placement affects pattern discovery]

Taxonomy Integration:
- New Subdomain Required: [Yes/No - if yes, provide justification]
- Subdomain Enhancement: [how pattern adds to subdomain completeness]
- Cross-Subdomain Relationships: [relationships to other subdomains]

Confirm subdomain placement or adjust taxonomy hierarchy?
```

### 2.3 Cross-Domain Relationship Mapping
**Agent**: sead-pattern-extraction + sead-catalog-architect
- Document all cross-domain pattern relationships
- Map integration points and dependencies with other domains
- Validate relationship consistency with domain boundaries
- Plan cross-reference structure for catalog navigation

## Phase 3: Quality Tier Classification and Validation

### 3.1 Quality Tier Assessment
**Agent**: sead-pattern-extraction
- Apply pattern quality metrics framework for tier assessment
- Evaluate pattern against tier-specific quality criteria
- Assess reusability scope and complexity appropriateness
- Document quality evidence supporting tier classification

### 3.2 Tier-Specific Validation
**Agent**: sead-catalog-architect
- Validate tier assignment against constitutional requirements
- Confirm tier-specific documentation and testing standards
- Assess organizational readiness for pattern tier adoption
- Validate tier progression path and evolution potential

**Elicit**:
```
QUALITY TIER CLASSIFICATION

Pattern: [Pattern Name]
Domain: [primary domain] > [subdomain]

Quality Tier Assessment:
- Proposed Tier: [1-4 with tier name]
- Reusability Score: [1-10]/10
- Complexity Level: [Low/Medium/High]
- Quality Evidence Summary: [key quality indicators]

Tier-Specific Validation:
Tier [X] Requirements Assessment:
- Documentation Quality: [Exceeds/Meets/Below] tier standards
- Implementation Quality: [Exceeds/Meets/Below] tier standards  
- Testing Coverage: [percentage]% - [Exceeds/Meets/Below] tier requirements
- Security Assessment: [Exceeds/Meets/Below] tier standards
- Performance Validation: [Exceeds/Meets/Below] tier standards
- Constitutional Compliance: [Full/Partial/Minimal] compliance

Constitutional Requirements:
- Mode-Aware Behavior: [Supports prototype/development/build-to-deploy modes]
- Context Preservation: [Excellent/Good/Adequate/Poor]
- Governance Integration: [Complete/Partial/Basic/Missing]
- Audit Trail Support: [Comprehensive/Basic/Limited/None]

Tier Classification Rationale:
- Why this tier is appropriate: [detailed reasoning]
- Quality improvements needed for higher tier: [specific requirements]
- Risk of tier degradation: [factors that could lower tier]

Organizational Readiness:
- Team capability match: [tier appropriate for team skills - Yes/No]
- Adoption timeline: [immediate/short-term/long-term]
- Support requirements: [level of support needed for tier adoption]

Confirm tier classification or require quality improvements?
```

## Phase 4: Complexity and Reusability Classification

### 4.1 Complexity Level Analysis
**Agent**: sead-pattern-extraction
- Analyze pattern implementation complexity and cognitive load
- Assess integration complexity and dependency requirements
- Evaluate maintenance complexity and long-term sustainability
- Document complexity factors and mitigation strategies

### 4.2 Reusability Scope Assessment
**Agent**: sead-catalog-architect
- Assess pattern applicability across different contexts
- Evaluate customization options and extension capabilities
- Analyze usage frequency potential and adoption barriers
- Document reusability evidence and usage scenarios

**Elicit**:
```
COMPLEXITY AND REUSABILITY CLASSIFICATION

Pattern: [Pattern Name]
Tier: [confirmed tier] | Domain: [confirmed domain classification]

Complexity Analysis:
- Implementation Complexity: [Low/Medium/High]
- Integration Complexity: [Low/Medium/High] 
- Maintenance Complexity: [Low/Medium/High]
- Cognitive Load: [Low/Medium/High]
- Time to Implement: [< 4 hours / 4-16 hours / 16+ hours]

Complexity Factors:
- Dependencies: [count and complexity of external dependencies]
- Configuration Options: [simple/moderate/complex configuration requirements]
- Learning Curve: [easy/moderate/steep learning requirements]
- Debugging Difficulty: [straightforward/moderate/complex debugging needs]

Reusability Scope Assessment:
- Universal Applicability: [cross-domain usage potential]
- Domain-Specific Value: [value within target domain]
- Context Flexibility: [adaptability to different contexts]
- Customization Support: [extensive/moderate/limited customization options]

Reusability Classification:
- Scope: [Universal/Multi-Domain/Domain-Specific/Contextual/Experimental]
- Usage Frequency Potential: [High/Medium/Low]
- Adoption Barriers: [list potential barriers to adoption]
- Extension Points: [available extension and customization points]

Usage Context Scenarios:
- Primary Use Cases: [main scenarios where pattern applies]
- Alternative Use Cases: [secondary scenarios and adaptations]
- Anti-Use Cases: [scenarios where pattern should NOT be used]

Classification Validation:
- Complexity appropriate for tier: [Yes/No - if no, explain mismatch]
- Reusability supports domain placement: [Yes/No - if no, explain]
- Classification consistency: [consistent with similar patterns - Yes/No]

Finalize complexity and reusability classification?
```

## Phase 5: Final Classification Validation and Documentation

### 5.1 Classification Consistency Validation
**Agent**: sead-catalog-architect
- Validate classification consistency with existing patterns
- Check for classification gaps or overlaps in taxonomy
- Ensure balanced distribution across domains and tiers
- Resolve any classification conflicts or ambiguities

### 5.2 Classification Documentation and Integration
**Agent**: sead-pattern-extraction + sead-catalog-architect
- Document complete classification rationale and decision history
- Update taxonomy structure if needed for pattern integration
- Prepare classification metadata for catalog integration
- Validate classification supports pattern discovery and usage

**Elicit**:
```
FINAL CLASSIFICATION VALIDATION

Pattern: [Pattern Name]

Complete Classification:
- Primary Domain: [domain] > [subdomain] > [category]
- Quality Tier: [tier] ([tier name])
- Complexity Level: [Low/Medium/High]
- Reusability Scope: [Universal/Multi-Domain/Domain-Specific/Contextual/Experimental]
- Cross-Domain Relationships: [list all cross-domain connections]

Classification Metadata:
- Hierarchical Path: [full taxonomy path]
- Classification Tags: [searchable tags for discovery]
- Difficulty Level: [beginner/intermediate/advanced/expert]
- Prerequisites: [required knowledge/patterns for adoption]

Consistency Validation Results:
- Similar Patterns Comparison: [how classification compares to similar patterns]
- Domain Balance: [contribution to domain completeness]
- Tier Distribution: [impact on tier balance within domain]
- Taxonomy Enhancement: [how classification improves overall taxonomy]

Classification Decision Rationale:
- Primary Domain Justification: [why this domain assignment]
- Tier Assignment Reasoning: [why this quality tier]
- Complexity Classification Logic: [complexity level justification]
- Reusability Scope Rationale: [reusability scope reasoning]

Integration Readiness:
- Taxonomy Updates Required: [any taxonomy structure changes needed]
- Cross-References Needed: [relationships to document in catalog]
- Discovery Metadata Complete: [all metadata for pattern findability]
- Documentation Integration Ready: [ready for pattern documentation workflow]

Classification approved for catalog integration: [Yes/No]
Next steps: [actions needed before integration or ready for next workflow]
```

### 5.3 Classification Evolution Planning
**Agent**: sead-catalog-architect
- Plan potential classification evolution paths
- Document conditions for tier progression or domain reassignment
- Establish monitoring criteria for classification validation
- Prepare for classification maintenance and updates

## Success Criteria

- [ ] **Domain Assignment Accuracy**: Pattern assigned to appropriate primary domain with clear rationale
- [ ] **Subdomain Placement Validation**: Pattern properly positioned within domain taxonomy hierarchy
- [ ] **Quality Tier Justification**: Tier classification based on evidence and meets tier-specific requirements
- [ ] **Complexity Assessment Completeness**: Thorough analysis of implementation, integration, and maintenance complexity
- [ ] **Reusability Scope Documentation**: Clear assessment of pattern applicability and customization capabilities
- [ ] **Cross-Domain Relationship Mapping**: All relationships with other domains documented and validated
- [ ] **Classification Consistency**: Classification consistent with existing patterns and taxonomy structure
- [ ] **Constitutional Compliance**: Classification supports SEAD governance framework requirements
- [ ] **Discovery Support**: Classification metadata supports effective pattern discovery and navigation
- [ ] **Evolution Planning**: Classification evolution path documented with monitoring criteria

## Output Artifacts

1. **Domain Assignment Report**: Complete domain and subdomain classification with rationale
2. **Quality Tier Documentation**: Tier classification with evidence and validation results
3. **Complexity Analysis**: Detailed complexity assessment across multiple dimensions
4. **Reusability Assessment**: Comprehensive reusability scope analysis and usage scenarios
5. **Cross-Domain Relationship Map**: Documentation of all inter-domain relationships and dependencies
6. **Classification Metadata**: Structured metadata for catalog integration and pattern discovery
7. **Evolution Plan**: Classification monitoring criteria and potential evolution paths

## Mode Considerations

- **Prototype Mode**: Focus on rapid classification for experimentation; accept Tier 3-4 classifications
- **Development Mode**: Balanced classification analysis; emphasize Tier 2-3 patterns with quality validation
- **Build-to-Deploy Mode**: Rigorous classification validation; strict requirements for Tier 1-2 patterns

## Anti-Patterns to Avoid

- **Classification Inconsistency**: Inconsistent classification criteria application across patterns
- **Domain Boundary Violations**: Patterns assigned to domains outside their core responsibility
- **Tier Inflation**: Assigning higher tiers without meeting quality requirements
- **Complexity Underestimation**: Underestimating pattern complexity leading to adoption difficulties
- **Reusability Overestimation**: Claiming broader reusability than pattern actually supports
- **Cross-Domain Relationship Neglect**: Missing important relationships between patterns across domains
- **Evolution Path Ignorance**: Failing to plan for pattern classification evolution and maintenance

---

**Note**: This workflow requires systematic application of the SEAD domain taxonomy and quality metrics framework, with multiple validation points to ensure accurate and consistent pattern classification that supports effective catalog organization and pattern discovery.