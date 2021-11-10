import React from "react";
const FancyBorder = (props) => {
  return (
    <div style={{ border: "1px solid", borderColor: props.color }}>
      {props.children}
    </div>
  );
};
export default FancyBorder;
