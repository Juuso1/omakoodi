// Varbase functional testing suite for the Varbase Content Base recipe.
// Varbase functional testing (Playwright + Cucumber-js). Single `default` profile.
//
// Only used by the recipe's opt-in browser CI job and by local runs; it is not
// part of the recipe's fast default pipeline (composer-validate + yaml-lint).
module.exports = {
  default: {
    // Cucumber step timeout must exceed Playwright's default 30s so Playwright's
    // own friendly locator errors surface first.
    timeout: 45000,
    // tsx loads both .js and .ts step files with zero build (replaces ts-node).
    requireModule: ['tsx/cjs'],
    require: [
      'node_modules/@vardot/varbase-e2e/tests/step-definitions/**/*.js', // Varbase E2E core steps.
      'tests/step-definitions/**/*.js',                          // Recipe custom steps.
    ],
    paths: ['tests/features/**/*.feature'],
    format: [
      '@cucumber/pretty-formatter',
      'json:tests/reports/cucumber_report.json',
    ],
    formatOptions: {
      theme: {
        'feature keyword': ['bold', 'blue'],
        'feature name': ['blue', 'underline'],
        'scenario keyword': ['bold', 'magenta'],
        'scenario name': ['magenta', 'underline'],
        'step keyword': ['bold', 'green'],
        'step text': ['greenBright', 'italic'],
      },
    },
    worldParameters: {
      // Target site; always override with LAUNCH_URL in CI / local runs.
      launchUrl: process.env.LAUNCH_URL || 'http://127.0.0.1:8888',
      minWaitTime: {
        page: 5000,
        before_scenario: 0,
        after_scenario: 0,
        before_step: 0,
        after_step: 0,
      },
      selectors: {
        css: {},
        xpath: {},
        filesPath: './tests/selectors/',
        files: [],
        offset: 60,
        breakpoints: {
          xs:   { width: 375,  height: 667  },
          sm:   { width: 576,  height: 800  },
          md:   { width: 768,  height: 1024 },
          lg:   { width: 992,  height: 768  },
          xl:   { width: 1200, height: 900, default: true },
          xxl:  { width: 1400, height: 900  },
          xxxl: { width: 1920, height: 1080 },
        },
      },
      screenshot: {
        dir: './screenshots',
        purge: false,
        onFailed: true,
        onEveryStep: false,
        alwaysFullscreen: false,
        failedPrefix: 'failed_',
        filenamePattern: '{datetime}.{feature_file}.feature_{step_line}.{ext}',
        filenamePatternFailed: '{failed_prefix}{datetime}.{feature_file}.feature_{step_line}.{ext}',
        infoTypes: '',
      },
      video: {
        mode: 'off',                                 // VARBASE_E2E_VIDEO (on | on-failure | tag)
        dir: './videos',
        size: { width: 1280, height: 720 },
        filenamePattern: '{datetime}.{feature_file}.{scenario}.{status}.{ext}',
      },
      javascript: {
        mode: 'warn',                                // VARBASE_E2E_JS_ERROR_MODE (fail | off)
        levels: ['error'],                           // VARBASE_E2E_JS_ERROR_LEVELS
        ignore: '',                                  // VARBASE_E2E_JS_ERROR_IGNORE
        beforeScenario: false,
        afterScenario: true,
      },
    },
  },
};
