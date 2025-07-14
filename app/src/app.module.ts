import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { PolicialModule } from './policial/policial.module';
import { ViaturaModule } from './viatura/viatura.module';
import { RotaModule } from './rota/rota.module';
import { OcorrenciasModule } from './ocorrencias/ocorrencias.module';
import { RelatorioModule } from './relatorio/relatorio.module';
import { StatusViaturaModule } from './status_viatura/status_viatura.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        dialect: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        autoLoadModels: true,
      }),
    }),
    PolicialModule,
    ViaturaModule,
    RotaModule,
    OcorrenciasModule,
    RelatorioModule,
    StatusViaturaModule,
  ],
})
export class AppModule {}
