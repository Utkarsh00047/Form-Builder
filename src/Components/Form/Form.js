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
        	return <TextFieldContainer type={"text"}  uid={uuidv4()} setInputFields={setInputFields} />;

			case "Text Area":
				return <TextAreaContainer type={"textarea"} uid={uuidv4()} setInputFields={setInputFields}/>;

			case "Number":
				return <TextFieldContainer type={"number"} uid={uuidv4()} setInputFields={setInputFields}/>;

			case "Password":
				return <TextFieldContainer type={"password"} uid={uuidv4()} setInputFields={setInputFields}/>;

			case "Button":
				return <ButtonComponent type={"button"} uid={uuidv4()} setInputFields={setInputFields}/>;

			case "Email":
				return <TextFieldContainer type={"email"} uid={uuidv4()} setInputFields={setInputFields}/>;

			case "URL":
				return <TextFieldContainer type={"url"} uid={uuidv4()} setInputFields={setInputFields}/>;

			case "Phone Number":
				return <TextFieldContainer type={"tel"} uid={uuidv4()} setInputFields={setInputFields}/>;
			case "Date/Time":
				return <TextFieldContainer type={"datetime-local"} uid={uuidv4()} setInputFields={setInputFields}/>;
			case "Dropdown":
				return <DropdownComponent type={"dropdown"} uid={uuidv4()} setInputFields={setInputFields}/>;
			case "Radio" :
				return <RadioButton type={"radio"} uid={uuidv4()} setInputFields={setInputFields}/>;
			case "Section Header":
				return <SectionHeader type={"sectionHeaderText"} uid={uuidv4()} setInputFields={setInputFields}/>
			case "Checkbox":
				return <CheckBoxComponent type={"checkbox"} uid={uuidv4()} setInputFields={setInputFields}/>
			case "Attachment":
				return <AttachmentComponent type={"file"} uid={uuidv4()} setInputFields={setInputFields}/>

		case "Layout":
			return <Droppable
			setIsToggle={setIsToggle}
			Toggle={isToggle}
			uid={uuidv4()} 
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