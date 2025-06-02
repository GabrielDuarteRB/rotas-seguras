
import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('API de Ocorrências')
  .setDescription('Sistema de gerenciamento de ocorrências policiais')
  .setVersion('1.0')
  .addTag('ocorrencias', 'Operações relacionadas a ocorrências')
  .addTag('autenticacao', 'Autenticação de usuários')
  .addBearerAuth(
    {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      description: 'Insira o token JWT no formato: Bearer <token>'
    },
    'JWT-auth',
  )
  .setContact('Suporte', 'https://suporte.suaapi.com', 'suporte@suaapi.com')
  .setLicense('MIT', 'https://opensource.org/licenses/MIT')
  .addServer('http://localhost:3000', 'Ambiente de Desenvolvimento')
  .build();