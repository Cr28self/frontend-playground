interface User {
  name: string;
  age: number;
  married: boolean;
}

function sayName(user: Pick<User, "name">) {
  console.log(user.name);
}

// !======== Duck Typing
const user: User = { name: "test", age: 1, married: true };

sayName(user);

// !========= Duck Typing
const ss = { name: "hi", age: 33 };

sayName(ss);
