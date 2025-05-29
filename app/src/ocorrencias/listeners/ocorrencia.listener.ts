import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter'
import { Ocorrencia } from '../entities/ocorrencia.entity'
import { EmailService } from '../../email/email.service'
import { RotaService } from '../../rota/rota.service'

@Injectable()
export class OcorrenciaListener {

  constructor(
    private readonly rotaService: RotaService,
    private readonly emailService: EmailService
  ) {}

  @OnEvent('ocorrencia.criada')
  async handleOcorrenciaCriada(ocorrencia: Ocorrencia) {

    const rotasProximas = await this.rotaService.buscarViaturaMaisProxima({
      latitude: ocorrencia.dataValues.latitude,
      longitude: ocorrencia.dataValues.longitude,
    });

    for (const rota of rotasProximas) {
      await this.emailService.enviarEmail(
        'gabriel.drbastos@gmail.com',
        'Nova ocorrência próxima',
        `Descrição: ${ocorrencia.dataValues.descricao}`
      );
    }

  }
}