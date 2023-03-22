import React from "react";
import { useState, useEffect } from "react";
import edit from "../../../assests/edit.png";
import del from "../../../assets/delete.png";
import ModalBox from "../../ModalBox/ModalBox";
import { setModalBox } from "../commonControlFunctions";
import "./CheckBoxComponent.css";
import { deleteConfig } from "../CommonFunctions";
function CheckBoxComponent({
    openPreview,
    label,
    listOfDropdown,
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
        isRequired: false,
        isReadOnly: false,
        helptext:"",
        defaultValue:"",
        subtext:"",
        heading:"",
        label: `Checkbox : `,
        placeholder:"",
        type: type,
        listOfDropdown: [{ type: "", widgetId: "", value: "Value 1" }],
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
        <form action="/action_page.php">
            {openPreview ? (
                <>
                    <label>{label}</label>
                    <div>
                        {listOfDropdown.map((opt) => {
                            console.log(opt);
                            return (
                                <label>
                                    <input
                                        type="checkbox"
                                        value={opt.value}
                                        className="checkboxinput"
                                    ></input>
                                    {opt.value}
                                </label>
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
                                <label className="CheckboxLabel">
                                    <input
                                        type="checkbox"
                                        value={opt.value}
                                        className="checkboxinput"
                                    ></input>
                                    {opt.value}
                                </label>
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

export default CheckBoxComponent;
