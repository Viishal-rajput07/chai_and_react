import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  function increaseValue() {
    if (count < 15) {

      // Interview question :- what will be the value of count if we use setCount multiple times
      // setCount(count + 1);
      // setCount(count + 1);

      // if we use this mutiple times count will increase only by one
      // Beacause the diffing alfo fiber sents it in batches and when it see that one task is done multiple times  it ignore other and send one

      // But this will update count by 2 times
      // setCount(++count);
      // setCount(++count);

      // Another way is that hooks gives us callback function
      setCount((prevCount)=> prevCount+1);
      setCount((prevCount)=> prevCount + 1);

    }
  }
  function decreaseValue() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  return (
    <>
      <h1>Count your click</h1>
      <h3>{count}</h3>
      <button
        style={{ marginBottom: "5px" }}
        onClick={increaseValue}
        disabled={count < 15 ? false : true}
      >
        Increase Value
      </button>
      <br />
      <button onClick={decreaseValue} disabled={count > 0 ? false : true}>
        Decrease Value
      </button>
      <img src={reactLogo} alt="" />
      <img src={viteLogo} alt="" />
    </>
  );
}

export default App;
