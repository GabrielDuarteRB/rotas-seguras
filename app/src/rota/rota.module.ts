import { Module } from '@nestjs/common';
import { RotaService } from './rota.service';
import { RotaController } from './rota.controller';
import { RotaRepository } from './rota.repository';
import { SequelizeModule } from '@nestjs/sequelize';
import { Rota } from './entities/rota.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports : [SequelizeModule.forFeature([Rota]), AuthModule],
  controllers: [RotaController],
  providers: [RotaService, RotaRepository],
})
export class RotaModule {}
