import React, { useState } from "react";
import edit from "../../../assests/edit.png";
import del from "../../../assets/delete.png";
import { setModalBox } from "../commonControlFunctions";
import { handleDelete } from "../commonControlFunctions";
import ModalBox from "../../ModalBox/ModalBox";

const ButtonComponent = (type) => {
  const [openModalBox, setOpenModalBox] = useState(false);
  const [showTextField, setshowTextField] = useState(true);
  const [configurationState, setConfigurationState] = useState({
    label: `Button`,
    type: type ? type : "",
  });

  console.log(configurationState.type);
  return showTextField ? (
    <div>
      <button type={configurationState.type}>{configurationState.label}</button>
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
  ) : (
    ""
  );
};

export default ButtonComponent;
