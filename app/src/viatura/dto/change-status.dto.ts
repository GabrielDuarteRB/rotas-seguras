import { IsInt } from 'class-validator';

export class ChangeStatusDto {
  @IsInt()
  id_status_viatura: number;
}
