import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { RelatorioService } from './relatorio.service';
import { RelatorioOcorrenciaController } from './relatorio-ocorrencia.controller';
import { RelatorioOcorrencia } from './entities/relatorio-ocorrencia.entity';
import { RelatorioRepository } from './relatorio.repository';

@Module({
  imports: [SequelizeModule.forFeature([RelatorioOcorrencia])],
  controllers: [RelatorioOcorrenciaController],
  providers: [RelatorioService, RelatorioRepository],
})
export class RelatorioModule {}
