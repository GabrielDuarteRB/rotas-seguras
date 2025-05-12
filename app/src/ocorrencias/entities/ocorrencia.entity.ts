import { Column, DataType, Model, Table } from 'sequelize-typescript';


@Table({ tableName: 'ocorrencia', timestamps: false })
export class Ocorrencia extends Model<Ocorrencia> {

    @Column({
         type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
    })
    id_ocorrencia: number;

    @Column(DataType.INTEGER)
    id_pessoa: number;

    @Column(DataType.INTEGER)
    id_status_ocorrencia: number;

    @Column(DataType.INTEGER)
    id_tipo_ocorrencia: number;

    @Column(DataType.FLOAT)
    latitude: number;

    @Column(DataType.FLOAT)
    longitude: number;

    @Column(DataType.STRING)
    descricao: string;

    @Column(DataType.DATE)
    criada_em: Date;

    @Column(DataType.DATE)
    finalizado_em: Date;
    
}
