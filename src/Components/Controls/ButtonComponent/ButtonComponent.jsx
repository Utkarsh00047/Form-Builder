import React, { useState } from "react";
import edit from "../../../assests/edit.png";
import del from "../../../assets/delete.png";
import { setModalBox } from "../commonControlFunctions";
import ModalBox from "../../ModalBox/ModalBox";
import { deleteConfig } from "../CommonFunctions";
import "./ButtonComponent.css"

const ButtonComponent = ({type, uid,
  setInputFields}) => {
  const [openModalBox, setOpenModalBox] = useState(false);
  const [configurationState, setConfigurationState] = useState({
    id: uid,
    label: `Button`,
    type: type ? type : "",
  });

  console.log(configurationState.type);
  return (
    <div className="FieldBody">
    <div className="btn">
      <button type={configurationState.type} className="btn1">{configurationState.label}</button>
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
          onClick={() => deleteConfig(setInputFields, configurationState)}
        />
      </div>
      {openModalBox && (
        <ModalBox
          setOpenModalBox={setOpenModalBox}
          configurationState={configurationState}
          setConfigurationState={setConfigurationState}
          type={type}
        />
      )}
    </div>
    </div>
  ) 
};

export default ButtonComponent;
