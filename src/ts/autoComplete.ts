interface User {
  id: number;
  name: string;
  email: string;
}

const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};

const sentence = "hello";
sentence.toString();

// 자동완성으로 'user' 객체의 속성에 접근
console.log(user.id);

type Point = {
  x: number;
  y: number;
};

Partial<Point>;

function printPoint(point: Partial<Point>) {
  // 자동완성으로 'point' 객체의 속성에 접근
  console.log(`x: ${point.x}, y: ${point.y}`);
}

function identity<T>(arg: T): T {
  return arg;
}

const result = identity<string | null>("hello");

result?.lastIndexOf();

type NumberString = number | string;

function add<T extends NumberString>(a: T, b: T): T {
  if (typeof a === "string" || typeof b === "string") {
    return (a + b) as T;
  }
  if (typeof a === "number" || typeof b === "number") {
    return (a + b) as T;
  }
  throw new Error(
    "Arguments must be of the same type and either numbers or strings"
  );
}
const sumNumber = add<number>(1, 2);
const sumString = add<string>("a", "b");

///
const COLORS = [
  {
    label: "Black",
    value: "black",
    tw: "zinc-900",
  },
  {
    label: "Blue",
    value: "blue",
    tw: "blue-950",
  },
  {
    labe: "Rose",
    value: "rose",
    tw: "rose-950",
  },
] as const;

// ! as const 로 지정한 타입은 앞에 typeof 붙이면 리터럴 타입으로 사용 가능
type color = typeof COLORS;

// ! (typeof COLORS)[number] -->  COLORS 배열의 요소 중 하나의 타입 가리킴 ( OR )
type colorElement = (typeof COLORS)[number];
