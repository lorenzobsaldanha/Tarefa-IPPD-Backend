import { CreateNomeDoModuloDto } from './dto/create-nome-do-modulo.dto';
import { UpdateNomeDoModuloDto } from './dto/update-nome-do-modulo.dto';
export declare class NomeDoModuloService {
    create(createNomeDoModuloDto: CreateNomeDoModuloDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateNomeDoModuloDto: UpdateNomeDoModuloDto): string;
    remove(id: number): string;
}
