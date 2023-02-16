import React, { useState } from "react";
import TextField from "../TextField/TextField";
import "./Droppable.css";
import del from "../../assets/delete.png"

export const Droppable = (props) => {
  const [inputFields, setInputFields] = useState([]);
  const [showTextField,setshowTextField]=useState(true);
  const allowDragEvent = (e) => {
    // e.preventDefault();
  };
  const handleDrop = (e) => {
    e.preventDefault();
    const inputType = e.dataTransfer.getData("text");
    const inputTag = SwitchInput(inputType);
    console.log(inputTag);

    const highlight = document.getElementById("GridSection");
    highlight.classList.add("Droppable_highlight");

    setInputFields((prev) => [...prev, inputTag]);
    console.log(inputFields);
  };

  const handleDragEnter = ()=>{
    props.setIsToggle(true);
  };

  const handleDragLeave=()=>{
    props.setIsToggle(!props.Toggle);
  };
  const handleDelete=()=>{
	if (window.confirm('Are you sure you want to delete this Field?')){
	setshowTextField(false);
	}
  }
  const SwitchInput = (inputType) => {
    switch (inputType) {
      case "Text Field":
        return <TextField type={"text"} />;

      case "Text Area":
        return <TextField type={"text"} />;

      case "Password":
        return <TextField type={"password"} />;
       
        // case "Layout":
        //     return(
        //         <button className="layout-button">
        //             Layout
        //         </button>
        //     );

      default:
        break;
    }
  };
  return (
    showTextField ?(
    <div className="Drop">
    <div
    id="GridSection"
      className="DroppableSection"
      onDragOver={(e) => allowDragEvent(e)}
      onDrop={(e) => handleDrop(e)}
      onDragEnter = {()=>handleDragEnter()}
      onDragLeave = {()=>handleDragLeave()}
    >
      {/* <h2>columns</h2> */}
      {/* {inputFields.map((elem) => elem)} */}
      <div className="DropArea" >
      {inputFields.map((inputField,i) => 
        <div className="DropElement" key={i}>
            {inputField}
        </div>
       
        )}
        {/* <div className="DropElem2"
          onDragOver={(e) => allowDragEvent(e)}
          onDrop={(e) => handleDrop(e)}>
            {inputFields.map((elem) => elem)}
        </div> */}
         
      </div>
    </div>
    <img src={del} alt="" className="delicon" id="del" onClick={handleDelete}/>
    </div>
):null

  );
};

// export default Droppable
