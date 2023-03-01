import { connect } from "react-redux";
import { insertConfig, updateConfig } from "../../../Redux/Actions/actions";
import RadioButton from "./RadioButton";

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

const RadioButtonContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(RadioButton);

export default RadioButtonContainer;
