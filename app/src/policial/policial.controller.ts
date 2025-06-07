import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards, Req } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { PolicialService } from './policial.service';
import { UsuarioService } from '../usuario/usuario.service';
import { CreatePolicialDto } from './dto/create-policial.dto';
import { UpdatePolicialDto } from './dto/update-policial.dto';
import { ReplacePolicialDto } from './dto/replace-policial.dto';
import { JwtValidationGuard } from '../auth/jwt-validation.guard';
import { BadRequestException } from '@nestjs/common/exceptions/bad-request.exception';


@Controller('policial')
@ApiBearerAuth('JWT-auth')
@UseGuards(JwtValidationGuard)
export class PolicialController {
  constructor(
    private readonly policialService: PolicialService,
    private readonly usuarioService: UsuarioService,
  ) {}

  @Post()
  async create(@Body() createPolicialDto: CreatePolicialDto, @Req() req: Request) {
    try {
      const token = req.headers['authorization'];
      const usuario = await this.usuarioService.buscarUsuarioPorId(createPolicialDto.id_pessoa, token);
      
      if (usuario.error) throw new BadRequestException('Usuario não encontrada');

      return this.policialService.createPolicial(createPolicialDto);
    } catch (error) {
      throw error;
    }
  }

  @Get()
  findAll() {
    try {
      return this.policialService.findAllPolicial();
    } catch (error) {
      throw error;
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
    return this.policialService.findOnePolicial(+id);
    } catch (error) {
      throw error;
    }
  }

  @Patch(':id')
  updatePartial(@Param('id') id: string, @Body() updatePolicialDto: UpdatePolicialDto) {
    try {
    return this.policialService.updatePolicial(+id, updatePolicialDto);
    } catch (error) {
      throw error;
    }
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() replacePolicialDto: ReplacePolicialDto) {
  try {
    return this.policialService.updatePolicial(+id, replacePolicialDto);
    } catch (error) {
      throw error;
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
    return this.policialService.removePolicial(+id);
    } catch (error) {
      throw error;
    }
  }

  @Get('ativos')
  async getPoliciaisAtivos() {
    return this.policialService.getPoliciaisAtivos();
  }

  @Get('posto/:idPosto')
  async findByPosto(@Param('idPosto') idPosto: string) {
    return this.policialService.getPoliciaisByFkPosto(+idPosto);
  }

  @Patch(':id/posto/:idPosto')
  addPostoPolicial(
  @Param('id') id: string,
  @Param('idPosto') idPosto: string) {
    try {
    return this.policialService.addPostoPolicial(+id, +idPosto);
    } catch (error) {
      throw error;
    }
  }
  
}