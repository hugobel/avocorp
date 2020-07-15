import React from "react";

type Props = {
	type?: string;
	placeholder: string;
	value: string;
};

const Input: React.FC<Props> = (props) => {
	const { type, placeholder, value } = props;

	return <input type={type} placeholder={placeholder} value={value} />
};

Input.defaultProps = {
	type: "text",
}

export default Input;