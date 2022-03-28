import React from "react";
import Button from "./Button";

const Header = (props) => {
  const handleClick = () => {
    console.log("Click with handleClick from header");
  };

  return (
    <header className="header">
      <h1>{props.title}</h1>
      <Button
        color="purple"
        text="Show Add Task Bar"
        handleClickProp={handleClick}
      />
    </header>
  );
};
// DEFAULT PROPS
// Header.defaultProps = {
//   title: "Default Title",
// };
export default Header;
