import { Module } from '@nestjs/common';
import { RotaService } from './rota.service';
import { RotaController } from './rota.controller';
import { RotaRepository } from './rota.repository';
import { SequelizeModule } from '@nestjs/sequelize';
import { Rota } from './entities/rota.entity';
import { PolicialViatura } from '../policial/entities/policial-viatura.entity';
import { Policial } from '../policial/entities/policial.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports : [
    SequelizeModule.forFeature([Rota, PolicialViatura, Policial]),
    AuthModule
  ],
  controllers: [RotaController],
  providers: [RotaService, RotaRepository],
  exports: [RotaService]
})
export class RotaModule {}
