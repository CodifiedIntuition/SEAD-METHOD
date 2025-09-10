# SEAD Artifact Map

Purpose: one-page reference mapping Spec‑Kit workflow commands and BMAD‑derived tasks to their intended outputs, canonical locations, and known overlaps. Use this to keep artifacts consistent and avoid duplication.

## Conventions
- Output roots: `sead-workspace/` (workflow artifacts), `docs/` (narrative/reference), `sead-catalog/` (patterns), `docs/qa/` (quality reports).
- Standard front‑matter keys: `id`, `related`, `mode`, `catalog_patterns`, `quality_gates`, `decision_refs`.
- Filename style: kebab case with timestamp suffix where applicable.

## Workflow Commands (Spec‑Kit Layer)

- `sead specify <description>`
  - Output: `sead-workspace/specifications/frontend-spec-YYYY-MM-DDTHH-MM-SS.md` (type may vary via options)
  - Includes: goals, scope, acceptance criteria, catalog references, mode constraints
  - Inputs: project mode, existing catalog, optional interactive context
  - Consumers: `sead plan`, `sead task create-implementation-plan`, PO/SM during early story shaping
  - Overlaps: see `sead task create-simple-spec`, `sead task generate-project-brief`, `sead task document-project`

- `sead plan <tech-stack>`
  - Output: `sead-workspace/planning/<stack>-plan-YYYY-MM-DDTHH-MM-SS.md`
  - Includes: architecture, data/deploy tiers, catalog integration, risks/assumptions
  - Inputs: specification, catalog, mode
  - Consumers: Developer (implementation context), QA (read for gates), `sead task generate-task-breakdown`, `sead task approve-solution`
  - Overlaps: see `sead task approve-solution`, `sead task risk-profile`, brainstorming tasks

- `sead stories`
  - Output: `sead-workspace/stories/*.md`
  - Includes: user/technical stories, catalog compliance, mode gates, context links
  - Inputs: PRD, architecture, catalog (and project mode)
  - Consumers: `sead implement`, `sead task qa-gate`, `sead task risk-profile`, `sead task review-story`
  - Overlaps: see `sead task create-next-story`, brownfield story/epic tasks

- `sead implement <story-id>`
  - Output: `sead-workspace/implementations/impl-<story-id>-YYYY-MM-DDTHH-MM-SS.md` (plus code changes)
  - Includes: implementation notes, catalog patterns used, compliance results
  - Inputs: story, architecture, catalog, mode
  - Consumers: `sead task qa-gate`, `sead task verify-build`, `sead status`, `sead validate`
  - Overlaps: adjacencies with QA tasks (`qa-gate`, `apply-qa-fixes`, `verify-build`)

## Task System (BMAD‑Derived Layer)

Quality Assurance
- `sead task qa-gate`
  - Output: `docs/qa/qa-gate-YYYY-MM-DD.md`
  - Purpose: validate constitutional compliance, catalog usage, testing status
  - Consumers: `sead validate --quality-gates`, release/deploy reviews, story rework tasks
- `sead task apply-qa-fixes`
  - Output: updates to code + QA notes (append to related story/impl or separate addendum)
  - Consumers: Developer follow-up, subsequent `qa-gate` runs
- `sead task review-story`
  - Output: review report appended to story or `docs/qa/story-reviews/<story-id>.md`
  - Consumers: Product Owner/Scrum Master for story refinement; Developer before implementation
- `sead task verify-build`
  - Output: `docs/qa/build-verification-YYYY-MM-DD.md`
  - Consumers: Release readiness checks, `sead validate`, deployment workflows

Analysis & Documentation
- `sead task advanced-elicitation`, `sead task facilitate-brainstorming-session`
  - Output: `docs/brainstorming/session-*.md`
  - Consumers: Product Owner (PRD), Architect (spec/plan), Analyst (document-project)
- `sead task create-deep-research-prompt`
  - Output: `docs/research/prompts-YYYY-MM-DD.md` (recommended)
  - Consumers: Analyst/Architect research phases, plan/spec refinement
- `sead task risk-profile`
  - Output: `docs/risk/risk-profile-YYYY-MM-DD.md` or embedded in plan
  - Consumers: QA gate (paste YAML into gate), Architect for plan updates, leadership for risk tracking
- `sead task document-project`
  - Output: `docs/project-documentation/*.md` (scope dependent)
  - Consumers: Team onboarding, stakeholders, audit/review
- `sead task generate-project-brief`
  - Output: `docs/sead-project-brief.md`
  - Consumers: Product Owner (PRD), Architect (architecture), Catalog Architect (greenfield bootstrap)
- `sead task index-docs`
  - Output: `docs/INDEX.md` (tree/flat/categorized)
  - Consumers: All contributors (navigation), doc tooling
- `sead task document-issue`
  - Output: `docs/issues/issue-YYYYMMDD-<slug>.md`
  - Consumers: Triage, `correct-course`, QA verification

