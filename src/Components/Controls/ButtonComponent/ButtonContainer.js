import { connect } from "react-redux";
import { insertConfig, updateConfig } from "../../../Redux/Actions/actions";
import ButtonComponent from "./ButtonComponent";

const mapStateToProps = (state) => ({
  configList: state.configList,
});

const mapDispatchToProps = (dispatch) => ({
  insertConfig: (config) => {
    dispatch(insertConfig(config));
  },
  updateConfig: (config) => {
    dispatch(updateConfig(config));
  },
});

const ButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonComponent);

export default ButtonContainer;
