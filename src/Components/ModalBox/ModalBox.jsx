import React, { useState } from "react";
import css from "./ModalBox.css";

const ModalBox = () => {
  return (
    <div className={css.formdiv}>
      <form>
        <label for="readOnly">Checkbox for readOnly</label>
        <input type="checkbox" name="readOnly" value="readOnly" />
        <label for="required">Checkbox for required</label>
        <input type="checkbox" name="required" value="required" />
        <label for="label_name">Label Name:</label>
        <input type="text" name="label_name" />
        <label for="placeholder">Placeholder:</label>
        <input type="text" name="placeholder" />

        <div className={css.save_button}>
          <button type="submit">Save</button>
        </div>
        <div className={css.close_button}>
          <button type="submit">Close</button>
        </div>
      </form>
    </div>
  );
};

export default ModalBox;
