import React, { useState } from "react";
import "./ModalBox.css";
import x from "../../assests/x_white.png";
import { setModalBox } from "../Controls/commonControlFunctions";

// import { postWidget } from "../../Services/Configuration/ConfigurationService";

const ModalBox = (props) => {
  const [saveUpdate, setSaveUpdate] = useState(props.configurationState);
  const inputArr = [
    {
      type: "text",
      id: 1,
      value: "",
    },
  ];
  console.log(saveUpdate);
  const [arr, setArr] = useState(inputArr);

  // const Post_Widget = async ()=>{
  //   const posturl= axios.post(`https://localhost:7084/api/Config/Post`,saveUpdate).then(res=>{
  //     console.log('resssss',res);
  //     alert('Modification done successfully!!');
  //   });
  //   return posturl
  // };

  const addInput = (e) => {
    setArr((s) => {
      e.preventDefault();
      return [
        ...s,
        {
          type: "",
          id: e.target.id,
          value: "",
        },
      ];
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    const index = e.target.id;
    setArr((s) => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;
      return newArr;
    });
  };

  const settingSaveUpdateData = (configurationType, value) => {
    setSaveUpdate((prev) => {
      return {
        ...prev,
        [configurationType]: value,
      };
    });
  };

  // console.log(saveUpdate.defaultValue);
  // console.log(arr);
  console.log(props.type);
  // console.log(saveUpdate.headingFont);
  // console.log(saveUpdate.heading);

  return (
    <div className="formdiv">
      <div className="headers">
        <p>Configurations </p>
        <button
          type="button"
          className="remove_btn"
          onClick={() => setModalBox(props.setOpenModalBox)}
        >
          <img alt="" src={x} />
        </button>
      </div>

      <form
        onSubmit={() => {
          props.setConfigurationState(saveUpdate);
          setModalBox(props.setOpenModalBox);
        }}
       
      >
        <div className="modal_content">
          <div className="label_name">
            <label className="label_text_field" for="label_name">
              Label Name:
            </label>
            <input
              value={saveUpdate.label}
              onChange={(e) => settingSaveUpdateData("label", e.target.value)}
              className="text_input"
              type="text"
              name="label_name"
            />
          </div>

          {props.type === "datetime-local" ? (
            <div>
              <label htmlFor="" className="label_text_field">
                Select time format:{" "}
              </label>
              <div class="switch-field">
                <input
                  type="radio"
                  id="radio-one"
                  name="switch-one"
                  value="yes"
                  checked
                />
                <label for="radio-one">12 hours</label>
                <input
                  type="radio"
                  id="radio-two"
                  name="switch-one"
                  value="no"
                />
                <label for="radio-two">24 hours</label>
              </div>
            </div>
          ) : (
            ""
          )}

          {props.type === "text" ||
          props.type === "textarea" ||
          props.type === "number" ||
          props.type === "email" ||
          props.type === "datetime-local" ||
          props.type === "time" ||
          props.type === "url" ||
          props.type === "tel" ? (
            <div>
              <label className="label_text_field" for="placeholder">
                Placeholder:
              </label>
              <input
                value={saveUpdate.placeholder}
                onChange={(e) =>
                  settingSaveUpdateData("placeholder", e.target.value)
                }
                className="text_input"
                type="text"
                name="placeholder"
              />
            </div>
          ) : (
            ""
          )}

          {props.type === "text" || props.type === "dropdown" ? (
            <div className="readOnlyDiv">
              <label className="label_field" for="readOnly">
                ReadOnly
              </label>
              <input
                readonly={saveUpdate.isReadOnly}
                onChange={(e) =>
                  settingSaveUpdateData("isReadOnly", e.target.checked)
                }
                className="input_type"
                type="checkbox"
                id="readOnly"
                value="readOnly"
              />
            </div>
          ) : (
            ""
          )}

          {props.type === "text" ||
          props.type === "password" ||
          props.type === "number" ? (
            <div className="requiredDiv">
              <label className="label_field" for="required">
                Required
              </label>
              <input
                required={saveUpdate.isRequired}
                onChange={(e) =>
                  settingSaveUpdateData("isRequired", e.target.checked)
                }
                className="input_type"
                type="checkbox"
                id="required"
                value="required"
              />
            </div>
          ) : (
            ""
          )}

          {props.type === "dropdown" ||
          props.type === "radio" ||
          props.type === "checkbox" ? (
            <div>
              <label htmlFor="" className="label_field">
                Values for options:
              </label>
              {arr.map((item, i) => {
                console.log(item.value);
                console.log(item);
                return (
                  <div className="values_options_label">
                    <input
                      className="text_input"
                      onChange={(e) => {
                        handleChange(e);
                        settingSaveUpdateData("listOfDropdown", arr);
                      }}
                      value={item.value}
                      id={i}
                      type={item.type}
                      size="40"
                    />
                    <button
                      className="add_values_button"
                      onClick={(e) => addInput(e)}
                    >
                      +
                    </button>
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
          {props.type === "textarea" ? (
            <div>
              <label className="label_field">Rows:</label>
              <input
                value={saveUpdate.rows}
                onChange={(e) => settingSaveUpdateData("rows", e.target.value)}
                className="row_input_box"
                type="number"
                name="row_text_input"
              />
            </div>
          ) : (
            ""
          )}

          {props.type === "sectionHeaderText" ||
          props.type === "password" ||
          props.type === "file" ? (
            <div>
              <label className="label_field" for="required">
                Subtext:
              </label>
              <input
                value={saveUpdate.paragraph}
                className="input_box"
                onChange={(e) =>
                  settingSaveUpdateData("paragraph", e.target.value)
                }
              />
            </div>
          ) : (
            ""
          )}

          {props.type === "sectionHeaderText" ? (
            <div>
              <label className="label_field" for="required">
                Heading:
              </label>
              <input
                className="input_box"
                value={saveUpdate.heading}
                onChange={(e) =>
                  settingSaveUpdateData("heading", e.target.value)
                }
              />
              <div className="headingFont">
                <label className="label_field">Select heading size: </label>
                <select
                  className="select_box"
                  value={saveUpdate.headingFont}
                  onChange={(e) =>
                    settingSaveUpdateData("headingFont", e.target.value)
                  }
                >
                  <option className="heading_options">h1</option>;
                  <option className="heading_options">h2</option>
                  <option className="heading_options">h3</option>;
                  <option className="heading_options">h4</option>
                  <option className="heading_options">h5</option>;
                  <option className="heading_options">h6</option>
                </select>
              </div>
            </div>
          ) : (
            ""
          )}

          {props.type === "textarea" || props.type === "button" ? (
            <div>
              <label className="label_field" for="required">
                Help Text
              </label>
              <input
                className="input_box"
                value={saveUpdate.helptext}
                onChange={(e) =>
                  settingSaveUpdateData("helptext", e.target.value)
                }
              />
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="button_footer">
          <div className="button">
            <div className="button_spacing">
              <button
                className="save_button"
                onClick={(e) => {
                  props.setConfigurationState(saveUpdate);
                  setModalBox(props.setOpenModalBox);
                  // Post_Widget();
                }}
                type="button"
              >
                Save
              </button>
            </div>
            <div className="button_spacing">
              <button
                className="cancel_button"
                onClick={(e) => {
                  setModalBox(props.setOpenModalBox);
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
