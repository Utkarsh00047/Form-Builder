import { DeleteField } from "../../Redux/Actions/actions";
import  store from "../../Redux/Store/index";

export const deleteConfig = (setInputFields, configurationState) => {
  const dispatch = store.dispatch;
  console.log(configurationState.widgetId);

  if (window.confirm("Are you sure you want to delete this Field?")) {
    setInputFields((prev) =>
      prev.filter((inputField) => {
        console.log("uid:",inputField.props.uid);
        return inputField.props.uid !== configurationState.widgetId;
      } )
    );
    dispatch(DeleteField(configurationState));
  }
};

