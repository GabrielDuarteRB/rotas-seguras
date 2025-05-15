import { PartialType } from '@nestjs/swagger';
import { CreateRelatorioOcorrenciaDto } from './create-relatorio-ocorrencia.dto';

export class UpdateRelatorioOcorrenciaDto extends PartialType(CreateRelatorioOcorrenciaDto) {}
