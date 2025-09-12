<!-- Powered by SEAD-METHOD™ Core -->

# SEAD Anti-Pattern Catalog and Detection Framework

This document provides a comprehensive catalog of problematic patterns to exclude from SEAD catalog extraction, including detection strategies, warning signs, and alternative recommendations for maintaining catalog quality and preventing architectural degradation.

## Anti-Pattern Classification Framework

### Severity Classification System

#### **Critical Anti-Patterns (Immediate Exclusion)**
**Impact**: Severe security, performance, or maintainability issues
**Action**: Automatic exclusion from catalog consideration
**Examples**: Security vulnerabilities, data corruption risks, critical performance bottlenecks

#### **High-Priority Anti-Patterns (Strong Rejection)**
**Impact**: Significant architectural problems or maintenance burden
**Action**: Rejection with detailed explanation and alternative recommendations
**Examples**: Tight coupling, violation of SOLID principles, poor error handling

#### **Medium-Priority Anti-Patterns (Conditional Rejection)**
**Impact**: Moderate quality issues that may be acceptable in specific contexts
**Action**: Context-dependent evaluation with quality improvement recommendations
**Examples**: Code duplication, inconsistent naming, missing documentation

#### **Low-Priority Anti-Patterns (Warning Only)**
**Impact**: Minor quality issues that don't prevent catalog inclusion
**Action**: Include with quality improvement suggestions and monitoring
**Examples**: Minor style inconsistencies, optimization opportunities

## Domain-Specific Anti-Pattern Catalogs

### API Contract Anti-Patterns

#### **Critical API Anti-Patterns**

**Inconsistent Error Handling**:
- **Description**: Different error response formats across endpoints
- **Detection Signs**: 
  - Multiple error response schemas in same API
  - Inconsistent HTTP status code usage
  - Missing error details or error codes
- **Impact**: Client integration complexity, poor developer experience
- **Alternatives**: Standardized error response schema, consistent status codes, RFC 7807 Problem Details

**Chatty API Design**:
- **Description**: Requires multiple API calls to complete single user operation
- **Detection Signs**: 
  - N+1 query patterns in client code
  - Sequential dependent API calls
  - High network round-trip requirements
- **Impact**: Poor performance, network overhead, user experience degradation
- **Alternatives**: GraphQL, composite endpoints, batch operations

**Breaking Changes Without Versioning**:
- **Description**: API modifications that break existing clients
- **Detection Signs**: 
  - Required field additions without defaults
  - Endpoint URL changes
  - Response schema modifications
- **Impact**: Client application failures, integration disruption
- **Alternatives**: Semantic versioning, backward-compatible evolution, deprecation strategies

#### **High-Priority API Anti-Patterns**

**God Object APIs**:
- **Description**: Single endpoint handling too many responsibilities
- **Detection Signs**: 
  - Large parameter lists (>10 parameters)
  - Mixed concerns in single endpoint
  - Complex conditional logic based on parameters
- **Impact**: Poor maintainability, testing complexity, unclear responsibility boundaries
- **Alternatives**: Resource-based design, domain-driven endpoints, microservices architecture

**Tunnel Anti-Pattern**:
- **Description**: Single generic endpoint handling all operations via parameters
- **Detection Signs**: 
  - Single endpoint with "action" or "operation" parameters
  - Complex parameter parsing logic
  - Poor discoverability and documentation
- **Impact**: Poor REST compliance, difficult caching, complex client implementation
- **Alternatives**: Resource-based endpoints, proper HTTP verb usage, RESTful design

### UI Component Anti-Patterns

#### **Critical UI Anti-Patterns**

**God Component**:
- **Description**: Single component handling multiple unrelated responsibilities
- **Detection Signs**: 
  - Component files >500 lines
  - Multiple unrelated props and state variables
  - Complex conditional rendering logic
- **Impact**: Poor maintainability, testing complexity, reusability limitations
- **Alternatives**: Component composition, single responsibility principle, container/presentational patterns

**Accessibility Violations**:
- **Description**: Components that fail basic accessibility requirements
- **Detection Signs**: 
  - Missing ARIA labels and roles
  - Poor keyboard navigation support
  - Insufficient color contrast
- **Impact**: Legal compliance issues, user exclusion, poor user experience
- **Alternatives**: ARIA implementation, semantic HTML, accessibility testing

