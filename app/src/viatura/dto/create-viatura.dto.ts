import { IsNotEmpty, IsString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateViaturaDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  placa: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  modelo: string;

  @ApiProperty()
  @IsInt()
  ano: number;

  @ApiProperty()
  @IsInt()
  id_status_viatura: number;
}
