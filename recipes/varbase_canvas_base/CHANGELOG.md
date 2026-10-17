# Changelog

All notable changes to the Varbase Canvas Base recipe are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.1] - 2026-09-08
### Fixed
- Require the released Canvas Override 1.0.0 instead of the dev branch
  ([#3621562](https://www.drupal.org/i/3621562)).
### Changed
- Update the version badge to `1.0.1` in `README.md`.

## [1.0.0] - 2026-09-06
### Changed
- Set the recipe version to 1.0.0 for the release.
- Pin `drupal/canvas_override` to `~1.0.0`.

## [1.0.0-alpha1] - 2026-09-01
### Added
- Initialize the Varbase Canvas Base recipe. It installs the `canvas` and
  `canvas_override` modules, and nothing else.
- Take over the `canvas_override` install and the `drupal/canvas_override`
  requirement that `varbase_content_base` carried.

### Changed
- Pin `drupal/canvas_override` to `~1.0.0` for the release, matching the
  constraint `varbase_content_base` used before the requirement moved here.

### Notes
- This recipe grants no permissions. The Drupal Canvas page and component library
  grants stay in `varbase_content_base`, where the content roles they belong to
  are defined, so the Vardot site templates that apply that recipe directly keep
  their Canvas permissions unchanged.

[Unreleased]: https://git.drupalcode.org/project/varbase_canvas_base/-/compare/1.0.1...1.0.x
[1.0.1]: https://git.drupalcode.org/project/varbase_canvas_base/-/compare/1.0.0...1.0.1
[1.0.0]: https://git.drupalcode.org/project/varbase_canvas_base/-/compare/1.0.0-alpha1...1.0.0
[1.0.0-alpha1]: https://git.drupalcode.org/project/varbase_canvas_base/-/commits/1.0.0-alpha1
