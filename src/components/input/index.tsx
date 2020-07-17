import React from "react";
import classnames from "classnames";
import "./input.scss";

type Props = {
  type?: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  error?: boolean;
};

const Input: React.FC<Props> = (props) => {
  const { type, placeholder, value, onChange, error } = props;

  const inputClassNames = classnames("input", {
    error,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
