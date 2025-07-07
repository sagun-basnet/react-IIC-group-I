import { useState } from "react";
import Button from "./components/Button";
import Form from "./components/Form";
import Home from "./pages/Home";
const App = () => {
  const [count, setCount] = useState(0);
  const [state, setState] = useState(false);
  // let count = 0;
  const handleCount = () => {
    // count += 1;
    setCount(count + 1);
    console.log(count);
  };

  // const handleClick = (a) => {
  //   document.querySelector("body").style.backgroundColor = a;
  // };
  return (
    <>
      {/* <span>{count}</span>
      <br /> */}
      <div
        className={`h-screen flex justify-center items-center ${
          state ? "bg-white" : "bg-black"
        }`}
      >
        <button
          onClick={() => setState(!state)}
          className="p-2 px-4 bg-red-500 rounded-md font-bold"
        >
          {state ? "OFF" : "ON"}
        </button>
      </div>
      {/* <Home title="This is home" /> */}
      {/* <Form type="register" />
      <Button text="See more" color="red" /> */}
      {/* <div className="flex justify-evenly">
        <button
          onClick={() => handleClick("red")}
          className="p-2 px-4 bg-red-500 rounded-md font-bold"
        >
          Red
        </button>
        <button
          onClick={() => handleClick("blue")}
          className="p-2 px-4 bg-blue-500 rounded-md font-bold"
        >
          Blue
        </button>
        <button
          onClick={() => handleClick("yellow")}
          className="p-2 px-4 bg-yellow-500 rounded-md font-bold"
        >
          Yellow
        </button>
        <button
          onClick={() => handleClick("black")}
          className="p-2 px-4 bg-black rounded-md font-bold"
        >
          Black
        </button>
        <button
          onClick={() => handleClick("cyan")}
          className="p-2 px-4 bg-cyan-500 rounded-md font-bold"
        >
          Cyan
        </button>
      </div> */}
    </>
  );
};

export default App;
