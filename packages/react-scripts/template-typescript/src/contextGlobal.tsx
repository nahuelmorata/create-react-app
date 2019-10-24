import React, { Dispatch, useReducer } from "react";

const HACERLOGIN: string = "HACER_LOGIN";
const MOSTRARSIDEBAR: string = "MOSTRAR_SIDEBAR";

export interface Global {
    token: string;
    mostrarSidebar: boolean;
}

export interface Accion {
    tipo: string;
    data: any;
}

export const hacerLogin = (tokenVerificar: string): Accion => {
    return {
        data: {
            tokenVerificar,
        },
        tipo: HACERLOGIN,
    };
};

export const mostrarSidebar = (mostrar: boolean): Accion => {
    return {
        data: {
            mostrar
        },
        tipo: MOSTRARSIDEBAR
    };
};

const reducer: React.Reducer<Global, Accion> = (estado: Global, accion: Accion) => {
    const clon = Object.assign({}, estado);
    switch (accion.tipo) {
        case HACERLOGIN: {
            clon.token = accion.data.token;

            localStorage.setItem("token", clon.token);

            return clon;
        }
        case MOSTRARSIDEBAR: {
            clon.mostrarSidebar = accion.data.mostrar;

            return clon;
        }
        default:
            return estado;
    }
};

const token = localStorage.getItem("token");

const valorInicial: Global = {
    token: (token === null) ? "" : token,
    mostrarSidebar: true
};

export const Store = React.createContext<[Global, Dispatch<Accion>]>({} as [Global, Dispatch<Accion>]);

export const StoreProvider = (props: any) => <Store.Provider value={useReducer(reducer, valorInicial)}>{props.children}</Store.Provider>;
