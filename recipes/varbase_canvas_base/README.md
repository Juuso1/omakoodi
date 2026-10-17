[![Varbase](https://raw.githubusercontent.com/Vardot/varbase/11.0.x/images/varbase-logo.png)](https://www.drupal.org/project/varbase)

# Varbase Canvas Base
[![pipeline status](https://git.drupalcode.org/project/varbase_canvas_base/badges/1.0.x/pipeline.svg)](https://git.drupalcode.org/project/varbase_canvas_base/-/pipelines)
[![Varbase Canvas Base](https://img.shields.io/badge/Varbase%20Canvas%20Base-1.0.1-0d6efc?labelColor=001d38&style=flat-square)](https://git.drupalcode.org/project/varbase_canvas_base/-/pipelines?ref=1.0.1)
[![Automated Functional Testing](https://git.drupalcode.org/project/varbase_project/badges/11.0.x/pipeline.svg)](https://git.drupalcode.org/project/varbase_project/-/pipelines)

A foundational recipe for Drupal Canvas in Varbase. It owns the Drupal Canvas
module installs, and nothing else.

## Features

### Modules
- **[canvas](https://www.drupal.org/project/canvas)** — Drupal Canvas: the
  `canvas_page` entity, the component library, patterns, content templates and
  the page-region (header / footer) editor.
- **[canvas_override](https://www.drupal.org/project/canvas_override)** —
  per-content Canvas layout editing on the full view mode of selected content
  types, with a fallback to the shared content template.

## Scope

This recipe installs no content types, no fields, and **no permissions**.

Permissions stay with the recipe that owns the role they belong to. The Drupal
Canvas page and component library grants (`create` / `edit` / `delete
canvas_page`, `publish auto-saves`, `administer folders`, `administer patterns`,
`administer components`, `administer content templates`, `administer page
template`, `edit canvas global regions`) live in `varbase_content_base`, because
a Canvas page is content and those roles are content roles. Keeping them there
also means the Vardot site templates, which apply `varbase_content_base`
directly, are unaffected by this recipe.

Applied by **`varbase_starter`**. The Vardot site templates (`educare`,
`horizonaid`, `rightup`) deliberately do not require it — the `canvas` module
install stays in `varbase_media_base`, which they apply directly.

Three neighbouring pieces are deliberately left where they are:

- `canvas_translate` stays in `varbase_i18n_base` — a language concern.
- The `canvas_html_inline` / `canvas_html_block` text format permissions stay in
  `varbase_editor_base` — an editor concern.
- `canvas_icon_picker` belongs to `varbase_admin_base`.

## Installation

Add the recipe using composer:
```
composer require drupal/varbase_canvas_base:~1.0.0
```

Change directory to `/web` or `/docroot`

Run the Drupal recipe bash script:
```
bash core/scripts/drupal recipe recipes/varbase_canvas_base
```

or

Run the Drush recipe command:
```
drush recipe ../recipes/varbase_canvas_base
```

## Maintainers

- [Vardot](https://www.drupal.org/vardot)

## License

GPL-2.0-or-later
