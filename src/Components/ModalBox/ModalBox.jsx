import React from "react";
import "./ModalBox.css";

const ModalBox = ({ setConfigurationState }) => {
  const settingConfigurationState = (configurationType, value) => {
    setConfigurationState((prev) => {
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
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setConfigurationState();
        }}
      >
        <div class="modal_content">
          <div class="checkbox">
            <label class="label_field" for="readOnly">
              ReadOnly
            </label>
            <input
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
            <button type="submit">Save</button>
          </div>
          <div class="button_spacing">
            <button
              onclick={(e) => {
                e.preventDefault();
                setConfigurationState();
              }}
              type="submit"
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
