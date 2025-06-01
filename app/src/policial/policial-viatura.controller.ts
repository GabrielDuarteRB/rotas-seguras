import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { PolicialService } from './policial.service';
import { CreatePolicialViaturaDto } from './dto/create-policial-viatura.dto';
import { UpdatePolicialViaturaDto } from './dto/update-policial-viatura.dto';
import { ReplacePolicialViaturaDto } from './dto/replace-policial-viatura.dto';

@Controller('policial-viatura')
export class PolicialViaturaController {
  constructor(private readonly policialService: PolicialService) {}

  @Post()
  create(@Body() createPolicialViaturaDto: CreatePolicialViaturaDto) {
    try {
      return this.policialService.createPolicialViatura(createPolicialViaturaDto);
    } catch (error) {
      throw error;
    }
  }

  @Get()
  findAll() {
    try {
      return this.policialService.findAllPolicialViatura();
    } catch (error) {
      throw error;
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.policialService.findByIdPolicialViatura(+id);
    } catch (error) {
      throw error;
    }
  }

  @Patch(':id')
  updatePartial(@Param('id') id: string, @Body() updatePolicialViaturaDto: UpdatePolicialViaturaDto) {
    try {
      return this.policialService.updatePolicialViatura(+id, updatePolicialViaturaDto);
    } catch (error) {
      throw error;
    }
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() replacePolicialViaturaDto: ReplacePolicialViaturaDto) {
    try {
      return this.policialService.updatePolicialViatura(+id, replacePolicialViaturaDto);
    } catch (error) {
      throw error;
    }
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return this.policialService.removePolicialViatura(+id);
    } catch (error) {
      throw error;
    }
  }
}