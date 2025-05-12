import { IsOptional } from "class-validator";

export class CreateOcorrenciaDto {

        id_ocorrencia: number;
    

        id_pessoa: number;
    

        id_status_ocorrencia: number;
    

        id_tipo_ocorrencia: number;
    

        latitude: number;
    

        longitude: number;
    

        descricao: string;
    

        criada_em: Date;
    
        @IsOptional()
        finalizado_em?: Date;
}
