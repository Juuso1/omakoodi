[![Varbase](https://raw.githubusercontent.com/Vardot/varbase/11.0.x/images/varbase-logo.png)](https://www.drupal.org/project/varbase)

# Varbase Users Base
[![pipeline status](https://git.drupalcode.org/project/varbase_users_base/badges/1.0.x/pipeline.svg)](https://git.drupalcode.org/project/varbase_users_base/-/pipelines)
[![Varbase Users Base](https://img.shields.io/badge/Varbase%20Users%20Base-1.0.1-0d6efc?labelColor=001d38&style=flat-square)](https://git.drupalcode.org/project/varbase_users_base/-/pipelines?ref=1.0.1)
[![Automated Functional Testing](https://git.drupalcode.org/project/varbase_project/badges/11.0.x/pipeline.svg)](https://git.drupalcode.org/project/varbase_project/-/pipelines)

A recipe to manage default Varbase user roles and user management configurations, including role definitions, account settings, and the modules needed to support user management on the site.

## User Roles

Varbase comes with preconfigured default roles tailored for sites with hierarchical content management permissions.

### Super Admin (`administrator`)

Can edit everything in content and configurations for the site.

### Site Admin (`site_admin`)

Can edit, delete, and publish all content on the site.

### SEO Admin (`seo_admin`)

Can edit items related to SEO, Meta tags and Google Analytics.

### Content Admin (`content_admin`)

Can edit all content and publish it but cannot edit anything else not related to the content roles.

### Content editor (`content_editor`)

Has permissions to edit all content on the website but cannot publish any content.

### Authenticated user (`authenticated`)

Any user who can access the website by providing a username or password. This role is provided by default from Drupal and cannot be edited or deleted.

### Anonymous user (`anonymous`)

Any visitor who can access the website without providing a username or password. This role is provided by default from Drupal and cannot be edited or deleted.
