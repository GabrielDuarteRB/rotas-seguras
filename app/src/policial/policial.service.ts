import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePolicialDto } from './dto/create-policial.dto';
import { UpdatePolicialDto } from './dto/update-policial.dto';
import { CreatePolicialViaturaDto } from './dto/create-policial-viatura.dto';
import { UpdatePolicialViaturaDto } from './dto/update-policial-viatura.dto';
import { CreatePostoPolicialDto } from './dto/create-posto-policial.dto';
import { UpdatePostoPolicialDto } from './dto/update-posto-policial.dto';
import { PolicialRepository } from './policial.repository';

@Injectable()
export class PolicialService {
  constructor(private readonly policialRepository: PolicialRepository) {}

  createPolicial(createPolicialDto: CreatePolicialDto) {
    return this.policialRepository.createPolicial(createPolicialDto);
  }

  findAllPolicial() {
    return this.policialRepository.findAllPolicial();
  }

  async findOnePolicial(id: number) {
    const policial = await this.policialRepository.findByIdPolicial(id);
    if (!policial) {
      throw new NotFoundException(`Policial com matrícula ${id} não encontrado`);
    }
    return policial;
  }

  async updatePolicial(id: number, updatePolicialDto: UpdatePolicialDto) {
    const [linhasAfetadas, policial] = await this.policialRepository.updatePolicial(id, updatePolicialDto);
    if (linhasAfetadas === 0) {
      throw new NotFoundException(`Policial com matrícula ${id} não encontrado`);
    }

    return policial[0];
  }

  async removePolicial(id: number) {
    const deletado = await this.policialRepository.removePolicial(id);

    if (!deletado) {
      throw new NotFoundException(`Policial com matrícula ${id} não encontrado`);
    }
    return deletado;
  }

  async getPoliciaisAtivos() {
    return this.policialRepository.getPoliciaisAtivos();
  }

  getPoliciaisByFkPosto(idPosto: number) {
    return this.policialRepository.getPoliciaisByFkPosto(idPosto);
  }

  async addPostoPolicial(id: number, idPosto: number) {
    const policial = await this.policialRepository.findByIdPolicial(id);
    
    if (!policial) {
      throw new NotFoundException(`Policial com matrícula ${id} não encontrado`);
    }
    const posto = await this.policialRepository.findByIdPostoPolicial(idPosto);
    
    if (!posto) {
      throw new NotFoundException(`Posto Policial com id ${idPosto} não encontrado`);
    }
    const [linhasAfetadas, [policialAtualizado]] =
      await this.policialRepository.updatePolicial(id, { posto: idPosto });
    
      if (linhasAfetadas === 0) {
        throw new NotFoundException(`Erro ao atualizar o posto do policial com id ${id}`);
      }
    return policialAtualizado;
  }

  createPostoPolicial(createPostoPolicialDto: CreatePostoPolicialDto) {
    return this.policialRepository.createPostoPolicial(createPostoPolicialDto);
  }

  findAllPostoPolicial() {
    return this.policialRepository.findAllPostoPolicial();
  }

  async findByIdPostoPolicial(id: number) {
    const postoPolicial = await this.policialRepository.findByIdPostoPolicial(id);
    if (!postoPolicial) {
      throw new NotFoundException(`Posto Policial com id ${id} não encontrado`);
    }
    return postoPolicial;
  }

  async updatePostoPolicial(id: number, updatePolicialDto: UpdatePostoPolicialDto) {
    const [linhasAfetadas, postoPolicial] = await this.policialRepository.updatePostoPolicial(id, updatePolicialDto);
  
    if (linhasAfetadas === 0) {
      throw new NotFoundException(`Posto Policial com id ${id} não encontrado`);
    }

    return postoPolicial[0];
  }

  async removePostoPolicial(id: number) {
    const deletado = await this.policialRepository.removePostoPolicial(id);
   
    if (!deletado) {
      throw new NotFoundException(`Posto Policial com id ${id} não encontrado`);
    }
    return deletado;
  }

  findAllPolicialViatura() {
    return this.policialRepository.findAllPolicialViatura();
  }

  createPolicialViatura(createPolicialViaturaDto: CreatePolicialViaturaDto) {
    return this.policialRepository.createPolicialViatura(createPolicialViaturaDto);
  }

  async findByIdPolicialViatura(id: number) {
    const policialViatura = await this.policialRepository.findByIdPolicialViatura(id);

    if (!policialViatura) {
      throw new NotFoundException(`Policial Viatura com id ${id} não encontrada`);
    }

    return policialViatura;
  }

  async updatePolicialViatura(id: number, updatePolicialViaturaDto: UpdatePolicialViaturaDto) {
    const [linhasAfetadas, policialViatura] = await this.policialRepository.updatePolicialViatura(id, updatePolicialViaturaDto);

    if (linhasAfetadas === 0) {
      throw new NotFoundException(`Policial Viatura com id ${id} não encontrada`);
    }

    return policialViatura[0];
  }

  async removePolicialViatura(id: number) {
    const deletado =  await this.policialRepository.removePolicialViatura(id);

    if (!deletado) {
      throw new NotFoundException(`Policia Viatura com id ${id} não encontrada`);
    }

    return deletado;
  }
}