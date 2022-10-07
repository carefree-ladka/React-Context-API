import React, { useContext } from "react";
import CounterContext from "./context/context";

const Counter = () => {
  const { count, add, sub, reset } = useContext(CounterContext);

  return (
    <div>
      <span>{count}</span>
      <button onClick={add}>add</button>
      <button onClick={sub}>sub</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default Counter;
