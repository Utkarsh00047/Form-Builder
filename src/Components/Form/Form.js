import "./Form.css";
import React, { useState } from "react";
import TextField from "../Controls/TextField/TextField";
import TextAreaComponent from "../Controls/TextAreaComponent/TextAreaComponent";
import ButtonComponent from "../Controls/ButtonComponent.jsx/ButtonComponent";

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
				return <TextField type={"text"} />;

			case "Text Area":
				return <TextAreaComponent />;

			case "Number":
				return <TextField type={"number"} />;

			case "Password":
				return <TextField type={"password"} />;

			case "Button":
				return <ButtonComponent />;

			case "Email":
				return <TextField type={"email"} />;

			case "URL":
				return <TextField type={"url"} />;

			case "Phone Number":
				return <TextField type={"tel"} />;

			case "Date/Time":
				return <TextField type={"datetime-local"} />;

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
				<h1>Drag & Drop a form control </h1>

				{inputFields.map((elem) => elem)}
			</form>
		</div>
	);
};
