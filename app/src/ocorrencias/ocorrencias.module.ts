import { Module } from '@nestjs/common';
import { DatabaseModule } from '../app.module';
import { OcorrenciasService } from './ocorrencias.service';
import { OcorrenciasController } from './ocorrencias.controller';
import { ocorrenciasProviders } from './ocorrencias.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [OcorrenciasController],
  providers: [OcorrenciasService,
    ...ocorrenciasProviders
  ],
})
export class OcorrenciasModule {}
