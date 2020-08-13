import React from "react";
import { number, text } from "@storybook/addon-knobs";
import Avatar from ".";

export default { title: "Avatar" };

export const AvatarWithControls = () => {
  return (
    <Avatar
      size={number("size", 64, { min: 12, max: 360 })}
      username={text("username", "hola@avocorp.com")}
    />
  );
};
