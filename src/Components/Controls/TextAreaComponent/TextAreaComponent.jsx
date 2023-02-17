import React, { useState } from "react";
import { setModalBox } from "../commonControlFunctions";
import { handleDelete } from "../commonControlFunctions";
import edit from "../../../assests/edit.png";
import del from "../../../assets/delete.png";
import ModalBox from "../../ModalBox/ModalBox";
import question from "../../../assests/question.png";
import "./TextAreaComponent.css";

const TextAreaComponent = () => {
  const [showTextField, setshowTextField] = useState(true);
  const [openModalBox, setOpenModalBox] = useState(false);
  const [configurationState, setConfigurationState] = useState({
    label: `Enter text`,
    type: "textarea",
    placeholder: "",
    isRequired: false,
    isReadOnly: false,
    defaultValue: "",
    rows: 3,
  });
  return showTextField ? (
    <>
      <div className="configuration_button">
        <img
          alt=""
          onClick={() => setModalBox(setOpenModalBox)}
          src={edit}
          className="configuration_button"
        />
        <img
          src={del}
          alt=""
          className="delicon"
          id="del"
          onClick={() => handleDelete(setshowTextField)}
        />
      </div>
      <div className="textArea_heading">
        <label htmlFor="textArea" className="label_textArea">
          {configurationState.label}
        </label>
        <img
          src={question}
          alt=""
          className="help_text"
          id="helpText"
          // onClick={() => handleDelete(setshowTextField)}
        />
      </div>
      <textarea
        className="textArea"
        id="textArea"
        name="textArea"
        rows={configurationState.rows}
        cols={50}
      />
      {openModalBox && (
        <ModalBox
          setOpenModalBox={setOpenModalBox}
          configurationState={configurationState}
          setConfigurationState={setConfigurationState}
        />
      )}
    </>
  ) : null;
};

export default TextAreaComponent;
