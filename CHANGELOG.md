# `gtm-template-sandbox-types` Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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