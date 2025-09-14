<!-- Powered by SEAD-METHOD™ Core -->

# SEAD-METHOD™ Knowledge Base

## Overview

SEAD-METHOD™ (Specification Enforced Agentic Agile Development) is a revolutionary AI-assisted development methodology that combines 12 specialized AI agents with constitutional constraints and catalog pattern systems. The framework ensures consistent, high-quality software development through enforceable governance and reusable pattern catalogs.

### Key Features

- **Constitutional AI Agents**: 12 specialized agents with built-in constraints preventing drift
- **Catalog Pattern System**: 11-domain reusable pattern library for consistency
- **3 Development Modes**: Prototype, Development, and Build-to-Deploy with adaptive governance
- **Specification-Driven**: Requirements, architecture, and implementation driven by formal specifications
- **Context Preservation**: Agent handoffs maintain complete project context and decision history

### When to Use SEAD

- **Greenfield Projects**: Complete end-to-end development with guaranteed quality
- **Brownfield Enhancement**: Systematic improvement of existing codebases
- **Enterprise Development**: Large-scale projects requiring governance and compliance
- **Team Collaboration**: Multi-developer projects with consistency requirements
- **Pattern Standardization**: Organizations seeking reusable development patterns

## How SEAD Works

### The Constitutional Framework

SEAD transforms AI assistance through constitutional governance - each agent operates under strict constraints that prevent common AI development problems:

1. **Constitutional Constraints**: Each agent has specific rules preventing overreach and ensuring quality
2. **Catalog Compliance**: All decisions must reference proven patterns from the catalog
3. **Mode-Aware Governance**: Constraints adapt to project phase (prototype vs production)
4. **Context Preservation**: Complete decision history maintained across agent handoffs
5. **Quality Gates**: Built-in validation at each stage prevents quality degradation

### The Three-Mode Approach

#### Prototype Mode - Fast & Flexible
- **Purpose**: MVP, proof of concept, experimentation
- **Constraints**: Minimal - focus on speed and iteration
- **Quality Gates**: Basic functionality validation
- **Catalog Usage**: Core patterns only (API, Types, Design System)

#### Development Mode - Balanced Quality
- **Purpose**: Feature development, team collaboration, production preparation
- **Constraints**: Progressive - balance speed with quality
- **Quality Gates**: Testing, documentation, code review, pattern compliance
- **Catalog Usage**: All relevant domains with quality validation

#### Build-to-Deploy Mode - Maximum Reliability
- **Purpose**: Production systems, enterprise applications, critical infrastructure
- **Constraints**: Strict - maximum quality and reliability
- **Quality Gates**: Full test suite, security review, performance validation, comprehensive documentation
- **Catalog Usage**: Complete domain compliance with anti-drift protection

### The Development Workflow

```text
1. Specification → SEAD Analyst researches and documents requirements
2. Planning → SEAD Architect designs system with catalog patterns
3. Story Creation → SEAD Product Owner creates implementation stories
4. Story Validation → SEAD Scrum Master ensures story quality
5. Implementation → SEAD Developer codes with constitutional compliance
6. Quality Assurance → SEAD QA validates against catalog standards
7. Integration → SEAD Master orchestrates complex workflows
```

### Why This Works

- **Consistent Quality**: Constitutional constraints prevent common AI development failures
- **Proven Patterns**: Catalog ensures tested solutions across all domains
- **Scalable Process**: Mode-aware governance adapts to project needs
- **Context Continuity**: Complete decision history prevents information loss
- **Governance Integration**: Built-in compliance with organizational standards

## Getting Started

### Quick Start Options

#### Option 1: Interactive CLI Installation

**Best for**: Developers wanting professional IDE integration

```bash
# Install SEAD globally
npm install -g sead-method-core

# Interactive installation (recommended)
sead install

# Initialize your first project
sead init my-first-app --mode development --template fullstack
```

**Installation Steps**:
- Choose your IDE (Claude Code, Cursor, VS Code, etc.)
- Select installation type (full, constitutional, or specific agents)
- Configure catalog domains and patterns
- Verify agent availability and constitutional constraints

**Supported IDEs**:
- **Claude Code**: Native AI integration (`/sead-architect`, `/sead-developer`)
- **Cursor**: Built-in AI capabilities (`@sead-architect`, `@sead-developer`)
- **VS Code**: Extensions like Cline, Roo Code, GitHub Copilot
- **Other IDEs**: Custom integration files generated

#### Option 2: Project Templates

