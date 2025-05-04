import { Injectable } from '@nestjs/common';
import { CreateViaturaDto } from './dto/create-viatura.dto';
import { UpdateViaturaDto } from './dto/update-viatura.dto';

@Injectable()
export class ViaturaService {
  create(createViaturaDto: CreateViaturaDto) {
    return 'This action adds a new viatura';
  }

  findAll() {
    return `This action returns all viatura`;
  }

  findOne(id: number) {
    return `This action returns a #${id} viatura`;
  }

  update(id: number, updateViaturaDto: UpdateViaturaDto) {
    return `This action updates a #${id} viatura`;
  }

  remove(id: number) {
    return `This action removes a #${id} viatura`;
  }
}
