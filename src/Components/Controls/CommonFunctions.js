import { DeleteField } from "../../Redux/Actions/actions";
import  store from "../../Redux/Store/index";

export const deleteConfig = (setInputFields, configurationState) => {
  const dispatch = store.dispatch;
  console.log(configurationState.id);
  if (window.confirm("Are you sure you want to delete this Field?")) {
    setInputFields((prev) =>
      prev.filter((inputField) => {
       
        console.log(inputField);
        return inputField.props.uid !== configurationState.id;
      } )
    );
    dispatch(DeleteField(configurationState));
  }
};

