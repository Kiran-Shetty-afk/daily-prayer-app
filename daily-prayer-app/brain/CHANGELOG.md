# CHANGELOG

## v2026.08.31-0000-kenmark-init
- Initialized brain scaffold (index, modular rules, numbered KB, issue tracker, and plan tracker).
- KB: created numbered `brain/kb/` documentation from the supplied requirements and empty repository.
- Sync mode: pending target selection.
- Updated entry files: none (pending selection).

## v2026.08.31-0001-architecture-plan
- Added proposed plan `brain/plans/001-local-first-expo-mobile-app.md` with an Expo local-first stack recommendation.

## v2026.08.31-0002-kb-sync
- KB: synchronized architecture, stack, data model, integrations, UI, quality, and decision records with the Expo implementation.

## v2026.08.31-0003-execution-progress
- Implemented the local-first Expo mobile app; Android device validation and automated behavioral tests remain tracked in plan 001.

## v2026.08.31-0004-expo-peer-fix
- Added the SDK-compatible `expo-asset` peer dependency required by `expo-audio`; Expo Doctor now passes all checks.

## v2026.08.31-0005-unit-tests
- Added Expo Jest tooling and deterministic unit coverage for routine date, progress, reminder, and media-link helpers.

## v2026.08.31-0006-plan-complete
- Closed plan 001 after implementation and automated validation; final Android manual verification was handed off to the user.

## v2026.08.31-0007-mantra-video-plan
- Added proposed quick plan 002 to configure the seven supplied daily mantra videos.

## v2026.08.31-0008-mantra-video-routine
- Added the seven supplied mantra videos to fresh/reset routines and an explicit Settings action for existing local routines.
