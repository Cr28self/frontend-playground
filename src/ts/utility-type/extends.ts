interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  breed: string;
}

interface HasLength {
  length: number;
}

type Res = keyof Dog;

// Generic 타입 제한
//  제네릭 함수의 타입 변수는 "일반적으로 함수 호출 시 인수의 타입을 기반"으로 "자동으로 추론"됩니다. ( 호출 시, 타입 변수 생략 가능 )
// 타입 변수 명시적으로 제공하여 호출할때 -->  타입 명확하게 지정하는 경우, 타입 추론이 복잡하고 어려워서 잘 되지 않는 경우
function mergeObj<T extends object, K extends object>(Obj1: T, Obj2: K) {
  return { ...Obj1, Obj2 };
}

function dogMeat<T extends Dog>(dog: T) {
  console.log(dog);
}

function test<T extends HasLength>(obj: T) {
  console.log(obj.length);
}

test([1, 2, 4]);
test({ name: "stes" });

// 조건부 타입

type IsString<T> = T extends string ? true : false;

type Res2 = IsString<number>;
