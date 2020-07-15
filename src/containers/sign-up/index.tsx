import React from "react";
import Button from "../../components/button";
import Input from "../../components/input";

type Props = {
	switchView: () => void;
};

const SignUp: React.FC<Props> = (props) => {
	const { switchView } = props;

	return (
		<form onSubmit={console.log}>
			<h2>Welcome to Avocorp</h2>
			<Input placeholder="user name" value="" />
			<Input type="password" placeholder="password" value="" />
			<Input type="password" placeholder="repeat password" value="" />
			<Button text="Sign up" />
			<p>I have an account, <a href="#log-in" onClick={switchView}>log in.</a></p>
		</form>
	)	
};

export default SignUp;