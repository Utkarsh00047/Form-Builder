import React from "react";
import "./ModalBox.css";

const ModalBox = () => {
  return (
    <div class="formdiv">
      <h3 class="headers">Configurations </h3>
      <form>
        <div class="modal_content">
          <div class="checkbox">
            <input
              class="input_type"
              type="checkbox"
              id="readOnly"
              value="readOnly"
            />
            <label class="label_field" for="readOnly">
              ReadOnly
            </label>

            <input
              class="input_type"
              type="checkbox"
              id="required"
              value="required"
            />
            <label class="label_field" for="required">
              Required
            </label>
          </div>
          <div class="textbox_content">
            <label class="label_text_field" for="label_name">
              Label Name:
            </label>
            <input class="text_input" type="text" name="label_name" />
            <label class="label_text_field" for="placeholder">
              Placeholder:
            </label>
            <input class="text_input" type="text" name="placeholder" />
          </div>
        </div>
        <div class="button">
          {/* <span class="close">&times;</span> */}
          <div class="button_spacing">
            <button type="submit">Close</button>
          </div>
          <div class="button_spacing">
            <button type="submit">Save</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ModalBox;
