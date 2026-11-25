

import { useState, useCallback } from "react";
import useInterval from "../hooks/useInterval";

function IntervalDemo() {
  const [count, setCount] = useState(0);

  const callback = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  const { start, stop, isRunning } = useInterval(
    callback,
    1000,
    false
  );

  return (
    <div>
      <h2>useInterval</h2>

      <p>Count: {count}</p>
      <p>Status: {isRunning ? "Running" : "Stopped"}</p>

      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
}

export default IntervalDemo;
