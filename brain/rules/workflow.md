# Development workflow

## Git branch policy

Do not commit or push directly to a deployment branch without explicit user approval.

| Branch | Purpose | Direct commit/push |
| --- | --- | --- |
| `main` | Potential production CI/CD | no |

## Workflow

- Use a focused feature or fix branch for normal work.
- Check for an existing local dev server before starting another.
- Keep scope aligned with the requested task.
- Update impacted KB files and add a `brain/CHANGELOG.md` entry after meaningful work.
