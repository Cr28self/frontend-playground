function pipe<A, B>(fn: (a: A) => B) {
  function run(a: A) {
    return fn(a);
  }

  //   run.pipe = <C>(fn2: (b: B) => C) => pipe((a: A) => fn2(fn(a)));

  run.pipe = <C>(fn2: (b: B) => C) => pipe((a: A) => fn2(fn(a)));
  return run;
}

const stringToDateAndTime = pipe((str: string) => !!str).pipe((bool) =>
  Number(bool)
);

stringToDateAndTime("hi");
