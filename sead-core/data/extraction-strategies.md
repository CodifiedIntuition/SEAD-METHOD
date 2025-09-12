<!-- Powered by SEAD-METHOD™ Core -->

# SEAD Pattern Extraction Strategies

This document defines comprehensive strategies and methodologies for extracting reusable patterns from various sources including brownfield codebases, greenfield development, and external systems. Each strategy is optimized for different scenarios, scales, and constitutional compliance requirements.

## Core Extraction Methodologies

### Systematic Extraction Strategy
**Purpose**: Comprehensive, methodical analysis of entire codebases or systems

**When to Use**:
- Large, mature codebases with established patterns
- Complete system modernization initiatives
- Comprehensive catalog generation projects
- High-value system analysis requiring thorough coverage

**Approach**:
1. **Architectural Layer Analysis**: Systematic examination of presentation, business, and data layers
2. **Domain-by-Domain Extraction**: Sequential analysis of each catalog domain
3. **Cross-Domain Integration Mapping**: Identification of pattern relationships and dependencies
4. **Quality Gate Application**: Rigorous evaluation against pattern classification criteria
5. **Comprehensive Documentation**: Complete pattern documentation with usage examples

**Time Investment**: High (weeks to months)
**Quality Output**: Tier 1-2 patterns with comprehensive documentation
**Constitutional Mode Alignment**: Optimal for Build-to-Deploy mode

**Implementation Steps**:
```
1. Codebase Structure Analysis (1-2 weeks)
   - Repository organization mapping
   - Technology stack inventory
   - Dependency relationship analysis
   - Component boundary identification

2. Domain-Specific Pattern Mining (2-4 weeks per domain)
   - API Contracts: Service definitions and communication patterns
   - Design System: UI components and design patterns
   - Data Strategy: Database schemas and data access patterns
   - State Management: Application state and data flow patterns
   - Error Handling: Exception handling and logging approaches

3. Pattern Quality Assessment (1-2 weeks)
   - Reusability evaluation and scoring
   - Complexity analysis and classification
   - Documentation quality validation
   - Test coverage and validation assessment

4. Integration and Refinement (1-2 weeks)
   - Cross-pattern dependency mapping
   - Pattern consolidation and abstraction
   - Anti-pattern identification and exclusion
   - Final quality gate validation
```

### Targeted Extraction Strategy
**Purpose**: Focused extraction of specific patterns or domains

**When to Use**:
- Specific domain expertise development
- Rapid catalog enhancement in targeted areas
- Problem-specific pattern identification
- Resource-constrained extraction projects

**Approach**:
1. **Scope Definition**: Clear boundaries and objectives for extraction focus
2. **Pattern Identification**: Rapid identification of target patterns within scope
3. **Quality Validation**: Focused quality assessment for identified patterns
4. **Context Documentation**: Essential documentation for pattern usage
5. **Integration Planning**: Preparation for broader catalog integration

**Time Investment**: Medium (days to weeks)
**Quality Output**: Tier 2-3 patterns with focused documentation
**Constitutional Mode Alignment**: Suitable for Development mode

**Domain-Specific Targeting Approaches**:

**API Contracts Focus**:
- Service endpoint analysis and documentation
- Request/response pattern identification
- Error handling standardization extraction
- Authentication integration pattern mining

**Design System Focus**:
- Component library analysis and extraction
- Design token system identification
- Accessibility pattern documentation
- Responsive design approach capture

**Data Strategy Focus**:
- Database schema pattern extraction
- Data access layer pattern identification
- Migration strategy documentation
- Performance optimization pattern capture

### Evolutionary Extraction Strategy
**Purpose**: Continuous pattern identification and refinement during development

**When to Use**:
- Greenfield development with catalog building
- Iterative pattern improvement and evolution
- Continuous catalog enhancement
- Team learning and pattern development

**Approach**:
1. **Development Integration**: Pattern identification embedded in development workflow
2. **Continuous Evaluation**: Regular assessment of emerging patterns
3. **Incremental Refinement**: Gradual pattern improvement and documentation
4. **Community Feedback**: Team input and collaborative pattern development
5. **Progressive Maturation**: Pattern evolution through lifecycle stages

**Time Investment**: Low (continuous, integrated)
**Quality Output**: Tier 3-4 patterns evolving to higher tiers
**Constitutional Mode Alignment**: Optimal for Prototype and Development modes

**Implementation Approach**:
```
1. Development Phase Integration
   - Pattern identification checkpoints in development workflow
   - Regular pattern review sessions with development team
   - Documentation-as-you-go approach for emerging patterns
   - Continuous quality assessment and improvement

2. Pattern Maturation Process
   - Experimental → Development → Candidate → Stable progression
   - Regular quality gate assessments and improvements
   - Community feedback integration and pattern refinement
   - Performance optimization and security validation

3. Catalog Integration
   - Incremental catalog updates with mature patterns
   - Version control and pattern evolution tracking
   - Backward compatibility and migration planning
   - Usage metrics and effectiveness measurement
```

