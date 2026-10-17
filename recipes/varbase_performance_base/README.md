[![Varbase](https://raw.githubusercontent.com/Vardot/varbase/11.0.x/images/varbase-logo.png)](https://www.drupal.org/project/varbase)

# Varbase Performance Base
[![pipeline status](https://git.drupalcode.org/project/varbase_performance_base/badges/1.0.x/pipeline.svg)](https://git.drupalcode.org/project/varbase_performance_base/-/pipelines)
[![Varbase Performance Base](https://img.shields.io/badge/Varbase%20Performance%20Base-1.0.1-0d6efc?labelColor=001d38&style=flat-square)](https://git.drupalcode.org/project/varbase_performance_base/-/pipelines?ref=1.0.1)
[![Automated Functional Testing](https://git.drupalcode.org/project/varbase_project/badges/11.0.x/pipeline.svg)](https://git.drupalcode.org/project/varbase_project/-/pipelines)

A recipe to manage default performance optimization modules, caching configurations, and speed enhancements for Varbase.

This recipe provides core performance features including:
- Page caching with a 15-minute default lifetime optimised for Lighthouse
- CSS and JS preprocessing and aggregation
- ImageMagick as the default image toolkit for broader format support
- WebP image conversion for optimised delivery
- Image API optimization pipeline

## Installation

Add the recipe using composer:
```
composer require drupal/varbase_performance_base:~1.0.0
```

Change directory to `/web` or `/docroot`

Run the Drupal recipe bash script:
```
bash core/scripts/drupal recipe recipes/contrib/varbase_performance_base
```

or

Run the Drush recipe command:
```
ddev drush recipe ../recipes/varbase_performance_base
```

## Performance Features

### Page Caching
- Page cache lifetime set to 900 seconds (15 minutes)
- Dynamic page cache enabled for authenticated users

### Asset Aggregation
- CSS preprocessing and aggregation enabled
- JS preprocessing and aggregation enabled

### Image Optimization
- ImageMagick v6 configured as the default image toolkit
- Image quality set to 75 for a balance between file size and visual quality
- ImageAPI optimize pipeline for automated image processing

## Maintainers

- [Vardot](https://www.drupal.org/vardot)

## License

GPL-2.0-or-later
