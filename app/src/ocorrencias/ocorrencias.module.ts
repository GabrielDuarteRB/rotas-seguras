import { Module } from '@nestjs/common';
import { OcorrenciasService } from './ocorrencias.service';
import { OcorrenciasController } from './ocorrencias.controller';
import { Ocorrencia } from './entities/ocorrencia.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { OcorrenciaRepository } from './ocorrencias.repository';

@Module({
  imports: [SequelizeModule.forFeature([Ocorrencia])],
  controllers: [OcorrenciasController],
  providers: [OcorrenciasService, OcorrenciaRepository],
})
export class OcorrenciasModule {}