### Rapid Assessment Strategy
**Purpose**: Quick pattern identification for immediate catalog enhancement

**When to Use**:
- Time-constrained extraction projects
- Initial catalog bootstrapping
- Proof-of-concept pattern identification
- Resource-limited extraction initiatives

**Approach**:
1. **High-Level Scanning**: Quick identification of obvious patterns
2. **Priority Ranking**: Focus on highest-value, most-reusable patterns
3. **Minimal Documentation**: Essential information capture for immediate use
4. **Future Enhancement Planning**: Roadmap for comprehensive pattern development
5. **Quick Win Implementation**: Immediate catalog value with minimal investment

**Time Investment**: Low (hours to days)
**Quality Output**: Tier 3-4 patterns with basic documentation
**Constitutional Mode Alignment**: Suitable for Prototype mode

## Technology-Specific Extraction Approaches

### JavaScript/TypeScript Codebases

**React Application Extraction**:
- Component hierarchy analysis and pattern identification
- State management pattern extraction (Redux, Context, local state)
- Custom hook pattern identification and documentation
- Styling pattern analysis (CSS-in-JS, SCSS, Tailwind)
- Testing pattern extraction (Jest, React Testing Library, Cypress)

**Node.js Backend Extraction**:
- Express/Fastify route pattern identification
- Middleware pattern extraction and documentation
- Database integration pattern analysis (Prisma, TypeORM, Mongoose)
- Authentication strategy pattern capture
- Error handling and logging pattern identification

**Key Extraction Tools and Techniques**:
- AST (Abstract Syntax Tree) analysis for pattern identification
- TypeScript type analysis for interface pattern extraction
- Package.json dependency analysis for technology pattern mapping
- Test file analysis for testing pattern identification
- Configuration file analysis for deployment and setup patterns

### Python Codebases

**Django/Flask Application Extraction**:
- URL routing and view pattern identification
- Model and ORM pattern extraction
- Template and rendering pattern analysis
- Middleware and authentication pattern capture
- Testing pattern identification (pytest, unittest)

**FastAPI/Async Application Extraction**:
- Async pattern identification and documentation
- Pydantic model pattern extraction
- Dependency injection pattern analysis
- OpenAPI specification pattern capture
- Background task pattern identification

**Key Extraction Tools and Techniques**:
- Python AST analysis for pattern identification
- Requirements.txt/pyproject.toml analysis for dependency patterns
- Model introspection for data pattern extraction
- Decorator pattern analysis for cross-cutting concerns
- Configuration file analysis for deployment patterns

### Java/Kotlin Codebases

**Spring Boot Application Extraction**:
- Controller and service layer pattern identification
- Dependency injection pattern analysis
- JPA/Hibernate data access pattern extraction
- Security configuration pattern capture
- Testing pattern analysis (JUnit, Mockito, TestContainers)

**Key Extraction Tools and Techniques**:
- Java reflection for runtime pattern analysis
- Annotation-based pattern identification
- Maven/Gradle dependency analysis
- Spring configuration analysis
- Integration test pattern extraction

### Database-Specific Extraction

**Relational Database Patterns**:
- Schema design pattern identification
- Query optimization pattern extraction
- Migration strategy pattern analysis
- Indexing and performance pattern capture
- Backup and recovery pattern documentation

**NoSQL Database Patterns**:
- Document structure pattern identification
- Query pattern extraction and optimization
- Sharding and scaling pattern analysis
- Consistency model pattern documentation
- Performance optimization pattern capture

## Scale-Appropriate Extraction Strategies

### Small-Scale Extraction (< 10K LOC)
**Characteristics**:
- Single application or service focus
- Limited architectural complexity
- Clear pattern boundaries
- Manageable analysis scope

**Recommended Strategy**: Targeted Extraction
**Time Investment**: 1-2 weeks
**Focus Areas**:
- Core architectural patterns
- Essential utility and helper patterns
- Basic error handling and validation patterns
- Fundamental UI/UX patterns (if applicable)

### Medium-Scale Extraction (10K-100K LOC)
**Characteristics**:
- Multiple applications or microservices
- Moderate architectural complexity
- Cross-service pattern sharing
- Significant integration requirements

**Recommended Strategy**: Systematic Extraction with Domain Focus
**Time Investment**: 4-8 weeks
**Focus Areas**:
- Service integration and communication patterns
- Shared data and state management patterns
- Authentication and authorization patterns
- Comprehensive error handling and monitoring patterns
- Performance optimization and caching patterns

