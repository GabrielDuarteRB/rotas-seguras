import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsDate,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateRelatorioOcorrenciaDto {
  @ApiProperty({
    description: 'Id da policial viatura'
  })
  @IsNotEmpty({ message: 'O id da policial viatura é obrigatório' })
  @IsNumber({}, { message: 'O id da policial viatura deve ser um número válido' })
  id_policial_viatura: number;

  @ApiProperty({
    description: 'Id da ocorrencia'
  })
  @IsNotEmpty({ message: 'A ocorrencia é obrigatória' })
  @IsNumber({}, { message: 'A ocorrencia deve ser um número válido' })
  id_ocorrencia: number;

  @ApiProperty({
    description: 'descrição do relatorio'
  })
  @IsNotEmpty({ message: 'A descrição é obrigatória' })
  @IsString({ message: 'A descrição deve ser um texto válida' })
  descricao: string;

  @ApiProperty({
    description: 'Data de inicio do relatorio',
    example: '2023-10-01T00:00:00Z',
  })
  @IsNotEmpty()
  @Type(() => Date)
  @IsDate({ message: 'A data de inicio deve ser uma data válida' })
  iniciada_em: Date;

  @ApiPropertyOptional({
    description: 'Data de finalização do relatorio',
  })
  @IsOptional()
  @Type(() => Date)
  @IsDate({ message: 'A data de finalização deve ser uma data válida' })
  finalizado_em?: Date;
}