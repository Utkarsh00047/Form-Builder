import { connect } from "react-redux";
import { insertConfig, updateConfig } from "../../../Redux/Actions/actions";
import SectionHeader from "./SectionHeader";

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

const SectionHeaderContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(SectionHeader);

export default SectionHeaderContainer