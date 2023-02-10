import React from "react";
import "./Sidebar.css";
import { useState } from "react";
import drag from "../../assets/drag2.png";
export const Sidebar = () => {
  const data = [
    {
      Field: "Basic",
      Field_Name1: "Text Field",
      Field_Name2: "Text Area",
      Field_Name3: "Number",
      Field_Name4: "Password",
      Field_Name5: "Checkbox",
      Field_Name6: "Select Box",
      Field_Name7: "Select",
      Field_Name8: "Radio",
      Field_Name9: "Button",
      // Field_Name10:"Arrow",
      // Field_Name11:"",
    },
    {
      Field: "Advance",
      Field_Name1: "Email",
      Field_Name2: "URL",
      Field_Name3: "Phone Number",
      Field_Name4: "Tags",
      Field_Name5: "Address",
      Field_Name6: "Date/Time",
      Field_Name7: "Day",
      Field_Name8: "Time",
      Field_Name9: "Survey",
    },
  ];
  const [selected, setSelected] = useState(0);

  const toggle = (i) => {
    setSelected(i);
  };

  const handleDrag = (e) => {
    e.dataTransfer.setData("text", e.target.textContent);
  };

  return (
    <>
      <nav>
        {data.map((item, i) => (
          <>
            <div className="title" key={i} onClick={() => toggle(i)}>
              <div className="headings">{item.Field}</div>
              <span className="icons">{selected === i ? "-" : "+"}</span>
            </div>
            <div className={selected === i ? "content show" : "content"}>
              <ul className="options">
                <li draggable={true} onDragStart={(e) => handleDrag(e)}>
                  <img src={drag} alt="" />
                  {item.Field_Name1}
                </li>
                <li draggable={true} onDragStart={(e) => handleDrag(e)}>
                  <img src={drag} alt="" />
                  {item.Field_Name2}
                </li>
                <li draggable={true} onDragStart={(e) => handleDrag(e)}>
                  <img src={drag} alt="" />
                  {item.Field_Name3}
                </li>
                <li draggable={true} onDragStart={(e) => handleDrag(e)}>
                  <img src={drag} alt="" />
                  {item.Field_Name4}
                </li>
                <li draggable={true} onDragStart={(e) => handleDrag(e)}>
                  <img src={drag} alt="" />
                  {item.Field_Name5}
                </li>
                <li draggable={true} onDragStart={(e) => handleDrag(e)}>
                  <img src={drag} alt="" />
                  {item.Field_Name6}
                </li>
                <li draggable={true} onDragStart={(e) => handleDrag(e)}>
                  <img src={drag} alt="" />
                  {item.Field_Name7}
                </li>
                <li draggable={true} onDragStart={(e) => handleDrag(e)}>
                  <img src={drag} alt="" />
                  {item.Field_Name8}
                </li>
                <li draggable={true} onDragStart={(e) => handleDrag(e)}>
                  <img src={drag} alt="" />
                  {item.Field_Name9}
                </li>
                {/* <li
									draggable={true}
									onDragStart={(e) => handleDrag(e)}
								>
									{item.Field_Name10}
								</li>
								<li
									draggable={true}
									onDragStart={(e) => handleDrag(e)}
								>
									{item.Field_Name11}
								</li> */}
              </ul>
            </div>
          </>
        ))}
        {/* <ul>
              <li>Text Field</li>
              <li>Text Area</li>
              <li>Number</li>
              <li>Password</li>
              <li>CheckBox</li>
              <li>Select</li>
              <li>Radio Button</li>
              <li>Radio Button</li>
              <li>Radio Button</li>
              <li>Radio Button</li>
              <li>Radio Button</li>
            </ul> */}
      </nav>
    </>
  );
};
