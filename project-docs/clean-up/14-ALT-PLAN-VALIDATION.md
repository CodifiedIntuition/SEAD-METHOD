# Alternative Plan A — Validation Checklist

Manifest & Router
- [ ] All authored docs include SEAD front matter with id/type/mode/catalogVersion/rulesVersion.
- [ ] `sead docs index --check` passes with no missing or malformed entries.
- [ ] Router writes to canonical paths and mirrors where configured.

Agent IO
- [ ] Agents read from `sead.manifest.json` by type/id; fallback to discovery is only used when manifest absent.
- [ ] Save steps in tasks call the router instead of ad‑hoc paths.

Versioning
- [ ] `sead catalog release` and `sead rules release` produce versioned snapshots with release notes.
- [ ] Docs pin to released versions unless explicitly opting into `draft`.
- [ ] `sead catalog diff` and `sead rules diff` surface changes clearly.

DAG & CI
- [ ] Doc dependencies (prd→story, story→qa-gate, etc.) are satisfied; no dangling references.
- [ ] CI includes manifest freshness and DAG validation steps.

Documentation
- [ ] Templates include front matter; agent docs describe Router/Manifest usage.
- [ ] README/CLI reference updated for new commands.

