import {
  IsNotEmpty,
  IsNumber,
  IsDate,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReplacePolicialViaturaDto {
  @IsNotEmpty({ message: 'O id da viatura é obrigatório' })
  @IsNumber({}, { message: 'O id da viatura deve ser um número válido' })
  id_viatura: number;

  @IsNotEmpty({ message: 'A matrícula do policial é obrigatória' })
  @IsNumber({}, { message: 'A matrícula do policial deve ser um número válido' })
  matricula_policial: number;

  @IsNotEmpty({ message: 'A data de ativação é obrigatória' })
  @Type(() => Date)
  @IsDate({ message: 'A data de ativação deve ser uma data válida' })
  ativado_em: Date;

  @IsOptional()
  @Type(() => Date)
  @IsDate({ message: 'A data de devolução deve ser uma data válida' })
  devolvido_em?: Date;
}
