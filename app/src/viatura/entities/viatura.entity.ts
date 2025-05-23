import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';
import { StatusViatura } from '../../status_viatura/entities/status_viatura.entity';
import { CreationOptional } from 'sequelize';

@Table({ tableName: 'viatura', timestamps: false })
export class Viatura extends Model<Viatura> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare id_viatura: CreationOptional<number>;

  @Column(DataType.STRING)
  placa: string;

  @Column(DataType.STRING)
  modelo: string;

  @Column(DataType.INTEGER)
  ano: number;

  @ForeignKey(() => StatusViatura)
  @Column(DataType.INTEGER)
  declare id_status_viatura: number;

  @BelongsTo(() => StatusViatura)
  status: StatusViatura;
}
