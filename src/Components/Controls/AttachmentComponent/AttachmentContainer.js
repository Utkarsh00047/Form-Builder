import { connect } from "react-redux";
import { insertConfig, updateConfig } from "../../../Redux/Actions/actions";
import AttachmentComponent from "./AttachmentComponent";

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

const AttachmentContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(AttachmentComponent);

export default AttachmentContainer;
