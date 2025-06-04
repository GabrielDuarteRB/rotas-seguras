import { IsString, IsInt, IsNotEmpty } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateViaturaDto {
  @ApiProperty({
      description: 'Placa'
  })
  @IsString()
  @IsNotEmpty()
  placa: string;

  @ApiProperty({
      description: 'modelo'
  })
  @IsString()
  @IsNotEmpty()
  modelo: string;
  
  @ApiProperty({
      description: 'ano'
  })
  @IsInt()
  ano: number;


  @ApiProperty({
      description: 'id status viatura'
  })
  @IsInt()
  id_status_viatura: number;
}


