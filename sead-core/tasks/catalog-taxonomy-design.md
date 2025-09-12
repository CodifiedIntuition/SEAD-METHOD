# Catalog Taxonomy Design Workflow

**Task ID**: catalog-taxonomy-design  
**Agent**: sead-catalog-architect  
**Output**: Logical catalog organization structure with domain hierarchy and navigation design  
**Dependencies**: Pattern identification results, domain definitions, team preferences and mental models  

## Overview

Systematic workflow for designing catalog taxonomy that optimizes pattern discoverability, maintains logical organization, and supports team mental models. Creates hierarchical structure that scales from small pattern collections to comprehensive enterprise catalogs.

## Phase 1: Taxonomy Foundation and Requirements

### 1.1 Pattern Inventory and Categorization Analysis
**Agent**: SEAD Catalog Architect
- Analyze complete inventory of identified patterns across all domains
- Assess pattern distribution and natural grouping tendencies
- Identify patterns that span multiple domains or have unclear boundaries
- Evaluate pattern relationships and dependencies for taxonomic organization

### 1.2 User Journey and Access Pattern Analysis
**Agent**: SEAD Catalog Architect
- Map common developer workflows and pattern discovery scenarios
- Analyze how teams currently organize and find architectural solutions
- Identify primary access patterns (by problem, by technology, by domain)
- Assess cognitive load and navigation complexity requirements

**Elicit**: 
```
TAXONOMY FOUNDATION ANALYSIS

Pattern Inventory Summary:
- Total Patterns: [count]
- Domain Distribution:
  * API Contracts: [count] - Natural groupings: [list]
  * Shared Types: [count] - Natural groupings: [list]
  * Design System: [count] - Natural groupings: [list]
  * State Management: [count] - Natural groupings: [list]
  * Error Handling: [count] - Natural groupings: [list]
  * [other domains...]

Cross-Domain Patterns:
- [Pattern Name]: Spans [domain A, domain B] - Primary domain: [suggestion]
- [Pattern Name]: Unclear boundaries - Recommendation: [approach]

User Access Scenarios:
- New Project Setup: [common pattern needs and discovery approach]
- Feature Development: [typical pattern search and usage workflow]  
- Code Review: [validation and reference usage patterns]
- Problem Solving: [debugging and solution-finding approaches]
- Learning/Onboarding: [educational and exploration workflows]

Team Mental Model Assessment:
- Current Organization Approach: [how team thinks about patterns]
- Preferred Grouping Logic: [functional/technical/business/hybrid]
- Navigation Preferences: [hierarchical/flat/tagged/search-first]

What organizational approach aligns best with your team's mental model?
```

## Phase 2: Domain Architecture and Hierarchy Design

### 2.1 Primary Domain Structure Definition
**Agent**: SEAD Catalog Architect
- Define primary domain boundaries based on architectural separation of concerns
- Establish domain naming conventions and consistency standards
- Create domain descriptions and scope definitions
- Plan domain evolution and extension strategies

### 2.2 Subdomain and Category Architecture
**Agent**: SEAD Catalog Architect
- Design subdomain structure within each primary domain
- Create pattern category hierarchies that support natural discovery
- Establish consistent naming and organizational principles
- Plan cross-domain integration and relationship management

**Elicit**:
```
DOMAIN ARCHITECTURE DESIGN

Primary Domain Structure:
├── api-contracts/
│   ├── rest-endpoints/
│   ├── graphql-schemas/
│   ├── service-contracts/
│   └── protocol-definitions/
├── shared-types/
│   ├── domain-models/
│   ├── api-interfaces/
│   ├── utility-types/
│   └── validation-schemas/
├── design-system/
│   ├── foundational-components/
│   ├── composite-components/
│   ├── design-tokens/
│   └── layout-patterns/
[continue for other domains...]

Domain Naming and Conventions:
- Naming Style: [kebab-case/snake_case/camelCase]
- Consistency Rules: [specific guidelines]
- Description Format: [standard template]
- README Structure: [required sections and format]

Subdomain Logic:
- Grouping Principle: [by complexity/by usage/by technology/hybrid]
- Hierarchy Depth: [maximum levels and rationale]
- Category Size Guidelines: [ideal pattern count per category]
- Evolution Strategy: [how categories grow and split]

Does this domain architecture support your team's workflow and mental model?
What adjustments would improve discoverability and usability?
```

## Phase 3: Navigation and Discovery Design

### 3.1 Multi-Modal Access Strategy
**Agent**: SEAD Catalog Architect
- Design hierarchical browsing for systematic exploration
- Create search and filtering capabilities for targeted discovery
- Establish tagging and metadata systems for flexible access
- Plan cross-referencing and relationship navigation

### 3.2 Progressive Disclosure and Information Architecture
**Agent**: SEAD Catalog Architect
- Design information hierarchy that reduces cognitive load
- Create progressive disclosure patterns from overview to implementation detail
- Establish consistent information architecture across all domains
- Plan responsive design for different usage contexts and devices