Story & Specification
- `sead task create-next-story`
  - Output: `sead-workspace/stories/*.md` (same artifact as `sead stories`)
  - Consumers: `sead implement`, `qa-gate`, `review-story`, `risk-profile`
- `sead task create-simple-spec`
  - Output: `sead-workspace/specifications/spec-*.md` (lightweight spec)
  - Consumers: `sead plan`, task planning
- `sead task correct-course`
  - Output: `docs/decision-records/course-corrections/cc-YYYYMMDD-<slug>.md`
  - Consumers: Architect/PO/SM to realign stories and plans
- `sead task approve-solution`
  - Output: `docs/decision-records/adr-YYYYMMDD-<slug>.md` (decision/approval)
  - Consumers: Developer (implementation guidance), QA (review criteria), governance/history
- `sead task generate-ai-frontend-prompt`
  - Output: `docs/prompts/frontend/ai-prompt-YYYYMMDD-<slug>.md`
  - Consumers: Developer/UX for component work, Architect for consistency

Brownfield & Catalog
- `sead task brownfield-catalog-generation`
  - Output: populated `sead-catalog/` domains and `docs/pattern-extraction-report.md`
  - Consumers: Catalog Architect (integration), Architect (brownfield architecture), story creation for modernization
- `sead task brownfield-create-epic`
  - Output: `sead-workspace/stories/epics/epic-*.md`
  - Consumers: Story creation and implementation planning
- `sead task brownfield-create-story`
  - Output: `sead-workspace/stories/*.md` referencing extracted patterns
  - Consumers: `sead implement`, QA tasks

Catalog Commands (Support)
- `sead catalog init`
  - Output: seeded `sead-catalog/` structure (greenfield)
  - Consumers: All technical agents; story/plan/spec creation reference catalog patterns
- `sead catalog validate`
  - Output: validation report (text/json/html) per options
  - Consumers: Governance reviews, CI checks, `sead validate`
- `sead catalog generate --source <path>`
  - Output: populated `sead-catalog/` from existing codebase
  - Consumers: Brownfield stories/architecture; pattern evolution

External Asset Integration (Support)
- Intended outputs per flow: transformed assets under `sead-catalog/` (design-system, api-contracts, etc.), plus:
  - `docs/external-asset-analysis.md`
    - Consumers: `docs/integration-architecture.md` creation; Catalog Architect planning
  - `docs/integration-architecture.md`
    - Consumers: `*catalog-merge-external`, integration execution
  - `docs/external-asset-validation-report.md`
    - Consumers: Governance/QA sign-off before adoption
  - `docs/external-asset-adoption-strategy.md`
    - Consumers: Team onboarding, migration workstreams

## Known Overlaps and Canonicalization

Direct Artifact Overlaps
- Spec creation: `sead specify` vs `sead task create-simple-spec`
  - Canonical: prefer `sead specify`; treat simple spec as `--template simple` variant.
- Story generation: `sead stories` vs `sead task create-next-story`
  - Canonical: prefer `sead stories`; ensure both use the same story template and directory.
- Planning sections: `sead plan` vs `sead task approve-solution` and `sead task risk-profile`
  - Canonical: plan holds decisions/risks; tasks produce focused docs linked from the plan.
- Implementation adjacency: `sead implement` vs QA tasks
  - Canonical: QA outputs live in `docs/qa/` and link to the implementation record and story.

Recommended Canonical Paths
- Specifications: `sead-workspace/specifications/`
- Plans: `sead-workspace/planning/`
- Stories and Epics: `sead-workspace/stories/` (with `stories/epics/` for epics)
- Implementations: `sead-workspace/implementations/`
- QA Reports: `docs/qa/`
- Decision Records: `docs/decision-records/`
- Brainstorming/Research: `docs/brainstorming/`, `docs/research/`
- Catalog: `sead-catalog/`

## Relationships and Traceability

Linkage Fields (front‑matter suggested)
- `id`: unique identifier (e.g., story id)
- `related`: `{ spec: <id>, plan: <id>, story: <id>, impl: <id>, qa: [ids] }`
- `catalog_patterns`: list of pattern ids/paths used
- `mode`: prototype|development|build-to-deploy
- `quality_gates`: list of gates passed/failed
- `decision_refs`: ADRs or approvals relevant to the artifact

Optional Project Manifest (recommended)
- Path: `project-docs/artifact-manifest.yaml`
- Purpose: single source of truth linking spec → plan → stories → impl → QA, including catalog patterns used.
- Benefit: eliminates ambiguity when both workflow commands and tasks are used.

## Usage Guidance
- Prefer workflow commands (`specify`, `plan`, `stories`, `implement`) for the core lifecycle.
- Use tasks to produce focused, supplemental artifacts (QA reports, ADRs, research, brownfield extraction).
- When tasks generate overlapping artifacts, follow the canonicalization rules above and use linkage fields to maintain traceability.
