# Alternative Plan A — Contract‑Driven Document Flow (Manifest + Router)

Purpose: Make document flow deterministic and tool‑enforced by introducing a document contract (front matter), a generated manifest, and a document router. Agents read from the manifest, write via the router, and the CLI maintains discoverability and version pinning automatically.

How this differs from the primary plan
- Primary plan consolidates and renames content, improving structure and naming.
- This plan focuses on execution mechanics: explicit contracts, a single source of truth (`sead.manifest.json`), and a router that guarantees documents land in the right place every time.

Core concepts
- Document Contract: Required metadata in every authored doc (front matter) so agents and CLI know type, IDs, and dependencies without heuristics.
- Manifest: Machine‑generated index of all SEAD artifacts with paths, types, versions, and links. Becomes the first stop for discovery.
- Router: A single write path for agents/CLI that enforces routes and updates the manifest.
- DAG: A minimal dependency graph between document types to drive validations and trigger checks.

Document types (normalized)
- `project-brief`, `prd`, `architecture` (front-end, back-end, fullstack via subtype), `story`, `epic`, `qa-gate`, `ux-spec`, `wireframe`, `prototype-spec`, `planning` (plan, roadmap, sprint, resource, mode), `catalog-*` (bootstrap/structure/validation), `audit`.

Required front matter (all docs)
```
---
sead:
  id: "<artifact-id>"            # e.g., epic.story slug or a GUID
  type: "<doc-type>"             # e.g., story, prd, architecture
  subtype: "<optional>"          # e.g., front-end, fullstack
  agent: "sead-<role>"           # producing agent id
  mode: "prototype|development|build-to-deploy"
  catalogVersion: "<semver>"     # pinned effective catalog version
  rulesVersion: "<semver>"       # pinned effective ruleset version
  inputs:                         # upstream doc IDs
    - "<id>"
  outputs:                        # generated artifacts
    - "<id>"
  related:
    - "<id>"
  createdAt: "YYYY-MM-DD"
  updatedAt: "YYYY-MM-DD"
---
```

Manifest file
- Location: `sead-workspace/sead.manifest.json` (canonical), mirrored at repo root as read‑only copy if desired.
- Populated by: `sead docs index` (CLI) or automatically on any CLI write.
- Structure (example):
```
{
  "schemaVersion": 1,
  "catalogVersion": "1.2.0",        
  "rulesVersion": "1.1.0",
  "docs": [
    {
      "id": "epic-1.story-3",
      "type": "story",
      "subtype": null,
      "path": "docs/stories/1.3.story.md",
      "mode": "development",
      "catalogVersion": "1.2.0",
      "rulesVersion": "1.1.0",
      "inputs": ["prd-v4#epic-1"],
      "outputs": ["qa-gate#epic-1.story-3"],
      "related": ["architecture#fullstack-v2"]
    }
  ]
}
```

Document router
- Config key: `workspace.document_routes` in `sead.config.yaml` (project) with defaults in `sead-core/core-config.yaml`.
- Example routes:
  - `story` → `./sead-workspace/stories` (CLI) and `docs/stories` (traditional mirror)
  - `architecture:fullstack` → `docs/specifications` (subfolders optional)
  - `qa-gate` → `docs/qa/gates`
- CLI command `sead docs route <type> <file>` writes to the canonical path, injects front matter if missing, and updates the manifest.

Dependency DAG (doc graph)
- Define minimal edges in `sead-core/core-config.yaml` (or schema file): e.g., `story → qa-gate`, `prd → story`, `architecture ↔ prd`, `catalog-bootstrap → catalog-validate`.
- `sead docs index` computes graph health and flags missing predecessors/successors.

Agent behavior
- On activation: read `sead-workspace/sead.manifest.json`. If absent, run `sead docs index`. Fall back to discovery paths only if manifest missing.
- On write: use router (or CLI proxies) so documents always land per routes and get indexed.

Benefits
- Deterministic IO: no more ambiguous discovery; everything is findable via manifest.
- Clean flow: producer → router → manifest → consumers; agents can subscribe to types or IDs.
- Pinned versions: front matter + manifest ensure catalog/rules versions are explicit in every artifact.

Adoption notes
- Update templates to include the front‑matter block.
- Update agent tasks to mention router on save steps (“write via router”).
- Add a light linter to check for front matter and manifest entries.

