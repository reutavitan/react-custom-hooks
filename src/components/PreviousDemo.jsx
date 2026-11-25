
// Exercise 6 - usePrevious Demo

import { useState } from "react";
import usePrevious from "../hooks/usePrevious";

function PreviousDemo() {
  const [count, setCount] = useState(0);

  const previousValue = usePrevious(count);

  return (
    <div>
      <h2>usePrevious</h2>

      <p>Current: {count}</p>
      <p>Previous: {previousValue ?? "None"}</p>

      <button onClick={() => setCount(count + 1)}>
        +1
      </button>

      <button onClick={() => setCount(count - 1)}>
        -1
      </button>
    </div>
  );
}

export default PreviousDemo;
