import { connect } from "react-redux";
import { insertConfig, setLayoutInputField, updateConfig } from "../../../Redux/Actions/actions";
import { Droppable } from "./Droppable";

const mapStateToProps = (state) => ({
	configList: state.configList,
	layoutInput: state.layoutInput
});

const mapDispatchToProps = (dispatch) => ({ 
	insertConfig: (config) => {
		dispatch(insertConfig(config));
	},
	updateConfig: (config) => {
		dispatch(updateConfig(config));
	},
	inputLayoutFields: (inputTag) => {
		dispatch(setLayoutInputField(inputTag))
	}
});

const DroppableContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Droppable);

export default DroppableContainer;
