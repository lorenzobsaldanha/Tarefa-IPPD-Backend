import { Module } from '@nestjs/common';
import { NomeDoModuloService } from './nome-do-modulo.service';
import { NomeDoModuloController } from './nome-do-modulo.controller';

@Module({
  controllers: [NomeDoModuloController],
  providers: [NomeDoModuloService],
})
export class NomeDoModuloModule {}
