import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { StatusViatura } from './entities/status_viatura.entity';
import { StatusViaturaService } from './status_viatura.service';
import { StatusViaturaController } from './status_viatura.controller';
import { StatusViaturaRepository } from './status_viatura.repository';

@Module({
  imports: [SequelizeModule.forFeature([StatusViatura])],
  controllers: [StatusViaturaController],
  providers: [StatusViaturaService, StatusViaturaRepository],
  exports: [StatusViaturaService],
})
export class StatusViaturaModule {}
