---
id: "001"
title: Build a local-first Expo daily routine mobile app
tier: dig-deep
type: architecture
status: done
source: kenmark-plan
created: 2026-08-31
approved: 2026-08-31
completed: 2026-08-31
files:
  - package.json
  - app.json
  - src/app/
  - src/components/
  - src/features/
  - src/db/
  - brain/kb/
related_issues: []
related_plans: []
---

# Plan — Build a local-first Expo daily routine mobile app

## Summary

Create an Android-first personal mobile app that organizes daily video, reading, and listening activities. All routine content, progress, history, settings, and media positions remain on the device; there are no accounts, backend services, or cloud synchronization.

## Planning frame

- Goal: build the requested daily reading, listening, and watching app from the empty project directory.
- Current state: only the `brain/` project documentation exists; there is no mobile project, source code, or package manifest.
- Desired outcome: a locally installable Android app with Today, History, Manage, and Settings tabs and working local persistence/media/reminders.
- Scope: personal local use, Android phone/emulator first; iOS compatibility is a welcome by-product of the chosen stack.
- Constraints: no hosting, authentication, cloud database, media downloading, or copyrighted-content redistribution.
- Unknowns: exact Android SDK/JDK availability, preferred app display name/icon, and whether local media-file selection must persist copies in app storage.
- Risk level: medium — native media playback, local file URIs, and scheduled notifications require device verification.
- Time sensitivity: none stated.
- Plan tier: dig-deep.

## Current understanding

- The app needs editable daily video, reading/prayer, and audio content; per-day completion tracking; a history view; optional local reminders; theme preferences; and sample content.
- The supplied requirements explicitly prohibit a server and require data to survive app restarts.
- The app should support URL and local-file media sources. YouTube links must be opened appropriately rather than downloaded.

## Options

| Option | Summary | Pros | Cons | Risk | When to choose |
| --- | --- | --- | --- | --- | --- |
| A — Expo + React Native + TypeScript | Expo-managed native app using Expo Router, SQLite, Expo audio/video/file-picker/notifications. | Fast Android development; cohesive native APIs; route-based tabs; local-first support; fewer native-build changes. | Depends on Expo SDK compatibility; advanced native customizations may need a development build. | Medium | Recommended for this new, local Android-first app. |
| B — React Native CLI + TypeScript | Bare React Native app with community packages for every native feature. | Maximum native control; no Expo runtime. | More setup and maintenance; higher dependency/configuration cost for no current benefit. | Medium–high | Choose only if Expo cannot meet a device/media requirement discovered in testing. |
| C — Flutter + Dart | Flutter app with SQLite/media/notification packages. | Strong cohesive UI toolkit and local app support. | New language/toolchain; no existing Flutter code; slower to modify for a TypeScript/React-oriented workflow. | Medium | Choose only if Dart/Flutter is already preferred locally. |

### Recommended approach

Use **Option A: Expo-managed React Native with TypeScript**.

- Expo Router supplies the requested tab navigation and typed file-based routes.
- `expo-sqlite` provides durable on-device relational storage suitable for editable content plus date-keyed completion history.
- `expo-audio`, `expo-video`, `expo-document-picker`, and `expo-notifications` cover the required native capabilities without a backend.
- Keep the first release simple: open YouTube URLs externally, play direct video/audio URLs and picked local files in-app, and avoid a separate state-management or ORM dependency.

## Proposed technical design

### Stack

- Expo managed workflow, current stable SDK at scaffold time
- React Native + TypeScript
- Expo Router for tab and detail-screen navigation
- `expo-sqlite` with parameterized SQL and schema migrations
- `expo-audio` for audio playback, progress, seek, and saved position
- `expo-video` for direct local/remote video playback
- `expo-document-picker` and `expo-file-system` for selecting and retaining local media safely
- `expo-notifications` for optional daily local reminders
- React Context plus feature hooks for app state; no Redux/Zustand/ORM initially
- Built-in React Native components and Expo icon assets; no UI kit initially

### Data model

- `routine_items`: ordered item metadata (`video`, `audio`, `reading`), title, notes, source URI, enablement, and sort order.
- `reading_documents`: locally editable prayer/reading body and display settings.
- `daily_completions`: item/date completion state, completed timestamp, and date key derived consistently in the device time zone.
- `playback_positions`: audio item ID, last position, duration, and updated timestamp.
- `preferences`: theme, font scale, reminder enabled/time, and schema/app settings.

Use foreign-key constraints, a migration version, and transactions for reorder/reset operations. Store media references, not media binary data, in SQLite.

### Navigation

- `(tabs)/today`: progress summary and routine list.
- `(tabs)/history`: date list/calendar-style completion summaries and daily detail.
- `(tabs)/manage`: content list, add/edit, delete confirmation, reorder, and prayer editor.
- `(tabs)/settings`: theme, reminders, reset confirmation, and app preferences.
- Detail routes: `player/[itemId]`, `reading/[itemId]`, `edit/[itemId]`, plus creation routes.

## Phased plan

### Phase 1 — Scaffold and foundations

- [x] Confirm Node.js, Android SDK/emulator, and an Expo-compatible package manager are available.
- [x] Create the Expo TypeScript project in this repository, retaining `brain/` and `temp/`.
- [x] Configure app identity for local Android development and bottom tabs.
- [x] Install only planned Expo modules using the SDK-compatible Expo installer.
- [x] Create a reusable theme, spacing, typography, feedback, and error-state foundation.

### Phase 2 — Local database and domain layer

- [x] Define SQLite initialization and enable foreign keys/WAL where appropriate.
- [x] Build local persistence behavior for content, ordering, daily completion, playback position, and preferences.
- [x] Seed sample video, prayer, and audio content so the app is immediately testable.
- [x] Add one-time database initialization with loading/error feedback.

