# Glyphor Fuse Template Copilot Instructions

This repository is the template source for Glyphor projects. Changes here affect many generated apps, so prioritize deploy safety and import correctness.

## Stack and structure

- Frontend: React + Vite + TypeScript in `src/`
- Routing: `react-router-dom` with routes defined in `src/App.tsx`
- Shared alias: `@/*` -> `src/*`
- Deploy target: Vercel (`vercel.json`)

## Required PR validation (frontend changes)

For PRs touching `src/**`, run all commands before finalizing:

1. `npm ci`
2. `npm run lint`
3. `npm run typecheck`
4. `npm run build`

If any command fails, fix the issue before marking the PR complete.

## Import integrity is blocking

Missing or incorrect component imports are release-blocking defects, even when lint/build look green.

Always verify:

- Every referenced component/symbol is imported.
- Import paths resolve to real files, including `@/` aliases.
- Named vs default imports match module exports.
- Route components used in `src/App.tsx` are valid imports and existing files.
- Dynamic imports reference real modules and expected exports.
- Renames/moves update all call sites and any re-export files.

If a referenced component is missing, either:

- add the component with the expected export, or
- update usage to an existing component while preserving behavior.

Never leave unresolved imports in merged code.

## Agent behavior

- Prefer deterministic fixes over broad refactors.
- Fix import and route breakages before style-only edits.
- Explicitly report that import-integrity checks were run when PRs include component changes.
- Do not assume passing lint/build alone guarantees runtime rendering correctness.

## Security

- Never hardcode secrets or tokens.
- Use environment variables for all sensitive values.
