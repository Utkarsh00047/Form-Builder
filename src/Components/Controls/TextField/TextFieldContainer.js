import { connect } from "react-redux";
import { insertConfig, updateConfig } from "../../../Redux/Actions/actions";
import TextField from "./TextField";

const mapStateToProps = (state) => ({
	configList: state.configList,
});

const mapDispatchToProps = (dispatch) => ({
	insertConfig: (config) => {
		dispatch(insertConfig(config));
	},
	updateConfig: (config) => {
		dispatch(updateConfig(config));
	}
});

const TextFieldContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(TextField);

export default TextFieldContainer;
