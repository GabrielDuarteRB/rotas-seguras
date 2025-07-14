import {
  IsNotEmpty,
  IsNumber,
  IsDate,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePolicialViaturaDto {
  @ApiProperty({
    description: 'id da viatura'
  })
  @IsNotEmpty({ message: 'O id da viatura é obrigatório' })
  @IsNumber({}, { message: 'O id da viatura deve ser um número válido' })
  id_viatura: number;

  @ApiProperty({
    description: 'Matricula do policial'
  })
  @IsNotEmpty({ message: 'A matrícula do policial é obrigatória' })
  @IsNumber({}, { message: 'A matrícula do policial deve ser um número válido' })
  matricula_policial: number;

  @ApiProperty({
    description: 'Id da policial viatura'
  })
  @IsNotEmpty({ message: 'A data de ativação é obrigatória' })
  @Type(() => Date)
  @IsDate({ message: 'A data de ativação deve ser uma data válida' })
  ativado_em: Date;

  @ApiPropertyOptional({
    description: 'Data de finalização do relatorio',
  })
  @IsOptional()
  @Type(() => Date)
  @IsDate({ message: 'A data de devolução deve ser uma data válida' })
  devolvido_em?: Date;
}