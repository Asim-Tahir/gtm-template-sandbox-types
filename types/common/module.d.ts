/////////////////////////////
/// Google Tag Manager Sandboxed Modules
/// Based on: https://developers.google.com/tag-platform/tag-manager/templates/api
/////////////////////////////

import "./utils";

declare module "addConsentListener" {
  interface ConsentListener {
    /**
     * When a listener is invoked, it will be passed the consent type that is
     * being changed and the new value of that consent type:
     * 
     * @param consentType The consent type that is being changed.
     * @param granted A boolean which is true if the specified consent type is
     * being changed to granted.
     */
    (consentType: string, granted: boolean): void;
  }

  /**
   * Registers a listener function to execute when the state of the specified
   * consent type changes.
   *
   * The given listener will be invoked every time the state for the specified
   * consent type changes from denied to granted or from granted to denied.
   * A consent type with no state is considered granted, so the listener won't
   * be called if an unset consent type is updated to granted. Listener
   * functions will be in charge of ensuring their code runs the appropriate
   * number of times.
   * 
   * @example
   * ```js
   * const isConsentGranted = require('isConsentGranted');
   * const addConsentListener = require('addConsentListener');
   * 
   * if (!isConsentGranted('ad_storage')) {
   *   let wasCalled = false;
   *   addConsentListener('ad_storage', (consentType, granted) => {
   *     if (wasCalled) return;
   *     wasCalled = true;
   * 
   *     const cookies = getMyCookies();
   *     sendFullPixel(cookies);
   *   });
   * }
   * ```
   *
   * @param consentType The consent type to listen for state changes on.
   * @param listener 	The function to run when the state of the specified consent type changes.
   *
   * @permission `access_consent`
   */
  function addConsentListener(consentType: string, listener: ConsentListener): void;

  export = addConsentListener;
}

declare module "addEventCallback" {
  /**
   * Data about a tag that fired during the event
   */
  interface TagData {
    /** The tag's ID */
    id: string;
    /** The tag's execution status */
    status: string;
    /** The tag's execution time in milliseconds */
    executionTime: number;
    /** Additional tag metadata that was configured on the tag */
    [key: string]: any;
  }

  /**
   * Event data object containing information about the event
   */
  interface EventData {
    /** An array of tag data objects for every tag that fired during the event */
    tags: Array<TagData>;
    /** Additional event metadata */
    [key: string]: any;
  }

  /**
   * The `addEventCallback` API allows you to register a callback function that
   * will be invoked at the end of an event. The callback will be invoked when
   * all the tags for the event have executed, or if an in page event timeout is
   * reached. The callback is passed two values, the id of the container that
   * invokes the function and an object that contains information about the event.
   *
   * @param callback The function to invoke at the end of the event.
   *
   * @permission {@link https://developers.google.com/tag-platform/tag-manager/templates/permissions#read_event_metadata `read_event_metadata`}
   */
  function addEventCallback(
    /**
     * @param containerId The id of the container that invokes the function
     * @param eventData Object containing information about the event
     */
    callback: (containerId: string, eventData: EventData) => void
  ): void;

  export = addEventCallback;
}

declare module "aliasInWindow" {
  /**
   * The `aliasInWindow` API lets you create an alias
   * (e.g. `window.foo = window.bar`), which helps to support certain tags that
   * require aliasing. Assigns the value in the `window` object found at the
   * `fromPath` to the key in the `window` object at the `toPath`. Returns
   * `true` if successful, `false` otherwise.
   * 
   * @param toPath A dot-separated path into the `window` object where a value
   * should be copied to. All components in the path up to the last component
   * must already exist in the `window` object.
   * @param fromPath A dot-separated path into `window` to the value to copy.
   * If the value does not exist, the operation will fail.
   * 
   * @permission {@link https://developers.google.com/tag-platform/tag-manager/templates/permissions#access_globals `access_globals`}
   */
  function aliasInWindow(toPath: string, fromPath: string): boolean;

  export = aliasInWindow;
}

declare module "callInWindow" {
  /**
   * Allows you to call functions from a path off the `window` object,
   * in a policy-controlled way. Calls the function at the given path in `window`
   * with the given arguments and returns the value. If the return type can't be
   * directly mapped to a type supported in sandboxed JavaScript, `undefined`
   * will be returned. The eight types supported in sandboxed JavaScript are
   * `null`, `undefined`, `boolean`, `number`, `string`, `Array`, `Object`, and
   * `function`. If the given path does not exist, or does not reference a
   * function, `undefined` will be returned.
   *
   * @param pathToFunction A dot-separated path to the function in `window` to call.
   * @param args Arguments to be passed to the function.
   *
   * @permission {@link https://developers.google.com/tag-platform/tag-manager/templates/permissions#access_globals `access_globals`}
   */
  function callInWindow(pathToFunction: string, ...args: Array<any>): void;

  export = callInWindow;
}

declare module "callLater" {
  /**
   * Schedules a call to a function to occur asynchronously. The function will
   * be called after the current code returns. This is equivalent to
   * `setTimeout(<function>, 0)`.
   * 
   * @param callback The function to call.
   */
  function callLater(callback: Function): void

  export = callLater;
}

declare module "copyFromDataLayer" {
  /**
   * Returns the value currently assigned to the given key in the data layer:
   * The value found at the given key if it's a primitive type, function,
   * or object literal, or `undefined` otherwise.
   * 
   * @param key The key in the format of "a.b.c".
   * @param dataLayerVersion The optional {@link https://support.google.com/tagmanager/answer/6106899#DataLayer data layer version}.
   * The default value is 2. It is strongly discouraged to use the value 1.
   * 
   * @permission {@link https://developers.google.com/tag-platform/tag-manager/templates/permissions#read_data_layer `read_data_layer`}
   */
  function copyFromDataLayer(key: string, dataLayerVersion?: number): any

  export = copyFromDataLayer;
}

declare module "copyFromWindow" {
  /**
   * Copies a variable from `window` object. If the value in `window` can't be
   * directly mapped to a type supported in sandboxed JavaScript, `undefined` will
   * be returned. The eight types supported in sandboxed JavaScript are `null`,
   * `undefined`, `boolean`, `number`, `string`, `Array`, `Object`, and
   * `function`. Returns the fetched (and coerced) value.
   *
   * @param key The key in the `window` to copy the value of.
   * 
   * @permission {@link https://developers.google.com/tag-platform/tag-manager/templates/permissions#access_globals `access_globals`}
   */
  function copyFromWindow(key: string): any

  export = copyFromWindow;
}

