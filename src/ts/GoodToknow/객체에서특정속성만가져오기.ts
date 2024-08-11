interface User {
  name: string;
  age: number;
  married: boolean;
  hh?: number;
}

type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type Prettify<T> = {
  [P in keyof T]: T[P];
} & {};

const hi: Pick<User, "age"> = { age: 2 };
