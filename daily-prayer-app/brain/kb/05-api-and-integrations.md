# API and integrations

Last updated: 2026-08-31
Status: draft

## Confirmed facts

- The app must not use a backend, cloud database, or unnecessary API.
- Media can use URLs or local files; YouTube URLs may be stored and opened/played appropriately.

## Important files inspected

- `C:/Users/kiran/.codex/attachments/b1132770-8981-409c-8323-7548d8132072/pasted-text.txt` — supplied product requirements.
- Repository root — no source files, package manifest, or mobile-project configuration existed at initialization.

## Assumptions

- External URLs are user-managed links, never downloaded copyrighted content.

## Unknowns / documentation gaps

- URL handling and native player/browser integration are undecided.

## Maintenance notes

- Update for media or notification integrations.

## Implementation sync — 2026-08-31

- Direct media plays in-app with Expo audio/video; YouTube URLs open externally through the operating system.
- `DocumentPicker` selections are copied into the app document directory before the URI is saved.
- `expo-notifications` schedules one optional local daily reminder; device behavior still needs verification.
- The reminder time is a persisted user preference in 24-hour `HH:MM` format.
