import { Injectable } from '@nestjs/common';
import { CreateNomeDoModuloDto } from './dto/create-nome-do-modulo.dto';
import { UpdateNomeDoModuloDto } from './dto/update-nome-do-modulo.dto';

@Injectable()
export class NomeDoModuloService {
  create(createNomeDoModuloDto: CreateNomeDoModuloDto) {
    return 'This action adds a new nomeDoModulo';
  }

  findAll() {
    return `This action returns all nomeDoModulo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nomeDoModulo`;
  }

  update(id: number, updateNomeDoModuloDto: UpdateNomeDoModuloDto) {
    return `This action updates a #${id} nomeDoModulo`;
  }

  remove(id: number) {
    return `This action removes a #${id} nomeDoModulo`;
  }
}