declare module "createArgumentsQueue" {
  /**
   * Creates a queue that is populated with argument objects, in support of tag
   * solutions that require it.
   *
   * Creates a function in global scope (i.e. `window`), using the `fnKey`
   * argument (same semantics as `createQueue`). After the function is created,
   * this API then creates an array in `window` (if it doesn't already exist)
   * using the `arrayKey` argument.
   *
   * When the function created under `fnKey` is called, it pushes its arguments
   * object onto the array created under `arrayKey`. The API's return value is
   * the function created under `fnKey`.
   *
   * This function requires the read and write setting for `fnKey` and `arrayKey`
   * on the `access_globals` permission.
   *
   * @example
   * ```js
   * const gtag = createArgumentsQueue('gtag', 'dataLayer');
   * gtag('set', {'currency': 'USD'});
   * ```
   *
   * @param fnKey The path in window where the function is set, if it does not
   * already exist. This argument supports standard dot notation. If the key's path does
   * not exist, an exception is thrown. That is, if fnKey is 'one.two', it will throw an
   * exception.
   * @param arrayKey The path in window where the array is set, if it does not
   * already exist. This argument supports standard dot notation. If the key's
   * path does not exist, an exception is thrown. That is, if arrayKey is
   * 'one.two', and there is no global object named 'one', it will throw an
   * exception.
   *
   * @permission {@link https://developers.google.com/tag-platform/tag-manager/templates/permissions#access_globals `access_globals`}
   */
  function createArgumentsQueue(fnKey: string, arrayKey: string): any

  export = createArgumentsQueue;
}

declare module "createQueue" {
  /**
   * Creates an array in `window` (if it doesn't already exist) and returns a
   * function that will push values onto that array.
   *
   * This function requires the read and write setting for `arrayKey` on the
   * `access_globals` permission.
   *
   * @param arrayKey The key in `window` where the array is set, if it does not
   * already exist. This argument supports standard dot notation. If the key's
   * path does not exist, an exception is thrown. For example, if `arrayKey` is
   * `'one.two'`, and there is no global object named `'one'`, it will throw an
   * exception.
   *
   * @permission {@link https://developers.google.com/tag-platform/tag-manager/templates/permissions#access_globals `access_globals`}
   */
  function createQueue(arrayKey: string): any

  export = createQueue;
}

declare module "decodeUri" {
  /**
   * Decodes any encoded characters in the provided URI. Returns a **string**
   * that represents the decoded URI. Returns `undefined` when provided with
   * invalid input.
   *
   * @example
   * ```js
   * const decode = require('decodeUri');
   *
   * const decodedUrl = decode(data.encodedUrl);
   * if (decodedUrl) {
   *   // ...
   * }
   * ```
   *
   * @param encoded_uri 	A URI that has been encoded by
   * {@link https://developers.google.com/tag-platform/tag-manager/templates/api#encodeuri encodeUri()}
   * or by other means.
   *
   * @permission None
   */
  function decodeUri(encoded_uri: string): string;

  export = decodeUri;
}

declare module "decodeUriComponent" {
  /**
   * Decodes any encoded characters in the provided URI component. Returns a
   * **string** that represents the decoded URI component. Returns `undefined`
   * when provided with invalid input.
   *
   * @example
   * ```js
   * const decode = require('decodeUriComponent');
   *
   * const decodedUrl = decode(data.encodedUrl);
   * if (decodedUrl) {
   *   // ...
   * }
   * ```
   * 
   * @param encoded_uri_component A URI component that has been encoded by
   * [`encodeUriComponent()`](https://developers.google.com/tag-platform/tag-manager/templates/api#encodeuricomponent)
   * or by other means.
   *
   * @permission None
   */
  function decodeUriComponent(encoded_uri_component: string): string | undefined

  export = decodeUriComponent;
}

declare module "encodeUri" {
  /**
   * Returns an encoded Uniform Resource Identifier (URI) by escaping special
   * characters. Returns a **string** that represents the provided string encoded
   * as a URI. Returns `undefined` when provided with invalid input
   * (a lone surrogate).
   * 
   * @example
   * ```js
   * const sendPixel = require('sendPixel');
   * const encodeUri = require('encodeUri');
   * 
   * sendPixel('https://www.example.com/' + encodeUri(pathInput));
   * ```
   *
   * @param uri A complete URI.
   * 
   * @permission None
   */
  function encodeUri(uri: string): string;

  export = encodeUri;
}

declare module "encodeUriComponent" {
  /**
   * Returns an encoded Uniform Resource Identifier (URI) by escaping special
   * characters. Returns a **string** that represents the provided string encoded
   * as a URI. Returns `undefined` when provided with invalid input
   * (a lone surrogate).
   *
   * @example
   * ```js
   * const sendPixel = require('sendPixel');
   * const encodeUriComponent = require('encodeUriComponent');
   * 
   * sendPixel('https://www.example.com/?' + encodeUriComponent(queryInput));
   * ```
   *
   * @param str A component of a URI.
   *
   * @permission None
   */
  function encodeUriComponent(str: string): string;

  export = encodeUriComponent;
}

declare module "fromBase64" {
  /**
   * The `fromBase64` API lets you to decode strings from their base64
   * representation. Returns `undefined` when provided with invalid input.
   * 
   * @example
   * ```js
   * const fromBase64 = require('fromBase64');
   *
   * const greeting = fromBase64('aGVsbG8=');
   * if (greeting === 'hello') {
   *   // ...
   * }
   * ````
   *
   * @param base64EncodedString Base64 encoded string.
   *
   * @permission None
   */
  function fromBase64(base64EncodedString: string): string | undefined;

  export = fromBase64;
}

declare module "generateRandom" {
  /**
   * Returns a random **number** (integer) within the given range.
   *
   * @param min Minimum potential value of the returned integer.
   * @param max Maximum potential value of the returned integer.
   *
   * @permission None
   */
  function generateRandom(min: number, max: number): number;

  export = generateRandom;
}

declare module "getContainerVersion" {
  /**
   * Returns an **object** containing data about the current container.
   * The returned object has the following fields:
   * ```json
   * {
   *    containerId: string,
   *    debugMode: boolean,
   *    environmentName: string,
   *    environmentMode: boolean,
   *    previewMode: boolean,
   *    version: string,
   * }
   * ```
   * 
   * @example
   * ```js
   * const getContainerVersion = require('getContainerVersion');
   * const sendPixel = require('sendPixel');
   *
   * if (query('read_container_data')) {
   *   const cv = getContainerVersion();
   *
   *   const pixelUrl = 'https://pixel.com/' +
   *     '?version=' + cv.version +
   *     '&envName=' + cv.environmentName +
   *     '&ctid=' + cv.containerId +
   *     '&debugMode=' + cv.debugMode +
   *     '&previewMode=' + cv.previewMode;
   *   if (query('send_pixel', pixelUrl)) {
   *     sendPixel(pixelUrl);
   *   }
   * }
   *
   * ```
   * 
   * @permission {@link https://developers.google.com/tag-platform/tag-manager/templates/permissions#read_container_data `read_container_data`}
   */
  function getContainerVersion(): any

  export = getContainerVersion;
}

declare module "getCookieValues" {
  /**
   * Returns the values of all cookies with the given name.
   *
   * @param name Name of the cookie.
   * @param decode Controls whether the cookie values are to be decoded with
   * JavaScript's [`decodeURIComponent()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent). Defaults to true.
   *
   * @permission {@link https://developers.google.com/tag-platform/tag-manager/templates/permissions#get_cookies `get_cookies`}
   */
  function getCookieValues(name: string): string | undefined;

  export = getCookieValues;
}

