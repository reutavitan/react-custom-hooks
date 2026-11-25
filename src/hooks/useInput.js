
// Exercise 4 - useInput

import { useState } from "react";

function useInput(initial) {
  const [value, setValue] = useState(initial);

  function onChange(event) {
    setValue(event.target.value);
  }

  function reset() {
    setValue(initial);
  }

  return {
    value,
    onChange,
    setValue,
    reset
  };
}

export default useInput;
