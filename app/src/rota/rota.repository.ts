import { literal } from 'sequelize';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Rota } from './entities/rota.entity';
import { PolicialViatura } from '../policial/entities/policial-viatura.entity';
import { Policial } from '../policial/entities/policial.entity';
import { UpdateRotaDto } from './dto/update-rota.dto';
import { ReplaceRotaDto } from './dto/replace-rota.dto';
import { GetMaisProximoDto } from './dto/get-mais-proximo.dto';
@Injectable()
export class RotaRepository {
  constructor(
    @InjectModel(Rota)
    private readonly rotaModel: typeof Rota,
  ) {}

  async findAll(filtros) {
    return this.rotaModel.findAll(filtros);
  }

  async findById(id: number) {
    return this.rotaModel.findByPk(id, {
      include: [{ association: 'policial_viatura' }],
    });
  }

  async buscarViaturaMaisProxima(localizacaoDto: GetMaisProximoDto) {
    const { latitude, longitude } = localizacaoDto;

    return this.rotaModel.findAll({
      include: [
        {
          model: PolicialViatura,
          as: 'policial_viatura',
          where: {
            devolvido_em: null
          },
          include: [
            {
              model: Policial,
              as: 'policial'
            }
          ]
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
