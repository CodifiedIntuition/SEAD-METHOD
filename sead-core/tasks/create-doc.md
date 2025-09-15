# Create Document from Template Workflow

**Task ID**: create-doc  
**Agent**: sead-master + specific domain agents  
**Output**: Generated document from SEAD template with constitutional compliance  
**Dependencies**: SEAD template file (.yaml), domain expertise, constitutional framework  

## Overview

SEAD-specific document creation workflow that leverages YAML-driven templates with constitutional framework integration. This workflow ensures all generated documents comply with SEAD governance principles while maintaining interactive collaboration for quality outcomes.

## Phase 1: Template Discovery and Selection

### 1.1 Template Identification and Loading
**Agent**: SEAD Master
- Identify appropriate template from sead-core/templates directory
- Load template metadata and structural requirements
- Validate template version and constitutional compliance status
- Confirm template suitability for current development mode

### 1.2 Constitutional Framework Initialization
**Agent**: SEAD Master
- Initialize constitutional rules for current development mode
- Load constraint enforcement parameters and validation rules
- Configure governance integration and audit trail requirements
- Establish context preservation mechanisms for agent handoffs

**Elicit**: 
```
TEMPLATE SELECTION AND INITIALIZATION

Available Templates:
- [Template 1]: [name] - Purpose: [description] - Mode Support: [modes]
- [Template 2]: [name] - Purpose: [description] - Mode Support: [modes]
- [Template 3]: [name] - Purpose: [description] - Mode Support: [modes]

Selected Template: [template-name]
- Constitutional Compliance: [version and status]
- Mode Configuration: [current mode] - Constraints: [active constraints]
- Required Domain Agents: [list of agents needed]
- Output Format: [markdown/yaml/other]
- Estimated Completion Time: [time based on mode]

Template Validation Status: [Pass/Issues Found]
Issues: [list any template compatibility or version issues]

Governance Framework Initialized:
- Audit Trail: [enabled/configured]
- Context Preservation: [active/configured]
- Quality Gates: [configured for mode]
- Agent Handoff Support: [enabled/configured]

Proceed with interactive document generation? [Template ready/Needs resolution]
```

## Phase 2: Interactive Document Generation

### 2.1 Section-by-Section Processing
**Agent**: SEAD Master + Domain-Specific Agents
- Process each template section according to agent ownership permissions
- Apply constitutional constraints and validation rules progressively
- Generate section content with mode-appropriate quality standards
- Implement interactive collaboration points as defined in template

### 2.2 Constitutional Compliance Integration
**Agent**: SEAD Master
- Validate each section against constitutional requirements
- Apply mode-specific constraint enforcement throughout generation
- Ensure governance framework alignment in all content
- Maintain context preservation for seamless agent handoffs

**Elicit**:
```
SECTION GENERATION PROGRESS

Current Section: [section-name] - Owner: [agent-role]
Content Generation Status: [draft ready/in progress/blocked]

Section Content Preview:
[Generated content for section]

Constitutional Compliance Check:
- Mode Constraints Applied: [list active constraints]
- Governance Alignment: [compliant/needs adjustment]
- Quality Standards: [met/needs enhancement/below threshold]
- Context Preservation: [implemented/needs attention]

Agent Collaboration Status:
- Required Domain Agents: [list and availability]
- Agent Handoff Readiness: [prepared/needs context]
- Inter-Agent Dependencies: [resolved/pending]

Continue to next section or refine current section?
Options:
1. Proceed to next section
2. Enhance current section content
3. Request domain expert review
4. Apply additional constitutional validation
5. Adjust for different development mode
6. Review agent collaboration requirements
7. Validate context preservation mechanisms
8. Request stakeholder feedback
9. Implement custom refinements

Select option 1-9 or provide specific feedback:
```

### 2.3 Cross-Section Integration and Consistency
**Agent**: SEAD Master + Domain-Specific Agents
- Validate consistency across all generated sections
- Ensure proper cross-references and dependency resolution
- Confirm unified voice and approach throughout document
- Apply final constitutional compliance validation

## Phase 3: Quality Assurance and Validation

### 3.1 Comprehensive Quality Review
**Agent**: SEAD Master + SEAD QA
- Execute quality checklist appropriate for document type and mode
- Validate all examples, code snippets, and implementation guidance
- Confirm documentation clarity and completeness
- Assess usability and adoption readiness

### 3.2 Stakeholder Review and Feedback Integration
**Agent**: SEAD Master + Human Stakeholders
- Present completed document for stakeholder review
- Gather feedback on content quality, completeness, and utility
- Integrate approved changes and refinements
- Validate final document meets all requirements and expectations

