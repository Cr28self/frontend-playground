import { createFileRoute } from "@tanstack/react-router";
import { useReducer, useState } from "react";
import { Input } from "../components/Input";
import { formReducer } from "../lib/reducers";

export const Route = createFileRoute("/reducer")({
  component: UseReducer,
});

const initialState = { id: "", pw: "", email: "" };

// dispatch(액션 객체) --> reducer함수(이전 state,액션 객체)
function UseReducer() {
  // useReducer( reducer함수, initialState );
  const [formValue, dispatch] = useReducer(formReducer, initialState);
  //   const [formValue, setFormValue] = useState({ id: "", pw: "", email: "" });

  console.log(formValue);
  function handleIdChange(e) {
    dispatch({
      type: "id",
      payload: e.target.value,
    });
  }

  function handlePwChange(e) {
    dispatch({
      type: "pw",
      payload: e.target.value,
    });
  }

  function handleEmailChange(e) {
    dispatch({
      type: "email",
      payload: e.target.value,
    });
  }

  return (
    <div className="flex flex-col items-center justify-center w-full gap-4">
      <Input value={formValue.id} onChange={handleIdChange} />
      <Input value={formValue.pw} onChange={handlePwChange} />
      <Input value={formValue.email} onChange={handleEmailChange} />

      <button
        type="button"
        onClick={() => dispatch({ type: "reset" })}
        className="p-4 text-white bg-red-500 rounded-md"
      >
        Reset All
      </button>

      <button type="button" className="p-4 text-white bg-red-500 rounded-md">
        Reset
      </button>
    </div>
  );
}
