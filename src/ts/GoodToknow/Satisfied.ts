// satisfies 키워드는 타입 안전성을 높이고, 코드의 가독성을 향상시키기 위해 사용하는 유용한 도구
// satisfies는 특정 타입에 대해 객체가 만족해야 할 조건을 지정하고, 이를 타입 시스템에 명확하게 알리는 데 사용됩니다
//  satisfies 키워드를 통해 객체 리터럴이 지정된 타입을 만족하는지 확인할 수 있으며, 타입 추론이 더 정교하게 이루어집니다.

type Person = {
  name: string;
  age: number;
};

//  me가 { name: string, age: number } 타입으로 추론됨 ( 명확한 타입 검증 )
// 가독성 good..
const me = {
  name: "aa",
  age: 1,
} satisfies Person;

// you가 Person 타입으로 추론됨
const you: Person = {
  name: "bb",
  age: 1,
};

me["addr"] = "yyyyy";
you["addr"] = "hihih";
