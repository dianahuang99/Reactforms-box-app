import React from "react";

const Box = (props) => {
  const divStyle = {
    backgroundColor: props.color,
    width: props.width,
    height: props.height,
  };

  const remove = () => {
    props.handleRemove(props.id);
  };

  return (
    <div>
      <div style={divStyle}></div>
      <button onClick={remove}>Remove this box</button>
    </div>
  );
};

export default Box;
