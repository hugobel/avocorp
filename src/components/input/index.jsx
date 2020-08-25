import React from "react";
import classnames from "classnames";
import "./input.scss";

const Input = React.forwardRef((props, ref) => {
  const {
    type,
    className,
    placeholder,
    value,
    onChange,
    error,
    disabled,
    ...rest
  } = props;

  const inputClassNames = classnames("input", className, {
    error,
  });

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <input
      ref={ref}
      disabled={disabled}
      className={inputClassNames}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      {...rest}
    />
  );
});

Input.defaultProps = {
  type: "text",
};

export default Input;
