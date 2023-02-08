import React from "react";

const TextField = ({ type }) => {
	return (
		<>
			<label htmlFor="textField">Enter {type}</label>
			<input id={"textField"} type={type} />
		</>
	);
};

export default TextField;
