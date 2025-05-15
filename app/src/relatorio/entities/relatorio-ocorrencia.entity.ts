import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import { PolicialViatura } from '../../policial/entities/policial-viatura.entity';
import { Ocorrencia } from '../../ocorrencias/entities/ocorrencia.entity';

@Table({ tableName: 'relatorio_ocorrencia', timestamps: false })
export class RelatorioOcorrencia extends Model<RelatorioOcorrencia> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id_relatorio: number;

  @ForeignKey(() => PolicialViatura)
  @Column(DataType.INTEGER)
  id_policial_viatura: number;

  @ForeignKey(() => Ocorrencia)
  @Column(DataType.INTEGER)
  id_ocorrencia: number;

  @Column(DataType.STRING)
  descricao: string;

  @Column(DataType.DATE)
  iniciada_em: Date;

  @Column(DataType.DATE)
  finalizado_em: Date | null;

  @BelongsTo(() => Ocorrencia)
  viatura: Ocorrencia;

  @BelongsTo(() => PolicialViatura)
  policial: PolicialViatura;
}