import { Module } from '@nestjs/common';
import { RotaService } from './rota.service';
import { RotaController } from './rota.controller';
import { RotaRepository } from './rota.repository';
import { SequelizeModule } from '@nestjs/sequelize';
import { Rota } from './entities/rota.entity';

@Module({
  imports : [SequelizeModule.forFeature([Rota])],
  controllers: [RotaController],
  providers: [RotaService, RotaRepository],
})
export class RotaModule {}
