import React from "react";
import { useState } from "react";
import edit from "../../../assests/edit.png";
import del from "../../../assets/delete.png";
import ModalBox from "../../ModalBox/ModalBox";
import { setModalBox } from "../commonControlFunctions";
import { handleDelete } from "../commonControlFunctions";

function CheckBoxComponent({ type }) {
  const [showTextField, setshowTextField] = useState(true);
  const [openModalBox, setOpenModalBox] = useState(false);
  const [configurationState, setConfigurationState] = useState({
    label: `Select :`,
    type: type,
    listOfDropdown: [],
  });
  console.log(configurationState.type);
  return showTextField ? (
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
            //{opt.value}
          );
          //return <input value="">{opt.value}</input>;
        })}
      </div>
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
}

export default CheckBoxComponent;
