# V-Model Workspace

This repository is managed by the **V-Model Pipeline 2** delivery agents.

- `src/` — generated implementation code (one feature per file/module)
- `tests/unit/<featureId>/` — unit tests
- `tests/integration/<featureId>/` — integration tests
- `tests/system/<featureId>/` — end-to-end system tests
- `scripts/build.js` — syntax-checks every `.js` file in `src/`
- `package.json` — defines `npm run build` and `npm test` commands the pipeline calls

Do not edit by hand while the pipeline is running.
