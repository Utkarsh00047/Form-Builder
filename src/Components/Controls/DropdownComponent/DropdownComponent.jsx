import React, { useState, useEffect } from "react";
import { setModalBox } from "../commonControlFunctions";
import edit from "../../../assests/edit.png";
import del from "../../../assets/delete.png";
import ModalBox from "../../ModalBox/ModalBox";
import { deleteConfig } from "../CommonFunctions";
import "./DropdownComponent.css";
const DropdownComponent = ({
    label,
    listOfDropdown,
    openPreview,
    type,
    uid,
    setInputFields,
    insertConfig,
    updateConfig,
}) => {
    const [openModalBox, setOpenModalBox] = useState(false);
    const [configurationState, setConfigurationState] = useState({
        id: uid,
        label: `Select :`,
        type: type,
        listOfDropdown: [],
        defaultValue: "---Select---",
    });

    console.log(configurationState.listOfDropdown);
    console.log(configurationState.type);

    useEffect(() => {
        insertConfig(configurationState);
    }, []);

    useEffect(() => {
        updateConfig(configurationState);
    }, [configurationState]);

    return (
        <form action="">
            {openPreview ? (
                <>
                    <label>{label}</label>
                    <select>
                        {listOfDropdown.map((opt) => {
                            console.log(opt);
                            return <option value="">{opt.value}</option>;
                        })}
                    </select>
                </>
            ) : (
                <>
                    <label>{configurationState.label}</label>
                    <select>
                        {configurationState.listOfDropdown.map((opt) => {
                            console.log(opt);
                            return <option value="">{opt.value}</option>;
                        })}
                    </select>
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
        </form>
    );
};

export default DropdownComponent;
