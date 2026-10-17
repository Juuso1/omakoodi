[![Varbase](https://raw.githubusercontent.com/Vardot/varbase/11.0.x/images/varbase-logo.png)](https://www.drupal.org/project/varbase)

# Varbase News Base
[![pipeline status](https://git.drupalcode.org/project/varbase_news_base/badges/1.0.x/pipeline.svg)](https://git.drupalcode.org/project/varbase_news_base/-/pipelines)
[![Varbase News Base](https://img.shields.io/badge/Varbase%20News%20Base-1.0.4-0d6efc?labelColor=001d38&style=flat-square)](https://git.drupalcode.org/project/varbase_news_base/-/pipelines?ref=1.0.4)
[![Automated Functional Testing](https://git.drupalcode.org/project/varbase_project/badges/11.0.x/pipeline.svg)](https://git.drupalcode.org/project/varbase_project/-/pipelines)

A recipe to provide a news post content type, listing page, and related configuration for Varbase. Use News to publish news posts by different authors in the News section of the site.

This recipe builds on top of the Varbase Content Base, Media Base, SEO Base, and Workflow Base recipes, extending them with news-specific content structure, views, and SEO fields.

## Features

### News Content Type
- **News** (`news`): A content type for news posts with the following fields:
  - Title
  - Description (short summary text)
  - Featured Image (media reference)
  - Content (long text with format)
  - Tags (taxonomy reference with autocomplete via Tagify)
  - News Categories (taxonomy reference)

### SEO Fields
- **SEO Title**: Override the default HTML page title for search engines
- **SEO Description**: Description for search engines and social media
- **SEO Image**: Image for social media sharing
- **SEO Analysis**: Yoast SEO real-time content analysis
- SEO fields are grouped in a collapsible "Search Engine Optimization (SEO) Information" fieldset on the edit form

### Taxonomy Vocabularies
- **Tags**: Shared tags vocabulary for news content
- **News Categories**: News-specific categorization

### Views
- **News** (`news`): A views listing with multiple displays:
  - **All News Posts**: Paginated listing with Better Exposed Filters for tags and categories
  - **Latest News Posts**: Block showing the 3 most recent posts
  - **Related News Posts**: Block showing related posts based on shared tags
  - **RSS Feed**: News content RSS feed

### View Modes
- **Default**: Full news post display with featured image, content, and tags
- **Card**: Compact card display with featured image and description

### Canvas Content Templates
- **Full**: Canvas template using heading, image, and text components
- **Card**: Canvas template using the card component

### URL Patterns
- **Pathauto**: Automatic URL aliases following the pattern `/news/[node:created:html_month]/[node:title]`

### Editorial Workflow
- News content type is integrated with the Varbase Editorial Workflow for content moderation and scheduled publishing

## Dependencies

This recipe depends on the following Varbase base recipes:
- **varbase_content_base**: Core content structure, field storages, and content management tools
- **varbase_media_base**: Media library, image handling, and media types
- **varbase_seo_base**: Metatag, Pathauto, Yoast SEO, and SEO tools
- **varbase_workflow_base**: Editorial workflow, content moderation, and scheduler

Additional module:
- **selective_better_exposed_filters**: Enhanced exposed filter widgets for views

## Permissions

The recipe configures news content permissions for:
- **Content Editor**: Create, edit, delete, and manage revisions of news content

## Installation

Add the recipe using composer:
```
composer require drupal/varbase_news_base:~1.0.0
```

Or list it in a site template recipe:

```yaml
recipes:
  - varbase_news_base
```

Change directory to `/web` or `/docroot`

Run the Drupal recipe bash script:
```
bash core/scripts/drupal recipe recipes/varbase_news_base
```

or

Run the Drush recipe command:
```
drush recipe ../recipes/varbase_news_base
```

## Maintainers

- [Vardot](https://www.drupal.org/vardot)

## License

GPL-2.0-or-later
