interface User {
  id?: number;
  name: string;
  age: number;
}

type RO<T> = {
  readonly [P in keyof T]: T[P];
};

type RedaOnlyUser = RO<User>;
type RedaOnlyUser2 = Readonly<User>;

const user: Readonly<User> = {
  id: 1,
  name: "test",
  age: 10,
};

const UseYourMom = (user: RO<User>) => {
  // 객체의 속성을 변경 못하게 ( readonly )
  user.id = 1;
  // user.name = "test";
  // user.age = 10;
};

UseYourMom(user);
