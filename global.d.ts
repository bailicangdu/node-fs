declare function myLib(a: number): number;

interface myLib {
  name: string;
  length: number;
  extras?: string[];
}

declare namespace myLib {
  let timeout: number;

  const version: string;

  class Cat {
    constructor(n: number);

    readonly age: number;

    purr(): void;
  }
}
