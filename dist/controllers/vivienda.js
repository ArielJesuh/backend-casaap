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
exports.updateVivienda = exports.deleteVivienda = exports.getViviendas = exports.postVivienda = exports.getVivienda = void 0;
const vivienda_1 = __importDefault(require("../models/vivienda"));
const comuna_1 = __importDefault(require("../models/comuna"));
const getVivienda = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const vivienda = yield vivienda_1.default.findByPk(id, {
            include: [{
                    model: comuna_1.default,
                    as: 'comuna'
                }]
        });
        if (vivienda) {
            return res.json(vivienda);
        }
        else {
            res.status(404).json({
                msg: `No existe la Vivienda con id ${id}`
            });
        }
    }
    catch (error) {
        res.status(500).json({
            msg: 'Error en la consulta de viviendas'
        });
    }
});
exports.getVivienda = getVivienda;
const postVivienda = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { titulo, descripcion, direccion, cantidad_habitaciones, cantidad_banos, metros_cuadrados, valor_uf, url_imagen, comuna_id_comuna, inmobiliario_id_inmobiliario } = req.body;
    console.log(req.body);
    const vivienda = yield vivienda_1.default.findOne({ where: { direccion: direccion } });
    if (vivienda) {
        res.status(400).json({
            msg: `Vivienda ${direccion} ya existe!`
        });
    }
    else {
        try {
            yield vivienda_1.default.create({
                titulo: titulo,
                direccion: direccion,
                cantidad_habitaciones: cantidad_habitaciones,
                cantidad_banos: cantidad_banos,
                metros_cuadrados: metros_cuadrados,
                valor_uf: valor_uf,
                descripcion: descripcion,
                url_imagen: url_imagen,
                comuna_id_comuna: comuna_id_comuna,
                inmobiliario_id_inmobiliario: inmobiliario_id_inmobiliario
            });
            console.log(req);
            res.json({
                msg: `Vivienda ${direccion} agregado!`
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
exports.postVivienda = postVivienda;
const getViviendas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listViviendas = yield vivienda_1.default.findAll({
            include: [
                {
                    model: comuna_1.default,
                    as: 'comuna',
                }
            ]
        });
        res.json(listViviendas);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Error en la consulta de viviendas'
        });
    }
});
exports.getViviendas = getViviendas;
const deleteVivienda = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const vivienda = yield vivienda_1.default.findByPk(id);
    if (!vivienda) {
        res.status(404).json({
            msg: `No existe el usuario de id:  ${id}`
        });
    }
    else {
        yield vivienda.destroy();
        res.json({
            msg: "vivienda eleminado!"
        });
        return;
    }
    res.json({
        msg: 'delete Vivienda',
        id: id
    });
});
exports.deleteVivienda = deleteVivienda;
const updateVivienda = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    var { body } = req;
    try {
        var vivienda = yield vivienda_1.default.findByPk(id);
        if (vivienda) {
            yield vivienda.update(body);
            vivienda.update(vivienda);
            res.json({
                msg: 'Vivienda actualizado'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe el usuario de id:  ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'A ocurrido un error!'
        });
    }
});
exports.updateVivienda = updateVivienda;