declare module "getQueryParameters" {
  /**
   * Returns the first or all of the parameters for the current URL's `queryKey`.
   * Returns the first value from the `queryKey` or an Array of values from the
   * `queryKey`.
   * 
   * For example, if the current URL is `https://example.com/path?var=foo&var1=foo1&var=foo2&var=foo`, then:
   * - `getQueryParameters('var') == 'foo'`
   * - `getQueryParameters('var', false) == 'foo'`
   * - `getQueryParameters('var', null) == 'foo'`
   * - `getQueryParameters('var', true) == ['foo', 'foo2', 'foo']`
   * 
   * @param queryKey The key to read from the query parameters.
   * @param retrieveAll 	Whether to retrieve all the values.
   * 
   * @permission {@link https://developers.google.com/tag-platform/tag-manager/templates/permissions#get_url `get_url`}
   * must allow the `query` component, and must specify the `queryKey` in the
   * allowed query keys (or allow any query key.)
   */
  function getQueryParameters(queryKey: string, retrieveAll: boolean): Record<string, string>;

  export = getQueryParameters;
}

declare module "getReferrerQueryParameters" {
  /**
   * The `getReferrerQueryParameters` API acts the same way as
   * `getQueryParameters`, except it acts on the referrer instead of the current
   * URL. Returns the first or all of the parameters for the given referrer's
   * `queryKey`. Returns the first value from the `queryKey` or an Array of
   * values from the `queryKey`.
   * 
   * @param queryKey The key to read from the query parameters.
   * @param retrieveAll Whether to retrieve all the values.
   *
   * @example
   * ```js
   * // If the referrer URL is `https://example.com/path?var=foo&var1=foo1&var=foo2&var=foo`, then:
   * const getReferrerQueryParameters = require('getReferrerQueryParameters');
   * 
   * getReferrerQueryParameters('var') == 'foo'
   * getReferrerQueryParameters('var', false) == 'foo'
   * getReferrerQueryParameters('var', null) == 'foo'
   * getReferrerQueryParameters('var', true) == ['foo', 'foo2', 'foo']
   * ```
   *
   * @permission {@link https://developers.google.com/tag-platform/tag-manager/templates/permissions#get_referrer `get_referrer`}
   * must allow the `query` component, and must specify the `queryKey` in the
   * allowed query keys (or allow any query key.)
   */
  function getReferrerQueryParameters(queryKey: string, retrieveAll?: boolean): string | string[] | undefined;

  export = getReferrerQueryParameters;
}

declare module "getReferrerUrl" {
  /**
   * Given a component type, the API reads the document object for the referrer
   * and returns a string that represents a portion of the referrer. If no
   * component is specified, full referrer URL is returned.
   *
   * @param component The component to return from the URL. Can be one of the
   * following: `protocol`, `host`, `port`, `path`, `query`, `extension`.
   * If `component` is `undefined`, `null`, or doesn't match one of these components, the entire URL will be returned.
   *
   * @permission {@link https://developers.google.com/tag-platform/tag-manager/templates/permissions#get_referrer `get_referrer`}
   * must allow the `query` component, and must specify the `queryKey` in the allowed query keys (or allow any query key.)
   */
  function getReferrerUrl(component?: "protocol" | "host" | "port" | "path" | "query" | "extension" | undefined | null): string;

  export = getReferrerUrl;
}

/**
 * @deprecated Prefer {@link getTimestampMillis}.
 */
declare module "getTimestamp" {
  /**
   * @deprecated Prefer {@link getTimestampMillis}.
   *
   * Returns a **number** that represents the current time in milliseconds since
   * Unix epoch, as returned by `Date.now()`.
   *
   * @permission None
   */
  function getTimestamp(): number;

  export = getTimestamp;
}

declare module "getTimestampMillis" {
  /**
   * Returns a **number** that represents the current time in milliseconds since
   * Unix epoch, as returned by `Date.now()`.
   *
   * @permission None
   */
  function getTimestampMillis(): number;

  export = getTimestampMillis;
}

declare module "getType" {
  /**
   * Possible return values from getType function
   */
  type TypeString = 'undefined' | 'null' | 'boolean' | 'number' | 'string' | 'object' | 'array' | 'function';

  /**
   * Returns a **string** describing the given value's type. Unlike `typeof`,
   * `getType` differentiates between `array` and `object`.
   *
   * @example
   * ```js
   * const getType = require('getType');
   * 
   * getType(undefined) // 'undefined'
   * getType(null) // 'null'
   * getType(true) // 'boolean'
   * getType(123) // 'number'
   * getType('abc') // 'string'
   * getType({ a: 3 }) // 'object'
   * getType([1, 2, 3]) // 'array'
   * getType((x) => x + 1) // 'function'
   * ```
   *
   * @permission None
   */
  function getType(value: undefined): 'undefined';
  function getType(value: null): 'null';
  function getType(value: boolean): 'boolean';
  function getType(value: number): 'number';
  function getType(value: string): 'string';
  function getType<T>(value: T[]): 'array';
  function getType(value: Function): 'function';
  function getType(value: object): 'object' | 'array' | 'function';
  function getType(value: any): TypeString;

  export = getType;
}

declare module "getUrl" {
  /**
   * Returns a **string** that represents all or a portion of the current URL,
   * given a component type, and some configuration parameters.
   *
   * @param component The component to return from the URL. Must be one of:
   * `protocol`, `host`, `port`, `path`, `query`, `extension`, `fragment`.
   * If component is `undefined`, `null`, or doesn't match one of these
   * components, the entire `href` value will be returned.
   *
   * @permission {@link https://developers.google.com/tag-platform/tag-manager/templates/permissions#get_url `get_url`}
   */
  function getUrl(component: "protocol" | "host" | "port" | "path" | "query" | "extension" | "fragment" | undefined | null): string;

  export = getUrl;
}

declare module "gtagSet" {
  // type Command = "config" | "get" | "set" | "event" | "consent";

  /**
   * Pushes a gtag set command to the data layer, to be processed as soon as
   * possible after the current event and any tags it triggered are finished
   * processing (or the tag processing timeout is reached). The update is
   * guaranteed to be processed in this container before any queued items
   * in the data layer queue.
   *
   * For example, if called by a tag fired on
   * {@link https://support.google.com/tagmanager/answer/10718549 Consent Initialization},
   * the update will be applied before the Initialization event is processed.
   * Examples would be `ads_data_redaction` being set to `true` or `false` or
   * `url_passthrough` being set to `true` or `false`.
   *
   * @param object An object that updates the global state for its containing properties.
   *
   * @example
   * ```js
   * const gtagSet = require('gtagSet');
   * 
   * gtagSet({
   *   'ads_data_redaction': true,
   *   'url_passthrough': true,
   * });
   * ```
   *
   * `write_data_layer` checks write permission to `dataLayer` for all the
   * specified keys. If input to `gtagSet` is a plain object, the API will
   * check for write permission to all the flattened keys inside that object,
   * e.g. for `gtagSet({foo: {bar: 'baz'}})` the API will check for write
   * permission to `foo.bar`.
   *
   * If the input to `gtagSet` s a key and some non-plain object value, the API
   * will check for write permission to that key, e.g. for
   * `gtagSet('abc', true)`, the API will check for write permission to `'abc'`.
   *
   * Note that if there is a cycle in the input object, only keys before
   * reaching the same object will be checked.
   */
  function gtagSet(object: object): void;

