const hi: unknown = "helo";

console.log((hi as string).length);

const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

try {
  throw new Error("에러!");
} catch (e: unknown) {
  // catch 절의 예외 객체는 기본적으로 unknown 타입으로 추론

  console.log((e as Error).message);
  if (e instanceof Error) {
    console.error(e);
  }
}

interface Person {
  name: string;
  age: number;
}

const person = {} as Person;

person.name = "hi";
person.age = 1;

interface ApiResponse extends HTMLDivElement {
  userId: number;
  title: string;
  completed: boolean;
}

async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = (await response.json()) as ApiResponse;
  console.log(data.userId);
}
