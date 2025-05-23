import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';
import { CreationOptional } from 'sequelize';

@Table({ tableName: 'status_viatura', timestamps: false })
export class StatusViatura extends Model<StatusViatura> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare id_status_viatura: CreationOptional<number>;

  @Column(DataType.STRING)
  descricao: string;

}
