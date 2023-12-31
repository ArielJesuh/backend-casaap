"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../db/connection"));
const sequelize_1 = require("sequelize");
const Filtro = connection_1.default.define('filtro', {
    cantidad_habitaciones: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: true, // Permite nulos para cantidad_habitaciones
    },
    cantidad_banos: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: true, // Permite nulos para cantidad_banos
    },
    max_valor: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: true, // Permite nulos para max_valor
    },
    min_valor: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: true, // Permite nulos para min_valor
    },
    comuna_id_comuna: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: true, // Permite nulos para comuna_id_comuna
    },
    usuario_id_usuario: {
        type: sequelize_1.DataTypes.NUMBER,
    }
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Filtro;
