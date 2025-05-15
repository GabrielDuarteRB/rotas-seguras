import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RelatorioOcorrencia } from './entities/relatorio-ocorrencia.entity';
import { ReplaceRelatorioOcorrenciaDto } from './dto/replace-relatorio-ocorrencia.dto';
import { CreateRelatorioOcorrenciaDto } from './dto/create-relatorio-ocorrencia.dto';
import { UpdateRelatorioOcorrenciaDto } from './dto/update-relatorio-ocorrencia.dto';

@Injectable()
export class RelatorioRepository {

  constructor(
    @InjectModel(RelatorioOcorrencia)
    private readonly relatorioOcorrenciaModel: typeof RelatorioOcorrencia,
  ) {}

  async createRelatorioOcorrencia(createRelatorioOcorrenciaDto: any): Promise<RelatorioOcorrencia> {
    return this.relatorioOcorrenciaModel.create(createRelatorioOcorrenciaDto);
  }

  async findAllRelatorioOcorrencia(): Promise<RelatorioOcorrencia[]> {
    return this.relatorioOcorrenciaModel.findAll();
  }

  async findOneRelatorioOcorrencia(id: number): Promise<RelatorioOcorrencia | null> {
    return this.relatorioOcorrenciaModel.findByPk(id);
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