import { PartialType } from '@nestjs/mapped-types';
import { CreatePostoPolicialDto } from './create-posto-policial.dto';

export class UpdatePostoPolicialDto extends PartialType(CreatePostoPolicialDto) {}
