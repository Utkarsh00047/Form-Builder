import React, { useEffect, useState } from "react";
import edit from "../../../assests/edit.png";
import "./TextField.css";
import ModalBox from "../../ModalBox/ModalBox";
import del from "../../../assets/delete.png";
import { v4 as uuidv4 } from "uuid";

const TextField = ({ type, insertConfig, updateConfig }) => {
    const [showTextField, setshowTextField] = useState(true);
    const [openModalBox, setOpenModalBox] = useState(false);
    const setModalBox = () => {
        setOpenModalBox(!openModalBox);
    };
    const [configurationState, setConfigurationState] = useState({
        id: uuidv4(),
        label: `Enter ${type}`,
        type: type,
        placeholder: "",
        isRequired: false,
        isReadOnly: false,
        defaultValue: "",
    });
    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete this Field?")) {
            // if (index !== -1) {
            //     config.slice(index, 1)
            // let slicedValues = config.configList.slice();
            setshowTextField(false);
        };
    }


    useEffect(() => {
        insertConfig(configurationState);
    }, []);

    useEffect(() => {
        updateConfig(configurationState);
    }, [configurationState]);

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
    return showTextField ? (
        <>
            <label htmlFor="textField" className="heads">
                {configurationState.label}
            </label>
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
                    onClick={setModalBox}
                    src={edit}
                    className="editicon"
                />
                <img
                    src={del}
                    alt=""
                    className="delicon"
                    id="del"
                    onClick={handleDelete}
                />
            </div>
            {openModalBox && (
                <ModalBox
                    setModalBox={setModalBox}
                    configurationState={configurationState}
                    setConfigurationState={setConfigurationState}
                />
            )}
            {/* <div className="delicon"> */}

            {/* </div> */}
        </>
    ) : null;
            
};

export default TextField;
