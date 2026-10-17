[![Varbase](https://raw.githubusercontent.com/Vardot/varbase/11.0.x/images/varbase-logo.png)](https://www.drupal.org/project/varbase)

# Varbase Page Base
[![pipeline status](https://git.drupalcode.org/project/varbase_page_base/badges/1.0.x/pipeline.svg)](https://git.drupalcode.org/project/varbase_page_base/-/pipelines)
[![Varbase Page Base](https://img.shields.io/badge/Varbase%20Page%20Base-1.0.1-0d6efc?labelColor=001d38&style=flat-square)](https://git.drupalcode.org/project/varbase_page_base/-/pipelines?ref=1.0.1)
[![Automated Functional Testing](https://git.drupalcode.org/project/varbase_project/badges/11.0.x/pipeline.svg)](https://git.drupalcode.org/project/varbase_project/-/pipelines)

A recipe to provide a Page content type for Varbase, with specific features including SEO fields, editorial workflow, and menu configuration.

## Features

### Page Content Type
- **Utility page** (`page`): A content type for static pages with the following fields:
  - Title
  - Description (short summary text, required)
  - Featured Image (media reference)
  - Content (long text with format)
  - Tags (taxonomy reference with autocomplete via Tagify)


### URL Patterns
- **Pathauto**: Automatic URL aliases following the pattern `/[node:title]`

### Editorial Workflow
- Page content type is integrated with the Varbase Editorial Workflow for content moderation (draft, review, published, archived) and scheduled publishing

### Privacy policy
- An unpublished Privacy policy page at `/privacy-policy`, linked from the footer menu, ready to edit before publishing

## Dependencies

This recipe depends on the following recipes:
- **varbase_media_base**: Media library, image handling, and media types
- **varbase_editor_base**: Text formats, CKEditor and Linkit
- **varbase_content_base**: Core content structure, field storages, the basic editorial workflow, Canvas, scheduler, trash, autosave and ECA rules
- **varbase_seo_base**: Metatag, Pathauto, Yoast SEO, and SEO tools
- **varbase_workflow_base**: Editorial workflow, content moderation, and scheduler

## Permissions

The recipe configures page content permissions for:
- **Content Editor**: Create, edit, delete, and manage revisions of page content

## Installation

Add the recipe using composer:
```
composer require drupal/varbase_page_base:~1.0.0
```

Change directory to `/web` or `/docroot`

Run the Drupal recipe bash script:
```
bash core/scripts/drupal recipe recipes/varbase_page_base
```

or

Run the Drush recipe command:
```
drush recipe ../recipes/varbase_page_base
```

## Maintainers

- [Vardot](https://www.drupal.org/vardot)

## License

GPL-2.0-or-later
