import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsuarioRepository {
  private readonly usuarioURL: string;

  constructor(
    private readonly configService: ConfigService
  ) {
    this.usuarioURL = this.configService.get<string>('USER_SERVICE_URL') || 'http://localhost:3001';
  }

  async buscarUsuarioPorId(id: number, token: string) {

    const usuario = await  fetch(`${this.usuarioURL}/usuarios/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    })

    return usuario.json();
  }
}
