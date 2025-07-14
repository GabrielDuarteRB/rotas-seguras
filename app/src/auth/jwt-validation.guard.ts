import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UserValidateInterface } from './interface/user-validate.interface';

@Injectable()
export class JwtValidationGuard implements CanActivate {

  constructor(private readonly configService: ConfigService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const token = req.headers.authorization;

    if (!token || !token.startsWith('Bearer ')) {
      throw new UnauthorizedException('Token ausente ou inválido');
    }

     const userServiceUrl = this.configService.get<string>('USER_SERVICE_URL');

    try {
      const autorizado : UserValidateInterface = await fetch(`${userServiceUrl}/auth/validate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
        }
      }).then(response => response.json()).catch(error => {
        console.error('Erro ao validar token:', error);
        throw new UnauthorizedException('Erro ao validar token');
      });

      if (!autorizado.valid) {
        throw new UnauthorizedException('Token inválido');
      }

      req['usuario'] = autorizado.user || null;
      return true;

    } catch (error) {
      throw new UnauthorizedException('Token inválido ou expirado');
    }
  }


}