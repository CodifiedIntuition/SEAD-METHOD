### Summary of SEAD Method

The SEAD (Specification Enforced Agentic Development) Method is a comprehensive framework for AI-driven software development. It uses a team of specialized AI agents, each with a distinct role (e.g., Analyst, Architect, Developer, QA), to manage the entire development lifecycle.

The core of SEAD is its **Constitutional Framework** and **Catalog System**.

*   **Constitutional Framework**: This is a governance system that prevents "agent drift" by enforcing rules and constraints on each AI agent. It's a tiered system, with stricter constraints for agents performing high-risk technical tasks (like development and architecture) and more flexible guidance for planning and analysis agents. This framework is also adaptive, applying different levels of rigor based on the project's current **Development Mode** (Prototype, Development, or Build-to-Deploy).

*   **Catalog System**: This is a central repository of reusable patterns, components, and standards organized into 11 domains (e.g., `api-contracts`, `shared-types`, `design-system`, `test-patterns`). The catalog ensures consistency, promotes reuse, and preserves architectural decisions. All agents are "catalog-aware" and must reference or contribute to the catalog.

*   **Agents & Workflows**: The system includes 12 specialized agents that collaborate through structured workflows. There are agents for planning (Analyst, Project Manager), architecture (Architect, UX Expert), development (Developer), and quality assurance (QA). Meta-agents (`sead-master`, `sead-orchestrator`) coordinate complex, multi-agent tasks. Handoffs between agents are designed to preserve context, ensuring smooth transitions.

*   **Development Modes**:
    *   **Prototype**: For rapid experimentation with minimal constraints.
    - **Development**: For building production-ready features, where catalog patterns are preferred but extensions are allowed.
    *   **Build-to-Deploy**: For final production work, requiring strict adherence to the catalog and all constraints.

*   **Greenfield vs. Brownfield**: The SEAD method has distinct workflows for starting new projects (Greenfield) and integrating with or enhancing existing ones (Brownfield). The Brownfield process includes tools for analyzing an existing codebase to generate an initial catalog.

In essence, SEAD provides a structured, scalable, and governable methodology for using AI agents in software development. It balances the speed and power of AI with the consistency and quality required for enterprise-grade applications by using its core principles of constitutional compliance and catalog-driven design.