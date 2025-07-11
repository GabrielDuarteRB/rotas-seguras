import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsDate,
  Min,
  Max,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateRotaDto {
  @ApiProperty({
    description: 'Id da policial viatura'
  })
  @IsNotEmpty({ message: 'O id da policial viatura é obrigatoria' })
  @IsNumber({}, { message: 'O id do policial viatura deve ser um numero valido' })
  id_policial_viatura: number;

  @ApiProperty({
    description: 'Longitude'
  })
  @IsNotEmpty({ message: 'A longitude de inicio é obrigatoria' })
  @IsNumber({}, { message: 'A longitude deve ser um numero valido' })
  @Min(-180, { message: 'A longitude mínima é -180' })
  @Max(180, { message: 'A longitude máxima é 180' })
  longitude: number;

  @ApiProperty({
    description: 'Latitude'
  })
  @IsNotEmpty({ message: 'A latitude de inicio é obrigatoria' })
  @IsNumber({}, { message: 'A latitude deve ser um numero valido' })
  @Min(-90, { message: 'A latitude mínima é -90' })
  @Max(90, { message: 'A latitude máxima é 90' })
  latitude: number;

  @ApiProperty({
    description: 'data de inicio do rota',
  })
  @IsNotEmpty({ message: 'A data de inicio é obrigatoria' })
  @Type(() => Date)
  @IsDate({ message: 'A data de inicio deve ser uma data válido' })
  iniciada_em: Date;

  @ApiPropertyOptional({
    description: 'Data de finalização da rota'
  })
  @IsOptional()
  @Type(() => Date)
  @IsDate({ message: 'A data de finalização deve ser uma data válido' })
  finalizada_em?: Date;
}