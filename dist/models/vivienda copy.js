"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../db/connection"));
const sequelize_1 = require("sequelize");
const Vivienda = connection_1.default.define('vivienda', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    titulo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    direccion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    cantidad_habitaciones: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    cantidad_banos: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    metros_cuadrados: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    valor_uf: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    url_imagen: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    comuna_id_comuna: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    inmobiliario_id_inmobiliario: {
        type: sequelize_1.DataTypes.INTEGER,
    }
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Vivienda;
