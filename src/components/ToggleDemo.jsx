
// Exercise 1 - useToggle Demo

import useToggle from "../hooks/useToggle";

function ToggleDemo() {
  const { value, toggle, setTrue, setFalse } = useToggle();

  return (
    <div>
      <h2>useToggle</h2>

      <p>{value ? "ON" : "OFF"}</p>

      <button onClick={toggle}>Toggle</button>
      <button onClick={setTrue}>Turn ON</button>
      <button onClick={setFalse}>Turn OFF</button>
    </div>
  );
}

export default ToggleDemo;
