import React, { useEffect, useState } from "react";
import edit from "../../../assests/edit.png";
import "./TextField.css";
import ModalBox from "../../ModalBox/ModalBox";
import del from "../../../assets/delete.png";
import { setModalBox } from "../commonControlFunctions";
import question from "../../../assests/question.png";
import { deleteConfig } from "../CommonFunctions";

const TextField = ({
    label,
    helptext,
    defaultValue,
    placeholder,
    isReadOnly,
    isRequired,
    openPreview,
    type,
    insertConfig,
    updateConfig,
    uid,
    setInputFields,
}) => {
    //   const [showTextField, setshowTextField] = useState(true);
    const [openModalBox, setOpenModalBox] = useState(false);
    //   const setModalBox = () => {
    //   	setOpenModalBox(!openModalBox);
    //   };
    const [configurationState, setConfigurationState] = useState({
        pageId:1,
        rows:0,
        widgetId: uid,
        label: `Enter ${type}`,
        type: type,
        placeholder: "",
        isRequired: false,
        isReadOnly: false,
        defaultValue: "",
        listOfDropdown: [],
        heading: "",
        subtext: "",
        helptext: "",
    });
    console.log(configurationState.type);

    useEffect(() => {
        !openPreview && insertConfig(configurationState);
    },[]);

    useEffect(() => {
        updateConfig(configurationState);
    }, [configurationState]);

    //   const handleDelete = () => {
    //     if (window.confirm("Are you sure you want to delete this Field?")) {
    //       setInputFields((prev) =>
    //         prev.filter((inputField) => {
    //           return inputField.props.uid !== configurationState.id;
    //         })
    //       );
    //     }
    //   };
    //   useEffect(()=>{
    // 	const storedShowTextField =localStorage.getItem("showTextField");
    // 	if (storedShowTextField){
    // 		setshowTextField(JSON.parse(storedShowTextField));
    // 	}
    //   },[]);

    //   useEffect(()=>{
    // 	localStorage.setItem("showTextField",JSON.stringify (showTextField));
    //   },[showTextField]);
    //
    return (
        <>
            {openPreview ? (
                <div className="FieldBody">
                    <label htmlFor="textField" className="heads">
                        {label}
                    </label>
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
                    <input
                        defaultValue={defaultValue}
                        id={"textField"}
                        type={type}
                        placeholder={placeholder}
                        readonly={isReadOnly}
                        required={isRequired}
                        className="input_field"
                    />
                </div>
            ) : (
              <div className="FieldBody">
                    <label htmlFor="textField" className="heads">
                        {configurationState.label}
                    </label>
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
                    <input
                        defaultValue={configurationState.defaultValue}
                        id={"textField"}
                        type={configurationState.type}
                        placeholder={configurationState.placeholder}
                        readonly={configurationState.isReadOnly}
                        required={configurationState.isRequired}
                        className="input_field"
                    />
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
                            widgetId={uid}
                        />
                    )}
                    {/* <div className="delicon"> */}
                    {/* </div> */}
                </div>
            )}
        </>
    );
};

export default TextField;
