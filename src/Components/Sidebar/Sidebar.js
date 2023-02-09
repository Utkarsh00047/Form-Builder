import React from "react";
import "./Sidebar.css";
import { useState } from "react";
export const Sidebar = () => {
	const data = [
		{
			Field: "Basic",
			Field_Name1: "Text Field",
			Field_Name2: "Radio Button",
			Field_Name3: "Password",
			Field_Name4: "File Upload",
		},
		{
			Field: "Basic2",
			Field_Name1: "Text Field",
			Field_Name2: "Radio Button",
			Field_Name3: "Password",
			Field_Name4: "File Upload",
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
							<ul>{item.Field}</ul>
							<span className="icons">{selected === i? "-" : "+"}</span>
						</div>
						<div
							className={
								selected === i ? "content show" : "content"
							}
						>
							<ul className="options">
								<li
									draggable={true}
									onDragStart={(e) => handleDrag(e)}
								>
									{item.Field_Name1}
								</li>
								<li
									draggable={true}
									onDragStart={(e) => handleDrag(e)}
								>
									{item.Field_Name2}
								</li>
								<li
									draggable={true}
									onDragStart={(e) => handleDrag(e)}
								>
									{item.Field_Name3}
								</li>
								<li
									draggable={true}
									onDragStart={(e) => handleDrag(e)}
								>
									{item.Field_Name4}
								</li>
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
