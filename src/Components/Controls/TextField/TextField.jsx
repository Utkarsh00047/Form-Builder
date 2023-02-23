import React, { useEffect, useState } from "react";
import edit from "../../../assests/edit.png";
import "./TextField.css";
import ModalBox from "../../ModalBox/ModalBox";
import "./TextField.css";
import del from "../../../assets/delete.png";
import { v4 as uuidv4 } from "uuid";
import { setModalBox } from "../commonControlFunctions";
import { handleDelete } from "../commonControlFunctions";
import question from "../../../assests/question.png";

const TextField = ({ type, insertConfig, updateConfig }) => {
  const [showTextField, setshowTextField] = useState(true);
  const [openModalBox, setOpenModalBox] = useState(false);
  //   const setModalBox = () => {
  //   	setOpenModalBox(!openModalBox);
  //   };
  const [configurationState, setConfigurationState] = useState({
    id: uuidv4(),
    label: `Enter ${type}`,
    type: type,
    placeholder: "",
    isRequired: false,
    isReadOnly: false,
    defaultValue: "",
    paragraph: "",
  });
  console.log(configurationState.type);

  useEffect(() => {
    insertConfig(configurationState);
  }, []);

  useEffect(() => {
    updateConfig(configurationState);
  }, [configurationState]);
  //   const handleDelete = () => {
  //     if (window.confirm("Are you sure you want to delete this Field?")) {
  //       setshowTextField(false);
  //     }
  //   };
  //   useEffect(()=>{
  // 	const storedShowTextField =localStorage.getItem("showTextField");
  // 	if (storedShowTextField){
  // 		setshowTextField(JSON.parse(storedShowTextField));
  // 	}
  //   },[]);

  //   useEffect(()=>{
  // 	localStorage.setItem("showTextField",JSON.stringify (showTextField));
  //   },[showTextField]);
  //
  return showTextField ? (
    <>
      <label htmlFor="textField" className="heads">
        {configurationState.label}
      </label>
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
      <input
        defaultValue={configurationState.defaultValue}
        id={"textField"}
        type={configurationState.type}
        placeholder={configurationState.placeholder}
        readonly={configurationState.isReadOnly}
        required={configurationState.isRequired}
        className="input_field"
      />
      <p className="subtext">{configurationState.paragraph}</p>
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
      {/* <div className="delicon"> */}

      {/* </div> */}
    </>
  ) : null;
};

export default TextField;
