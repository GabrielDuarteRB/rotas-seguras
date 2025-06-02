import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
} from 'sequelize-typescript';

import { PostoPolicial } from '../../policial/entities/posto-policial.entity';

@Table({ tableName: 'policial', timestamps: false })
export class Policial extends Model<Policial> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  matricula: number;

  //@ForeignKey(() => Pessoa)
  @Column(DataType.INTEGER)
  id_pessoa: number;

  //@ForeignKey(() => PostoPolicial)
  @Column(DataType.INTEGER)
  posto: number;

  @Column(DataType.BOOLEAN)
  ativo: boolean;
}
