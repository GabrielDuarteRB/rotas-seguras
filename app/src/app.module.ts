import { Module } from '@nestjs/common';
import { OcorrenciasModule } from './ocorrencias/ocorrencias.module';
import { databaseProviders } from './app.database.providers';

@Module({
  imports: [OcorrenciasModule],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class AppModule  {}

