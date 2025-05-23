import { Injectable, Inject } from '@nestjs/common';
import { CreateOcorrenciaDto } from './dto/create-ocorrencia.dto';
import { UpdateOcorrenciaDto } from './dto/update-ocorrencia.dto';
import { Ocorrencia } from './entities/ocorrencia.entity';
import { OcorrenciaRepository } from './ocorrencias.repository';
import { Op } from 'sequelize';

// export class RotaService {
//   constructor(private readonly rotaRepository: RotaRepository) {}

@Injectable()
export class OcorrenciasService {
  constructor(private readonly ocorrenciaRepository: OcorrenciaRepository) {}

  //1
  create(createOcorrenciaDto: CreateOcorrenciaDto) {
    if (!createOcorrenciaDto.criada_em) {
      createOcorrenciaDto.criada_em = new Date();
    }
    return this.ocorrenciaRepository.create(createOcorrenciaDto);
  }

  //2
  findAll() {
    return this.ocorrenciaRepository.findAll();
  }

  //3
  findOne(id: number) {
    const ocorrencia = this.ocorrenciaRepository.findById(id);
    if (!ocorrencia) {
      throw new Error('Ocorrência não encontrada');
    }
    return ocorrencia;
  }

  //4
  async update(id: number, updateOcorrenciaDto: UpdateOcorrenciaDto) {
    const [affectedCount] = await this.ocorrenciaRepository.update(
      id,
      updateOcorrenciaDto,
    );
    if (affectedCount === 0) {
      throw new Error('Ocorrência não encontrada ou nenhum campo alterado');
    }
    return this.findOne(id);
  }

  //5
  async remove(id: number) {
    const ocorrencia = await this.ocorrenciaRepository.findById(id);

    if (!ocorrencia) {
      throw new Error('Ocorrência não encontrada');
    }

    await ocorrencia.destroy({ force: true });
    return { message: 'Ocorrência removida permanentemente' };
  }

  //6
  async atribuirPessoa(id: number, pessoaId: number) {
    const [affectedCount] = await this.ocorrenciaRepository.update(id, {
      id_pessoa: pessoaId,
    });
    if (affectedCount === 0) {
      throw new Error('Ocorrência não encontrada');
    }
    return this.findOne(id);
  }

  //7

  mudarStatusOcorrencia(id: number, id_status_ocorrencia: number) {
    return this.ocorrenciaRepository.update(id, { id_status_ocorrencia });
  }

  //8
  async findOcorrenciasFinalizadas() {
    return this.ocorrenciaRepository.findOcorrenciasFinalizadas();
  }

  //9
  async findOcorrenciasNaoFinalizadas() {
    return this.ocorrenciaRepository.findOcorrenciasNaoFinalizadas();
  }

  //10
  async findOcorrenciasPorTipo(tipo: number) {
    return this.ocorrenciaRepository.findOcorrenciasPorTipo(tipo);
  }

  //11
  async findOcorrenciasPorDescricao(descricao: string) {
    return this.ocorrenciaRepository.findOcorrenciasPorDescricao(descricao);
  }

  //12
  async findOcorrenciasPorDataExata(data: Date) {
    return this.ocorrenciaRepository.findOcorrenciasPorDataExata(data);
  }

  //13
  async findOcorrenciasPorDataInicio(dataInicio: Date) {
    return this.ocorrenciaRepository.findOcorrenciasPorDataInicio(dataInicio);
  }

  //14
  async findOcorrenciasPorDataFim(dataFim: Date) {
    return this.ocorrenciaRepository.findOcorrenciasPorDataFim(dataFim);
  }

  //15
  async findOcorrenciasPorDataInicioFim(dataInicio: Date, dataFim: Date) {
    if (dataInicio > dataFim) {
      throw new Error('Data inicial não pode ser maior que data final');
    }
    return this.ocorrenciaRepository.findOcorrenciasEntreDataInicioFim(
      dataInicio,
      dataFim,
    );
  }

  //16
  async finalizarOcorrencia(id: number) {
    return this.ocorrenciaRepository.finalizarOcorrencia(id);
  }

  //17
  async buscarOcorrenciasProximas(
    latitude: number,
    longitude: number,
    raioKm: number,
  ) {
    if (raioKm <= 0) throw new Error('Raio deve ser maior que zero');
    if (raioKm > 100) throw new Error('Raio máximo é 100 km');

    if (!this.isValidCoordinate(latitude, longitude))
      throw new Error('Coordenadas inválidas');

    return this.ocorrenciaRepository.findOcorrenciasProximas(
      latitude,
      longitude,
      raioKm,
    );
  }

  //17.1
  private isValidCoordinate(lat: number, long: number): boolean {
    return lat >= -90 && lat <= 90 && long >= -180 && long <= 180;
  }
}
