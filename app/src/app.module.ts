import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PolicialModule } from './policial/policial.module';
import { ViaturaModule } from './viatura/viatura.module';
import { RotaModule } from './rota/rota.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'db-policial',
      port: 5432,   
      username: 'root',
      password: 'password',
      database: 'policial',
      autoLoadModels: true
    }),
    PolicialModule,
    ViaturaModule,
    RotaModule,
  ],
})
export class AppModule  {}

