# Testing

Kapwa does not have a unit or end-to-end test suite yet. Storybook test runner integration is tracked in [issue #27](https://github.com/bettergovph/kapwa/issues/27).

Until then, changes are checked with the commands below. The first two also run in CI on every pull request (see `.github/workflows/build-test.yml`).

## Automated checks

```bash
npm run lint
npx prettier --check .
```

- `npm run lint` runs ESLint and fails on any warning.
- `npx prettier --check .` verifies formatting. Run `npm run format` to fix it automatically.

## Build checks

Run the ones that match what you changed:

```bash
npm run build-lib
npm run build-site
npm run build:storybook
```

- Library or component changes: `npm run build-lib`
- Docs-only changes: `npm run build-site`
- Storybook or story changes: `npm run build:storybook`

## Manual accessibility check

Start Storybook with `npm run dev:storybook`, open the story you changed, and review the **Accessibility** (a11y) tab for violations before opening a pull request.

See the [Contributing guide](./docs/guides/contributing.md#validate-changes) for the full validation checklist.
