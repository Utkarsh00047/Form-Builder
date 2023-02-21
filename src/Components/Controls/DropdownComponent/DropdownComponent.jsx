import React, { useState, useEffect } from "react";
import { setModalBox } from "../commonControlFunctions";
import { handleDelete } from "../commonControlFunctions";
import edit from "../../../assests/edit.png";
import del from "../../../assets/delete.png";
import ModalBox from "../../ModalBox/ModalBox";
import { v4 as uuidv4 } from "uuid";

const DropdownComponent = ({ type, insertConfig, updateConfig }) => {
    const [showTextField, setshowTextField] = useState(true);
    const [openModalBox, setOpenModalBox] = useState(false);
    const [configurationState, setConfigurationState] = useState({
        id: uuidv4(),
        label: `Select :`,
        type: type,
        listOfDropdown: [],
        defaultValue: "---Select---",
    });

    useEffect(() => {
        insertConfig(configurationState);
    }, []);

    useEffect(() => {
        updateConfig(configurationState);
    }, [configurationState]);

    console.log(configurationState.type.type);
    console.log(configurationState.listOfDropdown);
    console.log(configurationState.type);
    return showTextField ? (
        <form action="">
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
};

export default DropdownComponent;
