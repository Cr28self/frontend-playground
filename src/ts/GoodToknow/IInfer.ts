//infer 키워드
// 조건부 타입과 함께 사용되어 타입 정보를 추론할 수 있게해줌
// 이를 통해 타입 정보를 더 정확하게 다루고 복잡한 타입 변환을 단순화할 수 있습니다.
// 주로 함수의 반환 타입이나 제네릭 타입의 일부를 추론할 때 유용

//* infer 구문
//! type SomeType<T> = T extends SomeCondition ? InferredType : DefaultType;

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

function exampleFunction() {
  return "hello";
}

type ExampleReturnType = ReturnType<typeof exampleFunction>; // string

//! ElementType 타입은 배열 타입 T에서 요소 타입 U를 추론
type ElementType<T> = T extends (infer U)[] ? U : never;

type ExampleArrType = ElementType<(number | string)[]>;

// ! 타입스크립트에 추론을 맡기고 싶은 부분을 'infer 타입_변수'로 표시
