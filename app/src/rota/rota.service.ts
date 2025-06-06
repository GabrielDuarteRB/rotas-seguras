import { Injectable, NotFoundException } from '@nestjs/common';
import { Op } from 'sequelize';
import { RotaRepository } from './rota.repository';
import { CreateRotaDto } from './dto/create-rota.dto';
import { UpdateRotaDto } from './dto/update-rota.dto';
import { ReplaceRotaDto } from './dto/replace-rota.dto';
import { GetMaisProximoDto } from './dto/get-mais-proximo.dto';
import { BuscarTodasRotasDto } from './dto/buscar-todas-rota.dto';

@Injectable()
export class RotaService {
  constructor(private readonly rotaRepository: RotaRepository) {}

  create(createRotaDto: CreateRotaDto) {
    return this.rotaRepository.create(createRotaDto);
  }

  findAll(filtros: BuscarTodasRotasDto) {
    const where: any = {};
    const tolerancia = 0.1

    if(filtros.id_policial_viatura) where.id_policial_viatura = filtros.id_policial_viatura;
    if(filtros.latitude) where.latitude = { [Op.between]: [filtros.latitude - tolerancia, filtros.latitude + tolerancia] };
    if(filtros.longitude) where.longitude = { [Op.between]: [filtros.longitude - tolerancia, filtros.longitude + tolerancia] };
    if(filtros.iniciada_em_inicio && filtros.iniciada_em_fim) where.iniciada_em = { [Op.between]: [filtros.iniciada_em_inicio, filtros.iniciada_em_fim], };
    if(filtros.iniciada_em_inicio && !filtros.iniciada_em_fim) where.iniciada_em = { [Op.gte]: filtros.iniciada_em_inicio };
    if(!filtros.iniciada_em_inicio && filtros.iniciada_em_fim) where.iniciada_em = { [Op.lte]: filtros.iniciada_em_fim };

    return this.rotaRepository.findAll(where);
  }

  async findOne(id: number) {
    const rota = await this.rotaRepository.findById(id);

    if (!rota) {
      throw new NotFoundException(`Rota com id ${id} não encontrada`);
    }
    return rota;
  }

  async update(id: number, updateRotaDto: UpdateRotaDto | ReplaceRotaDto) {
    const [linhasAfetadas, rotas] = await this.rotaRepository.update(id, updateRotaDto);

    if (linhasAfetadas === 0) {
      throw new NotFoundException(`Rota com id ${id} não encontrada`);
    }

    return rotas[0];

  }

  buscarViaturaMaisProxima(localizacaoDto: GetMaisProximoDto) {
    return this.rotaRepository.buscarViaturaMaisProxima(localizacaoDto);
  }

  remove(id: number) {
    const deletado =  this.rotaRepository.remove(id);

    if (!deletado) {
      throw new NotFoundException(`Rota com id ${id} não encontrada`);
    }

    return deletado;
  }
}
