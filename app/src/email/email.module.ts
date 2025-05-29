import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: 'gabriel.drbastos@gmail.com',
          pass: 'ovpu ilry zlyz pukk',
        },
      },
      defaults: {
        from: '"Seu Nome" <gabriel.drbastos@gmail.com>',
      }
    }),
  ],
  providers: [EmailService],
  controllers: [EmailController],
  exports: [EmailService],
})
export class EmailModule {}
