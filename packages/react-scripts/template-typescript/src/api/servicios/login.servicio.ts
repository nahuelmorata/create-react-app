import { APIURL } from "../../constantes";
import LoginDTO from "../DTOS/Login.dto";

export class LoginServicio {
    public async Login(usuario: string, password: string): Promise<LoginDTO> {
        const respuesta = await fetch(`${APIURL}/login`, {
            body: JSON.stringify({
                usuario,
                password,
            }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            mode: "cors",
        }).then((response) => response.json());

        const dto = new LoginDTO();
        dto.cargarDTO(respuesta);
        return dto;
    }

}
