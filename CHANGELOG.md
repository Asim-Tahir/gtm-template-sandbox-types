# `gtm-template-sandbox-types` Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- ...

### Changed

- ...

### Deprecated

- ...

### Removed

- ...

### Fixed

- ...

### Security

- ...

## [0.0.1-alpha.16] - 2026-08-19

### Removed

- Release workflows no longer publish packages to GitHub Packages.

## [0.0.1-alpha.15] - 2026-08-19

### Fixed

- The version bump workflow now passes version environment variables without stray quotation marks.

## [0.0.1-alpha.14] - 2026-08-19

### Fixed

- Release workflows now pass correctly formatted tags when creating releases.

## [0.0.1-alpha.13] - 2026-08-19

### Changed

- Release workflows now create releases with corrected tag formatting and tag verification.

- Release publishing jobs now reuse the existing build output instead of rebuilding packages.

## [0.0.1-alpha.12] - 2026-08-19

### Changed

- Release workflows now support selecting the version increment for releases and pre-releases.

- Release workflows now use Bun `1.3` and built-in tooling for version bumping and release note generation.

## [0.0.1-alpha.11] - 2026-03-15

### Added

- Add badges to the README to indicate the downloads count, latest version, and license.

## [0.0.1-alpha.10] - 2026-03-15

### Added

- Package metadata now includes keywords to improve npm discoverability.

## [0.0.1-alpha.9] - 2026-03-15

No user-facing changes.

## [0.0.1-alpha.8] - 2026-03-15

No user-facing changes.

## [0.0.1-alpha.7] - 2026-03-15

No user-facing changes.

## [0.0.1-alpha.6] - 2026-03-15

### Fixed

- Package repository metadata now uses a valid Git URL.

### Security

- Published packages now include a software bill of materials and GitHub attestations.

## [0.0.1-alpha.5] - 2026-03-14

No user-facing changes.

## [0.0.1-alpha.4] - 2026-03-14

No user-facing changes.

## [0.0.1-alpha.3] - 2026-03-14

No user-facing changes.

## [0.0.1-alpha.2] - 2026-02-12

### 🐞 Fixes

- **Types**: Fixed an issue where some GTM template APIs were not correctly globally typed, leading to improved type safety and better developer experience when using the types in both web and test contexts.

### Maintenance

- **Documentation**: Add usage of the types and to provide clearer guidance on how to set up TypeScript for GTM template development.
- **CI/CD**: Added workflow for automated version bump and publishing of new versions to npm.

## [0.0.1-alpha.1] - 2026-02-06

Initial pre-release of the `gtm-template-sandbox-types` package. This release
includes the foundational TypeScript types for the GTM Template Sandbox,
enabling developers to develop and test GTM templates with type safety and
improved developer experience.

### Example usage:

```jsonc
// tsconfig.json
{
  "files": [],
  "references": [
    {
      "path": "./tsconfig.web.json"
    },
    {
      "path": "./tsconfig.test.json"
    }
  ]
}

```jsonc
// tsconfig.web.json
{
  "compilerOptions": {
    "allowJs": true,
    "types": [
      "gtm-template-sandbox-types/web",
    ]
  },
  "include": [
    "src/**/*.js",
  ]
}
```


```jsonc
// tsconfig.test.json
{
  "compilerOptions": {
    "allowJs": true,
    "types": [
      "gtm-template-sandbox-types/test",
    ]
  },
  "include": [
    "tests/setupTests.js",
    "tests/**/*.test.js",
  ]
}
```

```js
// src/index.js
/// <reference types="gtm-template-sandbox-types/web" />
// or use reference types

// Full types are available in the web GTM template context, including GTM template APIs, global variables, and utility types.
const logToConsole = require("logToConsole");

logToConsole("Hello, GTM Template Sandbox!");
logToConsole("My GTM Template parameters are:", data);
```

```js
// tests/sample.test.js
/// <reference types="gtm-template-sandbox-types/test" />
// or use reference types

const mockData = {
  // Mocked field values
};

// Call runCode to run the template's code.
runCode(mockData);

// Verify that the tag finished successfully.
assertApi("gtmOnSuccess").wasCalled();
```