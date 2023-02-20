import React from "react";
import { useStore } from "react-redux";
import x from "../../assests/x.png";
import "./Preview.css";
import { useState } from "react";

const Preveiw = (props) => {
  const store = useStore();
  const config = store.getState();
  // store.subscribe(() => {
  //     console.log(store.getState());
  // });
  console.log(store.getState());

  console.log(config);
  console.log(config.configList[0].type);

  //    const configReducer = useSelector((state) => state.configReducer);
  //     console.log(configReducer);
  //   const showPreviewFields = () => {
  //     switch (inputFields.type) {
  //       case "text":
  //         return <input />;
  //       //   <TextFieldContainer type={"text"} />;

  //       case "Text Area":
  //         return;
  //       //   <TextAreaComponent />;

  //       case "Number":
  //       //   return <TextFieldContainer type={"number"} />;
  //     }
  //   };

  return (
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

      <form>{/* {inputFields.map((elem) => elem)} */}</form>
    </div>
  );
};

export default Preveiw;
