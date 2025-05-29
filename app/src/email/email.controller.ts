import { Controller, Get } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Get('teste')
  async testeEmail() {
    await this.emailService.enviarEmail('gabriel.drbastos@gmail.com', 'Teste de envio de email', 'Este é um teste de envio de email usando o NestJS e Nodemailer.');
    return 'Email enviado!';
  }
}
