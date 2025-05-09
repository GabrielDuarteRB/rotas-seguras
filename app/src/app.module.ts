import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PolicialModule } from './policial/policial.module';
import { ViaturaModule } from './viatura/viatura.module';
import { OcorrenciasModule } from './ocorrencias/ocorrencias.module';
import { databaseProviders } from './app.database.providers';

@Module({
  imports: [OcorrenciasModule],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule  {}

