import { Injectable, NotFoundException } from '@nestjs/common';
import { RelatorioRepository } from './relatorio.repository';
import { CreateRelatorioOcorrenciaDto } from './dto/create-relatorio-ocorrencia.dto';
import { UpdateRelatorioOcorrenciaDto } from './dto/update-relatorio-ocorrencia.dto';
import { ReplaceRelatorioOcorrenciaDto } from './dto/replace-relatorio-ocorrencia.dto';
import { BuscarRelatorioOcorrenciaDto } from './dto/buscar-relatorio-ocorrencia.dto';


@Injectable()
export class RelatorioService {
  constructor(private readonly relatorioRepository: RelatorioRepository) {}

  createRelatorioOcorrencia(createRelatorioOcorrenciaDto: CreateRelatorioOcorrenciaDto) {
    return this.relatorioRepository.createRelatorioOcorrencia(createRelatorioOcorrenciaDto);
  }

  findAllRelatorioOcorrencia(filtros: BuscarRelatorioOcorrenciaDto) {

    return this.relatorioRepository.findAllRelatorioOcorrencia(filtros)
  }

  async findOneRelatorioOcorrencia(id: number) {
    const relatorio = await this.relatorioRepository.findOneRelatorioOcorrencia(id)

    if(!relatorio) {
      throw new NotFoundException(`Relatorio Ocorrencia com id ${id} não encontrada`);
    }

    return relatorio
  }

  async updateRelatorioOcorrencia(id: number, updateRelatorioOcorrenciaDto: UpdateRelatorioOcorrenciaDto | ReplaceRelatorioOcorrenciaDto) {
    const [linhasAfetadas, relatorioOcorrencia] = await this.relatorioRepository.updateRelatorioOcorrencia(id, updateRelatorioOcorrenciaDto);

    if (linhasAfetadas === 0) {
      throw new NotFoundException(`Relatorio Ocorrencia com id ${id} não encontrada`);
    }

    return relatorioOcorrencia[0];
  }

  async remove(id: number) {
    const deletado =  await this.relatorioRepository.removeRelatorioOcorrencia(id);

    if (!deletado) {
      throw new NotFoundException(`Relatorio Ocorrencia com id ${id} não encontrada`);
    }

    return deletado;
  }
}
