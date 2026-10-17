'use strict';

// -----------------------------------------------------------------------------
// Custom steps for the Varbase Content Base recipe's 01-eca-workflow-modeler
// suite (ECA editor swap: BPMN.iO -> Workflow Modeler).
//
// The recipe is tested IN ISOLATION: only this recipe plus its own dependencies
// are applied on a plain Drupal site, so the Workflow Modeler is the ONLY ECA
// editor present (BPMN.iO is never pulled in). These scenarios therefore assert
// the fully-swapped state.
//
// Every browser assertion reuses the functional-testing built-in visible-behaviour steps.
// The five custom steps below have no functional-testing / core equivalent, because they
// prove the recipe CONTRACT (which modules the recipe enables, that it ships no
// BPMN.iO config, and how its model is tagged) and log in an administrator:
//
//   - Given I am logged in as the administrator
//   - Then the "<module>" module should be enabled
//   - Then the "<module>" module should not be enabled
//   - Then no configuration object name should contain "<needle>"
//   - Then the ECA model "<id>" should be tagged with the modeler id "<modeler_id>"
//
// The three "state" assertions drive the site through drush. Drush is resolved
// for the environment (no site path or hostname is hardcoded):
//   1. VARBASE_E2E_DRUSH env var (explicit override, e.g. the recipe CI job), or
//   2. DDEV project (DDEV_PROJECT_DIR with a .ddev dir)   -> `ddev drush ...`, or
//   3. Composer project bin/drush / vendor/bin/drush      -> `<bin> --root=<web> ...`, or
//   4. `drush` on PATH.
// -----------------------------------------------------------------------------

const fs = require('fs');
const path = require('path');
const { Given, Then } = require('@cucumber/cucumber');
const { execFileSync } = require('child_process');
const { smartSettle, friendly } = require('@vardot/varbase-e2e/tests/step-definitions/varbase-e2e');

/**
 * Resolve the drush command vector for the current environment.
 * @returns {{cmd: string, base: string[], cwd: string}}
 */
function resolveDrush() {
  // 1. Explicit override, e.g. VARBASE_E2E_DRUSH="ddev drush" or "php vendor/bin/drush".
  if (process.env.VARBASE_E2E_DRUSH) {
    const parts = process.env.VARBASE_E2E_DRUSH.trim().split(/\s+/);
    return { cmd: parts[0], base: parts.slice(1), cwd: process.cwd() };
  }
  // 2. Local DDEV project.
  const ddevDir = process.env.DDEV_PROJECT_DIR;
  if (ddevDir && fs.existsSync(path.join(ddevDir, '.ddev'))) {
    return { cmd: 'ddev', base: ['drush'], cwd: ddevDir };
  }
  // 3. Composer project bin/drush or vendor/bin/drush.
  const projectDir = process.env.CI_PROJECT_DIR || process.cwd();
  const webRoot = process.env._WEB_ROOT || 'web';
  for (const rel of [['bin', 'drush'], ['vendor', 'bin', 'drush']]) {
    const bin = path.join(projectDir, ...rel);
    if (fs.existsSync(bin)) {
      return { cmd: bin, base: [`--root=${path.join(projectDir, webRoot)}`], cwd: projectDir };
    }
  }
  // 4. Fallback: drush on PATH.
  return { cmd: 'drush', base: [], cwd: process.cwd() };
}

/**
 * Run drush with the given argument vector and return trimmed stdout.
 * Uses execFileSync (no shell), so PHP passed to `eval` is never expanded by
 * the host shell.
 * @param {string[]} args - drush argument vector.
 * @returns {string}
 */
function drush(args) {
  const { cmd, base, cwd } = resolveDrush();
  try {
    return execFileSync(cmd, [...base, ...args], {
      cwd,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    }).trim();
  } catch (error) {
    throw friendly({
      action: `run drush (${cmd} ${base.join(' ')} ${args.join(' ')})`,
      hint: 'Set VARBASE_E2E_DRUSH, run inside DDEV (DDEV_PROJECT_DIR), or ensure bin/drush exists.',
      cause: (error && error.stderr) ? String(error.stderr) : (error && error.message),
    });
  }
}

/**
 * Log in as the site administrator (user 1) via a one-time login link. Uses
 * `drush uli` scoped to the current launchUrl, then navigates to the returned
 * link so the browser context holds an authenticated admin session. Keeps
 * credentials out of the feature file and works on any environment (DDEV, CI).
 *
 * Example #1: Given I am logged in as the administrator
 * Example #2: Given I am logged in as the administrator
 *               When I go to "/admin/config/workflow/eca/add"
 * Example #3: Given I am logged in as the administrator
 *               When I go to "/admin/config/workflow/eca/redirect_403_to_login/edit_with/workflow_modeler"
 * Example #4: Given we are logged in as the administrator
 * Example #5: Given I am logged in as the administrator
 *               Then I should see "webmaster"
 */
Given(/^(?:I |we )*am logged in as the administrator$/, async function () {
  const link = drush(['uli', '--uri', this.launchUrl]).split(/\s+/).pop();
  if (!link || !/^https?:\/\//.test(link)) {
    throw friendly({
      action: 'log in as the administrator',
      target: 'drush uli',
      hint: 'drush uli did not return a usable one-time login URL.',
      cause: String(link),
    });
  }
  await this.page.goto(link, { waitUntil: 'domcontentloaded' });
  await smartSettle(this.page, 1500);
});

