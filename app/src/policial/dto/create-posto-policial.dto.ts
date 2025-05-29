import {
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreatePostoPolicialDto {
  @IsNotEmpty({ message: 'A descrição é obrigatória' })
  @IsString({ message: 'A descrição deve ser um texto válida' })
  posto: string;
}
