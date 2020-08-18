import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Sidebar from "../../containers/sidebar";

import "./home.scss";

const Home = (props) => {
  const { children, username } = props;

  if (!username) {
    return <Redirect to="/log-in" />;
  }

  return (
    <>
      <Sidebar />
      <div className="page-home">{children}</div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.user.name,
  };
};

export default connect(mapStateToProps)(Home);
