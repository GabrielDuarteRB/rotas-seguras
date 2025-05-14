import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePolicialDto } from './dto/create-policial.dto';
import { UpdatePolicialDto } from './dto/update-policial.dto';
import { CreatePolicialViaturaDto } from './dto/create-policial-viatura.dto';
import { UpdatePolicialViaturaDto } from './dto/update-policial-viatura.dto';
import { PolicialRepository } from './policial.repository';

@Injectable()
export class PolicialService {
  constructor(private readonly policialRepository: PolicialRepository) {}

  create(createPolicialDto: CreatePolicialDto) {
    return 'This action adds a new policial';
  }

  findAll() {
    return `This action returns all policial`;
  }

  findOne(id: number) {
    return `This action returns a #${id} policial`;
  }

  update(id: number, updatePolicialDto: UpdatePolicialDto) {
    return `This action updates a #${id} policial`;
  }

  remove(id: number) {
    return `This action removes a #${id} policial`;
  }

  findAllPolicialViatura() {
    return this.policialRepository.findAllPolicialViatura();
  }

  createPolicialViatura(createPolicialViaturaDto: CreatePolicialViaturaDto) {
    return this.policialRepository.createPolicialViatura(createPolicialViaturaDto);
  }

  async findByIdPolicialViatura(id: number) {
    const policialViatura = await this.policialRepository.findByIdPolicialViatura(id);

    if (!policialViatura) {
      throw new NotFoundException(`Policial Viatura com id ${id} não encontrada`);
    }

    return policialViatura;
  }

  async updatePolicialViatura(id: number, updatePolicialViaturaDto: UpdatePolicialViaturaDto) {
    const [linhasAfetadas, policialViatura] = await this.policialRepository.updatePolicialViatura(id, updatePolicialViaturaDto);

    if (linhasAfetadas === 0) {
      throw new NotFoundException(`Policial Viatura com id ${id} não encontrada`);
    }

    return policialViatura[0];
  }

  async removePolicialViatura(id: number) {
    const deletado =  await this.policialRepository.removePolicialViatura(id);

    if (!deletado) {
      throw new NotFoundException(`Policia Viatura com id ${id} não encontrada`);
    }

    return deletado;
  }
}
