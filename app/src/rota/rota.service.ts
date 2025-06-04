import { Injectable, NotFoundException } from '@nestjs/common';
import { RotaRepository } from './rota.repository';
import { CreateRotaDto } from './dto/create-rota.dto';
import { UpdateRotaDto } from './dto/update-rota.dto';
import { ReplaceRotaDto } from './dto/replace-rota.dto';
import { GetMaisProximoDto } from './dto/get-mais-proximo.dto';

@Injectable()
export class RotaService {
  constructor(private readonly rotaRepository: RotaRepository) {}

  create(createRotaDto: CreateRotaDto) {
    return this.rotaRepository.create(createRotaDto);
  }

  findAll() {
    return this.rotaRepository.findAll();
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