### Large-Scale Extraction (100K+ LOC)
**Characteristics**:
- Enterprise-level system complexity
- Multiple technology stacks
- Extensive integration requirements
- Significant organizational impact

**Recommended Strategy**: Phased Systematic Extraction
**Time Investment**: 3-6 months
**Phase Structure**:
1. **Foundation Phase**: Core architectural and infrastructure patterns
2. **Service Phase**: Service layer and integration patterns
3. **UI Phase**: User interface and experience patterns
4. **Optimization Phase**: Performance, security, and operational patterns

## Quality-Driven Extraction Approaches

### High-Quality Pattern Focus
**Objective**: Extract only Tier 1-2 patterns for production catalog

**Criteria**:
- Reusability score 6+/10
- Comprehensive test coverage (>80%)
- Complete documentation with examples
- Security validation and performance benchmarking
- Constitutional compliance validation

**Approach**:
- Rigorous quality gates at every extraction step
- Peer review and expert validation required
- Comprehensive testing and validation
- Complete documentation and example development
- Production readiness assessment

### Rapid Value Extraction
**Objective**: Quickly identify valuable patterns for immediate use

**Criteria**:
- Clear value proposition and problem solving
- Reasonable reusability (3+/10)
- Basic documentation and examples
- Functional implementation validation
- Constitutional framework alignment

**Approach**:
- Focus on obvious high-value patterns
- Minimal but sufficient documentation
- Basic testing and validation
- Quick integration into catalog structure
- Future enhancement roadmap development

### Learning-Focused Extraction
**Objective**: Pattern identification for knowledge building and experimentation

**Criteria**:
- Innovation potential and learning value
- Experimental or emerging technology patterns
- Research and development applications
- Future maturation potential
- Educational and training value

**Approach**:
- Broad pattern identification without strict quality gates
- Documentation of experimentation results and learnings
- Community sharing and feedback collection
- Evolution path planning and development
- Knowledge transfer and training material development

## Constitutional Compliance in Extraction Strategies

### Mode-Aware Strategy Selection

**Prototype Mode Extraction**:
- **Strategy**: Rapid Assessment or Evolutionary
- **Focus**: Speed and experimentation over comprehensive quality
- **Quality Threshold**: Tier 3-4 patterns acceptable
- **Documentation**: Minimal but sufficient for immediate use
- **Validation**: Basic functionality and constitutional alignment

**Development Mode Extraction**:
- **Strategy**: Targeted or Evolutionary
- **Focus**: Balance between quality and development velocity
- **Quality Threshold**: Tier 2-3 patterns preferred
- **Documentation**: Comprehensive usage instructions and examples
- **Validation**: Testing and peer review required

**Build-to-Deploy Mode Extraction**:
- **Strategy**: Systematic
- **Focus**: Production-ready patterns with rigorous quality standards
- **Quality Threshold**: Tier 1-2 patterns only
- **Documentation**: Complete documentation with security and performance validation
- **Validation**: Comprehensive testing, security review, and governance approval

### Context Preservation Requirements

**Extraction Decision Documentation**:
- Strategy selection rationale and constitutional compliance
- Quality threshold decisions and mode alignment
- Pattern selection criteria and exclusion rationale
- Timeline and resource allocation decisions

**Pattern Context Capture**:
- Original usage context and business requirements
- Technology constraints and architectural decisions
- Performance characteristics and scalability considerations
- Security implications and compliance requirements

**Handoff Preparation**:
- Complete extraction results with quality assessments
- Pattern documentation ready for catalog integration
- Identified gaps and future enhancement opportunities
- Validation results and governance approval status

## Success Metrics and Validation

### Extraction Effectiveness Metrics
- **Pattern Coverage**: Percentage of system functionality covered by extracted patterns
- **Quality Distribution**: Distribution of patterns across quality tiers
- **Reusability Score**: Average reusability rating of extracted patterns
- **Documentation Completeness**: Percentage of patterns with complete documentation
- **Constitutional Compliance**: Percentage of patterns meeting governance requirements

### Team Adoption Metrics
- **Usage Rate**: Frequency of extracted pattern usage in new development
- **Developer Satisfaction**: Team feedback on pattern quality and usability
- **Implementation Time**: Time saved using extracted patterns vs custom implementation
- **Error Reduction**: Reduction in bugs and issues using established patterns
- **Knowledge Transfer**: Effectiveness of pattern documentation for new team members

### Catalog Integration Success
- **Integration Speed**: Time from extraction to catalog availability
- **Pattern Evolution**: Rate of pattern improvement and maturation
- **Cross-Domain Integration**: Effectiveness of pattern relationships and dependencies
- **Governance Compliance**: Adherence to constitutional framework requirements
- **Long-term Sustainability**: Pattern maintenance and evolution capabilities