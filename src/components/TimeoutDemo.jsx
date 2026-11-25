
// Exercise 8 - useTimeout Demo

import { useState, useCallback } from "react";
import useTimeout from "../hooks/useTimeout";

function TimeoutDemo() {
  const [message, setMessage] = useState("Waiting...");

  const callback = useCallback(() => {
    setMessage("Time is up!");
  }, []);

  const { start, cancel, isScheduled } = useTimeout(
    callback,
    3000,
    false
  );

  return (
    <div>
      <h2>useTimeout</h2>

      <p>{message}</p>

      <p>Status: {isScheduled ? "Scheduled" : "Not Scheduled"}</p>

      <button onClick={start}>Start Timer</button>
      <button onClick={cancel}>Cancel Timer</button>
    </div>
  );
}

export default TimeoutDemo;
