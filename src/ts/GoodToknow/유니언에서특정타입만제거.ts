interface User {
  name: string;
  age: number;
  married: boolean;
}

type Union = "a" | "b" | "c" | 1;

// !b를 제거해서 a와 c만 남기기
// ? ( 분배법칙 사용 )
type Delete<UT, K extends UT> = UT extends K ? UT : never;

type newUnion = Delete<Union, "b">;

type excludeUnion = Exclude<Union, "c">;

type extractUnion = Extract<Union, number>;

// ! 타입스크립트에 추론을 맡기고 싶은 부분을 'infer 타입_변수'로 표시

type Tevent = "change" | "click" | "mouseup";

type TOnEvent = `on${Tevent}`;