  export = gtagSet;
}

declare module "injectHiddenIframe" {
  /**
   * Adds an invisible iframe to the page.
   *
   * Callbacks are given as function instances, and are wrapped in JavaScript
   * functions that call through to them.
   *
   * @param url The URL to be used as the value of the iframe's `src` attribute.
   * @param onSuccess Called when the frame loads successfully.
   *
   * @permission {@link https://developers.google.com/tag-platform/tag-manager/templates/permissions#inject_hidden_iframe `inject_hidden_iframe`}
   */
  function injectHiddenIframe(url: string, onSuccess: Function): void;

  export = injectHiddenIframe;
}

declare module "injectScript" {
  /**
   * Adds a script tag to the page to load the given URL asynchronously.
   * The callbacks are given as function instances, and are wrapped in
   * JavaScript functions that call through to them.
   *
   * @param url The address of the script to be injected.
   * @param onSuccess Called when the script loads successfully.
   * @param onFailure Called when the script fails to load.
   * @param cacheToken 	Optional string used to indicate the given URL should be
   * cached. If this value is specified, only one script element will be created
   * to request the JavaScript. Any additional attempts to load will result in
   * the given onSuccess and onFailure methods being queued until the script
   * loads.
   *
   * @permission {@link https://developers.google.com/tag-platform/tag-manager/templates/permissions#inject_script `inject_script`}
   */
  function injectScript(url: string, onSuccess: Function, onFailure: Function, cacheToken?: string): void;

  export = injectScript;
}

declare module "isConsentGranted" {
  type ConsentType = 'ad_storage' | 'analytics_storage' | 'functionality_storage' | 'personalization_storage' | 'security_storage' | 'ad_user_data' | 'ad_personalization';

  /**
   * Returns true if the specified consent type is granted.
   *
   * Consent for a particular consent type is considered to be granted if the
   * consent type has been set to 'granted' or not set at all. If the consent
   * type is set to any other value it will be considered not granted.
   *
   * The Tag Manager user interface for tag settings will offer an option to
   * always fire. If a tag with always fire turned on uses this API, consent is
   * considered `granted and `true` will be returned, regardless of the actual
   * state of consent.
   *
   * @example
   * ```js
   * const isConsentGranted = require('isConsentGranted');
   * 
   * if (isConsentGranted('ad_storage')) {
   *   sendFullPixel();
   * } else {
   *   sendPixelWithoutCookies();
   * }
   * ```
   * @param consentType The consent type to check the state of.
   *
   * @permission `access_consent` permission with read access for the consent
   * type.
   */
  function isConsentGranted(consentType: ConsentType): boolean;

  export = isConsentGranted;
}

declare module "JSON" {
  /**
   * Returns an object that provides JSON functions.
   *
   * The `parse()` function parses a JSON string to construct the value or
   * object described by the string. If the value cannot be parsed
   * (e.g. malformed JSON), the function will return `undefined`. If the input
   * value is not a string, the input will be coerced to a string.
   *
   * @param stringInput The value to convert. If the value is not a string, the
   * input will be coerced to a string.
   *
   * @example
   * ```js
   * const JSON = require('JSON');
   * 
   * const object = JSON.parse('{"foo":"bar"}');
   * ```
   */
  function parse(stringInput: any): any;

  /**
   * Returns an object that provides JSON functions.
   *
   * The `stringify()` function converts the input into a JSON string. If the
   * value cannot be parsed (e.g. the object has a cycle), the method will
   * return `undefined`.
   *
   * @param value The value to convert.
   *
   * @example
   * ```js
   * const JSON = require('JSON');
   * 
   * const str = JSON.stringify({foo: 'bar'});
   * ```
   */
  function stringify(value: any): string;

  export { parse, stringify };
}

/**
 * Returns an object with methods for accessing local storage.
 * 
 * @permission {@link https://developers.google.com/tag-platform/tag-manager/templates/permissions#access_local_storage `access_local_storage`}
 */
declare module "localStorage" {
  /**
  * The **`getItem()`** method of local storage, when passed a key
  * name, will return that key's value, or `null` if the key does not exist,
  * in local storage.
  *
  * @param key The key name to retrieve.
  *
   * @example
   * ```js
   * const localStorage = require('localStorage');
   * 
   * const persistedMyKey = localStorage.getItem('myKey');
   * ```
   * 
   * @permission {@link https://developers.google.com/tag-platform/tag-manager/templates/permissions#access_local_storage `access_local_storage`}
   *
   * Requires read access for {@link key the key}. Returns null if {@link key the key} does not exist.
   */
  function getItem(key: string): string | null;

  /**
    * The **`setItem()`** method of local storage, when passed a key
    * name and value, will add that key to local storage, or update
    * that key's value if it already exists.
    *
    * @param key The key name to set.
    * @param value The value to store.
   *
   * @example
   * ```js
   * const localStorage = require('localStorage');
   *
   * localStorage.setItem('myKey', 'myValue');
   * ```
   *
   * @permission {@link https://developers.google.com/tag-platform/tag-manager/templates/permissions#access_local_storage `access_local_storage`}
   *
   * Requires write access for {@link key the key}. Returns true if successful.
   */
  function setItem(key: string, value: string): void;

  /**
    * The **`removeItem()`** method of local storage, when passed a key
    * name, will remove that key from local storage if it exists.
    *
    * @param key The key name to remove.
   *
   * @example
   * ```js
   * const localStorage = require('localStorage');
   *
   * localStorage.removeItem('myKey');
   * ```
   *
   * @permission {@link https://developers.google.com/tag-platform/tag-manager/templates/permissions#access_local_storage `access_local_storage`}
   *
   * Requires write access for {@link key the key}.
   */
  function removeItem(key: string): void;

  export { getItem, setItem, removeItem };
}

declare module "logToConsole" {
  /**
   * Logs arguments to the browser console.
   *
   * @param arguments Arguments
   *
   * @example
   * ```js
   * const logToConsole = require('logToConsole');
   *
   * logToConsole('This is a message', {foo: 'bar'});
   * ```
   *
   * @permission {@link https://developers.google.com/tag-platform/tag-manager/templates/permissions#logging `logging`}
   */
  function logToConsole(...args: Array<any>): void;

  export = logToConsole;
}

declare module "makeInteger" {
  /**
   * Converts the given value to a **number** (integer).
   * 
   * @param value The value to convert.
   *
   * @permission None
   */
  function makeInteger(value: any): number;

  export = makeInteger;
}

declare module "makeNumber" {
  /**
   * Converts the given value to a **number**.
   * 
   * @param value The value to convert.
   *
   * @permission None
   */
  function makeNumber(value: any): number;

  export = makeNumber;
}

declare module "makeString" {
  /**
   * Returns the given value as a **string**.
   * 
   * @param value The value to convert.
   *
   * @permission None
   */
  function makeString(value: any): string;

  export = makeString;
}

