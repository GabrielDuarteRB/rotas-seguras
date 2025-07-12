import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { StatusViatura } from './entities/status_viatura.entity';
import { CreateStatusDto } from './dto/create-status_viatura.dto';
import { CreationAttributes } from 'sequelize';

@Injectable()
export class StatusViaturaRepository {
  constructor(
    @InjectModel(StatusViatura)
    private readonly model: typeof StatusViatura,
  ) {}

  async create(data: Partial<StatusViatura>): Promise<StatusViatura> {
    return this.model.create(data as CreationAttributes<StatusViatura>);
  }

  async findAll(): Promise<StatusViatura[]> {
    return this.model.findAll({ include: { all: true } });
  }

  async findById(id: number): Promise<StatusViatura | null> {
    return this.model.findByPk(id, { include: { all: true } });
  }

  async update(id: number, data: Partial<StatusViatura>): Promise<[number]> {
    return this.model.update(data, { where: { id_status_viatura: id } });
  }

  async delete(id: number): Promise<number> {
    return this.model.destroy({ where: { id_status_viatura: id } });
  }
}
