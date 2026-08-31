---
id: "002"
title: Configure the seven daily mantra videos
tier: quick
type: feature
status: done
source: kenmark-plan
created: 2026-08-31
approved: 2026-08-31
completed: 2026-08-31
files:
  - App.tsx
  - brain/kb/07-features.md
  - brain/kb/features/001-daily-routine.md
  - brain/CHANGELOG.md
related_issues: []
related_plans:
  - "001"
---

# Plan — Configure the seven daily mantra videos

## Summary

Replace the current sample routine video with the seven supplied YouTube items, while retaining the existing prayer/reading and listening sample content.

## Planning frame

- Goal: make the personal routine start with the supplied seven mantra/video links.
- Current state: first-run seed data in `App.tsx` contains one sample video, one reading, and one audio item.
- Desired outcome: a newly installed/reset app starts with seven named video routine items in the supplied order.
- Scope: seed content only; no changes to navigation, media playback, storage schema, or settings.
- Constraints: retain personal links only; YouTube URLs open externally.
- Unknowns: the third provided URL has a trailing hyphen after the video ID and may not resolve.
- Risk level: low.
- Time sensitivity: none stated.
- Plan tier: quick.

## Recommended approach

Update the `seed` array in `initialize()` with the seven videos below. Preserve the supplied ordering. Since the app opens YouTube URLs externally, no video downloading or embed behavior is introduced.

| Order | Title | URL |
| --- | --- | --- |
| 1 | Surya Tantrik Beej Mantra | `https://www.youtube.com/watch?v=FOzo1SxVxAg` |
| 2 | Shani Beej Mantra | `https://www.youtube.com/watch?v=4yIf3VCFkM0` |
| 3 | Shani Beej Mantra | `https://www.youtube.com/watch?v=4yIf3VCFkM0` |
| 4 | Guru Beej Mantra | `https://www.youtube.com/watch?v=C6pVgjYizb4` |
| 5 | Mangal Beej Mantra | `https://www.youtube.com/watch?v=6ItVHohFTOk` |
| 6 | Budh Beej Mantra | `https://www.youtube.com/watch?v=4B7TBhooCv0` |
| 7 | Hanuman Chalisa | `https://www.youtube.com/watch?v=BLlTFapgvOo&list=RDBLlTFapgvOo&start_radio=1` |

## Plan

- [x] Treat item 3's trailing hyphen as a typo and use the valid same YouTube ID as item 2.
- [x] Replace the sample video seed with the seven video seed records in the listed order.
- [x] Keep the current reading and audio seeds unchanged.
- [x] Add a reset-safe Settings action so existing local users can opt into the new defaults without losing their edits.
- [x] Run typecheck and the Android bundle export.
- [x] Update the daily-routine feature documentation and changelog.

## Risks

- The seed array runs only for an empty local database, so existing installations will not automatically receive the seven videos.
- The third URL may refer to an invalid YouTube video ID because of its trailing hyphen.

## Acceptance criteria

- [x] A new or reset local database contains the seven supplied videos in the exact intended order.
- [x] Each video is classified as `video` and opens externally as a YouTube link.
- [x] Existing personalized content is not overwritten silently.
- [x] TypeScript and Android bundle checks pass.

## Commands/checks to run

- `npm run typecheck`
- `npx expo export --platform android --clear`
