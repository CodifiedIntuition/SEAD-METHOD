<!-- Powered by SEAD-METHOD™ Core -->

# SEAD Document Sharding Task

## Purpose

Split large documents into manageable chunks while maintaining constitutional compliance, catalog awareness, and content integrity. This task supports multiple sharding strategies optimized for different SEAD document types.

## Sharding Strategies

### 1. Level 2 Section Sharding (Default)
- Split at `## Heading` boundaries
- Ideal for: Architecture docs, technical specifications
- Output: Individual section files with adjusted heading levels

### 2. Workstream-Based Sharding (PRD Optimization)
- Split by functional workstreams (Auth, Competition, Talent, etc.)
- Maintains cross-workstream references
- Ideal for: PRD documents, feature specifications

### 3. Constitutional Sharding (Framework Documents)
- Split by constitutional principles
- Maintains principle hierarchies and constraint relationships
- Ideal for: Governance documents, policy frameworks

### 4. Catalog Pattern Sharding (Resource Libraries)
- Split by pattern categories
- Maintains pattern relationships and dependencies
- Ideal for: Catalog resources, pattern libraries

## Primary Method: Automatic with markdown-tree-parser

[[LLM: First, check if there is a `shard` section in sead-core/core-config.yaml or sead.config.yaml with `markdownExploder: true`. If neither file exists or the setting is not present, default to attempting the automatic method first.

If automatic sharding is enabled (or by default), attempt to run: `md-tree explode {input file} {output path}`

If the command succeeds, inform the user that the document has been sharded successfully and provide a summary of created files. Then STOP - do not proceed further.

If the command fails (especially with "command not found"), inform the user: "The md-tree command is not available. Please install @kayvan/markdown-tree-parser globally with: `npm install -g @kayvan/markdown-tree-parser` or proceed with manual sharding."

Then ask the user if they want to:
1. Install the tool and retry automatic sharding
2. Proceed with manual sharding
3. Stop and address the dependency

**IMPORTANT: Wait for user choice before proceeding.**]]

### Installation and Usage

1. **Install globally**:
   ```bash
   npm install -g @kayvan/markdown-tree-parser
   ```

2. **Basic usage**:
   ```bash
   # Level 2 section sharding (default)
   md-tree explode docs/sead-prd.md docs/sead-prd

   # Workstream sharding (detect workstream boundaries)
   md-tree explode docs/sead-prd.md docs/prd-shards --strategy workstream

   # Constitutional sharding (for framework docs)
   md-tree explode docs/constitutional-framework.md docs/const-shards --strategy constitutional
   ```

3. **SEAD-specific enhancements**:
   - Automatically detects document type and suggests optimal strategy
   - Maintains catalog references across shards
   - Preserves constitutional compliance markers
   - Creates SEAD-compliant index files

## Manual Method (Fallback)

### Pre-Sharding Analysis

1. **Document Type Detection**:
   - PRD documents: Look for workstream markers (Authentication, Competition, Talent, etc.)
   - Architecture docs: Look for technical section patterns
   - Constitutional docs: Look for principle markers and constraint definitions
   - Catalog resources: Look for pattern categories and relationships

2. **Strategy Selection**:
   - **Workstream**: If document contains clear functional boundaries
   - **Level 2**: If document has clear section hierarchies
   - **Constitutional**: If document contains principles and constraints
   - **Catalog**: If document contains pattern definitions

### Core Sharding Process

#### Step 1: Document Analysis and Preparation

1. Read the entire source document
2. Identify document type and optimal sharding strategy
3. Create target directory structure based on strategy:

   ```
   # Level 2 Strategy
   docs/{document-name}/
   ├── index.md
   └── {section-files}.md

   # Workstream Strategy  
   docs/{document-name}-shards/
   ├── index.md
   ├── authentication/
   │   ├── requirements.md
   │   └── user-stories.md
   └── competition/
       ├── requirements.md
       └── user-stories.md

   # Constitutional Strategy
   docs/{document-name}-shards/
   ├── index.md
   ├── user-autonomy/
   │   ├── principle.md
   │   └── constraints.yaml
   └── privacy-protection/
       ├── principle.md
       └── constraints.yaml
   ```

#### Step 2: Content Extraction with SEAD Compliance

**CRITICAL SEAD SHARDING RULES:**

