import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Table, Label } from "semantic-ui-react";
import { membersActions } from "../../store/reducers/members";
import Avatar from "../../components/avatar";

const Members = (props) => {
  const { members, setMembers } = props;

  useEffect(() => {
    axios
      .get("https://breakingbadapi.com/api/characters?limit=10")
      .then((response) => {
        setMembers(response.data);
      });
  }, []);

  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>ID</Table.HeaderCell>
          <Table.HeaderCell />
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell>Occupation</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      {members.map((member) => {
        let labelColor = "olive";

        if (member.status === "Deceased") {
          labelColor = "red";
        } else if (member.status === "Presumed dead") {
          labelColor = "orange";
        }

        return (
          <Table.Row>
            <Table.Cell>{member.char_id}</Table.Cell>
            <Table.Cell>
              <Avatar size="32" username={member.name} />
            </Table.Cell>
            <Table.Cell>{member.name}</Table.Cell>
            <Table.Cell>
              <Label color={labelColor}>{member.status}</Label>
            </Table.Cell>
            <Table.Cell>{member.occupation.join(" // ")}</Table.Cell>
          </Table.Row>
        );
      })}
    </Table>
  );
};

const mapStateToProps = (state) => {
  return {
    members: state.members.elements,
  };
};

const actionCreators = {
  setMembers: membersActions.setElements,
};

export default connect(mapStateToProps, actionCreators)(Members);
