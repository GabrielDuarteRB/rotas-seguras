import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PolicialModule } from './policial/policial.module';
import { ViaturaModule } from './viatura/viatura.module';

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
  ],
})
export class AppModule {}
