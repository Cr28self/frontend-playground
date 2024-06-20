import { Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import { Input } from "./components/Input";

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(Input, {
  name: "BuilderInput",
});
