interface IUser {
  name: string;
  age: number;
  address: string;
  married: boolean;
  phone: string;
  email: string;
}

interface IAdminUser extends IUser {
  token: string;
}
// parameterName is Type => ( type-guard 함수의 반환 타입 정의할때 )
// ! 함수가 true를 반환하면, 주어진 parameter가 Type임을 보장한다는걸 컴파일러한테 알림
//* isAdminUser가 true를 반환하면 --> object 파라미터의 타입은 IAdminUser 타입이라는걸 보장
function isAdminUser(object: unknown): object is IAdminUser {
  if (object !== null && typeof object === "object") {
    // keyname in object --> check keyname exists in object
    return "token" in object;
  }
  return false;
}

function isJustUser(object: unknown): object is IUser {
  if (object !== null && typeof object === "object") {
    // * true 반환 --> object는 IUser타입이라는걸 보장
    return !("token" in object);
  }
  return false;
}

async function fetchData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  // const badUser = await res.json();

  // ! fetch의 타입이 IUser타입 or IAdminUser타입인지 알 수 없을때..
  // *unknown 타입으로 설정 후, 타입 검사하기로
  const goodUser: unknown = await res.json();

  if (isAdminUser(goodUser)) {
    // 여기서의 goodUser는 무조건 IAdminUser타입!!
    console.log(goodUser.token);
  }
  if (isJustUser(goodUser)) {
    // 여기서의 goodUser는 무조건 IUser타입!!
    console.log(goodUser.married);
  }
}
