type Store = {
  name: string;
  age: number;
  friends: string[];
};

const store = createStore<Store>({ name: "hyun", age: 24, friends: [] });

store.get("age");

store.set("age", (currentAge) => currentAge + 1);

//library

// T가 Record<string,any> 타입이어야한다는걸 보장할때 extends키워드
function createStore<T extends Record<string, unknown>>(initialState: T) {
  const store = initialState;

  return {
    set<K extends keyof T>(key: K, cb: (current: T[K]) => T[K]) {
      store[key] = cb(store[key]);
    },
    get<K extends keyof T>(key: K) {
      return store[key];
    },
  };
}
