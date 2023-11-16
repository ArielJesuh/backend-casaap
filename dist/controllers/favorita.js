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
exports.deleteFavorita = exports.postFavorita = void 0;
const favorita_1 = __importDefault(require("../models/favorita"));
const postFavorita = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { usuario_id_usuario, vivienda_id_vivienda } = req.body;
    try {
        yield favorita_1.default.create({
            usuario_id_usuario: usuario_id_usuario,
            vivienda_id_vivienda: vivienda_id_vivienda
        });
        console.log(req);
        res.json({
            msg: `Vivienda agregada a favoritas!`
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'A ocurrido un error!'
        });
    }
});
exports.postFavorita = postFavorita;
const deleteFavorita = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idUser, idVivienda } = req.params;
    const favorita = yield favorita_1.default.findOne({
        where: {
            usuario_id_usuario: idUser,
            vivienda_id_vivienda: idVivienda
        }
    });
    if (!favorita) {
        res.status(404).json({
            msg: `No existe vivienda favorita`
        });
    }
    else {
        yield favorita.destroy();
        res.json({
            msg: "favorita eleminado!"
        });
        return;
    }
    res.json({
        msg: 'delete Favorita'
    });
});
exports.deleteFavorita = deleteFavorita;
