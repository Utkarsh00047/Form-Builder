import React, { useState } from "react";

const TextAreaComponent = () => {
	const [configurationState, setConfigurationState] = useState({
		label: `Enter text`,
		type: "textarea",
		placeholder: "",
		isRequired: false,
		isReadOnly: false,
		defaultValue: "",
	});
	return (
		<>
			<label htmlFor="textArea">{configurationState.label}</label>
			<textarea id="textArea" name="textArea" rows={4} cols={50} />
		</>
	);
};

export default TextAreaComponent;
