# Pattern Extraction Workflow

**Task ID**: pattern-extraction-workflow  
**Agent**: sead-pattern-extraction + sead-catalog-architect  
**Output**: Abstracted, documented patterns ready for catalog integration  
**Dependencies**: Pattern identification results, extraction strategy selection, quality classification framework  

## Overview

Comprehensive workflow for extracting reusable patterns from identified implementations, abstracting them from specific contexts, and preparing them for catalog inclusion. Transforms raw pattern discoveries into well-documented, validated catalog assets.

## Phase 1: Pattern Analysis and Context Understanding

### 1.1 Implementation Analysis and Deconstruction
**Agent**: SEAD Pattern Extraction Specialist
- Analyze pattern implementations across all identified instances
- Deconstruct patterns into core components and variations
- Identify essential vs. accidental complexity within implementations
- Document original context and constraints that influenced design

### 1.2 Usage Pattern and Frequency Analysis
**Agent**: SEAD Pattern Extraction Specialist
- Analyze how patterns are used across different contexts
- Identify common variations and customization points
- Assess usage frequency and importance within source system
- Document anti-usage and contexts where pattern fails

**Elicit**: 
```
PATTERN ANALYSIS RESULTS

Pattern: [Pattern Name]
Domain: [Catalog Domain]

Implementation Analysis:
- Core Components: [essential elements that define the pattern]
- Variations Found: [different implementations and customizations]
- Essential Complexity: [inherent complexity that serves the purpose]
- Accidental Complexity: [implementation-specific complications]
- Original Context: [constraints and requirements that shaped design]

Usage Analysis:
- Usage Frequency: [how often pattern appears in source]
- Context Variety: [different scenarios where pattern is applied]
- Common Customizations: [typical modifications and extensions]
- Failure Cases: [where pattern breaks down or isn't appropriate]
- Success Indicators: [evidence of pattern effectiveness]

Pattern Dependencies:
- Internal Dependencies: [other patterns this pattern relies on]
- External Dependencies: [libraries, frameworks, infrastructure]
- Optional Enhancements: [patterns that work well together]
- Conflicts: [patterns that shouldn't be combined with this one]

Ready to proceed with pattern abstraction and generalization?
```

## Phase 2: Pattern Abstraction and Generalization

### 2.1 Core Pattern Extraction
**Agent**: SEAD Pattern Extraction Specialist
- Extract essential pattern elements independent of specific implementation details
- Abstract pattern to appropriate level for reuse across contexts
- Identify configurable parameters and customization points
- Preserve pattern essence while removing implementation-specific constraints

### 2.2 Variation and Extension Modeling
**Agent**: SEAD Pattern Extraction Specialist
- Model common variations as configuration options or extensions
- Design extensibility points for future pattern evolution
- Create inheritance or composition hierarchies where appropriate
- Document pattern boundaries and scope limitations

**Elicit**:
```
PATTERN ABSTRACTION DESIGN

Pattern: [Pattern Name]
Abstraction Level: [specific/general/universal]

Core Pattern Definition:
- Essential Elements: [what must be present for pattern to work]
- Configurable Parameters: [options that can be customized]
- Extension Points: [where pattern can be enhanced or modified]
- Invariants: [constraints that must always be maintained]

Pattern Variations:
- Basic Implementation: [minimal viable pattern implementation]
- Enhanced Implementation: [pattern with additional features]
- Specialized Variants: [domain or technology-specific versions]
- Integration Patterns: [how pattern combines with others]

Abstraction Validation:
- Maintains Pattern Essence: [core value proposition preserved]
- Supports Common Variations: [covers identified usage patterns]
- Allows Future Extension: [designed for evolution and enhancement]
- Eliminates Accidental Complexity: [removes implementation artifacts]

Does this abstraction level provide the right balance of reusability and specificity?
```

## Phase 3: Documentation and Implementation Guide Creation

### 3.1 Comprehensive Pattern Documentation
**Agent**: SEAD Pattern Extraction Specialist
- Create complete pattern documentation with problem/solution description
- Develop step-by-step implementation guides with decision points
- Document configuration options and customization approaches
- Include troubleshooting guides and common pitfalls

### 3.2 Example Development and Validation
**Agent**: SEAD Pattern Extraction Specialist + SEAD Catalog Architect
- Create multiple implementation examples across different contexts
- Develop minimal, standard, and advanced usage examples
- Validate all examples work correctly and demonstrate pattern value
- Create test cases and validation criteria for pattern implementations

**Elicit**:
```
PATTERN DOCUMENTATION STATUS

Pattern: [Pattern Name]

Documentation Completeness:
- Problem Statement: [clear description of what pattern solves]
- Solution Overview: [high-level approach and key benefits]
- Implementation Guide: [step-by-step instructions with decision points]
- Configuration Reference: [all options with descriptions and defaults]
- Integration Instructions: [how to combine with other patterns]
- Troubleshooting Guide: [common issues and resolution approaches]

Example Implementations:
- Minimal Example: [simplest possible implementation]
- Standard Example: [typical production-ready implementation]
- Advanced Example: [feature-rich implementation with customizations]
- Integration Example: [pattern combined with complementary patterns]

Quality Validation:
- All Examples Tested: [verified working implementations]
- Documentation Accuracy: [instructions match working examples]
- Completeness Check: [all necessary information provided]
- Clarity Assessment: [understandable by target audience]

Pattern Ready for Catalog Integration: [Yes/Needs Work/Major Issues]
What improvements are needed before catalog inclusion?
```

