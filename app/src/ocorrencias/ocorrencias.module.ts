import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { SequelizeModule } from '@nestjs/sequelize';
import { OcorrenciasService } from './ocorrencias.service';
import { OcorrenciasController } from './ocorrencias.controller';
import { Ocorrencia } from './entities/ocorrencia.entity';
import { OcorrenciaRepository } from './ocorrencias.repository';
import { OcorrenciaListener } from './listeners/ocorrencia.listener';
import { UsuarioModule } from '../usuario/usuario.module';
import { RotaModule } from '../rota/rota.module';
import { EmailModule } from '../email/email.module';

@Module({
  imports: [
    SequelizeModule.forFeature([Ocorrencia]),
    EventEmitterModule.forRoot(),
    UsuarioModule,
    RotaModule,
    EmailModule,
  ],
  controllers: [OcorrenciasController],
  providers: [OcorrenciasService, OcorrenciaRepository, OcorrenciaListener],
})
export class OcorrenciasModule {}
