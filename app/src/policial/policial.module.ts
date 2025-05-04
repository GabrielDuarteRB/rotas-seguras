import { Module } from '@nestjs/common';
import { PolicialService } from './policial.service';
import { PolicialController } from './policial.controller';

@Module({
  controllers: [PolicialController],
  providers: [PolicialService],
})
export class PolicialModule {}
