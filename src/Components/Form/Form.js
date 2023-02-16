import "./Form.css";
import React, { useState ,useEffect } from "react";
import TextField from "../TextField/TextField";

export const Form = () => {
  
	const [inputFields, setInputFields] = useState([]);
	const allowDragEvent = (e) => {
		e.preventDefault();
	};
	const handleDrop = (e) => {
		e.preventDefault();
		const inputType = e.dataTransfer.getData("text");
		const inputTag = switchInput(inputType);
		console.log(inputTag);
		setInputFields((prev) => [...prev, inputTag]);
	};
	const switchInput = (inputType) => {
		switch (inputType) {
			case "Text Field":
        return <TextField type={"text"} />;

			case "Text Area":
				return<TextField type={"text"}/>;
						
			case "Password":
				return <TextField type={"password"} />;

			default:
				break;
		}
	};  	

	return (
		<div className="highlight">
			<form
			id="formPage"
				className="Form_section"
				onDragOver={(e) => allowDragEvent(e)}
				onDrop={(e) => handleDrop(e)}
			>
				<h2>Drag & Drop a form control </h2>

				{inputFields.map((elem) => elem)}
			</form>
		</div>
	);
};
