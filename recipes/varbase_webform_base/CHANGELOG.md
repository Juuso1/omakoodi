# Changelog

All notable changes to the Varbase Webform Base recipe are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.2] - 2026-09-14
### Fixed
- Newsletter Subscribe: the email field now matches the height of the Subscribe
  button beside it. [#3622822](https://www.drupal.org/i/3622822)
- Newsletter Subscribe: the email field height now also matches on themes whose
  buttons are taller than the Bootstrap default.
  [#3622846](https://www.drupal.org/i/3622846)

## [1.0.1] - 2026-09-13
### Fixed
- Business Contact webform: the Phone number field rejected every valid national
  number. Added `data-options: '{"separateDialCode": true}'` to the `phone`
  element and replaced the invalid `000 000-0000` placeholder with
  `(202) 555-0123`.
- Business Contact webform: the consent checkbox was `#disabled`, so it could
  neither be acted on nor enforced. Removed `#disabled` and added `#required`;
  the pre-checked `#default_value` is unchanged.

### Changed
- Set the recipe version to `1.0.1` in `composer.json`.
- Update the version badge to `1.0.1` in `README.md`.

## [1.0.0] - 2026-09-06
### Changed
- Promote the Varbase Webform Base recipe to the stable `1.0.0` release.
- Update the version badge to `1.0.0` in `README.md`.

## [1.0.0-rc1] - 2026-08-15
### Changed
- Update the version badge to `1.0.0-rc1` in `README.md`.

## [1.0.0-beta1] - 2026-07-09
### Changed
- Update Drupal Core from ~11.3.0 to ~11.4.0 in the Varbase Webform Base recipe.
- Update the version badge to `1.0.0-beta1` in `README.md`.
- Run CI on tag pushes and add the README pipeline and release badges.

## [1.0.0-alpha2] - 2026-06-21
### Changed
- Maintenance and dependency updates for the Varbase Webform Base recipe.

## [1.0.0-alpha1]
### Added
- Initial release of the Varbase Webform Base recipe.

[Unreleased]: https://git.drupalcode.org/project/varbase_webform_base/-/compare/1.0.1...1.0.x
[1.0.1]: https://git.drupalcode.org/project/varbase_webform_base/-/compare/1.0.0...1.0.1
[1.0.0]: https://git.drupalcode.org/project/varbase_webform_base/-/compare/1.0.0-rc1...1.0.0
[1.0.0-rc1]: https://git.drupalcode.org/project/varbase_webform_base/-/compare/1.0.0-beta1...1.0.0-rc1
[1.0.0-beta1]: https://git.drupalcode.org/project/varbase_webform_base/-/compare/1.0.0-alpha2...1.0.0-beta1
[1.0.0-alpha2]: https://git.drupalcode.org/project/varbase_webform_base/-/compare/1.0.0-alpha1...1.0.0-alpha2
[1.0.0-alpha1]: https://git.drupalcode.org/project/varbase_webform_base/-/tags/1.0.0-alpha1
