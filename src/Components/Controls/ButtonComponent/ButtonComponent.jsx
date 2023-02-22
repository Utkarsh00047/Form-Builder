import React, { useState, useEffect } from "react";
import edit from "../../../assests/edit.png";
import del from "../../../assets/delete.png";
import { setModalBox } from "../commonControlFunctions";
import ModalBox from "../../ModalBox/ModalBox";
import { deleteConfig } from "../CommonFunctions";

const ButtonComponent = ({
    type,
    uid,
    setInputFields,
    insertConfig,
    updateConfig,
}) => {
    const [openModalBox, setOpenModalBox] = useState(false);
    const [configurationState, setConfigurationState] = useState({
        id: uid,
        label: `Button`,
        type: type ? type : "",
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
            <button type={configurationState.type}>
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
        </div>
    );
};

export default ButtonComponent;
