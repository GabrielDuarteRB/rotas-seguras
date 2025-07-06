import { IsOptional, IsInt } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class FindOcorrenciasDto {
  @ApiPropertyOptional({
    description: 'Filtra por ID da pessoa',
    type: Number,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  id_pessoa?: number;
}
