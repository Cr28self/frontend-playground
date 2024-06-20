interface User {
  id: number;
  name: string;
  age: number;
}

type s = keyof User;

//in 키워드는 유니온 타입에 포함된 각 타입을 반복(iterate)하면서 타입 조건을 적용하는 데 사용
type In<T> = {
  [P in keyof T]: T[P] extends string ? number : string;
};

type res = In<User>;
