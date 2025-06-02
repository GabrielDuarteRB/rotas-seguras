import { IsString, IsInt, IsNotEmpty } from 'class-validator';

export class CreateViaturaDto {
  @IsString()
  @IsNotEmpty()
  placa: string;

  @IsString()
  @IsNotEmpty()
  modelo: string;

  @IsInt()
  ano: number;

  @IsInt()
  id_status_viatura: number;
}


