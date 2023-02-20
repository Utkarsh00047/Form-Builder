import React, { useEffect, useState } from "react";
import edit from "../../../assests/edit.png";
import ModalBox from "../../ModalBox/ModalBox";
import del from "../../../assets/delete.png";
import { v4 as uuidv4 } from "uuid";
import { setModalBox } from "../commonControlFunctions";
import { handleDelete } from "../commonControlFunctions";
import "./AttachmentComponent.css";

const AttachmentComponent = ({ type }) => {
  const [showTextField, setshowTextField] = useState(true);
  const [openModalBox, setOpenModalBox] = useState(false);
  const [configurationState, setConfigurationState] = useState({
    id: uuidv4(),
    label: `Enter ${type} : `,
    type: type,
    isRequired: false,
  });
  console.log(configurationState.type);

  return showTextField ? (
    <div className="attachmentForFile">
      <label className="">{configurationState.label}</label>
      <input
        id={"textField"}
        type={configurationState.type}
        required={configurationState.isRequired}
      />
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
      {openModalBox && (
        <ModalBox
          setOpenModalBox={setOpenModalBox}
          configurationState={configurationState}
          setConfigurationState={setConfigurationState}
          type={type}
        />
      )}
    </div>
  ) : null;
};

export default AttachmentComponent;
