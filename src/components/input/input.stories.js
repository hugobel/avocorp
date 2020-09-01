import React, { useState } from "react";
import { text, select, boolean } from "@storybook/addon-knobs";
import Input from ".";
import Passcode from "./passcode";

export default { title: "Input" };

export const Stateful = () => {
  const [value, setValue] = useState("");

  return <Input placeholder="Placeholder" value={value} onChange={setValue} />;
};

export const Controlled = () => {
  const options = ["text", "password"];

  return (
    <Input
      disabled={boolean("Disable", false)}
      type={select("Type", options, "text")}
      placeholder={text("Placeholder", "Enter text here...")}
      value={text("Value", "")}
      onChange={console.info}
    />
  );
};

export const MFACode = () => {
  const [code, setCode] = useState("");

  return <Passcode value={code} onChange={setCode} characters={6} />;
};