declare module "makeTableMap" {
  /**
   * Converts a simple table object with two columns to a `Map`.
   * This is used to change a `SIMPLE_TABLE` template field with two columns
   * into a more manageable format.
   *
   * @param tableObj The table object to convert. It's a list of maps where
   * each `Map` represents a row in the table. Each property name in a row object
   * is the column name, and the property value is the column value in the row.
   * @param keyColumnName Name of the column whose values will become keys in
   * the converted `Map`.
   * @param valueColumnName Name of the column whose values will become values
   * in the converted `Map`.
   *
   * @returns an **Object**: The converted `Map` if key-value pairs have been
   * added to it, or `null` otherwise.
   *
   * @example
   * ```js
   * const makeTableMap = require('makeTableMap');
   * 
   * makeTableMap([{'key': 'k1', 'value': 'v1'}, {'key': 'k2', 'value': 'v2'}]) == {'k1': 'v1', 'k2': 'v2'};
   * 
   * makeTableMap([{'col1': 'k1', 'col2': 'v1'}, {'col1': 'k2', 'col2': 'v2'}], 'col1', 'col2') == {'k1': 'v1', 'k2': 'v2'};
   * ```
   */
  function makeTableMap(tableObj: Array<Record<string, any>>, keyColumnName: string, valueColumnName: string): Record<string, any>;

  export = makeTableMap;
}

/**
 * An object providing `Math` functions.
 *
 * @permission None
 */
declare module "Math" {
  /**
   * Returns the absolute value of a number (the value without regard to whether it is positive or negative).
   * For example, the absolute value of -5 is the same as the absolute value of 5.
   *
   * @param x A numeric expression for which the absolute value is needed.
   *
   * @example
   * ```js
   * const Math = require('Math');
   *
   * Math.abs(-5) == 5;
   * Math.abs(5) == 5;
   * ```
   */
  function abs(x: number): number;

  /**
   * Returns the smallest integer greater than or equal to its numeric argument.
   *
   * @param x A numeric expression.
   *
   * @example
   * ```js
   * const Math = require('Math');
   *
   * Math.ceil(4.2) == 5;
   * Math.ceil(4) == 4;
   * Math.ceil(-4.2) == -4;
   * ```
   */
  function ceil(x: number): number;

  /**
   * Returns the greatest integer less than or equal to its numeric argument.
   *
   * @param x A numeric expression.
   *
   * @example
   * ```js
   * const Math = require('Math');
   *
   * Math.floor(4.2) == 4;
   * Math.floor(4) == 4;
   * Math.floor(-4.2) == -5;
   * ```
   */
  function floor(x: number): number;

  /**
   * Returns the larger of a set of supplied numeric expressions.
   *
   * @param values Numeric expressions to be evaluated.
   *
   * @example
   * ```js
   * const Math = require('Math');
   *
   * Math.max(1, 3, 2) == 3;
   * Math.max(-1, -3, -2) == -1;
   * ```
   */
  function max(...values: number[]): number;

  /**
   * Returns the smaller of a set of supplied numeric expressions.
   *
   * @param values Numeric expressions to be evaluated.
   *
   * @example
   * ```js
   * const Math = require('Math');
   *
   * Math.min(1, 3, 2) == 1;
   * Math.min(-1, -3, -2) == -3;
   * ```
   */
  function min(...values: number[]): number;

  /**
   * Returns the value of a base expression taken to a specified power.
   *
   * @param x The base value of the expression.
   * @param y The exponent value of the expression.
   * 
   * @example
   * ```js
   * const Math = require('Math');
   *
   * Math.pow(2, 3) == 8;
   * Math.pow(5, 0) == 1;
   * ```
   */
  function pow(x: number, y: number): number;

  /**
   * Returns a supplied numeric expression rounded to the nearest integer.
   *
   * @param x The value to be rounded to the nearest integer.
   *
   * @example
   * ```js
   * const Math = require('Math');
   *
   * Math.round(4.2) == 4;
   * Math.round(4.5) == 5;
   * Math.round(4.6) == 5;
   * Math.round(-4.5) == -4;
   * ```
   */
  function round(x: number): number;

  /**
   * Returns the square root of a number.
   *
   * @param x A numeric expression.
   *
   * @example
   * ```js
   * const Math = require('Math');
   *
   * Math.sqrt(4) == 2;
   * Math.sqrt(9) == 3;
   * ```
   */
  function sqrt(x: number): number;

  export { abs, ceil, floor, max, min, pow, round, sqrt };
}

declare module "Object" {
  interface Object {
    /**
     * The `keys()` method provides the Standard Library
     * {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/keys Object.keys()}
     * behavior. It returns an array of a given object's own enumerable property
     * names in the same order that a `for...in...` loop would.
     * If the input value is not an object, it will be coerced to an object.
     *
     * @param objectInput The object whose keys to enumerate. If the input
     * is not an object, it will be coerced to an object.
     * @returns
     *
     * @example
     * ```js
     * const Object = require('Object');
     * const logToConsole = require('logToConsole');
     *
     * const obj = {foo: 'bar', baz: 'qux'};
     * logToConsole(Object.keys(obj)); // logs ['foo', 'baz']
     * ```
     */
    keys(objectInput: object): string[];

    /**
     * The `values()` method provides the Standard Library
     * {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/values Object.values()}
     * behavior. It returns an array of a given object's own enumerable property
     * values in the same order that a `for...in...` loop would.
     * If the input value is not an object, it will be coerced to an object.
     *
     * @param objectInput The object whose values to enumerate. If the input is
     * not an object, it will be coerced to an object.
     * @returns
     *
     * @example
     * ```js
     * const Object = require('Object');
     * const logToConsole = require('logToConsole');
     *
     * const obj = {foo: 'bar', baz: 'qux'};
     * logToConsole(Object.values(obj)); // logs ['bar', 'qux']
     * ```
     */
    values(objectInput: object): any[];

    /**
     * The `entries()` method provides the Standard Library
     * {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/entries Object.entries()}
     * behavior. It returns an array of a given object's own enumerable property
     * `[key, value]` pairs in the same order that a `for...in...` loop would.
     * If the input value is an not an object, it will be coerced to an object.
     *
     * @param objectInput The object whose key/value pairs to enumerate. If
     * the input is not an object, it will be coerced to an object.
     * @returns
     *
     * @example
     * ```js
     * const Object = require('Object');
     * const logToConsole = require('logToConsole');
     *
     * const obj = {foo: 'bar', baz: 'qux'};
     * logToConsole(Object.entries(obj)); // logs [['foo', 'bar'], ['baz', 'qux']]
     * ```
     */
    entries(objectInput: object): Array<[string, any]>;

    /**
     * The `freeze()` method provides the Standard Library
     * {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze Object.freeze()}
     * behavior. A frozen object can no longer be changed; freezing an object
     * prevents new properties from being added to it, existing properties from
     * being removed, and the values of existing properties from being changed.
     * `freeze()` returns the same object that was passed in. A primitive or
     * null argument will be treated as if it were a frozen object, and will be
     * returned.
     *
     * @param objectInput The object to freeze. If the input is not an object, it will be treated as a frozen object.
     * @returns
     *
     * @example
     * ```js
     * const Object = require('Object');
     * const logToConsole = require('logToConsole');
     *
     * // The input object is frozen.
     * const obj = Object.freeze({foo: 'bar'});
     * obj.foo = 'baz'; // This has no effect since `obj` is frozen.
     * logToConsole(obj.foo); // logs 'bar'
     */
    freeze<T>(objectInput: T): Readonly<T>;

