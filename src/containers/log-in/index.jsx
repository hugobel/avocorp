import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "../../store/reducers/user";
import Button from "../../components/button";
import Input from "../../components/input";
import Text from "../../components/text";
import "./login.scss";

const LogIn = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { user, setUser } = props;

  const isButtonDisabled = username.trim() === "" || password.trim() === "";

  const handleSubmit = (event) => {
    event.preventDefault();
    sessionStorage.setItem("username", username);
    setUser({ name: username });
  };

  if (user.name) {
    return <Redirect to="/" />;
  }

  return (
    <form className="log-in" onSubmit={handleSubmit}>
      <Text className="title" size="head-s">
        Member access
      </Text>
      <Text size="caption">Please sign in to continue.</Text>
      <Input placeholder="user name" value={username} onChange={setUsername} />
      <Input
        type="password"
        placeholder="password"
        value={password}
        onChange={setPassword}
      />
      <Button
        className="login-btn"
        onClick={handleSubmit}
        disabled={isButtonDisabled}
      >
        Log In
      </Button>
      <Text size="caption" className="legend">
        Don't have an account yet?&nbsp;
        <Link to="/sign-up">Sign up.</Link>
      </Text>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const actionCreators = {
  setUser: actions.set,
};

export default connect(mapStateToProps, actionCreators)(LogIn);
