import React from "react";
import { useState } from "react";
import ModalBox from "../../ModalBox/ModalBox";
import edit from "../../../assests/edit.png";
import del from "../../../assets/delete.png";
import { setModalBox } from "../commonControlFunctions";
import { handleDelete } from "../commonControlFunctions";

function SectionHeader({ type }) {
  const [showTextField, setshowTextField] = useState(true);
  const [openModalBox, setOpenModalBox] = useState(false);
  const [configurationState, setConfigurationState] = useState({
    label: `Enter heading...`,
    heading: "",
    paragraph: "",
    type: type,
    defaultParagraph: "Enter subtext for the heading...",
    headingFont: "h3",
  });
  console.log(configurationState.headingFont);
  console.log(configurationState.type);
  const headingTag = configurationState.headingFont;
  console.log(headingTag);
  return showTextField ? (
    <div>
      {configurationState.heading ? (
        <>
          <configurationState.headingFont>
            {configurationState.heading}
          </configurationState.headingFont>
        </>
      ) : (
        <>
          <h2>{configurationState.label}</h2>
        </>
      )}
      {configurationState.paragraph ? (
        <>
          <p>{configurationState.paragraph}</p>
        </>
      ) : (
        <>
          <p>{configurationState.defaultParagraph}</p>
        </>
      )}
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
}

export default SectionHeader;
