interface User {
  id?: number;
  name?: string;
  age?: number;
}

//  -? --> 선택적 속성을 제거하여 필수적으로 만듦
type Rq<T> = {
  [P in keyof T]-?: T[P];
};

type hi = Required<User>;
type hie = Rq<User>;
const makeUserComplete = (user: Rq<User>): Rq<User> => {
  return user;
};
// 올바른 사용
const completeUser: Rq<User> = {
  id: 1,
  name: "Alice",
  age: 25,
};

// 오류 발생: 모든 속성이 필수적이어야 합니다.
const incompleteUser: Rq<User> = {
  id: 1,
  name: "Alice",
};
