import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
  HasOne,
  HasMany
} from 'sequelize-typescript';
import { Rota } from '../../rota/entities/rota.entity';
import { Policial } from './policial.entity';

@Table({ tableName: 'policial_viatura', timestamps: false })
export class PolicialViatura extends Model<PolicialViatura> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id_policial_viatura: number;

  //@ForeignKey(() => Viatura)
  @Column(DataType.INTEGER)
  id_viatura: number;

  @ForeignKey(() => Policial)
  @Column(DataType.INTEGER)
  matricula_policial: number;

  @Column(DataType.DATE)
  ativado_em: Date;

  @Column(DataType.DATE)
  devolvido_em: Date;

  @HasMany(() => Rota)
  rotas: Rota[];

  //@BelongsTo(() => Viatura)
  //viatura: Viatura;
//
  @BelongsTo(() => Policial, { as: 'policial' })
  policial: Policial;
}