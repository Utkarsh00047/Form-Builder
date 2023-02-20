import React from "react";
import { useStore } from "react-redux";
import x from "../../assests/x.png";
import "./Preview.css";

const Preveiw = (props) => {
    const store = useStore();

    // store.subscribe(() => {
    //     console.log(store.getState());
    // });
    console.log(store.getState());

    const config = store.getState();
    console.log(config.configList[0].type);

    //    const configReducer = useSelector((state) => state.configReducer);

    //     console.log(configReducer);

    return (
        <div className="preveiwbox">
            <div className="heading">
                <p>Preview </p>
                <button
                    type="button"
                    className="remove_bton"
                    onClick={props.setPreview}
                >
                    <img alt="" src={x} />
                </button>
            </div>

            <form></form>
        </div>
    );
};

export default Preveiw;
