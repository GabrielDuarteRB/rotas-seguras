import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  async enviarEmail(to: string, subject: string, text: string) {

    await this.mailerService.sendMail({
      to,
      subject,
      text,
    });

  }
}