import { PartialType } from '@nestjs/mapped-types';
import { CreatePolicialDto } from './create-policial.dto';

export class UpdatePolicialDto extends PartialType(CreatePolicialDto) {}
