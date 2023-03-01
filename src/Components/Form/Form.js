import "./Form.css";
import React, { useState } from "react";
import TextFieldContainer from "../Controls/TextField/TextFieldContainer";
import TextAreaContainer from "../Controls/TextAreaComponent/TextAreaContainer";
import DropdownContainer from "../Controls/DropdownComponent/DropdownContainer";
import { v4 as uuidv4 } from "uuid";
import CheckBoxContainer from "../Controls/CheckBoxComponent/CheckBoxContainer";
import AttachmentContainer from "../Controls/AttachmentComponent/AttachmentContainer";
import DroppableContainer from "../Controls/DroppableComponent/DroppableContainer";
import RadioButtonContainer from "../Controls/RadioButton/RadioButtonContainer";
import SectionHeaderContainer from "../Controls/SectionHeader/SectionHeaderContainer";
import ButtonContainer from "../Controls/ButtonComponent/ButtonContainer";
import ReviewComponent from "../Controls/ReviewComponent/ReviewComponent";

export const Form = () => {
  const [inputFields, setInputFields] = useState([]);
  const [isToggle, setIsToggle] = useState(false);
  const allowDragEvent = (e) => {
    e.preventDefault();
  };
  const uid = uuidv4();
  const handleDrop = (e) => {
    e.preventDefault();
    if (!isToggle) {
      const inputType = e.dataTransfer.getData("text");
      const inputTag = switchInput(inputType);
      console.log(inputTag);
      setInputFields((prev) => [...prev, inputTag]);
      console.log(inputFields);
    }
    setIsToggle(false);
  };

  const switchInput = (inputType) => {
    switch (inputType) {
      case "Text Field":
        return (
          <TextFieldContainer
            type={"text"}
            key={uid}
            uid={uid}
            setInputFields={setInputFields}
          />
        );

      case "Text Area":
        return (
          <TextAreaContainer
            type={"textarea"}
            key={uid}
            uid={uid}
            setInputFields={setInputFields}
          />
        );

      case "Number":
        return (
          <TextFieldContainer
            type={"number"}
            key={uid}
            uid={uid}
            setInputFields={setInputFields}
          />
        );

      case "Password":
        return (
          <TextFieldContainer
            type={"password"}
            key={uid}
            uid={uid}
            setInputFields={setInputFields}
          />
        );

      case "Button":
        return (
          <ButtonContainer
            type={"button"}
            uid={uuidv4()}
            setInputFields={setInputFields}
          />
        );

      case "Email":
        return (
          <TextFieldContainer
            type={"email"}
            key={uid}
            uid={uid}
            setInputFields={setInputFields}
          />
        );

      case "URL":
        return (
          <TextFieldContainer
            type={"url"}
            uid={uuidv4()}
            setInputFields={setInputFields}
          />
        );

      case "Time":
        return <TextFieldContainer type={"time"} 
		uid={uuidv4()}
		setInputFields={setInputFields}/>;

      case "Phone Number":
        return (
          <TextFieldContainer
            type={"tel"}
            key={uid}
            uid={uid}
            setInputFields={setInputFields}
          />
        );
      case "Date/Time":
        return (
          <TextFieldContainer
            type={"datetime-local"}
            key={uid}
            uid={uid}
            setInputFields={setInputFields}
          />
        );
      case "Dropdown":
        return (
          <DropdownContainer
            type={"dropdown"}
            uid={uuidv4()}
            setInputFields={setInputFields}
          />
        );
      case "Radio":
        return (
          <RadioButtonContainer
            type={"radio"}
            uid={uuidv4()}
            setInputFields={setInputFields}
          />
        );
      case "Section Header":
        return (
          <SectionHeaderContainer
            type={"sectionHeaderText"}
            uid={uuidv4()}
            setInputFields={setInputFields}
          />
        );
      case "Checkbox":
        return (
          <CheckBoxContainer
            type={"checkbox"}
            uid={uuidv4()}
            setInputFields={setInputFields}
          />
        );
      case "Attachment":
        return (
          <AttachmentContainer
            type={"file"}
            uid={uuidv4()}
            setInputFields={setInputFields}
          />
        );
      case "Review":
        return <ReviewComponent  
        // type={"Rate"}
        uid={uuidv4()}
        setInputFields={setInputFields}/>;
      case "Layout":
        return (
          <DroppableContainer
            type={"layout"}
            setIsToggle={setIsToggle}
            Toggle={isToggle}
            key={uid}
            uid={uid}
            setInputFields={setInputFields}
          />
        );
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
