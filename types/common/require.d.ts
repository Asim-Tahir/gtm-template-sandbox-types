// #region Require
declare global {

  /**
   * Imports a built-in function by name. Returns a **function** or an **object**
   * that can be called from your program. Returns **undefined** when the browser
   * does not support the built-in function.
   */

  export declare function require(name: "addConsentListener"): typeof import("logToConsole");
  export declare function require(name: "addEventCallback"): typeof import("addEventCallback");
  export declare function require(name: "aliasInWindow"): typeof import("aliasInWindow");
  export declare function require(name: "callInWindow"): typeof import("callInWindow");
  export declare function require(name: "callLater"): typeof import("callLater");
  export declare function require(name: "copyFromDataLayer"): typeof import("copyFromDataLayer");
  export declare function require(name: "copyFromWindow"): typeof import("copyFromWindow");
  export declare function require(
    name: "createArgumentsQueue",
  ): typeof import("createArgumentsQueue");
  export declare function require(name: "createQueue"): typeof import("createQueue");

  export declare function require(name: "decodeUri"): typeof import("decodeUri");
  export declare function require(name: "decodeUriComponent"): typeof import("decodeUriComponent");
  export declare function require(name: "encodeUri"): typeof import("encodeUri");
  export declare function require(name: "encodeUriComponent"): typeof import("encodeUriComponent");
  export declare function require(name: "fromBase64"): typeof import("fromBase64");
  export declare function require(name: "generateRandom"): typeof import("generateRandom");
  export declare function require(
    name: "getContainerVersion",
  ): typeof import("getContainerVersion");
  export declare function require(name: "getCookieValues"): typeof import("getCookieValues");
  export declare function require(name: "getQueryParameters"): typeof import("getQueryParameters");
  export declare function require(
    name: "getReferrerQueryParameters",
  ): typeof import("getReferrerQueryParameters");
  export declare function require(name: "getReferrerUrl"): typeof import("getReferrerUrl");
  export declare function require(name: "getTimestamp"): typeof import("getTimestamp");
  export declare function require(name: "getTimestampMillis"): typeof import("getTimestampMillis");
  export declare function require(name: "getType"): typeof import("getType");
  export declare function require(name: "getUrl"): typeof import("getUrl");
  export declare function require(name: "gtagSet"): typeof import("gtagSet");
  export declare function require(name: "injectHiddenIframe"): typeof import("injectHiddenIframe");
  export declare function require(name: "injectScript"): typeof import("injectScript");
  export declare function require(name: "isConsentGranted"): typeof import("isConsentGranted");
  export declare function require(name: "JSON"): typeof import("JSON");
  export declare function require(name: "localStorage"): typeof import("localStorage");
  export declare function require(name: "logToConsole"): typeof import("logToConsole");
  export declare function require(name: "makeInteger"): typeof import("makeInteger");
  export declare function require(name: "makeNumber"): typeof import("makeNumber");
  export declare function require(name: "makeString"): typeof import("makeString");
  export declare function require(name: "makeTableMap"): typeof import("makeTableMap");
  export declare function require(name: "Math"): typeof import("Math");
  export declare function require(name: "Object"): typeof import("Object");
  export declare function require(name: "parseUrl"): typeof import("parseUrl");
  export declare function require(name: "queryPermission"): typeof import("queryPermission");
  export declare function require(
    name: "readAnalyticsStorage",
  ): typeof import("readAnalyticsStorage");
  export declare function require(name: "readCharacterSet"): typeof import("readCharacterSet");
  export declare function require(name: "readTitle"): typeof import("readTitle");
  export declare function require(name: "sendPixel"): typeof import("sendPixel");
  export declare function require(name: "setCookie"): typeof import("setCookie");
  export declare function require(
    name: "setDefaultConsentState",
  ): typeof import("setDefaultConsentState");
  export declare function require(name: "setInWindow"): typeof import("setInWindow");
  export declare function require(name: "sha256"): typeof import("sha256");
  export declare function require(name: "templateStorage"): typeof import("templateStorage");
  export declare function require(name: "toBase64"): typeof import("toBase64");
  export declare function require(name: "updateConsentState"): typeof import("updateConsentState");
  export declare function require(name: string): any;
}
// #endregion

export {};
