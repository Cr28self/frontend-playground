import { createLazyFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import RefInput from "../../components/RefInput";

export const Route = createLazyFileRoute("/auth/register")({
  component: Register,
});

function Register() {
  const inputRef = useRef(HTMLInputElement);

  useEffect(() => {
    console.log(inputRef.current);
  }, []);

  function showValue() {
    console.log(inputRef.current.value);
  }

  return (
    <RefInput
      placeholder={"enter the id"}
      ref={inputRef}
      onChange={showValue}
    />
  );
}
