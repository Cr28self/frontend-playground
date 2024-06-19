import { createLazyFileRoute } from "@tanstack/react-router";
import { Input } from "../../components/Input";
import { Label } from "../../components/Label";
import { Form } from "../../components/Form";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";

type Inputs = {
  id: string;
  password: string;
};

// zod : 걍 정규식 대신 사용하는거 ㅋㅋ
// z.object : 객체의 형태를 나타냄
//  z.string() : string 타입을 나타냄
const UserSchema = z.object({
  id: z.string(),
  password: z.number(),
});

export const Route = createLazyFileRoute("/auth/login")({
  component: LoginForm,
});

function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("id")); // watch input value by passing the name of it

  const hs = (event) => {
    event.preventDefault();
    console.dir(event.target[0].value);

    console.log(
      UserSchema.parse({
        id: event.target[0].value,
        password: event.target[1].value,
      })
    );
  };

  /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
  return (
    <div className="flex items-center justify-center w-full p-2 ">
      <form className="flex flex-col border-yellow" onSubmit={hs}>
        <label htmlFor="id">id</label>
        <input type="id" name="id" className="p-4 mb-4" />
        <label htmlFor="password">password</label>
        <input type="password" name="password" className="p-4 mb-4" />
        <button type="submit" className="p-4 mb-4 bg-red-200">
          Type Check
        </button>
      </form>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor={"id"} className={"mb-2"} />
        <Input
          defaultValue="enter the id"
          {...(register("id"), { required: true })}
          className={"mb-2"}
          type={"id"}
        />

        <input
          defaultValue="enter the id"
          {...(register("id"), { required: true })}
          className={"mb-2"}
          type={"id"}
        />

        <Label htmlFor={"password"} className={"mb-2"} />
        <Input
          className={"mb-2"}
          {...(register("password"), { required: true })}
          type={"password"}
        />

        <input type="submit" />
      </Form>
    </div>
  );
}
