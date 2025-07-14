import { Injectable, Inject } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { CreateOcorrenciaDto } from './dto/create-ocorrencia.dto';
import { UpdateOcorrenciaDto } from './dto/update-ocorrencia.dto';
import { FindOcorrenciasDto } from './dto/find-ocorrencias.dto';
import { Ocorrencia } from './entities/ocorrencia.entity';
import { OcorrenciaRepository } from './ocorrencias.repository';
import { Op } from 'sequelize';
import { StatusOcorrencia, TipoOcorrencia } from './enums/ocorrencia.enum';

// export class RotaService {
//   constructor(private readonly rotaRepository: RotaRepository) {}

@Injectable()
export class OcorrenciasService {
  constructor(
    private readonly ocorrenciaRepository: OcorrenciaRepository,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  //1
  async create(createOcorrenciaDto: CreateOcorrenciaDto, token: string) {
    if (!createOcorrenciaDto.criada_em) {
      createOcorrenciaDto.criada_em = new Date();
    }
    const ocorrencia = await this.ocorrenciaRepository.create(createOcorrenciaDto);

    this.eventEmitter.emit('ocorrencia.criada', {
      ocorrencia: ocorrencia,
      token: token,
    });
    return ocorrencia;
  }

  //2
  findAll(query: FindOcorrenciasDto) {
    return this.ocorrenciaRepository.findAll(query);
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
    if (affectedCount === 0 || affectedCount === undefined) {
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

    const ocorrencia = await this.ocorrenciaRepository.findById(id);
    if (!ocorrencia) {
      throw new Error('Ocorrência não encontrada');
    }

    const [affectedCount] = await this.ocorrenciaRepository.update(ocorrencia.id, {
      id_pessoa: pessoaId,
    });
    if (affectedCount === 0 || affectedCount === undefined) {
      throw new Error('Ocorrência não encontrada');
    }
    return this.findOne(id);
  }

  //7

  async mudarStatusOcorrencia(id: number, id_status_ocorrencia: StatusOcorrencia) {
    const ocorrencia = await this.ocorrenciaRepository.findById(id);
    if (!ocorrencia) {
      throw new Error('Ocorrência não encontrada');
    }

    return this.ocorrenciaRepository.update(ocorrencia.id, { id_status_ocorrencia });
  }

  //8
  async findOcorrenciasFinalizadas() {
    const retornados = this.ocorrenciaRepository.findOcorrenciasFinalizadas();
    if (!retornados) {
      throw new Error('Nenhuma ocorrência finalizada encontrada');
    }
    return retornados;
  }

  //9
  async findOcorrenciasNaoFinalizadas() {
  const retornados = await this.ocorrenciaRepository.findOcorrenciasNaoFinalizadas();
  if (!retornados) {
      throw new Error('Nenhuma ocorrência não finalizada encontrada');
    }
    return retornados;
  }

  //10
  async findOcorrenciasPorTipo(tipo: TipoOcorrencia) {
    if (!Object.values(TipoOcorrencia).includes(tipo)) {
      throw new Error('Tipo de ocorrência inválido');
    }

    const ocorrencias = await this.ocorrenciaRepository.findOcorrenciasPorTipo(tipo);
    if (!ocorrencias || ocorrencias.length === 0) {
      throw new Error(`Nenhuma ocorrência encontrada para o tipo: ${tipo}`);
    }
    return ocorrencias;
  }

  //11
  async findOcorrenciasPorDescricao(descricao: string) {
    if (!descricao || descricao.trim() === '') {
      throw new Error('Descrição não pode ser vazia');
    }
    return this.ocorrenciaRepository.findOcorrenciasPorDescricao(descricao);
  }

  //12
  async findOcorrenciasPorDataExata(data: Date) {
    if (!(data instanceof Date) || isNaN(data.getTime()) || data.toString() === 'Invalid Date' || data < new Date('1970-01-01')) {
      throw new Error('Data inválida');
    }

    return this.ocorrenciaRepository.findOcorrenciasPorDataExata(data);
  }

  //13
  async findOcorrenciasPorDataInicio(dataInicio: Date) {
    if (!(dataInicio instanceof Date) || isNaN(dataInicio.getTime()) || dataInicio.toString() === 'Invalid Date' || dataInicio < new Date('1970-01-01')) {
      throw new Error('Data inicial inválida');
    }
    const ocorrencias = await this.ocorrenciaRepository.findOcorrenciasPorDataInicio(dataInicio);
    if (!ocorrencias || ocorrencias.length === 0) {
      throw new Error('Nenhuma ocorrência encontrada para a data inicial fornecida');
    }
    return ocorrencias;
  }

  //14
  async findOcorrenciasPorDataFim(dataFim: Date) {
    if (!(dataFim instanceof Date) || isNaN(dataFim.getTime()) || dataFim.toString() === 'Invalid Date' || dataFim < new Date('1970-01-01')) {
      throw new Error('Data final inválida');
    }
    const ocorrencias = await this.ocorrenciaRepository.findOcorrenciasPorDataFim(dataFim);
    if (!ocorrencias || ocorrencias.length === 0) {
      throw new Error('Nenhuma ocorrência encontrada para a data final fornecida');
    }
    return ocorrencias;
  }

  //15
  async findOcorrenciasPorDataInicioFim(dataInicio: Date, dataFim: Date) {
    if (!(dataInicio instanceof Date) || isNaN(dataInicio.getTime()) || dataInicio.toString() === 'Invalid Date' || dataInicio < new Date('1970-01-01')) {
      throw new Error('Data inicial inválida');
    }
    if (!(dataFim instanceof Date) || isNaN(dataFim.getTime()) || dataFim.toString() === 'Invalid Date' || dataFim < new Date('1970-01-01')) {
      throw new Error('Data final inválida');
    }

    if (dataInicio > dataFim) {
      throw new Error('Data inicial não pode ser maior que data final');
    }

    const ocorrencias = await this.ocorrenciaRepository.findOcorrenciasEntreDataInicioFim(dataInicio, dataFim);
    if (!ocorrencias || ocorrencias.length === 0) {
      throw new Error('Nenhuma ocorrência encontrada para o período fornecido');
    }

    return ocorrencias;
  }

  //16
  async finalizarOcorrencia(id: number) {
    const ocorrencia = await this.ocorrenciaRepository.findById(id);
    if (!ocorrencia) {
      throw new Error('Ocorrência não encontrada');
    }
    if (ocorrencia.finalizado_em) {
      throw new Error('Ocorrência já está finalizada');
    }

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
