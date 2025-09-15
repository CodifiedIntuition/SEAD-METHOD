# Pattern Identification Workflow

**Task ID**: pattern-identification-workflow  
**Agent**: sead-catalog-architect + sead-pattern-extraction  
**Output**: Validated patterns ready for catalog inclusion  
**Dependencies**: Source codebase or requirements, pattern classification framework, catalog domain definitions  

## Overview

Core pattern recognition and identification workflow that systematically discovers, analyzes, and validates reusable patterns from various sources. This workflow combines AI-driven pattern detection with human domain expertise to identify high-quality patterns suitable for SEAD catalog inclusion.

## Phase 1: Pattern Discovery and Scanning

### 1.1 Source Analysis and Preparation
**Agent**: SEAD Catalog Architect
- Analyze source material scope and complexity
- Select appropriate extraction strategy based on scale and timeline
- Configure pattern scanning parameters for target domains
- Establish quality thresholds based on development mode

### 1.2 Systematic Pattern Scanning
**Agent**: SEAD Pattern Extraction Specialist
- Execute domain-specific pattern scanning across all catalog domains
- Apply automated pattern recognition techniques for code structures
- Identify recurring implementation approaches and architectural decisions
- Document pattern usage frequency and context within source material

**Elicit**: 
```
PATTERN DISCOVERY RESULTS

Source Material Analysis:
- Codebase Size: [files/components count]
- Technology Stack: [languages/frameworks identified]
- Architectural Complexity: [low/medium/high]
- Domain Coverage: [domains with patterns identified]

Initial Pattern Scan Results:
- Total Patterns Identified: [count]
- Domain Breakdown:
  * API Contracts: [count] - Quality: [assessment]
  * Shared Types: [count] - Quality: [assessment]  
  * Design System: [count] - Quality: [assessment]
  * State Management: [count] - Quality: [assessment]
  * Error Handling: [count] - Quality: [assessment]
  * [other domains...]

Pattern Quality Distribution:
- Tier 1 (Foundational): [count and examples]
- Tier 2 (Specialized): [count and examples]
- Tier 3 (Contextual): [count and examples]
- Tier 4 (Experimental): [count and examples]

Which patterns should we prioritize for detailed analysis?
```

## Phase 2: Pattern Analysis and Validation

### 2.1 Detailed Pattern Investigation
**Agent**: SEAD Pattern Extraction Specialist
- Conduct deep analysis of prioritized patterns
- Extract pattern implementation details and variations
- Analyze pattern dependencies and integration requirements
- Assess reusability potential across different contexts

### 2.2 Quality Assessment and Classification
**Agent**: SEAD Catalog Architect + SEAD Pattern Extraction Specialist
- Apply pattern classification framework for quality evaluation
- Assess patterns against reusability, complexity, and documentation criteria
- Validate constitutional compliance and governance alignment
- Identify anti-patterns and exclude problematic implementations

**Elicit**:
```
PATTERN ANALYSIS RESULTS

Detailed Analysis Completed for [X] Priority Patterns

Quality Assessment Summary:
Pattern: [Pattern Name]
- Reusability Score: [1-10]/10
- Complexity Level: [Low/Medium/High]
- Quality Tier: [1-4]
- Documentation Status: [Complete/Partial/Missing]
- Test Coverage: [percentage]
- Constitutional Compliance: [Pass/Needs Work/Fail]

[Repeat for each analyzed pattern]

Anti-Patterns Identified:
- [Anti-pattern 1]: [description and why excluded]
- [Anti-pattern 2]: [description and why excluded]

Patterns Ready for Validation:
- [Pattern names meeting quality criteria]

Patterns Requiring Enhancement:
- [Pattern names needing improvement with specific requirements]

Should we proceed with validation of ready patterns?
```

### 2.3 Constitutional Compliance Validation
**Agent**: SEAD Catalog Architect
- Validate pattern alignment with SEAD constitutional framework
- Ensure patterns support mode-appropriate constraint enforcement
- Verify context preservation capabilities for agent handoffs
- Confirm governance integration and audit trail support

## Phase 3: Pattern Documentation and Preparation

### 3.1 Comprehensive Pattern Documentation
**Agent**: SEAD Pattern Extraction Specialist
- Create complete pattern documentation with usage examples
- Document implementation steps and integration requirements
- Include troubleshooting guidance and common pitfalls
- Develop test cases and validation criteria

### 3.2 Pattern Integration Planning
**Agent**: SEAD Catalog Architect
- Map patterns to appropriate catalog domains and subdirectories
- Identify relationships and dependencies between patterns
- Plan integration sequence to minimize conflicts
- Prepare catalog metadata and indexing information

