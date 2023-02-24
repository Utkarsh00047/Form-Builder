import React, { useState } from "react";
import edit from "../../../assests/edit.png";
import ModalBox from "../../ModalBox/ModalBox";
import del from "../../../assets/delete.png";
import { setModalBox } from "../commonControlFunctions";
import "./AttachmentComponent.css";
import { deleteConfig } from "../CommonFunctions";

const AttachmentComponent = ({ type , uid,
  setInputFields}) => {
  const [openModalBox, setOpenModalBox] = useState(false);
  const [configurationState, setConfigurationState] = useState({
    id: uid,
    // id: uuidv4(),
    label: `Enter ${type} : `,
    type: type,
    isRequired: false,
  });
  console.log(configurationState.type);

  return (
    <>
    <div className="attachmentForFile">
      <label className="LabelforFile">{configurationState.label}</label>
      <input
        id={"textField"}
        type={configurationState.type}
        required={configurationState.isRequired}
        className="InputforFile"
      />
    
      {openModalBox && (
        <ModalBox
          setOpenModalBox={setOpenModalBox}
          configurationState={configurationState}
          setConfigurationState={setConfigurationState}
          type={type}
        />
      )}
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
        onClick={() => deleteConfig(setInputFields, configurationState)}
      />
    </div>
    </>
  )
};


export default AttachmentComponent;
