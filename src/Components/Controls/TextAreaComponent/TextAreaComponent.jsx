import React, { useState } from "react";
import { setModalBox } from "../commonControlFunctions";
import { handleDelete } from "../commonControlFunctions";
import edit from "../../../assests/edit.png";
import del from "../../../assets/delete.png";
import ModalBox from "../../ModalBox/ModalBox";
import question from "../../../assests/question.png";
import "./TextAreaComponent.css";
import { deleteConfig } from "../CommonFunctions";

const TextAreaComponent = ({ type , uid,
  setInputFields}) => {
  const [openModalBox, setOpenModalBox] = useState(false);
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

  console.log(configurationState.type);
  return (
<div className="FieldBody">
      <div className="textArea_heading">
        <div className="TeaxtAreaHeadings">
        <label htmlFor="textArea" className="label_textArea">
          {configurationState.label}
        </label>
        {configurationState.helptext && (
          <div className="tooltip">
            <img
              onMouseEnter={configurationState.helptext}
              src={question}
              alt=""
              className="help_text"
              id="helpText"
              // onClick={() => handleDelete(setshowTextField)}
            />
            
            <span className="tooltiptext">{configurationState.helptext}</span>
          </div>
        )}
        </div>
        <textarea
          className="textArea"
          id="textArea"
          name="textArea"
          rows={configurationState.rows}
          cols={50}
        />
      </div>

      <div className="configuration_button">
        <img
          alt=""
          onClick={() => setModalBox(setOpenModalBox)}
          src={edit}
          className="editicon"
        />
        <img
          src={del}
          alt=""
          className="delicon"
          id="del"
          onClick={() =>deleteConfig(setInputFields, configurationState)}
        />
      </div>
      {openModalBox && (
        <ModalBox
          type={type}
          setOpenModalBox={setOpenModalBox}
          configurationState={configurationState}
          setConfigurationState={setConfigurationState}
        />
      )}
    </div>
  )
};

export default TextAreaComponent;
