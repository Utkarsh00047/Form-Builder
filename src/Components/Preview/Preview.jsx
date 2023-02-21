import React from "react";
import { useStore } from "react-redux";
import x from "../../assests/x.png";
import "./Preview.css";

const Preveiw = (props) => {
    const store = useStore();

    console.log(store.getState());

    const config = store.getState();

    return (
        <div className="preveiwbox">
            <div className="heading">
                <p>Preview </p>
                <button
                    type="button"
                    className="remove_bton"
                    onClick={props.setPreview}
                >
                    <img alt="" src={x} />
                </button>
            </div>

            <form className="previewpage">
                {config.configList.map((prev, i) => {
                    console.log(config.configList[i]);
                    switch (config.configList[i].type) {
                        case "text":
                            return (
                                <>
                                    <label>{config.configList[i].label}</label>
                                    <input
                                        placeholder={
                                            config.configList[i].placeholder
                                        }
                                        readOnly={
                                            config.configList[i].isReadOnly
                                        }
                                        required={
                                            config.configList[i].isrequired
                                        }
                                    />
                                </>
                            );
                        case "textarea":
                            return (
                                <>
                                    <label>{config.configList[i].label}</label>
                                    <textarea
                                        placeholder={
                                            config.configList[i].placeholder
                                        }
                                    />
                                </>
                            );
                        case "dropdown":
                            return (
                                <>
                                    <label>{config.configList[i].label}</label>
                                    <select>
                                        {config.configList[
                                            i
                                        ].listOfDropdown.map((opt) => {
                                            console.log(opt);
                                            return (
                                                <option value="">
                                                    {opt.value}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </>
                            );
                        default:
                            break;
                    }
                })}
            </form>
        </div>
    );
};

export default Preveiw;
