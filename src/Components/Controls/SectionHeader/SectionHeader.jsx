import React from "react";
import { useState, useEffect } from "react";
import ModalBox from "../../ModalBox/ModalBox";
import edit from "../../../assests/edit.png";
import del from "../../../assets/delete.png";
import { setModalBox } from "../commonControlFunctions";
import { deleteConfig } from "../CommonFunctions";

function SectionHeader({
    heading,
    headingfonts,
    label,
    paragraph,
    defaultParagraph,
    openPreview,
    type,
    uid,
    setInputFields,
    insertConfig,
    updateConfig,
}) {
    const [openModalBox, setOpenModalBox] = useState(false);
    const [configurationState, setConfigurationState] = useState({
        pageId:1,
        rows:0,
        widgetId: uid,
        label: `Enter heading...`,
        heading: "",
        paragraph: "",
        type: type,
        isRequired: false,
        isReadOnly: false,
        listOfDropdown: [],
        defaultParagraph: "Enter subtext for the heading...",
        headingFont: "h3",
        subtext: "",
        helptext: "",
    });
    const headingTag = configurationState.headingFont;
    console.log(configurationState.type);

    useEffect(() => {
        !openPreview && insertConfig(configurationState);
    }, []);

    useEffect(() => {
        updateConfig(configurationState);
    }, [configurationState]);

    return (
        <div>
            {openPreview ? (
                <>
                    {heading ? (
                        <>
                            <headingfonts>{heading}</headingfonts>
                        </>
                    ) : (
                        <>
                            <h2>{label}</h2>
                        </>
                    )}
                    {paragraph ? (
                        <>
                            <p>{paragraph}</p>
                        </>
                    ) : (
                        <>
                            <p>{defaultParagraph}</p>
                        </>
                    )}
                </>
            ) : (
              <div className="FieldBody">
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
            )}
        </div>
    );
}

export default SectionHeader;
