# 01-eca-workflow-modeler — ECA Workflow Modeler (recipe isolation)

Varbase functional testing suite for the Varbase Content Base recipe's ECA editor
swap: BPMN.iO was replaced by the Workflow Modeler (`drupal/modeler`).

These are **isolation** acceptance tests. When only this recipe plus its own
dependencies are applied on a plain Drupal site, the Workflow Modeler is the
**only** ECA editor present (BPMN.iO is never pulled in). The scenarios therefore
assert the fully-swapped state, unlike the coexistence-safe suite that ships with
the full Varbase project template (where both editors are installed).

Varbase functional testing (Playwright + Cucumber-js). Every browser assertion uses
functional-testing built-in steps; five custom steps (login + four recipe-contract state
checks) live in `tests/step-definitions/eca-workflow-modeler.steps.js`.

Run locally against a running site:

```bash
LAUNCH_URL="https://your-site.example" npm run test:chromium
```

The recipe's opt-in `.gitlab-ci.yml` browser job builds a plain Drupal site,
applies this recipe in isolation, and runs this folder.

## Features

| Feature file | Description | Scenarios |
| --- | --- | --- |
| `01-01-workflow-modeler-is-the-editor.feature` | ECA Workflow Modeler - the Workflow Modeler is the ECA editor | 2 |
| `01-02-shipped-model-opens-in-modeler.feature` | ECA Workflow Modeler - the shipped model opens in the Workflow Modeler | 1 |
| `01-03-bpmn-io-is-fully-swapped-out.feature` | ECA Workflow Modeler - BPMN.iO is fully swapped out | 3 |

**Total: 6 scenarios across 3 feature files.**

## What each scenario proves

1. Adding a new ECA model resolves straight to the Workflow Modeler add form
   (`/admin/config/workflow/eca/add` → `/add/workflow_modeler`), the single editor.
2. The shipped `redirect_403_to_login` model opens in the Workflow Modeler and
   renders its React Flow nodes with zero JavaScript errors (`@js-fail`).
3. `modeler` + `modeler_api` + `eca` + `eca_ui` are enabled and `bpmn_io` is not;
   no configuration object name contains `bpmn`; both shipped ECA models are
   tagged `modeler_id: workflow_modeler`.
