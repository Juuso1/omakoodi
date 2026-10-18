# Varbase News Base — automated functional tests

Behaviour-Driven functional tests for the **Varbase News Base** recipe, part of
the Varbase functional testing suite (Playwright + Cucumber-js). They drive a
running Varbase site through a real browser and assert the behaviour the recipe
actually provides — the News post content type and its fields, authoring, the
news listing with its filters and pager, and the news permissions.

## Layout

```
tests/
├── features/                       # flat — one recipe, no per-feature subfolders
│   ├── 01-01-news-content-type.feature   # the News add form exposes the recipe's fields
│   ├── 02-01-create-news.feature         # create a news post, assert its page
│   ├── 02-02-edit-news.feature           # edit a news post's title
│   ├── 02-03-featured-image.feature      # add a featured image from the media library
│   ├── 03-01-news-listing.feature        # /news cards, result summary, exposed filters
│   ├── 03-02-news-filter.feature         # Search by keyword + Type (Categories) filter
│   ├── 03-03-news-pager.feature          # 12 per page + a pager on page 2
│   └── 04-01-news-permissions.feature    # who can reach the add form; editor CRUD flow
├── step-definitions/
│   ├── varbase.steps.js            # login as a per-role test user; the "wait" step
│   └── news.steps.js               # media-library featured image, save / edit / delete a
│                                   #   news post, the Type filter + result summary
└── recipes/
    └── varbase_news_base_test_content/   # a `type: Content` seed recipe: 15 published
                                          #   "Varbase Example News NN" posts (8 Announcements,
                                          #   7 Press Releases) sharing one tag, plus a sample
                                          #   image media, for the read-only listing / filter /
                                          #   pager scenarios to assert against
```

The `NN-NN-` prefix keeps the flat feature files ordered.

## Prerequisites

- A running Varbase site with this recipe applied (News post content type, the
  `/news` listing, Canvas templates).
- The per-role testing users from `cucumber.js` (`Normal user`, `Content
  editor`, `Content admin`, `SEO admin`, `Site admin`, `webmaster`).
- The test content seeded — a testing-only **recipe** (not a PHP fixture), so
  the listing / filter / pager scenarios have deterministic data:

  ```bash
  drush recipe /path/to/tests/recipes/varbase_news_base_test_content
  drush cache:rebuild
  ```

  It creates 15 published posts titled `Varbase Example News NN` (8 in the
  Announcements category, 7 in Press Releases), all sharing the `Varbase Example
  Tag`. The scenarios isolate them with the "Search by" keyword, so their counts
  do not depend on any other content on the site.

## Running

```bash
npm install                 # varbase-e2e brings Cucumber-js, Playwright, tsx
npx playwright install chromium

# Point at your running site and run the whole suite:
LAUNCH_URL=https://your-site.ddev.site npm run test:chromium

# A single feature file:
FEATURES="tests/features/03-01-news-listing.feature" \
  LAUNCH_URL=https://your-site.ddev.site npm run test:chromium
```

CI installs a Varbase site that applies this recipe, seeds the users + the test
content recipe, and runs the whole suite — see `.gitlab-ci.yml`.

## Note on the `/news` listing page

The News Base recipe ships the news listing as Views **block** displays (All /
Latest / Related news posts), which a site template places on a `/news` page
(the way Varbase Blog Base's listing is placed by Varbase Starter). The CI
pipeline provisions that `/news` page for the listing / filter / pager scenarios
— see the `📋 Provision the /news listing page` note in `.gitlab-ci.yml`.