**Best for**: Specific project types and quick starts

```bash
# Backend API project
sead init api-service --mode development --template backend

# Frontend application
sead init ui-dashboard --mode development --template frontend

# Full-stack application
sead init full-app --mode development --template fullstack

# Existing project integration
sead catalog generate --source ./existing-project --guided
sead init enhanced-project --catalog ./generated-catalog
```

### Environment Selection Guide

**Use CLI for**:
- Project initialization and configuration
- Specification creation and planning
- Story generation and management
- Catalog operations and validation

**Use IDE for**:
- Active development and implementation
- Real-time coding with agent assistance
- File operations and project integration
- Code review and quality assurance

## Core Architecture

### The SEAD Agent System

SEAD employs 12 specialized AI agents, each with constitutional constraints and catalog integration:

#### Core Development Agents

| Agent | Role | Constitutional Constraints | Catalog Dependencies |
|-------|------|---------------------------|---------------------|
| `sead-analyst` | Business Analyst | Research-focused, no implementation | Market patterns, domain analysis |
| `sead-project-manager` | Product Manager | Strategic planning, no technical decisions | All domains for requirements |
| `sead-architect` | Solution Architect | Architecture-only, no implementation | Technical patterns, integration |
| `sead-developer` | Developer | Implementation-only, follows specifications | Code patterns, technical standards |
| `sead-qa` | QA Specialist | Quality validation, testing focus | Test patterns, quality standards |
| `sead-ux-expert` | UX Designer | UI/UX design, user experience focus | Design system, interaction patterns |

#### Agile Process Agents

| Agent | Role | Constitutional Constraints | Catalog Dependencies |
|-------|------|---------------------------|---------------------|
| `sead-product-owner` | Product Owner | Story creation, backlog management | Requirements patterns, user stories |
| `sead-scrum-master` | Scrum Master | Process facilitation, no implementation | Agile patterns, workflow management |

#### Specialized Agents

| Agent | Role | Constitutional Constraints | Catalog Dependencies |
|-------|------|---------------------------|---------------------|
| `sead-pattern-extraction` | Pattern Extractor | Analysis-only, identifies reusable patterns | Pattern taxonomy, classification |
| `sead-catalog-architect` | Catalog Architect | Catalog design, pattern organization | Domain definitions, taxonomy |

#### Meta-Coordination Agents

| Agent | Role | Constitutional Constraints | Catalog Dependencies |
|-------|------|---------------------------|---------------------|
| `sead-orchestrator` | Team Coordinator | Workflow orchestration, agent coordination | All patterns for context |
| `sead-master` | Universal Expert | Can perform any task with full constraints | Complete catalog access |

### Constitutional Constraint System

Each agent operates under specific constitutional rules that:

- **Prevent Scope Creep**: Agents cannot exceed their defined responsibilities
- **Ensure Quality**: Built-in quality gates and validation requirements
- **Maintain Context**: Required handoff protocols and context preservation
- **Enforce Compliance**: Catalog pattern usage and anti-drift protection
- **Enable Governance**: Audit trails and decision documentation

### The Catalog Pattern System

SEAD organizes reusable patterns into 11 specialized domains:

#### Technical Domains
- **API Contracts**: Service definitions, endpoints, communication protocols
- **Shared Types**: Data structures, interfaces, type definitions
- **Integration Patterns**: External service integration, communication patterns
- **Data Strategy**: Database design, persistence, migration patterns

#### User Experience Domains
- **Design System**: UI components, design tokens, interaction patterns
- **State Management**: Application state, data flow, synchronization patterns
- **Error Handling**: Error management, user feedback, resilience patterns
- **Validation Schemas**: Input validation, constraints, sanitization patterns

#### Quality Assurance Domains
- **Test Patterns**: Testing strategies, utilities, quality validation
- **Auth Patterns**: Authentication, authorization, security implementations

#### Infrastructure Domain
- **Deployment Strategy**: Infrastructure, CI/CD, operational patterns

### Project Structure

```
sead-project/
├── sead.config.yaml           # Project configuration and constraints
├── sead-workspace/            # All project artifacts
│   ├── specifications/        # Requirements and specifications
│   ├── planning/             # Architecture and design plans
│   ├── stories/              # Implementation user stories
│   └── implementations/      # Detailed implementation plans
└── sead-catalog/             # Reusable pattern library
    ├── api-contracts/        # API definitions and contracts
    ├── shared-types/         # Common data types
    ├── design-system/        # UI components and patterns
    ├── state-management/     # Application state patterns
    ├── error-handling/       # Error management patterns
    ├── validation-schemas/   # Input validation patterns
    ├── test-patterns/        # Testing strategies
    ├── auth-patterns/        # Authentication patterns
    ├── integration-patterns/ # External service integration
    ├── data-strategy/        # Database and persistence
    └── deployment-strategy/  # Infrastructure and deployment
```

