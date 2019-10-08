import ThemeProvider from "@material-ui/styles/ThemeProvider/ThemeProvider";
import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import theme from "./theme";

import * as serviceWorker from "./serviceWorker";

import "bootstrap-material-design/dist/css/bootstrap-material-design.css";
import { BrowserRouter } from "react-router-dom";

import { Rutas } from "./App/Rutas";
import { StoreProvider } from "./contextGlobal";

ReactDOM.render(
    <BrowserRouter>
        <StoreProvider>
            <ThemeProvider theme={theme} >
                <Rutas />
            </ThemeProvider>
        </StoreProvider>
    </BrowserRouter>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register({});
