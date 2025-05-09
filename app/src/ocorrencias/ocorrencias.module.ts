import { Module } from '@nestjs/common';
import { AppModule } from '../app.module';
import { OcorrenciasService } from './ocorrencias.service';
import { OcorrenciasController } from './ocorrencias.controller';
import { ocorrenciasProviders } from './ocorrencias.providers';

@Module({
  imports: [AppModule],
  controllers: [OcorrenciasController],
  providers: [OcorrenciasService,
    ...ocorrenciasProviders
  ],
})
export class OcorrenciasModule {}
