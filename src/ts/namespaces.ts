namespace Example {
  export interface Inner {
    age: number;
  }
  export interface Inner {
    test: string;
  }

  export type test2 = number;
}

const ex1: Example.Inner = {
  age: 1,
  test: "hi",
};

const ex2: Example.test2 = 123;

interface Inner {
  hi: number;
}

interface Over {
  test: string;
}

interface Over {
  hi: number;
}