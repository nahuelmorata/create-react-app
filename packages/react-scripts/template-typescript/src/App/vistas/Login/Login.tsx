import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { LoginServicio } from "../../../api/servicios";
import { hacerLogin, Store } from "../../../contextGlobal";

const loginService = new LoginServicio();

const Login = ({ history }) => {
    /**
     * States
     */
    const [estado, dispatch] = useContext(Store);
    const [usuario, setUsuario] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    /**
     * Handles
     */
    const handleChangeUsuario = (event: ChangeEvent<HTMLInputElement>) => {
        setUsuario(event.target.value);
    };
    const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };
    const handleClickEnviar = async () => {
        const loginRespuesta = await loginService.Login(usuario, password);

        if (loginRespuesta.token !== "") {
            dispatch(hacerLogin(loginRespuesta.token));

            history.push("/");
        } else {
            toast("Error en el usuario y/o contraseña");
        }
    };

    /**
     * Effects
     */
    useEffect(() => {
        if (estado.token !== "") {
            history.push("/");
        }
    }, [estado.token, history]);

    return (
        <div className="container-fluid h-100 vista-login">
            <div className="row h-100">
                <div className="col-8 col-lg-6 m-auto">
                    <div className="row">
                        <div className="col-10 text-center mx-auto titulo">
                            <div>Login</div>
                        </div>
                    </div>
                    <div className="row pt-4">
                        <div className="col-12">
                            <div className="card mx-auto">
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label>Usuario</label>
                                            <input className="form-control" placeholder="Usuario" type="text" onChange={handleChangeUsuario} />
                                        </div>
                                        <div className="form-group">
                                            <label>Contraseña</label>
                                            <input className="form-control" placeholder="Contraseña" type="password" onChange={handleChangePassword} />
                                        </div>
                                    </form>
                                    <div className="row">
                                        <div className="col-12 text-right">
                                            <button className="btn btn-raised btn-success" onClick={handleClickEnviar}>Enviar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer autoClose={2000} />
        </div>
    );
};

export default Login;
