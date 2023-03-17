import React from "react";
import { useStore } from "react-redux";
import x from "../../assests/x.png";
import AttachmentContainer from "../Controls/AttachmentComponent/AttachmentContainer";
import ButtonContainer from "../Controls/ButtonComponent.jsx/ButtonContainer";
import CheckBoxContainer from "../Controls/CheckBoxComponent/CheckBoxContainer";
import DropdownContainer from "../Controls/DropdownComponent/DropdownContainer";
import DroppableContainer from "../Controls/DroppableComponent/DroppableContainer";
import RadioButtonContainer from "../Controls/RadioButton/RadioButtonContainer";
import SectionHeaderContainer from "../Controls/SectionHeader/SectionHeaderContainer";
import TextAreaContainer from "../Controls/TextAreaComponent/TextAreaContainer";
import TextFieldContainer from "../Controls/TextField/TextFieldContainer";
import "./Preview.css";

const Preveiw = (props) => {
  const store = useStore();

  console.log(store.getState());

  const config = store.getState();

  console.log(props.headingFont);

  return (
    <div className="outer_div">
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
                    <TextFieldContainer
                      openPreview={props.openPreview}
                      label={config.configList[i].label}
                      helptext={config.configList[i].helptext}
                      defaultValue={config.configList[i].defaultValue}
                      placeholder={config.configList[i].placeholder}
                      isReadOnly={config.configList[i].isReadOnly}
                      isrequired={config.configList[i].isrequired}
                    />
                  </>
                );
              case "number":
                return (
                  <>
                    <TextFieldContainer
                      openPreview={props.openPreview}
                      label={config.configList[i].label}
                      helptext={config.configList[i].helptext}
                      defaultValue={config.configList[i].defaultValue}
                      placeholder={config.configList[i].placeholder}
                      isReadOnly={config.configList[i].isReadOnly}
                      isrequired={config.configList[i].isrequired}
                    />
                  </>
                );
              case "password":
                return (
                  <>
                    <TextFieldContainer
                      openPreview={props.openPreview}
                      label={config.configList[i].label}
                      helptext={config.configList[i].helptext}
                      defaultValue={config.configList[i].defaultValue}
                      placeholder={config.configList[i].placeholder}
                      isReadOnly={config.configList[i].isReadOnly}
                      isrequired={config.configList[i].isrequired}
                    />
                  </>
                );
              case "email":
                return (
                  <>
                    <TextFieldContainer
                      openPreview={props.openPreview}
                      label={config.configList[i].label}
                      helptext={config.configList[i].helptext}
                      defaultValue={config.configList[i].defaultValue}
                      placeholder={config.configList[i].placeholder}
                      isReadOnly={config.configList[i].isReadOnly}
                      isrequired={config.configList[i].isrequired}
                    />
                  </>
                );
              case "url":
                return (
                  <>
                    <TextFieldContainer
                      openPreview={props.openPreview}
                      label={config.configList[i].label}
                      helptext={config.configList[i].helptext}
                      defaultValue={config.configList[i].defaultValue}
                      placeholder={config.configList[i].placeholder}
                      isReadOnly={config.configList[i].isReadOnly}
                      isrequired={config.configList[i].isrequired}
                    />
                  </>
                );
              case "tel":
                return (
                  <>
                    <TextFieldContainer
                      openPreview={props.openPreview}
                      label={config.configList[i].label}
                      helptext={config.configList[i].helptext}
                      defaultValue={config.configList[i].defaultValue}
                      placeholder={config.configList[i].placeholder}
                      isReadOnly={config.configList[i].isReadOnly}
                      isrequired={config.configList[i].isrequired}
                    />
                  </>
                );
              case "datetime-local":
                return (
                  <>
                    <TextFieldContainer
                      openPreview={props.openPreview}
                      label={config.configList[i].label}
                      helptext={config.configList[i].helptext}
                      defaultValue={config.configList[i].defaultValue}
                      placeholder={config.configList[i].placeholder}
                      isReadOnly={config.configList[i].isReadOnly}
                      isrequired={config.configList[i].isrequired}
                    />
                  </>
                );
              case "textarea":
                return (
                  <>
                    <TextAreaContainer
                      openPreview={props.openPreview}
                      label={config.configList[i].label}
                      helptext={config.configList[i].helptext}
                      defaultValue={config.configList[i].defaultValue}
                      placeholder={config.configList[i].placeholder}
                      isReadOnly={config.configList[i].isReadOnly}
                      isrequired={config.configList[i].isrequired}
                      rows={config.configList[i].rows}
                    />
                  </>
                );
              case "dropdown":
                return (
                  <>
                    <DropdownContainer
                      openPreview={props.openPreview}
                      label={config.configList[i].label}
                      listOfDropdown={config.configList[i].listOfDropdown}
                    />
                  </>
                );
              case "layout":
                return <DroppableContainer openPreview={props.openPreview} />;
              case "button":
                return (
                  <ButtonContainer
                    openPreview={props.openPreview}
                    label={config.configList[i].label}
                    types={config.configList[i].type}
                  />
                );
              case "radio":
                return (
                  <RadioButtonContainer
                    openPreview={props.openPreview}
                    label={config.configList[i].label}
                    listOfDropdown={config.configList[i].listOfDropdown}
                  />
                );
              case "sectionHeaderText":
                return (
                  <SectionHeaderContainer
                    openPreview={props.openPreview}
                    label={config.configList[i].label}
                    headingfonts={config.configList[i].headingFont}
                    heading={config.configList[i].heading}
                    paragraph={config.configList[i].paragraph}
                    defaultParagraph={config.configList[i].defaultParagraph}
                  />
                );
              case "file":
                return (
                  <AttachmentContainer
                    openPreview={props.openPreview}
                    label={config.configList[i].label}
                    types={config.configList[i].type}
                    paragraph={config.configList[i].paragraph}
                    isrequired={config.configList[i].isrequired}
                  />
                );
              case "checkbox":
                return (
                  <CheckBoxContainer
                    openPreview={props.openPreview}
                    label={config.configList[i].label}
                    listOfDropdown={config.configList[i].listOfDropdown}
                  />
                );
              default:
                break;
            }
          })}
        </form>
      </div>
    </div>
  );
};

export default Preveiw;
