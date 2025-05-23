import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateViaturaDto } from './dto/create-viatura.dto';
import { UpdateViaturaDto } from './dto/update-viatura.dto';
import { ChangeStatusDto } from './dto/change-status.dto';
import { ViaturaRepository } from './viatura.repository';

@Injectable()
export class ViaturaService {
  constructor(private readonly repo: ViaturaRepository) {}

  create(dto: CreateViaturaDto) {
    return this.repo.create(dto);
  }

  findAll() {
    return this.repo.findAll();
  }

  async findOne(id: number) {
    const viatura = await this.repo.findById(id);
    if (!viatura) throw new NotFoundException('Viatura não encontrada');
    return viatura;
  }

  update(id: number, dto: UpdateViaturaDto) {
    return this.repo.update(id, dto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }

  findByStatus(id_status: number) {
    return this.repo.findByStatus(id_status);
  }

  changeStatus(id: number, dto: ChangeStatusDto) {
    return this.repo.changeStatus(id, dto.id_status_viatura);
  }

  searchByPlaca(placa: string) {
    return this.repo.findByPlaca(placa);
  }

  countByStatus() {
    return this.repo.countByStatus();
  }
}
