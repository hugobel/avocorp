import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";
import { actions } from "../../store/reducers/user";
import Logo from "../../components/logo";
import Menu from "./menu";
import Avatar from "../../components/avatar";
import "./sidebar.scss";

const Sidebar = (props) => {
  const { username, setUser } = props;
  const history = useHistory();

  const handleLogout = () => {
    sessionStorage.removeItem("username");
    setUser({});
  };

  const handleDropdownChange = (event, data) => {
    if (data.value === "log-out") {
      handleLogout();
      return;
    }

    history.push(`/${data.value}`);
  };

  return (
    <aside className="sidebar">
      <Logo className="sidebar-logo" onClick={() => history.push("/")} />
      <Menu />
      <Dropdown
        value={null}
        trigger={<Avatar size="48" username={username} />}
        onChange={handleDropdownChange}
        options={[
          { text: "Profile", value: "profile" },
          { text: "See transactions", value: "user-transactions" },
          { text: "Log out", value: "log-out" },
        ]}
      />
    </aside>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.user.name,
  };
};

const actionCreators = {
  setUser: actions.set,
};

export default connect(mapStateToProps, actionCreators)(Sidebar);
