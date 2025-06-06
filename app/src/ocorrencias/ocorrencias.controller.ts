import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  HttpStatus,
  HttpCode,
  Query,
  ParseFloatPipe,
  ParseEnumPipe,
  Req,
  UseGuards
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { OcorrenciasService } from './ocorrencias.service';
import { CreateOcorrenciaDto } from './dto/create-ocorrencia.dto';
import { UpdateOcorrenciaDto } from './dto/update-ocorrencia.dto';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { StatusOcorrencia, TipoOcorrencia } from './enums/ocorrencia.enum';
import { JwtValidationGuard } from '../auth/jwt-validation.guard';

@ApiBearerAuth('JWT-auth')
@UseGuards(JwtValidationGuard)
@ApiTags('Ocorrências')
@Controller('ocorrencias')
export class OcorrenciasController {
  constructor(private readonly ocorrenciasService: OcorrenciasService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Ocorrência criada com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  async create(@Body() createOcorrenciaDto: CreateOcorrenciaDto, @Req() req: Request) {
    const token = req.headers['authorization'];
    return this.ocorrenciasService.create(createOcorrenciaDto, token);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Lista de ocorrências retornada.' })
  async findAll() {
    return this.ocorrenciasService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Ocorrência encontrada.' })
  @ApiResponse({ status: 404, description: 'Ocorrência não encontrada.' })
  async findOne(@Param('id') id: string) {
    return this.ocorrenciasService.findOne(+id);
  }

  @Put(':id')
  @ApiResponse({ status: 200, description: 'Ocorrência atualizada.' })
  @ApiResponse({ status: 404, description: 'Ocorrência não encontrada.' })
  async update(
    @Param('id') id: string,
    @Body() updateOcorrenciaDto: UpdateOcorrenciaDto,
  ) {
    return this.ocorrenciasService.update(+id, updateOcorrenciaDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiResponse({ status: 204, description: 'Ocorrência removida.' })
  @ApiResponse({ status: 404, description: 'Ocorrência não encontrada.' })
  async remove(@Param('id') id: string) {
    await this.ocorrenciasService.remove(+id);
  }

  @Patch(':id/atribuir-pessoa')
  @ApiResponse({ status: 200, description: 'Pessoa atribuída à ocorrência.' })
  async atribuirPessoa(
    @Param('id') id: string,
    @Body('pessoaId') pessoaId: number,
  ) {
    return this.ocorrenciasService.atribuirPessoa(+id, pessoaId);
  }

  @Patch(':id/status')
  @ApiResponse({ status: 200, description: 'Status atualizado.' })
  async mudarStatus(
    @Param('id') id: string,
    @Body('id_status_ocorrencia', new ParseEnumPipe(StatusOcorrencia)) statusId: StatusOcorrencia,
  ) {
    return this.ocorrenciasService.mudarStatusOcorrencia(+id, statusId);
  }

  @Get('finalizadas')
  async findFinalizadas() {
    return this.ocorrenciasService.findOcorrenciasFinalizadas();
  }

  @Get('nao-finalizadas')
  async findNaoFinalizadas() {
    return this.ocorrenciasService.findOcorrenciasNaoFinalizadas();
  }

  @Get('tipo/:tipo')
  async findByTipo(
    @Param('tipo', new ParseEnumPipe(TipoOcorrencia)) tipo: TipoOcorrencia
  ) {
    return this.ocorrenciasService.findOcorrenciasPorTipo(tipo);
  }

  @Get('descricao/:descricao')
  async findByDescricao(@Param('descricao') descricao: string) {
    return this.ocorrenciasService.findOcorrenciasPorDescricao(descricao);
  }

  @Get('periodo')
  async findByPeriodo(
    @Query('inicio') inicio: string,
    @Query('fim') fim: string,
  ) {
    const dataInicio = new Date(inicio);
    const dataFim = new Date(fim);
    return this.ocorrenciasService.findOcorrenciasPorDataInicioFim(
      dataInicio,
      dataFim,
    );
  }

  @Get('proximas')
  @ApiOperation({
    summary: 'Busca ocorrências próximas a uma coordenada',
    description: 'Retorna ocorrências em um raio específico (em km) a partir de uma latitude/longitude.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Lista de ocorrências encontradas no raio.',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Parâmetros inválidos (ex: raio negativo, coordenadas fora do intervalo).',
  })
  async buscarProximas(
    @Query('lat', new ParseFloatPipe()) latitude: number,
    @Query('long', new ParseFloatPipe()) longitude: number,
    @Query('raio', new ParseFloatPipe()) raioKm: number,
  ) {
    return this.ocorrenciasService.buscarOcorrenciasProximas(latitude, longitude, raioKm);
  }
}
