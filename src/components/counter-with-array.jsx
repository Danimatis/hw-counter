import { useState } from "react";

const Counter2 = ({ boundaries }) => {
  console.log(boundaries);
  const [counter, setCounter] = useState(0);
  const add = () => {
    setCounter((counter) => counter + 1);
  };
  const subtract = () => {
    setCounter((counter) => counter - 1);
  };

  const rule1 = boundaries.find(() => {
    return counter >= boundaries[0].to && counter < boundaries[0].from;
  });
  return (
    <>
      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
      <br />
      <h1 style={{ color: rule1 ? boundaries[0].color : "" }}>{counter}</h1>
    </>
  );
};

export default Counter2;
