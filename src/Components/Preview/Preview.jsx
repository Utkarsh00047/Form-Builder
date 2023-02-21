import React from "react";
import { useStore } from "react-redux";
import x from "../../assests/x.png";
import "./Preview.css";


const Preveiw = (props) => {
    const store = useStore();

    console.log(store.getState());

    const config = store.getState();
    //console.log(config.configList[0].type);

    const switchPreview = () => {
        console.log("fdgdfg");
        config.configList.map((prev, i) => {
            console.log(config.configList[i]);
            switch (config.configList[i].type) {
                case "text":
                    return (
                        <>
                            <label>{config.configList[i].label}</label>
                            <input
                                placeholder={config.configList[i].placeholder}
                            />
                        </>
                    );
                case "textarea":
                    return (
                        <>
                            <label>{config.configList[i].label}</label>
                            <textarea
                                placeholder={config.configList[i].placeholder}
                            />
                        </>
                    );
                default:
                    break;
            }
        });
    };
    //for (var i; i <= config.configList.length; i++)
    //     {
    //         console.log(config.configList[i].type);
    //         switch (config.configList[i].type) {
    //             case "text":
    //                 return (
    //                     <>
    //                         <label>{config.configList[i].label}</label>
    //                         <input
    //                             placeholder={config.configList[i].placeholder}
    //                         />
    //                     </>
    //                 );
    //             default:
    //                 break;
    //         }
    //     }
    // };

    // useEffect(() => {
    //     switchPreview();
    // }, [config]);

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

            <form>
                {config.configList.map((prev, i) => {
                    console.log(config.configList[i]);
                    switch (config.configList[i].type) {
                        case "text":
                            return (
                                <>
                                    <label>{config.configList[i].label}</label>
                                    <input
                                        placeholder={
                                            config.configList[i].placeholder
                                        }
                                        readOnly={
                                            config.configList[i].isReadOnly
                                        }
                                    />
                                </>
                            );
                        case "textarea":
                            return (
                                <>
                                    <label>{config.configList[i].label}</label>
                                    <textarea
                                        placeholder={
                                            config.configList[i].placeholder
                                        }
                                    />
                                </>
                            );
                        default:
                            break;
                    }
                })}
            </form>
        </div>
    );
};

export default Preveiw;
