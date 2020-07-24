import React from "react";
import { text, boolean, select } from "@storybook/addon-knobs";
import Button from ".";

export default { title: "Button" };

export const ButtonWithText = () => {
  const options = ["small", "medium", "large"];

  return (
    <Button
      size={select("Size", options, "medium")}
      disabled={boolean("Disabled", false)}
    >
      {text("Text", "Hello world!")}
    </Button>
  );
};
