import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { OcorrenciaRepository } from './ocorrencias.repository';
import { OcorrenciasService } from './ocorrencias.service';
import { OcorrenciasController } from './ocorrencias.controller';
import { Ocorrencia } from './entities/ocorrencia.entity';
import { OcorrenciaListener } from './listeners/ocorrencia.listener';
import { RotaModule } from '../rota/rota.module';
import { EmailModule } from '../email/email.module';

@Module({
  imports: [
    SequelizeModule.forFeature([Ocorrencia]),
    RotaModule,
    EmailModule
  ],
  controllers: [OcorrenciasController],
  providers: [OcorrenciasService, OcorrenciaRepository, OcorrenciaListener],
})
export class OcorrenciasModule {}
