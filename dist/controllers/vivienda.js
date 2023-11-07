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
exports.getViviendas = exports.getVivienda = void 0;
const vivienda_1 = __importDefault(require("../models/vivienda"));
const getVivienda = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const vivienda = yield vivienda_1.default.findByPk(id);
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
const getViviendas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listViviendas = yield vivienda_1.default.findAll();
        res.json(listViviendas);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Error en la consulta de viviendas'
        });
    }
});
exports.getViviendas = getViviendas;
