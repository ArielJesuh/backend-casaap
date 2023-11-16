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
exports.getInmobiliario = exports.getInmobiliarios = void 0;
const inmobiliario_1 = __importDefault(require("../models/inmobiliario"));
const getInmobiliarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listInmobiliarios = yield inmobiliario_1.default.findAll();
    res.json(listInmobiliarios);
});
exports.getInmobiliarios = getInmobiliarios;
const getInmobiliario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const inmobiliario = yield inmobiliario_1.default.findByPk(id);
    if (inmobiliario) {
        return res.json(inmobiliario);
    }
    else {
        res.status(404).json({
            msg: `No existe el inmobiliario de id:  ${id}`
        });
    }
    res.json({
        msg: 'get inmobiliario',
        id: id
    });
});
exports.getInmobiliario = getInmobiliario;
