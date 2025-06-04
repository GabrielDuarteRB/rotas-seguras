import { IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class GetMaisProximoDto {
  @ApiProperty({ description: 'Latitude do usuário' })
  @Type(() => Number)
  @IsNumber()
  latitude: number;

  @ApiProperty({ description: 'Longitude do usuário' })
  @Type(() => Number)
  @IsNumber()
  longitude: number;
}