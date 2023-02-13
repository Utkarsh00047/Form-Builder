import React from "react";
import edit from "../../assests/edit.png";
import "./TextField.css";
import { useState } from "react";
import ModalBox from "../ModalBox/ModalBox";

const TextField = ({ type }) => {
  const [openModalBox, setOpenModalBox] = useState(false);
  const setModalBox = () => {
    setOpenModalBox(!openModalBox);
  };
  const [configurationState, setConfigurationState] = useState({
    label: `Enter ${type}`,
    type: type,
    placeholder: "",
    isRequired: false,
    isReadOnly: false,
    defaultValue: "",
  });
  return (
    <>
      <label htmlFor="textField" className="heads">
        {configurationState.label}
      </label>
      <input
        defaultValue={configurationState.defaultValue}
        id={"textField"}
        type={configurationState.type}
        placeholder={configurationState.placeholder}
        readonly={configurationState.isReadOnly}
        required={configurationState.isRequired}
        className="input_field"
      />
      <div className="configuration_button">
        <img
          alt=""
          onClick={setModalBox}
          src={edit}
          className="configuration_button"
        />
      </div>
      {openModalBox && (
        <ModalBox
          setModalBox={setModalBox}
          configurationState={configurationState}
          setConfigurationState={setConfigurationState}
        />
      )}
    </>
  );
};

export default TextField;
