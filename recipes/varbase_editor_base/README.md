[![Varbase](https://raw.githubusercontent.com/Vardot/varbase/11.0.x/images/varbase-logo.png)](https://www.drupal.org/project/varbase)

# Varbase Editor Base
[![pipeline status](https://git.drupalcode.org/project/varbase_editor_base/badges/1.0.x/pipeline.svg)](https://git.drupalcode.org/project/varbase_editor_base/-/pipelines)
[![Varbase Editor Base](https://img.shields.io/badge/Varbase%20Editor%20Base-1.0.1-0d6efc?labelColor=001d38&style=flat-square)](https://git.drupalcode.org/project/varbase_editor_base/-/pipelines?ref=1.0.1)
[![Automated Functional Testing](https://git.drupalcode.org/project/varbase_project/badges/11.0.x/pipeline.svg)](https://git.drupalcode.org/project/varbase_project/-/pipelines)

A recipe to manage default installed modules, configs and permissions for Varbase editor functionality including CKEditor 5 with rich text editing capabilities.

This recipe provides a complete editor setup including:
- CKEditor 5 with advanced features
- Multiple text formats (Basic HTML, Full HTML, Code HTML)
- Media embedding and management
- Link management with Linkit integration
- Advanced editing capabilities

## Features

### CKEditor 5 Integration
- **CKEditor 5**: Modern WYSIWYG editor with extensive features
- **CKEditor 5 Plugin Pack**: Additional plugins for enhanced functionality
- **CKEditor 5 Premium Features**: Fullscreen editing, WProofreader spell checking
- **CKEditor Emoji**: Emoji picker integration
- **CKEditor BiDi**: Bidirectional text support

### Media and Embed
- **Entity Embed**: Embed entities within content
- **Media Embed**: Embed media items with multiple view modes
- **CKEditor Media Embed**: External media embedding (YouTube, Vimeo, etc.)
- **CKEditor Media Resize**: Resize media directly in the editor
- **Edit Media Modal**: Edit media properties in a modal dialog

### Link Management
- **Linkit**: Autocomplete link suggestions to internal content
- **Editor Advanced Link**: Enhanced link attributes (id, rel, target, title)
- **Anchor Link**: Create and link to anchor points
- **Extlink**: External link handling with automatic target="_blank"

### Text Processing
- **Pathologic**: Automatic URL correction for links and images
- **Token & Token Filter**: Token replacement in content
- **CKEditor 5 Paste Filter**: Clean up pasted content from Word/Office

### Code Editing
- **ACE Editor**: Syntax-highlighted code editing for HTML/code format

## Text Formats

### Full HTML (Rich Editor)
- Complete editing toolbar with all features
- Advanced formatting options
- Table support, special characters
- Full media integration
- Suitable for advanced content editors

### Code HTML
- Raw HTML editing with ACE editor
- Syntax highlighting
- Suitable for site administrators and developers

## Installation

Add the recipe using composer:
```
composer require drupal/varbase_editor_base:~1.0.0
```

Change directory to `/web` or `/docroot`

Run the Drupal recipe bash script:
```
bash core/scripts/drupal recipe recipes/contrib/varbase_editor_base
```

or

Run the Drush recipe command:
```
drush recipe recipes/contrib/varbase_editor_base
```

## Maintainers

- [Vardot](https://www.drupal.org/vardot)

## License

GPL-2.0-or-later