## Complete Development Workflow

### Phase 1: Specification & Planning

**Specification Creation** (Using `sead-analyst`):
```bash
# Research and document requirements
sead specify "Task management app with team collaboration features"

# Interactive specification with deeper analysis
sead specify "E-commerce platform" --interactive --detailed
```

**Architectural Planning** (Using `sead-architect`):
```bash
# Generate architectural plan with catalog compliance
sead plan fullstack --catalog-mode development --constitutional-compliance

# Plan specific components or services
sead plan backend --focus api-design --catalog-domains api-contracts,data-strategy
```

### Phase 2: Story Development

**Story Creation** (Using `sead-product-owner`):
```bash
# Generate user stories from specifications
sead stories --enforce-catalog --mode development

# Create stories for specific components
sead stories --component user-authentication --catalog-compliance
```

**Story Validation** (Using `sead-scrum-master`):
```bash
# Validate story quality and completeness
sead validate stories --constitutional-compliance --catalog-patterns

# Prioritize and sequence stories
sead stories prioritize --dependencies --effort-estimation
```

### Phase 3: Implementation

**Story Implementation** (Using `sead-developer`):
```bash
# Implement specific story with constitutional compliance
sead implement user-auth-001 --mode development --validate-compliance

# Implement with specific catalog patterns
sead implement dashboard-ui-003 --patterns design-system,state-management
```

**Quality Assurance** (Using `sead-qa`):
```bash
# Validate implementation against catalog standards
sead qa validate impl-user-auth-001 --catalog-compliance --test-coverage

# Perform comprehensive quality review
sead qa review --implementation-complete --constitutional-audit
```

### Phase 4: Integration & Deployment

**Catalog Integration** (Using `sead-catalog-architect`):
```bash
# Update catalog with new patterns discovered
sead catalog update --from-implementation --validate-patterns

# Ensure catalog consistency and quality
sead catalog validate --constitutional-compliance --pattern-quality
```

**Project Validation**:
```bash
# Complete project health check
sead status --detailed --constitutional-summary --catalog-compliance

# Final validation before deployment
sead validate --end-to-end --constitutional --catalog --quality-gates
```

## Catalog Pattern Management

### Generating Catalogs from Existing Projects

**Brownfield Analysis**:
```bash
# Analyze existing project and extract patterns
sead catalog generate --source ./existing-project --interactive

# Generate with specific domain focus
sead catalog generate --source ./api-service --domains api-contracts,auth-patterns

# Guided extraction with quality validation
sead catalog generate --source ./frontend-app --guided --validate-quality
```

### Catalog Validation and Quality

**Pattern Validation**:
```bash
# Validate catalog structure and completeness
sead catalog validate --structure --completeness --quality-metrics

# Check constitutional compliance
sead catalog validate --constitutional --anti-drift --governance

# Performance and integration validation
sead catalog validate --integration-tests --performance-benchmarks
```

### Catalog Evolution and Maintenance

**Pattern Updates**:
```bash
# Update patterns based on new implementations
sead catalog update --from-project --validate-changes --version-increment

# Merge patterns from multiple projects
sead catalog merge --source ./project-a ./project-b --resolve-conflicts

# Refactor catalog organization
sead catalog refactor --domains api-contracts,integration-patterns --optimize
```

## Constitutional Framework

### Mode-Aware Governance

The constitutional framework adapts governance based on development mode:

**Prototype Mode Constraints**:
- Focus on core functionality and speed
- Minimal documentation requirements
- Basic catalog pattern compliance
- Simplified quality gates

**Development Mode Constraints**:
- Balanced quality and delivery speed
- Progressive documentation and testing
- Comprehensive catalog pattern usage
- Standard quality gates and reviews

**Build-to-Deploy Mode Constraints**:
- Maximum quality and reliability focus
- Complete documentation and testing
- Strict catalog pattern compliance
- Comprehensive quality gates and audits

### Context Preservation Requirements

All agent interactions must maintain:
- **Decision History**: Complete record of architectural and implementation decisions
- **Pattern Usage**: Catalog pattern selection rationale and application
- **Quality Metrics**: Validation results and compliance status
- **Handoff Context**: Complete information transfer between agents