**Memory Leaks**:
- **Description**: Components that don't properly clean up resources
- **Detection Signs**: 
  - Event listeners not removed on unmount
  - Timers and intervals not cleared
  - Subscription management missing
- **Impact**: Performance degradation, browser crashes, poor user experience
- **Alternatives**: Cleanup in useEffect, proper subscription management, memory profiling

#### **High-Priority UI Anti-Patterns**

**Prop Drilling**:
- **Description**: Passing props through multiple component layers unnecessarily
- **Detection Signs**: 
  - Props passed through 3+ component levels
  - Components that don't use props they receive
  - Complex prop interface management
- **Impact**: Maintenance complexity, coupling issues, refactoring difficulties
- **Alternatives**: Context API, state management libraries, component composition

**Inline Styling Anti-Pattern**:
- **Description**: Mixing styling logic with component logic
- **Detection Signs**: 
  - Large style objects in components
  - Complex conditional styling logic
  - Duplicate styling code across components
- **Impact**: Poor maintainability, inconsistent design, performance issues
- **Alternatives**: CSS-in-JS libraries, design systems, style component libraries

### State Management Anti-Patterns

#### **Critical State Management Anti-Patterns**

**Mutating State Directly**:
- **Description**: Modifying state objects directly without proper immutability
- **Detection Signs**: 
  - Direct array/object mutations
  - Missing state copying in reducers
  - Unpredictable component re-renders
- **Impact**: React optimization failures, debugging difficulties, unpredictable behavior
- **Alternatives**: Immutable updates, Immer library, proper reducer patterns

**Shared Mutable State**:
- **Description**: Multiple components directly modifying same state without coordination
- **Detection Signs**: 
  - Global variables modified by multiple components
  - Race conditions in state updates
  - Inconsistent state across components
- **Impact**: Data corruption, synchronization issues, difficult debugging
- **Alternatives**: State management libraries, unidirectional data flow, event-driven architecture

#### **High-Priority State Management Anti-Patterns**

**Overly Complex State Structures**:
- **Description**: Deeply nested or overly complex state objects
- **Detection Signs**: 
  - State objects nested 4+ levels deep
  - Complex state update logic
  - Difficult state debugging and inspection
- **Impact**: Maintenance complexity, performance issues, debugging difficulties
- **Alternatives**: Normalized state structures, state composition, domain-driven state design

**Scattered State Management**:
- **Description**: State scattered across many components without clear organization
- **Detection Signs**: 
  - State duplication across components
  - Props drilling for shared state
  - Inconsistent state update patterns
- **Impact**: Synchronization issues, maintenance complexity, testing difficulties
- **Alternatives**: Centralized state management, clear state boundaries, state lifting strategies

### Data Modeling Anti-Patterns

#### **Critical Data Modeling Anti-Patterns**

**Missing Data Validation**:
- **Description**: Data persistence without proper validation and constraints
- **Detection Signs**: 
  - No input validation before database operations
  - Missing foreign key constraints
  - Null values in required fields
- **Impact**: Data corruption, security vulnerabilities, application crashes
- **Alternatives**: Schema validation, database constraints, input sanitization

**SQL Injection Vulnerabilities**:
- **Description**: Direct SQL construction without parameterization
- **Detection Signs**: 
  - String concatenation for SQL queries
  - User input directly in SQL statements
  - Missing parameterized query usage
- **Impact**: Security breaches, data theft, database corruption
- **Alternatives**: Parameterized queries, ORM usage, stored procedures

#### **High-Priority Data Modeling Anti-Patterns**

**God Table Anti-Pattern**:
- **Description**: Single table storing multiple unrelated entity types
- **Detection Signs**: 
  - Tables with >20 columns
  - Many nullable columns
  - Mixed entity data in same table
- **Impact**: Poor performance, maintenance complexity, data integrity issues
- **Alternatives**: Table normalization, domain-driven design, proper entity modeling

**Missing Indexing Strategy**:
- **Description**: Database tables without appropriate indexes for query patterns
- **Detection Signs**: 
  - Slow query performance
  - Full table scans in execution plans
  - Missing indexes on foreign keys and search columns
- **Impact**: Poor query performance, scalability issues, resource waste
- **Alternatives**: Query pattern analysis, strategic index creation, database monitoring

### Testing Anti-Patterns

#### **Critical Testing Anti-Patterns**

