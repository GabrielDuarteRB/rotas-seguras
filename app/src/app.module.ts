import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PolicialModule } from './policial/policial.module';
import { ViaturaModule } from './viatura/viatura.module';
import { RotaModule } from './rota/rota.module';
import { OcorrenciasModule } from './ocorrencias/ocorrencias.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 15432,   
      username: 'root',
      password: 'password',
      database: 'policial',
      autoLoadModels: true
    }),
    PolicialModule,
    ViaturaModule,
    RotaModule,
    OcorrenciasModule
  ],
})
export class AppModule  {}

