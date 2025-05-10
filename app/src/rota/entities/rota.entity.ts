import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table
export class Rota extends Model<Rota> {
  @Column(DataType.STRING)
  nome: string;

  @Column(DataType.STRING)
  destino: string;
}
