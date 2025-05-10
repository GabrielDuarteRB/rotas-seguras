import { Inject, Injectable } from '@nestjs/common';
import { CreateRotaDto } from './dto/create-rota.dto';
import { UpdateRotaDto } from './dto/update-rota.dto';
import { RotaRepository } from './rota.repository';

@Injectable()
export class RotaService {
  constructor(private readonly rotaRepository: RotaRepository) {}

  create(createRotaDto: CreateRotaDto) {
    return 'This action adds a new rota';
  }

  findAll() {
    return this.rotaRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} rota`;
  }

  update(id: number, updateRotaDto: UpdateRotaDto) {
    return `This action updates a #${id} rota`;
  }

  remove(id: number) {
    return `This action removes a #${id} rota`;
  }
}
