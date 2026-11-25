

import useCounterWithStep from "../hooks/useCounterWithStep";

function CounterWithStep() {
  const { value, inc, dec, reset } = useCounterWithStep(10,2);

  return (
    <div>
      <h2>useCounter</h2>

      <p>{value}</p>

      <button onClick={inc}>+2</button>
      <button onClick={dec}>-2</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterWithStep;
