import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NomeDoModuloService } from './nome-do-modulo.service';
import { CreateNomeDoModuloDto } from './dto/create-nome-do-modulo.dto';
import { UpdateNomeDoModuloDto } from './dto/update-nome-do-modulo.dto';

@Controller('nome-do-modulo')
export class NomeDoModuloController {
  constructor(private readonly nomeDoModuloService: NomeDoModuloService) {}

  @Post()
  create(@Body() createNomeDoModuloDto: CreateNomeDoModuloDto) {
    return this.nomeDoModuloService.create(createNomeDoModuloDto);
  }

  @Get()
  findAll() {
    return this.nomeDoModuloService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nomeDoModuloService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNomeDoModuloDto: UpdateNomeDoModuloDto) {
    return this.nomeDoModuloService.update(+id, updateNomeDoModuloDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nomeDoModuloService.remove(+id);
  }
}
