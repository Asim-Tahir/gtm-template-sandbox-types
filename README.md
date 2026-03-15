<h1 align="center">
  GTM Template Sandbox Types
</h1>

[![Downloads][downloads-img]][npm-url]
[![License][license-img]][license-url]
[![Version][version-img]][npm-url]

TypeScript types for Google Tag Manager(GTM) template's sandboxed JS APIs both for template and testing

## Installation

[![npm install][npm-install-img]][npm-url]

```bash
npm i -D gtm-template-sandbox-types
```
```bash
yarn add -D gtm-template-sandbox-types
```
```bash
pnpm add -D gtm-template-sandbox-types
```
```bash
bun add -D gtm-template-sandbox-types
```

## Usage:

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
```

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
// or use reference types instead of tsconfig types field

// Full types are available in the web GTM template context, including GTM template APIs, global variables, and utility types.
const logToConsole = require("logToConsole");

logToConsole("Hello, GTM Template Sandbox!");
logToConsole("My GTM Template parameters are:", data);
```

```js
// tests/sample.test.js
/// <reference types="gtm-template-sandbox-types/test" />
// or use reference types instead of tsconfig types field

const mockData = {
  // Mocked field values
};

// Call runCode to run the template's code.
runCode(mockData);

// Verify that the tag finished successfully.
assertApi("gtmOnSuccess").wasCalled();
```

## License

[MIT License][license-url]

[npm-url]: https://www.npmjs.com/package/gtm-template-sandbox-types
[license-url]: https://github.com/Asim-Tahir/gtm-template-sandbox-types/blob/main/LICENSE
[downloads-img]: https://img.shields.io/npm/dt/gtm-template-sandbox-types.svg
[license-img]: https://img.shields.io/npm/l/gtm-template-sandbox-types.svg
[version-img]: https://img.shields.io/npm/v/gtm-template-sandbox-types.svg?label=version
[npm-install-img]: https://nodei.co/npm/gtm-template-sandbox-types.svg?style=compact
