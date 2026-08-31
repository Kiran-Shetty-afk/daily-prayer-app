# Plans Index

## ID Ledger

| Field | Value |
|------|-------|
| Last Assigned ID | 001 |
| Next ID | 002 |

## Ledger Rules

- Plan IDs are global and immutable.
- IDs are never reused.
- Completed plans reserve their IDs forever.
- New plan IDs are calculated from this index, active files, and completed files.

## Overview

| Category | Count |
|----------|-------|
| Active plans | 1 |
| Completed | 0 |
| **Total** | **1** |

## Completed Plans

| ID | Title | Tier | Completed |
|----|-------|------|-----------|
| _none yet_ | | | |

## Active Plans by Status

### Proposed

| ID | Title | Tier |
|----|-------|------|
| _none_ | | |

### Approved

| ID | Title | Tier |
|----|-------|------|
| _none_ | | |

### In progress

| ID | Title | Tier |
|----|-------|------|
| 001 | Build a local-first Expo daily routine mobile app | dig-deep |

## Plan Structure

```yaml
---
id: "XXX"
title: ...
tier: quick|prototype|full-feature|dig-deep|ultrathink
type: feature|refactor|debug|architecture|release|repo-maintenance|agent-workflow|unknown
status: proposed|approved|in-progress|done|superseded|cancelled
source: kenmark-plan
created: YYYY-MM-DD
approved: YYYY-MM-DD
completed: YYYY-MM-DD
files:
  - relevant-files
related_issues:
  - "042"
related_plans:
  - "003"
---

## Summary

## Goal

## Plan

## Acceptance criteria
```

## Plan Tiers

| Tier | When to use |
|------|-------------|
| quick | Small, clear scope |
| prototype | Spike, proof of concept |
| full-feature | Normal feature or change |
| dig-deep | Architecture, migration, high-risk work |
| ultrathink | Production-critical, multi-system work |

## Plan Types

| Type | Description |
|------|-------------|
| feature | New module, UI, API, workflow |
| refactor | Restructure or simplify |
| debug | Failing build or bug strategy |
| architecture | Stack decisions and boundaries |
| release | Publish, deploy, version, changelog |
| repo-maintenance | Hygiene, docs, quality gates |
| agent-workflow | Skills, agents, rules, automation |
| unknown | Unclear or mixed request |

## Workstreams

| Workstream | Plans |
|-----------|-------|
| _none yet_ | |
