// #region Utilities
/**
 * Construct a type with a set of properties K of type T
 */
export type Record<K extends keyof any, T> = {
    [P in K]: T;
};

/**
 * Make all properties in T readonly
 */
export type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};
// #endregion
