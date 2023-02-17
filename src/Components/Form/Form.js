import "./Form.css";
import React, { useState } from "react";
// import TextField from "../Controls/TextField/TextField";
import TextAreaComponent from "../Controls/TextAreaComponent/TextAreaComponent";
import ButtonComponent from "../Controls/ButtonComponent.jsx/ButtonComponent";
import TextFieldContainer from "../Controls/TextField/TextFieldContainer";

export const Form = () => {
	const [inputFields, setInputFields] = useState([]);
	const allowDragEvent = (e) => {
		e.preventDefault();
	};
	const handleDrop = (e) => {
		e.preventDefault();
		// const inputType = e.dataTransfer.getData("text");
		// const inputTag = switchInput(inputType);
		setInputFields((prev) => [
			...prev,
			switchInput(e.dataTransfer.getData("text")),
		]);
	};
	const switchInput = (inputType) => {
		switch (inputType) {
			case "Text Field":
				return <TextFieldContainer type={"text"} />;

			case "Text Area":
				return <TextAreaComponent />;

			case "Number":
				return <TextFieldContainer type={"number"} />;

			case "Password":
				return <TextFieldContainer type={"password"} />;

			case "Button":
				return <ButtonComponent />;

			case "Email":
				return <TextFieldContainer type={"email"} />;

			case "URL":
				return <TextFieldContainer type={"url"} />;

			case "Phone Number":
				return <TextFieldContainer type={"tel"} />;

			case "Date/Time":
				return <TextFieldContainer type={"datetime-local"} />;

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
