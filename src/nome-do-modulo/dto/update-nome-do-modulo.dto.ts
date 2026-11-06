import { PartialType } from '@nestjs/mapped-types';
import { CreateNomeDoModuloDto } from './create-nome-do-modulo.dto';

export class UpdateNomeDoModuloDto extends PartialType(CreateNomeDoModuloDto) {}
