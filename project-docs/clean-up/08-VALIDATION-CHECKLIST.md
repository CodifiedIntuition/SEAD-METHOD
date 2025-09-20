# 08 — Validation Checklist (Post‑cleanup)

Repo integrity
- [ ] No agent `dependencies` reference missing tasks/templates/data (grep and verify)
- [ ] All referenced templates exist or are re-pointed to canonical ones
- [ ] All workflows resolve steps to canonical tasks

Role clarity
- [ ] Each agent’s `commands` map to distinct responsibilities
- [ ] Standard input load order followed (core-config → constraints → catalog reads)
- [ ] Outputs written to consistent paths per `core-config` discovery/CLI outputs

Lifecycle coherence
- [ ] Pattern lifecycle phases cross-link instead of duplicate content
- [ ] Catalog bootstrap/structure/validate tasks avoid overlapping prose
- [ ] Story creation unified with clear flags; brownfield guidance remains discoverable

Workflow unification
- [ ] `sead-application.yaml` drives all variants (greenfield/brownfield × ui/service/fullstack)
- [ ] Old workflow files contain wrappers/deprecation notes only

Docs & packaging
- [ ] README and CLI docs reflect canonical names
- [ ] `.sead-core/` regenerated from `sead-core/` and used by the installer
- [ ] Smoke tests pass against `test-projects/` with a seeded catalog template

