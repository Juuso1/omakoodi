# Changelog

All notable changes to the Varbase News Base recipe are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.4] - 2026-10-11
### Changed
- Stop the functional testing CI job hiding composer failures: `composer require` is retried up to five times and then fails the job, and the separate `composer install` step is gone
  ([#3630066](https://www.drupal.org/i/3630066)).
- Pin the `drupal/varbase_components` dependency to `~4.0.0` for the release.
- Pin the `drupal/varbase_content_base` dependency to `~1.0.0` for the release.
- Pin the `drupal/varbase_media_base` dependency to `~1.0.0` for the release.
- Pin the `drupal/varbase_seo_base` dependency to `~1.0.0` for the release.
- Pin the `drupal/varbase_workflow_base` dependency to `~1.0.0` for the release.
- Update the version badge to `1.0.4` in `README.md`.

## [1.0.3] - 2026-10-11
### Changed
- Remove the temporary CI-only `twig/twig:<3.30` pin. Drupal core 11.4.8, 11.3.18 and 10.6.18 fixed the Twig 3.30 render error, so CI builds on the current Twig again
  ([#3629826](https://www.drupal.org/i/3629826)).
- Fix `yarn install` in CI now that Varbase Project 11.0.x-dev ships no `yarn.lock`: CI creates an empty one first, so Yarn does not take this recipe's `package.json` as the project root
  ([#3630030](https://www.drupal.org/i/3630030)).
- Pin the `drupal/varbase_components` dependency to `~4.0.0` for the release.
- Pin the `drupal/varbase_content_base` dependency to `~1.0.0` for the release.
- Pin the `drupal/varbase_media_base` dependency to `~1.0.0` for the release.
- Pin the `drupal/varbase_seo_base` dependency to `~1.0.0` for the release.
- Pin the `drupal/varbase_workflow_base` dependency to `~1.0.0` for the release.
- Update the version badge to `1.0.3` in `README.md`.

## [1.0.2] - 2026-09-26
### Changed
- Update `@vardot/varbase-e2e` to 2.0.7, and keep the functional testing suite green by building CI on Twig 3.29 until a Twig release compatible with Drupal core is out
  ([#3625773](https://www.drupal.org/i/3625773)).
- Pin the `drupal/varbase_components` dependency to `~4.0.0` for the release.
- Pin the `drupal/varbase_content_base` dependency to `~1.0.0` for the release.
- Pin the `drupal/varbase_media_base` dependency to `~1.0.0` for the release.
- Pin the `drupal/varbase_seo_base` dependency to `~1.0.0` for the release.
- Pin the `drupal/varbase_workflow_base` dependency to `~1.0.0` for the release.
- Update the version badge to `1.0.2` in `README.md`.

## [1.0.1] - 2026-09-08
### Changed
- Move the Varbase functional testing suite dependency to `^2.0.4`, the release published today. See [#3621415](https://www.drupal.org/i/3621415).
- Set the recipe version to `1.0.1` and update the version badge in `README.md`.
- Pin the five sibling dependencies to their stable released constraints for the release:
  `varbase_components` `~4.0.0`, `varbase_content_base` `~1.0.0`, `varbase_media_base` `~1.0.0`,
  `varbase_seo_base` `~1.0.0`, `varbase_workflow_base` `~1.0.0`.

## [1.0.0] - 2026-09-06
### Changed
- Release Varbase News Base 1.0.0, the first stable release on the 1.0.x line.
- Pin the five sibling dependencies to their stable released constraints:
  `varbase_components` `~4.0.0`, `varbase_content_base` `~1.0.0`,
  `varbase_media_base` `~1.0.0`, `varbase_seo_base` `~1.0.0`,
  `varbase_workflow_base` `~1.0.0`.
- Update the version badge to `1.0.0` in `README.md`.

## [1.0.0-beta1] - 2026-09-02
### Changed
- Update `@vardot/varbase-e2e` to the latest 2.x.
- Pin the five sibling recipe dependencies to their released constraints:
  `varbase_components` `~4.0.0`, `varbase_content_base` `~1.0.0`,
  `varbase_media_base` `~1.0.0`, `varbase_seo_base` `~1.0.0`,
  `varbase_workflow_base` `~1.0.0`.
- Update the version badge to `1.0.0-beta1` in `README.md`.
### Fixed
- Correct the CI comment that described the removed `drupal-libraries` yarn sync.

## [1.0.0-alpha2] - 2026-08-13
### Added
- Add a Featured news posts block display to the News view: a `featured` block display on
  `views.view.news` rendering the two latest news posts in the `featured_card_medium` view mode, in
  a single column, with base theme (`vartheme_bs5:`) component ids so any consumer can place it.
### Fixed
- Correct invalid `card-featured` prop values so the news featured cards render. All five
  `canvas.content_template.node.news.featured_card_*` templates shipped prop values the
  `card-featured` component does not allow — `content_vertical_alignment:
  justify-content-center`, which is not in the `align-items-start` / `align-items-center` /
  `align-items-end` enumeration, and `columns_sm_size: 0408` instead of `'04_08'` — so every
  featured-card view mode rendered a Twig error instead of a card.
### Changed
- Match the Figma design in the `featured_card_medium` template: the date moves above the title,
  the title uses `text_size: h5`, and the date uses `size: fs-6` with `text_color: text-muted`.
- Switch the Varbase functional testing suite to Varbase E2E.
- Update the version badge to `1.0.0-alpha2` in `README.md`.

## [1.0.0-alpha1] - 2026-08-09
### Added
- Initial release of the Varbase News Base recipe: a News content type (Title, Description,
  Featured Image, Content, Tags, News Categories), SEO fields (SEO Title/Description/Image, Yoast
  SEO analysis), a News views listing with Better Exposed Filters (All News Posts, Latest News
  Posts block, Related News Posts block, RSS feed), Card/Default view modes, Drupal Canvas
  templates, pathauto URL patterns, and editorial workflow integration.
- Add a `/news` listing page to the News view: a Views `page_1` page display at path `news`, based
  on the `All news posts` block, that renders the news cards grid, the Search-by-keyword / Type /
  Industry exposed filters inline (`exposed_block: false`) and the full 12-per-page pager. The
  listing is now available out of the box and functionally testable, without a site template
  having to place the listing block on a page.
### Changed
- Update Drupal Core to `~11.4.0`.
- Pin the `drupal/varbase_components`, `drupal/varbase_content_base`, `drupal/varbase_media_base`,
  `drupal/varbase_seo_base`, and `drupal/varbase_workflow_base` dependencies to real released
  constraints (`~4.0.0` / `~1.0.0`).
- Update the version badge to `1.0.0-alpha1` in `README.md`.

[Unreleased]: https://git.drupalcode.org/project/varbase_news_base/-/compare/1.0.4...1.0.x
[1.0.4]: https://git.drupalcode.org/project/varbase_news_base/-/compare/1.0.3...1.0.4
[1.0.3]: https://git.drupalcode.org/project/varbase_news_base/-/compare/1.0.2...1.0.3
[1.0.2]: https://git.drupalcode.org/project/varbase_news_base/-/compare/1.0.1...1.0.2
[1.0.1]: https://git.drupalcode.org/project/varbase_news_base/-/compare/1.0.0...1.0.1
[1.0.0]: https://git.drupalcode.org/project/varbase_news_base/-/compare/1.0.0-beta1...1.0.0
[1.0.0-beta1]: https://git.drupalcode.org/project/varbase_news_base/-/compare/1.0.0-alpha2...1.0.0-beta1
[1.0.0-alpha2]: https://git.drupalcode.org/project/varbase_news_base/-/compare/1.0.0-alpha1...1.0.0-alpha2
[1.0.0-alpha1]: https://git.drupalcode.org/project/varbase_news_base/-/tags/1.0.0-alpha1
