import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PolicialViatura } from './entities/policial-viatura.entity';
import { Policial } from './entities/policial.entity';
import { PostoPolicial } from './entities/posto-policial.entity';
import { PolicialService } from './policial.service';
import { PolicialController } from './policial.controller';
import { PolicialViaturaController } from './policial-viatura.controller';
import { PostoPolicialController } from './posto-policial.controller';
import { PolicialRepository } from './policial.repository';

@Module({
  imports : [SequelizeModule.forFeature([PolicialViatura]), SequelizeModule.forFeature([Policial]), SequelizeModule.forFeature([PostoPolicial])],
  controllers: [PolicialController, PostoPolicialController, PolicialViaturaController],
  providers: [PolicialService, PolicialRepository],
})
export class PolicialModule {}