1. **Content Integrity**: Preserve ALL content including:
   - Constitutional compliance markers
   - Catalog pattern references
   - Cross-workstream dependencies
   - SEAD-specific templates and placeholders

2. **Context Preservation**: For each shard, include:
   ```markdown
   <!-- SEAD Shard Context -->
   <!-- Source: [original-document-path] -->
   <!-- Strategy: [sharding-strategy] -->
   <!-- Workstream: [if applicable] -->
   <!-- Constitutional-Refs: [principle-references] -->
   <!-- Catalog-Deps: [pattern-dependencies] -->
   <!-- Generated: [timestamp] -->
   ```

3. **Markdown Parsing**: Use proper parsing that understands:
   - Fenced code blocks (```) - don't break on ## inside code
   - YAML frontmatter blocks
   - SEAD template syntax {{placeholders}}
   - Constitutional constraint blocks
   - Catalog reference syntax

#### Step 3: Strategy-Specific Processing

**Level 2 Section Strategy:**
- Extract content between ## headings
- Adjust heading levels (## becomes #, ### becomes ##, etc.)
- Preserve all subsections and content

**PRD Story-Focused Sharding (For Development Work):**

**Purpose**: Split PRDs so developers can focus on specific stories without loading entire document.

**Step 1: Story Workstream Detection:**
1. **Scan for story/feature groupings** by workstream keywords:
   - **Authentication Stories**: "login", "signup", "auth", "user management", "permissions", "security"
   - **Competition Stories**: "tournament", "contest", "competition", "event", "leaderboard", "matching"
   - **Talent Stories**: "portfolio", "achievement", "badge", "progress", "skill development"
   - **Analytics Stories**: "dashboard", "reporting", "metrics", "analytics", "insights"
   - **Administration Stories**: "admin", "settings", "configuration", "user management"

2. **Story Content Identification**: For each section, look for:
   - User story formats ("As a [user], I want...")
   - Acceptance criteria lists
   - Feature requirements
   - API endpoint descriptions
   - UI/UX specifications

**Step 2: Development-Ready Structure:**
Create workstream folders optimized for story development:
```
docs/prd-shards/
├── index.md (story navigation by workstream)
├── authentication/
│   ├── user-stories.md (all auth user stories)
│   ├── api-requirements.md (auth API specs)
│   ├── acceptance-criteria.md (auth testing criteria)
│   └── dependencies.md (what auth needs from other workstreams)
├── competition/
│   ├── user-stories.md (competition stories)
│   ├── api-requirements.md (competition APIs)
│   ├── acceptance-criteria.md (competition testing)
│   └── dependencies.md
├── shared/
│   ├── data-models.md (shared data structures)
│   ├── common-components.md (reusable UI components)
│   └── integration-points.md (how workstreams connect)
```

**Step 3: Developer Workflow Integration:**
- **sead-developer**: Gets focused story file + dependencies only
- **sead-product-owner**: Reviews story-specific requirements 
- **sead-qa**: Gets acceptance criteria without unrelated features
- **sead-scrum-master**: Manages backlog by workstream

**Story Sharding Rules:**
1. **One story per section** - Easy to find and work on
2. **Include dependencies** - Developer knows what they need from other teams
3. **Preserve acceptance criteria** - QA can test without full context
4. **Maintain traceability** - Link back to original PRD sections

**Constitutional Strategy (Phase 2 Enhanced):**

**Step 1: Constitutional Principle Detection:**
1. Scan document for constitutional principle indicators:
   - **User Autonomy**: "user control", "consent", "choice", "autonomy", "self-determination"
   - **Privacy Protection**: "privacy", "data protection", "personal information", "confidentiality"
   - **Educational Focus**: "education", "learning", "development", "skill", "growth", "academic"
   - **Accessibility First**: "accessibility", "inclusive", "universal design", "assistive", "barrier-free"
   - **Data Sovereignty**: "data ownership", "user data", "data rights", "information control"

2. **Constitutional Content Analysis**: For each section:
   - Identify constraint statements (must/shall/required)
   - Extract governance rules and policies
   - Map compliance requirements to principles
   - Detect constitutional violation risks

**Step 2: Principle-Specific Organization:**
- Create principle directories with governance structure:
  ```
  docs/constitutional-shards/
  ├── index.md (principle navigation)
  ├── user-autonomy/
  │   ├── principle.md (core principle definition)
  │   ├── constraints.yaml (technical constraints)
  │   ├── validation-rules.md (compliance checking)
  │   ├── examples.md (implementation examples)
  │   └── violations.md (common violations and fixes)
  ├── privacy-protection/
  │   ├── principle.md
  │   ├── constraints.yaml (GDPR/COPPA compliance)
  │   ├── validation-rules.md
  │   ├── examples.md
  │   └── violations.md
  └── compliance/
      ├── cross-principle-matrix.md (principle interactions)
      ├── mode-requirements.md (prototype/dev/deploy modes)
      └── audit-checklist.md (constitutional audit items)
  ```

**Step 3: Constraint Extraction and Validation:**
- Extract constraint definitions into structured YAML
- Create validation rules for automated compliance checking
- Generate principle interaction matrices
- Build constitutional audit checklists

**Catalog Pattern Sharding (For Agent Pattern Discovery):**

**Purpose**: Split large catalog files so agents can quickly find specific patterns/templates.

**Step 1: Pattern Category Detection:**
1. **Scan for pattern groupings** by category keywords:
   - **API Patterns**: "endpoint", "REST", "GraphQL", "API", "service", "microservice"
   - **Auth Patterns**: "authentication", "authorization", "OAuth", "JWT", "session", "security"
   - **Data Patterns**: "database", "schema", "migration", "model", "entity", "repository"
   - **UI Patterns**: "component", "layout", "form", "navigation", "responsive", "design system"
   - **Integration Patterns**: "webhook", "event", "messaging", "queue", "pub/sub", "integration"
   - **Test Patterns**: "testing", "unit test", "integration test", "mock", "fixture", "coverage"

2. **Pattern Content Identification**: For each section, look for:
   - Code examples and snippets
   - Implementation templates
   - Configuration patterns
   - Best practice guidelines
   - Usage documentation

**Step 2: Agent-Optimized Structure:**
Create category folders optimized for pattern discovery:
```
sead-catalog/shards/
├── index.md (pattern discovery navigation)
├── api-patterns/
│   ├── rest-endpoints.md (RESTful API patterns)
│   ├── graphql-schemas.md (GraphQL patterns)
│   ├── error-handling.md (API error patterns)
│   └── authentication.md (API auth patterns)
├── auth-patterns/
│   ├── oauth-implementation.md (OAuth flows)
│   ├── session-management.md (session patterns)
│   ├── jwt-handling.md (JWT patterns)
│   └── rbac-patterns.md (role-based access)
├── data-patterns/
│   ├── schema-design.md (database schemas)
│   ├── migration-patterns.md (data migrations)
│   ├── repository-patterns.md (data access)
│   └── validation-schemas.md (data validation)
├── ui-patterns/
│   ├── component-library.md (reusable components)
│   ├── form-patterns.md (form implementations)
│   ├── navigation-patterns.md (nav components)
│   └── responsive-layouts.md (layout patterns)
└── shared/
    ├── pattern-dependencies.md (how patterns connect)
    ├── integration-examples.md (pattern combinations)
    └── migration-guide.md (pattern evolution)
```

**Step 3: Agent Workflow Integration:**
- **sead-architect**: Gets architecture-specific patterns quickly
- **sead-catalog-architect**: Maintains and organizes pattern libraries
- **sead-developer**: Finds implementation examples without searching entire catalog
- **All agents**: Quick pattern discovery for planning and development

**Catalog Sharding Rules:**
1. **One pattern per section** - Easy to find specific implementations
2. **Include usage examples** - Agents get complete context
3. **Maintain relationships** - Show how patterns work together
4. **Version compatibility** - Track pattern evolution and compatibility

#### Step 4: Index File Generation

Create comprehensive index files with SEAD-specific navigation:

```markdown
# [Original Document Title]

<!-- SEAD Sharding Index -->
**Sharding Strategy**: [strategy-used]  
**Generated**: [timestamp]  
**Source**: [original-document-path]  
**Constitutional Compliance**: [compliance-level]  
**Catalog Integration**: [integration-status]

[Original introduction content if any]

## Navigation

### By Workstream
- [Authentication](./authentication/) - User management and security
- [Competition](./competition/) - Contest and event management  
- [Talent](./talent/) - Portfolio and achievement tracking

### Constitutional References
- [User Autonomy Principle](./constitutional-refs/user-autonomy.md)
- [Privacy Protection](./constitutional-refs/privacy-protection.md)

### Catalog Dependencies
- [API Contracts](./catalog-refs/api-contracts.md)
- [Shared Types](./catalog-refs/shared-types.md)

## Quick Access
- [All Requirements](./all-requirements.md)
- [Cross-Workstream Dependencies](./dependencies.md)
- [Constitutional Compliance Matrix](./compliance-matrix.md)
```

#### Step 5: SEAD-Specific Enhancements

1. **Constitutional Compliance Tracking**:
   - Add compliance markers to each shard
   - Create compliance matrix showing which principles apply to which shards
   - Include constraint references

2. **Catalog Integration**:
   - Identify catalog pattern references in each shard
   - Create catalog dependency files
   - Include pattern usage examples

3. **Cross-Reference Management**:
   - Create dependency maps between shards
   - Maintain workstream interaction documentation
   - Include integration points documentation

#### Step 6: Validation and Quality Assurance

1. **Content Verification**:
   - Ensure no content was lost during sharding
   - Verify all constitutional markers are preserved
   - Check catalog references are intact

2. **Structure Validation**:
   - Confirm directory structure follows SEAD conventions
   - Verify index files provide complete navigation
   - Check cross-references are working

3. **Compliance Checking**:
   - Validate constitutional principle coverage
   - Confirm catalog pattern integration
   - Verify SEAD methodology compliance

#### Step 7: Results Reporting

Provide comprehensive SEAD-compliant summary:

```text
SEAD Document Sharding Complete
==================================

Source Document: [path]
Strategy Used: [strategy]
Constitutional Compliance: [level]
Catalog Integration: [status]

Files Created: [count]
├── index.md (Navigation hub)
├── [workstream-folders/] ([count] workstreams)
├── constitutional-refs/ (Principle references)
└── catalog-refs/ (Pattern dependencies)

Workstream Distribution:
- Authentication: [X] sections, [Y] requirements
- Competition: [X] sections, [Y] requirements  
- Talent: [X] sections, [Y] requirements

Constitutional Coverage:
- User Autonomy: [coverage %]
- Privacy Protection: [coverage %]
- Educational Focus: [coverage %]

Catalog Dependencies:
- API Contracts: [X] references
- Shared Types: [X] references
- Design System: [X] references

Validation Results:
✅ Content integrity preserved
✅ Constitutional compliance maintained
✅ Catalog references intact
✅ Cross-workstream dependencies documented

Next Steps:
1. Review sharded content for workstream development
2. Update catalog references as needed
3. Validate constitutional compliance in context
4. Begin workstream-specific development
```

## Special Considerations for SEAD

### Constitutional Document Sharding
- Maintain principle hierarchies across shards
- Preserve constraint relationships
- Create principle-specific validation files
- Include governance compliance markers

### PRD Workstream Sharding
- Detect functional boundaries automatically
- Preserve user story relationships across workstreams
- Maintain acceptance criteria integrity
- Include workstream interaction documentation

### Catalog Resource Sharding
- Preserve pattern relationships
- Maintain dependency graphs
- Include usage examples in each shard
- Create pattern discovery indexes

### Quality Assurance
- Validate sharding reversibility (can reconstruct original)
- Ensure SEAD methodology compliance
- Maintain constitutional principle adherence
- Preserve catalog pattern integration

## Error Handling

1. **Parsing Errors**: If document structure is ambiguous, prompt user for strategy clarification
2. **Tool Failures**: Gracefully fallback to manual method with clear user communication
3. **Validation Failures**: Report specific compliance issues and suggest corrections
4. **Configuration Issues**: Provide clear guidance for SEAD-specific setup

## Integration Points

- **Agents**: All SEAD agents can invoke this task for document management
- **Workflows**: Integrated into constitutional document preparation workflows
- **Catalog**: Maintains pattern references and dependencies during sharding
- **Constitutional Framework**: Preserves compliance markers and principle relationships

This comprehensive sharding capability enables SEAD teams to manage large, complex documents while maintaining constitutional compliance, catalog integration, and workstream-based development efficiency.