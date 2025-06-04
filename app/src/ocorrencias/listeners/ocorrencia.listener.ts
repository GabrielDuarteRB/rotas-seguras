import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter'
import { Ocorrencia } from '../entities/ocorrencia.entity'
import { EmailService } from '../../email/email.service'
import { RotaService } from '../../rota/rota.service'
import { UsuarioService } from '../../usuario/usuario.service'
import { StatusOcorrencia, TipoOcorrencia } from '../enums/ocorrencia.enum'

@Injectable()
export class OcorrenciaListener {

  constructor(
    private readonly rotaService: RotaService,
    private readonly emailService: EmailService,
    private readonly usuarioService: UsuarioService
  ) {}

  @OnEvent('ocorrencia.criada')
  async handleOcorrenciaCriada(dados: { ocorrencia: Ocorrencia, token: string }) {
    const ocorrencia = dados.ocorrencia;
    const token = dados.token;

    const rotasProximas = await this.rotaService.buscarViaturaMaisProxima({
      latitude: ocorrencia.dataValues.latitude,
      longitude: ocorrencia.dataValues.longitude,
    });

    const statusTexto = StatusOcorrencia[ocorrencia.dataValues.id_status_ocorrencia];
    const tipoTexto = TipoOcorrencia[ocorrencia.dataValues.id_tipo_ocorrencia];

    for (const rota of rotasProximas) {
      const pessoa_id = rota.dataValues.policial_viatura.dataValues.policial.dataValues.id_pessoa

      const usuario = await this.usuarioService.buscarUsuarioPorId(pessoa_id, token);

      const corpoDoTexto = `Informações da ocorrência:
      ID: ${ocorrencia.dataValues.id_ocorrencia}
      Latitude: ${ocorrencia.dataValues.latitude}
      Descrição: '${ocorrencia.dataValues.descricao}
      Longitude: ${ocorrencia.dataValues.longitude}
      Tipo de ocorrencia: ${tipoTexto}
      Status: ${statusTexto}
      `;

      await this.emailService.enviarEmail(
        usuario.email,
        'Nova ocorrência próxima',
        corpoDoTexto
      );
    }

  }
}