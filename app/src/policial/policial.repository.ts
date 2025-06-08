import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PolicialViatura } from './entities/policial-viatura.entity';
import { UpdatePolicialViaturaDto } from './dto/update-policial-viatura.dto';
import { Policial } from './entities/policial.entity';
import { UpdatePolicialDto } from './dto/update-policial.dto';
import { PostoPolicial } from './entities/posto-policial.entity';
import { UpdatePostoPolicialDto } from './dto/update-posto-policial.dto';


@Injectable()
export class PolicialRepository {
  constructor(
    @InjectModel(PolicialViatura)
    private readonly policialViaturaModel: typeof PolicialViatura,

    @InjectModel(Policial)
    private readonly policialModel: typeof Policial,

    @InjectModel(PostoPolicial)
    private readonly postoPolicialModel: typeof PostoPolicial,
  ) {}


  async findAllPolicialViatura(): Promise<PolicialViatura[]> {
    return this.policialViaturaModel.findAll();
  }

  async createPolicialViatura(createPolicialViaturaDto: any): Promise<PolicialViatura> {
    return await this.policialViaturaModel.create(createPolicialViaturaDto);
  }

  async findByIdPolicialViatura(id: number): Promise<PolicialViatura | null> {
    return await this.policialViaturaModel.findByPk(id, {
      include: [{
        association: 'rotas',
        required: false,
        order: [['iniciada_em', 'DESC']]
      }],
    });
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


  async findAllPolicial(): Promise<Policial[]> {
    return this.policialModel.findAll();
  }

  async createPolicial(createPolicialDto: any): Promise<Policial> {
    return await this.policialModel.create(createPolicialDto);
  }

  async findByIdPolicial(id: number): Promise<Policial | null> {
    return await this.policialModel.findByPk(id);
  }

  async updatePolicial(id: number, updatePolicialDto: UpdatePolicialDto): Promise<[number, Policial[]]> {
    return await this.policialModel.update(updatePolicialDto, {
      where: { matricula: id },
      returning: true,
    });
  }

  async removePolicial(id: number): Promise<number> {
    return await this.policialModel.destroy({
      where: { matricula: id } });
  }


  async findAllPostoPolicial(): Promise<PostoPolicial[]> {
    return this.postoPolicialModel.findAll();
  }

  async createPostoPolicial(createPostoPolicialDto: any): Promise<PostoPolicial> {
    return await this.postoPolicialModel.create(createPostoPolicialDto);
  }

  async findByIdPostoPolicial(id: number): Promise<PostoPolicial | null> {
    return await this.postoPolicialModel.findByPk(id);
  }

  async updatePostoPolicial(id: number, updatePostoPolicialDto: UpdatePostoPolicialDto): Promise<[number, PostoPolicial[]]> {
    return await this.postoPolicialModel.update(updatePostoPolicialDto, {
      where: { id },
      returning: true,
    });
  }

  async removePostoPolicial(id: number): Promise<number> {
    return await this.postoPolicialModel.destroy({ where: { id } });
  }

  async getPoliciaisAtivos(): Promise<Policial[]> {
    return this.policialModel.findAll({ where: { ativo: true } });
  }

  async getPoliciaisByFkPosto(idPosto: number): Promise<Policial[]> {
    return this.policialModel.findAll({ where: { posto: idPosto } });
  }
}