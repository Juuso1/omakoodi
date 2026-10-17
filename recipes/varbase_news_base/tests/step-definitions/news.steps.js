'use strict';

const { When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

const { smartSettle, friendly } = require('@vardot/varbase-e2e/tests/step-definitions/varbase-e2e');

// -----------------------------------------------------------------------------
// Custom steps for the Varbase News Base recipe.
//
// The News post content type ships a "Featured image" media_library widget (an
// AJAX modal media picker) the generic varbase-e2e steps cannot drive on their
// own. These steps drive that widget, plus save / edit / delete steps so every
// authoring scenario stays independent and removes what it creates, the "Type"
// (Categories) exposed-filter select on the listing, and the listing result
// summary assertion.
//
// The Title, Description and Categories fields are driven by the generic
// varbase-e2e form steps ("I fill in ...", "I select ... from ..."), so they are
// not re-implemented here.
//
// SAFETY: state-changing steps click ONLY specific, verified elements (never a
// "first form submit" fallback) and fail fast if the page is not the expected
// News node form, so a mis-navigated run can never submit an unrelated form.
// -----------------------------------------------------------------------------

const budgetOf = (world) => (world.minWaitTime && world.minWaitTime.page) || 8000;

/**
 * Assert the browser is on a News node add/edit form before a write.
 */
async function assertOnNewsForm(page) {
  const url = page.url();
  const onForm = /\/node\/add\/news/.test(url) || /\/node\/\d+\/edit/.test(url);
  const hasTitle = (await page.locator('#edit-title-0-value').count()) > 0;
  if (!onForm || !hasTitle) {
    throw friendly(
      `Expected to be on the News add/edit form, but the current page is "${url}".`,
      'Navigate to /node/add/news (or /node/<id>/edit) before this step.'
    );
  }
}

/**
 * Resolve the node id of the News canonical page currently shown. Reads it from
 * the Edit local-task link (/node/<id>/edit — reliably present for an author),
 * falling back to the shortlink and node body class.
 */
async function currentNewsNid(page) {
  return page.evaluate(() => {
    const editHref = [...document.querySelectorAll('a[href*="/node/"]')]
      .map((a) => a.getAttribute('href'))
      .find((h) => /\/node\/\d+\/(edit|delete)/.test(h));
    if (editHref) return editHref.match(/\/node\/(\d+)\//)[1];
    const sl = document.querySelector('link[rel="shortlink"]');
    if (sl) {
      const m = sl.getAttribute('href').match(/node\/(\d+)/);
      if (m) return m[1];
    }
    const body = document.querySelector('body[class*="page-node-"]');
    if (body) {
      const m = body.className.match(/page-node-(\d+)/);
      if (m) return m[1];
    }
    const el = document.querySelector('[data-history-node-id]');
    if (el) return el.getAttribute('data-history-node-id');
    return null;
  });
}

/**
 * Save the current News node form (clicks ONLY #edit-submit).
 *
 * Guarded: asserts the page is the News form first, and afterwards asserts the
 * browser left the form (a validation error keeps you on the form and fails the
 * step) so a rejected save never passes silently.
 *
 * Example #1: When I save the news post
 * Example #2: And I save the news post
 * Example #3: When we save the news post
 * Example #4: And we save the news post
 * Example #5: Given I save the news post
 */
When(/^(?:I |we )*save the news post$/, async function () {
  await assertOnNewsForm(this.page);
  await this.page.evaluate(() => {
    const el = document.getElementById('edit-submit');
    if (el) el.click();
  });
  await smartSettle(this.page, budgetOf(this));
  const url = this.page.url();
  if (/\/node\/add\/news/.test(url) || /\/node\/\d+\/edit/.test(url)) {
    const errors = await this.page.evaluate(() =>
      [...document.querySelectorAll('.messages--error, [data-drupal-messages] .messages--error')]
        .map((e) => e.textContent.replace(/\s+/g, ' ').trim()).join(' | '));
    throw friendly(
      'Saving the news post did not leave the form — the save was rejected.',
      errors ? `Form errors: ${errors}` : 'Check the required News post fields (Description is required).'
    );
  }
});

/**
 * Add a featured image to the News post from the existing media library.
 *
 * Drives the Featured image media_library widget's real modal: a Playwright
 * click on "Add media" (a synthetic in-page click does not fire Drupal's AJAX),
 * waits for the media library view, selects the first media item and inserts
 * it, then asserts the widget shows the selected item.
 *
 * Example #1: When I add the first available featured image from the media library
 * Example #2: And I add the first available featured image from the media library
 * Example #3: When we add the first available featured image from the media library
 * Example #4: And we add the first available featured image from the media library
 * Example #5: Given I add the first available featured image from the media library
 */
When(/^(?:I |we )*add the first available featured image from the media library$/, async function () {
  await assertOnNewsForm(this.page);
  const budget = budgetOf(this);

  // A real Playwright click fires the Drupal AJAX that opens the modal.
  const openButton = this.page.locator(
    '#edit-field-featured-image-open-button, [data-drupal-selector="edit-field-featured-image-open-button"], .field--name-field-featured-image .media-library-open-button'
  ).first();
  await openButton.waitFor({ state: 'visible', timeout: 20000 });
  await openButton.click();

  // Wait for the media library modal dialog, then its first selectable item.
  await this.page.locator('.media-library-widget-modal, .ui-dialog .media-library-view, [role="dialog"] .media-library-view')
    .first().waitFor({ state: 'visible', timeout: 30000 });
  const firstItem = this.page
    .locator('.media-library-view .js-media-library-item input[type="checkbox"], .media-library-view .media-library-item input[type="checkbox"], .media-library-widget-modal .media-library-item input[type="checkbox"]')
    .first();
  await firstItem.waitFor({ state: 'attached', timeout: 30000 }).catch(() => {
    throw friendly(
      'The media library opened but shows no selectable image to add.',
      'Ensure the site has at least one image media item the author can use.'
    );
  });
  await firstItem.check({ force: true });
  await smartSettle(this.page, budget);

  // Click "Insert selected" in the modal button pane (real click for AJAX).
  const insert = this.page.locator('.ui-dialog-buttonpane button:has-text("Insert selected"), .media-library-widget-modal button:has-text("Insert selected"), [role="dialog"] button:has-text("Insert selected")').first();
  await insert.waitFor({ state: 'visible', timeout: 20000 });
  await insert.click();
  await smartSettle(this.page, budget);

  // The widget should now show the selected media item.
  const selected = this.page.locator('.field--name-field-featured-image .media-library-item, [data-drupal-selector="edit-field-featured-image-selection"] .media-library-item, .media-library-selection .media-library-item').first();
  await selected.waitFor({ state: 'visible', timeout: 20000 }).catch(() => {
    throw friendly('The Featured image widget shows no selected media after inserting.');
  });
});

/**
 * Open the edit form of the News node currently being viewed.
 *
 * Example #1: When I open the edit form for the news post I am viewing
 * Example #2: And I open the edit form for the news post I am viewing
 * Example #3: When we open the edit form for the news post I am viewing
 * Example #4: And we open the edit form for the news post I am viewing
 * Example #5: Given I open the edit form for the news post I am viewing
 */
When(/^(?:I |we )*open the edit form for the news post I am viewing$/, async function () {
  const nid = await currentNewsNid(this.page);
  if (!nid) {
    throw friendly('Could not determine the node id of the news post being viewed.', 'Open the news post full page before editing it.');
  }
  await this.page.goto(`${this.launchUrl.replace(/\/$/, '')}/node/${nid}/edit`, { waitUntil: 'domcontentloaded' });
  await smartSettle(this.page, budgetOf(this));
  await assertOnNewsForm(this.page);
});

/**
 * Delete the News node currently being viewed, through the core delete confirm
 * form (clicks ONLY that form's #edit-submit). Keeps authoring scenarios
 * independent by removing what they create.
 *
 * Example #1: When I delete the news post I am viewing
 * Example #2: And I delete the news post I am viewing
 * Example #3: When we delete the news post I am viewing
 * Example #4: And we delete the news post I am viewing
 * Example #5: Given I delete the news post I am viewing
 */
When(/^(?:I |we )*delete the news post I am viewing$/, async function () {
  const nid = await currentNewsNid(this.page);
  if (!nid) {
    throw friendly('Could not determine the node id of the news post being viewed.', 'Open the news post full page before deleting it.');
  }
  await this.page.goto(`${this.launchUrl.replace(/\/$/, '')}/node/${nid}/delete`, { waitUntil: 'domcontentloaded' });
  const onDelete = /\/node\/\d+\/delete/.test(this.page.url()) && (await this.page.locator('#edit-submit').count()) > 0;
  if (!onDelete) {
    throw friendly(`Expected the node delete confirm form, but got "${this.page.url()}".`);
  }
  await this.page.evaluate(() => {
    const el = document.getElementById('edit-submit');
    if (el) el.click();
  });
  await smartSettle(this.page, budgetOf(this));
});

/**
 * Choose an option in the news listing "Type" (News Categories) exposed filter.
 *
 * The exposed form may render more than one control labelled "Type", so this
 * targets the filter's select by its exposed identifier name (`type`) rather
 * than by label. Follow it with `I press "Apply Filter"` to run the filter.
 *
 * Example #1: When I choose "Announcements" in the news Type filter
 * Example #2: And I choose "Press Releases" in the news Type filter
 * Example #3: When we choose "Announcements" in the news Type filter
 * Example #4: And we choose "Press Releases" in the news Type filter
 * Example #5: Given I choose "Announcements" in the news Type filter
 */
When(/^(?:I |we )*choose "([^"]*)" in the news Type filter$/, async function (label) {
  await this.page.selectOption('select[name="type"]', { label });
  await smartSettle(this.page, budgetOf(this));
});

/**
 * Assert the news listing result summary reports a given "of N" total.
 *
 * The Varbase result summary renders as e.g. "Shown articles: 1-12 of 15", so
 * this asserts the "of N" total in a theme-agnostic way.
 *
 * Example #1: Then the news result summary should show a total of 15
 * Example #2: And the news result summary should show a total of 1
 * Example #3: Then the news result summary should show a total of 8
 * Example #4: And the news result summary should show a total of 12
 * Example #5: Then the news result summary should show a total of 3
 */
Then(/^the news result summary should show a total of (\d+)$/, async function (total) {
  const text = (await this.page.locator('body').textContent()) || '';
  const normalized = text.replace(/\s+/g, ' ');
  const re = new RegExp(`of\\s+${total}\\b`);
  assert.ok(
    re.test(normalized),
    friendly(`Expected the news result summary to report "of ${total}", but it did not.`, 'Check the view result summary (e.g. "Shown articles: 1-12 of 15").')
  );
});
