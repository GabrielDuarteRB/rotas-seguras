import { PartialType } from '@nestjs/mapped-types';
import { CreatePolicialViaturaDto } from './create-policial-viatura.dto';

export class UpdatePolicialViaturaDto extends PartialType(CreatePolicialViaturaDto) {}
