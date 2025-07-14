import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { RelatorioOcorrencia } from './entities/relatorio-ocorrencia.entity';
import { ReplaceRelatorioOcorrenciaDto } from './dto/replace-relatorio-ocorrencia.dto';
import { UpdateRelatorioOcorrenciaDto } from './dto/update-relatorio-ocorrencia.dto';
import { BuscarRelatorioOcorrenciaDto } from './dto/buscar-relatorio-ocorrencia.dto';

@Injectable()
export class RelatorioRepository {

  constructor(
    @InjectModel(RelatorioOcorrencia)
    private readonly relatorioOcorrenciaModel: typeof RelatorioOcorrencia,
  ) {}

  async createRelatorioOcorrencia(createRelatorioOcorrenciaDto: any): Promise<RelatorioOcorrencia> {
    return this.relatorioOcorrenciaModel.create(createRelatorioOcorrenciaDto);
  }

  async findAllRelatorioOcorrencia(filtros: BuscarRelatorioOcorrenciaDto): Promise<RelatorioOcorrencia[]> {
    const where: any = {};

    if (filtros.id_ocorrencia) where.id_ocorrencia = filtros.id_ocorrencia;

    if (filtros.iniciada_em) where.iniciada_em = { [Op.gte]: filtros.iniciada_em };

    if (filtros.finalizada_em) where.finalizada_em = { [Op.lte]: filtros.finalizada_em };

    if (typeof filtros.finalizada === 'boolean') {
      where.finalizado_em = filtros.finalizada ? { [Op.not]: null } : null;
    }


    return this.relatorioOcorrenciaModel.findAll({ where });
  }

  async findOneRelatorioOcorrencia(id: number): Promise<RelatorioOcorrencia | null> {
    return this.relatorioOcorrenciaModel.findByPk(id, {
      include: [{
        association: 'ocorrencia',
        required: false,
        order: [['iniciada_em', 'DESC']]
      }],
    });
  }

  async updateRelatorioOcorrencia(
    id: number,
    updateRelatorioOcorrenciaDto: UpdateRelatorioOcorrenciaDto | ReplaceRelatorioOcorrenciaDto
  ): Promise<[number, RelatorioOcorrencia[]]> {
    return this.relatorioOcorrenciaModel.update(updateRelatorioOcorrenciaDto, {
      where: { "id_relatorio": id },
      returning: true,
    });
  }

  async removeRelatorioOcorrencia(id: number): Promise<number> {
    return this.relatorioOcorrenciaModel.destroy({
      where: { "id_relatorio": id },
    });
  }
}