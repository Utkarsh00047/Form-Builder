import React from "react";
import { useState } from "react";
import edit from "../../../assests/edit.png";
import del from "../../../assets/delete.png";
import ModalBox from "../../ModalBox/ModalBox";
import { setModalBox } from "../commonControlFunctions";
import { handleDelete } from "../commonControlFunctions";
import question from "../../../assests/question.png";

function RadioButton({ type }) {
  const [showTextField, setshowTextField] = useState(true);
  const [openModalBox, setOpenModalBox] = useState(false);

  const [configurationState, setConfigurationState] = useState({
    label: `Select :`,
    type: type,
    helptext: "",
    listOfDropdown: [{ type: "", id: "", value: "Value 1" }],
  });

  console.log(configurationState.type);
  console.log(configurationState.listOfDropdown);
  return showTextField ? (
    <form action="/action_page.php">
      <label>{configurationState.label}</label>
      {configurationState.helptext && (
        <div className="tooltip">
          <img
            onMouseEnter={configurationState.helptext}
            src={question}
            alt=""
            className="help_text"
            id="helpText"
            // onClick={() => handleDelete(setshowTextField)}
          />
          <span className="tooltiptext">{configurationState.helptext}</span>
        </div>
      )}
      <div>
        {/* {configurationState.defaultListOfDropdown && (
          <div className="tooltip">
            <img
              onMouseEnter={configurationState.helptext}
              src={question}
              alt=""
              className="help_text"
              id="helpText"
              // onClick={() => handleDelete(setshowTextField)}
            />
            <span className="tooltiptext">{configurationState.helptext}</span>
          </div>
        )} */}

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
