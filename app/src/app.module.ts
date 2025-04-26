import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

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
  ],
})
export class AppModule {}
