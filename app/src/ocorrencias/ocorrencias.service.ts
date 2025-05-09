import { Injectable, Inject  } from '@nestjs/common';
import { CreateOcorrenciaDto } from './dto/create-ocorrencia.dto';
import { UpdateOcorrenciaDto } from './dto/update-ocorrencia.dto';
import { Ocorrencia } from './entities/ocorrencia.entity';

@Injectable()
export class OcorrenciasService {
  constructor(
    @Inject('OCORRENCIA_REPOSITORY')
    private readonly ocorrenciaRepository: typeof Ocorrencia,
  ) {}

  create(createOcorrenciaDto: CreateOcorrenciaDto) {
    return 'This action adds a new ocorrencia';
  }

  findAll() {
    return this.ocorrenciaRepository.findAll<Ocorrencia>();
  }

  findOne(id: number) {
    return `This action returns a #${id} ocorrencia`;
  }

  update(id: number, updateOcorrenciaDto: UpdateOcorrenciaDto) {
    return `This action updates a #${id} ocorrencia`;
  }

  remove(id: number) {
    return `This action removes a #${id} ocorrencia`;
  }
}
