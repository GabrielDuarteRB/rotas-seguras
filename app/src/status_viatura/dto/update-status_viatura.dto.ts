import { PartialType } from '@nestjs/mapped-types';
import { CreateStatusDto } from './create-status_viatura.dto';

export class UpdateStatusDto extends PartialType(CreateStatusDto) {}
