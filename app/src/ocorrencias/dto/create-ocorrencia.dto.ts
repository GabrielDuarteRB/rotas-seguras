import { IsDateString, IsLatitude, IsLongitude, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateOcorrenciaDto {
  
  @IsNotEmpty({ message: 'O id da pessoa é obrigatório' })
  @IsNumber({}, { message: 'O id da pessoa deve ser um número válido' })
  id_pessoa: number;

  @IsNotEmpty({ message: 'O status da ocorrência é obrigatório' })
  @IsNumber({}, { message: 'O status da ocorrência deve ser um número válido' })
  id_status_ocorrencia: number;

  @IsNotEmpty({ message: 'O tipo da ocorrência é obrigatório' })
  @IsNumber({}, { message: 'O tipo da ocorrência deve ser um número válido' })
  id_tipo_ocorrencia: number;

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
