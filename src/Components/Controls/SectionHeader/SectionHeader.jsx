import React from "react";
import { useState, useEffect } from "react";
import ModalBox from "../../ModalBox/ModalBox";
import edit from "../../../assests/edit.png";
import del from "../../../assets/delete.png";
import { setModalBox } from "../commonControlFunctions";
import { deleteConfig } from "../CommonFunctions";

function SectionHeader({
    type,
    uid,
    setInputFields,
    insertConfig,
    updateConfig,
}) {
    const [openModalBox, setOpenModalBox] = useState(false);
    const [configurationState, setConfigurationState] = useState({
        id: uid,
        label: `Enter heading...`,
        heading: "",
        paragraph: "",
        type: type,
        defaultParagraph: "Enter subtext for the heading...",
    });

    console.log(configurationState.type);

    useEffect(() => {
        insertConfig(configurationState);
    }, []);

    useEffect(() => {
        updateConfig(configurationState);
    }, [configurationState]);

    return (
        <div>
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
                    onClick={() =>
                        deleteConfig(setInputFields, configurationState)
                    }
                />
            </div>
            {configurationState.heading ? (
                <>
                    <h2>{configurationState.heading}</h2>
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
            {/* <section className="sectionHeader">
        <div>
          <h2>{configurationState.heading}</h2>
        </div>
        : {<h2>{configurationState.label}</h2>}}
        <p>{configurationState.paragraph}</p>
      </section> */}
            {openModalBox && (
                <ModalBox
                    setOpenModalBox={setOpenModalBox}
                    configurationState={configurationState}
                    setConfigurationState={setConfigurationState}
                    type={type}
                />
            )}
        </div>
    );
}

export default SectionHeader;
