import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PolicialService } from './policial.service';
import { CreatePolicialDto } from './dto/create-policial.dto';
import { UpdatePolicialDto } from './dto/update-policial.dto';

@Controller('policial')
export class PolicialController {
  constructor(private readonly policialService: PolicialService) {}

  @Post()
  create(@Body() createPolicialDto: CreatePolicialDto) {
    return this.policialService.create(createPolicialDto);
  }

  @Get()
  findAll() {
    return this.policialService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.policialService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePolicialDto: UpdatePolicialDto) {
    return this.policialService.update(+id, updatePolicialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.policialService.remove(+id);
  }
}
