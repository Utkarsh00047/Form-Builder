import React from "react";
import { useState } from "react";
import edit from "../../../assests/edit.png";
import del from "../../../assets/delete.png";
import ModalBox from "../../ModalBox/ModalBox";
import { setModalBox } from "../commonControlFunctions";
import { handleDelete } from "../commonControlFunctions";

function RadioButton({ type }) {
  const [showTextField, setshowTextField] = useState(true);
  const [openModalBox, setOpenModalBox] = useState(false);
  const options = [
    { defaultOptions: "Option 1" },
    { defaultOptions: "Option 2" },
  ];
  const [configurationState, setConfigurationState] = useState({
    label: `Select :`,
    type: type,
    listOfDropdown: [],
    defaultListOfDropdown: [options],
  });

  console.log(configurationState.type);
  console.log(configurationState.defaultListOfDropdown);
  return showTextField ? (
    <form action="/action_page.php">
      <label>{configurationState.label}</label>
      <div>
        {/* {configurationState.defaultListOfDropdown.map((opt) => {
          console.log(opt);
          return (
            <div>
              <label defaultValue={"Hiii"}>
                {configurationState.defaultListOfDropdown}
                <input type="radio" name="readAnswer"></input>
                {opt.value}
              </label>
            </div>
          );
        })} */}

        {configurationState.listOfDropdown.map((opt) => {
          console.log(opt);
          return (
            <div>
              <label>
                <input type="radio" name="readAnswer" value={opt.value}></input>
                {opt.value}
              </label>
            </div>
          );
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

export default RadioButton;
