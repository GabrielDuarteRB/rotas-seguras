import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsDate,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateRotaDto {
  @IsNotEmpty({ message: 'O id da policial viatura é obrigatoria' })
  @IsNumber({}, { message: 'O id do policial viatura deve ser um numero valido' })
  id_policial_viatura: number;

  @IsNotEmpty({ message: 'A longitude de inicio é obrigatoria' })
  @IsNumber({}, { message: 'A longitude deve ser um numero valido' })
  longitude: number;

  @IsNotEmpty({ message: 'A latitude de inicio é obrigatoria' })
  @IsNumber({}, { message: 'A latitude deve ser um numero valido' })
  latitude: number;

  @IsNotEmpty({ message: 'A data de inicio é obrigatoria' })
  @Type(() => Date)
  @IsDate({ message: 'A data de inicio deve ser uma data válido' })
  iniciada_em: Date;

  @IsOptional()
  @Type(() => Date)
  @IsDate({ message: 'A data de finalização deve ser uma data válido' })
  finalizada_em?: Date;
}