### Anti-Drift Protection

Constitutional constraints prevent common AI development issues:
- **Scope Creep**: Agents cannot exceed defined responsibilities
- **Inconsistent Patterns**: All solutions must reference catalog patterns
- **Quality Degradation**: Built-in quality gates prevent shortcuts
- **Context Loss**: Mandatory context preservation across handoffs

## Advanced Usage Patterns

### Multi-Agent Orchestration

**Complex Workflow Coordination**:
```bash
# Orchestrate complete development workflow
sead orchestrate fullstack-development --agents analyst,architect,developer,qa

# Custom workflow with specific agent sequence
sead orchestrate custom --workflow specification→planning→implementation→validation

# Parallel agent coordination for large projects
sead orchestrate parallel --teams frontend,backend,infrastructure
```

### Custom Catalog Development

**Domain-Specific Catalogs**:
```bash
# Create industry-specific catalog extensions
sead catalog create --domain healthcare-patterns --regulations HIPAA,FDA

# Develop organization-specific patterns
sead catalog create --organization-patterns --governance enterprise-standards

# Custom pattern taxonomy for specialized domains
sead catalog taxonomy create --domain fintech --compliance SOX,PCI-DSS
```

### Integration with External Systems

**External Asset Integration**:
```bash
# Integrate existing design systems
sead integrate design-system --source ./corporate-ui-lib --validate-compatibility

# Import API specifications and contracts
sead integrate api-specs --source ./openapi-specs --validate-contracts

# Integrate testing frameworks and patterns
sead integrate test-framework --source ./test-utilities --validate-quality
```

## Quality Assurance & Validation

### Built-in Quality Gates

SEAD includes comprehensive quality validation:

- **Constitutional Compliance**: All agent actions validated against constraints
- **Catalog Pattern Usage**: Ensures proven patterns are applied correctly
- **Cross-Domain Validation**: Verifies pattern integration across domains
- **Quality Metrics**: Automated measurement of code quality and standards
- **Documentation Standards**: Ensures complete and accurate documentation

### Validation Commands

```bash
# Complete project validation
sead validate --constitutional --catalog --quality --end-to-end

# Specific validation types
sead validate --constitutional-compliance --detailed-report
sead validate --catalog-patterns --pattern-quality-metrics
sead validate --implementation-quality --test-coverage --performance

# Continuous validation during development
sead validate --watch --auto-fix --notify-violations
```

## Success Patterns & Best Practices

### Project Initialization
- **Always start with proper mode selection** based on project requirements
- **Configure catalog domains** relevant to your project type
- **Set up constitutional constraints** appropriate for your team and organization
- **Establish quality gates** aligned with your delivery timeline

### Agent Coordination
- **Use specialized agents** for their intended purposes - avoid using meta-agents for routine tasks
- **Maintain clean handoffs** with complete context preservation
- **Validate constitutional compliance** at each stage
- **Document pattern decisions** for future reference and learning

### Catalog Management
- **Start with proven patterns** from existing successful projects
- **Validate pattern quality** before adding to catalog
- **Maintain domain boundaries** to prevent pattern confusion
- **Regular catalog maintenance** to keep patterns current and useful

### Quality Assurance
- **Implement progressive quality gates** appropriate to your development mode
- **Use constitutional constraints** to prevent common development pitfalls
- **Validate catalog compliance** throughout the development process
- **Maintain complete audit trails** for governance and learning

## Troubleshooting & Support

### Common Issues

**Constitutional Constraint Violations**:
```bash
# Identify specific constraint violations
sead validate --constitutional --detailed --violation-report

# Review agent constraints
cat sead-core/constitutional-rules/sead-developer-constraints.yaml

# Fix: Align with catalog patterns or escalate appropriately
sead fix-violations --auto-resolve --catalog-compliance
```

**Catalog Pattern Issues**:
```bash
# Validate catalog integrity and completeness
sead catalog validate --integrity --completeness --quality

# Regenerate missing patterns
sead catalog repair --missing-patterns --auto-generate

# Update catalog from successful implementations
sead catalog update --from-implementations --validate-quality
```

**Agent Coordination Problems**:
```bash
# Check agent handoff status and context
sead status --agent-coordination --context-preservation

# Review handoff history and decision trail
sead history --agent-handoffs --decisions --quality-gates

# Fix: Re-run with proper context preservation
sead coordinate --agents architect,developer --preserve-context --validate-handoffs
```

