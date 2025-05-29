import {
  IsNotEmpty,
  IsNumber,
  IsBoolean,
} from 'class-validator';

export class CreatePolicialDto {
  @IsNotEmpty({ message: 'O id da pessoa é obrigatório' })
  @IsNumber({}, { message: 'O id da pessoa deve ser um número válido' })
  id_pessoa: number;

  @IsNotEmpty({ message: 'O posto é obrigatório' })
  @IsNumber({}, { message: 'O posto deve ser um número válido' })
  posto: number;

  @IsNotEmpty({ message: 'O status ativo é obrigatório' })
  @IsBoolean({ message: 'O campo ativo deve ser verdadeiro ou falso' })
  ativo: boolean;
}
