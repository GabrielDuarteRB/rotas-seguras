import {
  Controller, Get, Post, Body, Patch, Param, Delete, Query
} from '@nestjs/common';
import { ViaturaService } from './viatura.service';
import { CreateViaturaDto } from './dto/create-viatura.dto';
import { UpdateViaturaDto } from './dto/update-viatura.dto';
import { ChangeStatusDto } from './dto/change-status.dto';

@Controller('viatura')
export class ViaturaController {
  constructor(private readonly service: ViaturaService) {}

  @Post()
  create(@Body() dto: CreateViaturaDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get('placa/:placa')
  findByPlaca(@Param('placa') placa: string) {
    return this.service.searchByPlaca(placa);
  }

  @Get('por-status/:id_status')
  findByStatus(@Param('id_status') id_status: number) {
    return this.service.findByStatus(id_status);
  }

  @Get('contar-por-status')
  countByStatus() {
    return this.service.countByStatus();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() dto: UpdateViaturaDto) {
    return this.service.update(id, dto);
  }

  @Patch('mudar-status/:id')
  changeStatus(@Param('id') id: number, @Body() dto: ChangeStatusDto) {
    return this.service.changeStatus(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
