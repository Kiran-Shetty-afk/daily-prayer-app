# Project standards

Universal rules for this repo. Stack, workflow, testing, UI, and deployment details live in sibling files.

## Scope and quality

- Prefer the smallest correct change; do not refactor unrelated code.
- Read surrounding code before editing; match existing patterns.
- Complete behavior with sensible error handling; avoid placeholder implementations unless requested.

## Project layout

- Never delete `brain/`; it is the project knowledge base.
- Use `temp/` for scratch scripts and downloads.
- Update relevant KB files and `brain/CHANGELOG.md` after meaningful changes.

## Brain KB maintenance

- Before non-trivial work, read relevant numbered KB and feature documents.
- For a new feature, add or update `brain/kb/features/NNN-feature-name.md` and link it from `07-features.md`.
- Code and KB move together.

## Packages and docs

- Use the repository's existing package manager and conventions.
- Add dependencies only when necessary.

## Safety

- Check modified code for null access, error handling, input safety, and accidental secret exposure.
