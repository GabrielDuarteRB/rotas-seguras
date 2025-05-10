import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Rota } from './entities/rota.entity';

@Injectable()
export class RotaRepository {
  constructor(
    @InjectModel(Rota)
    private readonly rotaModel: typeof Rota,
  ) {}

  async findAll() {
    return this.rotaModel.findAll();
  }
}
