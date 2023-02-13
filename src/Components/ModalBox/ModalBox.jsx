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

  const settingConfigurationState = (configurationType, value) => {
    props.setConfigurationState((prev) => {
      return {
        ...prev,
        [configurationType]: value,
      };
    });
  };

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

      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.setConfigurationState();
        }}
      >
        <div class="modal_content">
          <div class="checkbox">
            <label class="label_field" for="readOnly">
              ReadOnly
            </label>
            <input
              readonly={saveUpdate.isReadOnly}
              onChange={(e) =>
                settingConfigurationState("isReadOnly", e.target.checked)
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
                settingConfigurationState("isRequired", e.target.checked)
              }
              class="input_type"
              type="checkbox"
              id="required"
              value="required"
            />
          </div>
          <div class="textbox_content">
            <label class="label_text_field" for="label_name">
              Label Name:
            </label>
            <input
              defaultValue={saveUpdate.defaultValue}
              onChange={(e) =>
                settingConfigurationState("label", e.target.value)
              }
              class="text_input"
              type="text"
              name="label_name"
            />
            <label class="label_text_field" for="placeholder">
              Placeholder:
            </label>
            <input
              placeholder={saveUpdate.placeholder}
              onChange={(e) =>
                settingConfigurationState("placeholder", e.target.value)
              }
              class="text_input"
              type="text"
              name="placeholder"
            />
          </div>
        </div>
        <div class="button">
          {/* <span class="close">&times;</span> */}
          <div class="button_spacing">
            <button
              onClick={(e) => {
                e.preventDefault();
                props.setConfigurationState();
              }}
              type="submit"
            >
              {/* <button
              onclick={(e) => {
                e.preventDefault();
                // setConfigurationState();
              }}
              type="submit"
            > */}
              Save
            </button>
          </div>
          <div class="button_spacing">
            <button
              onclick={(e) => {
                e.preventDefault();
              }}
              // setConfigurationState();
              // type="submit"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ModalBox;
