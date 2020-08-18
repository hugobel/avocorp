import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Table } from "semantic-ui-react";
import { membersActions } from "../../store/reducers/members";

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
      {members.map((member) => {
        return (
          <Table.Row>
            <Table.Cell>{member.char_id}</Table.Cell>
            <Table.Cell>{member.name}</Table.Cell>
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
