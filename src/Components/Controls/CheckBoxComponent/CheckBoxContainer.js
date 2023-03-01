import { connect } from "react-redux";
import { insertConfig, updateConfig } from "../../../Redux/Actions/actions";
import CheckBoxComponent from "./CheckBoxComponent";

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

const CheckBoxContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(CheckBoxComponent);

export default CheckBoxContainer;
