import { Controller, Get, Post, Body, Patch, Param, Query, Delete, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { RelatorioService } from './relatorio.service';
import { CreateRelatorioOcorrenciaDto } from './dto/create-relatorio-ocorrencia.dto';
import { UpdateRelatorioOcorrenciaDto } from './dto/update-relatorio-ocorrencia.dto';
import { ReplaceRelatorioOcorrenciaDto } from './dto/replace-relatorio-ocorrencia.dto';
import { BuscarRelatorioOcorrenciaDto } from './dto/buscar-relatorio-ocorrencia.dto';
import { JwtValidationGuard } from '../auth/jwt-validation.guard';

@Controller('relatorio-ocorrencia')
@ApiBearerAuth('JWT-auth')
@UseGuards(JwtValidationGuard)
export class RelatorioOcorrenciaController {
  constructor(private readonly relatorioService: RelatorioService) {}

  @Post()
  create(@Body() createRelatorioDto: CreateRelatorioOcorrenciaDto) {
    return this.relatorioService.createRelatorioOcorrencia(createRelatorioDto);
  }

  @Get()
  findAll(@Query() filtros: BuscarRelatorioOcorrenciaDto) {
    try {
      return this.relatorioService.findAllRelatorioOcorrencia(filtros);
    } catch (error) {
      throw error;
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.relatorioService.findOneRelatorioOcorrencia(+id);
    } catch (error) {
      throw error;
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRelatorioOcorrenciaDto: UpdateRelatorioOcorrenciaDto) {
    try {
      return this.relatorioService.updateRelatorioOcorrencia(+id, updateRelatorioOcorrenciaDto);
    } catch (error) {
      throw error;
    }
  }

  @Put(':id')
  updateFull(@Param('id') id: string, @Body() updateRelatorioOcorrenciaDto: ReplaceRelatorioOcorrenciaDto) {
    try {
      return this.relatorioService.updateRelatorioOcorrencia(+id, updateRelatorioOcorrenciaDto);
    } catch (error) {
      throw error;
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return this.relatorioService.remove(+id);
    } catch (error) {
      throw error;
    }
  }
}
