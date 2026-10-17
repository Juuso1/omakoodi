# Changelog

All notable changes to the Varbase Editor Base recipe are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.1] - 2026-10-09
### Fixed
- Ship the `content_format` and Canvas text formats, their editors and the Linkit profile in the recipe instead of relying on
  `drupal_cms_content_type_base`, which Drupal CMS 2.2 removed ([#3629374](https://www.drupal.org/i/3629374)).
### Changed
- Update the version badge to `1.0.1` in `README.md`.

## [1.0.0] - 2026-09-06
### Changed
- Release the stable Varbase Editor Base 1.0.0 recipe with the Varbase 11.0.0 suite. No functional changes since 1.0.0-rc2.
- Update the version badge to `1.0.0` in `README.md`.

## [1.0.0-rc2] - 2026-09-02
### Added
- Require the `vardot/ckeditor5-media-embed-drupal` library at `~47.6.2`, the GPL-licensed
  release that Drupal core 11.4 bundles, so the recipe brings the CKEditor 5 Media embed
  plugin `drupal/ckeditor_media_embed` loads.
### Changed
- Update the version badge to `1.0.0-rc2` in `README.md`.

## [1.0.0-rc1] - 2026-08-15
### Changed
- Release the recipe with the Varbase 11.0.0-rc1 suite. No functional changes since 1.0.0-beta4.
- Update the version badge to `1.0.0-rc1` in `README.md`.

## [1.0.0-beta4] - 2026-07-30
### Changed
- Switch back to `drupal/ckeditor_media_resize` `~1.1.0` now that upstream 1.1.1 supports Drupal `~11.4.0`, replacing the `vardot/ckeditor_media_resize` `~2.0.0` fork ([#3613947](https://www.drupal.org/i/3613947)).
- Update the version badge to `1.0.0-beta4` in `README.md`.

## [1.0.0-beta3] - 2026-07-20
### Changed
- Swap the CKEditor Media Resize dependency to the Vardot fork `vardot/ckeditor_media_resize` `~2.0.0` (replacing `drupal/ckeditor_media_resize` `~1.1.0`) for Drupal core 11.4 support; the fork `replace`s `drupal/ckeditor_media_resize` and declares core `^11.2`, removing the need for `mglaman/composer-drupal-lenient` ([#3612057](https://www.drupal.org/i/3612057)).
- Update the version badge to `1.0.0-beta3` in `README.md`.

## [1.0.0-beta2] - 2026-07-17
### Changed
- Update the CKEditor Media Resize constraint from `~1` to `~1.1.0` so plugin-less Composer solves cannot fall back to 1.0.0, which lacks Drupal core ~11.4 support ([#3611491](https://www.drupal.org/i/3611491)).
- Update the version badge to `1.0.0-beta2` in `README.md`.

## [1.0.0-beta1] - 2026-07-09
### Changed
- Update Drupal Core from ~11.3.0 to ~11.4.0 in the Varbase Editor Base recipe.
- Update the version badge to `1.0.0-beta1` in `README.md`.
- Run CI on tag pushes and add the README pipeline and release badges.

## [1.0.0-alpha2] - 2026-06-21
### Changed
- Maintenance and dependency updates for the Varbase Editor Base recipe.

## [1.0.0-alpha1]
### Added
- Initial release of the Varbase Editor Base recipe.

[Unreleased]: https://git.drupalcode.org/project/varbase_editor_base/-/compare/1.0.1...1.0.x
[1.0.1]: https://git.drupalcode.org/project/varbase_editor_base/-/compare/1.0.0...1.0.1
[1.0.0]: https://git.drupalcode.org/project/varbase_editor_base/-/compare/1.0.0-rc2...1.0.0
[1.0.0-rc2]: https://git.drupalcode.org/project/varbase_editor_base/-/compare/1.0.0-rc1...1.0.0-rc2
[1.0.0-rc1]: https://git.drupalcode.org/project/varbase_editor_base/-/compare/1.0.0-beta4...1.0.0-rc1
[1.0.0-beta4]: https://git.drupalcode.org/project/varbase_editor_base/-/compare/1.0.0-beta3...1.0.0-beta4
[1.0.0-beta3]: https://git.drupalcode.org/project/varbase_editor_base/-/compare/1.0.0-beta2...1.0.0-beta3
[1.0.0-beta2]: https://git.drupalcode.org/project/varbase_editor_base/-/compare/1.0.0-beta1...1.0.0-beta2
[1.0.0-beta1]: https://git.drupalcode.org/project/varbase_editor_base/-/compare/1.0.0-alpha2...1.0.0-beta1
[1.0.0-alpha2]: https://git.drupalcode.org/project/varbase_editor_base/-/compare/1.0.0-alpha1...1.0.0-alpha2
[1.0.0-alpha1]: https://git.drupalcode.org/project/varbase_editor_base/-/tags/1.0.0-alpha1
