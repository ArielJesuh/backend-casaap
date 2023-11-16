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
exports.getRegiones = exports.getRegion = void 0;
const region_1 = __importDefault(require("../models/region"));
const getRegion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const region = yield region_1.default.findByPk(id);
        if (region) {
            return res.json(region);
        }
        else {
            res.status(404).json({
                msg: `No existe la Comuna con id ${id}`
            });
        }
    }
    catch (error) {
        res.status(500).json({
            msg: 'Error en la consulta de comunas'
        });
    }
});
exports.getRegion = getRegion;
const getRegiones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listRegions = yield region_1.default.findAll();
        res.json(listRegions);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Error en la consulta de comunas'
        });
    }
});
exports.getRegiones = getRegiones;
