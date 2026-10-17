[![Varbase](https://raw.githubusercontent.com/Vardot/varbase/11.0.x/images/varbase-logo.png)](https://www.drupal.org/project/varbase)

# Varbase Webform Base
[![pipeline status](https://git.drupalcode.org/project/varbase_webform_base/badges/1.0.x/pipeline.svg)](https://git.drupalcode.org/project/varbase_webform_base/-/pipelines)
[![Varbase Webform Base](https://img.shields.io/badge/Varbase%20Webform%20Base-1.0.2-0d6efc?labelColor=001d38&style=flat-square)](https://git.drupalcode.org/project/varbase_webform_base/-/pipelines?ref=1.0.2)
[![Automated Functional Testing](https://git.drupalcode.org/project/varbase_project/badges/11.0.x/pipeline.svg)](https://git.drupalcode.org/project/varbase_project/-/pipelines)

A recipe to manage default installed webform modules, configurations, and permissions for Varbase webform experience.

This recipe provides a complete webform setup including:
- Webform module with UI and templates
- Webform views integration for displaying submissions
- ECA Webform integration for automated workflows
- Entity clone support for duplicating webforms
- Business contact webform template
- Ultimate Cron integration for webform cleanup tasks
- Custom permissions for webform submission access

## Features

### Webform Management
- **Webform Core**: Build complex forms with conditional logic and multi-step wizards
- **Webform UI**: User-friendly interface for creating and managing forms
- **Webform Templates**: Pre-built form templates including business contact form
- **Webform Views**: Display and manage webform submissions using Views

### Automation & Integration
- **ECA Webform**: Event-Condition-Action integration for automated webform workflows
- **Ultimate Cron**: Scheduled tasks for webform purging and cleanup
- **Entity Clone**: Duplicate webforms for quick form creation

### Configuration
- **Business Contact Webform**: Ready-to-use business contact form with name, email, phone, message fields
- **Webform Settings**: Optimized settings for Bootstrap, spam protection, and client-side validation
- **Contact Form**: Archive enabled by default for the standard contact form

## Permissions

The recipe configures webform permissions for the following roles:
- **Editor**: Full webform access including overview, create, edit, delete submissions, and view assets
- **SEO Admin**: Full webform access including overview, create, edit, delete submissions, and view assets
- **Content Admin**: Webform management permissions including clone capability
- **Site Admin**: Complete webform administration including clone capability

## Custom Permissions
- **Access the webform submission from user profile**: Allows viewing webform submissions from user profiles

Add the recipe using composer:
```
composer require drupal/varbase_webform_base:~1.0.0
```

Change directory to `/web` or `/docroot`

Run the Drupal recipe bash script:
```
bash core/scripts/drupal recipe recipes/contrib/varbase_webform_base
```

or

Run the Drush recipe command:
```
drush recipe recipes/contrib/varbase_webform_base
```
