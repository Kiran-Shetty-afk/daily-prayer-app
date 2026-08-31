# Data model

Last updated: 2026-08-31
Status: draft

## Confirmed facts

- Content, daily completion history, prayer text, preferences, and playback progress must persist locally.

## Important files inspected

- `C:/Users/kiran/.codex/attachments/b1132770-8981-409c-8323-7548d8132072/pasted-text.txt` — supplied product requirements.
- Repository root — no source files, package manifest, or mobile-project configuration existed at initialization.

## Assumptions

- Content items, daily completion records, settings, and audio positions will be separate local entities.

## Unknowns / documentation gaps

- Storage technology, schema, migration strategy, and file-URI policy are undecided.

## Maintenance notes

- Update for schema, persistence, or migration changes.

## Implementation sync — 2026-08-31

- `routine_items` stores ordered video/audio/reading content; `completions` stores date-keyed completion snapshots; `preferences` stores theme, reminder, and audio-position values.
- The schema and parameterized SQLite access are implemented in `App.tsx`.
- The current schema is created idempotently; versioned migrations are a future improvement.
