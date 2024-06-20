interface User {
  id: number;
  name: string;
}

// keyof any  --> string | number | symbol
// K extends keyof any --> K가 string | number | symbol 중 하나여야함!!
type RC<K extends keyof any, T> = {
  [P in K]: T;
};

type keyAny = keyof any;
// Record<Key타입 , Value타입> --> 객체 타입을 정의하는 데 사용
// . 이를 통해 특정 키 타입과 값 타입의 조합을 가진 객체를 생성할 수 있습니다.

type UserRecord = Record<number, User>;

const asdfsadf = 1;

const users: Record<string, User> = {
  [typeof asdfsadf]: { id: 1, name: "test" },
  4: { id: 1, name: "test" },
};

console.log(users);
