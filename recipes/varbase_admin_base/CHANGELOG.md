# Changelog

All notable changes to the Varbase Admin Base recipe are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.7] - 2026-10-11
### Fixed
- Stop granting the authenticated role `access navigation`, `access administration pages`,
  `view the administration theme`, `access coffee` and `access contextual links`, so a plain
  logged-in user no longer sees the Navigation sidebar and top bar. The editorial roles keep
  them through their own grants ([#3630118](https://www.drupal.org/i/3630118)).
  Recipes cannot revoke permissions, so existing sites keep them until an admin runs
  `drush role:perm:remove authenticated 'access administration pages,access coffee,access contextual links,access navigation,view the administration theme'`.
### Changed
- Pin the `drupal/varbase_recipes` dependency to `~1.0.0` for the release.
- Update the version badge to `1.0.7` in `README.md`.

## [1.0.6] - 2026-10-10
### Fixed
- Install Menu Block for the welcome dashboard's Add content block
  ([#3629855](https://www.drupal.org/i/3629855)), so the dashboard works whatever order
  the recipes are applied in.
### Changed
- Pin the `drupal/varbase_recipes` dependency to `~1.0.0` for the release.
- Update the version badge to `1.0.6` in `README.md`.

## [1.0.5] - 2026-10-10
### Changed
- Update the Tagify module from `~1` to `~2` ([#3629839](https://www.drupal.org/i/3629839)),
  so every Varbase line uses Tagify 2 with the one Tagify patch in Varbase Patches.
- Pin the `drupal/varbase_recipes` dependency to `~1.0.0` for the release.
- Update the version badge to `1.0.5` in `README.md`.

## [1.0.4] - 2026-10-09
### Added
- Give the welcome dashboard the Varbase dashboard layout
  ([#3629449](https://www.drupal.org/i/3629449)): a welcome card with the user's picture
  and name, Add content, Top tasks and Drupal Events on the left, the editor's drafts,
  recent content and accessibility alerts on the right, and scheduled content underneath.
  Applies core's `user_picture` recipe for the welcome card.
### Fixed
- Carry the admin UI from the removed `drupal_cms_admin_ui` recipe
  ([#3629379](https://www.drupal.org/i/3629379)). Drupal CMS 2.2 removed it and its last
  release requires Tagify 1, so Vardot site templates failed to install on Drupal CMS
  2.2.3 and later. Project Browser, Automatic Updates, the welcome dashboard, the Top tasks
  menu, the Gin blocks and core's content and people admin views now come from this recipe.
### Changed
- Pin the `drupal/varbase_recipes` dependency to `~1.0.0` for the release.
- Update the version badge to `1.0.4` in `README.md`.

## [1.0.3] - 2026-10-05
### Fixed
- Grant the anonymous and authenticated roles the Taxonomy Access Fix `view any term`
  permission, so public pages can show published terms such as Tags
  ([#3628645](https://www.drupal.org/i/3628645)). Without it, visitors got a 404 on term
  pages and Drupal Canvas could not render term names for them.
### Changed
- Pin the `drupal/varbase_recipes` dependency to `~1.0.0` for the release.
- Update the version badge to `1.0.3` in `README.md`.

## [1.0.2] - 2026-09-08
### Fixed
- Remove the orphaned Entity Clone permission grants left behind when the module was
  removed ([#3621823](https://www.drupal.org/i/3621823)). The `entity_clone` module was
  removed in 1.0.1, but its six permission grants stayed on the `content_editor`,
  `content_admin` and `site_admin` roles, so every install applying this recipe printed
  three `Non-existent permission(s) assigned to role ...` errors.
### Changed
- Pin the `drupal/varbase_recipes` dependency to `~1.0.0` for the release.
- Update the version badge to `1.0.2` in `README.md`.

## [1.0.1] - 2026-09-08
### Fixed
- Temporarily remove Entity Clone until it has a stable release
  ([#3621449](https://www.drupal.org/i/3621449)).
### Changed
- Pin the `drupal/varbase_recipes` dependency to `~1.0.0` for the release.
- Update the version badge to `1.0.1` in `README.md`.

## [1.0.0] - 2026-09-06
### Changed
- Release the stable Varbase Admin Base 1.0.0 with the Varbase 11.0.0 suite.
  No functional changes since 1.0.0-rc4.
- Pin the `drupal/varbase_recipes` dependency to `~1.0.0` for the release, now that
  Varbase Recipes 1.0.0 is released.
- Update the version badge to `1.0.0` in `README.md`.

## [1.0.0-rc4] - 2026-09-02
### Fixed
- Remove the empty `metatag_display_extender` stanza from `config/views.view.content.yml`
  and `config/views.view.user_admin_people.yml`. Both stanzas carried no data
  (`metatags: {}`, `tokenize: false`), and the extender is provided by the
  `metatag_views` submodule this recipe does not require, so building either admin view
  on a Drupal CMS base fatalled with `PluginNotFoundException`.
### Changed
- Pin the `drupal/varbase_recipes` dependency to `~1.0.0` for the release.
- Update the version badge to `1.0.0-rc4` in `README.md`.

## [1.0.0-rc3] - 2026-09-02
### Added
- Require the `vardot/jquery.fancytree` library (`^2.38.5`), so the recipe brings the
  Fancytree library `drupal/taxonomy_manager` loads from
  `/libraries/jquery.fancytree/dist/`. The suggested `fancytree/fancytree` package does
  not exist on Packagist, so the library never arrived over Composer.
### Fixed
- Install `smart_date` early: it arrives last in the recipe chain and can deadlock a
  Drupal CMS install.
- Fix the `drupal/smart_date` constraint to `~4.3.0`.
### Changed
- Pin the `drupal/varbase_recipes` dependency to `~1.0.0` for the release.
- Update the version badge to `1.0.0-rc3` in `README.md`.

## [1.0.0-rc2] - 2026-09-01
### Added
- Install the Canvas Icon Picker (`drupal/canvas_icon_picker`) beside `ui_icons`, and
  set `allowed_packs` to `bootstrap_icons` and `vartheme_social`, so every Varbase site
  template inherits the searchable, visual icon picker in the Drupal Canvas editor
  instead of a plain select list of icon names.
### Changed
- Pin the `drupal/varbase_recipes` dependency to `~1.0.0` for the release.
- Update the version badge to `1.0.0-rc2` in `README.md`.

## [1.0.0-rc1] - 2026-08-15
### Changed
- Release the recipe with the Varbase 11.0.0-rc1 suite. No functional changes since 1.0.0-beta1.
- Pin the `drupal/varbase_recipes` to `~1.0.0` dependency for the release.
- Update the version badge to `1.0.0-rc1` in `README.md`.

## [1.0.0-beta1] - 2026-07-09
### Changed
- Update Drupal Core from ~11.3.0 to ~11.4.0 in the Varbase Admin Base recipe.
- Pin the `drupal/varbase_recipes` dependency to `~1.0.0`.
- Update the version badge to `1.0.0-beta1` in `README.md`.
- Run CI on tag pushes and add the README pipeline and release badges.

## [1.0.0-alpha2] - 2026-06-21
### Changed
- Change the logo and emblem to the new approved Varbase brand logo.
- Add the new approved Varbase logo to the `README.md`.

## [1.0.0-alpha1] - 2026-04-26
### Added
- Initial release of the Varbase Admin Base recipe.

[Unreleased]: https://git.drupalcode.org/project/varbase_admin_base/-/compare/1.0.7...1.0.x
[1.0.7]: https://git.drupalcode.org/project/varbase_admin_base/-/compare/1.0.6...1.0.7
[1.0.6]: https://git.drupalcode.org/project/varbase_admin_base/-/compare/1.0.5...1.0.6
[1.0.5]: https://git.drupalcode.org/project/varbase_admin_base/-/compare/1.0.4...1.0.5
[1.0.4]: https://git.drupalcode.org/project/varbase_admin_base/-/compare/1.0.3...1.0.4
[1.0.3]: https://git.drupalcode.org/project/varbase_admin_base/-/compare/1.0.2...1.0.3
[1.0.2]: https://git.drupalcode.org/project/varbase_admin_base/-/compare/1.0.1...1.0.2
[1.0.1]: https://git.drupalcode.org/project/varbase_admin_base/-/compare/1.0.0...1.0.1
[1.0.0]: https://git.drupalcode.org/project/varbase_admin_base/-/compare/1.0.0-rc4...1.0.0
[1.0.0-rc4]: https://git.drupalcode.org/project/varbase_admin_base/-/compare/1.0.0-rc3...1.0.0-rc4
[1.0.0-rc3]: https://git.drupalcode.org/project/varbase_admin_base/-/compare/1.0.0-rc2...1.0.0-rc3
[1.0.0-rc2]: https://git.drupalcode.org/project/varbase_admin_base/-/compare/1.0.0-rc1...1.0.0-rc2
[1.0.0-rc1]: https://git.drupalcode.org/project/varbase_admin_base/-/compare/1.0.0-beta1...1.0.0-rc1
[1.0.0-beta1]: https://git.drupalcode.org/project/varbase_admin_base/-/compare/1.0.0-alpha2...1.0.0-beta1
[1.0.0-alpha2]: https://git.drupalcode.org/project/varbase_admin_base/-/compare/1.0.0-alpha1...1.0.0-alpha2
[1.0.0-alpha1]: https://git.drupalcode.org/project/varbase_admin_base/-/tags/1.0.0-alpha1
