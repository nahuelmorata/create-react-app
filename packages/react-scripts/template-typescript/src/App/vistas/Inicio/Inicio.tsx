import React, { useContext, useEffect } from "react";

import "react-toastify/dist/ReactToastify.min.css";
import { Store } from "../../../contextGlobal";

const Inicio = ({ history }) => {
    /**
     * States
     */
    const [estado] = useContext(Store);

    /**
     * Handles
     */

    /**
     * Effects
     */
    useEffect(() => {
        if (estado.token === "") {
            history.push("/login");
        }
    }, [estado.token, history]);

    /**
     * UI
     */

    return (
        <div className="container h-100">
            <div className="row h-100">
                <div className="col-xs-8 col-md-8 m-auto">
                    Inicio
                </div>
            </div>
        </div>
    );
};

export default Inicio;
