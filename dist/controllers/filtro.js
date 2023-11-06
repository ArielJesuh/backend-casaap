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
const usuario_1 = __importDefault(require("../models/usuario"));
const getFiltroByUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_user } = req.params;
    try {
        const filtro = yield filtro_1.default.findOne({ where: { usuario_id_usuario: id_user } });
        if (filtro) {
            res.json(filtro);
        }
        else {
            res.status(404).json({
                msg: `Este usuario no tiene un filtro guardado`
            });
        }
    }
    catch (error) {
        res.status(500).json({
            msg: 'Error en la consulta de filtros'
        });
    }
});
exports.getFiltroByUsuario = getFiltroByUsuario;
const deleteFiltro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const filtro = yield filtro_1.default.findByPk(id);
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
});
exports.deleteFiltro = deleteFiltro;
const postFiltro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { cantidad_habitaciones, cantidad_banos, max_valor, min_valor, comuna_id, usuario_id } = req.body;
    if (usuario_id === undefined) {
        res.status(400).json({
            msg: 'El campo usuario_id es obligatorio en el cuerpo de la solicitud.',
            body: req.body
        });
        return;
    }
    const usuario = yield usuario_1.default.findByPk(usuario_id);
    if (!usuario) {
        res.status(404).json({
            msg: `No existe el usuario de id: ${usuario_id}`
        });
    }
    else {
        const filtro = yield filtro_1.default.findOne({ where: { usuario_id_usuario: usuario_id } });
        if (filtro) {
            yield filtro.update(req.body);
            res.json({
                msg: 'Filtro actualizado'
            });
        }
        else {
            try {
                yield filtro_1.default.create(req.body);
                res.json({
                    msg: `Filtro agregado`
                });
            }
            catch (error) {
                console.log(error);
                res.json({
                    msg: 'A ocurrido un error!',
                    body: req.body
                });
            }
        }
    }
});
exports.postFiltro = postFiltro;
