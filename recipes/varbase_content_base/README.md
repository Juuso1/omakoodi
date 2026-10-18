[![Varbase](https://raw.githubusercontent.com/Vardot/varbase/11.0.x/images/varbase-logo.png)](https://www.drupal.org/project/varbase)

# Varbase Content Base
[![pipeline status](https://git.drupalcode.org/project/varbase_content_base/badges/1.0.x/pipeline.svg)](https://git.drupalcode.org/project/varbase_content_base/-/pipelines)
[![Varbase Content Base](https://img.shields.io/badge/Varbase%20Content%20Base-1.0.4-0d6efc?labelColor=001d38&style=flat-square)](https://git.drupalcode.org/project/varbase_content_base/-/pipelines?ref=1.0.4)
[![Automated Functional Testing](https://git.drupalcode.org/project/varbase_project/badges/11.0.x/pipeline.svg)](https://git.drupalcode.org/project/varbase_project/-/pipelines)

A foundational recipe for content structure and management in Varbase. Provides core content configuration for content types, taxonomy vocabularies, menu system, path aliases, and essential content-related modules.

This recipe is designed to work as a foundation after the Drupal CMS Content Type Base recipe, extending it with Varbase-specific enhancements and configurations.

## Features

### Content Structure
- **Node System**: Core node functionality with essential field storages:
  - Body field (text with summary)
  - Description field (long text)
  - Tags field (taxonomy reference)
  - Categories field (taxonomy reference)
- **Taxonomy**: Vocabulary system for organizing content with custom fields

### Field Management
- **Field Group**: Organize fields into logical groups
- **Smart Trim**: Intelligent text trimming with more options
- **Inline Entity Form**: Edit referenced entities inline
- **Token**: Token replacement system for dynamic content

### Views & Content Management
- **Frontpage View**: Default front page content display
- **Archive View**: Content archive by date
- **Taxonomy Term View**: Display taxonomy term content
- **Views Infinite Scroll**: Pagination with infinite scrolling
- **Better Exposed Filters**: Enhanced Views filter UX
- **Date Filter**: Advanced date filtering for Views

### User Experience
- **Contextual Links**: In-place editing links
- **ECA (Event-Condition-Action)**: Visual workflow builder with BPMN.io including:
  - Redirect 403 to login page
  - Content management automations
  - User workflows

### Content Utilities
- **Entity Clone**: Duplicate content entities
- **Entity Usage**: Track entity relationships and usage
- **Entityqueue**: Manual content ordering and curation
- **Diff**: Compare content revisions
- **Menu Position**: Automatic menu item placement
- **Tagify**: Enhanced tagging with autocomplete

### Technical Features
- **Ultimate Cron**: Advanced cron job management
- **Dynamic Page Cache**: Performance optimization
- **Token Filter**: Use tokens in text fields

## Configuration

The recipe includes default configurations for:
- Field storages for nodes, and taxonomy terms
- User picture field storage and display
- Entity form and view displays for and users
- Token view modes for all content entity types
- Social media menu
- ECA workflow for 403 redirect to login
- Entity usage tracking settings
- Tagify widget defaults

## Permissions

The recipe configures basic content permissions for:
- **Anonymous**: Access to published content
- **Authenticated**: Access to content and view own unpublished content

Additional role-based permissions should be configured based on your site's needs.

## Installation

Add the recipe using composer:
```
composer require drupal/varbase_content_base:~1.0.0
```

Change directory to `/web`

Run the Drupal recipe bash script:
```
bash core/scripts/drupal recipe recipes/varbase_content_base
```

or

Run the Drush recipe command:
```
drush recipe recipes/varbase_content_base
```

## Maintainers

- [Vardot](https://www.drupal.org/vardot)

## License

GPL-2.0-or-later
