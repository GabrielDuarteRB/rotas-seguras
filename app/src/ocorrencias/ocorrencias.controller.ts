import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OcorrenciasService } from './ocorrencias.service';
import { CreateOcorrenciaDto } from './dto/create-ocorrencia.dto';
import { UpdateOcorrenciaDto } from './dto/update-ocorrencia.dto';

@Controller('ocorrencias')
export class OcorrenciasController {
  constructor(private readonly ocorrenciasService: OcorrenciasService) {}

  @Post()
  create(@Body() createOcorrenciaDto: CreateOcorrenciaDto) {
    return this.ocorrenciasService.create(createOcorrenciaDto);
  }

  @Get()
  findAll() {
    return this.ocorrenciasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ocorrenciasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOcorrenciaDto: UpdateOcorrenciaDto) {
    return this.ocorrenciasService.update(+id, updateOcorrenciaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ocorrenciasService.remove(+id);
  }
}
