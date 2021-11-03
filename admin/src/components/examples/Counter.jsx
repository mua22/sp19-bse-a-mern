import React from "react";
const Counter = () => {
  const [count, setCount] = React.useState(5);
  const countUp = () => {
    setCount(count + 1);
    // count = count + 1;
    // alert("count valus is " + count);
  };
  const countDown = () => {
    setCount(count - 1);
    // count = count - 1;
    // alert("count valus is " + count);
  };
  return (
    <div>
      <h5>Counter</h5>
      <button onClick={countDown}>-</button>
      {count} <button onClick={countUp}>+</button>
      current count value is {count}
    </div>
  );
};

export default Counter;
