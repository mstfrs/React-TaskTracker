import React from "react";

const Button = ({ color, text, handleClickProp }) => {
  //   const handleClick = () => {
  //     console.log("Click with handleClick");
  //   };
  return (
    <div>
      <button
        className="btn"
        onClick={handleClickProp}
        style={{ backgroundColor: color }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
