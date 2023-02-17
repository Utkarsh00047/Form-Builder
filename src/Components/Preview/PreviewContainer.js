import { connect } from "react-redux";
import Preview from './Preview'

const mapStateToProps = (state) => ({
	configList: state.configList,
});


// const mapDispatchToProps = (dispatch) => ({
// 	insertConfig: (config) => {
// 		dispatch(insertConfig(config));
// 	},
// 	updateConfig: (config) => {
// 		dispatch(updateConfig(config));
// 	}
// });

const PreviewContainer = connect(
	mapStateToProps,
	undefined
)(Preview);

export default PreviewContainer;