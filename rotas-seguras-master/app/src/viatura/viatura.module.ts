import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Viatura } from './entities/viatura.entity';
import { StatusViatura } from '../status_viatura/entities/status_viatura.entity';

import { ViaturaService } from './viatura.service';
import { ViaturaController } from './viatura.controller';
import { ViaturaRepository } from './viatura.repository';

@Module({
  imports: [SequelizeModule.forFeature([Viatura, StatusViatura])],
  controllers: [ViaturaController],
  providers: [ViaturaService, ViaturaRepository],
  exports: [ViaturaService], 
})
export class ViaturaModule {}
