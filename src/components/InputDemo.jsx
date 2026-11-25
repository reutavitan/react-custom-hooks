
// Exercise 4 - useInput Demo

import useInput from "../hooks/useInput";

function InputDemo() {
  const { value, onChange, setValue, reset } = useInput("");

  return (
    <div>
      <h2>useInput</h2>

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Type something..."
      />

      <p>Your text: {value}</p>

      <button onClick={reset}>Reset</button>

      <button onClick={() => setValue("Hello React!")}>
        Set Value
      </button>
    </div>
  );
}

export default InputDemo;
