[![Varbase](https://raw.githubusercontent.com/Vardot/varbase/11.0.x/images/varbase-logo.png)](https://www.drupal.org/project/varbase)

# Varbase Workflow Base
[![pipeline status](https://git.drupalcode.org/project/varbase_workflow_base/badges/1.0.x/pipeline.svg)](https://git.drupalcode.org/project/varbase_workflow_base/-/pipelines)
[![Varbase Workflow Base](https://img.shields.io/badge/Varbase%20Workflow%20Base-1.0.1-0d6efc?labelColor=001d38&style=flat-square)](https://git.drupalcode.org/project/varbase_workflow_base/-/pipelines?ref=1.0.1)
[![Automated Functional Testing](https://git.drupalcode.org/project/varbase_project/badges/11.0.x/pipeline.svg)](https://git.drupalcode.org/project/varbase_project/-/pipelines)

A recipe to manage advanced editorial and publishing workflow with content moderation. Build on top of the basic Workflow integration in Drupal CMS.

Provides content moderation workflows, scheduled publishing, revision management, content locking, and workflow notifications. Enables structured content publishing processes for editorial teams.

This recipe provides a complete workflow setup including:
- Content moderation editorial workflow
- Scheduler integration for scheduled content publishing
- Admin audit trail for workflow activity logging

## Features

### Workflows

#### Editorial Workflow
A comprehensive workflow with multiple states:
- **Draft**: Initial content creation state
- **In Review**: Content submitted for review
- **Published**: Content is live and visible to the public
- **Archived/Unpublished**: Content is archived or unpublished

Available transitions:
- Create new draft
- Send to review
- Publish
- Archive/Unpublish
- Restore from archive

### Content Moderation
- **Scheduler Integration**: Schedule content publishing and unpublishing
- **Content Moderation Notifications**: Get notified about workflow state changes
- **Admin Audit Trail**: Track all workflow-related activities

## Permissions

The recipe configures workflow permissions for the following roles:
- **Editor**: Full access to editorial workflow transitions, unpublished content viewing, and scheduling
- **Content Editor**: Full access to editorial workflow transitions, unpublished content viewing, and scheduling
- **Site Admin**: Full access to editorial workflow transitions, unpublished content viewing, and scheduling
- **SEO Admin**: Full access to editorial workflow transitions, unpublished content viewing, and scheduling

## Installation

Add the recipe using composer:
```
composer require drupal/varbase_workflow_base:~1.0.0
```

Change directory to `/web` or `/docroot`

Run the Drupal recipe bash script:
```
bash core/scripts/drupal recipe recipes/contrib/varbase_workflow_base
```

or

Run the Drush recipe command:
```
drush recipe recipes/contrib/varbase_workflow_base
```
