import { forwardRef } from "react";

const RefInput = forwardRef((props, ref) => {
  const { placeholder, onChange } = props;
  return <input ref={ref} placeholder={placeholder} onChange={onChange} />;
});

export default RefInput;
