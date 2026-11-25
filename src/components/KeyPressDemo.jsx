

import useKeyPress from "../hooks/useKeyPress";

function KeyPressDemo() {
  const isPressed = useKeyPress("Shift");

  return (
    <div>
      <h2>useKeyPress</h2>

      <p>
        Shift is: {isPressed ? "Pressed" : "Not Pressed"}
      </p>
    </div>
  );
}

export default KeyPressDemo;
