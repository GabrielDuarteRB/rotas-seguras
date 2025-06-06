import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsDate, IsBoolean } from 'class-validator';
import { Type, Transform } from 'class-transformer';

export class BuscarRelatorioOcorrenciaDto {
  @ApiPropertyOptional({ description: 'id da ocorrência' })
  @IsOptional()
  @IsString()
  id_ocorrencia?: string;

  @ApiPropertyOptional({ description: 'Data inicial' })
  @IsOptional()
  @Type(() => Date)
  @IsDate()
  iniciada_em?: Date;

  @ApiPropertyOptional({ description: 'Data que foi finalizada' })
  @IsOptional()
  @Type(() => Date)
  @IsDate()
  finalizada_em?: Date;

  @ApiPropertyOptional({ description: 'Se a ocorrência está finalizada' })
  @Transform(({ value }) => {
    if (value === 'true') return true;
    if (value === 'false') return false;
    return value;
  })
  @IsOptional()
  @IsBoolean({ message: 'O campo finalizada deve ser booleano' })
  finalizada?: boolean;
}
