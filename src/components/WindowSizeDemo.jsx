
// Exercise 10 - useWindowSize Demo

import useWindowSize from "../hooks/useWindowSize";

function WindowSizeDemo() {
  const { width, height } = useWindowSize();

  return (
    <div>
      <h2>useWindowSize</h2>

      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
}

export default WindowSizeDemo;
