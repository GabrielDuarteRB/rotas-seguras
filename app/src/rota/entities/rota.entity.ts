import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table({ tableName: 'rota', timestamps: false })
export class Rota extends Model<Rota> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id_rota: number;

  // @ForeignKey(() => PolicialViatura)
  @Column(DataType.INTEGER)
  id_policial_viatura: number;

  @Column(DataType.FLOAT)
  longitude: number;

  @Column(DataType.FLOAT)
  latitude: number;

  @Column(DataType.DATE)
  iniciada_em: Date;

  @Column(DataType.DATE)
  finalizada_em: Date;

  // @BelongsTo(() => PolicialViatura)
  // policialViatura: PolicialViatura;
}
