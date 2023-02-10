import React from "react";
import "./TextField.css"
import del from "../../assets/delete.png"
const TextField = ({type}) => {
	// 
	return (
		<>
			<label htmlFor="textField" className="heads">Enter {type}</label>
			<input id={"textField"} type={type} className="input_feild"/>
			{/* <div className="delicon"> */}
			<img src={del} alt="" className="delicon" id="del"/>
			{/* </div> */}
		</>
	);
};

export default TextField;

// import React from "react";
// import "./TextField.css";
// import del from "../../assets/delete.png";
// const TextField = ({ type }) => {

//   const handleDelete = (onDelete) => {
// 	console.log(onDelete);
//     if (onDelete) {
//       onDelete();
//     }
//   };

//   return (<><label htmlFor="textField" className="heads">
//         Enter {type}</label><input id={"textField"} type={type} className="input_feild" /><img
//         src={del}
//         alt=""
//         className="delicon"
//         id="del"
//         onClick={handleDelete}
//       /></>
//   );
// };
// export default TextField;