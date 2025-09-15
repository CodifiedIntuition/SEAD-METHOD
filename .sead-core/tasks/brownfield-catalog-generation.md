# Brownfield Catalog Generation Workflow

**Task ID**: brownfield-catalog-generation  
**Agent**: sead-catalog-architect + sead-pattern-extraction  
**Output**: Complete catalog structure with extracted patterns  
**Dependencies**: Target codebase, existing catalog structure (if any)  

## Overview

Transform existing codebase into organized SEAD catalog through systematic analysis, pattern extraction, and interactive refinement. This workflow combines AI-driven pattern recognition with human domain expertise to create high-quality, reusable catalog components.

## Phase 1: Initial Analysis

### 1.1 Codebase Assessment
**Agent**: SEAD Catalog Architect
- Analyze project structure and technology stack
- Identify main domains (frontend, backend, data, deployment)
- Assess codebase size and complexity
- Determine extraction strategy based on project characteristics

### 1.2 Extraction Planning
**Agent**: SEAD Catalog Architect
- Create extraction plan prioritizing high-value patterns
- Map codebase domains to catalog structure
- Plan extraction phases to minimize disruption
- Set quality criteria for pattern inclusion

**Elicit**: 
```
CATALOG GENERATION PLANNING

Project Analysis:
- Technology Stack: [identified stack]
- Primary Domains: [frontend/backend/data/etc]
- Codebase Size: [files/components count]
- Complexity Level: [low/medium/high]

Extraction Strategy:
1. Priority Domains: [list top 3 domains to focus on]
2. Pattern Types: [API contracts/components/state/etc]
3. Quality Threshold: [minimal/good/excellent patterns only]
4. Timeline: [quick extraction vs thorough analysis]

Please review and confirm this approach or suggest modifications.
```

## Phase 2: Pattern Extraction

### 2.1 Domain-Specific Pattern Scanning
**Agent**: SEAD Pattern Extraction Specialist
- Scan each domain systematically for patterns
- Apply domain-specific extraction techniques
- Identify both explicit and implicit patterns
- Document pattern usage context and frequency

### 2.2 Pattern Classification and Quality Assessment  
**Agent**: SEAD Pattern Extraction Specialist
- Classify patterns by domain, complexity, and reusability
- Assess pattern quality and catalog worthiness
- Identify variations and abstract optimal versions
- Flag anti-patterns for exclusion

**Elicit**:
```
PATTERN EXTRACTION RESULTS

Patterns Identified: [total count]
Domain Breakdown:
- API Contracts: [count] - Quality: [low/med/high]
- Shared Types: [count] - Quality: [low/med/high]  
- UI Components: [count] - Quality: [low/med/high]
- State Management: [count] - Quality: [low/med/high]
- Error Handling: [count] - Quality: [low/med/high]
- [other domains]

High-Value Patterns: [list top 5-10 patterns]
Quality Concerns: [list any problematic patterns]
Missing Patterns: [patterns expected but not found]

Which patterns should we prioritize for catalog inclusion?
```

## Phase 3: Catalog Organization

### 3.1 Taxonomy Design
**Agent**: SEAD Catalog Architect  
- Design logical catalog organization structure
- Map extracted patterns to catalog domains
- Create pattern hierarchies and relationships
- Plan pattern evolution and extension points

### 3.2 Interactive Catalog Building
**Agent**: SEAD Catalog Architect + Human Review
- Present organized catalog structure for review
- Gather feedback on pattern organization
- Refine taxonomy based on team preferences
- Validate catalog against SEAD methodology requirements

**Elicit**:
```
CATALOG ORGANIZATION PROPOSAL

Proposed Catalog Structure:
├── api-contracts/ ([count] patterns)
│   ├── rest-endpoints/ ([count])
│   ├── graphql-schemas/ ([count])  
│   └── service-contracts/ ([count])
├── shared-types/ ([count] patterns)
│   ├── domain-models/ ([count])
│   ├── api-types/ ([count])
│   └── utility-types/ ([count])
├── design-system/ ([count] patterns)
│   ├── components/ ([count])
│   ├── layouts/ ([count])
│   └── themes/ ([count])
[continue for other domains...]

Pattern Relationships:
- [describe key dependencies and relationships]

Does this organization make sense for your team? 
What changes would improve usability?
```

