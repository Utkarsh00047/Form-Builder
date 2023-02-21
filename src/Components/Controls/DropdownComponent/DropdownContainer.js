import { connect } from "react-redux";
import { insertConfig, updateConfig } from "../../../Redux/Actions/actions";
import DropdownComponent from "./DropdownComponent";

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

const DropdownContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(DropdownComponent);

export default DropdownContainer;
