import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "../../store/reducers/user";
import Logo from "../../components/logo";
import Menu from "./menu";
import Avatar from "../../components/avatar";
import "./sidebar.scss";

const Sidebar = (props) => {
  const { username, setUser } = props;

  const handleLogout = () => {
    setUser({});
  };

  if (!username) {
    return <Redirect to="/log-in" />;
  }

  return (
    <aside className="sidebar">
      <Logo />
      <Menu />
      <Avatar size="32" username={username} onClick={handleLogout} />
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
