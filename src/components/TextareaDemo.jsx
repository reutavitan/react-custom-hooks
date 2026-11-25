

import useTextarea from "../hooks/useTextarea";

function TextareaDemo() {
  const { value, onChange, setValue, reset } = useTextarea("");

  return (
    <div>
      <h2>useTextarea</h2>

      <textarea
        value={value}
        onChange={onChange}
        placeholder="Write something..."
      />

      <p>Your text: {value}</p>

      <button onClick={reset}>Reset</button>

      <button onClick={() => setValue("Hello React!")}>
        Set Value
      </button>
    </div>
  );
}

export default TextareaDemo;
