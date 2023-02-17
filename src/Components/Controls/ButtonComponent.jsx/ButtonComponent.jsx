import React, { useState } from "react";

const ButtonComponent = (type) => {
	const [configurationState, setConfigurationState] = useState({
		label: `Submit`,
		type: type ? type : "submit",
	});
	return (
		<button type={configurationState.type}>
			{configurationState.label}
		</button>
	);
};

export default ButtonComponent;
