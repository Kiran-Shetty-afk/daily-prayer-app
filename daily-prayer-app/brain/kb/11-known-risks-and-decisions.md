# Known risks and decisions

Last updated: 2026-08-31
Status: draft

## Confirmed facts

- No architecture decision has been implemented because the repository is empty.
- Copyrighted video content must not be downloaded or redistributed; only personal links or local files are stored.

## Important files inspected

- `C:/Users/kiran/.codex/attachments/b1132770-8981-409c-8323-7548d8132072/pasted-text.txt` — supplied product requirements.
- Repository root — no source files, package manifest, or mobile-project configuration existed at initialization.

## Assumptions

- A local-first architecture is the central design choice.

## Unknowns / documentation gaps

- Media compatibility, notification support, backup behavior, and technology selection require decisions.

## Maintenance notes

- Record significant decisions under `brain/kb/decisions/` and link them here.

## Implementation sync — 2026-08-31

- Adopted local-first Expo/SQLite architecture; see [decision 001](decisions/001-expo-local-first.md).
- Selected media is copied to app storage; YouTube links open externally rather than being embedded or downloaded.
- Remaining risks: Android device validation, OEM notification behavior, and an optional future backup/export feature.
- Expo Doctor confirms the current SDK 57 package set is compatible after adding the required `expo-asset` peer dependency.
