import { Injectable, ExecutionContext } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';

@Injectable()
export class UsuarioService {
  constructor(private readonly usuarioRepository: UsuarioRepository) {}

  async buscarUsuarioPorId(id: number, token: string) {
    return await this.usuarioRepository.buscarUsuarioPorId(id, token)
  }


}
