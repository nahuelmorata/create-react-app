import React, { Dispatch, useReducer } from "react";

const HACERLOGIN: string = "HACER_LOGIN";

export interface IGlobal {
    token: string;
}

export interface IAccion {
    tipo: string;
    data: any;
}

export function hacerLogin(token: string): IAccion {
    return {
        data: {
            token,
        },
        tipo: HACERLOGIN,
    };
}

const reducer: React.Reducer<IGlobal, IAccion> = (estado: IGlobal, accion: IAccion) => {
    const clon = Object.assign({}, estado);
    switch (accion.tipo) {
        case HACERLOGIN: {
            clon.token = accion.data.token;

            localStorage.setItem("token", clon.token);

            return clon;
        }
        default:
            return estado;
    }
};

const valorInicial: IGlobal = {
    token: (localStorage.getItem("token") === null) ? "" : localStorage.getItem("token"),
};

export const Store = React.createContext<[IGlobal, Dispatch<IAccion>]>({} as [IGlobal, Dispatch<IAccion>]);

export function StoreProvider(props: any) {
    return <Store.Provider value={useReducer(reducer, valorInicial)}>
        {props.children}
    </Store.Provider>;
}
