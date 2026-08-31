# Issues Index

## ID Ledger

| Field | Value |
|------|-------|
| Last Assigned ID | 001 |
| Next ID | 002 |

## Ledger Rules

- Issue IDs are global and immutable.
- IDs are never reused.
- Completed issues reserve their IDs forever.
- New issue IDs are calculated from this index, active files, and completed files.

## Overview

| Category | Count |
|----------|-------|
| Active issues | 0 |
| Completed | 1 |
| **Total** | **1** |

## Completed Issues

| ID | Title | Completed |
|----|-------|-----------|
| 001 | [Add the required expo-audio peer dependency](completed/001-add-required-expo-audio-peer.md) | 2026-08-31 |

## Active Issues by Priority

### P0 — Critical

| ID | Title |
|----|-------|
| _none_ | |

### P1 — High

| ID | Title |
|----|-------|
| _none_ | |

### P2 — Medium

| ID | Title |
|----|-------|
| _none_ | |

## Issue Structure

```yaml
---
id: XXX
title: ...
severity: P0|P1|P2
area: frontend|backend|api|database|auth|security|ui|testing|performance|dx|infra|docs|workflow|unknown
source: how-the-issue-was-found
status: open|completed
created: YYYY-MM-DD
files:
  - relevant-files
related:
  - related-issue-ids
---

## Summary

## Evidence

## Suggested fix

## Acceptance criteria
```

## Areas

| Area | Description |
|------|-------------|
| frontend | Web/mobile UI, components, screens, client navigation |
| backend | Server logic and services |
| api | HTTP/API routes, handlers, webhooks |
| database | Schema, migrations, persistence |
| auth | Permissions and identity |
| security | Input validation and hardening |
| ui | Visual design, layout, accessibility, UX |
| testing | Test gaps and quality checks |
| performance | Latency, bundle, caching |
| dx | Tooling and developer ergonomics |
| infra | Build, CI/CD, deploy, config |
| docs | Documentation and onboarding |
| workflow | Scripts and process tooling |
| unknown | Area unclear until triaged |

## Workstreams

| Workstream | Issues |
|-----------|--------|
| _none yet_ | |
