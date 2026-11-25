
// Exercise 8 - useTimeout

import { useState, useEffect } from "react";

function useTimeout(callback, delayMs, enabled) {
  const [isScheduled, setIsScheduled] = useState(enabled);

  function start() {
    setIsScheduled(true);
  }

  function cancel() {
    setIsScheduled(false);
  }

  useEffect(() => {
    if (!isScheduled) return;

    const timer = setTimeout(() => {
      callback();
      setIsScheduled(false);
    }, delayMs);

    return () => clearTimeout(timer);

  }, [isScheduled, delayMs, callback]);

  return {
    start,
    cancel,
    isScheduled
  };
}

export default useTimeout;