    /**
     * The `delete()` method provides the Standard Library
     * {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/delete delete operator}
     * behavior. It removes the given key from the object unless the object is
     * frozen. Like the Standard Library delete operator, it returns `true`
     * if the first input value (`objectInput`) is an object that is not frozen
     * even if the second input value (`keyToDelete`) specifies a key that
     * does not exist. It returns `false` in all other cases. However, it differs
     * from the Standard Library delete operator in the following ways:
     * - `keyToDelete` cannot be a dot-delimited string that specifies a nested key.
     * - `delete()` cannot be used to remove elements from an array.
     * - `delete()` cannot be used to remove any properties from the global scope.
     *
     * @param objectInput The object whose key to delete.
     * @param keyToDelete The top-level key to delete.
     * @returns
     *
     * @example
     * ```js
     * const Object = require('Object');
     *
     * // The key is removed from the input object.
     * const obj1 = {deleteme: 'value'};
     * Object.delete(obj1, 'deleteme');
     *
     * // Only a top-level key can be specified as the key to delete.
     * const obj2 = {nested: {key: 'value'}};
     * Object.delete(obj2, 'nested.key'); // This has no effect.
     * Object.delete(obj2.nested, 'key'); // This deletes the nested key.
     * ```
     */
    delete(objectInput: object, keyToDelete: string): boolean;
  }

  export = Object;
}

declare module "parseUrl" {
  interface ParsedUrl {
    href: string,
    origin: string,
    protocol: string,
    username: string,
    password: string,
    host: string,
    hostname: string,
    port: string,
    pathname: string,
    search: string,
    searchParams: Record<string, string | Array<string>>,
    hash: string,
  }

  /**
   * This API will return `undefined` for any malformed URL.
   * For properly formatted URLs, fields not present in the URL string will have
   * a value of an empty string, or in the case of `searchParams`,
   * an empty object.
   *
   * @param url 	The full url that will be parsed.
   * @returns an object that contains all of a given URL's component parts, similar to the URL object.
   *
   * @example
   * ```js
   * const parseUrl = require('parseUrl');
   * const logToConsole = require('logToConsole');
   *
   * const urlObject = parseUrl('https://abc:xyz@example.com:8080/foo?param=val%2Cue&baz=1&baz=2#bar');
   * logToConsole(urlObject.protocol); // logs {href: 'https://abc:xyz@example.com:8080/foo?param=val%2Cue#bar', origin: 'https://example.com:8080', protocol: 'https:', username: 'abc', password: 'xyz', host: 'example.com:8080', hostname: 'example.com', port: '8080', pathname: '/foo', search: '?param=val%2Cue&baz=1&baz=2', searchParams: {param: 'val,ue', baz: [1, 2]}, hash: '#bar'}
   * ````
   * @permission None
   */
  function parseUrl(url: string): ParsedUrl | undefined;

  export = parseUrl;
}

declare module "queryPermission" {
  /**
   * Query the allowed and narrowed permissions.
   *
   * @param permission Name of the permission.
   * @param functionArgs Function arguments vary based on the permission being
   * queried. See **Function Arguments** below.
   * @returns a **boolean**: `true` if a permission is granted, `false` otherwise.
   * 
   * **Function Arguments**
   * - `sendPixel`, `injectScript`, `injectHiddenIframe`: The second parameter
   * should be a URL string.
   * - `writeGlobals`, `readGlobals`: The second parameter should be the key
   * being written or read.
   * - `readUrl`: No additional arguments are necessary to query whether the
   * whole URL can be read. To query whether a given component can be read,
   * pass the component name as the second argument:
   *
   * @example
   * ```js
   * const queryPermission = require('queryPermission');
   *
   * if (queryPermission('readUrl','port')) {
   *   // read the port
   * }
   * ````
   *
   * To check whether a specific query key is readable, pass the query key as the third parameter:
   * ```js
   * const queryPermission = require('queryPermission');
   *
   * if (queryPermission('readUrl','query','key')) {
   *   getUrlComponent(...);
   * }
   * ```
   *
   * @permission None
   */

  function queryPermission(permission: "sendPixel", url: string): boolean;
  function queryPermission(permission: "injectScript", url: string): boolean;
  function queryPermission(permission: "injectHiddenIframe", url: string): boolean;

  function queryPermission(permission: "writeGlobals", key: string): boolean;
  function queryPermission(permission: "readGlobals", key: string): boolean;

  function queryPermission(permission: "readUrl", component?: "protocol" | "host" | "port" | "path" | "query" | "extension" | "fragment"): boolean;
  function queryPermission(permission: "readUrl", component: "query", queryKey: string): boolean;

  function queryPermission(permission: string, ...functionArgs: Array<string>): boolean;

  export = queryPermission;
}

declare module "readAnalyticsStorage" {
  interface CookieOptions {
    cookie_prefix?: string;
    cookie_domain?: string;
    cookie_path?: string;
  }

  interface AnalyticsStorageData {
    /**
     * A string representing the client ID used for analytics.
     */
    client_id?: string;
    /**
     * An array of objects containing information about current sessions. Each
     * object includes:
     */
    sessions?: Array<{
      /**
       * A string representing the measurement ID of the Analytics Destination.
       */
      measurement_id: string;
      /**
       * A string representing the timestamp that identifies the current session.
       */
      session_id: string;
      /**
       * A number representing the count of sessions that a user has started up to the current session.
       */
      session_number: number;
    }>;
  }

  /**
   * Retrieves the data stored for analytics
   *
   * @param cookieOptions Optional Options for reading cookies with specific
   * `cookie_prefix`, `cookie_domain` or `cookie_path`.
   * @returns an object with `client_id` and `sessions`.
   *
   * @example
   * ```js
   * const readAnalyticsStorage = require("readAnalyticsStorage");
   *
   * const cookieOptions = {
   *   cookie_prefix: "xyz",
   *   cookie_domain: "google.com",
   *   cookie_path: "/",
   * };
   *
   * readAnalyticsStorage(cookieOptions);
   * ```
   *
   * @example
   * ```js
   * const readAnalyticsStorage = require("readAnalyticsStorage");
   *
   * const analyticsStorageData = readAnalyticsStorage();
   *
   * sendOfflineEvent(analyticsStorageData.client_id, "tutorial_begin");
   * ```
   *
   * @permission {@link https://developers.google.com/tag-platform/tag-manager/templates/permissions#read_analytics_storage `read_analytics_storage`}
   */
  function readAnalyticsStorage(cookieOptions?: CookieOptions): AnalyticsStorageData;

  export = readAnalyticsStorage;
}

declare module "readCharacterSet" {
  /**
   * @returns the value of `document.characterSet`.
   *
   * @example
   * ```js
   * const readCharacterSet = require('readCharacterSet');
   * const logToConsole = require('logToConsole');
   *
   * const characterSet = readCharacterSet();
   * logToConsole(characterSet); // logs something like 'UTF-8'
   * ```
   *
   * @permission {@link https://developers.google.com/tag-platform/tag-manager/templates/permissions#read_character_set `read_character_set`}
   */
  function readCharacterSet(): string;
}

