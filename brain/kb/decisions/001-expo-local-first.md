# 001 — Expo local-first application

Date: 2026-08-31
Status: accepted

## Decision

Use Expo-managed React Native with TypeScript and `expo-sqlite` for the personal daily routine app.

## Rationale

The app needs Android-first local persistence, audio/video playback, media-file selection, and local notifications without a server, account, cloud service, or store-release pipeline. Expo provides compatible native modules for this compact use case.

## Consequences

- Routine content and progress live only in local SQLite.
- Selected media is copied into app document storage; media is never uploaded.
- YouTube links open externally instead of being embedded or downloaded.
- Native behavior requires a configured Android emulator/device for final verification.
