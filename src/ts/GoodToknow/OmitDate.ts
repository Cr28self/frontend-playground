type TDate = Omit<Date, `set${string}`>;

type Prettify<T> = {
  [P in keyof T]: T[P];
};

type TDate2 = Prettify<Date>;