/**
 * Assert that a Drupal module IS enabled (installed) on the site under test.
 * Proves the recipe's `install:` list took effect. Paired in scenarios with a
 * negative check on the retired editor, so the assertion is never naked.
 *
 * Example #1: Then the "modeler" module should be enabled
 * Example #2: Then the "modeler_api" module should be enabled
 * Example #3: And the "eca" module should be enabled
 * Example #4: Then the "eca_ui" module should be enabled
 * Example #5: And the "node" module should be enabled
 */
Then(/^the "([^"]*)" module should be enabled$/, function (module) {
  const safe = String(module).replace(/[^a-z0-9_]/gi, '');
  const out = drush(['php:eval', `echo \\Drupal::moduleHandler()->moduleExists('${safe}') ? '1' : '0';`]);
  if (out.trim() !== '1') {
    throw friendly({
      action: 'confirm module state',
      target: `the "${module}" module`,
      hint: `The "${module}" module is expected to be enabled but it is not.`,
      cause: `drush reported "${out}".`,
    });
  }
});

/**
 * Assert that a Drupal module is NOT enabled on the site under test. Proves the
 * retired BPMN.iO editor is gone once the recipe is applied. Always paired with
 * a positive "should be enabled" check on the Workflow Modeler stack.
 *
 * Example #1: Then the "bpmn_io" module should not be enabled
 * Example #2: And the "bpmn_io" module should not be enabled
 * Example #3: Then the "modeler" module should be enabled
 *               And the "bpmn_io" module should not be enabled
 * Example #4: Then the "bpmn" module should not be enabled
 * Example #5: And the "bpmn_io" module should not be enabled
 */
Then(/^the "([^"]*)" module should not be enabled$/, function (module) {
  const safe = String(module).replace(/[^a-z0-9_]/gi, '');
  const out = drush(['php:eval', `echo \\Drupal::moduleHandler()->moduleExists('${safe}') ? '1' : '0';`]);
  if (out.trim() !== '0') {
    throw friendly({
      action: 'confirm module state',
      target: `the "${module}" module`,
      hint: `The "${module}" module is expected to NOT be enabled but it is.`,
      cause: `drush reported "${out}".`,
    });
  }
});

/**
 * Assert that no active configuration object NAME contains the given substring
 * (case-insensitive). Used to prove the recipe ships zero BPMN.iO config after
 * the swap. Self-guarding: it also confirms the config store is populated (total
 * > 0) so the check can never pass vacuously on an empty/broken listing.
 *
 * Example #1: Then no configuration object name should contain "bpmn"
 * Example #2: Then no configuration object name should contain "bpmn_io"
 * Example #3: And no configuration object name should contain "bpmn"
 * Example #4: Then no configuration object name should contain "bpmn-io"
 * Example #5: Then no configuration object name should contain "bpmn"
 */
Then(/^no configuration object name should contain "([^"]*)"$/, function (needle) {
  const safe = String(needle).replace(/'/g, '');
  const php =
    `$all = \\Drupal::configFactory()->listAll(); ` +
    `$hits = array_values(array_filter($all, fn($n) => stripos($n, '${safe}') !== false)); ` +
    `print count($all) . '|' . implode(',', $hits);`;
  const out = drush(['php:eval', php]);
  const [totalRaw, hitsRaw = ''] = out.split('|');
  const total = parseInt(totalRaw, 10) || 0;
  const hits = hitsRaw.split(',').filter(Boolean);
  if (total === 0) {
    throw friendly({
      action: 'read configuration',
      target: 'the active configuration store',
      hint: 'Confirm the recipe was applied on the site under test.',
      cause: 'No configuration objects were found at all, so the check would pass vacuously.',
    });
  }
  if (hits.length > 0) {
    throw friendly({
      action: 'confirm no leftover config for',
      target: `"${needle}"`,
      hint: `${hits.length} configuration object(s) contain "${needle}" (out of ${total}).`,
      cause: hits.join(', '),
    });
  }
});

/**
 * Assert that a shipped ECA model is tagged for a given modeler (its
 * modeler_api.modeler_id third-party setting). Proves the recipe's model is
 * authored for the Workflow Modeler rather than the retired BPMN.iO editor.
 *
 * Example #1: Then the ECA model "redirect_403_to_login" should be tagged with the modeler id "workflow_modeler"
 * Example #2: Then the ECA model "enable_full_view_mode_node_type" should be tagged with the modeler id "workflow_modeler"
 * Example #3: And the ECA model "redirect_403_to_login" should be tagged with the modeler id "workflow_modeler"
 * Example #4: Then the ECA model "redirect_403_to_login" should be tagged with the modeler id "workflow_modeler"
 * Example #5: Then the ECA model "enable_full_view_mode_node_type" should be tagged with the modeler id "workflow_modeler"
 */
Then(/^the ECA model "([^"]*)" should be tagged with the modeler id "([^"]*)"$/, function (id, modelerId) {
  const safeId = String(id).replace(/[^a-z0-9_]/gi, '');
  const php =
    `$e = \\Drupal::entityTypeManager()->getStorage('eca')->load('${safeId}'); ` +
    `print $e ? (string) $e->getThirdPartySetting('modeler_api', 'modeler_id') : '__MISSING__';`;
  const out = drush(['php:eval', php]).trim();
  if (out === '__MISSING__') {
    throw friendly({
      action: 'load the ECA model',
      target: `"${id}"`,
      hint: 'Confirm the recipe shipped and applied this model.',
      cause: `No ECA model with the id "${id}" exists on the site under test.`,
    });
  }
  if (out !== modelerId) {
    throw friendly({
      action: 'confirm the model modeler id for',
      target: `"${id}"`,
      hint: `The ECA model "${id}" is tagged "${out}", expected "${modelerId}".`,
      cause: out,
    });
  }
});
