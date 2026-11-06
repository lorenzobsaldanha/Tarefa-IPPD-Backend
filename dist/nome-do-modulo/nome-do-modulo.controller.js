"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NomeDoModuloController = void 0;
const common_1 = require("@nestjs/common");
const nome_do_modulo_service_1 = require("./nome-do-modulo.service");
const create_nome_do_modulo_dto_1 = require("./dto/create-nome-do-modulo.dto");
const update_nome_do_modulo_dto_1 = require("./dto/update-nome-do-modulo.dto");
let NomeDoModuloController = class NomeDoModuloController {
    nomeDoModuloService;
    constructor(nomeDoModuloService) {
        this.nomeDoModuloService = nomeDoModuloService;
    }
    create(createNomeDoModuloDto) {
        return this.nomeDoModuloService.create(createNomeDoModuloDto);
    }
    findAll() {
        return this.nomeDoModuloService.findAll();
    }
    findOne(id) {
        return this.nomeDoModuloService.findOne(+id);
    }
    update(id, updateNomeDoModuloDto) {
        return this.nomeDoModuloService.update(+id, updateNomeDoModuloDto);
    }
    remove(id) {
        return this.nomeDoModuloService.remove(+id);
    }
};
exports.NomeDoModuloController = NomeDoModuloController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_nome_do_modulo_dto_1.CreateNomeDoModuloDto]),
    __metadata("design:returntype", void 0)
], NomeDoModuloController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NomeDoModuloController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NomeDoModuloController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_nome_do_modulo_dto_1.UpdateNomeDoModuloDto]),
    __metadata("design:returntype", void 0)
], NomeDoModuloController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NomeDoModuloController.prototype, "remove", null);
exports.NomeDoModuloController = NomeDoModuloController = __decorate([
    (0, common_1.Controller)('nome-do-modulo'),
    __metadata("design:paramtypes", [nome_do_modulo_service_1.NomeDoModuloService])
], NomeDoModuloController);
//# sourceMappingURL=nome-do-modulo.controller.js.map