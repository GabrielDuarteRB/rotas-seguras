import { literal } from 'sequelize';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Rota } from './entities/rota.entity';
import { UpdateRotaDto } from './dto/update-rota.dto';
import { ReplaceRotaDto } from './dto/replace-rota.dto';
import { GetMaisProximoDto } from './dto/get-mais-proximo.dto';
import { PolicialViatura } from '../policial/entities/policial-viatura.entity';

@Injectable()
export class RotaRepository {
  constructor(
    @InjectModel(Rota)
    private readonly rotaModel: typeof Rota,
  ) {}

  async findAll() {
    return this.rotaModel.findAll();
  }

  async findById(id: number) {
    return this.rotaModel.findByPk(id);
  }

  async buscarViaturaMaisProxima(localizacaoDto: GetMaisProximoDto) {
    const { latitude, longitude } = localizacaoDto;

    return this.rotaModel.findOne({
      include: [
        {
          model: PolicialViatura,
          as: 'policial_viatura',
        }
      ],
      where: {
        finalizada_em: null
      },
      order: [
        [
          literal(`
              SQRT(
                POWER(latitude - ${latitude}, 2) + POWER(longitude - ${longitude}, 2)
              )
          `),
          'ASC'
        ]
      ],
    })
  }

  async create(createRotaDto: any) {
    return this.rotaModel.create(createRotaDto);
  }

  async update(id: number, updateRotaDto: UpdateRotaDto | ReplaceRotaDto) {
    return await this.rotaModel.update(updateRotaDto, {
      where: { id_rota: id },
      returning: true,
    });
  }

  async remove(id: number) {
    return this.rotaModel.destroy({
      where: { id_rota: id },
    });
  }
}
