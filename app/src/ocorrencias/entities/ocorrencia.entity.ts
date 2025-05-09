import { Column, Model, Table } from 'sequelize-typescript';


@Table
export class Ocorrencia extends Model {

    @Column
    id_ocorrencia: number;

    @Column
    id_pessoa: number;

    @Column
    id_status_ocorrencia: number;

    @Column
    id_tipo_ocorrencia: number;

    @Column
    latitude: number;

    @Column
    longitude: number;

    @Column
    descricao: string;

    @Column
    criada_em: Date;

    @Column
    finalizada_em: Date;
    
}
