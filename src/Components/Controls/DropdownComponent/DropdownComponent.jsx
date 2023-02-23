import React, { useState } from "react";
import { setModalBox } from "../commonControlFunctions";
import { handleDelete } from "../commonControlFunctions";
import edit from "../../../assests/edit.png";
import del from "../../../assets/delete.png";
import ModalBox from "../../ModalBox/ModalBox";

const DropdownComponent = ({ type }) => {
  const [showTextField, setshowTextField] = useState(true);
  const [openModalBox, setOpenModalBox] = useState(false);
  const [configurationState, setConfigurationState] = useState({
    label: `Select :`,
    type: type,
    listOfDropdown: [{ type: "", id: "", value: "Value 1" }],
    defaultValue: "---Select---",
  });

  console.log(configurationState.type.type);
  console.log(configurationState.listOfDropdown);
  console.log(configurationState.type);
  return showTextField ? (
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
    </form>
  ) : null;
};

export default DropdownComponent;
