import React from "react";
import { select, text } from "@storybook/addon-knobs";
import Text from ".";

export default { title: "Text" };

export const TextWithControls = () => {
  const options = [
    "head-l",
    "head-m",
    "head-s",
    "head-xs",
    "body",
    "controls",
    "caption",
  ];

  return (
    <Text size={select("Size", options, "head-l")}>
      {text("Content", "Avocorp")}
    </Text>
  );
};