**Elicit**:
```
QUALITY ASSURANCE RESULTS

Document Quality Assessment:
- Content Completeness: [percentage complete]
- Constitutional Compliance: [pass/needs work/fail]
- Mode Appropriateness: [excellent/good/needs adjustment]
- Cross-Section Consistency: [consistent/minor issues/major issues]
- Example Validation: [all tested/some tested/needs testing]
- Implementation Clarity: [clear/somewhat clear/confusing]

Quality Metrics by Section:
Section: [section-name]
- Content Quality: [1-10]/10
- Constitutional Alignment: [pass/fail]
- Stakeholder Requirements: [met/partially met/not met]

[Repeat for each major section]

Stakeholder Feedback Summary:
- [Stakeholder 1]: [feedback and resolution status]
- [Stakeholder 2]: [feedback and resolution status]

Final Validation Status:
- Ready for Publication: [yes/no]
- Required Adjustments: [list if any]
- Constitutional Certification: [certified/conditional/needs work]

Document generation status: [complete/needs refinement/requires major revision]
```

## Phase 4: Finalization and Publication

### 4.1 Final Constitutional Certification
**Agent**: SEAD Master
- Execute final constitutional compliance validation
- Confirm governance framework integration completeness
- Validate mode-appropriate constraint enforcement throughout
- Generate constitutional compliance certificate for audit trail

### 4.2 Document Publishing and Integration
**Agent**: SEAD Master
- Finalize document formatting and structure
- Generate appropriate metadata and indexing information
- Integrate with existing documentation ecosystem
- Establish maintenance and update procedures

**Elicit**:
```
DOCUMENT FINALIZATION

Final Document Status:
- Total Sections: [count] - All Complete: [yes/no]
- Constitutional Certification: [certified/conditional/not certified]
- Quality Score: [overall score]/10
- Mode Compliance: [fully compliant/minor issues/needs work]
- Stakeholder Approval: [approved/conditionally approved/needs revision]

Publication Readiness:
- Formatting: [complete/needs adjustment]
- Metadata: [generated/needs completion]
- Integration Points: [identified/configured]
- Maintenance Plan: [established/needs definition]

Constitutional Compliance Certificate:
- Framework Version: [version]
- Mode Configuration: [mode and constraints]
- Validation Date: [date]
- Compliance Score: [percentage]
- Audit Trail: [complete/available]

Document Ready for Publication: [yes/no]
Final Actions Required: [list if any]
Publication Timeline: [immediate/scheduled/conditional]
```

## Success Criteria

- [ ] **Template Integration**: Successfully loaded and processed SEAD template with full metadata
- [ ] **Constitutional Compliance**: Full integration with SEAD governance framework throughout
- [ ] **Interactive Collaboration**: Effective collaboration between required domain agents
- [ ] **Quality Standards**: Document meets mode-appropriate quality and completeness standards
- [ ] **Stakeholder Satisfaction**: Document meets stakeholder requirements and expectations
- [ ] **Context Preservation**: Complete context preservation for future maintenance and updates
- [ ] **Publication Readiness**: Document ready for immediate publication and team adoption

## Output Artifacts

1. **Generated Document**: Complete document following SEAD template structure and requirements
2. **Constitutional Compliance Certificate**: Formal certification of governance framework adherence
3. **Quality Assessment Report**: Detailed quality metrics and validation results
4. **Agent Collaboration Log**: Documentation of agent interactions and handoffs
5. **Maintenance Guide**: Instructions for future document updates and maintenance

## Mode Considerations

- **Prototype Mode**: Relaxed quality standards with focus on rapid iteration and learning
- **Development Mode**: Balanced approach with reasonable quality gates and collaborative refinement
- **Build-to-Deploy Mode**: Rigorous quality standards with comprehensive validation and stakeholder approval

## Anti-Patterns to Avoid

- **Template Bypass**: Attempting to generate documents without proper template utilization
- **Constitutional Neglect**: Skipping constitutional framework integration and validation
- **Single-Agent Generation**: Creating documents without appropriate domain expert collaboration
- **Quality Shortcuts**: Compromising quality standards to accelerate completion timelines
- **Context Loss**: Failing to preserve context for future maintenance and agent handoffs
- **Stakeholder Exclusion**: Completing documents without appropriate stakeholder review and approval

---

**Note**: This workflow requires the SEAD Master agent to coordinate with appropriate domain-specific agents based on document type and template requirements. Constitutional framework integration is mandatory throughout the entire process.