**No Testing Coverage**:
- **Description**: Patterns without any automated testing
- **Detection Signs**: 
  - Zero test files for pattern implementation
  - No testing documentation or examples
  - Manual testing only for complex logic
- **Impact**: High bug risk, difficult refactoring, regression potential
- **Alternatives**: Unit testing, integration testing, test-driven development

**Brittle Test Design**:
- **Description**: Tests that fail due to implementation details rather than behavior
- **Detection Signs**: 
  - Tests coupled to internal implementation
  - Frequent test failures on refactoring
  - Testing framework-specific mocking overuse
- **Impact**: High maintenance cost, reduced refactoring confidence, false positives
- **Alternatives**: Behavior-driven testing, interface testing, robust test design

#### **High-Priority Testing Anti-Patterns**

**Slow Test Execution**:
- **Description**: Tests that take excessive time to run
- **Detection Signs**: 
  - Unit tests taking >1s each
  - Test suite execution >5 minutes
  - Heavy database/network dependencies in unit tests
- **Impact**: Reduced development velocity, CI/CD bottlenecks, developer frustration
- **Alternatives**: Test doubles, in-memory databases, parallel test execution

**Inadequate Test Coverage**:
- **Description**: Testing that misses critical functionality or edge cases
- **Detection Signs**: 
  - Low code coverage (<60%)
  - Missing edge case testing
  - No negative path testing
- **Impact**: Undetected bugs, production issues, poor reliability
- **Alternatives**: Coverage analysis, edge case identification, comprehensive test planning

### Authentication & Authorization Anti-Patterns

#### **Critical Security Anti-Patterns**

**Hard-Coded Credentials**:
- **Description**: Authentication credentials embedded directly in code
- **Detection Signs**: 
  - API keys, passwords in source code
  - Connection strings with credentials
  - Secret values in configuration files
- **Impact**: Security breaches, credential exposure, compliance violations
- **Alternatives**: Environment variables, secret management systems, configuration injection

**Insufficient Password Security**:
- **Description**: Weak password handling and storage practices
- **Detection Signs**: 
  - Plain text password storage
  - Weak hashing algorithms (MD5, SHA1)
  - No password complexity requirements
- **Impact**: Account compromise, data breaches, authentication bypass
- **Alternatives**: bcrypt/scrypt hashing, password complexity validation, multi-factor authentication

#### **High-Priority Security Anti-Patterns**

**Session Management Issues**:
- **Description**: Improper session handling and lifecycle management
- **Detection Signs**: 
  - No session expiration
  - Session tokens in URLs
  - Missing session invalidation on logout
- **Impact**: Session hijacking, unauthorized access, security vulnerabilities
- **Alternatives**: Secure session configuration, proper token management, session lifecycle controls

**Missing Authorization Checks**:
- **Description**: Insufficient authorization validation for protected resources
- **Detection Signs**: 
  - Direct object references without access control
  - Missing role-based access controls
  - Authorization logic in frontend only
- **Impact**: Unauthorized data access, privilege escalation, compliance violations
- **Alternatives**: Role-based access control, attribute-based access control, authorization middleware

### Integration Anti-Patterns

#### **Critical Integration Anti-Patterns**

**Missing Error Handling**:
- **Description**: External service integration without proper error handling
- **Detection Signs**: 
  - No timeout configuration
  - Missing circuit breaker patterns
  - Unhandled external service failures
- **Impact**: Application crashes, cascading failures, poor user experience
- **Alternatives**: Circuit breaker pattern, retry mechanisms, graceful degradation

**Synchronous External Dependencies**:
- **Description**: Blocking operations for external service calls
- **Detection Signs**: 
  - Synchronous HTTP calls in critical paths
  - No async/await pattern usage
  - User interface blocking on external calls
- **Impact**: Poor performance, user experience degradation, scalability issues
- **Alternatives**: Asynchronous patterns, event-driven architecture, non-blocking I/O

#### **High-Priority Integration Anti-Patterns**

**Tight Coupling with External Services**:
- **Description**: Direct dependency on external service implementation details
- **Detection Signs**: 
  - Service-specific data structures throughout application
  - No abstraction layer for external services
  - Difficult service provider switching
- **Impact**: Vendor lock-in, difficult maintenance, poor flexibility
- **Alternatives**: Adapter pattern, service abstraction layers, dependency injection

