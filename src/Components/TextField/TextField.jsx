import React, { useState} from "react";
import edit from "../../assests/edit.png";
import "./TextField.css";
import ModalBox from "../ModalBox/ModalBox";
import del from "../../assets/delete.png"

const TextField = ({type}) => {
const [showTextField,setshowTextField]=useState(true);
  const [openModalBox, setOpenModalBox] = useState(false);
  const setModalBox = () => {
    setOpenModalBox(!openModalBox);
  };
  const [configurationState, setConfigurationState] = useState({
    label: `Enter ${type}`,
    type: type,
    placeholder: "",
    isRequired: false,
    isReadOnly: false,
    defaultValue: "",
  });
  const handleDelete=()=>{
	if (window.confirm('Are you sure you want to delete this Field?')){
	setshowTextField(false);
	}
  }
//   useEffect(()=>{
// 	const storedShowTextField =localStorage.getItem("showTextField");
// 	if (storedShowTextField){
// 		setshowTextField(JSON.parse(storedShowTextField));
// 	}
//   },[]);

//   useEffect(()=>{
// 	localStorage.setItem("showTextField",JSON.stringify (showTextField));
//   },[showTextField]);
	
  return (
	showTextField ?(
    <>
      <label htmlFor="textField" className="heads">
        {configurationState.label}
      </label>
      <input
        defaultValue={configurationState.defaultValue}
        id={"textField"}
        type={configurationState.type}
        placeholder={configurationState.placeholder}
        readonly={configurationState.isReadOnly}
        required={configurationState.isRequired}
        className="input_field"
      />
      <div className="configuration_buttons">
        <img
          alt=""
          onClick={setModalBox}
          src={edit}
          className="config_icon"
        />
			<img src={del} alt="" className="delicon" id="del" onClick={handleDelete}/>
			
      </div>
      {openModalBox && (
        <ModalBox
          setModalBox={setModalBox}
          configurationState={configurationState}
          setConfigurationState={setConfigurationState}
        />
      )}
			{/* <div className="delicon"> */}
		
			{/* </div> */}
    </>):null
  );
};

export default TextField;
