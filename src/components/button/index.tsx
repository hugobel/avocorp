import React from "react";
import "./button.scss";

type Props = {
  disabled?: boolean;
  onClick: () => void;
};

const Button: React.FC<Props> = (props) => {
  const { children, disabled, onClick } = props;
  return (
    <button className="button" disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
