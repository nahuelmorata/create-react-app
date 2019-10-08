import DTO from "./dto";
class LoginDTO extends DTO {
    public token: string = "";

    public cargarDTO(dto: any) {
        super.cargarDTO(dto);

        if (dto.token !== null) { this.token = dto.token; }
    }

    public clone(dto: LoginDTO) {
        super.clone(dto);

        dto.token = this.token;
    }
}

export default LoginDTO;
