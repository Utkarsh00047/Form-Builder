import React from "react";
import { useState } from "react";
import edit from "../../../assests/edit.png";
import del from "../../../assets/delete.png";
import ModalBox from "../../ModalBox/ModalBox";
import { setModalBox } from "../commonControlFunctions";

import { deleteConfig } from "../CommonFunctions";
function CheckBoxComponent({ type, uid,
  setInputFields}) {
  
  const [openModalBox, setOpenModalBox] = useState(false);
  const [configurationState, setConfigurationState] = useState({
    id: uid,
    label: `Select :`,
    type: type,
    listOfDropdown: [{ type: "", id: "", value: "Value 1" }],
  });
  console.log(configurationState.type);
  return (
    <form action="/action_page.php">
      <label>{configurationState.label}</label>
      <div>
        {configurationState.listOfDropdown.map((opt) => {
          console.log(opt);
          return (
            <label>
              <input type="checkbox" value={opt.value}></input>
              {opt.value}
            </label>
          );
        })}
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
}

export default CheckBoxComponent;
