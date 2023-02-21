import React, { useState } from "react";
import { setModalBox } from "../commonControlFunctions";
import { handleDelete } from "../commonControlFunctions";
import edit from "../../../assests/edit.png";
import del from "../../../assets/delete.png";
import ModalBox from "../../ModalBox/ModalBox";
import { deleteConfig } from "../CommonFunctions";
const DropdownComponent = ({ type, uid,
  setInputFields}) => {

  const [openModalBox, setOpenModalBox] = useState(false);
  const [configurationState, setConfigurationState] = useState({
    id: uid,
    label: `Select :`,
    type: type,
    listOfDropdown: [],
    defaultValue: "---Select---",
  });

  console.log(configurationState.type.type);
  console.log(configurationState.listOfDropdown);
  console.log(configurationState.type);
  return (
    <form action="">
      <label>{configurationState.label}</label>
      <select>
        {configurationState.listOfDropdown.map((opt) => {
          console.log(opt);
          return <option value="">{opt.value}</option>;
        })}
      </select>
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
    </form>
  ) 
};

export default DropdownComponent;