### Phase 3 — Core daily experience

- [x] Build Today with date-aware progress, activity badges, completion controls, and clear completed states.
- [x] Build a reading view with editable text, font-size adjustment, and mark-complete action.
- [x] Build direct audio playback with play/pause, seek, duration/progress, and saved position.
- [x] Build direct video playback and external YouTube launch.

### Phase 4 — Content management and history

- [x] Build Manage forms for video/audio/reading creation, editing, deletion confirmation, and ordering.
- [x] Add local media selection and app-private copies for selected media.
- [x] Build History as a date summary list with per-day details.
- [x] Preserve completion title/type snapshots after later item edits/deletions.

### Phase 5 — Preferences and reminders

- [x] Build Settings for theme, reminder permission/time, and guarded local reset.
- [x] Schedule/cancel one local daily reminder with permission-denied feedback.
- [x] Keep reminder data local with no push registration or server code.

### Phase 6 — Verification and documentation

- [x] Add focused unit tests for date keys, progress calculation, and reminder schedule inputs.
- [ ] Add integration-level checks for initial seed, persistence across restart, completion history, and reset behavior.
- [ ] Test on Android emulator/device: direct audio/video playback, YouTube launch, picked local media, notification scheduling, dark mode, and small screens.
- [x] Run supported TypeScript/test/build checks and fix identified compatibility failures.
- [x] Update relevant KB, plan, issue, and changelog records.

## Files likely involved

| File/area | Expected change |
| --- | --- |
| `package.json`, lockfile | Expo project scripts and minimal dependencies |
| `app.json` | App identity, Android config, and native module plugins |
| `src/app/` | Router layouts, four tabs, and detail routes |
| `src/components/` | Routine cards, progress UI, player controls, forms, and shared states |
| `src/features/` | Today, history, content-management, reading, player, and settings behavior |
| `src/db/` | SQLite migration and typed repository layer |
| `src/lib/` | Date, validation, URI, notification, and theme utilities |
| `src/__tests__/` | Unit/integration tests for persistence and business rules |
| `brain/kb/` | Confirmed implementation documentation and architecture decision |

## Risks and mitigations

| Risk | Impact | Mitigation |
| --- | --- | --- |
| Picked local-file URI becomes unavailable | Playback fails after restart | Copy selected files to app-controlled storage and store the durable URI; test after restart. |
| YouTube embedding breaks or violates expectations | Video cannot be played in-app | Open YouTube URLs externally; support in-app playback only for direct media sources. |
| Notification permission or OEM scheduling limits | Reminder does not fire | Request permission transparently, store the setting locally, expose status, and verify on target device. |
| Completion history changes when content is edited/deleted | Historical records become unclear | Save date/item completion snapshots or display historic titles from a completion snapshot. |
| Dependency/SKD mismatch | Build failure | Generate the Expo app with current stable tooling and install modules through `npx expo install`. |
| User invokes reset accidentally | Permanent local data loss | Use a clear, irreversible confirmation and describe what will be removed. |

## Rollback

- Before destructive schema changes, add a forward migration and verify a backup/export strategy if one is introduced.
- Keep database migrations additive where possible; do not mutate or delete daily history without explicit user confirmation.
- If a native module blocks Expo Go testing, switch to an Expo development build before considering a React Native CLI migration.

## Acceptance criteria

- [ ] The app launches on an Android emulator/device with Today, History, Manage, and Settings tabs.
- [ ] A user can add, edit, delete, and reorder videos/audio and edit prayer text without touching code.
- [ ] Today accurately shows item completion and date-specific overall progress.
- [ ] Direct audio supports play, pause, seek, duration/progress, and restored playback position after reopening.
- [ ] Direct local/remote video plays; YouTube links open safely without downloading content.
- [ ] All content, preferences, completions, and history survive app restarts with no remote service.
- [ ] History shows prior-day results correctly after routine content changes.
- [ ] Optional daily local reminders can be enabled, rescheduled, disabled, and gracefully handle permission denial.
- [ ] Tests and supported lint/type/build checks pass, and the KB documents the actual implementation.

## Commands/checks to run

- `npx create-expo-app@latest .` (or its safe empty-directory equivalent during scaffold)
- `npx expo install expo-sqlite expo-audio expo-video expo-document-picker expo-file-system expo-notifications`
- `npx expo start --android`
- Project-provided typecheck, lint, unit-test, and Android build commands after scaffold.

## Open questions

- What app name and Android package identifier should be used for the local build?
- Should selected local audio/video be copied into app storage (recommended) or only referenced from their original locations?
- Is an Android development build acceptable if a chosen feature cannot be verified in Expo Go?

## Execution progress — 2026-08-31

- [x] Expo TypeScript scaffold, app identity, local dependencies, and calm mobile UI foundation.
- [x] SQLite schema, sample content, local CRUD, reordering, date-keyed completion history, and local preferences.
- [x] Today, History, Manage, Settings, reading, direct audio/video, YouTube external launch, and durable local-media selection.
- [x] Local reminder permission/scheduling, reminder-time preference, dark preference, and reset confirmation.
- [x] Strict TypeScript, Jest unit suite, Expo Doctor, and Android Expo export checks.
- [~] Android emulator/device verification is handed off to the user: media, file selection, notification delivery, persistence after restart, and small-screen accessibility.
- [~] Optional future work: integration tests for initial seed, persistence, completion history, and reset behavior.

## Completion handoff

The implementation and automated checks are complete. The user accepted responsibility for final manual Android validation; this plan is closed with that verification explicitly handed off rather than represented as executed locally.
