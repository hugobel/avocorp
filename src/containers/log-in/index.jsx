import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Auth } from "aws-amplify";
import { actions } from "../../store/reducers/user";
import Button from "../../components/button";
import Input from "../../components/input";
import Passcode from "../../components/input/passcode";
import Text from "../../components/text";
import "./login.scss";

const LogIn = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState(null);
  const [showConfirmationInput, setShowConfirmationInput] = useState(false);

  const { user, setUser } = props;

  const isButtonDisabled = username.trim() === "" || password.trim() === "";

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (showConfirmationInput) {
        await Auth.confirmSignUp(username, code);
      } else {
        const user = await Auth.signIn(username, password);
        sessionStorage.setItem("username", user.attributes.email);
        sessionStorage.setItem(
          "jwt",
          user.signInUserSession.accessToken.jwtToken
        );
        setUser({ name: user.attributes.email });
      }
    } catch (err) {
      if (err.code === "UserNotConfirmedException") {
        setShowConfirmationInput(true);
      } else {
        setError(err.message);
      }
    }
  };

  const handleConfirm = () => {};

  if (user.name) {
    return <Redirect to="/" />;
  }

  return (
    <form className="log-in" onSubmit={handleSubmit}>
      <Text className="title" size="head-s">
        Member access
      </Text>
      <Text size="caption">Please sign in to continue.</Text>
      {error && <Text size="caption">{error}</Text>}
      {showConfirmationInput && <Passcode value={code} onChange={setCode} />}
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
