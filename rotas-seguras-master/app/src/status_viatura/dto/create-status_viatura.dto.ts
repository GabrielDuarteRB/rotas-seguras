import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, IsDateString, IsDate } from 'class-validator';

export class CreateStatusDto {
  @IsString()
  @IsNotEmpty()
  descricao: string;
}


