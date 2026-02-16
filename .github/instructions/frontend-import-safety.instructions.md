---
applyTo: "src/**/*.ts,src/**/*.tsx"
---

# Frontend Import Safety (Required)

For changes under `src/**`, treat import correctness as a blocking requirement.

Always validate:

- Every imported path exists and resolves correctly.
- All imported symbols exist in the target module.
- Default imports are only used for default exports; named imports for named exports.
- Components used in route declarations are imported and exist.
- Renamed/moved components have all references updated.
- Dynamic import paths and exports are valid.

Before concluding PR work, run:

1. `npm run lint`
2. `npm run typecheck`
3. `npm run build`

If any import-related issue appears, fix it in the same PR.
