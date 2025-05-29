import { Module } from '@nestjs/common';
import { RotaService } from './rota.service';
import { RotaController } from './rota.controller';
import { RotaRepository } from './rota.repository';
import { SequelizeModule } from '@nestjs/sequelize';
import { Rota } from './entities/rota.entity';
import { PolicialViatura } from '../policial/entities/policial-viatura.entity';

@Module({
  imports : [
    SequelizeModule.forFeature([Rota, PolicialViatura])
  ],
  controllers: [RotaController],
  providers: [RotaService, RotaRepository],
})
export class RotaModule {}