### Getting Help

**Built-in Support**:
```bash
# General help and command reference
sead --help
sead implement --help

# System health and configuration check
sead doctor --comprehensive --constitutional-audit

# Agent status and availability
sead agents status --detailed --constraints-summary
```

**Documentation & Community**:
- **📖 Complete User Guide**: Comprehensive methodology and usage patterns
- **🏛️ Constitutional Framework Guide**: Deep dive into governance and constraints
- **🤖 Agent Coordination Guide**: Multi-agent workflow patterns
- **📚 Catalog Pattern Library**: Domain-specific pattern documentation
- **💻 CLI Reference**: Complete command and option documentation

## Contributing to SEAD-METHOD™

### Pattern Contribution

**Sharing Successful Patterns**:
```bash
# Extract patterns from successful projects
sead extract patterns --project ./successful-implementation --validate-quality

# Contribute to community catalog
sead contribute patterns --to community-catalog --review-required

# Create pattern documentation
sead document patterns --extracted-patterns --usage-examples --quality-metrics
```

### Framework Enhancement

**Constitutional Rule Improvements**:
- Propose constraint enhancements based on real-world usage
- Suggest new agent specializations for emerging domains
- Contribute quality gate improvements and validation strategies

**Catalog Domain Extensions**:
- Define new domain boundaries for specialized industries
- Create domain-specific pattern libraries
- Develop cross-domain integration strategies

### Community & Ecosystem

**Knowledge Sharing**:
- Document successful SEAD implementation strategies
- Share organizational adoption patterns and lessons learned
- Contribute to SEAD methodology evolution and best practices

**Tool Integration**:
- Develop IDE extensions and integrations
- Create CI/CD pipeline integrations
- Build monitoring and analytics tools for SEAD projects

## What's Next?

SEAD-METHOD™ represents the future of AI-assisted software development through:

- **Constitutional Governance**: Preventing AI development pitfalls through built-in constraints
- **Pattern-Driven Development**: Ensuring consistency through proven, reusable solutions
- **Mode-Aware Quality**: Adapting governance to project needs and constraints
- **Complete Context Preservation**: Maintaining decision history and rationale
- **Ecosystem Integration**: Building comprehensive tooling and community patterns

### Join the SEAD Revolution

SEAD-METHOD™ is transforming how teams build software with AI assistance. The framework provides:
- **Predictable Quality**: Constitutional constraints ensure consistent outcomes
- **Scalable Processes**: Mode-aware governance adapts to project needs
- **Proven Patterns**: Catalog system provides tested, reusable solutions
- **Team Collaboration**: Multi-agent coordination with clear handoffs
- **Continuous Improvement**: Pattern evolution and quality metric feedback

**Get started today**: `npm install -g sead-method-core && sead init my-project --mode development`

## Expansion and Evolution

### Industry-Specific Extensions

SEAD's constitutional framework and catalog system support specialized domains:

**Healthcare & Life Sciences**:
- HIPAA-compliant patterns and constitutional constraints
- Medical device software patterns and validation approaches
- Clinical trial data patterns and regulatory compliance

**Financial Services**:
- SOX and PCI-DSS compliance patterns and constraints
- Trading system patterns and real-time data handling
- Risk management and audit trail patterns

**Enterprise & Government**:
- Security clearance and classification patterns
- Compliance and governance framework integration
- Large-scale system integration and data sovereignty

### Technology Evolution Support

**Emerging Technologies**:
- AI/ML integration patterns and responsible AI constraints
- Blockchain and distributed system patterns
- Edge computing and IoT deployment patterns

**Platform Evolution**:
- Cloud-native and serverless patterns
- Microservices and event-driven architecture patterns
- DevSecOps and zero-trust security patterns

### Organizational Integration

**Enterprise Adoption**:
- Custom constitutional frameworks for organizational policies
- Enterprise catalog libraries and pattern governance
- Integration with existing development and compliance tools

**Team Scaling**:
- Multi-team coordination patterns and handoff protocols
- Distributed development with consistent quality assurance
- Knowledge management and institutional pattern libraries

---

**Document Version**: 1.0  
**Last Updated**: 2025-01-12  
**SEAD-METHOD™ Version**: 1.0  
**Status**: Production Ready

**Experience the future of AI-assisted development**: SEAD-METHOD™ provides constitutional governance, catalog patterns, and specialized agents working together to deliver consistent, high-quality software development at any scale.