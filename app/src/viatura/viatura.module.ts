import { Module } from '@nestjs/common';
import { ViaturaService } from './viatura.service';
import { ViaturaController } from './viatura.controller';

@Module({
  controllers: [ViaturaController],
  providers: [ViaturaService],
})
export class ViaturaModule {}