**Elicit**:
```
NAVIGATION AND DISCOVERY DESIGN

Access Methods:
1. Hierarchical Browsing:
   - Entry Points: [domain landing pages, overview dashboards]
   - Navigation Depth: [levels and breadcrumb strategy]
   - Category Overviews: [summary information and pattern counts]

2. Search and Filtering:
   - Search Scope: [title, description, content, tags, examples]
   - Filter Categories: [domain, complexity, technology, usage scenario]
   - Search Results: [ranking algorithm and display format]

3. Tag-Based Discovery:
   - Tag Categories: [technology, pattern-type, complexity, domain]
   - Tag Display: [visual design and interaction patterns]
   - Tag Relationships: [hierarchical tags and cross-references]

4. Cross-Reference Navigation:
   - Related Patterns: [similarity algorithm and display]
   - Dependencies: [clear dependency chain visualization]
   - Alternatives: [pattern comparison and selection guidance]

Information Architecture:
Pattern Page Structure:
1. Quick Reference: [essential information above the fold]
2. Problem and Solution: [context and approach overview]
3. Implementation Guide: [step-by-step instructions]
4. Examples and Usage: [code samples and real-world applications]
5. Advanced Topics: [customization, optimization, troubleshooting]
6. Related Resources: [dependencies, alternatives, enhancements]

Progressive Disclosure Strategy:
- Overview Level: [pattern purpose and key benefits]
- Implementation Level: [detailed steps and code examples]
- Expert Level: [customization options and advanced usage]

How does this navigation approach align with your team's pattern discovery preferences?
```

## Phase 4: Metadata and Classification System

### 4.1 Pattern Metadata Schema Design
**Agent**: SEAD Catalog Architect
- Define comprehensive metadata schema for pattern classification
- Create structured data for search, filtering, and automated processing
- Establish quality indicators and maturity classification
- Design extensible metadata system for future enhancement

### 4.2 Relationship and Dependency Modeling
**Agent**: SEAD Catalog Architect
- Model pattern relationships and dependencies explicitly
- Create dependency graphs and impact analysis capabilities
- Design conflict detection and resolution guidance
- Establish versioning and evolution tracking systems

**Elicit**:
```
METADATA AND CLASSIFICATION SYSTEM

Pattern Metadata Schema:
Core Attributes:
- Name: [naming convention and uniqueness requirements]
- Domain: [primary domain and secondary classifications]
- Description: [format, length, and content guidelines]
- Keywords/Tags: [structured tagging taxonomy]
- Complexity: [classification system and criteria]
- Quality Tier: [tier system and progression criteria]

Technical Metadata:
- Technology Stack: [supported languages, frameworks, tools]
- Dependencies: [internal and external dependencies]
- Version: [semantic versioning strategy]
- Last Updated: [maintenance tracking and freshness indicators]
- Test Coverage: [testing status and validation level]

Usage Metadata:
- Use Cases: [appropriate usage scenarios and contexts]
- Anti-Patterns: [when not to use and alternatives]
- Performance: [performance characteristics and benchmarks]
- Security: [security considerations and requirements]

Relationship Types:
- Depends On: [required dependencies for functionality]
- Enhances: [patterns that work well together]
- Conflicts With: [patterns that should not be combined]
- Alternatives To: [different approaches to same problem]
- Extends: [patterns that build upon base patterns]
- Supersedes: [deprecated patterns and modern replacements]

Classification Taxonomy:
Complexity Levels:
- Beginner: [characteristics and examples]
- Intermediate: [characteristics and examples]
- Advanced: [characteristics and examples]
- Expert: [characteristics and examples]

Quality Tiers:
- Experimental: [new patterns under development]
- Stable: [production-ready patterns with validation]
- Recommended: [best-practice patterns for common scenarios]
- Foundational: [essential patterns for architecture consistency]

Does this metadata system support your catalog management and discovery needs?
```

## Phase 5: Catalog Evolution and Maintenance Strategy

### 5.1 Growth and Scaling Architecture
**Agent**: SEAD Catalog Architect
- Design catalog structure that supports organic growth
- Plan domain expansion and new category integration
- Create archival and deprecation strategies for pattern lifecycle
- Establish reorganization procedures for structural improvements

### 5.2 Governance and Quality Maintenance
**Agent**: SEAD Catalog Architect
- Define governance processes for taxonomy changes and evolution
- Establish quality maintenance procedures and regular reviews
- Create community contribution and feedback integration processes
- Plan automated validation and consistency checking systems

