import React from "react";
import { useState, useEffect } from "react";
import edit from "../../../assests/edit.png";
import del from "../../../assets/delete.png";
import ModalBox from "../../ModalBox/ModalBox";
import { setModalBox } from "../commonControlFunctions";
import { deleteConfig } from "../CommonFunctions";
import question from "../../../assests/question.png";
import './RadioButton.css'

function RadioButton({
    label,
    listOfDropdown,
    helptext,
    openPreview,
    type,
    uid,
    setInputFields,
    insertConfig,
    updateConfig,
}) {
    const [openModalBox, setOpenModalBox] = useState(false);

    const [configurationState, setConfigurationState] = useState({
        id: uid,
        label: `Radio Button  :`,
        type: type,
        helptext: "",
        listOfDropdown: [{ type: "", id: "", value: "Value 1" }],
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
      <div className="FieldBody">
        <form action="/action_page.php">
            {openPreview ? (
                <>
                    <label>{label}</label>
                    {helptext && (
                        <div className="tooltip">
                            <img
                                onMouseEnter={helptext}
                                src={question}
                                alt=""
                                className="help_text"
                                id="helpText"
                                // onClick={() => handleDelete(setshowTextField)}
                            />
                            <span className="tooltiptext">{helptext}</span>
                        </div>
                    )}
                    <div>
                        {listOfDropdown.map((opt) => {
                            console.log(opt);
                            return (
                                <div>
                                    <label className="RadioLabel">
                                        <input
                                            type="radio"
                                            name="readAnswer"
                                            value={opt.value}
                                            className="RadioInput"
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
                            <span className="tooltiptext">
                                {configurationState.helptext}
                            </span>
                        </div>
                    )}
                    <div>
                        {configurationState.listOfDropdown.map((opt) => {
                            console.log(opt);
                            return (
                                <div>
                                    <label className="RadioLabel">
                                        <input
                                            type="radio"
                                            name="readAnswer"
                                            value={opt.value}
                                            className="RadioInput"
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
        </div>
    );
}

export default RadioButton;
