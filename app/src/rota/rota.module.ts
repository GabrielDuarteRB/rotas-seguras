import { Module } from '@nestjs/common';
import { RotaService } from './rota.service';
import { RotaController } from './rota.controller';
import { RotaRepository } from './rota.repository';

@Module({
  controllers: [RotaController],
  providers: [RotaService, RotaRepository],
  exports: [RotaRepository],
})
export class RotaModule {}
