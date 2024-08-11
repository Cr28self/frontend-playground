interface MainType {
  name: string;
  age: number;
}

type NestedType = MainType & { address: string };

type Prettify<T> = {
  [P in keyof T]: T[P];
} & {};

// 합쳐진 타입 구조를 에디터로 쉽게 확인 가능
type idk = Prettify<NestedType>;