## Phase 4: Quality Assurance and Peer Review

### 4.1 Pattern Quality Assessment
**Agent**: SEAD Pattern Extraction Specialist + SEAD Catalog Architect
- Apply pattern classification framework for quality evaluation
- Validate pattern against reusability and complexity criteria
- Assess constitutional compliance and governance alignment
- Confirm pattern meets catalog inclusion standards

### 4.2 Expert Review and Validation
**Agent**: SEAD Catalog Architect + Human Domain Experts
- Present pattern to domain experts for technical review
- Gather feedback on pattern accuracy and utility
- Validate abstraction level and implementation approaches
- Incorporate expert feedback and refinements

**Elicit**:
```
QUALITY ASSURANCE RESULTS

Pattern: [Pattern Name]

Quality Assessment:
- Reusability Score: [1-10]/10 - [justification]
- Complexity Level: [Low/Medium/High] - [rationale]
- Quality Tier: [1-4] - [meets criteria for tier]
- Documentation Quality: [Excellent/Good/Needs Work] - [assessment]
- Constitutional Compliance: [Pass/Needs Work/Fail] - [specific issues]

Expert Review Feedback:
- Technical Accuracy: [validated/needs corrections/major issues]
- Implementation Quality: [best practice/acceptable/problematic]
- Abstraction Level: [appropriate/too generic/too specific]
- Missing Elements: [what should be added or enhanced]
- Usage Recommendations: [when to use and when to avoid]

Pattern Refinements:
1. [Specific improvement needed]
2. [Another improvement needed]
3. [Additional enhancement required]

Final Quality Status:
- Catalog Ready: [Yes/No]
- Required Improvements: [list if not ready]
- Review Timeline: [when to reassess]

Proceed with catalog integration or continue refinement?
```

## Phase 5: Catalog Integration Preparation

### 5.1 Catalog Structure Integration
**Agent**: SEAD Catalog Architect
- Map pattern to appropriate catalog domain and subdirectory
- Ensure pattern documentation follows catalog standards
- Create necessary metadata and cross-references
- Validate pattern fits within existing catalog taxonomy

### 5.2 Integration Testing and Validation
**Agent**: SEAD Catalog Architect + SEAD Pattern Extraction Specialist
- Test pattern integration with catalog structure and navigation
- Validate all documentation links and cross-references work
- Confirm pattern searchability and discoverability
- Test pattern usage in realistic development scenarios

**Elicit**:
```
CATALOG INTEGRATION READINESS

Pattern: [Pattern Name]
Target Location: [catalog domain/subdirectory path]

Integration Checklist:
- [ ] Pattern documentation follows catalog format standards
- [ ] All metadata fields completed accurately
- [ ] Cross-references to related patterns created
- [ ] Examples tested and working in catalog environment
- [ ] Search tags and keywords assigned appropriately
- [ ] Navigation paths tested and functional

Integration Testing Results:
- Documentation Rendering: [correct formatting and display]
- Link Validation: [all internal and external links working]
- Search Functionality: [pattern discoverable through search]
- Cross-References: [related pattern links functional]
- Example Execution: [code examples work as documented]

Catalog Consistency:
- Naming Convention: [follows catalog standards]
- Documentation Format: [matches catalog template]
- Metadata Schema: [all required fields completed]
- Quality Standards: [meets catalog quality requirements]

Ready for Final Catalog Integration: [Yes/No]
Outstanding Issues: [list any remaining problems]
```

## Success Criteria

- [ ] **Pattern Abstraction**: Patterns abstracted to appropriate level for cross-context reuse
- [ ] **Comprehensive Documentation**: Complete implementation guides with examples and troubleshooting
- [ ] **Quality Validation**: Patterns meet tier-appropriate quality standards and constitutional compliance
- [ ] **Expert Review**: Domain experts validate pattern accuracy and utility
- [ ] **Integration Readiness**: Patterns properly formatted and tested for catalog inclusion
- [ ] **Usage Examples**: Multiple working examples demonstrate pattern value and implementation approaches

## Output Artifacts

1. **Abstracted Pattern Specifications**: Generalized pattern definitions with configuration options
2. **Implementation Documentation**: Step-by-step guides with examples and troubleshooting
3. **Quality Assessment Reports**: Detailed evaluation against classification framework criteria
4. **Expert Review Results**: Technical validation and refinement recommendations
5. **Catalog-Ready Patterns**: Fully documented patterns ready for immediate catalog integration

## Mode Considerations

- **Prototype Mode**: Focus on core pattern extraction with basic documentation for rapid usage
- **Development Mode**: Balanced approach with good documentation and validation for team use
- **Build-to-Deploy Mode**: Comprehensive extraction with rigorous quality standards and expert validation

## Anti-Patterns to Avoid

- **Over-Abstraction**: Creating patterns too generic to be practically useful
- **Under-Documentation**: Patterns without sufficient implementation guidance and examples
- **Context Loss**: Removing so much context that pattern purpose becomes unclear
- **Quality Shortcuts**: Rushing extraction without proper validation and testing
- **Expert Bypass**: Skipping domain expert review for complex or critical patterns

---

**Note**: This workflow requires collaboration between SEAD Pattern Extraction Specialist and SEAD Catalog Architect agents, with human expert input for quality validation.