import React, { useState } from "react";
import "./ModalBox.css";
import x from "../../assests/x.png";

const ModalBox = (props) => {
    const [saveUpdate, setSaveUpdate] = useState(props.configurationState);

    const settingSaveUpdateData = (configurationType, value) => {
        setSaveUpdate((prev) => {
            return {
                ...prev,
                [configurationType]: value,
            };
        });
    };

    // const settingConfigurationState = (configurationType, value) => {
    //   props.setConfigurationState((prev) => {
    //     return {
    //       ...prev,
    //       [configurationType]: value,
    //     };
    //   });
    // };

    console.log(saveUpdate.defaultValue);
    return (
        <div class="formdiv">
            <div class="headers">
                <p>Configurations </p>
                <button
                    type="button"
                    className="remove_btn"
                    onClick={props.setModalBox}
                >
                    <img alt="" src={x} />
                </button>
            </div>

            <form>
                <div class="modal_content">
                    <div class="checkbox">
                        <label class="label_field" for="readOnly">
                            ReadOnly
                        </label>
                        <input
                            readonly={saveUpdate.isReadOnly}
                            onChange={(e) =>
                                settingSaveUpdateData(
                                    "isReadOnly",
                                    e.target.checked
                                )
                            }
                            class="input_type"
                            type="checkbox"
                            id="readOnly"
                            value="readOnly"
                        />

                        <label class="label_field" for="required">
                            Required
                        </label>
                        <input
                            required={saveUpdate.isRequired}
                            onChange={(e) =>
                                settingSaveUpdateData(
                                    "isRequired",
                                    e.target.checked
                                )
                            }
                            class="input_type"
                            type="checkbox"
                            id="required"
                            value="required"
                        />
                    </div>
                    <div class="textbox_content">
                        <div class="label_name">
                            <label class="label_text_field" for="label_name">
                                Label Name:
                            </label>

                            <input
                                value={saveUpdate.label}
                                onChange={(e) =>
                                    settingSaveUpdateData(
                                        "label",
                                        e.target.value
                                    )
                                }
                                class="text_input"
                                type="text"
                                name="label_name"
                            />
                        </div>
                        <div class="placeholder_name">
                            <label class="label_text_field" for="placeholder">
                                Placeholder:
                            </label>
                            <input
                                value={saveUpdate.placeholder}
                                onChange={(e) =>
                                    settingSaveUpdateData(
                                        "placeholder",
                                        e.target.value
                                    )
                                }
                                class="text_input"
                                type="text"
                                name="placeholder"
                            />
                        </div>
                    </div>
                </div>
                <div class="button_footer">
                    <div class="button">
                        <div class="button_spacing">
                            <button
                                onClick={(e) => {
                                    props.setConfigurationState(saveUpdate);
                                    props.setModalBox();
                                }}
                                type="button"
                            >
                                Save
                            </button>
                        </div>
                        <div class="button_spacing">
                            <button
                                onClick={(e) => {
                                    props.setModalBox();
                                }}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ModalBox;