### Deployment & Infrastructure Anti-Patterns

#### **Critical Deployment Anti-Patterns**

**Manual Deployment Processes**:
- **Description**: Manual steps required for application deployment
- **Detection Signs**: 
  - Manual file copying and configuration
  - Human intervention in deployment process
  - No automated rollback capability
- **Impact**: Deployment errors, inconsistent environments, rollback difficulties
- **Alternatives**: CI/CD pipelines, infrastructure as code, automated deployment

**Configuration Management Issues**:
- **Description**: Poor configuration and environment management
- **Detection Signs**: 
  - Hard-coded environment-specific values
  - Missing configuration validation
  - No configuration change tracking
- **Impact**: Environment inconsistencies, deployment failures, security issues
- **Alternatives**: Configuration management tools, environment-specific configs, validation frameworks

#### **High-Priority Deployment Anti-Patterns**

**Missing Monitoring and Observability**:
- **Description**: Deployed applications without proper monitoring and logging
- **Detection Signs**: 
  - No application performance monitoring
  - Insufficient logging for debugging
  - Missing health check endpoints
- **Impact**: Difficult troubleshooting, poor incident response, operational blindness
- **Alternatives**: Monitoring solutions, structured logging, health check patterns

## Anti-Pattern Detection Strategies

### Automated Detection Approaches

#### **Static Code Analysis**
- Security vulnerability scanning (SAST tools)
- Code quality metrics analysis (SonarQube, CodeClimate)
- Architecture compliance checking (ArchUnit)
- Documentation completeness validation

#### **Dynamic Analysis**
- Performance profiling and bottleneck detection
- Memory leak detection and resource monitoring
- Security penetration testing (DAST tools)
- Load testing and scalability assessment

#### **Pattern-Specific Detection Rules**
- Custom linting rules for anti-pattern identification
- Architecture decision record (ADR) validation
- Code review checklist automation
- Continuous integration quality gates

### Manual Detection Approaches

#### **Code Review Guidelines**
- Anti-pattern identification in pull request reviews
- Architecture review sessions for complex patterns
- Domain expert validation for specialized patterns
- Security review processes for authentication/authorization patterns

#### **Quality Assessment Processes**
- Pattern classification validation against anti-pattern catalog
- Stakeholder review for organizational fit assessment
- Performance benchmarking against quality thresholds
- Documentation quality evaluation

## Exclusion Criteria and Decision Framework

### Automatic Exclusion Criteria
1. **Critical security vulnerabilities** (CVSS score ≥7.0)
2. **Severe performance issues** (>10x degradation from baseline)
3. **Data corruption risks** (potential for data loss or integrity issues)
4. **Legal/compliance violations** (GDPR, accessibility, industry regulations)
5. **Complete lack of documentation** (no usage instructions or examples)

### Conditional Exclusion Criteria
1. **High maintenance burden** (complex patterns requiring extensive support)
2. **Limited reusability** (patterns applicable to <3 contexts)
3. **Technology obsolescence** (patterns using deprecated technologies)
4. **Architectural inconsistency** (patterns conflicting with established architecture)
5. **Quality threshold failures** (patterns not meeting tier-specific requirements)

### Remediation Opportunity Assessment
- **Fixable Issues**: Patterns with correctable quality problems
- **Enhancement Potential**: Patterns that could improve with additional work
- **Alternative Recommendations**: Better patterns that solve same problems
- **Evolution Path**: Roadmap for pattern improvement and re-evaluation

## Integration with Pattern Extraction Workflow

### Quality Gate Integration
- Anti-pattern detection integrated into pattern identification phase
- Exclusion criteria validation before pattern documentation
- Quality assessment includes anti-pattern screening
- Catalog integration blocked for patterns with critical anti-pattern indicators

### SEAD Mode Considerations
- **Prototype Mode**: Relaxed anti-pattern constraints for experimentation
- **Development Mode**: Standard anti-pattern exclusion with improvement guidance
- **Build-to-Deploy Mode**: Strict anti-pattern exclusion with zero tolerance for critical issues

### Constitutional Compliance Integration
- Anti-pattern catalog supports SEAD governance framework requirements
- Mode-aware exclusion criteria align with constitutional constraints
- Context preservation includes anti-pattern assessment rationale
- Quality gates enforce governance decisions for organizational standards