## Phase 4: Catalog Generation

### 4.1 Pattern Documentation
**Agent**: SEAD Pattern Extraction Specialist
- Generate comprehensive documentation for each pattern
- Include usage examples and implementation guides
- Document dependencies and prerequisites  
- Create constraint enforcement rules for each pattern

### 4.2 Catalog Integration
**Agent**: SEAD Catalog Architect
- Generate final catalog structure with all patterns
- Create catalog metadata and indexing
- Implement constraint validation rules
- Generate adoption and maintenance documentation

### 4.3 Validation and Testing
**Agent**: SEAD Catalog Architect + SEAD Pattern Extraction Specialist
- Validate catalog structure and pattern quality
- Test constraint enforcement mechanisms
- Verify pattern documentation completeness
- Create catalog usage examples and tutorials

## Phase 5: Adoption Strategy

### 5.1 Team Onboarding Plan
**Agent**: SEAD Catalog Architect
- Create team adoption strategy
- Design training materials for catalog usage
- Plan gradual rollout phases
- Establish catalog maintenance processes

### 5.2 Integration with Development Workflow
**Agent**: SEAD Catalog Architect  
- Configure CLI commands for catalog usage
- Set up constraint enforcement in development workflow
- Create catalog validation gates
- Document catalog evolution processes

**Elicit**:
```
CATALOG ADOPTION STRATEGY

Generated Catalog Summary:
- Total Patterns: [count]
- Coverage Areas: [list main domains covered]
- Quality Level: [assessment of overall quality]
- Constraint Enforcement: [level of automation achieved]

Recommended Adoption Approach:
1. Pilot Phase: [suggested starting point]
2. Team Training: [recommended training approach]  
3. Rollout Timeline: [phased adoption plan]
4. Success Metrics: [how to measure adoption success]

Next Steps:
1. [immediate action items]
2. [short-term goals]
3. [long-term catalog evolution plan]

Does this adoption strategy align with your team's needs and timeline?
```

## Success Criteria

- [ ] **Complete Domain Coverage**: All major codebase domains analyzed and cataloged
- [ ] **High-Quality Patterns**: Only maintainable, reusable patterns included in catalog
- [ ] **Proper Organization**: Logical taxonomy that enables easy pattern discovery
- [ ] **Comprehensive Documentation**: Each pattern includes usage examples and constraints
- [ ] **Constraint Integration**: Patterns include SEAD mode-appropriate validation rules
- [ ] **Team Validation**: Catalog structure validated by development team
- [ ] **Adoption Readiness**: Clear onboarding and maintenance processes established

## Output Artifacts

1. **Catalog Structure**: Complete sead-catalog/ directory with organized patterns
2. **Pattern Documentation**: Comprehensive docs for each extracted pattern
3. **Extraction Report**: Detailed analysis of extraction process and decisions
4. **Adoption Guide**: Team onboarding and usage documentation
5. **Maintenance Plan**: Process for ongoing catalog evolution and updates

## Mode Considerations

- **Prototype Mode**: Focus on identifying experimental patterns for future promotion
- **Development Mode**: Balance pattern extraction with constraint enforcement setup
- **Build-to-Deploy Mode**: Prioritize production-ready patterns with strict validation

## Anti-Patterns to Avoid

- **Over-Extraction**: Including too many low-value or overly specific patterns
- **Under-Documentation**: Patterns without sufficient context for reuse
- **Rigid Taxonomy**: Organization structure that doesn't accommodate growth
- **No Human Review**: Fully automated extraction without domain expert validation
- **Adoption Neglect**: Generating catalog without adoption strategy

---

**Note**: This workflow requires coordination between SEAD Catalog Architect and SEAD Pattern Extraction Specialist agents, with multiple human interaction points for quality assurance and team alignment.