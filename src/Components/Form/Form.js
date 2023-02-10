import "./Form.css";
import React, { useState } from "react";
import TextField from "../TextField/TextField";
import ModalBox from '../ModalBox/ModalBox';

export const Form = () => {
    const [openModalBox, setOpenModalBox] = useState(false);
    const setModalBox = () => {
    setOpenModalBox(!openModalBox);
  };
  
	const [inputFields, setInputFields] = useState([]);
	const allowDragEvent = (e) => {
		e.preventDefault();
	};
	const handleDrop = (e) => {
		e.preventDefault();
		const inputType = e.dataTransfer.getData("text");
		const inputTag = switchInput(inputType);
		console.log(inputTag);
		// const form = document.getElementsByClassName("Form_section")[0];
		// const inputField = document.createElement("input");
		// inputField.type = inputType === "text Field" && "text";
		// form.appendChild(inputField);
		// form.appendChild(<TextField />);
		// ReactDOM.render(<TextField />, form);
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
		<>
			<form
			id="formPage"
				className="Form_section"
				onDragOver={(e) => allowDragEvent(e)}
				onDrop={(e) => handleDrop(e)}
			>
				<h1>Form</h1>

				{inputFields.map((elem) => elem)}
				{/* <label for="fname">Employee Name</label>
				<input type="text" id="fname" />

				<label for="pname">Project Name</label>
				<input type="text" id="pname" />

				<label for="Ecode">Employee Code</label>
				<input type="text" id="Ecode" />

				<label for="Rmanager">Reporting Manager</label>
				<input type="text" id="Rmanager" />
				<div className="form_padding">
					<a href="#" className="button_submit">
						Submit
					</a>
				</div> */}
			</form>
            <button onClick={setModalBox}>Modal Box</button>
          {openModalBox && <ModalBox />}
		</>
	);
};
