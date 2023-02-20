import React, { useState } from "react";
import "./ModalBox.css";
import x from "../../assests/x.png";
import { setModalBox } from "../Controls/commonControlFunctions";

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

  console.log(saveUpdate.defaultValue);
  console.log(arr);
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

      <form>
        <div className="modal_content">
          <div className="checkbox">
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
            {props.type === "text" ? (
              <>
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
              </>
            ) : (
              ""
            )}

            {props.type === "dropdown" ||
            props.type === "radio" ||
            props.type === "checkbox" ? (
              <div>
                <label htmlFor="">Values for options:</label>
                {arr.map((item, i) => {
                  console.log(item.value);
                  console.log(item);
                  return (
                    <>
                      <div>
                        <input
                          onChange={(e) => {
                            handleChange(e);
                            settingSaveUpdateData("listOfDropdown", arr);
                          }}
                          value={item.value}
                          id={i}
                          type={item.type}
                          size="40"
                        />
                        <button onClick={(e) => addInput(e)}>+</button>
                      </div>
                    </>
                  );
                })}
              </div>
            ) : (
              ""
            )}
            {props.type === "textarea" ? (
              <div>
                <label className="">Rows:</label>
                <input
                  value={saveUpdate.rows}
                  onChange={(e) =>
                    settingSaveUpdateData("rows", e.target.value)
                  }
                  className="row_text_input"
                  type="number"
                  name="row_text_input"
                />
              </div>
            ) : (
              ""
            )}
            {props.type === "sectionHeaderText" ? (
              <>
                <label className="label_field" for="required">
                  Heading:
                </label>
                <input
                  value={saveUpdate.heading}
                  onChange={(e) =>
                    settingSaveUpdateData("heading", e.target.value)
                  }
                />
                <label className="label_field" for="required">
                  Subtext:
                </label>
                <input
                  value={saveUpdate.paragraph}
                  onChange={(e) =>
                    settingSaveUpdateData("paragraph", e.target.value)
                  }
                />
              </>
            ) : (
              ""
            )}
            {props.type === "textarea" ? (
              <>
                <label className="label_field" for="required">
                  Help Text
                </label>
                <input
                  value={saveUpdate.helptext}
                  onChange={(e) =>
                    settingSaveUpdateData("helptext", e.target.value)
                  }
                />
              </>
            ) : (
              ""
            )}

            {props.type === "text" || props.type === "textarea" ? (
              <div className="placeholder_name">
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
            {/* <label class="label_field" for="readOnly">
              ReadOnly
            </label>
            <input
              readonly={saveUpdate.isReadOnly}
              onChange={(e) =>
                settingSaveUpdateData("isReadOnly", e.target.checked)
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
                settingSaveUpdateData("isRequired", e.target.checked)
              }
              class="input_type"
              type="checkbox"
              id="required"
              value="required"
            /> */}
            {/* <div>
              {arr.map((item, i) => {
                console.log(item.value);
                console.log(item);
                return (
                  <>
                    <div>
                      <label htmlFor="">Values for options:</label>
                      <input
                        onChange={(e) => {
                          handleChange(e);
                          settingSaveUpdateData("listOfDropdown", arr);
                        }}
                        value={item.value}
                        id={i}
                        type={item.type}
                        size="40"
                      />
                      <button onClick={(e) => addInput(e)}>+</button>
                    </div>
                  </>
                );
              })}
            </div> */}
          </div>
          {/* <label className="label_field" for="required">
            Help Text
          </label>
          <input
            value={saveUpdate.helptext}
            onChange={(e) => settingSaveUpdateData("helptext", e.target.value)}
          /> */}
          <div className="textbox_content">
            {/* <div className="label_name">
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
            </div> */}
            {/* <div className="placeholder_name">
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
            </div> */}
          </div>
        </div>
        <div className="button_footer">
          <div className="button">
            <div className="button_spacing">
              <button
                onClick={(e) => {
                  props.setConfigurationState(saveUpdate);
                  setModalBox(props.setOpenModalBox);
                }}
                type="button"
              >
                Save
              </button>
            </div>
            <div className="button_spacing">
              <button
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
