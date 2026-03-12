import "./common/data";
import "./common/module";
import "./common/require";

declare global {
  export declare interface Subject {
    wasCalled(): boolean;
    wasNotCalled(): boolean;
    wasCalledWith(...expected: Array<any>): any;
    wasNotCalledWith(...expected: Array<any>): any;
  }

  /**
   * Returns a matcher object that can be used to fluently make assertions about the given API.
   *
   * @param apiName The name of the api to check; same string as passed to {@link require `require()`}
   */
  export declare function assertApi(apiName: string): Subject;

  export declare interface Matchers<T = any> {
    /**
     * Asserts that the subject is `undefined`.
     *
     * @example
     * ```js
     * assertThat(undefined).isUndefined();
     * ```
     */
    isUndefined(): void;
    /**
     * Asserts that the subject is not `undefined`.
     *
     * @example
     * ```js
     * assertThat(id, 'ID must be defined').isDefined();
     * ```
     */
    isDefined(): void;
    /**
     * Asserts that the subject is `null`.
     *
     * @example
     * ```js
     * assertThat(null).isNull();
     * ```
     */
    isNull(): void;
    /**
     * Asserts that the subject is not `null`.
     *
     * @example
     * ```js
     * assertThat(undefined).isNotNull();
     * ```
     */
    isNotNull(): void;
    /**
     * Asserts that the subject is `false`.
     *
     * @example
     * ```js
     * assertThat(false).isFalse();
     * ```
     */
    isFalse(): void;
    /**
     * Asserts that the subject is `true`.
     *
     * @example
     * ```js
     * assertThat(true).isTrue();
     * ```
     */
    isTrue(): void;
    /**
     * Asserts that the subject is falsy. Falsy values are `undefined`, `null`,
     * `false`, `NaN`, `0`, and `""` (empty string).
     *
     * @example
     * ```js
     * assertThat(undefined).isFalsy();
     * assertThat(null).isFalsy();
     * assertThat(false).isFalsy();
     * assertThat(NaN).isFalsy();
     * assertThat(0).isFalsy();
     * assertThat("").isFalsy();
     * ```
     */
    isFalsy(): void;
    /**
     * Asserts that the subject is truthy. Falsy values are `undefined`, `null`,
     * `false`, `NaN`, `0`, and `""` (empty string).
     *
     * @example
     * ```js
     * assertThat(true).isTruthy();
     * assertThat(1).isTruthy();
     * assertThat("hello").isTruthy();
     * ```
     */
    isTruthy(): void;
    /**
     * Asserts that the subject is the value NaN.
     *
     * @example
     * ```js
     * assertThat(NaN).isNaN();
     * assertThat(-'foo').isNaN();
     * ```
     */
    isNaN(): void;
    /**
     * Asserts that the subject is any value besides NaN.
     *
     * @example
     * ```js
     * assertThat(1).isNotNaN();
     * ```
     */
    isNotNaN(): void;
    /**
     * Asserts that the subject is positive or negative Infinity.
     *
     * @example
     * ```js
     * assertThat(1/0).isInfinity();
     * assertThat(Infinity).isInfinity();
     * assertThat(-Infinity).isInfinity();
     * ```
     */
    isInfinity(): void;
    /**
     * Asserts that the subject is any value besides positive or negative Infinity.
     *
     * @example
     * ```js
     * assertThat(0).isNotInfinity();
     * ```
     */
    isNotInfinity(): void;
    /**
     * Asserts that the subject is equal to the given value.
     * This is a value comparison, not a reference comparison.
     * The contents of objects and arrays are compared recursively.
     *
     * @example
     * ```js
     * const sentUrl = 'https://endpoint.example.com/?account=12345';
     *
     * assertThat(10).isEqualTo(10);
     * assertThat({a: 1}).isEqualTo({a: 1});
     * assertThat([1, 2, 3]).isEqualTo([1, 2, 3]);
     * assertThat(sentUrl).isEqualTo('https://endpoint.example.com/?account=12345');
     * ```
     */
    isEqualTo(expected: any): void;
    /**
     * Asserts that the subject is not equal to the given value.
     * This is a value comparison, not a reference comparison.
     * The contents of objects and arrays are compared recursively.
     *
     * @example
     * ```js
     * const sentUrl = 'https://endpoint.example.com/?account=12345';
     *
     * assertThat(10).isNotEqualTo(20);
     * assertThat({a: 1}).isNotEqualTo({a: 2});
     * assertThat([1, 2, 3]).isNotEqualTo([4, 5, 6]);
     * assertThat(sentUrl).isNotEqualTo('https://endpoint.example.com/?account=67890');
     * ```
     */
    isNotEqualTo(expected: any): void;
    /**
     * Asserts that the subject is equal to one of the given value.
     * This is a value comparison, not a reference comparison.
     * The contents of objects and arrays are compared recursively.
     *
     * @example
     * ```js
     * assertThat(5).isAnyOf(1, 2, 3, 4, 5);
     * ```
     */
    isAnyOf(...expected: Array<any>): void;
    /**
     * Asserts that the subject is not equal to any of the given values.
     * This is a value comparison, not a reference comparison.
     * The contents of objects and arrays are compared recursively.
     *
     * @example
     * ```js
     * assertThat(42).isNoneOf('the question', undefined, 41.9);
     * ```
     */
    isNoneOf(...expected: Array<any>): void;
    /**
     * Asserts that the subject is strictly equal (`===`) to the given value.
     *
     * @example
     * ```js
     * assertThat('value').isStrictlyEqualTo('value');
     * ```
     */
    isStrictlyEqualTo(expected: any): void;
    /**
     * Asserts that the subject is not strictly equal (`!==`) to the given value.
     *
     * @example
     * ```js
     * assertThat('4').isNotStrictlyEqualTo(4);
     * ```
     */
    isNotStrictlyEqualTo(expected: any): void;
    /**
     * Asserts that the subject is greater than (`>`) the given value in
     * an ordered comparison.
     *
     * @example
     * ```js
     * assertThat(10).isGreaterThan(5);
     * ```
     */
    isGreaterThan(expected: any): void;
    /**
     * Asserts that the subject is greater than or equal to (`>=`) the given value
     * in an ordered comparison.
     *
     * @example
     * ```js
     * assertThat(10).isGreaterThanOrEqualTo(10);
     * assertThat(10).isGreaterThanOrEqualTo(5);
     * ```
     */
    isGreaterThanOrEqualTo(expected: any): void;
    /**
     * Asserts that the subject is less than (`<`) the given value in an ordered
     * comparison.
     *
     * @example
     * ```js
     * assertThat(5).isLessThan(10);
     * ```
     */
    isLessThan(expected: any): void;
    /**
     * Asserts that the subject is less than or equal to (`<=`) the given value in
     * an ordered comparison.
     *
     * @example
     * ```js
     * assertThat(5).isLessThanOrEqualTo(5);
     * assertThat(5).isLessThanOrEqualTo(10);
     * ```
     */
    isLessThanOrEqualTo(expected: any): void;
    /**
     * Asserts that the subject is an array or string that contains all of
     * the given values in any order. This is a value comparison, not a reference
     * comparison. The contents of objects and arrays are compared recursively.
     *
     * @example
     * ```js
     * assertThat(["a", "b", "c"]).contains("a", "c");
     * assertThat([1, 2, 3]).contains(2, 1);
     * ```
     */
    contains(...expected: Array<any>): void;
    /**
     * Asserts that the subject is an array or string that contains none of
     * the given values. This is a value comparison, not a reference comparison.
     * The contents of objects and arrays are compared recursively.
     *
     * @example
     * ```js
     * assertThat(["a", "b", "c"]).doesNotContain("d", "e");
     * assertThat([1, 2, 3]).doesNotContain(4, 5);
     * ```
     */
    doesNotContain(...expected: Array<any>): void;
    /**
     * Asserts that the subject is an array that contains all of the given values
     * in any order and no other values. This is a value comparison, not a reference
     * comparison. The contents of objects and arrays are compared recursively.
     *
     * @example
     * ```js
     * assertThat(["a", "b", "c"]).containsExactly("c", "b", "a");
     * assertThat([1, 2, 3]).containsExactly(3, 2, 1);
     * ```
     */
    containsExactly(...expected: Array<any>): void;
    /**
     * Asserts that the subject is an array that has contains a different set of
     * values from the given values in any order. This is a value comparison,
     * not a reference comparison. The contents of objects and arrays are compared
     * recursively.
     *
     * @example
     * ```js
     * assertThat(["a", "b", "c"]).doesNotContainExactly("a", "b", "d");
     * assertThat([1, 2, 3]).doesNotContainExactly(1, 2, 4);
     * assertThat(["4", "5"]).doesNotContainExactly("4");
     * ```
     */
    doesNotContainExactly(...expected: Array<any>): void;
    /**
     * Asserts that the subject is an array or string with the given length.
     * The assertion always fails if the value is not an array or string.
     *
     * @example
     * ```js
     * assertThat([1, 2, 3]).hasLength(3);
     * assertThat("hello").hasLength(5);
     * ```
     */
    hasLength(expected: number): void;
    /**
     * Asserts that the subject is an array or string that is empty (length = 0).
     * The assertion always fails if the value is not an array or string.
     *
     * @example
     * ```js
     * assertThat([]).isEmpty();
     * assertThat("").isEmpty();
     * ```
     */
    isEmpty(): void;
    /**
     * Asserts that the subject is an array or string that is not empty (length > 0).
     * The assertion always fails if the value is not an array or string.
     *
     * @example
     * ```js
     * assertThat([1]).isNotEmpty();
     * assertThat("a").isNotEmpty();
     * ```
     */
    isNotEmpty(): void;
    /**
     * Asserts that the type of the subject is an array.
     *
     * @example
     * ```js
     * assertThat([]).isArray();
     * ```
     */
    isArray(): void;
    /**
     * Asserts that the type of the subject is a boolean.
     *
     * @example
     * ```js
     * assertThat(true).isBoolean();
     * assertThat(false).isBoolean();
     * ```
     */
    isBoolean(): void;
    /**
     * Asserts that the type of the subject is a function.
     *
     * @example
     * ```js
     * assertThat(() => {}).isFunction();
     * assertThat(function() {}).isFunction();
     * ```
     */
    isFunction(): void;
    /**
     * Asserts that the type of the subject is a number.
     *
     * @example
     * ```js
     * assertThat(1).isNumber();
     * assertThat(3.14).isNumber();
     * ```
     */
    isNumber(): void;
    /**
     * Asserts that the type of the subject is an object.
     *
     * @example
     * ```js
     * assertThat({}).isObject();
     * assertThat({a: 1}).isObject();
     * ```
     */
    isObject(): void;
    /**
     * Asserts that the type of the subject is a string.
     *
     * @example
     * ```js
     * assertThat("hello").isString();
     * ```
     */
    isString(): void;
  }

  /**
   * The `assertThat` API is modeled after Google's [Truth] library.
   * It returns an object that can be used to fluently make assertions about
   * a subject's value. An assertion failure will immediately stop the test and
   * mark it as failed. However, a failure in one test will not affect other
   * test cases.
   *
   * @param actual The value to use in the fluent checks.
   * @param opt_message Optional message to print if the assertion fails.
   */
  export declare function assertThat<T = any>(actual: T, opt_message?: string): Matchers<T>;

  /**
   * Immediately fails the current test and prints the given message, if supplied.
   *
   * @param opt_message Optional error message text.
   *
   * @example
   * ```js
   * fail("This test has failed.");
   * ```
   */
  export declare function fail(opt_message?: string): void;

  /**
   * The `mock` API allows you to override the behavior of Sandboxed APIs.
   * The mock API is safe to use in template code, but it is operational only
   * in test mode. Mocks are reset before each test is run.
   *
   * @param apiName The name of the API to mock; same string as passed to {@link require `require()`}
   * @param returnValue The value to return for the API or a function called
   * in place of the API. If **`returnValue`** is a function, that function is
   * called in place of the Sandboxed API; if **`returnValue`** is anything other
   * than a function, that value is returned in place of the Sandboxed API.
   *
   * @example
   * ```js
   * mock('encodeUri', "https://endpoint.example.com/?account=12345");
   * mock('sendPixel', function(url, onSuccess, onFailure) {
   *     onSuccess();
   * });
   * ```
   */
  export declare function mock(apiName: string, returnValue: any): void;

  /**
   * The `mockObject` API lets you override the behavior of Sandboxed APIs that
   * return an object. The API is safe to use in template code, but it is
   * operational only in test mode. Mocks are reset before each test is run.
   *
   * @param apiName The name of the API to mock; same string as passed to {@link require `require()`}
   * @param objectMock The value to return for the API or a function called in
   * place of the API. Must be an object.
   *
   * @example
   * ```js
   * const storage = {};
   * mockObject('localStorage', {
   *   setItem: (key, value) => {storage[key] = value;},
   *   getItem: (key) => storage[key],
   * });
   * ```
   */
  export declare function mockObject(apiName: string, objectMock: object): void;

  /**
   * Runs the code for the template, i.e. the content of the **Code** tab,
   * in the current test environment with a given input data object.
   *
   * @param data Data object to be used in the test.
   * @returns the value of a variable for variable templates; returns `undefined`
   * for all other template types.
   *
   * @example
   * ```js
   * runCode({field1: 123, field2: 'value'});
   * ```
   */
  export declare function runCode(data: object): any | undefined;
}
