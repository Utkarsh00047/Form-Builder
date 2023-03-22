import React, { useState, useEffect } from "react";
import edit from "../../../assests/edit.png";
import del from "../../../assets/delete.png";
import { setModalBox } from "../commonControlFunctions";
import ModalBox from "../../ModalBox/ModalBox";
import { deleteConfig } from "../CommonFunctions";
import "./ButtonComponent.css"

const ButtonComponent = ({
    label,
    types,
    openPreview,
    type,
    uid,
    setInputFields,
    insertConfig,
    updateConfig,
}) => {
    const [openModalBox, setOpenModalBox] = useState(false);
    const [configurationState, setConfigurationState] = useState({
        pageId:1,
        rows:0,
        widgetId: uid,
        label: `Button`,
        isRequired: false,
        isReadOnly: false,
        helptext:"",
        placeholder:"",
        subtext:"",
        heading:"",
        defaultValue:"",
        type: type ? type : "",
        listOfDropdown: [],
    });

    console.log(configurationState.type);

    useEffect(() => {
        !openPreview && insertConfig(configurationState);
    }, []);

    useEffect(() => {
        updateConfig(configurationState);
    }, [configurationState]);

    return (
        <div className="FieldBody">
            {openPreview ? (
                <button type={types} className="btn1">{label}</button>
            ) : (
                <>
                    <button type={configurationState.type} className="btn1">
                        {configurationState.label}
                    </button>
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
                    {openModalBox && (
                        <ModalBox
                            setOpenModalBox={setOpenModalBox}
                            configurationState={configurationState}
                            setConfigurationState={setConfigurationState}
                            type={type}
                        />
                    )}
                </>
            )}
        </div>
    );
};

export default ButtonComponent;
