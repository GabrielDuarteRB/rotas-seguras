import {
  Controller, Get, Post, Body, Patch, Param, Delete, UseGuards
} from '@nestjs/common';
import { StatusViaturaService } from './status_viatura.service';
import { CreateStatusDto } from './dto/create-status_viatura.dto';
import { UpdateStatusDto } from './dto/update-status_viatura.dto';
import { JwtValidationGuard } from '../auth/jwt-validation.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth('JWT-auth')
@UseGuards(JwtValidationGuard)
@Controller('status-viatura')
export class StatusViaturaController {
  constructor(private readonly service: StatusViaturaService) {}

  @Post()
  create(@Body() dto: CreateStatusDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() dto: UpdateStatusDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
