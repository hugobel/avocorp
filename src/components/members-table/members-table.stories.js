import React from "react";
import { random, name } from "faker";
import { boolean } from "@storybook/addon-knobs";
import MembersTable from ".";

const USER_STATUSES = ["Alive", "Deceased", "Presumed dead"];

const MOCK_MEMBERS = Array(10)
  .fill("x")
  .map(() => ({
    char_id: random.number(),
    name: name.findName(),
    status: USER_STATUSES[Math.floor(Math.random() * 3)],
    occupation: [name.jobTitle()],
  }));

export default { title: "Members Table" };

export const StandardTable = () => {
  return (
    <MembersTable
      members={MOCK_MEMBERS}
      isLoading={boolean("Loading", false)}
    />
  );
};
