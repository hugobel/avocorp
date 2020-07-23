import React from "react";
import classnames from "classnames";
import "./input.scss";

const Input = (props) => {
  const { type, placeholder, value, onChange, error } = props;

  const inputClassNames = classnames("input", {
    error,
  });

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <input
      className={inputClassNames}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

Input.defaultProps = {
  type: "text",
};

export default Input;
