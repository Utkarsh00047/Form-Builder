import React from "react";
import { useState, useEffect } from "react";
import edit from "../../../assests/edit.png";
import del from "../../../assets/delete.png";
import ModalBox from "../../ModalBox/ModalBox";
import { setModalBox } from "../commonControlFunctions";
import { deleteConfig } from "../CommonFunctions";
function RadioButton({
    label,
    listOfDropdown,
    openPreview,
    type,
    uid,
    setInputFields,
    insertConfig,
    updateConfig,
}) {
    const [openModalBox, setOpenModalBox] = useState(false);
    const options = [
        { defaultOptions: "Option 1" },
        { defaultOptions: "Option 2" },
    ];
    const [configurationState, setConfigurationState] = useState({
        id: uid,
        label: `Select :`,
        type: type,
        listOfDropdown: [],
        defaultListOfDropdown: [options],
    });

    console.log(configurationState.type);
    console.log(configurationState.defaultListOfDropdown);

    useEffect(() => {
        insertConfig(configurationState);
    }, []);

    useEffect(() => {
        updateConfig(configurationState);
    }, [configurationState]);

    return (
        <form action="/action_page.php">
            {openPreview ? (
                <>
                    <label>{label}</label>
                    <div>
                        {listOfDropdown.map((opt) => {
                            console.log(opt);
                            return (
                                <div>
                                    <label>
                                        <input
                                            type="radio"
                                            name="readAnswer"
                                            value={opt.value}
                                        ></input>
                                        {opt.value}
                                    </label>
                                </div>
                            );
                        })}
                    </div>
                </>
            ) : (
                <>
                    <label>{configurationState.label}</label>
                    <div>
                        {configurationState.listOfDropdown.map((opt) => {
                            console.log(opt);
                            return (
                                <div>
                                    <label>
                                        <input
                                            type="radio"
                                            name="readAnswer"
                                            value={opt.value}
                                        ></input>
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
}

export default RadioButton;
