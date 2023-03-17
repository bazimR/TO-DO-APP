import React from "react";
import Button from "./Button";

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button text="ADD" color="green"/>
    </header>
  );
};

Header.defaultProps = {
  title: "TO-DO LIST",
};
export default Header;
