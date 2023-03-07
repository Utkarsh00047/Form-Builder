import React from "react";
import edit from "../../../assests/edit.png";
import del from "../../../assets/delete.png";
import ModalBox from "../../ModalBox/ModalBox";
import { useState } from "react";
import { setModalBox } from "../commonControlFunctions";
import { deleteConfig } from "../CommonFunctions";
import "./ReviewComponent.css";

function ReviewComponent(type, uid, setInputFields) {
  const [openModalBox, setOpenModalBox] = useState(false);
  const [configurationState, setConfigurationState] = useState({
    id: uid,
    label: `Enter heading...`,
    heading: "",
    paragraph: "",
    type: type,
    defaultParagraph: "Enter subtext for the heading...",
    headingFont: "h3",
  });
  console.log(type);
  return (
    <div className="review">
      <div class="rate">
        <input type="radio" id="star5" name="rate" value="5" />
        <label for="star5" title="text">
          5 stars
        </label>
        <input type="radio" id="star4" name="rate" value="4" />
        <label for="star4" title="text">
          4 stars
        </label>
        <input type="radio" id="star3" name="rate" value="3" />
        <label for="star3" title="text">
          3 stars
        </label>
        <input type="radio" id="star2" name="rate" value="2" />
        <label for="star2" title="text">
          2 stars
        </label>
        <input type="radio" id="star1" name="rate" value="1" />
        <label for="star1" title="text">
          1 star
        </label>
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
          onClick={() => deleteConfig(setInputFields, configurationState)}
        />
      </div>
    </div>
  );
}

export default ReviewComponent;