declare module "readTitle" {
  /**
   * @returns the value of `document.title`.
   *
   * @example
   * ```js
   * const readTitle = require('readTitle');
   * const logToConsole = require('logToConsole');
   *
   * const title = readTitle();
   * logToConsole(title); // logs the title of the page
   * ```
   *
   * @permission {@link https://developers.google.com/tag-platform/tag-manager/templates/permissions#read_title `read_title`}
   */
  function readTitle(): string;

  export = readTitle;
}

declare module "sendPixel" {
  /**
   * Makes a GET request to a specified URL endpoint.
   *
   * @param url Where to send the pixel.
   * @param onSuccess Called when the pixel successfully loads. Note: even if
   * the request successfully sends, browsers may require a valid image response
   * in order to run onSuccess.
   * @param onFailure Called when the pixel fails to load. Note: even if the
   * request successfully sends, onFailure may run if the server does not return
   * a valid image response.
   *
   * @permission {@link https://developers.google.com/tag-platform/tag-manager/templates/permissions#send_pixel `send_pixel`}
   */
  function sendPixel(url: string, onSuccess: Function, onFailure: Function): void;

  export = sendPixel;
}

declare module "setCookie" {
  interface SetCookieOptions {
    /**
     * set by `options['domain']` property, if present. Set this value to
     * `"auto"` to try to write the cookie using the broadest possible domain,
     * based on the document location. If that fails, it will try successively
     * narrower subdomains. If all of those fail, it will try to write
     * the cookie without a domain. If no value is set, this will try to write
     * the cookie without a domain specified. Note: when a cookie without
     * a domain specified is written to `document.cookie`, the user agent will
     * default the cookie's domain to the host of the current document location.
     */
    domain?: string | "auto";
    /**
     * set by `options['path']`, if present. When a cookie without a path
     * specified is written to `document.cookie`, the user agent will default
     * the cookie's path to the path of the current document location.
     */
    path?: string;
    /**
     * set by `options['max-age']`, if present.
     */
    'max-age'?: number;
    /**
     * set by `options['expires']`, if present. If present, this must be
     * a UTC-formatted date string. `Date.toUTCString()` can be used to format
     * a `Date` for this parameter.
     */
    expires?: string;
    /**
     * set by `options['secure']`, if present.
     */
    secure?: boolean;
    /**
     * set by `options['samesite']`, if present.
     */
    samesite?: 'strict' | 'lax' | 'none';
  }

  /**
   * Sets or deletes the cookie with the specified name, value, and options.
   *
   * @param name Name of the cookie.
   * @param value Value of the cookie.
   * @param options Specifies the {@link https://developer.mozilla.org/docs/Web/HTTP/Headers/Set-Cookie#Directives Domain, Path, Expires, Max-Age, Secure, and SameSite attributes}.
   * @param encode Controls whether the cookie value is to be encoded with
   * JavaScript's {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent `encodeURIComponent()`}.
   * Defaults to `true`.
   *
   * @permission {@link https://developers.google.com/tag-platform/tag-manager/templates/permissions#set_cookies `set_cookies`}
   */
  function setCookie(name: string, value: string, options?: SetCookieOptions, encode?: boolean): void;

  export = setCookie;
}

declare module "setDefaultConsentState" {
  interface ConsentSettings {
    /**
     * The value for each consent type can be set to `"granted"` or `"denied"`.
     * Any value other than `"granted"` will be treated as `"denied"`. Setting
     * the value to `undefined` won't have any effect on its previous value.
     */
    ad_storage?: "granted" | "denied";
    /**
     * The value for each consent type can be set to `"granted"` or `"denied"`.
     * Any value other than `"granted"` will be treated as `"denied"`. Setting
     * the value to `undefined` won't have any effect on its previous value.
     */
    analytics_storage?: "granted" | "denied";
    /**
     * The value for each consent type can be set to `"granted"` or `"denied"`.
     * Any value other than `"granted"` will be treated as `"denied"`. Setting
     * the value to `undefined` won't have any effect on its previous value.
     */
    functionality_storage?: "granted" | "denied";
    /**
     * The value for each consent type can be set to `"granted"` or `"denied"`.
     * Any value other than `"granted"` will be treated as `"denied"`. Setting
     * the value to `undefined` won't have any effect on its previous value.
     */
    personalization_storage?: "granted" | "denied";
    /**
     * The value for each consent type can be set to `"granted"` or `"denied"`.
     * Any value other than `"granted"` will be treated as `"denied"`. Setting
     * the value to `undefined` won't have any effect on its previous value.
     */
    security_storage?: "granted" | "denied";
    /**
     * The value for each consent type can be set to `"granted"` or `"denied"`.
     * Any value other than `"granted"` will be treated as `"denied"`. Setting
     * the value to `undefined` won't have any effect on its previous value.
     */
    ad_user_data?: "granted" | "denied";
    /**
     * The value for each consent type can be set to `"granted"` or `"denied"`.
     * Any value other than `"granted"` will be treated as `"denied"`. Setting
     * the value to `undefined` won't have any effect on its previous value.
     */
    ad_personalization?: "granted" | "denied";
    /**
     * An optional array of region codes specifying which region the consent
     * settings apply to. Region codes are expressed using country and/or
     * subdivisions in ISO 3166-2 format.
     */
    region?: Array<string>;
    /**
     * Specifies a millisecond value to control how long to wait before data
     * is sent. Used with consent tools that load asynchronously.
     */
    wait_for_update?: number;
  }

  /**
   * Pushes a default consent update to the data layer, to be processed as soon
   * as possible after the current event and any tags it triggered are finished
   * processing (or the tag processing timeout is reached). The update is
   * guaranteed to be processed in this container before any queued items in the data layer.
   * {@link https://support.google.com/tagmanager/answer/10718549 Learn more about consent}
   *
   * @param consentSettings An object that defines the default state for the
   * specified consent types.
   *
   * @permission `access_consent` permission with write access for all consent
   * types in the `consentSettings` object.
   */
  function setDefaultConsentState(consentSettings: ConsentSettings): void;

  export = setDefaultConsentState;
}

declare module "setInWindow" {
  /**
   * Sets the given value in `window` at the given key. By default this method
   * won't set the value in the `window` if there is already a value present.
   * Set `overrideExisting` to true to set the value in the `window` regardless
   * of the presence of an existing value.
   *
   * @param key The key in **`window`** to place the value at.
   * @param value 	The value to set in **`window`**.
   * @param overrideExisting The flag indicating that value should be set in
   * **`window`**, regardless if there's a value there or not.
   * @returns `true` if the value was set successfully, and `false` otherwise.
   *
   * @example
   * ```js
   * const setInWindow = require('setInWindow');
   *
   * setInWindow('myKey', 'myValue', false); // sets `window.myKey` to `"myValue"` and returns true
   * ```
   *
   * @permission {@link https://developers.google.com/tag-platform/tag-manager/templates/permissions#access_globals `access_globals`}
   */
  function setInWindow(key: string, value: any, overrideExisting: boolean): boolean;

