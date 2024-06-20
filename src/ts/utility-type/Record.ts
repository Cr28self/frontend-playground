interface User {
  id: number;
  name: string;
}

// keyof any  --> string | number | symbol ( TS/JS에서 객체 타입의 키로 사용할 수 있는 모든 타입 )
// K extends keyof any --> K가 string | number | symbol 중 하나여야함!!
type RC<K extends keyof any, T> = {
  [P in K]: T;
};

// object타입 --> 원시 타입이 아닌 모든 타입ㅂ\
// keyof any & object --> 교집합 연산 사실상 불가능하므로. ( 원시 타입 & 원시 타입이 아닌 타입 ) == never 타입!!
// never

type res = keyof any & object;

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

type Role = "admin" | "user" | "guest";

interface Permissions {
  read: boolean;
  write: boolean;
  delete: boolean;
}

const RolePermissions: Record<Role, Permissions> = {
  admin: {
    read: true,
    write: true,
    delete: true,
  },
  user: {
    read: true,
    write: false,
    delete: false,
  },
  guest: {
    read: false,
    write: false,
    delete: false,
  },
};
