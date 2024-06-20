// type Partial<T>={
//     [P in keyof T]?:T[P]
// }

// Partial<T>

interface User {
  id: number;
  name: string;
  age: number;
  ssttrr: "age";
}

// keyof User --> "id" | "name" | "age"
// 객체 타입의 모든 키를 유니온 타입으로 반환
type KeyOfUser = keyof User;

// User["id"] --> number;
type PartUser = User["id"];

type STRKey = User["ssttrr"];

type Pt<T> = {
  //   [P in keyof STRKey]: T[P];

  [P in keyof T]?: T[P];
};

function fnc(user: Partial<User>) {
  console.log(user);
}
fnc({ age: 1, name: "test", id: 1 });

const updateUser = (user: Partial<User>) => {
  // user 객체는 id, name, age 속성을 선택적으로 가질 수 있습니다.
  if (user.id) {
    console.log(`Updating user id to ${user.id}`);
  }
  if (user.name) {
    console.log(`Updating user name to ${user.name}`);
  }
  if (user.age) {
    console.log(`Updating user age to ${user.age}`);
  }
};
