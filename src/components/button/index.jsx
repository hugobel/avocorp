import React from "react";
import "./button.scss";

const Button = (props) => {
  const { children, disabled, onClick } = props;

  return (
    <button className="button" disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
