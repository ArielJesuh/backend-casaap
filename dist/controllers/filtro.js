"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postFiltro = exports.deleteFiltro = exports.getFiltroByUsuario = void 0;
const filtro_1 = __importDefault(require("../models/filtro"));
const getFiltroByUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_user } = req.params;
    const filtro = yield filtro_1.default.findOne({ where: { usuario_id_usuario: id_user } });
    if (filtro) {
        res.json(filtro);
    }
    else {
        res.status(404).json({
            msg: `Este usuario no tiene un filtro guardado`
        });
    }
    res.json({
        msg: 'get Filtro',
        id: id_user
    });
});
exports.getFiltroByUsuario = getFiltroByUsuario;
const deleteFiltro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const filtro = yield filtro_1.default.findByPk({ where: { id } });
    if (!filtro) {
        res.status(404).json({
            msg: `No existe el filtro de id:  ${id}`
        });
    }
    else {
        yield filtro.destroy();
        res.json({
            msg: "Filtro eleminado!"
        });
    }
    res.json({
        msg: 'delete  Filtro',
        id: id
    });
});
exports.deleteFiltro = deleteFiltro;
const postFiltro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { cantidad_habitaciones, cantidad_banos, max_valor, min_valor, comuna_id, usuario_id } = req.body;
    const filtro = yield filtro_1.default.findOne({ where: { usuario_id_usuario: usuario_id } });
    if (filtro) {
        yield filtro.update(req.body);
        res.json({
            msg: 'Filtro actualizado'
        });
    }
    else {
        try {
            yield filtro_1.default.create({
                cantidad_habitaciones: cantidad_habitaciones,
                cantidad_banos: cantidad_banos,
                max_valor: max_valor,
                min_valor: min_valor,
                comuna_id: comuna_id,
                usuario_id: usuario_id
            });
            res.json({
                msg: `Filtro agregado`
            });
        }
        catch (error) {
            console.log(error);
            res.json({
                msg: 'A ocurrido un error!'
            });
        }
    }
});
exports.postFiltro = postFiltro;
