import React from "react";
import FancyBorder from "./FancyBorder";
import Welcome from "./Welcome";
const Counter = (props) => {
  console.log(props);

  return (
    <div>
      <h5
        style={{
          color: props.color,
          border: "2px dashed",
          borderColor: props.count < 5 ? "red" : "green",
        }}
      >
        <FancyBorder color="blue">
          <Welcome name="Sara" />
        </FancyBorder>
        Counter
      </h5>
      <button onClick={props.countDown}>-</button>
      {props.count} <button onClick={props.countUp}>+</button>
      <br />
      current count value is {props.count}
      {props.count < 5 && <div>Count is in dangerous position</div>}
    </div>
  );
};

export default Counter;
