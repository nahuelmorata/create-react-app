import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import * as socketIOCliente from "socket.io-client";
import { APIURL } from "../constantes";
import { Store } from "../contextGlobal";
import Inicio from "./vistas/Inicio/Inicio";
import Login from "./vistas/Login/Login";

const verificarToken = (token: string): void => {
    const server = socketIOCliente.connect(APIURL);

    server.emit("controlauth", token);

    server.on("borrarToken" , () => {
        localStorage.removeItem("token");
        window.location.reload();
    });
};

export const Rutas = () => {
    const [estado] = useContext(Store);

    verificarToken(estado.token);

    return (
        <Switch>
            <Route exact path="/" component={Inicio} />
            <Route exact path="/login" component={Login} />
        </Switch>
    );
};
