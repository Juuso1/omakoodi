# Changelog

All notable changes to the Varbase Performance Base recipe are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.1] - 2026-09-08
### Fixed
- Temporarily remove Ultimate Cron until it has a stable release, with its sixteen
  `ultimate_cron.job.*` config files. Cron runs through core Automated Cron, which this
  recipe already configures ([#3621493](https://www.drupal.org/i/3621493)).
### Changed
- Update the version badge to `1.0.1` in `README.md`.

## [1.0.0] - 2026-09-06
### Changed
- Release the first stable Varbase Performance Base recipe with the Varbase 11.0.0 suite. No functional changes since 1.0.0-rc1.
- Update the version badge to `1.0.0` in `README.md`.

## [1.0.0-rc1] - 2026-08-15
### Changed
- Release the recipe with the Varbase 11.0.0-rc1 suite. No functional changes since 1.0.0-beta1.
- Update the version badge to `1.0.0-rc1` in `README.md`.

## [1.0.0-beta1] - 2026-07-09
### Changed
- Update Drupal Core from ~11.3.0 to ~11.4.0 in the Varbase Performance Base recipe.
- Update the version badge to `1.0.0-beta1` in `README.md`.
- Run CI on tag pushes and add the README pipeline and release badges.

## [1.0.0-alpha2] - 2026-06-21
### Changed
- Maintenance and dependency updates for the Varbase Performance Base recipe.

## [1.0.0-alpha1]
### Added
- Initial release of the Varbase Performance Base recipe.

[Unreleased]: https://git.drupalcode.org/project/varbase_performance_base/-/compare/1.0.1...1.0.x
[1.0.1]: https://git.drupalcode.org/project/varbase_performance_base/-/compare/1.0.0...1.0.1
[1.0.0]: https://git.drupalcode.org/project/varbase_performance_base/-/compare/1.0.0-rc1...1.0.0
[1.0.0-rc1]: https://git.drupalcode.org/project/varbase_performance_base/-/compare/1.0.0-beta1...1.0.0-rc1
[1.0.0-beta1]: https://git.drupalcode.org/project/varbase_performance_base/-/compare/1.0.0-alpha2...1.0.0-beta1
[1.0.0-alpha2]: https://git.drupalcode.org/project/varbase_performance_base/-/compare/1.0.0-alpha1...1.0.0-alpha2
[1.0.0-alpha1]: https://git.drupalcode.org/project/varbase_performance_base/-/tags/1.0.0-alpha1
