import React from "react";
import "./Sidebar.css";
import { useState } from "react";
import drag from "../../assets/drag2.png";
import { controlTypes, controls } from "./SidebarConstants";
export const Sidebar = () => {
	const [selected, setSelected] = useState(0);

	const toggle = (i) => {
		setSelected(i);
	};

	const handleDrag = (e) => {
		e.dataTransfer.setData("text", e.target.textContent);
		const highlight = document.getElementById("formPage");
		highlight.classList.add("container_highlight");
	};

	const handleDragEnd = () => {
		const highlight = document.getElementById("formPage");
		highlight.classList.remove("container_highlight");
	};

	return (
		<>
			<nav>
				{controlTypes.map((item, i) => (
					<>
						<div
							className="title"
							key={i}
							onClick={() => toggle(i)}
						>
							<div className="headings">{item}</div>
							<span className="icons">
								{selected === i ? "-" : "+"}
							</span>
						</div>
						<div
							className={
								selected === i ? "content show" : "content"
							}
						>
							<ul className="options">
								{controls[item].map((control) => {
									return (
										<li
											draggable={true}
											onDragStart={(e) => handleDrag(e)}
											onDragEnd={() => handleDragEnd()}
										>
											<img src={drag} alt="" />
											{control}
										</li>
									);
								})}
							</ul>
						</div>
					</>
				))}
			</nav>
		</>
	);
};
