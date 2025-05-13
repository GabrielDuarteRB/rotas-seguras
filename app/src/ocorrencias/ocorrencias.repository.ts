import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Ocorrencia } from './entities/ocorrencia.entity';
import { CreateOcorrenciaDto } from './dto/create-ocorrencia.dto';
import { UpdateOcorrenciaDto } from './dto/update-ocorrencia.dto';
import { ReplaceOcorrenciaDto } from './dto/replace-ocorrencia.dto';
import { Op } from 'sequelize';
import sequelize from 'sequelize';

@Injectable()
export class OcorrenciaRepository {
  constructor(
    @InjectModel(Ocorrencia)
    private readonly OcorrenciaModel: typeof Ocorrencia,
  ) {}

  async findAll() {
    return this.OcorrenciaModel.findAll();
  }

  async findById(id: number) {
    return this.OcorrenciaModel.findByPk(id);
  }

  async create(createOcorrenciaDto: CreateOcorrenciaDto) {
    return this.OcorrenciaModel.create({
      ...createOcorrenciaDto,
    } as Ocorrencia);
  }

  async update(
    id: number,
    updateOcorrenciaDto: UpdateOcorrenciaDto | ReplaceOcorrenciaDto,
  ) {
    return await this.OcorrenciaModel.update(updateOcorrenciaDto, {
      where: { id_ocorrencia: id },
      returning: true,
    });
  }

  async remove(id: number) {
    return this.OcorrenciaModel.destroy({
      where: { id_ocorrencia: id },
    });
  }

  async findOcorrenciasPorTipo(tipo: number) {
    return this.OcorrenciaModel.findAll({
        where: {
            id_tipo_ocorrencia: tipo
        }
    });
}

  async findOcorrenciasPorDescricao(descricao: string) {
    return this.OcorrenciaModel.findAll({
      where: {
        descricao: {
          [Op.like]: `%${descricao}%`,
        },
      },
    });
  }

  async findOcorrenciasPorDataExata(data: Date) {
    return this.OcorrenciaModel.findAll({
      where: sequelize.where(
        sequelize.fn('DATE', sequelize.col('criada_em')),
        data,
      ),
    });
  }

  async findOcorrenciasPorDataInicio(dataInicio: Date) {
    return this.OcorrenciaModel.findAll({
      where: {
        criada_em: { [Op.gte]: dataInicio },
      },
    });
  }

  async findOcorrenciasPorDataFim(dataFim: Date) {
    return this.OcorrenciaModel.findAll({
      where: {
        criada_em: { [Op.lte]: dataFim },
      },
    });
  }

  async findOcorrenciasEntreDataInicioFim(dataInicio: Date, dataFim: Date) {
    return this.OcorrenciaModel.findAll({
      where: {
        criada_em: {
          [Op.between]: [dataInicio, dataFim],
        },
      },
    });
  }

  async finalizarOcorrencia(id: number) {
    const updated = await this.OcorrenciaModel.update(
      { finalizado_em: new Date() },
      { where: { id_ocorrencia: id } },
    );

    if (updated[0] === 0) {
      throw new Error('Ocorrência não encontrada');
    }
    return updated;
  }

  async findOcorrenciasFinalizadas() {
    return this.OcorrenciaModel.findAll({
      where: {
        finalizado_em: { [Op.ne]: null as any }, // Op.ne = "not equal"
      },
    });
  }

  async findOcorrenciasNaoFinalizadas() {
    return this.OcorrenciaModel.findAll({
      where: {
        finalizado_em: { [Op.is]: null as any },
      },
    });
  }

  async findOcorrenciasProximas(latitude: number, longitude: number, raioKm: number) {
  if (!this.OcorrenciaModel.sequelize) {
    throw new Error('Sequelize instance is not available');
  }

  return this.OcorrenciaModel.sequelize.query(`
    SELECT *,
      (6371 * acos(
        cos(radians(:latitude)) * 
        cos(radians(latitude)) * 
        cos(radians(longitude) - 
        radians(:longitude)) + 
        sin(radians(:latitude)) * 
        sin(radians(latitude))
      )) AS distancia
    FROM ocorrencia
    HAVING distancia <= :raioKm
    ORDER BY distancia ASC
  `, {
    replacements: { latitude, longitude, raioKm },
    model: Ocorrencia,
    mapToModel: true,
  });
}
}
