import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ViaturaService } from './viatura.service';
import { CreateViaturaDto } from './dto/create-viatura.dto';
import { UpdateViaturaDto } from './dto/update-viatura.dto';

@Controller('viatura')
export class ViaturaController {
  constructor(private readonly viaturaService: ViaturaService) {}

  @Post()
  create(@Body() createViaturaDto: CreateViaturaDto) {
    return this.viaturaService.create(createViaturaDto);
  }

  @Get()
  findAll() {
    return this.viaturaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.viaturaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateViaturaDto: UpdateViaturaDto) {
    return this.viaturaService.update(+id, updateViaturaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.viaturaService.remove(+id);
  }
}
