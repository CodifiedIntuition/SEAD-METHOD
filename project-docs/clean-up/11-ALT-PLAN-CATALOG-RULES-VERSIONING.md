# Alternative Plan A — Catalog & Rules Versioning (Semver, Layers, Releases)

Goals
- Make catalog and rules evolution explicit, reviewable, and safe to adopt mid‑project.
- Allow pinning and controlled upgrades with diffs and migration notes.

Versioning model
- Semver for both catalog and rules: `catalogVersion`, `rulesVersion`.
- Status channels: `draft` (in development), `release` (approved), `deprecated` (scheduled for removal).

Layering (effective set)
1. SEAD core defaults (from this repo): base constraints and references.
2. Project overlay: `sead-rules/` and project’s `sead-catalog/` (consumer repo).
3. Branch/feature overlay (optional): experimental additions, recorded as `draft`.
- The effective version is computed as base + overlays; pinned in doc front matter and manifest.

Repository structure (consumer project)
- `sead-catalog/` with `versions/` (tagged) and `draft/` (working):
  - `sead-catalog/versions/1.2.0/*`
  - `sead-catalog/draft/*`
- `sead-rules/` with `versions/` and `draft/`:
  - `sead-rules/versions/1.1.0/*.yaml`
  - `sead-rules/draft/*.yaml`

Pinning
- `sead-workspace/sead.manifest.json` contains `catalogVersion` and `rulesVersion` used during a cycle.
- Every authored doc front matter includes pinned versions.

CLI commands (additions)
- `sead catalog release --from draft --as 1.2.0` → validates, snapshots, generates release notes and migration hints.
- `sead catalog diff 1.1.0..1.2.0` → lists added/removed/changed patterns and breaking changes.
- `sead rules release --from draft --as 1.1.0` → validates constraint packs.
- `sead rules diff 1.0.0..1.1.0` → constraint changes.
- `sead pin catalog 1.2.0` and `sead pin rules 1.1.0` → updates manifest and prompts for impacted docs to refresh.

Gates and governance
- QA gate includes a “version compliance” section (pinned vs available releases; deviations recorded).
- PO/Architect gate for adopting new `catalogVersion`/`rulesVersion` with explicit sign‑off.

Migrations and deprecations
- For renamed patterns/templates, maintain alias metadata inside the catalog with a sunset version.
- Provide `sead catalog migrate` to update references in docs/stories to new canonical names.

Benefits
- Predictable adoption: teams upgrade on purpose, not by accident.
- Clear audit trail: every release is diffable and documented.
- Easy rollback: re‑pin to a previous version if issues arise.

