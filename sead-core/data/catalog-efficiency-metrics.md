<!-- Powered by SEAD-METHOD™ Core -->

# Catalog Efficiency Metrics

Use these metrics to evaluate backlog health and pattern utilization.

## Core Metrics
- **Reuse Coverage (%)** – proportion of stories leveraging existing catalog patterns.
- **Deviation Count** – number of approved deviations per sprint; target zero in build-to-deploy.
- **Pattern Debt Index** – weighted backlog of required catalog updates (Tier 1–4 from `catalog-pattern-priorities.md`).
- **Validation Throughput** – time from story ready to catalog compliance confirmation.
- **Accessibility Confidence** – percentage of stories with validated accessibility evidence.

## Data Collection Guidelines
1. Record metrics during sprint reviews or backlog refinement sessions.
2. Update `sead-backlog-tmpl.yaml` and sprint artifacts with latest values.
3. Investigate negative trends immediately; trigger corrective tasks (`sead-correct-course.md`).

## Interpretation Tips
- High deviation count may indicate missing patterns; schedule `sead-pattern-extraction.md`.
- Low reuse coverage signals need for training or catalog evangelism.
- Pattern debt index should trend downward as catalog matures.
