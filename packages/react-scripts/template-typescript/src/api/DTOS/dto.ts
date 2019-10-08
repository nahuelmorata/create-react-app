class DTO {
    [key: string]: any;
    public id: any;

    public cargarDTO(dto: any) {
        if (dto.id) {
            this.id = dto.id;
        }
    }

    public clone(dto: DTO) {
        dto.id = this.id;
    }
}

export default DTO;
