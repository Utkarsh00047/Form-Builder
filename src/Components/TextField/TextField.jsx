import React from "react";

const TextField = ({ type }) => {
	return (
		<>
			<label htmlFor="textField" className="heads">Enter {type}</label>
			<input id={"textField"} type={type} className="input_feild"/>
		</>
	);
};

export default TextField;
