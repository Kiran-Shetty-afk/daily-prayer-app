---
id: 001
title: Add the required expo-audio peer dependency
severity: P1
area: infra
source: kenmark-issues-fix-and-ship
status: completed
created: 2026-08-31
completed: 2026-08-31
files:
  - package.json
  - package-lock.json
related: []
---

## Summary

The application includes `expo-audio` but does not declare its required `expo-asset` peer dependency. Expo Doctor reports that the app may crash outside Expo Go without it.

## Evidence

- `package.json` — lists `expo-audio` but not `expo-asset`.
- `npx expo-doctor` — 20 of 21 checks pass; the failed check explicitly requires `expo-asset` for `expo-audio`.

## Suggested fix

Install `expo-asset` through `npx expo install` so Expo chooses the SDK 57-compatible version, then rerun Expo Doctor and the Android bundle export.

## Acceptance criteria

- [x] `expo-asset` is a direct dependency at an Expo SDK-compatible version.
- [x] Expo Doctor reports all checks passing.
- [x] TypeScript and Android bundle export pass.
