import React, { useState, useEffect } from "react";
import "./Droppable.css";
import del from "../../../assets/delete.png";
import TextFieldContainer from "../TextField/TextFieldContainer";
import { deleteConfig } from "../CommonFunctions";
import { v4 as uuidv4 } from "uuid";
import TextAreaContainer from "../TextAreaComponent/TextAreaContainer";
import ButtonContainer from "../ButtonComponent.jsx/ButtonContainer";
import DropdownContainer from "../DropdownComponent/DropdownContainer";
import RadioButtonContainer from "../RadioButton/RadioButtonContainer";
import SectionHeaderContainer from "../SectionHeader/SectionHeaderContainer";
import CheckBoxContainer from "../CheckBoxComponent/CheckBoxContainer";
import AttachmentContainer from "../AttachmentComponent/AttachmentContainer";
export const Droppable = ({
  openPreview,
  type,
  uid,
  setInputFields,
  setIsToggle,
  Toggle,
  insertConfig,
  updateConfig,
  layoutInput,
  inputLayoutFields,
}) => {
  //   const [layoutInput, setLayoutInput] = useState([]);
  const [configurationState, setConfigurationState] = useState({
    id: uid,
    helptext: "",
    label: `Enter text`,
    type: type,
    placeholder: "",
    isRequired: false,
    isReadOnly: false,
    defaultValue: "",
    rows: 3,
  });

  useEffect(() => {
    console.log(layoutInput);
  }, [layoutInput]);

  const allowDragEvent = (e) => {
    e.preventDefault();
  };
  const handleDrop = (e) => {
    e.preventDefault();
    const inputType = e.dataTransfer.getData("text");
    const inputTag = SwitchInput(inputType);
    console.log(inputTag);
    const highlight = document.getElementById("GridSection");
    highlight.classList.add("Droppable_highlight");
    inputLayoutFields(inputTag);
    console.log(layoutInput);
  };
  console.log("Hiiiiiiii");

  const handleDragEnter = () => {
    setIsToggle(true);
  };

  const handleDragLeave = () => {
    setIsToggle(!Toggle);
  };

  const SwitchInput = (inputType) => {
    switch (inputType) {
      case "Text Field":
        return (
          <TextFieldContainer
            type={"text"}
            uid={uuidv4()}
            setInputFields={layoutInput}
          />
        );

      case "Text Area":
        return (
          <TextAreaContainer
            type={"textarea"}
            uid={uuidv4()}
            setInputFields={layoutInput}
          />
        );

      case "Number":
        return (
          <TextFieldContainer
            type={"number"}
            uid={uuidv4()}
            setInputFields={layoutInput}
          />
        );

      case "Password":
        return (
          <TextFieldContainer
            type={"password"}
            uid={uuidv4()}
            setInputFields={layoutInput}
          />
        );

      case "Button":
        return (
          <ButtonContainer
            type={"button"}
            uid={uuidv4()}
            setInputFields={layoutInput}
          />
        );

      case "Email":
        return (
          <TextFieldContainer
            type={"email"}
            uid={uuidv4()}
            setInputFields={layoutInput}
          />
        );

      case "URL":
        return (
          <TextFieldContainer
            type={"url"}
            uid={uuidv4()}
            setInputFields={layoutInput}
          />
        );

      case "Phone Number":
        return (
          <TextFieldContainer
            type={"tel"}
            uid={uuidv4()}
            setInputFields={layoutInput}
          />
        );

      case "Date/Time":
        return (
          <TextFieldContainer
            type={"datetime-local"}
            uid={uuidv4()}
            setInputFields={layoutInput}
          />
        );

      case "Dropdown":
        return (
          <DropdownContainer
            type={"dropdown"}
            uid={uuidv4()}
            setInputFields={layoutInput}
          />
        );

      case "Radio":
        return (
          <RadioButtonContainer
            type={"radio"}
            uid={uuidv4()}
            setInputFields={layoutInput}
          />
        );

      case "Section Header":
        return (
          <SectionHeaderContainer
            type={"sectionHeaderText"}
            uid={uuidv4()}
            setInputFields={layoutInput}
          />
        );

      case "Checkbox":
        return (
          <CheckBoxContainer
            type={"checkbox"}
            uid={uuidv4()}
            setInputFields={layoutInput}
          />
        );

      case "Attachment":
        return (
          <AttachmentContainer
            type={"file"}
            uid={uuidv4()}
            setInputFields={layoutInput}
          />
        );

      default:
        break;
    }
  };

  useEffect(() => {
    insertConfig(configurationState);
  }, []);

  useEffect(() => {
    updateConfig(configurationState);
  }, [configurationState]);

  return (
    <div className="Drop">
      {openPreview ? (
        <div
          id="GridSection"
          className="DroppableSection"
          onDragOver={(e) => allowDragEvent(e)}
          onDrop={(e) => handleDrop(e)}
          onDragEnter={() => handleDragEnter()}
          onDragLeave={() => handleDragLeave()}
        >
          {/* <h2>columns</h2> */}
          {/* {inputFields.map((elem) => elem)} */}
          <div className="DropArea">
            {layoutInput.map((layoutInput, i) => (
              <div className="DropElement" key={i}>
                {layoutInput}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <div
            id="GridSection"
            className="DroppableSection"
            onDragOver={(e) => allowDragEvent(e)}
            onDrop={(e) => handleDrop(e)}
            onDragEnter={() => handleDragEnter()}
            onDragLeave={() => handleDragLeave()}
          >
            {/* <h2>columns</h2> */}
            {/* {inputFields.map((elem) => elem)} */}
            <div className="DropArea">
              {layoutInput.map((layoutInput, i) => (
                <div className="DropElement" key={i}>
                  {layoutInput}
                </div>
              ))}
            </div>
          </div>
          <img
            src={del}
            alt=""
            className="delicon"
            id="del"
            onClick={() => deleteConfig(setInputFields, configurationState)}
          />
        </>
      )}
    </div>
  );
};

// export default Droppable
