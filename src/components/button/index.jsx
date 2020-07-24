import React from "react";
import classnames from "classnames";
import "./button.scss";

const Button = (props) => {
  const { children, disabled, size, className, onClick } = props;

  const classes = classnames("button", size, className);

  return (
    <button className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  size: "medium",
};

export default Button;