**Elicit**:
```
PATTERN DOCUMENTATION STATUS

Documentation Completed:
Pattern: [Pattern Name]
- Usage Documentation: [Complete/In Progress]
- Implementation Examples: [count of examples]
- Integration Requirements: [documented/missing]
- Test Cases: [count and coverage]
- Troubleshooting Guide: [available/needed]

Cross-Pattern Relationships:
- [Pattern A] depends on [Pattern B, Pattern C]
- [Pattern D] conflicts with [Pattern E] - resolution: [approach]
- [Pattern F] enhances [Pattern G] when used together

Catalog Integration Plan:
- Target Domain: [domain name]
- Subdirectory: [path]
- Dependencies: [list]
- Integration Order: [sequence]

Ready for Catalog Integration: [pattern list]
Needs Additional Work: [pattern list with requirements]

Proceed with catalog integration for ready patterns?
```

## Phase 4: Pattern Validation and Testing

### 4.1 Implementation Testing
**Agent**: SEAD Pattern Extraction Specialist
- Test pattern implementations in isolated environments
- Validate all documented examples and use cases
- Verify integration with dependencies and related patterns
- Confirm performance characteristics and optimization claims

### 4.2 Peer Review and Expert Validation
**Agent**: SEAD Catalog Architect + Human Review
- Present patterns for team review and feedback
- Gather expert opinions on pattern quality and utility
- Incorporate feedback and refinements
- Validate final pattern quality against catalog standards

### 4.3 Governance and Compliance Review
**Agent**: SEAD Catalog Architect
- Final constitutional compliance validation
- Governance framework adherence confirmation
- Quality gate passage verification
- Approval for catalog inclusion

## Phase 5: Catalog Integration and Finalization

### 5.1 Catalog Structure Integration
**Agent**: SEAD Catalog Architect
- Integrate validated patterns into catalog structure
- Update catalog metadata and cross-references
- Generate pattern discovery aids and navigation tools
- Validate catalog consistency and organization

### 5.2 Final Validation and Publication
**Agent**: SEAD Catalog Architect + SEAD Pattern Extraction Specialist
- Perform final end-to-end validation of integrated patterns
- Test catalog navigation and pattern discovery
- Validate all documentation links and references
- Confirm ready state for team adoption

**Elicit**:
```
PATTERN INTEGRATION COMPLETION

Successfully Integrated Patterns:
- Total Patterns: [count]
- Domain Distribution: [breakdown by domain]
- Quality Distribution: [breakdown by tier]

Catalog Updates:
- New Domains Created: [list if any]
- Updated Cross-References: [count]
- Navigation Enhancements: [description]
- Metadata Updates: [description]

Integration Validation Results:
- All Examples Tested: [Pass/Fail]
- Documentation Links Verified: [Pass/Fail]
- Cross-Pattern Dependencies Resolved: [Pass/Fail]
- Performance Benchmarks Confirmed: [Pass/Fail]

Team Adoption Readiness:
- Training Materials: [Available/Needed]
- Migration Guides: [Available/Not Applicable]
- Support Documentation: [Complete/In Progress]

Catalog ready for team adoption: [Yes/No]
Next steps: [action items if any]
```

## Success Criteria

- [ ] **Comprehensive Pattern Discovery**: All major architectural domains scanned and analyzed
- [ ] **Quality Validation**: Patterns meet tier-appropriate quality standards and documentation requirements
- [ ] **Constitutional Compliance**: All patterns align with SEAD governance framework and support constraint enforcement
- [ ] **Integration Completeness**: Patterns properly integrated with catalog structure and cross-referenced
- [ ] **Testing Validation**: All pattern examples and implementations tested and verified
- [ ] **Documentation Excellence**: Complete documentation with examples, troubleshooting, and usage guidance
- [ ] **Team Readiness**: Patterns ready for team adoption with appropriate support materials

## Output Artifacts

1. **Pattern Inventory**: Complete catalog of identified patterns with quality assessments
2. **Pattern Documentation**: Comprehensive documentation for each validated pattern
3. **Integration Report**: Details of catalog integration and structural updates
4. **Quality Assessment Report**: Detailed quality analysis and tier classification results
5. **Adoption Guide**: Team onboarding materials and pattern usage guidance

## Mode Considerations

- **Prototype Mode**: Focus on Tier 3-4 patterns for rapid experimentation and learning
- **Development Mode**: Balance between Tier 2-3 patterns with reasonable quality standards
- **Build-to-Deploy Mode**: Strict focus on Tier 1-2 patterns with comprehensive validation

## Anti-Patterns to Avoid

- **Over-Abstraction**: Creating patterns that are too generic to be useful
- **Under-Documentation**: Patterns without sufficient usage guidance and examples
- **Quality Compromise**: Including patterns that don't meet tier-appropriate standards
- **Integration Neglect**: Patterns that don't integrate well with existing catalog structure
- **Context Loss**: Failing to preserve pattern context and usage rationale

---

**Note**: This workflow requires close coordination between SEAD Catalog Architect and SEAD Pattern Extraction Specialist agents, with multiple human interaction points for quality assurance and expert validation.