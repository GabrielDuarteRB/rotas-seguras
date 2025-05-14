import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PolicialViatura } from './entities/policial-viatura.entity';
import { PolicialService } from './policial.service';
import { PolicialController } from './policial.controller';
import { PolicialViaturaController } from './policial-viatura.controller';
import { PolicialRepository } from './policial.repository';

@Module({
  imports : [SequelizeModule.forFeature([PolicialViatura])],
  controllers: [PolicialController, PolicialViaturaController],
  providers: [PolicialService, PolicialRepository],
})
export class PolicialModule {}
