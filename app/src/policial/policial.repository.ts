import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PolicialViatura } from './entities/policial-viatura.entity';
import { UpdatePolicialViaturaDto } from './dto/update-policial-viatura.dto';

@Injectable()
export class PolicialRepository {
  constructor(
    @InjectModel(PolicialViatura)
    private readonly policialViaturaModel: typeof PolicialViatura,
  ) {}


  async findAllPolicialViatura(): Promise<PolicialViatura[]> {
    return this.policialViaturaModel.findAll();
  }

  async createPolicialViatura(createPolicialViaturaDto: any): Promise<PolicialViatura> {
    return await this.policialViaturaModel.create(createPolicialViaturaDto);
  }

  async findByIdPolicialViatura(id: number): Promise<PolicialViatura | null> {
    return await this.policialViaturaModel.findByPk(id);
  }

  async updatePolicialViatura(
    id: number,
    updatePolicialViaturaDto: UpdatePolicialViaturaDto
  ): Promise<[number, PolicialViatura[]]> {

    return await this.policialViaturaModel.update(updatePolicialViaturaDto, {
      where: { id_policial_viatura: id },
      returning: true,
    });
  }

  async removePolicialViatura(id: number): Promise<number> {
    return await this.policialViaturaModel.destroy({
      where: { id_policial_viatura: id },
    });
  }
}