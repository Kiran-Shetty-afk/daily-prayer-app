---
id: 002
title: Keep local reminders compatible with Expo Go
severity: P1
area: frontend
source: Android Expo Go runtime error reported by the user
status: completed
created: 2026-08-31
files:
  - App.tsx
related: []
---

## Summary

Enabling a daily local reminder can crash Android Expo Go with an error about remote push notifications, even though the app does not use remote push tokens.

## Evidence

The app imported the `expo-notifications` package barrel. In Expo SDK 57 that import re-exports a remote device-token auto-registration module, which registers a push-token listener. Expo Go on Android blocks that remote API from SDK 53 onward. Expo documents that local scheduled notifications remain supported in Expo Go.

## Suggested fix

Import only the three local notification APIs used by the reminder flow, avoiding the package barrel and its remote push-token auto-registration side effect.

## Acceptance criteria

- The app does not load the `expo-notifications` package barrel.
- The reminder flow requests notification permission, schedules, and cancels a local daily notification.
- Type checking and Android export succeed.

## Resolution

Replaced the top-level `expo-notifications` import with direct imports for local permission, scheduling, and cancellation APIs. This prevents the package barrel from evaluating its remote push-token auto-registration module in Expo Go.

## Validation

- `npm.cmd run typecheck`
- `npm.cmd test -- src/lib/routine.test.ts`
- `npx.cmd expo export --platform android --clear`
