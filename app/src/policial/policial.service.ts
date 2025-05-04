import { Injectable } from '@nestjs/common';
import { CreatePolicialDto } from './dto/create-policial.dto';
import { UpdatePolicialDto } from './dto/update-policial.dto';

@Injectable()
export class PolicialService {
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
}
