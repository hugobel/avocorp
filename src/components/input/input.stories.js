import React, { useState } from "react";
import { text, select, boolean } from "@storybook/addon-knobs";
import Input from ".";
import Passcode from "./passcode";

export default { title: "Input" };

export const InputWithText = () => {
  const options = ["text", "password"];

  return (
    <Input
      disabled={boolean("Disable", false)}
      type={select("Type", options, "text")}
      placeholder={text("Placeholder", "Enter text here...")}
      value={text("Value", "")}
    />
  );
};

export const PasscodeInput = () => {
  const [code, setCode] = useState("");

  return <Passcode value={code} onChange={setCode} />;
};
