import { Controller, Get, Post, Body, Patch, Param, Delete, Put, ParseIntPipe , UseGuards, Query} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtValidationGuard } from '../auth/jwt-validation.guard';
import { RotaService } from './rota.service';
import { CreateRotaDto } from './dto/create-rota.dto';
import { UpdateRotaDto } from './dto/update-rota.dto';
import { ReplaceRotaDto } from './dto/replace-rota.dto'
import { GetMaisProximoDto } from './dto/get-mais-proximo.dto';
import { BuscarTodasRotasDto } from './dto/buscar-todas-rota.dto';

@Controller('rota')
@ApiBearerAuth('JWT-auth')
@UseGuards(JwtValidationGuard)
export class RotaController {
  constructor(private readonly rotaService: RotaService) {}

  @Post()
  create(@Body() createRotaDto: CreateRotaDto) {
    try {
      return this.rotaService.create(createRotaDto);
    } catch (error) {
      throw error;
    }
  }

  @Get()
  findAll(@Query() filtros: BuscarTodasRotasDto) {
    try {
      return this.rotaService.findAll(filtros);
    } catch (error) {
      throw error;
    }
  }

  @Get('mais-proxima')
  async buscarMaisProxima(@Query() localizacaoDto: GetMaisProximoDto) {
    try {
      return this.rotaService.buscarViaturaMaisProxima(localizacaoDto);
    } catch (error) {
      throw error;
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.rotaService.findOne(+id);
    } catch (error) {
      throw error;
    }
  }

  @Patch(':id')
  updatePartial(@Param('id', ParseIntPipe) id: string, @Body() updateRotaDto: UpdateRotaDto) {
    try {
      return this.rotaService.update(+id, updateRotaDto);
    } catch (error) {
      throw error;
    }
  }

  @Put(':id')
  updateReplace(@Param('id', ParseIntPipe) id: string, @Body() replaceRotaDto: ReplaceRotaDto) {
    try {
      return this.rotaService.update(+id, replaceRotaDto);
    } catch (error) {
      throw error;
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return this.rotaService.remove(+id);
    } catch (error) {
      throw error;
    }
  }
}
