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

  // const handleChange = (e) => {
  //   // e.preventDefault();
  //   const index = e.target.id;
  //   console.log(index);
  //   setArr((newArray) => {
  //     newArray[index].value += e.target.value;
  //     console.log(newArray);
  //     return newArray;
  //   });
  // };

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
  return (
    <div class="formdiv">
      <div class="headers">
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
        <div class="modal_content">
          <div class="checkbox">
            {props.type === "text" ? (
              <>
                <label class="label_field" for="readOnly">
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
                />{" "}
              </>
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
            <div>
              {arr.map((item, i) => {
                console.log(item.value);
                console.log(item);
                return (
                  <>
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
                    {/* <input
                      // onChange={(e) => handleChange(e)}
                      onChange={(e) => handleChange(e)}
                      // onChange={(e) => {
                      //   handleChange(e);
                      //   settingSaveUpdateData("listOfDropdown", e.target.value);
                      // }}
                      value={item.value}
                      id={i}
                      type={item.type}
                      size="40"
                    /> */}
                    <button onClick={(e) => addInput(e)}>+</button>
                  </>
                );
              })}
            </div>
          </div>
          <div class="textbox_content">
            <div class="label_name">
              <label class="label_text_field" for="label_name">
                Label Name:
              </label>

              <input
                value={saveUpdate.label}
                onChange={(e) => settingSaveUpdateData("label", e.target.value)}
                class="text_input"
                type="text"
                name="label_name"
              />
              <input
                value={saveUpdate.rows}
                onChange={(e) => settingSaveUpdateData("rows", e.target.value)}
                class="row_text_input"
                type="number"
                name="row_text_input"
              />
            </div>
            <div class="placeholder_name">
              <label class="label_text_field" for="placeholder">
                Placeholder:
              </label>
              <input
                value={saveUpdate.placeholder}
                onChange={(e) =>
                  settingSaveUpdateData("placeholder", e.target.value)
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
                  setModalBox(props.setOpenModalBox);
                }}
                type="button"
              >
                Save
              </button>
            </div>
            <div class="button_spacing">
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
