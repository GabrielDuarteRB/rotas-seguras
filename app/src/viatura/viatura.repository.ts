import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Viatura } from './entities/viatura.entity';
import { Op } from 'sequelize';
import { CreateViaturaDto } from './dto/create-viatura.dto';
import { CreationAttributes } from 'sequelize';

@Injectable()
export class ViaturaRepository {
  constructor(
    @InjectModel(Viatura)
    private readonly model: typeof Viatura,
  ) {}

  async create(data: CreateViaturaDto): Promise<Viatura> {
    return this.model.create(data as CreationAttributes<Viatura>);
  }

  async findAll(): Promise<Viatura[]> {
  return this.model.findAll({
    include: [{ association: 'status_viatura' }],
  });
}

  async findById(id: number): Promise<Viatura | null> {
    return this.model.findByPk(id, { include: { all: true } });
  }

  async update(id: number, data: Partial<Viatura>): Promise<[number]> {
    return this.model.update(data, { where: { id_viatura: id } });
  }

  async delete(id: number): Promise<number> {
    return this.model.destroy({ where: { id_viatura: id } });
  }

  async findByStatus(id_status_viatura: number): Promise<Viatura[]> {
    return this.model.findAll({
      where: { id_status_viatura },
      include: { all: true },
    });
  }

  async changeStatus(id_viatura: number, id_status_viatura: number): Promise<[number]> {
    return this.model.update(
      { id_status_viatura },
      { where: { id_viatura } }
    );
  }

  async findByPlaca(placa: string): Promise<Viatura[]> {
    return this.model.findAll({
      where: { placa: { [Op.like]: `%${placa}%` } },
    });
  }

  async countByStatus(): Promise<any[]> {
  const sequelize = this.model.sequelize;
  if (!sequelize) throw new Error('Sequelize instance not found in model');

  return this.model.findAll({
    attributes: [
      'id_status_viatura',
      [sequelize.fn('COUNT', sequelize.col('id_viatura')), 'total'],
    ],
    group: ['id_status_viatura'],
  });
}

}

