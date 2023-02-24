import "./Form.css";
import React, { useState } from "react";
import { Droppable } from "../DroppableComponent/Droppable";
import ButtonComponent from "../Controls/ButtonComponent/ButtonComponent";
import TextFieldContainer from "../Controls/TextField/TextFieldContainer";
import DropdownComponent from "../Controls/DropdownComponent/DropdownComponent";
import RadioButton from "../Controls/RadioButton/RadioButton";
import SectionHeader from "../Controls/SectionHeader/SectionHeader";
import CheckBoxComponent from "../Controls/CheckBoxComponent/CheckBoxComponent";
import AttachmentComponent from "../Controls/AttachmentComponent/AttachmentComponent";
import TextAreaContainer from "../Controls/TextAreaComponent/TextAreaContainer";
import { v4 as uuidv4 } from "uuid";

export const Form = () => {
  const [inputFields, setInputFields] = useState([]);
  const [isToggle, setIsToggle] = useState(false);
  const allowDragEvent = (e) => {
    e.preventDefault();
  };
  const uid=uuidv4();
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
        	return <TextFieldContainer type={"text"} key={uid} uid={uid} setInputFields={setInputFields} />;

			case "Text Area":
				return <TextAreaContainer type={"textarea"} key={uid} uid={uid} setInputFields={setInputFields}/>;

			case "Number":
				return <TextFieldContainer type={"number"} key={uid} uid={uid} setInputFields={setInputFields}/>;

			case "Password":
				return <TextFieldContainer type={"password"} key={uid} uid={uid}setInputFields={setInputFields}/>;

			case "Button":
				return <ButtonComponent type={"button"} key={uid} uid={uid} setInputFields={setInputFields}/>;

			case "Email":
				return <TextFieldContainer type={"email"} key={uid} uid={uid} setInputFields={setInputFields}/>;

			case "URL":
				return <TextFieldContainer type={"url"} key={uid} uid={uid}setInputFields={setInputFields}/>;

			case "Phone Number":
				return <TextFieldContainer type={"tel"} key={uid} uid={uid} setInputFields={setInputFields}/>;
			case "Date/Time":
				return <TextFieldContainer type={"datetime-local"} key={uid} uid={uid} setInputFields={setInputFields}/>;
			case "Dropdown":
				return <DropdownComponent type={"dropdown"} key={uid} uid={uid}setInputFields={setInputFields}/>;
			case "Radio" :
				return <RadioButton type={"radio"} key={uid} uid={uid} setInputFields={setInputFields}/>;
			case "Section Header":
				return <SectionHeader type={"sectionHeaderText"} key={uid} uid={uid} setInputFields={setInputFields}/>
			case "Checkbox":
				return <CheckBoxComponent type={"checkbox"} key={uid} uid={uid} setInputFields={setInputFields}/>
			case "Attachment":
				return <AttachmentComponent type={"file"} key={uid} uid={uid} setInputFields={setInputFields}/>

		case "Layout":
			return <Droppable
			setIsToggle={setIsToggle}
			Toggle={isToggle}
			key={uid} uid={uid}
			setInputFields={setInputFields}
			/>;
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