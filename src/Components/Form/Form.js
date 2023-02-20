import "./Form.css";
import React, { useState } from "react";
import TextField from "../TextField/TextField";
import { Droppable } from "../DroppableComponent/Droppable";

export const Form = () => {
  const [inputFields, setInputFields] = useState([]);
  const [isToggle, setIsToggle] = useState(false);
  const allowDragEvent = (e) => {
    e.preventDefault();
  };
  const handleDrop = (e) => {
    e.preventDefault();
	if(!isToggle){
    const inputType = e.dataTransfer.getData("text");
    const inputTag = switchInput(inputType);
    console.log(inputTag);
    setInputFields((prev) => [...prev, inputTag]);
	console.log(inputFields);
  }setIsToggle(false);
};


  const switchInput = (inputType) => {
    switch (inputType) {
      case "Text Field":
        return <TextField type={"text"} />;

      case "Text Area":
        return <TextField type={"text"} />;

      case "Password":
        return <TextField type={"password"} />;

		case "Layout":
			return <Droppable
			setIsToggle={setIsToggle}
			Toggle={isToggle}
			/>;
      default:
        break;
    }
  };
//   const SwitchInput=(inputType)=>{
// 	switch(inputType){
// 		case "Layout":
// 			return <Droppable/>;
// 		default:
// 			break;
// 	}
//   }

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
      {/* {openModalBox && <ModalBox />} */}
    </div>
  );
};