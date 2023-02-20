import { connect } from "react-redux";
import { insertConfig, updateConfig } from "../../../Redux/Actions/actions";
import TextAreaComponent from "./TextAreaComponent";

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

const TextAreaContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(TextAreaComponent);

export default TextAreaContainer;
