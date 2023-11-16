"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../db/connection"));
const sequelize_1 = require("sequelize");
const vivienda_1 = __importDefault(require("./vivienda"));
const Inmobiliario = connection_1.default.define('inmobiliario', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    usuario_id_usuario: {
        type: sequelize_1.DataTypes.NUMBER
    },
}, {
    createdAt: false,
    updatedAt: false
});
Inmobiliario.hasMany(vivienda_1.default, {
    foreignKey: 'inmobiliario_id_inmobiliario',
    sourceKey: 'id'
});
vivienda_1.default.belongsTo(Inmobiliario, {
    foreignKey: 'inmobiliario_id_inmobiliario',
    sourceKey: 'id'
});
exports.default = Inmobiliario;
