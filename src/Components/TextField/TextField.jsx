import React, { useState, useEffect } from "react";
import edit from "../../assests/edit.png";
import "./TextField.css";
import ModalBox from "../ModalBox/ModalBox";
import "./TextField.css";
import del from "../../assets/delete.png";

// function getFormValues() {
//     const storedValues = localStorage.getItem("formdata");
//     if (storedValues) return;
//     JSON.stringify(storedValues);
// }

const TextField = ({ type }) => {
    const [showTextField, setshowTextField] = useState(true);
    const [openModalBox, setOpenModalBox] = useState(false);
    const setModalBox = () => {
        setOpenModalBox(!openModalBox);
    };
    const [configurationState, setConfigurationState] = useState({
        label: `Enter ${type}`,
        type: type,
        placeholder: "",
        isRequired: false,
        isReadOnly: false,
        defaultValue: "",
    });
    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete this Field?")) {
            setshowTextField(false);
        }
    };
    const handleChange = (event) => {
        let value = event.target.value;
        let formdata = event.target.formdata;

        setConfigurationState((prevalue) => {
            return {
                ...prevalue,
                [formdata]: value,
            };
        });
    };
    // useEffect(() => {
    //     const storedShowTextField = localStorage.getItem("showTextField");
    //     if (storedShowTextField) {
    //         setshowTextField(JSON.parse(storedShowTextField));
    //     }
    // }, []);

    useEffect(() => {
        const storedValues = localStorage.getItem("formdata");
        if (storedValues !== null)
            setConfigurationState(JSON.parse(storedValues));
    }, []);

    // const showValues = () => {
    //     const storedValues = localStorage.getItem("formdata");
    //     if (storedValues) {
    //         JSON.parse(storedValues);
    //     }
    // };

    useEffect(() => {
        localStorage.setItem("formdata", JSON.stringify(configurationState));
    }, [configurationState]);

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
                onChange={handleChange}
                className="input_field"
            />
            <div className="configuration_button">
                <img
                    alt=""
                    onClick={setModalBox}
                    src={edit}
                    className="configuration_button"
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
