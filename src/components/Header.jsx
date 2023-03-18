import React from "react";
import Button from "./Button";

const Header = ({ title, seeAdd, seeAddStatus }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button text={seeAddStatus?'Close':'Add'} color={seeAddStatus?'red':'green'} onClick={seeAdd} />
    </header>
  );
};

Header.defaultProps = {
  title: "TO-DO LIST",
};
export default Header;
