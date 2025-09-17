# Alternative Plan A — Agent IO via Router (Standardized Inputs/Outputs)

Problem
- Agents currently rely on discovery paths; outputs might land in heterogeneous folders, causing downstream agents to miss them.

Solution
- All agent write operations go through the Document Router. Reads prefer the Manifest, falling back to discovery only when necessary.

Router config (project → `sead.config.yaml`)
```
workspace:
  document_routes:
    story: ["./sead-workspace/stories", "docs/stories"]
    prd: ["docs/specifications"]
    architecture: ["docs/specifications"]
    ux-spec: ["docs/specifications"]
    qa-gate: ["docs/qa/gates", "./sead-workspace/qa/gates"]
    planning: ["docs/planning", "./sead-workspace/planning"]
```

Write flow (enforced)
1) Agent produces content (in-memory or temp path).
2) CLI `sead docs route <type> <file>`
   - Validates/Injects front matter
   - Normalizes filename (e.g., `1.3.story.md`)
   - Writes to first available route path
   - Mirrors to secondary when configured (optional)
   - Updates `sead.manifest.json`

Read flow (preferred)
- `sead docs index` ensures manifest is fresh.
- Agents read from manifest by `type` or `id`; only fallback to discovery if manifest missing.

Examples
- Scrum Master creates next story → router writes to `sead-workspace/stories/1.3.story.md` and updates manifest so QA/Dev can fetch it by ID.
- QA gate → router writes gate YAML to `docs/qa/gates` and registers it; story `QA Results` references the gate ID.

Enforcement
- Add a simple linter: ensure authored docs (story/spec/plan) have front matter and are present in the manifest.
- Gate on CI: “Manifest Freshness” step runs `sead docs index --check`.

Benefits
- Clean document flow and consistent locations
- Predictable downstream consumption via IDs and types
- Less brittle than heuristic discovery, while retaining backward compatibility

