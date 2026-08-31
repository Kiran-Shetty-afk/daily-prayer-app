# UI and routes

Last updated: 2026-08-31
Status: draft

## Confirmed facts

- Requested bottom navigation: Today, History, Manage, Settings.
- Today shows routine items, progress, and actions to open content.
- A comfortable reading screen and media playback controls are required.

## Important files inspected

- `C:/Users/kiran/.codex/attachments/b1132770-8981-409c-8323-7548d8132072/pasted-text.txt` — supplied product requirements.
- Repository root — no source files, package manifest, or mobile-project configuration existed at initialization.

## Assumptions

- Edit forms and reading/player views will be nested under the main navigation.

## Unknowns / documentation gaps

- Navigation library, screen hierarchy, visual tokens, and components are undecided.

## Maintenance notes

- Update when screens, routes, or shared UI patterns change.

## Implementation sync — 2026-08-31

- `App.tsx` implements the Today, History, Manage, and Settings bottom tabs plus modal reading, player, editor, and history-detail views.
- The current custom navigation favors a compact dependency footprint rather than Expo Router.
- The UI uses a calm cream/sage palette, accessible completion controls, large touch targets, and adjustable reading type.
