import { Injectable, NotFoundException } from '@nestjs/common';
import { StatusViaturaRepository } from './status_viatura.repository';
import { CreateStatusDto } from './dto/create-status_viatura.dto';
import { UpdateStatusDto } from './dto/update-status_viatura.dto';

@Injectable()
export class StatusViaturaService {
  constructor(private readonly repo: StatusViaturaRepository) {}

  create(dto: CreateStatusDto) {
    return this.repo.create(dto);
  }

  findAll() {
    return this.repo.findAll();
  }

  async findOne(id: number) {
    const status = await this.repo.findById(id);
    if (!status) throw new NotFoundException('Status não encontrado');
    return status;
  }

  update(id: number, dto: UpdateStatusDto) {
    return this.repo.update(id, dto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}

