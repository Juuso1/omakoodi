# Changelog

All notable changes to the Varbase Users Base recipe are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.1] - 2026-10-11
### Added
- Show users their own account details on their profile page: username, email,
  time zone, account status, account created and last login, with Edit profile,
  Change password and Log out buttons. A `varbase_user_profile_details` ECA model
  adds a "Profile details" field to the user display and renders the active
  theme's `user-profile-details` component, for the account owner only
  ([#3630123](https://www.drupal.org/i/3630123)).
- Require `drupal/eca` `~3` and `drupal/modeler_api` `~1`, and install the eca, eca_base,
  eca_render, eca_user and modeler_api modules.
### Changed
- Update the version badge to `1.0.1` in `README.md`.

## [1.0.0] - 2026-09-06
### Changed
- Release the stable Varbase Users Base recipe with the Varbase 11.0.0 suite. No functional changes since 1.0.0-rc1.
- Update the version badge to `1.0.0` in `README.md`.

## [1.0.0-rc1] - 2026-08-15
### Changed
- Release the recipe with the Varbase 11.0.0-rc1 suite. No functional changes since 1.0.0-beta1.
- Update the version badge to `1.0.0-rc1` in `README.md`.

## [1.0.0-beta1] - 2026-07-09
### Changed
- Update Drupal Core from ~11.3.0 to ~11.4.0 in the Varbase Users Base recipe.
- Update the version badge to `1.0.0-beta1` in `README.md`.
- Run CI on tag pushes and add the README pipeline and release badges.

## [1.0.0-alpha2] - 2026-06-21
### Changed
- Maintenance and dependency updates for the Varbase Users Base recipe.

## [1.0.0-alpha1]
### Added
- Initial release of the Varbase Users Base recipe.

[Unreleased]: https://git.drupalcode.org/project/varbase_users_base/-/compare/1.0.1...1.0.x
[1.0.1]: https://git.drupalcode.org/project/varbase_users_base/-/compare/1.0.0...1.0.1
[1.0.0]: https://git.drupalcode.org/project/varbase_users_base/-/compare/1.0.0-rc1...1.0.0
[1.0.0-rc1]: https://git.drupalcode.org/project/varbase_users_base/-/compare/1.0.0-beta1...1.0.0-rc1
[1.0.0-beta1]: https://git.drupalcode.org/project/varbase_users_base/-/compare/1.0.0-alpha2...1.0.0-beta1
[1.0.0-alpha2]: https://git.drupalcode.org/project/varbase_users_base/-/compare/1.0.0-alpha1...1.0.0-alpha2
[1.0.0-alpha1]: https://git.drupalcode.org/project/varbase_users_base/-/tags/1.0.0-alpha1
