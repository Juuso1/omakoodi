# Changelog

All notable changes to the Varbase Content Base recipe are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.4] - 2026-10-10
### Changed
- Update the Tagify module from `~1` to `~2`, so every Varbase line uses Tagify 2
  ([#3629838](https://www.drupal.org/i/3629838)).
- Pin the `drupal/varbase_components` dependency to `~4.0.0` for the release.
- Update the version badge to `1.0.4` in `README.md`.

## [1.0.3] - 2026-10-09
### Fixed
- Allow Tagify 2, and carry the content basics from the removed
  `drupal_cms_content_type_base` recipe ([#3629373](https://www.drupal.org/i/3629373)).
- Let editors see My drafts and Scheduled, and list Varbase workflow drafts
  ([#3629373](https://www.drupal.org/i/3629373)).
### Changed
- Pin the `drupal/varbase_components` dependency to `~4.0.0` for the release.
- Update the version badge to `1.0.3` in `README.md`.

## [1.0.2] - 2026-09-26
### Changed
- Update `@vardot/varbase-e2e` to 2.0.7
  ([#3625758](https://www.drupal.org/i/3625758)).
- Pin the `drupal/varbase_components` dependency to `~4.0.0` for the release.
- Update the version badge to `1.0.2` in `README.md`.

## [1.0.1] - 2026-09-08
### Fixed
- Temporarily remove Entity Clone until it has a stable release
  ([#3621450](https://www.drupal.org/i/3621450)).
- Temporarily remove Rabbit Hole and Advanced Text Formatter until they have stable
  releases ([#3621492](https://www.drupal.org/i/3621492)).
- Require the released View Modes Inventory 5.0.0 instead of the dev branch
  ([#3621558](https://www.drupal.org/i/3621558)).
### Changed
- Pin the `drupal/varbase_components` dependency to `~4.0.0` for the release.
- Update the version badge to `1.0.1` in `README.md`.

## [1.0.0] - 2026-09-06
### Changed
- First stable release of the Varbase Content Base recipe.
- Pin the `drupal/vmi` dependency to `~5.0.0` and `drupal/varbase_components` to `~4.0.0`
  for the stable release.
- Update the version badge to `1.0.0` in `README.md`.

## [1.0.0-rc4] - 2026-09-02
### Added
- Require the `vardot/aos` library, so the recipe brings the AOS library that
  Varbase Components loads.

### Fixed
- Remove the `edit canvas global regions` permission from the Site Admin role,
  as it is stripped with a warning on a Drupal CMS base.

### Changed
- Pin the `drupal/varbase_components` dependency to `~4.0.0` and `drupal/vmi` to `~5.0.0`
  for the release.
- Update the version badge to `1.0.0-rc4` in `README.md`.

## [1.0.0-rc3] - 2026-09-02
### Added
- Add the `search_index` view mode for nodes (`core.entity_view_mode.node.search_index`),
  which the `drupal_cms_search` recipe imports but does not ship. With Search applied
  after this recipe, creating the view mode here is the correct ordering.

### Changed
- Pin the `drupal/varbase_components` dependency to `~4.0.0` and `drupal/vmi` to `~5.0.0`
  for the release.
- Update the version badge to `1.0.0-rc3` in `README.md`.

## [1.0.0-rc2] - 2026-09-01
### Changed
- Remove the `canvas_override` install and its `drupal/canvas_override` requirement,
  as we moved them to the new `varbase_canvas_base` recipe. The Drupal Canvas
  permission grants stay here, so the roles are unchanged for every site that
  applies this recipe.
- Pin the `drupal/varbase_components` dependency to `~4.0.0` and `drupal/vmi` to `~5.0.0`
  for the release.
- Update the version badge to `1.0.0-rc2` in `README.md`.

## [1.0.0-rc1] - 2026-08-15
### Changed
- Pin the `drupal/varbase_components` to `~4.0.0`, `drupal/canvas_override` to `~1.0.0`, `drupal/vmi` to `~5.0.0` dependencies for the release.
- Update the version badge to `1.0.0-rc1` in `README.md`.

## [1.0.0-beta1] - 2026-07-09
### Changed
- Update Drupal Core from ~11.3.0 to ~11.4.0 in the Varbase Content Base recipe.
- Pin the `drupal/varbase_components` dependency to `~4.0.0`, `drupal/canvas_override` to `~1.0.0`, and `drupal/vmi` to `~5.0.0`.
- Update the version badge to `1.0.0-beta1` in `README.md`.
- Run CI on tag pushes and add the README pipeline and release badges.

## [1.0.0-alpha2] - 2026-06-21
### Changed
- Maintenance and dependency updates for the Varbase Content Base recipe.

## [1.0.0-alpha1]
### Added
- Initial release of the Varbase Content Base recipe.

[Unreleased]: https://git.drupalcode.org/project/varbase_content_base/-/compare/1.0.4...1.0.x
[1.0.4]: https://git.drupalcode.org/project/varbase_content_base/-/compare/1.0.3...1.0.4
[1.0.3]: https://git.drupalcode.org/project/varbase_content_base/-/compare/1.0.2...1.0.3
[1.0.2]: https://git.drupalcode.org/project/varbase_content_base/-/compare/1.0.1...1.0.2
[1.0.1]: https://git.drupalcode.org/project/varbase_content_base/-/compare/1.0.0...1.0.1
[1.0.0]: https://git.drupalcode.org/project/varbase_content_base/-/compare/1.0.0-rc4...1.0.0
[1.0.0-rc4]: https://git.drupalcode.org/project/varbase_content_base/-/compare/1.0.0-rc3...1.0.0-rc4
[1.0.0-rc3]: https://git.drupalcode.org/project/varbase_content_base/-/compare/1.0.0-rc2...1.0.0-rc3
[1.0.0-rc2]: https://git.drupalcode.org/project/varbase_content_base/-/compare/1.0.0-rc1...1.0.0-rc2
[1.0.0-rc1]: https://git.drupalcode.org/project/varbase_content_base/-/compare/1.0.0-beta1...1.0.0-rc1
[1.0.0-beta1]: https://git.drupalcode.org/project/varbase_content_base/-/compare/1.0.0-alpha2...1.0.0-beta1
[1.0.0-alpha2]: https://git.drupalcode.org/project/varbase_content_base/-/compare/1.0.0-alpha1...1.0.0-alpha2
[1.0.0-alpha1]: https://git.drupalcode.org/project/varbase_content_base/-/tags/1.0.0-alpha1
