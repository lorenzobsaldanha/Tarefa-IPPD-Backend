import { NomeDoModuloService } from './nome-do-modulo.service';
import { CreateNomeDoModuloDto } from './dto/create-nome-do-modulo.dto';
import { UpdateNomeDoModuloDto } from './dto/update-nome-do-modulo.dto';
export declare class NomeDoModuloController {
    private readonly nomeDoModuloService;
    constructor(nomeDoModuloService: NomeDoModuloService);
    create(createNomeDoModuloDto: CreateNomeDoModuloDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateNomeDoModuloDto: UpdateNomeDoModuloDto): string;
    remove(id: string): string;
}
