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