**Elicit**:
```
CATALOG EVOLUTION STRATEGY

Growth Management:
- New Domain Addition: [criteria and approval process]
- Category Splitting: [when and how categories divide]
- Pattern Migration: [moving patterns between domains/categories]
- Archive Strategy: [handling deprecated and obsolete patterns]

Governance Framework:
- Taxonomy Changes: [who can approve structural changes]
- Quality Standards: [ongoing quality assurance processes]
- Community Input: [how team feedback influences organization]
- Version Control: [tracking taxonomy evolution and changes]

Maintenance Procedures:
- Regular Reviews: [frequency and scope of taxonomy assessments]
- Quality Audits: [pattern validation and improvement processes]
- Link Maintenance: [ensuring cross-references remain accurate]
- Metrics Collection: [usage analytics and improvement insights]

Automation Opportunities:
- Consistency Checking: [automated validation of naming, structure, metadata]
- Dead Link Detection: [monitoring and reporting broken references]
- Usage Analytics: [tracking pattern discovery and access patterns]
- Quality Metrics: [automated assessment of documentation completeness]

Future-Proofing Considerations:
- Technology Evolution: [adapting to new frameworks and approaches]
- Team Growth: [scaling taxonomy for larger organizations]
- Integration Needs: [connecting with external tools and systems]
- Performance Requirements: [maintaining responsiveness as catalog grows]

How should we prioritize catalog evolution and maintenance activities?
```

## Phase 6: Implementation Planning and Validation

### 6.1 Implementation Roadmap and Resource Planning
**Agent**: SEAD Catalog Architect
- Create detailed implementation plan with phases and milestones
- Estimate resource requirements for catalog structure creation
- Plan integration with existing documentation and development tools
- Design migration strategy from current state to target taxonomy

### 6.2 Pilot Testing and Validation Strategy
**Agent**: SEAD Catalog Architect
- Design pilot testing approach with representative user scenarios
- Create validation criteria for taxonomy effectiveness and usability
- Plan feedback collection and iterative improvement processes
- Establish success metrics and measurement strategies

**Elicit**:
```
IMPLEMENTATION AND VALIDATION PLAN

Implementation Phases:
Phase 1 - Foundation ([timeline]):
- Core domain structure creation
- Primary navigation implementation
- Essential metadata schema deployment
- Basic search and browsing capabilities

Phase 2 - Enhancement ([timeline]):
- Advanced search and filtering
- Cross-reference navigation
- Community contribution workflows
- Analytics and monitoring implementation

Phase 3 - Optimization ([timeline]):
- Performance optimization
- Advanced automation features
- Integration with external tools
- Comprehensive governance processes

Resource Requirements:
- Development Effort: [time estimates by phase]
- Content Creation: [pattern documentation and organization effort]
- Tool Integration: [technical implementation requirements]
- Training and Adoption: [team onboarding and change management]

Pilot Testing Strategy:
- Test Scenarios: [representative user workflows and use cases]
- Success Criteria: [measurable outcomes for taxonomy effectiveness]
- Feedback Methods: [surveys, interviews, usage analytics, task completion]
- Iteration Plan: [how feedback will be incorporated into improvements]

Validation Metrics:
- Discoverability: [time to find relevant patterns]
- Usability: [task completion rates and user satisfaction]
- Adoption: [pattern usage frequency and coverage]
- Maintenance: [effort required for catalog maintenance and updates]

Ready to proceed with implementation, or should we refine any aspects of the taxonomy design?
```

## Success Criteria

- [ ] **Logical Organization**: Catalog structure aligns with team mental models and workflow patterns
- [ ] **Scalable Architecture**: Taxonomy supports growth from small collections to comprehensive catalogs
- [ ] **Multi-Modal Access**: Support for browsing, searching, tagging, and cross-reference navigation
- [ ] **Clear Information Architecture**: Progressive disclosure and consistent organization reduce cognitive load
- [ ] **Comprehensive Metadata**: Rich classification system supports advanced discovery and automation
- [ ] **Evolution Strategy**: Governance and maintenance procedures support long-term catalog health
- [ ] **Validation Evidence**: Pilot testing demonstrates taxonomy effectiveness and user satisfaction

## Output Artifacts

1. **Domain Architecture**: Complete catalog structure with domains, subdomains, and category hierarchies
2. **Navigation Design**: Multi-modal access strategy with browsing, search, and cross-reference systems
3. **Metadata Schema**: Comprehensive classification system with relationship modeling
4. **Implementation Plan**: Phased roadmap with resource requirements and validation strategy
5. **Governance Framework**: Evolution and maintenance procedures for long-term catalog health

## Mode Considerations

- **Prototype Mode**: Simple, flat taxonomy optimized for rapid pattern access and experimentation
- **Development Mode**: Balanced hierarchy with reasonable organization depth and discovery features
- **Build-to-Deploy Mode**: Comprehensive taxonomy with advanced features and enterprise governance

## Anti-Patterns to Avoid

- **Over-Engineering**: Creating overly complex taxonomy before understanding usage patterns
- **Premature Optimization**: Designing for theoretical rather than actual user needs
- **Rigid Structure**: Taxonomy that cannot evolve with changing requirements and pattern growth
- **Inconsistent Organization**: Mixed organizational principles that confuse rather than clarify
- **Maintenance Neglect**: Beautiful initial design that degrades without ongoing care and evolution

---

**Note**: This workflow requires deep understanding of team workflows and preferences. Success depends on balancing systematic organization principles with pragmatic usability considerations.