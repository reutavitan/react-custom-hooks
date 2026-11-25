
// Exercise 7 - useInterval

import { useState, useEffect } from "react";

function useInterval(callback, intervalMs, enabled) {
  const [isRunning, setIsRunning] = useState(enabled);

  function start() {
    setIsRunning(true);
  }

  function stop() {
    setIsRunning(false);
  }

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      callback();
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isRunning, intervalMs, callback]);

  return {
    start,
    stop,
    isRunning
  };
}

export default useInterval;
