
import { useState } from "react";

function useCounterWithStep(initial, step) {
const [value, setValue] = useState(initial);
function inc() {
  setValue(prev => prev + step);
}
function dec() {
  setValue(prev => prev - step);
}
function reset() {
  setValue(initial);
}
return {
  value,
  inc,
  dec,
  reset
};
}
export default useCounterWithStep