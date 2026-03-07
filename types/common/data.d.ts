export interface Data {
  gtmOnSuccess(): void;
  gtmOnFailure(): void;

  [key: string]: any;
}

export declare const data: Data;
