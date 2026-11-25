import ToggleDemo from "./components/ToggleDemo";
import CounterDemo from "./components/CounterDemo";
import CounterWithStep from "./components/CounterWithStepDemo";
import InputDemo from "./components/InputDemo";
import TextareaDemo from "./components/TextareaDemo";
import PreviousDemo from "./components/PreviousDemo";
import IntervalDemo from "./components/IntervalDemo";
import TimeoutDemo from "./components/TimeoutDemo";
import DocumentTitleDemo from "./components/DocumentTitleDemo";
import WindowSizeDemo from "./components/WindowSizeDemo";
import KeyPressDemo from "./components/KeyPressDemo";

function App() {
  return (
    <>
      <ToggleDemo />
      <CounterDemo/>
      <CounterWithStep/>
       <InputDemo />
       <TextareaDemo />
         <PreviousDemo />
         <IntervalDemo />
         <TimeoutDemo />
         <DocumentTitleDemo />
         <WindowSizeDemo />
         <KeyPressDemo />
    </>
  );
}

export default App;