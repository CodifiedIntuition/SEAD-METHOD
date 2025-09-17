# Alternative Plan A — Implementation Plan (Phased)

Phase 0 — Foundations
- Add front matter blocks to templates (story, prd, architecture, ux-spec, planning, qa-gate).
- Add router and manifest sections to `sead-core/core-config.yaml` (defaults) and developer docs.

Phase 1 — Manifest generation
- Implement `sead docs index` to scan known doc roots, extract front matter, and produce `sead.manifest.json`.
- Add `--check` mode to validate presence and schema.
- Acceptance: manifest lists all artifacts with IDs, types, paths, and pinned versions.

Phase 2 — Router write path
- Implement `sead docs route <type> <file>` to normalize filenames, inject front matter (if missing), write to canonical path(s), and update manifest.
- Update agent tasks to replace “save to X” with “route as <type>”.
- Acceptance: new docs land in the right place and are immediately discoverable via the manifest.

Phase 3 — Agents prefer manifest reads
- Modify agent activation guidance to “read manifest first”; discovery remains fallback.
- Add helper `sead docs get --type story --id epic-1.story-3`.
- Acceptance: agents consistently find artifacts via IDs or types.

Phase 4 — Catalog/Rules versioning
- Implement `sead catalog release`, `sead catalog diff`, `sead rules release`, `sead rules diff`, `sead pin` commands.
- Require front matter and manifest pinning on write.
- Acceptance: docs include consistent pinned versions; teams can diff and adopt upgrades.

Phase 5 — DAG validation and CI checks
- Encode minimal doc dependencies; flag broken edges.
- Add CI checks: manifest freshness; DAG validation; pinned versions present.
- Acceptance: PRs surface doc flow issues automatically.

Phase 6 — Migration and docs
- Provide a small migration script to add front matter to existing docs.
- Update agent/task docs to reference router/manifest flows.
- Acceptance: documentation matches the new operational model.

