import { useState } from "react";

const Counter = ({ min = -3, max = 22, initial = 3, step = 3 }) => {
  const [counter, setCounter] = useState(initial);
  const add = () => setCounter((counter) => counter + step);
  const subtract = () => setCounter((counter) => counter - step);
  return (
    <>
      <button disabled={counter >= max} onClick={add}>
        +
      </button>
      <button disabled={counter <= min} onClick={subtract}>
        -
      </button>
      {counter}
    </>
  );
};

export default Counter;
