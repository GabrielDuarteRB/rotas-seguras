import { IsDateString, IsEnum, IsLatitude, IsLongitude, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { StatusOcorrencia, TipoOcorrencia } from '../enums/ocorrencia.enum';

export class CreateOcorrenciaDto {
  
  @IsNotEmpty({ message: 'O id da pessoa é obrigatório' })
  @IsNumber({}, { message: 'O id da pessoa deve ser um número válido' })
  id_pessoa: number;

  @IsNotEmpty({ message: 'O status da ocorrência é obrigatório' })
  @IsEnum(StatusOcorrencia, { message: 'Status de ocorrência inválido' })
  id_status_ocorrencia: StatusOcorrencia;

  @IsNotEmpty({ message: 'O tipo da ocorrência é obrigatório' })
  @IsEnum(TipoOcorrencia, { message: 'Tipo de ocorrência inválido' })
  id_tipo_ocorrencia: TipoOcorrencia;

  @IsNotEmpty({ message: 'A latitude é obrigatória' })
  @IsLatitude({ message: 'Latitude inválida' })
  latitude: number;

  @IsNotEmpty({ message: 'A longitude é obrigatória' })
  @IsLongitude({ message: 'Longitude inválida' })
  longitude: number;
  
  @IsNotEmpty({ message: 'A descrição é obrigatória' })
  @IsString({ message: 'A descrição deve ser um texto válido' })
  descricao: string;

  @IsOptional()
  @IsDateString({}, { message: 'Data de criação inválida' })
  criada_em?: Date;

  @IsOptional()
  @IsDateString({}, { message: 'Data de finalização inválida' })
  finalizado_em?: Date;
}
