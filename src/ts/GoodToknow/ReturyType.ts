const func = () => {
  const val = "strihing";

  return val;
};

// 함수의 return 타입을 사용 가능
type Return = ReturnType<typeof func>;

const promiseFunc = async () => {
  const val = "strihing";

  return val;
};

// promise로 return 타입이 추론되면 Awaited 감싸주면 됨
type Return2 = Awaited<ReturnType<typeof promiseFunc>>;
