import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { membersActions } from "../../store/reducers/members";
import MembersTable from "../../components/members-table";

const Members = (props) => {
  const { members, setMembers, isLoading, setIsLoading } = props;

  useEffect(() => {
    setIsLoading(true);

    axios
      .get("https://breakingbadapi.com/api/characters?limit=10")
      .then((response) => {
        setMembers(response.data);
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return <MembersTable members={members} isLoading={isLoading} />;
};

const mapStateToProps = (state) => {
  return {
    members: state.members.elements,
    isLoading: state.members.isLoading,
  };
};

const actionCreators = {
  setMembers: membersActions.setElements,
  setIsLoading: membersActions.setIsLoading,
};

export default connect(mapStateToProps, actionCreators)(Members);
