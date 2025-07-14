import {
  IsOptional,
  IsNumber,
  IsDate,
  IsBoolean,
  Min,
  Max,
} from 'class-validator';
import { Type, Transform } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class BuscarTodasRotasDto {
  @ApiPropertyOptional({ description: 'Id da policial viatura' })
  @IsOptional()
  @Type(() => Number)
  @IsNumber({}, { message: 'O id do policial viatura deve ser um número válido' })
  id_policial_viatura?: number;

  @ApiPropertyOptional({ description: 'Latitude' })
  @IsOptional()
  @Type(() => Number)
  @IsNumber({}, { message: 'A latitude deve ser um número válido' })
  @Min(-90)
  @Max(90)
  latitude?: number;

  @ApiPropertyOptional({ description: 'Longitude' })
  @IsOptional()
  @Type(() => Number)
  @IsNumber({}, { message: 'A longitude deve ser um número válido' })
  @Min(-180)
  @Max(180)
  longitude?: number;

  @ApiPropertyOptional({ description: 'Data mínima da rota iniciada' })
  @IsOptional()
  @Type(() => Date)
  @IsDate({ message: 'A data deve ser válida' })
  iniciada_em_inicio?: Date;

  @ApiPropertyOptional({ description: 'Data máxima da rota iniciada' })
  @IsOptional()
  @Type(() => Date)
  @IsDate({ message: 'A data deve ser válida' })
  iniciada_em_fim?: Date;
}
