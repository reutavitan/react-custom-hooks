

import useCounter from "../hooks/useCounter";

function CounterDemo() {
  const { value, inc, dec, reset } = useCounter(10);

  return (
    <div>
      <h2>useCounter</h2>

      <p>{value}</p>

      <button onClick={inc}>+1</button>
      <button onClick={dec}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterDemo;
