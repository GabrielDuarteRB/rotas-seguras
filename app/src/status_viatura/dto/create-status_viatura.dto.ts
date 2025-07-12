import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, IsDateString, IsDate } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateStatusDto {
  @ApiProperty({
    description: 'Descrição do status'
  })
  @IsString()
  @IsNotEmpty()
  descricao: string;
}
