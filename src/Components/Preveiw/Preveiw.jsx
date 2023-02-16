import React from "react";
import x from "../../assests/x.png";
import "./Preveiw.css";

const Preveiw = (props) => {
    return (
        <div className="preveiwbox">
            <div className="heading">
                <p>Preveiw </p>
                <button
                    type="button"
                    className="remove_bton"
                    onClick={props.setPreveiw}
                >
                    <img alt="" src={x} />
                </button>
            </div>

            <form></form>
        </div>
    );
};

export default Preveiw;