  export = setInWindow;
}

declare module "sha256" {
  interface Options {
    outputEncoding: "base64" | "hex";
  }

  /**
   * Calculates the SHA-256 digest of the input and invokes a callback with
   * the digest encoded in base64, unless the `options` object specifies
   * a different output encoding.
   *
   * @param input The string to calculate the hash for.
   * @param onSuccess Called with the resulting digest, encoded in base64,
   * unless the `options` object specifies a different output encoding.
   * @param onFailure ion	Called if an error occurs while calculating
   * the digest, or if the browser does not have native support for sha256.
   * The callback is called with an object containing the name of the error,
   * and the message.
   * @param options Optional options object to specify the output encoding.
   * If specified, the object should contain the key `outputEncoding` with
   * value as one of `"base64"` or `"hex"`.
   *
   * @example
   * ```js
   * const sha256 = require('sha256');
   * const logToConsole = require('logToConsole');
   *
   * sha256('inputString', (digest) => {
   *   sendPixel('https://example.com/collect?id=' + digest);
   *   data.gtmOnSuccess();
   * }, data.gtmOnFailure);
   * 
   * sha256('inputString', (digest) => {
   *   sendPixel('https://example.com/collect?id=' + digest);
   *   data.gtmOnSuccess();
   * }, data.gtmOnFailure, {outputEncoding: 'hex'});
   * ```
   *
   * @permission None
   */
  function sha256(input: string, onSuccess: Function, onFailure?: Function, options?: Options): string;

  export = sha256;
}

/**
 * Returns an object with methods for accessing template storage.
 * Template storage allows data to be shared across executions of a single
 * template. Data stored in template storage persists for the lifetime of
 * the page.
 *
 * > Note: Unlike the {@link https://developer.mozilla.org/docs/Web/API/Storage Web Storage API},
 * > **templateStorage** doesn't serialize/deserialize data into strings.
 * > Data is stored as is, and **getItem** returns a reference to that data instead of a copy.
 *
 * @example
 * ```js
 * const templateStorage = require("templateStorage");
 * const sendPixel = require("sendPixel");
 *
 * // Ensure sendPixel is called only once per page.
 * if (templateStorage.getItem("alreadyRan")) {
 *   data.gtmOnSuccess();
 *   return;
 * }
 *
 * templateStorage.setItem("alreadyRan", true);
 *
 * sendPixel(
 *   data.oncePerPagePixelUrl,
 *   data.gtmOnSuccess,
 *   () => {
 *     templateStorage.setItem("alreadyRan", false);
 *     data.gtmOnFailure();
 *   });
 *
 * @permission {@link https://developers.google.com/tag-platform/tag-manager/templates/permissions#access_template_storage `access_template_storage`}
 */
declare module "templateStorage" {
  /**
   * 
   *
   * @example
   * ```js
   * const templateStorage = require("templateStorage");
   *
   * const value = templateStorage.getItem("keyToGet");
   * ```
   */
  function getItem<T = any>(key: string): T;

  // TODO:  fullfill docs
  /**
   * 
   * 
   * @example
   * ```js
   * const templateStorage = require("templateStorage");
   *
   * templateStorage.setItem("keyToAdd", {foo: "bar"});
   * ```
   */
  function setItem<T = any>(key: string, value: T): void;

  // TODO:  fullfill docs
  /**
   * 
   *
   * @example
   * ```js
   * const templateStorage = require("templateStorage");
   *
   * templateStorage.removeItem("keyToRemove");
   * ```
   */
  function removeItem(key: string): void;

  /**
   * Deletes all stored values for the template.
   *
   * @example
   * ```js
   * const templateStorage = require("templateStorage");
   *
   * templateStorage.clear();
   * ```
   */
  function clear(): void;

  export { getItem, setItem, removeItem, clear };
}

declare module "toBase64" {
  /**
   * The `toBase64` API lets you to encode a string into a base64 representation.
   * > Note: This API supports encoding of unicode strings. To decode the string
   * back using plain javascript,
   * use {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent decodeURIComponent}.
   *
   * @param input String to encode.
   *
   * @example
   * ```js
   * const toBase64 = require("toBase64");
   * const logToConsole = require("logToConsole");
   *
   * const base64Hello = toBase64("hello");
   * logToConsole(base64Hello); // logs "aGVsbG8="
   * ```
   */
  function toBase64(input: string): string;

  export = toBase64;
}

declare module "updateConsentState" {
  interface ConsentSettings {
    /**
     * The value for each consent type can be set to `"granted"` or `"denied"`.
     * Any value other than `"granted"` will be treated as `"denied"`. Setting
     * the value to `undefined` won't have any effect on its previous value.
     */
    ad_storage?: "granted" | "denied";
    /**
     * The value for each consent type can be set to `"granted"` or `"denied"`.
     * Any value other than `"granted"` will be treated as `"denied"`. Setting
     * the value to `undefined` won't have any effect on its previous value.
     */
    analytics_storage?: "granted" | "denied";
    /**
     * The value for each consent type can be set to `"granted"` or `"denied"`.
     * Any value other than `"granted"` will be treated as `"denied"`. Setting
     * the value to `undefined` won't have any effect on its previous value.
     */
    functionality_storage?: "granted" | "denied";
    /**
     * The value for each consent type can be set to `"granted"` or `"denied"`.
     * Any value other than `"granted"` will be treated as `"denied"`. Setting
     * the value to `undefined` won't have any effect on its previous value.
     */
    personalization_storage?: "granted" | "denied";
    /**
     * The value for each consent type can be set to `"granted"` or `"denied"`.
     * Any value other than `"granted"` will be treated as `"denied"`. Setting
     * the value to `undefined` won't have any effect on its previous value.
     */
    security_storage?: "granted" | "denied";
    /**
     * The value for each consent type can be set to `"granted"` or `"denied"`.
     * Any value other than `"granted"` will be treated as `"denied"`. Setting
     * the value to `undefined` won't have any effect on its previous value.
     */
    ad_user_data?: "granted" | "denied";
    /**
     * The value for each consent type can be set to `"granted"` or `"denied"`.
     * Any value other than `"granted"` will be treated as `"denied"`. Setting
     * the value to `undefined` won't have any effect on its previous value.
     */
    ad_personalization?: "granted" | "denied";
  }

  /**
   * Pushes a consent update to the data layer, to be processed as soon as
   * possible after the current event and any tags it triggered are finished
   * processing (or the tag processing timeout is reached). The update is
   * guaranteed to be processed in this container before any queued items in
   * the data layer. {@link https://support.google.com/tagmanager/answer/10718549 Learn more about consent}.
   *
   * @param consentSettings An object that updates the state for the specified consent types.
   *
   * @example
   * ```js
   * const updateConsentState = require("updateConsentState");
   * 
   * updateConsentState({
   *   "ad_storage": "granted",
   *   "analytics_storage": "denied",
   *   "third_party_storage": "granted",
   * });
   * ```
   *
   * @permission `access_consent` permission with write access for all consent
   * types in the `consentSettings` object.
   */
  function updateConsentState(consentSettings: ConsentSettings): void;

  export = updateConsentState;
}

export {};
