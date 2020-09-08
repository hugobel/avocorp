import React from "react";
import { Table, Label, Placeholder } from "semantic-ui-react";
import Avatar from "../avatar";
import { getUserLabelColor } from "../../utils/user";
import "./members-table.scss";

const MembersTableHeader = () => {
  return (
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>ID</Table.HeaderCell>
        <Table.HeaderCell />
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Status</Table.HeaderCell>
        <Table.HeaderCell>Occupation</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  );
};

const MembersTableRow = (props) => {
  const { char_id, name, status, occupation } = props;
  const labelColor = getUserLabelColor(status);

  return (
    <Table.Row>
      <Table.Cell>{char_id}</Table.Cell>
      <Table.Cell>
        <Avatar size="32" username={name} />
      </Table.Cell>
      <Table.Cell>{name}</Table.Cell>
      <Table.Cell>
        <Label color={labelColor}>{status}</Label>
      </Table.Cell>
      <Table.Cell>{occupation.join(" // ")}</Table.Cell>
    </Table.Row>
  );
};

const PlaceholderRow = () => {
  return (
    <Table.Row>
      <Table.Cell>
        <Placeholder>
          <Placeholder.Line />
        </Placeholder>
      </Table.Cell>
      <Table.Cell>
        <Placeholder style={{ height: 32, width: 32 }}>
          <Placeholder.Image />
        </Placeholder>
      </Table.Cell>
      <Table.Cell>
        <Placeholder>
          <Placeholder.Line />
        </Placeholder>
      </Table.Cell>
      <Table.Cell>
        <Placeholder>
          <Placeholder.Line />
        </Placeholder>
      </Table.Cell>
      <Table.Cell>
        <Placeholder>
          <Placeholder.Line />
        </Placeholder>
      </Table.Cell>
    </Table.Row>
  );
};

const MembersTable = (props) => {
  const { members, isLoading } = props;

  return (
    <Table className="members-table">
      <MembersTableHeader />
      <tbody>
        {isLoading
          ? Array(10)
              .fill("x")
              .map((e, i) => {
                return <PlaceholderRow key={`placeholder-row-${i}`} />;
              })
          : members.map((member) => {
              return <MembersTableRow key={member.char_id} {...member} />;
            })}
      </tbody>
    </Table>
  );
};

export default MembersTable;
