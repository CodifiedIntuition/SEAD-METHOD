# SEAD Method — Development Repo Read‑Through Summary

This is the framework’s development workspace, not an installed instance in a product repo. The goal is to ship the method (agents, tasks, templates, CLI, docs) as an installable system. Any “missing project files” called out below are expected in consumer projects, not here.

**Scope Reviewed**
- Source docs: `docs/` (CLI, coordination, constitutional, testing, user guide)
- Core method assets: `sead-core/` (agents, tasks, templates, workflows, constitutional rules, core config reference)
- Installer/runtime: `cli.js`, `.sead-core/` (installer bundle), `sead-catalog-template/`
- Internal planning: `project-docs/`

**Dev Repo Reality vs Installed Instance**
- Dev repo intentionally does NOT include consumer‑project artifacts (e.g., `sead.config.yaml`, `sead-catalog/`).
- Installed projects WILL include `sead.config.yaml`, project‑specific `sead-catalog/`, and any team tooling configs (e.g., linting, tsconfig).
- Use `test-projects/` and `sead-catalog-template/` to simulate consumer environments during development and testing.

**Top‑Level Structure (Dev Source)**
- `sead-core/` → Authoritative source for agents, tasks, templates, workflows, and constitutional rules.
- `.sead-core/` → Installer payload used by IDE/CLI installation; should be generated/synced from `sead-core/` (avoid manual drift).
- `cli.js` → Implements CLI commands documented in `docs/CLI-REFERENCE.md` (init, specify, plan, stories, implement, tasks, build, flatten).
- `sead-catalog-template/` → Template catalog structure used to seed consumer projects.
- `sead-workspace/` → Staging for CLI outputs during framework development and exploratory runs.

**High‑Level Architecture (Framework)**
- Modes: Prototype, Development, Build‑to‑Deploy with progressively strict constraints and quality gates (`sead-core/core-config.yaml`).
- Catalog‑First: 11 domains required (api, shared types, design system, state mgmt, error handling, validation, test patterns, auth, integration, data strategy, deployment).
- Constraint Enforcement: Mode‑aware validations across code style, design system, API contracts, validation schemas, code quality; each with mandatory reads and forbidden actions.
- Discovery: Agents and tasks resolve stories/specs/impl/tasks/QA gates via ordered discovery paths; consumer `sead.config.yaml` overrides defaults.

**Agents (Source Definitions)**
- 12 agents defined in `sead-core/agents/*.md` with embedded YAML persona, activation rules, and commands. Activation emphasizes: read `core-config.yaml` (+ agent constraints), greet, `*help`, then await.
- Dependencies map into `sead-core/tasks/*` and `sead-core/templates/*`, treating tasks as executable workflows (not reference prose).
- Example (QA): `sead-core/agents/sead-qa.md` drives `sead-qa-gate`, `sead-review-story`, etc., and expects `qa.qaLocation` from a consumer’s `sead.config.yaml` when installed.

**Tasks, Templates, Workflows**
- Tasks: Broad coverage for analysis, planning, pattern extraction, catalog integration, QA, and implementation. Intent: deterministic, step‑by‑step execution with mode/catalo g validation.
- Templates: Rich YAML templates for artifacts (architecture, PRDs, stories, QA gate, compliance reports, etc.).
- Workflows: Greenfield/Brownfield orchestrations expressed as YAML to coordinate multi‑agent flows.

**Constitutional & Constraints Layer**
- Agent‑specific constraint packs under `sead-core/constitutional-rules/` define mandatory reads, validation gates, escalation procedures, and blocking behaviors (e.g., `sead-qa-constraints.yaml`).
- `sead-core/core-config.yaml` serves as reference defaults for mode behavior, catalog requirements, and discovery. Consumer repos will override via `sead.config.yaml`.

**Quality Gates (QA) Model**
- Gate schema: PASS/CONCERNS/FAIL/WAIVED plus SEAD‑specific CATALOG_VIOLATION for strict mode breaches.
- Dual‑phase: Spec‑Kit business quality + SEAD constitutional/catalog compliance; both must pass for PASS.
- Outputs (when installed): Gate YAML at `qa.qaLocation/gates/` and “SEAD Gate Status” appended to the story’s QA Results section.

**What’s “Missing” Here By Design**
- `sead.config.yaml`: Consumer project responsibility. In dev, rely on reference defaults in `sead-core/core-config.yaml` or use `test-projects/` configs when validating flows.
- `sead-catalog/`: Consumer project’s catalog. In dev, use `sead-catalog-template/` to seed test projects for validation.
- Project tool configs (e.g., prettier/tsconfig/jest): Expected in consumer repos; core should guard checks when absent.

**Dev‑Focused Cleanup Items (Pre‑Production)**
- Single Source of Truth: Ensure `.sead-core/` is generated from `sead-core/` via a repeatable step (build or install), minimizing manual edits to `.sead-core/`.
- Clear Dev vs Consumer Boundaries: Add short “Dev Note” blocks in agent/task docs indicating which paths/values come from consumer `sead.config.yaml` at runtime.
- Test Harness: Provide a minimal scripted flow under `test-projects/` to exercise `stories → implement → review-story → qa-gate` using the template catalog.
- Guarded References: Where tasks reference consumer configs or catalog files, document fallbacks for dev (or add conditional checks where implemented in `cli.js`).
- Packaging & Release: Verify `sead build` bundles agents, teams, and expansions reliably; define release checklist (version bump, build, smoke test against `test-projects/`).
- Contribution Guide: Clarify that `sead-core/` is authoritative, `.sead-core/` is an install payload; describe how to test changes locally using `test-projects/`.

**Readiness Snapshot (Framework Effectiveness Once Installed)**
- Developer: High potential; strict anti‑drift if catalog present. Depends on consumer catalog.
- QA: High potential; dual‑phase gates are strong; depends on `qa.qaLocation` and catalog at install site.
- Architect & Catalog Architect: Strong scaffolding; gains increase with seeded catalogs or brownfield inputs.
- Orchestrator/Master and Coordination Agents: Well‑documented; real value surfaces when exercised against consumer project structures.

**Next Steps For Us (Framework Team)**
- Ship a runnable dev scenario: a `test-projects/<sample>` with seeded `sead-catalog/` from the template and a `sead.config.yaml`, plus a short run script to validate core flows and discovery ordering.
- Add short disclaimers to agent/task files that reference consumer config, reducing confusion when browsing the source outside an installed project.
- Confirm `.sead-core/` generation path and document it in a developer “build & sync” note.
- Optional: Add a “Dev Runbook” under `project-docs/clean-up/` describing how to locally validate each major agent with the test project.

**Key References (Source Entry Points)**
- Core config reference: `sead-core/core-config.yaml`
- Agent coordination: `docs/AGENT-COORDINATION-GUIDE.md`
- CLI reference: `docs/CLI-REFERENCE.md`
- QA gate task: `sead-core/tasks/sead-qa-gate.md`
- QA constraints: `sead-core/constitutional-rules/sead-qa-constraints.yaml`
- Workspace discovery: `sead-core/workspace-integration-guide.md`

— Updated 2025‑09‑16 (dev‑repo perspective)
