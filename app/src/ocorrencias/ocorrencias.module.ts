import { Module } from '@nestjs/common';
import { OcorrenciasService } from './ocorrencias.service';
import { OcorrenciasController } from './ocorrencias.controller';
import { ocorrenciasProviders } from './ocorrencias.providers';

@Module({
  imports: [],
  controllers: [OcorrenciasController],
  providers: [OcorrenciasService,
    ...ocorrenciasProviders
  ],
})
export class OcorrenciasModule {}
