import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioRepository } from './usuario.repository';

@Module({
  providers: [UsuarioService, UsuarioRepository],
  exports: [UsuarioService],
})
export class UsuarioModule {}
