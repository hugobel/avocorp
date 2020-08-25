import React, { useRef, useState } from "react";
import classnames from "classnames";
import Input from ".";

const Passcode = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const hiddenInputRef = useRef(null);
  const { value, onChange, characters } = props;

  const numbers = value.split("");

  const focusHidden = () => {
    hiddenInputRef.current.focus();
  };

  const handleChange = (code) => {
    onChange(code.replace(/\D/g, ""));
  };

  return (
    <>
      <Input
        className="hidden"
        ref={hiddenInputRef}
        value={value}
        onChange={handleChange}
        maxLength={characters}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {Array(characters)
        .fill("")
        .map((current, index) => {
          const className = classnames("single-char", {
            focus: isFocused && numbers.length === index,
          });

          return (
            <Input
              key={`character-input-${index}`}
              className={className}
              value={numbers[index] || ""}
              onFocus={focusHidden}
              placeholder="_"
            />
          );
        })}
    </>
  );
};

Passcode.defaultProps = {
  characters: 6,
};

export default Passcode;
